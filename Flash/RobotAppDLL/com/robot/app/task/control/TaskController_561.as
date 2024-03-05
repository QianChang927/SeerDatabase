package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task561;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_561
   {
      
      private static var panel:AppModel;
      
      public static const TASK_ID:uint = 561;
       
      
      public function TaskController_561()
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
         NpcDialog.show(NPC.IRIS,["我怎么就没想到呢……赫鲁卡星是和赫尔卡星平行的两个世界，我们找了半天的宝藏会不会就在……"],["赫……赫尔卡星宝藏？","我一会再来找你哟！"],[function():void
         {
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  Task561.initTask();
               }
            });
         }]);
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var arr:Array = param1;
            if(Boolean(arr[0]) && Boolean(arr[1]) && Boolean(arr[2]) && Boolean(arr[3]) && !arr[4])
            {
               NpcDialog.show(NPC.IRIS,["哎呀！怎么会这样……我也不知道现在怎么办是好……我先去找其他船员商量一下吧！随时等候我的消息！"],["遵命！"],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_561_7"),function():void
                  {
                     TasksManager.complete(TASK_ID,4);
                  });
               }]);
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
