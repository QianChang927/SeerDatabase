package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1288
   {
      
      public static const TASK_ID:uint = 1288;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1288()
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
         NpcDialog.show(NPC.SHIPER,["唔，是赛尔啊，我正准备找你呢！最近天马星出现了一些奇怪的状况，星球的生机在急剧减少！"],["啊？怎么会！发生了什么事？","我只是来问候一下船长大人！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1278_4"),function():void
               {
                  MapManager.changeMap(795);
               });
            });
         }]);
      }
      
      public static function startPro() : void
      {
         if(MapManager.currentMap.id != 795)
         {
            MapManager.changeMap(795);
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
