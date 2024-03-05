package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
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
   
   public class YaoWangSiNeiPuController
   {
      
      private static const TIME_VO:CronTimeVo = new CronTimeVo("*","18","*","*","*","*");
      
      private static var _interId:uint;
      
      private static var _popupMc:MovieClip;
      
      private static var _countDownComp:TimeCountdownComponent;
       
      
      public function YaoWangSiNeiPuController()
      {
         super();
      }
      
      public static function isActive() : Boolean
      {
         return TIME_VO.isActive(SystemTimerManager.sysDate);
      }
      
      public static function setup() : void
      {
         KTool.getForeverNum(4442,function(param1:int):void
         {
            if(param1 >= 15)
            {
               return;
            }
            _interId = 0;
            if(isActive())
            {
            }
         });
      }
      
      private static function showPop() : void
      {
         StatManager.sendStat2014("1014妖王斯内普完全体","打开翻倍提示小弹框","2016运营活动");
         ResourceManager.getResource(ClientConfig.getActiveUrl("YaoWangSiNeiPu_popUp"),function(param1:MovieClip):void
         {
            var _loc3_:uint = 0;
            _popupMc = param1;
            _popupMc.x = 648.15;
            _popupMc.y = 560;
            _popupMc.addEventListener(MouseEvent.CLICK,onMouseClick);
            LevelManager.iconLevel.addChild(_popupMc);
            TweenLite.to(_popupMc,2,{"y":375.75});
            var _loc2_:Date = SystemTimerManager.sysDate;
            _loc3_ = uint(SystemTimerManager.getTimeByDate(_loc2_.fullYear,_loc2_.month + 1,_loc2_.date,19,0));
            _countDownComp = new TimeCountdownComponent(_popupMc.tiemTxt);
            _countDownComp.initialSeconds = _loc3_ - SystemTimerManager.time;
            _countDownComp.start(hidePopup);
         });
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
         if(_interId != 0 && !isActive())
         {
            clearInterval(_interId);
         }
      }
      
      private static function onMouseClick(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "goBtn":
               StatManager.sendStat2014("1014妖王斯内普完全体","点击赶紧参加","2016运营活动");
               hidePopup();
               ModuleManager.showAppModule("YaoWangSiNeiPuMainPanel");
               break;
            case "close":
               hidePopup();
         }
      }
      
      private static function intervalFunc() : void
      {
         if(isActive())
         {
            showPop();
            clearInterval(_interId);
            _interId = 0;
         }
      }
   }
}
