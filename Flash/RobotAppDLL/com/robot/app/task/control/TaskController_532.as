package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task532;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_532
   {
      
      private static var panel:AppModel;
      
      public static const TASK_ID:uint = 532;
       
      
      public function TaskController_532()
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
         NpcDialog.show(NPC.IRIS,["活力钥匙在传闻中是充满了五彩光芒以及神的活力的！绝非是现在这样暗淡无光！"],["嗯……"],[function():void
         {
            NpcDialog.show(NPC.IRIS,["活力源于精灵，精灵源自活力！只要找到合适的精灵，它们就可以帮助钥匙复苏恢复活力！"],["真的吗？那什么精灵才可以帮助我们呢？","我一会再来找你哟！"],[function():void
            {
               TasksManager.accept(TASK_ID,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     Task532.initTask();
                  }
               });
            }]);
         }]);
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var array:Array = param1;
            if(Boolean(array[0]) && Boolean(array[1]) && Boolean(array[2]))
            {
               NpcDialog.show(NPC.IRIS,["没错！这才是真正的活力之匙！看起来之前确实有人动过手脚了……谁？是谁在那里？"],["迪恩？"],[function():void
               {
                  AnimateManager.playMcAnimate(MapManager.currentMap.depthLevel["task_532"],0,"",function():void
                  {
                     NpcDialog.show(NPC.IRIS,["看来我推测的没有错……真的是迪恩动的手脚！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.IRIS,["他和赫尔卡星宝藏之间一定有着什么微妙的关系！好了，我先去研究死亡星球的航行路线了！"],["死亡星球……还有更多的危险等着我们！"],[function():void
                        {
                           TasksManager.complete(TASK_ID,3);
                        }]);
                     });
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
