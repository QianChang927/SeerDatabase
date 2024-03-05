package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1234;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1234
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1234()
      {
         super();
      }
      
      private static function get taskMC() : MovieClip
      {
         return MapManager.currentMap.controlLevel["task1234mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1234.TASK_ID);
      }
      
      public static function destroy() : void
      {
         MainManager.selfVisible = true;
         if(_map)
         {
            DisplayUtil.removeForParent(taskMC);
            taskMC.removeEventListener(MouseEvent.CLICK,pro1);
            _map = null;
         }
      }
      
      public static function initForMap782(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         taskMC.buttonMode = true;
         DisplayUtil.stopAllMovieClip(taskMC);
         MainManager.selfVisible = false;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1234.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  taskMC.addEventListener(MouseEvent.CLICK,pro1);
               }
               else if(Boolean(param1[1]) && !param1[2])
               {
                  pro2();
               }
               else if(Boolean(param1[2]) && !param1[3])
               {
                  pro3();
               }
               else
               {
                  destroy();
               }
            });
         }
         else
         {
            destroy();
         }
      }
      
      private static function pro1(param1:MouseEvent) : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 20
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      public static function pro2() : void
      {
         NpcDialog.show(NPC.ALLISON,["我的小祖宗，你终于肯上了！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.LEIYI,["来吧艾里克，让我们痛快的战一场！"],null,null,false,function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1234_3"),function():void
               {
                  NpcDialog.show(NPC.ZOG,["洛拉菲德、斯克鲁！给我干掉赛小息他们！"],["遵命！"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,6,"mc",function():void
                     {
                        NpcDialog.show(NPC.ALLISON,["哼哼！雷伊！你再强也耐不住这么多强者联手，看你能抵抗到何时！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.LEIYI,["我不会让你伤害到我的朋友！"],null,null,false,function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,7,"mc",function():void
                              {
                                 NpcDialog.show(NPC.AILIKE,["雷伊，你果然很厉害，但是你中了艾里克的魔神天明闪，受到重伤了吧！"],["雷伊受伤了？太好了！"],[function():void
                                 {
                                    NpcDialog.show(NPC.ZOG,["天赐良机！雷伊，你在这里慢慢耗吧！我们先去毁灭赫尔卡星，然后就轮到赛尔号了！哇哈哈哈！"],null,null,false,function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,8,"mc",function():void
                                       {
                                          NpcDialog.show(NPC.SAIXIAOXI,["雷伊！你伤的太重了，不要勉强啊！"],["不行！赛尔号需要我！"],[function():void
                                          {
                                             NpcDialog.show(NPC.AILIKE,["雷伊，你中了艾里克的魔神天明闪，现在的你根本不可能是海盗的对手，即使去了，你也只有死路一条！"],null,null,false,function():void
                                             {
                                                NpcDialog.show(NPC.LEIYI,["正义的力量永远不会向邪恶屈服！我是赫尔卡星的守护神！与赫尔卡星共存亡是我永远不变的誓言！"],["誓……言……"],[function():void
                                                {
                                                   AnimateManager.playMcAnimate(taskMC,9,"mc",function():void
                                                   {
                                                      EventManager.addEventListener(Event.CLOSE,onClose);
                                                      ModuleManager.showModule(ClientConfig.getAppModule("PuzzleGame"),"正在加载 ..");
                                                   });
                                                }]);
                                             });
                                          }]);
                                       });
                                    });
                                 }]);
                              });
                           });
                        });
                     });
                  }]);
               });
            });
         });
      }
      
      private static function onClose(param1:Event) : void
      {
         var e:Event = param1;
         EventManager.removeEventListener(Event.CLOSE,onClose);
         CartoonManager.play(ClientConfig.getFullMovie("task_1234_1"),function():void
         {
            NpcDialog.show(NPC.AILIKE,["艾里克伤心……艾里克本来也想做雷伊那样的人……艾里克为什么会变成了一个坏人……"],null,null,false,function():void
            {
               NpcDialog.show(NPC.LEIYI,["艾里克！现在回头并不晚，放下仇恨，夺回守护神的荣耀！"],null,null,false,function():void
               {
                  AnimateManager.playMcAnimate(taskMC,10,"mc",function():void
                  {
                     NpcDialog.show(NPC.AILIKE,["现在，真的还不晚吗？"],["是的！"],[function():void
                     {
                        NpcDialog.show(NPC.LEIYI,["艾里克！我相信即使你遭遇过不公正的对待，你仍然有一颗守护神的心！"],["艾里克，感动！"],[function():void
                        {
                           TasksManager.complete(TaskController_1234.TASK_ID,2,function(param1:Boolean):void
                           {
                              if(param1)
                              {
                                 pro3();
                              }
                           });
                        }]);
                     }]);
                  });
               });
            });
         });
      }
      
      private static function pro3() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 13
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
   }
}
