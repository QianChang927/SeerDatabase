package com.robot.app2.mapProcess.control
{
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.net.SharedObject;
   
   public class DarkCrisisController
   {
       
      
      public function DarkCrisisController()
      {
         super();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var _loc2_:SharedObject = SOManager.getUserSO(SOManager.LOCALMSG);
         if(_loc2_.data["DarkCrisisToken"] == undefined)
         {
         }
      }
   }
}
