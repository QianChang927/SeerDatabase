package com.robot.app.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.utils.ByteArray;
   import flash.utils.Timer;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class ServerCloseNoticeController
   {
      
      private static var tips:MovieClip;
      
      private static var timer:Timer;
      
      private static var lastTime:int;
       
      
      public function ServerCloseNoticeController()
      {
         super();
      }
      
      public static function setup() : void
      {
         SocketConnection.addCmdListener(41457,socketHandle);
      }
      
      private static function socketHandle(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:Number = _loc2_.readUnsignedInt();
         showTips(_loc3_);
      }
      
      private static function showTips(param1:Number) : void
      {
         var str:String = null;
         var time:Number = param1;
         var second:int = Math.ceil((time - SystemTimerManager.time) / 60);
         if(second < 0)
         {
            second = 0;
         }
         str = second + "";
         if(tips)
         {
            tips.removeEventListener(MouseEvent.CLICK,clickHandle);
            showTipContent(str);
         }
         else
         {
            ResourceManager.getResource(ClientConfig.getAppResource("update/serverCloseMc"),function(param1:DisplayObject):void
            {
               if(param1)
               {
                  tips = param1 as MovieClip;
                  tips.x = 0;
                  tips.y = (560 - param1.height) / 2;
                  showTipContent(str);
               }
            },"item",3,false);
         }
      }
      
      private static function startTimer() : void
      {
         lastTime = SystemTimerManager.time;
         if(!timer)
         {
            timer = new Timer(1000);
         }
         timer.addEventListener(TimerEvent.TIMER,timerHandle);
         timer.start();
      }
      
      private static function closeTimer() : void
      {
         if(timer)
         {
            timer.removeEventListener(TimerEvent.TIMER,timerHandle);
            timer.stop();
            timer = null;
         }
      }
      
      private static function timerHandle(param1:TimerEvent) : void
      {
         var _loc2_:int = int(SystemTimerManager.time);
         if(_loc2_ - lastTime >= 5)
         {
            closeTimer();
            closeTips();
         }
      }
      
      private static function showTipContent(param1:String) : void
      {
         closeTimer();
         startTimer();
         tips["time"].text = param1;
         tips["movie"].gotoAndPlay(1);
         LevelManager.stage.addChild(tips);
         tips.addEventListener(MouseEvent.CLICK,clickHandle);
      }
      
      private static function clickHandle(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "close":
               closeTips();
         }
      }
      
      private static function closeTips() : void
      {
         closeTimer();
         if(tips)
         {
            if(tips.parent)
            {
               tips.parent.removeChild(tips);
            }
            tips.removeEventListener(MouseEvent.CLICK,clickHandle);
         }
      }
   }
}
