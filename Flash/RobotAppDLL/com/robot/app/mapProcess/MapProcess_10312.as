package com.robot.app.mapProcess
{
   import com.robot.app.task.control.TaskController_1563;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class MapProcess_10312 extends BaseMapProcess
   {
       
      
      public function MapProcess_10312()
      {
         super();
      }
      
      override protected function init() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         (conLevel["taskMc"] as MovieClip).gotoAndStop(1);
         TaskController_1563.startState3(this);
      }
      
      private function onClickTargetHandler(param1:MouseEvent) : void
      {
         TaskController_1563.startState3(this);
      }
      
      override public function destroy() : void
      {
         TaskController_1563.destroy();
         super.destroy();
      }
   }
}
