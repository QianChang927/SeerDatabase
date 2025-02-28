package com.robot.app2.mapProcess.control
{
   import com.robot.app2.component.TimeCountdownComponent;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.clearInterval;
   import gs.TweenLite;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MiusiBecomeAKingController
   {
      
      private static const TIME_VO:Array = [new CronTimeVo("*","13-14","*","*","*","*"),new CronTimeVo("*","18-19","*","*","*","*")];
      
      private static var _timer:int;
      
      private static var _popupMc:MovieClip;
      
      private static var _hurtNum:uint;
      
      private static var _intervalId:int;
      
      private static var _countDownComp:TimeCountdownComponent;
      
      private static var _index:int;
       
      
      public function MiusiBecomeAKingController()
      {
         super();
      }
      
      public static function setup() : void
      {
         if(isActive())
         {
            showPopUp();
         }
         else
         {
            _timer = getCountDownNum();
            SystemTimerManager.addTickFun(onTick);
         }
      }
      
      private static function onTick() : void
      {
         --_timer;
         if(_timer <= 0)
         {
            SystemTimerManager.removeTickFun(onTick);
            if(isActive())
            {
               showPopUp();
            }
         }
      }
      
      private static function showPopUp() : void
      {
         var show:Function = function():void
         {
            _popupMc.x = 548.55;
            _popupMc.y = 560;
            _countDownComp = new TimeCountdownComponent(_popupMc.tiemTxt,3);
            _countDownComp.initialSeconds = getOverTime();
            _countDownComp.start(hidePopup);
            _popupMc.addEventListener(MouseEvent.CLICK,onMouseClick);
            LevelManager.iconLevel.addChild(_popupMc);
            TweenLite.to(_popupMc,2,{"y":305.75});
         };
         if(_popupMc == null)
         {
            ResourceManager.getResource(ClientConfig.getActiveUrl("MiusiBecomeAKing_popUp"),function(param1:MovieClip):void
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
      
      public static function getOverTime() : uint
      {
         var _loc1_:Date = SystemTimerManager.sysDate;
         if(_loc1_.hours < 18)
         {
            return SystemTimerManager.getTimeByDate(_loc1_.fullYear,_loc1_.month + 1,_loc1_.date,15) - SystemTimerManager.time;
         }
         return SystemTimerManager.getTimeByDate(_loc1_.fullYear,_loc1_.month + 1,_loc1_.date,20) - SystemTimerManager.time;
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
         if(_intervalId != 0 && !isActive())
         {
            clearInterval(_intervalId);
         }
      }
      
      private static function onMouseClick(param1:MouseEvent) : void
      {
         var _loc2_:Array = null;
         switch(param1.target.name)
         {
            case "goBtn":
               _loc2_ = ["点击全民获得咤克斯弹框【立即前往】按钮","点击宝箱可领取弹框【立即前往】按钮"];
               StatManager.sendStat2014("0805咤克斯超进化放送",_loc2_[param1.target.parent.currentFrame - 1],"2016运营活动");
               ModuleManager.showAppModule("MiusiBecomeAKingMainPanel");
               hidePopup();
               break;
            case "close":
               hidePopup();
         }
      }
      
      public static function isActive() : Boolean
      {
         return SystemTimerManager.isActive(TIME_VO);
      }
      
      public static function getCountDownNum() : int
      {
         var _loc1_:Date = SystemTimerManager.sysDate;
         if(_loc1_.hours < 13)
         {
            return SystemTimerManager.getTimeByDate(_loc1_.fullYear,_loc1_.month + 1,_loc1_.date,13) - SystemTimerManager.time;
         }
         if(_loc1_.hours >= 20)
         {
            _loc1_.setHours(0,0,0,0);
            _loc1_.time += 24 * 3600 * 1000;
            return SystemTimerManager.getTimeByDate(_loc1_.fullYear,_loc1_.month + 1,_loc1_.date,13) - SystemTimerManager.time;
         }
         if(_loc1_.hours < 18)
         {
            return SystemTimerManager.getTimeByDate(_loc1_.fullYear,_loc1_.month + 1,_loc1_.date,18) - SystemTimerManager.time;
         }
         return 0;
      }
   }
}
