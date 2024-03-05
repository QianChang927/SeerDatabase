package com.robot.core.ui.alert
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.UserInfoManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ReChargeAlert
   {
      
      private static var _ui:MovieClip;
      
      public static const SHOW:String = "show";
      
      public static var type:uint = 0;
       
      
      public function ReChargeAlert()
      {
         super();
      }
      
      public static function show(param1:Function = null, param2:Function = null) : void
      {
         var isVip:Boolean = false;
         var onClickBtn:Function = null;
         var onSuccess:Function = param1;
         var onFailure:Function = param2;
         onClickBtn = function(param1:MouseEvent):void
         {
            var e:MouseEvent = param1;
            var name:String = String(e.currentTarget.name);
            SocketConnection.sendWithCallback(46066,function(param1:SocketEvent):void
            {
               var ee:SocketEvent = param1;
               UserInfoManager.upDateSimpleInfo(MainManager.actorInfo,function():void
               {
                  UserInfoManager.upDateMoreInfo(MainManager.actorInfo,function():void
                  {
                     var mc:MovieClip = null;
                     if(onSuccess != null)
                     {
                        onSuccess.call();
                     }
                     switch(type)
                     {
                        case 1:
                           if(!isVip && MainManager.actorInfo.isVip)
                           {
                              mc = UIManager.getMovieClip("CON_VIP_MC");
                              mc.gotoAndStop(1);
                              mc.x = 300;
                              mc.y = 120;
                              LevelManager.topLevel.addChild(mc);
                              AnimateManager.playMcAnimate(mc,0,"",function():void
                              {
                                 mc.stop();
                                 DisplayUtil.removeForParent(mc);
                              });
                           }
                     }
                     type = 0;
                  });
               });
            });
            _ui["positiveBtn"].removeEventListener(MouseEvent.CLICK,onClickBtn);
            _ui["negativeBtn"].removeEventListener(MouseEvent.CLICK,onClickBtn);
            DisplayUtil.removeForParent(_ui);
            _ui = null;
         };
         ResourceManager.getResource(ClientConfig.getAppRes("RechargeTips"),function(param1:MovieClip):void
         {
            _ui = param1;
            _ui["positiveBtn"].addEventListener(MouseEvent.CLICK,onClickBtn);
            _ui["negativeBtn"].addEventListener(MouseEvent.CLICK,onClickBtn);
            LevelManager.appLevel.addChild(_ui);
         });
         isVip = MainManager.actorInfo.isVip;
      }
   }
}
