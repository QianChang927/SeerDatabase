package com.robot.app.task.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_529
   {
      
      public static const TASK_ID:int = 529;
      
      private static var panel:AppModel = null;
       
      
      public function TaskController_529()
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
      
      public static function setup() : void
      {
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.DOCTOR,["小赛尔，我这里探测到拓梯星上有很多精灵信号哦，它们好像是在谈论什么，我现在正要忙于培育舱的研究，你能帮我去看看究竟是怎么回事吗？"],["嗯，我这就去看看！","我过会儿再来！"],[function():void
         {
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  MapManager.changeMap(429);
               }
            });
         }]);
      }
      
      public static function startPro() : void
      {
         NpcDialog.show(NPC.DOCTOR,["小赛尔你终于回来啦，所有的事情我都已经知道了，你是一个聪明又有爱心的小赛尔啊，这是给你的奖励，收好吧！"],["博士，原来你都已经知道啦！这些都是我应该做的！"],[function():void
         {
            TasksManager.complete(TASK_ID,6);
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
