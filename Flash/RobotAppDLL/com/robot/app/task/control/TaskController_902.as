package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task902;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.MapProcessConfig;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import flash.events.Event;
   
   public class TaskController_902
   {
      
      public static const TASK_ID:uint = 902;
      
      private static var panel:AppModel;
       
      
      public function TaskController_902()
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
         NpcDialog.show(NPC.KALULU,["咦…赛小息和米咔怎么又不见了！！真让人担心啊！"],["什么！米咔和赛小息不见了？！","我只是来这里参观的！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               startPro();
            });
         },null]);
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var a:Array = param1;
            if(!a[0])
            {
               NpcDialog.show(NPC.SEER,["卡璐璐，发生什么事情啦！米咔和赛小息怎么会不见了呢？难道他们还在巨石岛上吗？"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.KALULU,["不不不…赛小息和米咔之前还在这里的，奇怪了，去哪里了呢？"],["会不会在赛尔号的某个角落呢？"],[function():void
                  {
                     NpcDialog.show(NPC.ATIEDA,["一定是被海盗抓走了！不好，这下可完了，难道赛尔号上有奸细？"],["别急，我这就去帮你找找！"],[function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_902_1"),function():void
                        {
                           MapManager.currentMap.controlLevel["task899mc"]["mika"].visible = true;
                           MapManager.currentMap.controlLevel["task899mc"]["atieda"].visible = true;
                           NpcController.showNpc(113);
                           NpcDialog.show(NPC.SAIXIAOXI,["据可靠消息，卫兵团在巨石星发现了一个古怪的建筑，类似石柱一样的东西！"],["石柱？？"],[function():void
                           {
                              NpcDialog.show(NPC.ATIEDA,["这有什么好奇怪的，在巨石岛有几块石头和几根石柱很正常啊！别大惊小怪的！"],null,null,false,function():void
                              {
                                 var app:* = undefined;
                                 app = ModuleManager.getModule(ClientConfig.getAppModule("TaskIntro_902"));
                                 app.setup();
                                 app.show();
                                 app.sharedEvents.addEventListener(Event.CLOSE,function(param1:Event):void
                                 {
                                    var evt:Event = param1;
                                    app.sharedEvents.removeEventListener(Event.CLOSE,arguments.callee);
                                    app.destroy();
                                    app = null;
                                    NpcDialog.show(NPC.SEER,["大事不好，那里一定有问题，看样子一定要亲自去一趟才会知道真相了！"],["恩恩，我们一起去！"],[function():void
                                    {
                                       TasksManager.complete(TASK_ID,0,function():void
                                       {
                                          Task902.initForMap698(MapProcessConfig.currentProcessInstance);
                                       });
                                    }]);
                                 });
                              });
                           }]);
                        },false);
                     }]);
                  }]);
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
