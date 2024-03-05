package com.robot.app.task.taskscollection
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.control.TaskController_899;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.utils.DisplayUtil;
   
   public class Task899
   {
      
      public static var _map:BaseMapProcess;
      
      private static var _trigger:MovieClip;
       
      
      public function Task899()
      {
         super();
      }
      
      public static function initForMap698(param1:BaseMapProcess) : void
      {
         _map = param1;
         if(TasksManager.getTaskStatus(TaskController_899.TASK_ID) == TasksManager.COMPLETE)
         {
            _map.conLevel["task899mc"]["mika"].visible = false;
            _map.conLevel["task899mc"]["atieda"].visible = false;
         }
      }
      
      public static function initForMap702(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _map.conLevel["bossStone"].visible = false;
         ToolBarController.showOrHideAllUser(false);
         if(TasksManager.getTaskStatus(TaskController_899.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_899.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  Task887.destroy();
                  initStep1();
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
      
      public static function initForMap704(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ToolBarController.showOrHideAllUser(false);
         if(TasksManager.getTaskStatus(TaskController_899.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_899.TASK_ID,function(param1:Array):void
            {
               OgreController.isShow = false;
               if(Boolean(param1[1]) && !param1[2])
               {
                  initStep2();
               }
               else if(Boolean(param1[2]) && !param1[3])
               {
                  initStep3();
               }
               else if(Boolean(param1[3]) && !param1[4])
               {
                  initStep4();
               }
               else if(Boolean(param1[4]) && !param1[5])
               {
                  initStep5();
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
      
      private static function initStep2() : void
      {
         MainManager.selfVisible = false;
         AnimateManager.playMcAnimate(taskMC,1,"mc",function():void
         {
            NpcDialog.show(NPC.SEER,["住手！你们这群没心没肺的东西，赶快放了铁笼里幼小的精灵！否则让你尝尝我的厉害！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.LA_QI,["等等，那不是…拉妮吗？她居然还活着！别急我这就救你出来！"],null,null,false,function():void
               {
                  AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
                  {
                     NpcDialog.show(NPC.JI_LA_KE,["哈哈哈！你的朋友是救不了你的！你就放弃吧！"],["可恶！！！"],[function():void
                     {
                        NpcDialog.show(NPC.ATIEDA,[MainManager.actorInfo.nick + "别和他废话，先尝尝我斩月双刀的厉害！开战吧！"],["伙伴们，我们一起上！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                           {
                              taskMC.gotoAndStop(4);
                              MainManager.actorModel.x = 620;
                              MainManager.actorModel.y = 195;
                              MainManager.selfVisible = true;
                              NpcDialog.show(NPC.ATIEDA,["哼哼！知道我们的厉害了吧！"],["快去救拉妮吧！"],[function():void
                              {
                                 NpcDialog.show(NPC.SEER,["大家快看，那里有机关，一定可以拯救拉妮的，你们留在这里看着这些家伙，我过去去试试！"],["恩恩，没问题，你要小心啊！"],[function():void
                                 {
                                    _trigger = _map.conLevel["trigger1"];
                                    _trigger.buttonMode = true;
                                    _trigger.addEventListener(MouseEvent.CLICK,onClickTriggerStep2_0);
                                 }]);
                              }]);
                           });
                        }]);
                     }]);
                  });
               });
            });
         });
      }
      
      private static function onClickTriggerStep2_0(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         LevelManager.closeMouseEvent();
         MainManager.actorModel.moveAndAction(new Point(250,200),function():void
         {
            LevelManager.openMouseEvent();
            taskMC.gotoAndStop(5);
            _trigger.removeEventListener(MouseEvent.CLICK,onClickTriggerStep2_0);
            NpcDialog.show(NPC.SEER,["居然有两个，不知道哪个才是正确的，先试试再说！"],["扳动机关！"],[function():void
            {
               _trigger.addEventListener(MouseEvent.CLICK,onClickTriggerStep2_1);
            }]);
         });
      }
      
      private static function onClickTriggerStep2_1(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         AnimateManager.playMcAnimate(taskMC,6,"mc",function():void
         {
            _trigger.removeEventListener(MouseEvent.CLICK,onClickTriggerStep2_1);
            NpcDialog.show(NPC.SEER,["哎呀！看来不是这个，那我再试试另一个！"],["继续扳动机关！"],[function():void
            {
               taskMC.gotoAndStop(7);
               DisplayUtil.removeForParent(_trigger);
               _trigger = _map.conLevel["trigger2"];
               _trigger.buttonMode = true;
               _trigger.addEventListener(MouseEvent.CLICK,onClickTriggerStep2_2);
            }]);
         });
      }
      
      private static function onClickTriggerStep2_2(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         taskMC.gotoAndStop(8);
         LevelManager.closeMouseEvent();
         MainManager.actorModel.moveAndAction(new Point(695,200),function():void
         {
            LevelManager.openMouseEvent();
            AnimateManager.playMcAnimate(taskMC,8,"mc",function():void
            {
               DisplayUtil.removeForParent(_trigger);
               _trigger.removeEventListener(MouseEvent.CLICK,onClickTriggerStep2_2);
               NpcDialog.show(NPC.SEER,["哦…原来拉琪和拉妮是一对繁殖精灵！现在它们终于能在一起了！"],null,null,false,function():void
               {
                  TasksManager.complete(TaskController_899.TASK_ID,2,function():void
                  {
                     initStep3();
                  });
               });
            });
         });
      }
      
      private static function initStep3() : void
      {
         MainManager.selfVisible = false;
         taskMC.gotoAndStop(9);
         NpcDialog.show(NPC.LA_QI,["拉妮，居然能在这里再次遇到你真是太好了！放心，今后我一定会好好保护你的！"],["太感人了！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMC,9,"mc",function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["哇！这家伙是什么，看上去好像很厉害的样子！难道它是这里的守护者？？"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.ALUOBISI,["哼哼！这里的守护者，告诉你们吧！我就是巨石星的巨石灵王，很不幸你们遇到了我，那么你们的生命就在这里结束吧！"],["什么！巨石灵…王？？？？"],[function():void
                  {
                     NpcDialog.show(NPC.ALUOBISI,["不用惊讶！现在开始接受死亡的恐惧吧 ！"],null,null,false,function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_899_4"),function():void
                        {
                           taskMC.gotoAndStop(10);
                           NpcDialog.show(NPC.ALUOBISI,["哈哈哈！一群没用的家伙，从来都没有谁能经得起我的绝招！不过，这个奇怪的小家伙倒可以利用利用，那就归我了！"],["不行，你不能拿走我的米咔！"],[function():void
                           {
                              NpcDialog.show(NPC.ALUOBISI,["很遗憾！目前你们已经是无力反抗了，除非有奇迹发生！"],null,null,false,function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,10,"mc",function():void
                                 {
                                    NpcDialog.show(NPC.KALULU,["阿铁打，你竟然….难道你不要命了吗？快点放手啊！"],["阿铁打…"],[function():void
                                    {
                                       NpcDialog.show(NPC.SEER,["再这样下去，阿铁打随时会被拆散的！我要想办法帮他才行！"],null,null,false,function():void
                                       {
                                          AnimateManager.playMcAnimate(taskMC,11,"mc",function():void
                                          {
                                             NpcDialog.show(NPC.SEER,["糟糕！阿铁打居然被抓了，这可怎么办！不管了，再怎么样都要把阿铁打救出来！"],["赛尔，你不是它的对手！"],[function():void
                                             {
                                                TasksManager.complete(TaskController_899.TASK_ID,3,function():void
                                                {
                                                   initStep4();
                                                });
                                             }]);
                                          });
                                       });
                                    }]);
                                 });
                              });
                           }]);
                        });
                     });
                  }]);
               });
            });
         }]);
      }
      
      private static function initStep4() : void
      {
         taskMC.gotoAndStop(12);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_899_5"),function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["你…快放了米咔！它不属于你！"],["这个世界就是这样，胜者为王！"],[function():void
            {
               NpcDialog.show(NPC.ALUOBISI,["呵呵！你先想办法拯救自己吧！米咔暂时归我了，我的力量中如果能加入光系精灵的能量，那该有多好啊！啊哈哈哈！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.ALUOBISI,["不过你还有机会！想拯救你的伙伴，就来巨石星深处找我吧！"],["你等着，我们一定会来的！"],[function():void
                  {
                     MainManager.selfVisible = false;
                     AnimateManager.playMcAnimate(taskMC,12,"mc",function():void
                     {
                        TasksManager.complete(TaskController_899.TASK_ID,4,function():void
                        {
                           initStep5();
                        });
                     });
                  }]);
               });
            }]);
         });
      }
      
      private static function initStep5() : void
      {
         NpcDialog.show(NPC.KALULU,["赛小息, " + MainManager.actorInfo.formatNick + "你们还好吗？怎么会这样！原本好好的小队现在居然变的四分五裂！难道我们真的太自信了吗？"],null,null,false,function():void
         {
            NpcDialog.show(NPC.KALULU,["你们快醒醒！别留我一个人面对这个事实，我不行的！"],["怎么办！！！！"],[function():void
            {
               MainManager.selfVisible = false;
               AnimateManager.playMcAnimate(taskMC,13,"mc",function():void
               {
                  NpcDialog.show(NPC.SEER,["卡璐璐，先把赛小息修复再说，我们一定可以救回阿铁打和米咔的！"],["恩恩，我怎么把这个忘记了！"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,14,"mc",function():void
                     {
                        NpcDialog.show(NPC.SEER,["你们还是先回赛尔号再说，拯救伙伴的计划我们要从长计议，相信一定可以想到办法的！"],["恩恩，先返回赛尔号吧！"],[function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["亲爱的米咔、还有阿铁打！你们一定要坚持，我们很快就会来解救你们的！我发誓…."],null,null,false,function():void
                           {
                              MainManager.selfVisible = true;
                              AnimateManager.playMcAnimate(taskMC,15,"mc",function():void
                              {
                                 TasksManager.complete(TaskController_899.TASK_ID,5,function():void
                                 {
                                    _map.conLevel["NPClani"].visible = true;
                                    _map.conLevel["NPClaqi"].visible = true;
                                    OgreController.isShow = true;
                                    ToolBarController.showOrHideAllUser(true);
                                 });
                              });
                           });
                        }]);
                     });
                  }]);
               });
            }]);
         });
      }
      
      private static function initStep1() : void
      {
         OgreController.isShow = false;
         taskMC.gotoAndStop(1);
         taskMC.buttonMode = true;
         taskMC.addEventListener(MouseEvent.CLICK,onClickedStep_1);
         MapManager.currentMap.depthLevel.mouseEnabled = false;
      }
      
      private static function onClickedStep_1(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
         {
            taskMC.removeEventListener(MouseEvent.CLICK,onClickedStep_1);
            NpcDialog.show(NPC.SEER,["拉琪！你怎么出来了！伤势都好了吗？"],null,null,false,function():void
            {
               NpcDialog.show(NPC.LA_QI,["原来是恩人啊！你们怎么都来了！这里很危险，你们还是快离开这里吧！我不想连累你们！"],["拉琪，我们不会袖手旁观的！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                  {
                     NpcDialog.show(NPC.LANSITE,["呼呼…你们的正义再次唤醒了我！勇敢的英雄们巨石星的危机才刚刚开始，接下来你们可能会遇到比之前更坎坷的探险之路，你们愿意继续前往吗？"],null,null,false,function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_899_3"),function():void
                        {
                           NpcDialog.show(NPC.LA_QI,["万分感激，你们是我遇到过最善良、最勇敢的伙伴！这下麒麟一族和螺旋星系有救了！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.LANSITE,["等等，接下来你们将进入一个极度灼热的地方，就凭一般的装备是无法承受的！不过你们放心，我会帮助你们的！"],["极度灼热？？"],[function():void
                              {
                                 LevelManager.closeMouseEvent();
                                 MainManager.actorModel.moveAndAction(new Point(635,470),function():void
                                 {
                                    LevelManager.openMouseEvent();
                                    MainManager.selfVisible = false;
                                    AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
                                    {
                                       NpcDialog.show(NPC.LANSITE,["相信这些能量保护罩能够帮助你们抵挡接下来所发生的一切！前进吧！勇士们！"],["恩恩，你就等我们的好消息吧！"],[function():void
                                       {
                                          TasksManager.complete(TaskController_899.TASK_ID,1,function():void
                                          {
                                             MapManager.changeMap(704);
                                          });
                                       }]);
                                    });
                                 });
                              }]);
                           });
                        },false);
                     });
                  });
               }]);
            });
         });
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 702)
         {
            return _map.conLevel["task899mc"];
         }
         if(MapManager.currentMap.id == 704)
         {
            return _map.animatorLevel["task899mc"];
         }
         return null;
      }
      
      private static function clearTrigger() : void
      {
         if(_trigger)
         {
            _trigger.removeEventListener(MouseEvent.CLICK,onClickTriggerStep2_0);
            _trigger.removeEventListener(MouseEvent.CLICK,onClickTriggerStep2_1);
            _trigger.removeEventListener(MouseEvent.CLICK,onClickTriggerStep2_2);
            DisplayUtil.removeForParent(_trigger);
            _trigger = null;
         }
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         OgreController.isShow = true;
         if(taskMC)
         {
            if(MapManager.currentMap.id == 702)
            {
               _map.conLevel["bossStone"].visible = true;
               taskMC.removeEventListener(MouseEvent.CLICK,onClickedStep_1);
            }
            else if(MapManager.currentMap.id == 704)
            {
               clearTrigger();
            }
            DisplayUtil.removeForParent(taskMC);
         }
         MainManager.selfVisible = true;
         if(ToolBarController.panel.panelIsShow)
         {
            ToolBarController.showOrHideAllUser(true);
         }
         _map = null;
      }
   }
}
