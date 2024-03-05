package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1330;
   import com.robot.app.toolBar.ToolBarController;
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
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1330
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1330()
      {
         super();
      }
      
      private static function get taskMC() : MovieClip
      {
         return _map.conLevel["task1330mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1330.TASK_ID);
      }
      
      private static function get taskState1343() : uint
      {
         return TasksManager.getTaskStatus(1343);
      }
      
      public static function initForMap102(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1330.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  startStep();
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
      
      public static function initForMap809(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1330.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  taskMC.buttonMode = true;
                  taskMC.addEventListener(MouseEvent.CLICK,step1);
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
      
      public static function initForMap810(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            if(taskState1343 == TasksManager.ALR_ACCEPT)
            {
               TasksManager.getProStatusList(1343,function(param1:Array):void
               {
                  if(Boolean(param1[1]) && !param1[2])
                  {
                     destroy();
                  }
                  else
                  {
                     initMap810();
                  }
               });
            }
            else
            {
               initMap810();
            }
         }
         else
         {
            destroy();
         }
      }
      
      private static function initMap810() : void
      {
         TasksManager.getProStatusList(TaskController_1330.TASK_ID,function(param1:Array):void
         {
            if(Boolean(param1[1]) && !param1[2])
            {
               _map.topLevel.visible = false;
               MainManager.selfVisible = false;
               ToolBarController.showOrHideAllUser(false);
               taskMC.buttonMode = true;
               taskMC.addEventListener(MouseEvent.CLICK,step2);
            }
            else if(Boolean(param1[2]) && !param1[3])
            {
               _map.topLevel.visible = false;
               MainManager.selfVisible = false;
               ToolBarController.showOrHideAllUser(false);
               taskMC.buttonMode = true;
               endStep_1();
            }
            else
            {
               destroy();
            }
         });
      }
      
      private static function startStep() : void
      {
         NpcDialog.show(NPC.JUSTIN,["你好赛尔！最近有没有和你的精灵好好的修炼呀！"],["当然有！我早晚要成为和站长一样的英雄！"],[function():void
         {
            NpcDialog.show(NPC.JUSTIN,["天外有天！只要持之以恒，就一定可以有进步！"],["站长！我有事情想问问你……"],[function():void
            {
               NpcDialog.show(NPC.JUSTIN,["什么事情？"],["金角和银角兄弟，和你说了什么呀？"],[function():void
               {
                  NpcDialog.show(NPC.JUSTIN,["哦，那说来话就长了！"],null,null,false,function():void
                  {
                     CartoonManager.play(ClientConfig.getFullMovie("cartoon/task_133001"),function():void
                     {
                        NpcDialog.show(NPC.JUSTIN,["而麒麟留下了神谕，说有朝一日可以使用六把剑的人出现，神树之巅的圣战就将开始！这应该就是指我了！"],["哇，原来那俩土匪有这么大的来头！"],[function():void
                        {
                           NpcDialog.show(NPC.YINGKALUOSHI,["被恶灵兽吞下去还能逼它把自己吐出来，好想去会一会那个银角！"],["哈哈，英卡洛斯的斗志被激发起来了！"],[function():void
                           {
                              NpcDialog.show(NPC.JUSTIN,["对付恶灵兽要争分夺秒！事不宜迟，赛尔，叫上赛小息，我们这就去冰晶谜道找金角银角询问更多关于恶灵兽的事！"],["好！"],[function():void
                              {
                                 TasksManager.complete(TaskController_1330.TASK_ID,0,function(param1:Boolean):void
                                 {
                                    if(param1)
                                    {
                                       MapManager.changeMap(809);
                                    }
                                 });
                              }]);
                           }]);
                        }]);
                     });
                  });
               }]);
            }]);
         }]);
      }
      
      private static function step1(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         AnimateManager.playMcAnimate(taskMC,2,"mc2",function():void
         {
            NpcDialog.show(NPC.YINJIAO,["哈，是能使用六把剑的人！你们已经准备好了前往神树之巅了吗？"],null,null,false,function():void
            {
               NpcDialog.show(NPC.JUSTIN,["不错，这次我们来就是拜托两位带路的！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.JINJIAO,["好的好的！跟我们来吧！"],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,3,"mc3",function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1330_2"),function():void
                        {
                           taskMC.gotoAndStop(4);
                           step1_2();
                        },false);
                     });
                  });
               });
            });
         });
      }
      
      private static function step1_2() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1330_3"),function():void
         {
            taskMC.gotoAndStop(5);
            NpcDialog.show(NPC.NASIQI_SUPER,["拉摩斯！？比莫拉！？"],null,null,false,function():void
            {
               NpcDialog.show(NPC.LAMOSI,["喵！多亏了主人，我们的力量已经恢复了！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.BIMOLA_NORMOL,["嘶嘶！恶灵三巨头再次全员集合了！"],null,null,false,function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1330_4"),function():void
                     {
                        CartoonManager.play(ClientConfig.getFullMovie("cartoon/task_133002"),function():void
                        {
                           taskMC.gotoAndStop(4);
                           NpcDialog.show(NPC.KELISA,["三个打我一个还暗箭伤人，你们好卑鄙！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.BIMOLA_NORMOL,["嘶嘶！你当初和我战斗的时候，虽然没别人帮忙，可是那么多赛尔还有贾斯汀、圣光天马在一边，我就害怕的很！"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.BIMOLA_NORMOL,["我一害怕，本来有十成本事，就只能使出一成了！所以你们虽然没一起对付我，也和一起对付我差不多！"],["哼，强词夺理，你们想怎么样？"],[function():void
                                 {
                                    NpcDialog.show(NPC.NASIQI_SUPER,["佐格、艾利逊你们知道该怎么做了吧？"],null,null,false,function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,5,"mc5",function():void
                                       {
                                          AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1330_5"),function():void
                                          {
                                             TasksManager.complete(TaskController_1330.TASK_ID,1,function(param1:Boolean):void
                                             {
                                                if(param1)
                                                {
                                                   MapManager.changeMap(810);
                                                }
                                             });
                                          },false);
                                       });
                                    });
                                 }]);
                              });
                           });
                        });
                     },false);
                  });
               });
            });
         },false);
      }
      
      private static function step2(param1:MouseEvent) : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 16
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function endStep_1() : void
      {
         NpcDialog.show(NPC.ZOG,["哼，臭小子，死到临头还嘴硬！纳斯琪大人！比莫拉大人！拉摩斯大人！你们尽管上，我来掩护你们！"],null,null,false,function():void
         {
            AnimateManager.playMcAnimate(taskMC,11,"mc11",function():void
            {
               ModuleManager.showModule(ClientConfig.getTaskModule("TaskInteractive_1330"));
            });
         });
      }
      
      public static function endstep_2() : void
      {
         AnimateManager.playMcAnimate(taskMC,12,"mc12",function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1330_6"),function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1330_7"),function():void
               {
                  TasksManager.complete(TaskController_1330.TASK_ID,3,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        MainManager.selfVisible = true;
                        ToolBarController.showOrHideAllUser(true);
                        _map.topLevel.visible = true;
                        destroy();
                     }
                  });
               },false);
            });
         });
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            if(MapManager.currentMap.id != 102 && taskMC != null)
            {
               taskMC.removeEventListener(MouseEvent.CLICK,step1);
               taskMC.removeEventListener(MouseEvent.CLICK,step2);
               DisplayUtil.removeForParent(taskMC);
            }
            _map = null;
         }
      }
   }
}
