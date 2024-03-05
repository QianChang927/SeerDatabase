package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task1388;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_67 extends BaseMapProcess
   {
       
      
      public function MapProcess_67()
      {
         super();
      }
      
      override protected function init() : void
      {
         Task1388.initForMap67(this);
         getDefinitionByName("com.robot.app2.mapProcess.control.WeeklyVSController_tianma").initForMap(this);
      }
      
      override public function destroy() : void
      {
         Task1388.destroy();
         getDefinitionByName("com.robot.app2.mapProcess.control.WeeklyVSController_tianma").destroy();
      }
   }
}
