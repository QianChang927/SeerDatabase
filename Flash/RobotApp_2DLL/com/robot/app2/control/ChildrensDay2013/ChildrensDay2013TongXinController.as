package com.robot.app2.control.ChildrensDay2013
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class ChildrensDay2013TongXinController
   {
      
      public static var masksArray:Array = [];
      
      private static var getInfo:Boolean = false;
      
      private static var userIdArr:Array = [];
      
      private static var init:Boolean = false;
       
      
      public function ChildrensDay2013TongXinController()
      {
         super();
      }
      
      private static function checkMaskState() : void
      {
      }
      
      public static function clickfoolsdayMask(param1:int, param2:int) : Boolean
      {
         var userID:int = param1;
         var maskID:int = param2;
         if(!init)
         {
            init = true;
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap);
         }
         if(MainManager.actorInfo.foolsdayMask && MainManager.actorInfo.foolsdayMask == maskID && userID != MainManager.actorInfo.userID)
         {
            if(ItemManager.getNumByID(1400059) >= 61 && maskID == 1 || ItemManager.getNumByID(1400060) >= 61 && maskID == 2)
            {
               return false;
            }
            if(maskID > 2 || MainManager.actorInfo.foolsdayMask > 2)
            {
               return false;
            }
            if(userIdArr.indexOf(userID) != -1)
            {
               showAlreadyGetTip();
               return false;
            }
            if(maskID == 1)
            {
               SocketConnection.send(1022,86057969);
            }
            if(maskID == 2)
            {
               SocketConnection.send(1022,86057970);
            }
            SocketConnection.addCmdListener(CommandID.CHIDREN_DAY_TONG_XIN_GET,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(CommandID.CHIDREN_DAY_TONG_XIN_GET,arguments.callee);
            });
            SocketConnection.send(CommandID.CHIDREN_DAY_TONG_XIN_GET,maskID);
            userIdArr.push(userID);
            showGetItemTip();
            return true;
         }
         if(MainManager.actorInfo.foolsdayMask > 0 && MainManager.actorInfo.foolsdayMask != maskID)
         {
            if(maskID == 2)
            {
               Alarm.show("啊哦出错了。这是木木的笑脸，你现在需要收集派吉的童心能量哦");
            }
            if(maskID == 1)
            {
               Alarm.show("啊哦出错了。这是派吉的笑脸，你现在需要收集木木的童心能量哦");
            }
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ChildrensDay2013/ChildrensDay2013TongXinPanel"));
         }
         return false;
      }
      
      public static function onSwitchMap(param1:MapEvent) : void
      {
         userIdArr = [];
      }
      
      public static function showGetItemTip() : void
      {
         var mc:MovieClip = null;
         mc = UIManager.getMovieClip("ChildrensDay2013TongXinTsUI");
         mc.gotoAndStop(1);
         LevelManager.appLevel.addChild(mc);
         mc.x = 290;
         mc.y = 90;
         setTimeout(function():void
         {
            DisplayUtil.removeForParent(mc);
         },2000);
      }
      
      public static function showAlreadyGetTip() : void
      {
         var mc:MovieClip = null;
         mc = UIManager.getMovieClip("ChildrensDay2013TongXinTsUI");
         mc.gotoAndStop(2);
         LevelManager.appLevel.addChild(mc);
         mc.x = 290;
         mc.y = 90;
         setTimeout(function():void
         {
            DisplayUtil.removeForParent(mc);
         },2000);
      }
      
      public static function showDialog(param1:uint, param2:Boolean = true, param3:Function = null, param4:uint = 0, param5:uint = 0) : void
      {
         var mc:MovieClip = null;
         var num:uint = param1;
         var isAlarm:Boolean = param2;
         var applyFun:Function = param3;
         var _exchangeLjNum:uint = param4;
         var _exchangeTxNum:uint = param5;
         mc = UIManager.getMovieClip("ChildrensDay2013TongXinBtnUI");
         mc["mc"].gotoAndStop(num);
         if(isAlarm)
         {
            mc["sureBtn"].visible = false;
            mc["cancelBtn"].visible = false;
         }
         else
         {
            mc["sureBtn2"].visible = false;
         }
         if(num == 2)
         {
            KTool.showScore(mc["mc"]["m"]["m1"],_exchangeLjNum);
            KTool.showScore(mc["mc"]["m"]["m2"],_exchangeTxNum);
         }
         DisplayUtil.align(mc,null,AlignType.MIDDLE_CENTER);
         LevelManager.appLevel.addChild(mc);
         mc.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
         {
            if(param1.target.name == "sureBtn" || param1.target.name == "sureBtn2" || param1.target.name == "cancelBtn" || param1.target.name == "close")
            {
               mc.removeEventListener(MouseEvent.CLICK,arguments.callee);
               if(param1.target.name == "sureBtn" || param1.target.name == "sureBtn2")
               {
                  if(applyFun != null)
                  {
                     applyFun();
                  }
                  DisplayUtil.removeForParent(mc);
               }
               else
               {
                  DisplayUtil.removeForParent(mc);
               }
            }
         });
      }
      
      public static function destroy() : void
      {
         if(init)
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap);
         }
      }
   }
}
