package com.robot.app2.control
{
   import com.robot.app2.component.TimeCountdownComponent;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import gs.TweenLite;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class XuanwuCompletebodyController
   {
      
      private static var _popupMc:MovieClip;
      
      private static var _countDownComp:TimeCountdownComponent;
       
      
      public function XuanwuCompletebodyController()
      {
         super();
      }
      
      public static function setup() : void
      {
         if(inTime())
         {
            showPopUp();
         }
         else
         {
            _countDownComp = new TimeCountdownComponent(null);
            _countDownComp.initialSeconds = getCountDownTime();
            _countDownComp.start(function():void
            {
               _countDownComp.destroy();
               _countDownComp = null;
               showPopUp();
            });
         }
      }
      
      public static function inTime() : Boolean
      {
         var _loc1_:Array = [new CronTimeVo("*","12-13","*","*","*"),new CronTimeVo("*","18-19","*","*","*")];
         return SystemTimerManager.isActive(_loc1_);
      }
      
      public static function getCountDownTime() : uint
      {
         var _loc1_:Date = SystemTimerManager.sysDate;
         if(_loc1_.hours < 12)
         {
            return SystemTimerManager.getTimeByDate(_loc1_.fullYear,_loc1_.month + 1,_loc1_.date,12) - SystemTimerManager.time;
         }
         if(_loc1_.hours >= 20)
         {
            _loc1_.setHours(0,0,0,0);
            _loc1_.time += 24 * 3600 * 1000;
            return SystemTimerManager.getTimeByDate(_loc1_.fullYear,_loc1_.month + 1,_loc1_.date,12) - SystemTimerManager.time;
         }
         if(_loc1_.hours < 18)
         {
            return SystemTimerManager.getTimeByDate(_loc1_.fullYear,_loc1_.month + 1,_loc1_.date,18) - SystemTimerManager.time;
         }
         return 0;
      }
      
      private static function showPopUp() : void
      {
         var show:Function = function():void
         {
            if(_popupMc != null)
            {
               _popupMc.x = 648.15;
               _popupMc.y = 560;
               _popupMc.addEventListener(MouseEvent.CLICK,onMouseClick);
               LevelManager.iconLevel.addChild(_popupMc);
               TweenLite.to(_popupMc,2,{"y":375.75});
               _countDownComp = new TimeCountdownComponent(_popupMc,3);
               _countDownComp.initialSeconds = getOverTime();
               _countDownComp.start(hidePopup);
            }
         };
         if(_popupMc == null)
         {
            ResourceManager.getResource(ClientConfig.getActiveUrl("XuanwuCompletebody_popUp"),function(param1:MovieClip):void
            {
               _popupMc = param1;
               show();
            });
         }
         else
         {
            show();
         }
      }
      
      private static function onMouseClick(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "goBtn":
               ModuleManager.showAppModule("XuanwuCompletebodyMainPanel");
               hidePopup();
               break;
            case "close":
               hidePopup();
         }
      }
      
      private static function hidePopup() : void
      {
         if(_popupMc != null)
         {
            _popupMc.removeEventListener(MouseEvent.CLICK,onMouseClick);
            DisplayUtil.removeForParent(_popupMc);
            _popupMc = null;
         }
         if(_countDownComp != null)
         {
            _countDownComp.destroy();
            _countDownComp = null;
         }
      }
      
      public static function getOverTime() : uint
      {
         var _loc1_:Date = SystemTimerManager.sysDate;
         if(_loc1_.hours < 14)
         {
            return SystemTimerManager.getTimeByDate(_loc1_.fullYear,_loc1_.month + 1,_loc1_.date,14) - SystemTimerManager.time;
         }
         return SystemTimerManager.getTimeByDate(_loc1_.fullYear,_loc1_.month + 1,_loc1_.date,20) - SystemTimerManager.time;
      }
   }
}
