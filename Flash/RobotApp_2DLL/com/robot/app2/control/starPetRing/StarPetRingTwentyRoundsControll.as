package com.robot.app2.control.starPetRing
{
   import com.robot.app.mapProcess.control.activityControl.TwelveRoundsFightController;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.utils.CronTimeVo;
   
   public class StarPetRingTwentyRoundsControll extends TwelveRoundsFightController
   {
       
      
      public function StarPetRingTwentyRoundsControll()
      {
         super([new CronTimeVo("*","14","8-22","2","*")]);
      }
      
      override public function get allRound() : int
      {
         return 20;
      }
      
      override protected function getCurrentStep() : int
      {
         var _loc1_:int = 0;
         var _loc2_:Date = SystemTimerManager.sysDate;
         return int(Math.floor(_loc2_.minutes / 3));
      }
      
      override protected function get nextRoundTime() : String
      {
         var _loc1_:int = 0;
         var _loc2_:Date = null;
         if(_currentStep >= 0 && _currentStep < this.allRound)
         {
            _loc2_ = SystemTimerManager.sysDate;
            _loc1_ = (_currentStep + 1) * 3 - _loc2_.minutes;
            _loc1_ = _loc1_ <= 0 ? 1 : _loc1_;
         }
         return _loc1_ + "";
      }
      
      override protected function updateCountDown() : void
      {
         super.updateCountDown();
         if(isInActivityMap)
         {
            MapNamePanel.hide();
         }
      }
   }
}
