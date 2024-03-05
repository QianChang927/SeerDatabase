package com.robot.app.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.info.BroadcastInfo;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.ui.loading.Loading;
   
   public class BroadcastAlertController
   {
       
      
      public function BroadcastAlertController()
      {
         super();
      }
      
      public static function show(param1:BroadcastInfo) : Boolean
      {
         if(param1.type >= 156 && param1.type <= 164)
         {
            checkNian2015SecondBroadcast(param1);
            return true;
         }
         return false;
      }
      
      private static function checkNian2015SecondBroadcast(param1:BroadcastInfo) : void
      {
         var d:int = 0;
         var info:BroadcastInfo = param1;
         var date:Date = SystemTimerManager.sysBJDate;
         d = date.hours == 14 && date.minutes < 30 ? 1 : 2;
         KTool.getBitSet([1000031,1000032],function(param1:Array):void
         {
            if(param1[0] == 0 && d == 1 || param1[1] == 0 && d == 2)
            {
               ModuleManager.showAppModule("Nian2015SecondBroadcastPanel",info,Loading.NO_ALL);
            }
         });
      }
   }
}
