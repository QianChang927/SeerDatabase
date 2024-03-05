package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1306;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1306
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1306()
      {
         super();
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 803)
         {
            return MapManager.currentMap.topLevel["task1306mc"];
         }
         return MapManager.currentMap.controlLevel["task1306mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1306.TASK_ID);
      }
      
      public static function initForMap803(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1306.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  taskMC.buttonMode = true;
                  taskMC.addEventListener(MouseEvent.CLICK,step1);
               }
               else if(Boolean(param1[2]) && !param1[3])
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  taskMC.buttonMode = true;
                  taskMC.gotoAndStop(5);
                  taskMC.addEventListener(MouseEvent.CLICK,endStep);
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
      
      public static function initForMap801(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1306.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  startStep();
               }
               else if(Boolean(param1[1]) && !param1[2])
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  taskMC.buttonMode = true;
                  taskMC.gotoAndStop(5);
                  taskMC.addEventListener(MouseEvent.CLICK,step2);
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
      
      private static function startStep() : void
      {
         NpcDialog.show(NPC.NASIQI_NORMOL,["这就是传说中将带来世界末日的冰封之门！？"],["不错！"],[function():void
         {
            NpcDialog.show(NPC.ELINGSHOU,["不错，门的那一边就是我的故乡真正的恶灵深渊！随着整个世界陷入冰封末日，恶灵深渊的势力也将开始入侵！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.NASIQI_NORMOL,["这样一来，无论赛尔们还是战神联盟都会顾此失彼、手忙脚乱了！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.ELINGSHOU,["小的们！都出来耍耍吧！"],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,1,"mc1",function():void
                     {
                        NpcDialog.show(NPC.ELINGSHOU,["纳斯琪，你马上去找海盗！这次我们搞大点，陪那些一直和我们作对的家伙好好玩玩！"],["遵命！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,2,"mc2",function():void
                           {
                              NpcDialog.show(NPC.ZOG,["恶灵兽大人！小人对您老人家一直是万分敬仰！那就如滔滔江水连绵不绝啊！ "],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.ALLISON,["我也是我也是！必须连绵不绝！ "],null,null,false,function():void
                                 {
                                    NpcDialog.show(NPC.ELINGSHOU,["哼，油嘴滑舌的小喽啰，连我也敢监视！"],null,null,false,function():void
                                    {
                                       NpcDialog.show(NPC.NASIQI_NORMOL,["主人！要不要我打发了他们！"],null,null,false,function():void
                                       {
                                          AnimateManager.playMcAnimate(taskMC,3,"mc3",function():void
                                          {
                                             NpcDialog.show(NPC.ELINGSHOU,["他们虽然脓包，可是蠢货有蠢货的用处，要给赛尔和战神联盟多制造点麻烦，还需要他们出一份力！"],null,null,false,function():void
                                             {
                                                NpcDialog.show(NPC.ZOG,["大人说的对！我们虽然不是雷伊和盖亚的对手，可是欺负弱小精灵、破坏环境制造混乱却是非常擅长！"],null,null,false,function():void
                                                {
                                                   NpcDialog.show(NPC.ELINGSHOU,["很好，你们去协助恶灵深渊的势力一起入侵，要让那些反对我的人知道和恶灵势力对抗没好下场的！"],["是！"],[function():void
                                                   {
                                                      AnimateManager.playMcAnimate(taskMC,4,"mc4",function():void
                                                      {
                                                         TasksManager.complete(TaskController_1306.TASK_ID,0,function(param1:Boolean):void
                                                         {
                                                            if(param1)
                                                            {
                                                               MapManager.changeMap(803);
                                                            }
                                                         });
                                                      });
                                                   }]);
                                                });
                                             });
                                          });
                                       });
                                    });
                                 });
                              });
                           });
                        }]);
                     });
                  });
               });
            });
         }]);
      }
      
      private static function step1(param1:MouseEvent) : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 17
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function step2(param1:MouseEvent) : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 20
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function endStep(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.YISUOLI,["盖亚，你可一定要尽快领悟石破天惊的最终奥义！"],null,null,false,function():void
         {
            AnimateManager.playMcAnimate(taskMC,6,"mc6",function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["大祭司，这里就是冰晶奇宫吗？你带我们来这里干嘛呀？"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.MUMU,["恶灵兽已经提前行动了！它打开了冰封之门！12月21日，世界末日即将来临！ "],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,7,"mc7",function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["刚才我在飞船上听卫兵们说起，现在天马星出现了大量来自恶灵深渊的黑暗势力！现在苍云之海已经是他们巢穴了！ "],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.MUMU,["纳斯琪将凝聚恶灵兽的力量变得无比强大，战神联盟需要专心准备才能对付它，尤其盖亚已经开始修炼了！ "],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.MUMU,["我已经通过布莱克和贾斯汀站长商量过了！接下来恶灵深渊的黑暗势力就靠你们赛尔了！"],["交给我们吧！"],[function():void
                              {
                                 NpcDialog.show(NPC.MUMU,["苍云之海已经陷落，以后这里就是我们的前沿阵地，你们有拿不定主意的事，找伊索里就可以，它可是盖亚一族的家臣！"],["恩恩！"],[function():void
                                 {
                                    NpcDialog.show(NPC.MUMU,["世界末日的倒计时已经开启，我们一定要打起十二万分的小心！"],["好！"],[function():void
                                    {
                                       NpcDialog.show(NPC.MUMU,["全体赛尔总动员！和邪恶势力对抗到底！大家回去准备迎战恶灵深渊的入侵势力吧！"],["好的！我们飞船见！"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(taskMC,8,"mc8",function():void
                                          {
                                             AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1306_5"),function():void
                                             {
                                                TasksManager.complete(TaskController_1306.TASK_ID,3,function(param1:Boolean):void
                                                {
                                                   if(param1)
                                                   {
                                                      destroy();
                                                      MainManager.selfVisible = true;
                                                      ToolBarController.showOrHideAllUser(true);
                                                   }
                                                });
                                             },false);
                                          });
                                       }]);
                                    }]);
                                 }]);
                              }]);
                           });
                        });
                     });
                  });
               });
            });
         });
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            taskMC.removeEventListener(MouseEvent.CLICK,step1);
            taskMC.removeEventListener(MouseEvent.CLICK,step2);
            taskMC.removeEventListener(MouseEvent.CLICK,endStep);
            DisplayUtil.removeForParent(taskMC);
            _map = null;
         }
      }
   }
}
