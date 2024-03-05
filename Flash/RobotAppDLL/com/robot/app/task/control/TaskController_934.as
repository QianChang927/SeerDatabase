package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task934;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_934
   {
      
      public static const TASK_ID:uint = 934;
      
      private static var panel:AppModel;
       
      
      public function TaskController_934()
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
         NpcDialog.show(NPC.SAIXIAOXI,["这次我们干的太漂亮了，在0xff0000 珀伽索斯 0xffffff的帮助下我们终于击败了0xff0000 巨石灵王阿洛比斯0xffffff，接下来我想应该就没有什么大问题了吧！"],["事情并不是这么简单！","应该好好休息一下了！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               startPro();
            });
         },null]);
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            if(!param1[0])
            {
               Task934.initStep0();
            }
         });
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
