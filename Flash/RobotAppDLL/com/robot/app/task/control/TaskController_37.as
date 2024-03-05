package com.robot.app.task.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.InteractiveObject;
   
   public class TaskController_37
   {
      
      public static const TASK_ID:uint = 37;
      
      private static var icon:InteractiveObject;
      
      private static var panel:AppModel;
       
      
      public function TaskController_37()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SHIPER,["小赛尔，外星球的勘察是赛尔号的重大使命，是每一位小赛尔的职责，我相信你们可以独立得完成帕诺星系的测绘工作了。你决定现在就开始帕诺星系的测绘吗？"],["是的！","还是等等吧..."],[function():void
         {
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               var b:Boolean = param1;
               if(b)
               {
                  NpcDialog.show(NPC.SHIPER,["星球测绘是非常繁琐复杂的工程，要细心一点，不要遗漏。给你的0xff0000NoNo装上星球测绘芯片0xffffff，它会在测绘过程中帮助你的。"],null,null,false,function():void
                  {
                     showTaskPanel();
                  });
               }
            });
         }]);
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && Boolean(param1[4]) && Boolean(param1[5]) && Boolean(param1[6]) && Boolean(param1[7]) && Boolean(param1[8]) && Boolean(param1[9]) && !param1[10])
            {
               TasksManager.complete(TASK_ID,10);
            }
         });
      }
      
      public static function showTaskPanel() : void
      {
         if(!panel)
         {
            panel = new AppModel(ClientConfig.getTaskModule("SpaceSurveyTask"),"正在打开任务信息");
            panel.setup();
         }
         panel.show();
      }
      
      public static function showPanel() : void
      {
         showTaskPanel();
      }
   }
}
