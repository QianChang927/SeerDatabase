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
   
   public class TaskController_1306
   {
      
      public static const TASK_ID:uint = 1306;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1306()
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
         NpcDialog.show(NPC.SHIPER,["恶灵三巨头已经有两个被我们打败了！但是我们绝对不能大意！毕竟恶灵兽的阴影一直笼罩着第五星系！"],["嗯！我明白！我一定加倍注意！","我先去准备一下！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               MainManager.selfVisible = false;
               ToolBarController.showOrHideAllUser(false);
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1306_1"),function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1306_2"),function():void
                  {
                     MapManager.changeMap(801);
                  },false);
               },false);
            });
         }]);
      }
      
      public static function startPro() : void
      {
         if(MapManager.currentMap.id != 801)
         {
            MapManager.changeMap(801);
         }
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
