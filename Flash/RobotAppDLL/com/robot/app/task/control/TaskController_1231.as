package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1231
   {
      
      public static const TASK_ID:uint = 1231;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1231()
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
         NpcDialog.show(NPC.SHIPER,["事态紧急！向我们宣战的艾里克和海盗们已经从海盗基地出发了，战神联盟已经出发迎战，一场大战一触即发了！"],["我已经准备好了！","让我先准备一下！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               startPro();
            });
         },null]);
      }
      
      public static function startPro() : void
      {
         NpcDialog.show(NPC.SHIPER,["这是我们和艾里克的第一次正面交锋，上古魔神的称号可不会是浪得虚名！大家一定要打起十二万分的小心！"],null,null,false,function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1231_2"),function():void
            {
               NpcDialog.show(NPC.SHIPER,["根据派特的研究，艾里克的实力非同一般，千万不要大意！赛小息他们已经先走一步前往战场了，你快去吧！"],["好的！我这就去！"],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1226_2"),function():void
                  {
                     TasksManager.complete(TASK_ID,0,function(param1:Boolean = true):void
                     {
                        if(param1)
                        {
                           MapManager.changeMap(780);
                        }
                     });
                  });
               }]);
            },false);
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
