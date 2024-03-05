package com.robot.app.mapProcess
{
   import com.robot.app.energy.utils.EnergyController;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_328 extends BaseMapProcess
   {
       
      
      public function MapProcess_328()
      {
         super();
      }
      
      override protected function init() : void
      {
         getDefinitionByName("com.robot.app2.mapProcess.control.PirateAttacksController").init();
      }
      
      override public function destroy() : void
      {
         getDefinitionByName("com.robot.app2.mapProcess.control.PirateAttacksController").destroy();
      }
      
      public function exploitGas() : void
      {
         EnergyController.exploit(30);
      }
   }
}
