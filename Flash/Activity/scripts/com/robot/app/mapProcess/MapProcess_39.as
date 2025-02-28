package com.robot.app.mapProcess
{
   import com.robot.app.mapProcess.control.BattleInCanesCavernController;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_39 extends BaseMapProcess
   {
       
      
      public function MapProcess_39()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         BattleInCanesCavernController.setup(this);
      }
      
      override public function destroy() : void
      {
         BattleInCanesCavernController.destroy();
         super.destroy();
      }
   }
}
