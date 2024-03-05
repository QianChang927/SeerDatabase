package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task705;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_705
   {
      
      private static var panel:AppModel;
      
      public static const TASK_ID:uint = 705;
       
      
      public function TaskController_705()
      {
         super();
      }
      
      public static function showPanel() : void
      {
         var _loc1_:String = "TaskPanel_" + TASK_ID;
         if(panel == null)
         {
            panel = new AppModel(ClientConfig.getTaskModule(_loc1_),"正在打开任务信息");
            panel.setup();
         }
         panel.show();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "，你来的正好，正前方就是暗黑所说的异能星，为了那些异能精灵的安危，我现在命令你立刻前去侦察！"],["Yes, sir!!","遵命，我稍后就去！"],[function():void
         {
            TasksManager.accept(TASK_ID,onAccept);
         },function():void
         {
         }]);
      }
      
      public static function startPro() : void
      {
         Task705.startTask();
      }
      
      private static function onAccept(param1:Boolean) : void
      {
         if(!param1)
         {
            return;
         }
         Task705.startTask();
      }
      
      public function setup() : void
      {
      }
      
      public function init(param1:Object = null) : void
      {
      }
      
      public function show() : void
      {
      }
      
      public function hide() : void
      {
      }
      
      public function destroy() : void
      {
      }
   }
}
