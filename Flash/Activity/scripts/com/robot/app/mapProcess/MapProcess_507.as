package com.robot.app.mapProcess
{
   import com.robot.app.spt.FightBossController;
   import com.robot.app.task.control.TaskController_698;
   import com.robot.app.task.control.TaskController_739;
   import com.robot.app.task.control.TaskController_755;
   import com.robot.app.task.control.TaskController_764;
   import com.robot.app.task.control.TaskController_789;
   import com.robot.app.task.taskscollection.Task698;
   import com.robot.app.task.taskscollection.Task739;
   import com.robot.app.task.taskscollection.Task755;
   import com.robot.app.task.taskscollection.Task764;
   import com.robot.app.task.taskscollection.Task789;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.MouseEvent;
   
   public class MapProcess_507 extends BaseMapProcess
   {
       
      
      public function MapProcess_507()
      {
         super();
      }
      
      override protected function init() : void
      {
         SocketConnection.send(1022,86067738);
         this.topLevel.mouseChildren = this.topLevel.mouseEnabled = false;
         conLevel["bulaikeNPC"]["signMC"].visible = false;
         MapListenerManager.add(conLevel["suolante"],function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("BuLaiKeTrainPanel"));
         },"索兰特");
         if(TasksManager.getTaskStatus(TaskController_698.TASK_ID) != TasksManager.COMPLETE)
         {
            Task698.initTaskForMap507(this);
            return;
         }
         if(TasksManager.getTaskStatus(TaskController_739.TASK_ID) != TasksManager.COMPLETE)
         {
            Task739.initTaskForMap507(this);
            return;
         }
         if(TasksManager.getTaskStatus(TaskController_755.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            Task755.initTaskForMap507(this);
            return;
         }
         if(TasksManager.getTaskStatus(TaskController_764.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            Task764.initTaskForMap507(this);
            return;
         }
         if(TasksManager.getTaskStatus(TaskController_789.TASK_ID) == TasksManager.UN_ACCEPT)
         {
            Task789.initTaskForMap507(this);
            return;
         }
         conLevel["bulaikeNPC"].buttonMode = true;
         conLevel["bulaikeNPC"].addEventListener(MouseEvent.CLICK,this.bulaikeNPCHandler);
      }
      
      private function bulaikeNPCHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         NpcDialog.show(NPC.BULAIKE_NEW,["我一定会让光明重返格雷斯星！"],["与布莱克对战。","算了，我还是先围观吧。"],[function():void
         {
            NpcDialog.show(NPC.BULAIKE_NEW,["作为光明圣坛守护者，我不畏惧任何挑战！但我认为只有一对一的决斗才能证明谁是真正的强者！你有这个胆量吗？"],["OK，我会让你心服口服的！","嘿嘿！让哥哥我再考虑考虑。"],[function():void
            {
               FightBossController.fightBoss("布莱克");
            }]);
         }]);
      }
      
      override public function destroy() : void
      {
         Task698.destroy();
         Task739.destroy();
         Task755.destroy();
         Task764.destroy();
         Task789.destroy();
         if(conLevel["bulaikeNPC"])
         {
            conLevel["bulaikeNPC"].removeEventListener(MouseEvent.CLICK,this.bulaikeNPCHandler);
         }
      }
   }
}
