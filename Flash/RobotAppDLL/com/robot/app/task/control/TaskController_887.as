package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.Event;
   
   public class TaskController_887
   {
      
      public static const TASK_ID:uint = 887;
      
      private static var panel:AppModel;
       
      
      public function TaskController_887()
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
         NpcDialog.show(NPC.SHIPER,["2012终于来临了，接下来应该继续我们的旅途，向着宇宙中最为圣洁的地方0xFF0000星辰大海0xFFFFFF前进！不过那个黑影……"],["船长看上去好像有心事啊？！","船长，我等等再来找你哦！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               startPro();
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
               NpcDialog.show(NPC.SEER,["船长，你刚刚说什么黑影啊！是不是在诺可撒斯星出现的那个0xFF0000黑漆漆的家伙？0xFFFFFF"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.SHIPER,["哦！原来是赛尔啊！那个黑影可不一般，这次它的出现一定有什么预兆！我们不能轻视……"],["滴滴滴……"],[function():void
                  {
                     var app:* = undefined;
                     app = ModuleManager.getModule(ClientConfig.getAppModule("TaskIntro_887"));
                     app.setup();
                     app.show();
                     app.sharedEvents.addEventListener(Event.CLOSE,function(param1:Event):void
                     {
                        var evt:Event = param1;
                        app.sharedEvents.removeEventListener(Event.CLOSE,arguments.callee);
                        app.destroy();
                        app = null;
                        NpcDialog.show(NPC.SHIPER,["第五星系！！！果然猜得没错，那个黑影就是在告诉我们第五星系的存在！但是为什么会出现海盗呢？"],["哇！第…五星系……"],[function():void
                        {
                           NpcDialog.show(NPC.SHIPER,["事不宜迟，必须立刻派援军支援，否则恐怕会全军覆没啊！第五星系果然不寻常，否则不会引来海盗的注意！赛尔号，全速前进！"],["恩，我这就和赛小息他们作为先锋前往！"],[function():void
                           {
                              TasksManager.complete(TASK_ID,0,function():void
                              {
                                 MapManager.changeMap(698);
                              });
                           }]);
                        }]);
                     });
                  }]);
               });
            }
            else if(Boolean(a[0]) && !a[1])
            {
               NpcDialog.show(NPC.SEER,["各位伙伴们，大事不好！第五星系发现了海盗的踪迹！赛尔号的先遣部队正受到海盗的猛攻！"],["什么！！第五星系？？？"],[function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["啊哈！看来又该是我们露一手的时候了！伙伴们这次让海盗尝尝我们的厉害！"],["省省吧你！！"],[function():void
                  {
                     NpcDialog.show(NPC.ATIEDA,["就凭你？？笑话，还是看我的斩月双刀吧！我最讨厌的就是海盗，这次一定要把他们彻底击垮，哼！"],["都什么时候了你们还在争论不休！"],[function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_887_1"),function():void
                        {
                           NpcDialog.show(NPC.KALULU,["哇！全体出动了！快走吧！别再那里争论了！现在我们应该团结一心！"],["恩恩，出发！第五星系！"],[function():void
                           {
                              AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_887_2"),function():void
                              {
                                 TasksManager.complete(TASK_ID,1,function():void
                                 {
                                    MapManager.changeMap(702);
                                 });
                              });
                           }]);
                        },false);
                     }]);
                  }]);
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
