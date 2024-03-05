package com.robot.app.mapProcess
{
   import com.robot.app.task.control.TaskController_1577;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class MapProcess_10317 extends BaseMapProcess
   {
       
      
      public function MapProcess_10317()
      {
         super();
      }
      
      override protected function init() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         (conLevel["taskMc"] as MovieClip).gotoAndStop(1);
         MapListenerManager.add(conLevel["taskMc"],this.onClickTargetHandler);
      }
      
      private function onClickTargetHandler(param1:MouseEvent) : void
      {
         TaskController_1577.startState3(this);
      }
      
      override public function destroy() : void
      {
         TaskController_1577.destroy();
         super.destroy();
      }
   }
}
