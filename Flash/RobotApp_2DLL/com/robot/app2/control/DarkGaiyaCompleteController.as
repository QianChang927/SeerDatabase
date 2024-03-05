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
   
   public class DarkGaiyaCompleteController
   {
      
      public static var lefttime:int;
      
      public static var isInactivity:Boolean;
      
      private static var _instance:com.robot.app2.control.DarkGaiyaCompleteController;
       
      
      private var ui:MovieClip;
      
      private var checktime:int;
      
      private var type:int;
      
      public function DarkGaiyaCompleteController()
      {
         super();
         this.timerHandle();
         SystemTimerManager.addTickFun(this.timerHandle);
      }
      
      public static function get instance() : com.robot.app2.control.DarkGaiyaCompleteController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app2.control.DarkGaiyaCompleteController();
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
         var _loc6_:int = 0;
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         if(_loc1_.month == 8 && _loc1_.date >= 14 && _loc1_.date <= 29 && (_loc1_.hours >= 13 && _loc1_.hours < 15 || _loc1_.hours >= 18 && _loc1_.hours < 20))
         {
            isInactivity = true;
            _loc4_ = SystemTimerManager.sysBJDate;
            _loc3_ = new Date(_loc1_.fullYear,_loc1_.month,_loc1_.date,_loc1_.hours >= 12 && _loc1_.hours < 15 ? 15 : 20);
            _loc5_ = (_loc3_.time - _loc1_.time) / 1000;
            if(this.ui)
            {
               this.ui["time"].text = SystemTimerManager.getTimeClockString(_loc5_);
            }
         }
         else
         {
            isInactivity = false;
            _loc3_ = new Date(_loc1_.fullYear,_loc1_.month,_loc1_.date,_loc1_.hours >= 14 && _loc1_.hours < 19 ? 18 : 13);
            _loc6_ = _loc3_.time / 1000;
            if(_loc1_.hours >= 19)
            {
               _loc6_ += 24 * 3600;
            }
            lefttime = _loc6_ - SystemTimerManager.time;
            this.onRemove();
         }
         ++this.checktime;
         if(this.checktime >= 30)
         {
            this.checktime = 0;
            if(isInactivity)
            {
            }
         }
      }
      
      private function loadstartUI(param1:int) : void
      {
         var idx:int = param1;
         this.type = idx;
         if(this.ui)
         {
            this.ui.title.gotoAndStop(idx);
            this.ui.txt.gotoAndStop(idx);
            this.ui.btnmc.gotoAndStop(idx);
            this.ui.time.text = SystemTimerManager.getTimeClockString(lefttime);
            return;
         }
         ResourceManager.getResource(ClientConfig.getAppResource("2016/0914/darkgaiyapopup"),function(param1:MovieClip):void
         {
            var _loc2_:Date = SystemTimerManager.sysBJDate;
            var _loc3_:Date = new Date(_loc2_.fullYear,_loc2_.month,_loc2_.date,_loc2_.hours >= 12 && _loc2_.hours < 15 ? 15 : 20);
            var _loc4_:SharedObject = SOManager.getUserSO(SOManager.ACTIVITY);
            onRemove();
            ui = param1;
            switch(idx)
            {
               case 1:
                  _loc4_.data["DgaiyaStart_" + SystemTimerManager.getDateString(_loc3_)] = true;
                  break;
               case 2:
                  _loc4_.data["DgaiyaBox1_" + SystemTimerManager.getDateString(_loc3_)] = true;
                  break;
               case 3:
                  _loc4_.data["DgaiyaBox2_" + SystemTimerManager.getDateString(_loc3_)] = true;
                  break;
               case 4:
                  _loc4_.data["DgaiyaBox3_" + SystemTimerManager.getDateString(_loc3_)] = true;
            }
            LevelManager.appLevel.addChildAt(ui,0);
            ui.title.gotoAndStop(idx);
            ui.txt.gotoAndStop(idx);
            ui.btnmc.gotoAndStop(idx);
            ui.icon.gotoAndStop(idx);
            ui.time.text = SystemTimerManager.getTimeClockString(lefttime);
            ui.x = 286.55;
            ui.y = 260.35;
            ui.addEventListener(MouseEvent.CLICK,onClick);
            _loc4_.flush();
         });
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "go":
               if(this.type == 1)
               {
                  StatManager.sendStat2014("0914暗黑盖亚完全体","点击小弹窗【立即前往】按钮","2016运营活动");
               }
               else
               {
                  StatManager.sendStat2014("0914暗黑盖亚完全体","点击小弹窗【前往领取】按钮","2016运营活动");
               }
               ModuleManager.showAppModule("DarkGaiyaCompleteFightPanel");
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
