package com.robot.app.task.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_524
   {
      
      private static var panel:AppModel;
      
      public static const TASK_ID:uint = 524;
       
      
      public function TaskController_524()
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
         NpcDialog.show(NPC.DOCTOR,["咳咳咳，亲爱的小赛尔，我有个消息要告诉你，你听完后一定会很惊讶的哦！"],["哇哦，是什么好消息啊？快点告诉我吧！"],[function():void
         {
            NpcDialog.show(NPC.DOCTOR,["经过日夜不断的研究，终于让我发现了一个天大的秘密：精灵繁殖，哈哈！你肯定没有听说过吧！"],["啊？？什么，精灵繁殖，那是真的吗？"],[function():void
            {
               NpcDialog.show(NPC.DOCTOR,["呵呵，就知道你会惊讶，不要着急，我这就带你去我的秘密基地，体验一下我的最新研究发明！！"],["真的呀？太棒了，那我们这就去吧！"],[function():void
               {
                  TasksManager.accept(TASK_ID,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        MapManager.changeMap(426);
                     }
                  });
               }]);
            }]);
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
