package com.robot.app.mapProcess
{
   import com.robot.app.control.ChuangShiShenBingController;
   import com.robot.app.mapProcess.control.PetPracticeController;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_695 extends BaseMapProcess
   {
       
      
      public function MapProcess_695()
      {
         super();
      }
      
      override protected function init() : void
      {
         conLevel["machine"].buttonMode = true;
         conLevel["machine"].addEventListener(MouseEvent.CLICK,this.onMachineTree);
         ToolTipManager.add(conLevel["machine"],"精灵修炼器");
         ChuangShiShenBingController.instance.start();
      }
      
      private function onMachineTree(param1:Event) : void
      {
         PetPracticeController.start();
      }
      
      override public function destroy() : void
      {
         ToolTipManager.remove(conLevel["machine"]);
         conLevel["machine"].removeEventListener(MouseEvent.CLICK,this.onMachineTree);
      }
   }
}
