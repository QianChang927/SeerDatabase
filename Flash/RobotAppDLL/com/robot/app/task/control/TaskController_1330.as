package com.robot.app.task.control
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1330
   {
      
      public static const TASK_ID:uint = 1330;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1330()
      {
         super();
      }
      
      public static function showPanel() : void
      {
         if(panel == null)
         {
            panel = new AppModel(ClientConfig.getTaskModule("TaskPanel_" + TASK_ID),"正在打开任务信息");
            panel.setup();
         }
         panel.show();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SHIPER,["赛尔，听说你们在去往神树之巅的路上遇到了两个很奇特的精灵？"],["船长大人说的是金角和银角吧？","我先去准备一下！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               MainManager.selfVisible = false;
               ToolBarController.showOrHideAllUser(false);
               startPro();
            });
         }]);
      }
      
      public static function startPro() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1330_1"),function():void
         {
            NpcDialog.show(NPC.SHIPER,["哦？这兄弟俩是守护神树的拦路匪徒？它们不让你们通过也不让海盗通过，却让贾斯汀通过？"],["是呀是呀，好有趣！"],[function():void
            {
               NpcDialog.show(NPC.SHIPER,["唔，的确有一些精灵有神奇的能力，可以预知未来！木木大祭司就是很好的例子！"],["嗯嗯！"],[function():void
               {
                  NpcDialog.show(NPC.SHIPER,["我想贾斯汀一定和他们有所交流，你不妨去问问他！"],["我正有此意！"],[function():void
                  {
                     MapManager.changeMap(11224);
                  }]);
               }]);
            }]);
         },false);
      }
      
      public static function destroy() : void
      {
         if(panel)
         {
            panel.destroy();
            panel = null;
         }
      }
   }
}
