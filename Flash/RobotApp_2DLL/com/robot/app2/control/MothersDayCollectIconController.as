package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.UserInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MothersDayCollectIconController
   {
      
      private static var _uInfo:UserInfo;
      
      private static var _target:MovieClip;
      
      private static var _tips:MovieClip;
      
      private static const MAX_COUNT:uint = 100;
       
      
      public function MothersDayCollectIconController()
      {
         super();
      }
      
      public static function onIconClick(param1:UserInfo, param2:MovieClip) : void
      {
         var uInfo:UserInfo = param1;
         var target:MovieClip = param2;
         _uInfo = uInfo;
         _target = target;
         ResourceManager.getResource(ClientConfig.getResPath("active/mothersDayCollectTips.swf"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            _tips = mc;
            if(uInfo.userID == MainManager.actorID)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("MothersDayCollectIconMainPanel"));
               return;
            }
            if(MainManager.actorInfo.foolsdayMask == 0)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("MothersDayCollectIconMainPanel"));
            }
            else
            {
               KTool.getOnlineUsersForeverOrDailyVal([uInfo.userID,4179],function(param1:uint):void
               {
                  var type:uint = param1;
                  uInfo.foolsdayMask = type;
                  _target = UserManager.getUserModel(uInfo.userID).showfoolsdayMask();
                  if(type != MainManager.actorInfo.foolsdayMask)
                  {
                     Alarm.show("他和你的图腾不同，快去收集相同图腾吧！");
                     return;
                  }
                  KTool.getForeverNum(4180,function(param1:uint):void
                  {
                     if(param1 < MAX_COUNT)
                     {
                        collectIcon();
                     }
                     else
                     {
                        Alarm.show("你的图腾已经集满了哦！");
                     }
                  });
               });
            }
         });
      }
      
      private static function collectIcon() : void
      {
         SocketConnection.sendWithCallback(CommandID.FOOLS_DAY_ACTIVE_3_GETMASK,function(param1:SocketEvent):void
         {
            var num:uint;
            var id:uint = 0;
            var frame:int = 0;
            var e:SocketEvent = param1;
            var data:ByteArray = e.data as ByteArray;
            data.position = 0;
            num = data.readUnsignedInt();
            if(num == 0)
            {
               _tips.gotoAndStop(3);
               LevelManager.stage.addChild(_tips);
               LevelManager.closeMouseEvent();
               id = setTimeout(function():void
               {
                  clearTimeout(id);
                  if(_tips)
                  {
                     TweenLite.to(_tips,2,{
                        "alpha":0,
                        "onComplete":function():void
                        {
                           DisplayUtil.removeForParent(_tips);
                           _tips = null;
                           LevelManager.openMouseEvent();
                        }
                     });
                  }
               },1000);
            }
            else
            {
               frame = _target.currentFrame;
               _target["mc" + frame].addFrameScript(_target["mc" + frame].totalFrames - 1,function():void
               {
                  if(_target != null)
                  {
                     _target["mc" + frame].addFrameScript(_target["mc" + frame].totalFrames - 1,null);
                     _target["mc" + frame].gotoAndStop(1);
                  }
               });
               _target["mc" + frame].gotoAndPlay(2);
               _tips.gotoAndStop(frame);
               LevelManager.stage.addChild(_tips);
               LevelManager.closeMouseEvent();
               id = setTimeout(function():void
               {
                  clearTimeout(id);
                  if(_tips)
                  {
                     TweenLite.to(_tips,2,{
                        "alpha":0,
                        "onComplete":function():void
                        {
                           DisplayUtil.removeForParent(_tips);
                           _tips = null;
                           LevelManager.openMouseEvent();
                        }
                     });
                  }
               },1000);
            }
         },_uInfo.userID,_uInfo.foolsdayMask);
      }
   }
}
