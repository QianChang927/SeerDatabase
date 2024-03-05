package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task1129;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_352 extends BaseMapProcess
   {
       
      
      public function MapProcess_352()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         depthLevel["npc"].visible = false;
         depthLevel["activeNPC"].visible = false;
         conLevel["monsters"].visible = false;
         conLevel["boss"].visible = false;
         conLevel["machine"].visible = true;
         ToolTipManager.add(conLevel["machine"],"光之一族的灾难");
         conLevel["machine"].buttonMode = true;
         conLevel["machine"].addEventListener(MouseEvent.CLICK,this.onClickMachine);
         getDefinitionByName("com.robot.app2.mapProcess.control.MengYouYiActionController").initMap352(this);
         if(SystemTimerManager.isActive(Task1129.activeTime))
         {
            TasksManager.getProStatusList(1129,this.onGetTask1129);
         }
      }
      
      private function onClickMachine(param1:Event) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("LightActivity"),"正在加载...","每天的11:00-13:00");
      }
      
      private function onGetTask1129(param1:Array) : void
      {
         if(param1[1] && !param1[2] && TasksManager.getTaskStatus(1129) != TasksManager.COMPLETE)
         {
            DisplayUtil.removeForParent(topLevel["dark"]);
            DisplayUtil.removeForParent(conLevel["tao"]);
            Task1129.initFor352(this);
         }
         else
         {
            Task1129.initFor352(this);
         }
      }
      
      override public function destroy() : void
      {
         ToolTipManager.remove(conLevel["machine"]);
         getDefinitionByName("com.robot.app2.mapProcess.control.MengYouYiActionController").destroy();
         Task1129.destroy();
      }
   }
}
