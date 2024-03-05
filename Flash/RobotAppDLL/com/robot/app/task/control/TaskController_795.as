package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_795
   {
      
      private static var panel:AppModel;
      
      public static const TASK_ID:uint = 795;
       
      
      public function TaskController_795()
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
      
      public static function setup() : void
      {
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SHUKE,["Y星球发生大爆炸啦！"],["什么！"],[function():void
         {
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               var b:Boolean = param1;
               if(b)
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_795_1"),function():void
                  {
                     MapManager.changeMap(662);
                  },false);
               }
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
