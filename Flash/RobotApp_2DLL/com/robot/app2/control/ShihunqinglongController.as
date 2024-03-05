package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.SystemTimerManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.net.SharedObject;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ShihunqinglongController
   {
      
      public static var lefttime:int;
      
      public static var isInactivity:Boolean;
      
      private static var _instance:com.robot.app2.control.ShihunqinglongController;
       
      
      private var ui:MovieClip;
      
      private var checktime:int;
      
      private var type:int;
      
      public function ShihunqinglongController()
      {
         super();
         this.timerHandle();
         SystemTimerManager.addTickFun(this.timerHandle);
      }
      
      public static function get instance() : com.robot.app2.control.ShihunqinglongController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app2.control.ShihunqinglongController();
         }
         return _instance;
      }
      
      public static function setup() : void
      {
         instance;
      }
      
      public function timerHandle() : void
      {
         var _loc2_:Date = null;
         var _loc3_:Date = null;
         var _loc4_:Date = null;
         var _loc5_:int = 0;
         var _loc6_:SharedObject = null;
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         if(_loc1_.hours >= 12 && _loc1_.hours < 14 || _loc1_.hours >= 18 && _loc1_.hours < 20)
         {
            isInactivity = true;
            _loc4_ = SystemTimerManager.sysBJDate;
            _loc3_ = new Date(_loc1_.fullYear,_loc1_.month,_loc1_.date,_loc1_.hours >= 12 && _loc1_.hours < 14 ? 14 : 20);
            _loc5_ = (_loc3_.time - _loc1_.time) / 1000;
            if(this.ui)
            {
               this.ui["time"].text = SystemTimerManager.getTimeClockString(_loc5_);
            }
         }
         else
         {
            isInactivity = false;
            this.onRemove();
         }
         ++this.checktime;
         if(this.checktime >= 30)
         {
            this.checktime = 0;
            if(isInactivity)
            {
               _loc6_ = SOManager.getUserSO(SOManager.ACTIVITY);
               _loc1_ = SystemTimerManager.sysBJDate;
               _loc2_ = new Date(_loc1_.fullYear,_loc1_.month,_loc1_.date);
               if(_loc6_.data["Shihunqinglong_" + SystemTimerManager.getDateString(_loc2_) + (_loc1_.hours >= 12 && _loc1_.hours < 14 ? 14 : 20)] == null)
               {
                  this.loadstartUI(1);
               }
            }
         }
      }
      
      private function loadstartUI(param1:int) : void
      {
         var idx:int = param1;
         if(this.ui)
         {
            this.ui.time.text = SystemTimerManager.getTimeClockString(lefttime);
            return;
         }
         ResourceManager.getResource(ClientConfig.getAppResource("2016/1202/shihunqinglongPopup"),function(param1:MovieClip):void
         {
            var _loc2_:Date = SystemTimerManager.sysBJDate;
            var _loc3_:Date = new Date(_loc2_.fullYear,_loc2_.month,_loc2_.date,_loc2_.hours >= 12 && _loc2_.hours < 14 ? 14 : 20);
            var _loc4_:SharedObject = SOManager.getUserSO(SOManager.ACTIVITY);
            onRemove();
            ui = param1;
            _loc4_.data["Shihunqinglong_" + SystemTimerManager.getDateString(_loc3_) + (_loc2_.hours >= 12 && _loc2_.hours < 14 ? 14 : 20)] = true;
            LevelManager.appLevel.addChildAt(ui,0);
            ui.time.text = SystemTimerManager.getTimeClockString(lefttime);
            ui.x = 575.6;
            ui.y = 262.6 + 85;
            ui.addEventListener(MouseEvent.CLICK,onClick);
            _loc4_.flush();
         });
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "go":
               ModuleManager.showAppModule("ShihunqinglongMainPanel");
               this.onRemove();
               break;
            case "close":
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
