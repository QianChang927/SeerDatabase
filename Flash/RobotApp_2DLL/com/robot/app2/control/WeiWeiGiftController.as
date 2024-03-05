package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.net.SharedObject;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class WeiWeiGiftController
   {
      
      private static var _instance:com.robot.app2.control.WeiWeiGiftController;
       
      
      private var ui:MovieClip;
      
      private var so:SharedObject;
      
      public function WeiWeiGiftController()
      {
         super();
         this.so = SOManager.getUserSO(SOManager.ACTIVITY);
         this.timerHandle();
      }
      
      public static function get instance() : com.robot.app2.control.WeiWeiGiftController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app2.control.WeiWeiGiftController();
         }
         return _instance;
      }
      
      public static function setup() : void
      {
         instance;
      }
      
      private function timerHandle() : void
      {
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         if(ActivityTimeControl.getIsinTime(44))
         {
            if(this.ui == null && _loc1_.minutes >= 57)
            {
               if(!this.so.data["WeiWeigift_" + SystemTimerManager.getDateString(_loc1_)])
               {
                  this.loadstartUI();
               }
            }
            else
            {
               this.showtime();
            }
         }
      }
      
      private function loadstartUI() : void
      {
         ResourceManager.getResource(ClientConfig.getAppResource("2017/1117/weiweigiftmc"),function(param1:MovieClip):void
         {
            onRemove();
            ui = param1;
            LevelManager.toolsLevel.addChildAt(ui,0);
            ui.x = 694.75 - 180;
            ui.y = 362.55;
            showtime();
            ui.addEventListener(MouseEvent.CLICK,onClick);
         });
      }
      
      private function showtime() : void
      {
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         var _loc2_:int = 3600 - _loc1_.minutes * 60 - _loc1_.seconds;
         var _loc3_:int = 300 - _loc1_.minutes * 60 - _loc1_.seconds;
         if(this.ui)
         {
            if(_loc1_.minutes < 5)
            {
               this.ui["mc"].gotoAndStop(2);
               this.ui["mc"]["txt"].text = SystemTimerManager.getTimeClockString(_loc3_,false);
            }
            else
            {
               this.ui["mc"].gotoAndStop(1);
               this.ui["mc"]["txt"].text = SystemTimerManager.getTimeClockString(_loc2_,false);
            }
         }
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         var _loc2_:Date = null;
         var _loc3_:Date = null;
         switch(param1.target.name)
         {
            case "go":
               StatManager.sendStat2014("1117VIP八周年庆典","点击小电视GO","2017运营活动");
               _loc2_ = SystemTimerManager.sysBJDate;
               this.so.data["WeiWeigift_" + SystemTimerManager.getDateString(_loc2_)] = true;
               this.so.flush();
               ModuleManager.showAppModule("WeiWeiGiftPanel");
               this.onRemove();
               break;
            case "close":
               StatManager.sendStat2014("1117VIP八周年庆典","点击小电视X","2017运营活动");
               _loc3_ = SystemTimerManager.sysBJDate;
               this.so.data["WeiWeigift_" + SystemTimerManager.getDateString(_loc3_)] = true;
               this.so.flush();
               this.onRemove();
         }
      }
      
      private function onRemove() : void
      {
         if(this.ui)
         {
            this.ui.removeEventListener(MouseEvent.CLICK,this.onClick);
            if(this.ui.parent)
            {
               DisplayUtil.removeForParent(this.ui);
            }
            this.ui = null;
         }
      }
   }
}
