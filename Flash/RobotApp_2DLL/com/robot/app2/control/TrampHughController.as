package com.robot.app2.control
{
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.ui.loading.Loading;
   
   public class TrampHughController
   {
      
      private static var _tips1:Boolean;
       
      
      public function TrampHughController()
      {
         super();
      }
      
      public static function init() : void
      {
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         if(_loc1_.getFullYear() == 2015 && _loc1_.month == 3 && _loc1_.date >= 17 && _loc1_.date <= 23)
         {
            SystemTimerManager.addTickFun(update);
         }
      }
      
      private static function update() : void
      {
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         if((_loc1_.hours == 17 || _loc1_.hours == 12) && _loc1_.minutes >= 55)
         {
            if(_loc1_.hours == 12 && _tips1)
            {
               return;
            }
            ModuleManager.showAppModule("TrampHughBroadcastPanel",null,Loading.NO_ALL);
            _tips1 = true;
            if(_loc1_.hours == 17)
            {
               SystemTimerManager.removeTickFun(update);
            }
         }
      }
   }
}
