package com.robot.app.protectSys
{
   import com.robot.app.automaticFight.AutomaticFightManager;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import gs.TweenLite;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class BatteryDormantController
   {
      
      private static const THRESHOLD_TIME:int = 180;
      
      private static const ACTIVE:String = "ACTIVE";
      
      private static const ENTERING:String = "ENTERING";
      
      private static const DORMANT:String = "DORMANT";
      
      private static const LEAVING:String = "LEAVING";
      
      private static var _beforeEnter:Function;
      
      private static var _afterLeave:Function;
      
      private static var _inactiveCount:int;
      
      private static var _ui:MovieClip;
      
      private static var _currentStatus:String;
       
      
      public function BatteryDormantController()
      {
         super();
      }
      
      public static function init(param1:Function, param2:Function) : void
      {
         _beforeEnter = param1;
         _afterLeave = param2;
         _inactiveCount = 0;
         _currentStatus = ACTIVE;
         SystemTimerManager.addTickFun(checkCountdown);
      }
      
      public static function resetCountdown() : void
      {
         _inactiveCount = 0;
      }
      
      private static function checkCountdown() : void
      {
         if(_currentStatus == ACTIVE && isReachThreshold)
         {
            if(AutomaticFightManager.isStart)
            {
               return;
            }
            if(NewSeerTaskController.isNewSeer)
            {
               return;
            }
            _currentStatus = ENTERING;
            startEnterDormant();
         }
         ++_inactiveCount;
      }
      
      private static function startEnterDormant() : void
      {
         var currentBatteryTime:int = 0;
         if(null != _beforeEnter)
         {
            _beforeEnter();
         }
         currentBatteryTime = ProtectSystem.getBatteryTimeLeft();
         SocketConnection.sendWithCallback(CommandID.BATTERY_DORMANT_SWITCH,function(param1:SocketEvent):void
         {
            enterDormantUI(currentBatteryTime);
            _currentStatus = DORMANT;
         },0);
      }
      
      private static function enterDormantUI(param1:int) : void
      {
         var batteryTime:int = param1;
         if(null == _ui)
         {
            ResourceManager.getResource(ClientConfig.getAppRes("security_protection"),function(param1:DisplayObject):void
            {
               _ui = param1 as MovieClip;
               initDormantUI(batteryTime);
            });
         }
         else
         {
            initDormantUI(batteryTime);
         }
      }
      
      private static function initDormantUI(param1:int) : void
      {
         LevelManager.closeMouseEvent();
         _ui["mc"]["go"].addEventListener(MouseEvent.CLICK,onGoOn);
         MainManager.getStage().addChild(_ui);
         setBatteryTime(param1);
      }
      
      private static function setBatteryTime(param1:int) : void
      {
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         if(_ui["time"])
         {
            _loc2_ = Math.floor(param1 / 3600);
            _loc3_ = Math.ceil(param1 / 60) % 60;
            _ui["time"].text = addLeadingZero(_loc2_) + ":" + addLeadingZero(_loc3_);
         }
      }
      
      private static function addLeadingZero(param1:int) : String
      {
         if(param1 < 10)
         {
            return "0" + param1;
         }
         return param1.toString();
      }
      
      private static function onGoOn(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         _currentStatus = LEAVING;
         SocketConnection.sendWithCallback(CommandID.BATTERY_DORMANT_SWITCH,function(param1:SocketEvent):void
         {
            leaveDormantUI();
            _currentStatus = ACTIVE;
         },1);
      }
      
      private static function leaveDormantUI() : void
      {
         _ui["mc"]["go"].removeEventListener(MouseEvent.CLICK,onGoOn);
         LevelManager.openMouseEvent();
         TweenLite.to(_ui,0.7,{
            "alpha":0,
            "onComplete":function():void
            {
               if(_ui.parent)
               {
                  _ui.parent.removeChild(_ui);
               }
               _ui.alpha = 1;
               resetCountdown();
               if(null != _afterLeave)
               {
                  _afterLeave();
               }
            }
         });
      }
      
      private static function get isReachThreshold() : Boolean
      {
         if(_inactiveCount >= THRESHOLD_TIME)
         {
            return true;
         }
         return false;
      }
   }
}
