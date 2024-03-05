package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task570;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_570
   {
      
      private static var panel:AppModel;
      
      public static const TASK_ID:uint = 570;
       
      
      public function TaskController_570()
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
         NpcDialog.show(NPC.IRIS,["我刚才收到纽斯的最新报道，卡兔似乎已经恢复体力了！"],["真的嘛！太棒了！","我一会再来找你哟！"],[function():void
         {
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  Task570.initTask();
               }
            });
         }]);
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var arr:Array = param1;
            if(Boolean(arr[0]) && Boolean(arr[1]) && Boolean(arr[2]) && Boolean(arr[3]) && Boolean(arr[4]) && Boolean(arr[5]) && !arr[6])
            {
               NpcDialog.show(NPC.IRIS,["这可真是千钧一发……还好你找到了通讯器！不然我也不知道会发生什么可怕的事情！"],null,null,false,function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_570_5"),function():void
                  {
                     NpcDialog.show(NPC.IRIS,["又是赫尔卡预言……我总感觉打败咤克斯会和卡兔有关！我还得继续研究下对策！我们绝不能掉以轻心啊！"],null,null,false,function():void
                     {
                        TasksManager.complete(TASK_ID,6);
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
