package com.robot.app.mapProcess
{
   import com.robot.app.spt.FightBossController;
   import com.robot.app.task.taskscollection.Task534;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_438 extends BaseMapProcess
   {
       
      
      public function MapProcess_438()
      {
         super();
      }
      
      override protected function init() : void
      {
         Task534.initTask_1(this);
         this.addTask534Btn();
      }
      
      private function addTask534Btn() : void
      {
         if(TasksManager.getTaskStatus(534) == TasksManager.ALR_ACCEPT)
         {
            conLevel["task534Btn"].visible = false;
         }
         else
         {
            conLevel["task534Btn"].visible = true;
            conLevel["task534Btn"].addEventListener(MouseEvent.CLICK,this.onTask534BtnClick);
         }
      }
      
      private function onTask534BtnClick(param1:MouseEvent) : void
      {
         FightBossController.fightBoss("墨杜萨");
      }
      
      override public function destroy() : void
      {
         conLevel["task534Btn"].removeEventListener(MouseEvent.CLICK,this.onTask534BtnClick);
         Task534.destory();
      }
   }
}
