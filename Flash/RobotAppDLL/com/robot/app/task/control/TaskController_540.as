package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task540;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_540
   {
      
      private static var panel:AppModel;
      
      public static const TASK_ID:uint = 540;
       
      
      public function TaskController_540()
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
         TasksManager.accept(TASK_ID,function(param1:Boolean):void
         {
            if(param1)
            {
               Task540.initTask();
            }
         });
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var arr:Array = param1;
            if(Boolean(arr[0]) && Boolean(arr[1]) && !arr[2])
            {
               NpcDialog.show(NPC.IRIS,["什么……迪恩把钥匙给抢走了？这可怎么办是好！"],null,null,false,function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_540_5"),function():void
                  {
                     NpcDialog.show(NPC.IRIS,["又是赫尔卡星预言提示……有冒险才会有爱丽丝我！好吧！别灰心，下一把钥匙一定是我们的！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.IRIS,["慢着！慢着！你刚才说……什么？头发？迪恩竟然有头发……这……迪恩和宝藏之间究竟有什么关联……好吧！我继续去翻阅资料！"],null,null,false,function():void
                        {
                           TasksManager.complete(TASK_ID,2);
                        });
                     });
                  });
               });
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
