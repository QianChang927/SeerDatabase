package com.robot.app.task.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   
   public class TaskController_106
   {
      
      public static const TASK_ID:uint = 106;
      
      private static var icon:InteractiveObject;
      
      private static var panel:AppModel = null;
      
      private static var lightMC:MovieClip;
       
      
      public function TaskController_106()
      {
         super();
      }
      
      public static function showPanel() : void
      {
         if(panel == null)
         {
            panel = new AppModel(ClientConfig.getTaskModule("TaskPanel_106"),"正在打开任务信息");
            panel.setup();
         }
         panel.show();
      }
      
      public static function setup() : void
      {
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.JUSTIN,["你好！" + MainManager.actorInfo.formatNick + "，你来太空站找我有什么事情吗？"],["站长，我想询问关于精灵大师杯的事情。","不好意思，我走错了……"],[function():void
         {
            NpcDialog.show(NPC.JUSTIN,["你是说精灵大师杯吗？这可是专门为同系精灵对抗准备的哦！要想成为最伟大的精灵训练师就需要经历各种磨练！你准备好了吗？"],["我也正有此意呢！","我想我还需要再考虑一下……"],[function():void
            {
               TasksManager.accept(TASK_ID,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     MapManager.changeMap(111);
                  }
               });
            }]);
         }]);
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var arr:Array = param1;
            if(Boolean(arr[0]) && !arr[1])
            {
               NpcDialog.show(NPC.JUSTIN,["#1你和你的精灵伙伴都表现得非常棒哦！精灵大师杯赛还有很多很多可以挑战的地方，我相信如果是你的话一定没问题的！"],["我一定会严阵以待！"],[function():void
               {
                  TasksManager.complete(106,1);
               }]);
            }
         });
      }
      
      public static function showIcon() : void
      {
      }
      
      public static function delIcon() : void
      {
      }
   }
}
