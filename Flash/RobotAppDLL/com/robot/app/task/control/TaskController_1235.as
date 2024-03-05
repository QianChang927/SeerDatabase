package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1235
   {
      
      public static const TASK_ID:uint = 1235;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1235()
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
         NpcDialog.show(NPC.SAIXIAOXI,["赛尔，极光之羽的收集只剩下最后一根了！只要找到紫色极光之羽，雷光之翼的最强形态就能完成了！"],["我就是特意为这事来的！","我只是碰巧路过这里呢！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               startPro();
            });
         }]);
      }
      
      public static function startPro() : void
      {
         NpcDialog.show(NPC.SAIXIAOXI,["木木已经通知我们去雷神秘境了！"],["队长！我们马上出发吧！"],[function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1235_1"),function():void
            {
               MapManager.changeMap(767);
            });
         }]);
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
