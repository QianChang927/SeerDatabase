package com.robot.app2.control.jsControl.command
{
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   
   public class Command3V3 extends BaseCommand
   {
       
      
      public function Command3V3(param1:* = null)
      {
         super(param1);
      }
      
      override public function excute() : void
      {
         MapManager.changeMapWithCallback(1095,function():void
         {
            ModuleManager.showAppModule("PeakJihad3v3Entrance2016RevisionPanel");
         });
      }
   }
}
