package com.robot.app2.control
{
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.SystemTimerManager;
   import flash.net.SharedObject;
   
   public class SummerPrewarmController
   {
       
      
      public function SummerPrewarmController()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc1_:SharedObject = SOManager.getUserSO(SOManager.ACTIVITY);
         if(_loc1_.data["SummerPop_" + SystemTimerManager.getDateString(SystemTimerManager.sysBJDate)])
         {
            return;
         }
         ModuleManager.showAppModule("SummerPrewarmSetPanel");
         _loc1_ = SOManager.getUserSO(SOManager.ACTIVITY);
         _loc1_.data["SummerPop_" + SystemTimerManager.getDateString(SystemTimerManager.sysBJDate)] = true;
         _loc1_.flush();
      }
   }
}
