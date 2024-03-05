package com.robot.app.task.control
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1421
   {
       
      
      public function TaskController_1421()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.nick + ",据说派特博士有一个神奇的发现，他一直在找你，想让你帮他去确认一下呢！"],["哈！什么神奇的发现！船长，这个任务就交给我吧！","船长大人我只是来问候你一下！"],[function():void
         {
            TasksManager.accept(1421,function():void
            {
               MainManager.selfVisible = false;
               ToolBarController.showOrHideAllUser(false);
               MapManager.changeLocalMap(10116);
            });
         }]);
      }
      
      public static function startPro() : void
      {
         MapManager.changeLocalMap(10116);
      }
      
      public static function destroy() : void
      {
      }
   }
}
