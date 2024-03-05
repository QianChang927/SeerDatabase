package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1297
   {
      
      public static const TASK_ID:uint = 1297;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1297()
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
         NpcDialog.show(NPC.SHIPER,["天马星的异状已经水落石出！下一步就是要给恶灵三巨头有力的回击！"],["一定要保护好天马星！","我先去准备一下！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1297_1"),function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1297_2"),function():void
                  {
                     NpcDialog.show(NPC.SEER,["哇！船长真是神机妙算，贾斯汀站长都已经出发了，我也不能落后！船长，我这就去支援队长！"],["好的，去吧！万事小心！"],[function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1278_4"),function():void
                        {
                           MapManager.changeMap(799);
                        });
                     }]);
                  },false);
               },false);
            });
         }]);
      }
      
      public static function startPro() : void
      {
         if(MapManager.currentMap.id != 799)
         {
            MapManager.changeMap(799);
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
