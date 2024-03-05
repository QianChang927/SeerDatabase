package com.robot.app.control
{
   import com.robot.app.mapProcess.control.SystemRecommendController;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TaskIconManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class NewSeerRunningLoginGiftController
   {
      
      public static var index:uint;
      
      public static var gotGift:Boolean;
      
      public static var status:uint;
      
      private static var _icon:MovieClip;
      
      private static var _sync:Boolean = false;
       
      
      public function NewSeerRunningLoginGiftController()
      {
         super();
      }
      
      public static function setup() : void
      {
         if(_sync)
         {
            update();
         }
         else if(MainManager.actorInfo.regTime < SystemTimerManager.getTimeByDate(2012,8,24,0))
         {
            SystemRecommendController.setup();
         }
         else
         {
            _sync = true;
            SocketConnection.send(1022,86058899);
            SocketConnection.addCmdListener(CommandID.NEWSEERRUNNINGLOGINGIFT_GET_STATUS,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(CommandID.NEWSEERRUNNINGLOGINGIFT_GET_STATUS,arguments.callee);
               var _loc3_:ByteArray = param1.data as ByteArray;
               index = _loc3_.readUnsignedInt();
               status = _loc3_.readUnsignedInt();
               gotGift = Boolean(status);
               if(index > 0 && index < 8)
               {
                  SocketConnection.send(1022,86058901 + 2 * (index - 1));
               }
               update();
            });
            SocketConnection.send(CommandID.NEWSEERRUNNINGLOGINGIFT_GET_STATUS);
         }
      }
      
      public static function update() : void
      {
         if(index == 0)
         {
            if(_icon)
            {
               TaskIconManager.delIcon(_icon);
               ToolTipManager.remove(_icon);
               _icon.removeEventListener(MouseEvent.CLICK,onIconClick);
               _icon = null;
            }
            SystemRecommendController.setup();
         }
         else
         {
            if(_icon == null)
            {
               _icon = UIManager.getMovieClip("newSeerRunningLoginGift_icon");
               _icon.buttonMode = true;
               _icon.addEventListener(MouseEvent.CLICK,onIconClick);
               ToolTipManager.add(_icon,"新手连续登陆奖励");
               TaskIconManager.addIcon(_icon,TaskIconManager.RIGHT_SIDE,2);
            }
            if(gotGift)
            {
               _icon.gotoAndStop(1);
            }
            else
            {
               _icon.gotoAndPlay(1);
            }
         }
      }
      
      private static function onIconClick(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86049456);
         ModuleManager.showModule(ClientConfig.getAppModule("NewSeerRuningLoginGiftPanel"),"正在打开新手连续登陆奖励....");
      }
   }
}
