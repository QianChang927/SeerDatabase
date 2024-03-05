package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task1221;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1221
   {
      
      public static const TASK_ID:uint = 1221;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1221()
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
         NpcDialog.show(NPC.SAIXIAOXI,["Hi，赛尔，我们正在讨论七色极光之羽的事情呢！你有兴趣嘛？"],["有啊！我就是特意为这事来的！","没有，我只是碰巧路过这里呢！"],[function():void
         {
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  startPro();
               }
            });
         }]);
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var a:Array = param1;
            if(!a[0])
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1221_1"),function():void
               {
                  NpcDialog.show(NPC.SEER,["队长，别浪费时间啦！我们赶快去上古遗迹吧！"],["好的！出发！目标，上古遗迹！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1221_2"),function():void
                     {
                        MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function():void
                        {
                           MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                           Task1221.pro0();
                        });
                        MapManager.changeMap(730);
                     });
                  }]);
               },false);
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
