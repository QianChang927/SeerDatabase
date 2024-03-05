package com.robot.app.task.taskscollection
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.control.TaskController_934;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.manager.map.config.MapProcessConfig;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task934
   {
      
      public static var _map:BaseMapProcess;
      
      private static var _lani:MovieClip;
       
      
      public function Task934()
      {
         super();
      }
      
      public static function initForMap698(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TaskController_934.TASK_ID) == TasksManager.UN_ACCEPT)
         {
            _lani = taskMC;
            DisplayUtil.removeForParent(_lani);
            NpcController.showNpc(113);
         }
         else if(TasksManager.getTaskStatus(TaskController_934.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_934.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  _lani = taskMC;
                  DisplayUtil.removeForParent(_lani);
                  NpcController.showNpc(113);
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
      
      public static function initForMap29(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         (_map.conLevel["task934Trigger_1"] as MovieClip).mouseEnabled = false;
         (_map.conLevel["task934Trigger_1"] as MovieClip).mouseChildren = false;
         (_map.conLevel["task934Trigger_4"] as MovieClip).mouseEnabled = false;
         (_map.conLevel["task934Trigger_4"] as MovieClip).mouseChildren = false;
         if(TasksManager.getTaskStatus(TaskController_934.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_934.TASK_ID,function(param1:Array):void
            {
               ToolBarController.showOrHideAllUser(false);
               OgreController.isShow = false;
               if(Boolean(param1[0]) && !param1[1])
               {
                  initStep1();
               }
               else if(Boolean(param1[1]) && !param1[2])
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
      
      public static function initStep0() : void
      {
         ToolBarController.showOrHideAllUser(false);
         OgreController.isShow = false;
         NpcDialog.show(NPC.SAIXIAOXI,[MainManager.actorInfo.formatNick + "，你终于回来了，我们正在庆祝这次的胜利呢？你也一起加入我们吧！"],["但是第五星系…"],[function():void
         {
            NpcDialog.show(NPC.SEER,["我感觉第五星系的事情并不像你想的这么简单，你忘记了邪恶四灵吗？我们才击败了其中的一个！不是吗？"],["好像对哦！"],[function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_934_dialogue_1"),function():void
               {
                  MapProcessConfig.currentProcessInstance.conLevel.addChild(_lani);
                  NpcDialog.show(NPC.SEER,["拉琪、拉妮你们俩安全就好，这次你们不会再分开了，呵呵！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.LA_QI,["伙伴们，这次来主要是有0xff0000两件事情0xffffff想告诉你们，首先感谢你们拯救了巨石星，另一件事情就是0xff0000艾伦星0xffffff…"],["艾…伦星怎么了？"],[function():void
                     {
                        NpcDialog.show(NPC.LA_QI,["那里有我的0xff0000一位好伙伴0xffffff，艾伦星正在饱受着邪恶四灵的统治，如果你们可以的话，能帮我拯救我的那位0xff0000龙族朋友0xffffff吗？"],["什么！！！龙族！！！！"],[function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["既然这样，拉琪、拉妮就在飞船等我们的好消息吧！你的朋友也是我们的朋友！事不宜迟，立刻前往艾伦星0xff0000拯救龙族之友0xffffff！"],["赛尔小分队，出发！！！"],[function():void
                           {
                              AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_934_1"),function():void
                              {
                                 TasksManager.complete(TaskController_934.TASK_ID,0,function():void
                                 {
                                    MapManager.changeMap(29);
                                 });
                              });
                           }]);
                        }]);
                     }]);
                  });
               },false);
            }]);
         }]);
      }
      
      private static function initStep1() : void
      {
         MainManager.selfVisible = false;
         taskMC.gotoAndStop(1);
         taskMC.buttonMode = true;
         taskMC.addEventListener(MouseEvent.CLICK,onStepHandler_1_0);
      }
      
      private static function onStepHandler_1_0(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         taskMC.removeEventListener(MouseEvent.CLICK,onStepHandler_1_0);
         taskMC.gotoAndStop(2);
         taskMC.buttonMode = false;
         NpcDialog.show(NPC.SAIXIAOXI,["伙伴们，相信这里就是艾伦星，但是看上去好像没有遭受很严重的破坏！真是奇怪啊！"],["还是先在附近观察一下吧！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
            {
               NpcDialog.show(NPC.ATIEDA,["米咔，你吵死了！别打扰我们勘察，去一边玩吧！！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["等等！米咔有这样的反应，是有原因的！一定是米咔发现了什么！"],["树叶后面一定有古怪！"],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["恩恩，我也认同小息的看法！米咔和我们在一起这么久，不会搞错的！"],["搬动树叶查看真相！"],[function():void
                     {
                        CommonUI.addYellowArrow(_map.conLevel["task934Trigger_1"] as MovieClip);
                        (_map.conLevel["task934Trigger_1"] as MovieClip).buttonMode = true;
                        (_map.conLevel["task934Trigger_1"] as MovieClip).mouseEnabled = true;
                        (_map.conLevel["task934Trigger_1"] as MovieClip).mouseChildren = true;
                        (_map.conLevel["task934Trigger_1"] as MovieClip).addEventListener(MouseEvent.CLICK,onStepHandler_1_1);
                     }]);
                  }]);
               });
            });
         }]);
      }
      
      private static function onStepHandler_1_1(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         CommonUI.removeYellowArrow(_map.conLevel["task934Trigger_1"] as MovieClip);
         (_map.conLevel["task934Trigger_1"] as MovieClip).buttonMode = false;
         (_map.conLevel["task934Trigger_1"] as MovieClip).mouseEnabled = false;
         (_map.conLevel["task934Trigger_1"] as MovieClip).mouseChildren = false;
         (_map.conLevel["task934Trigger_1"] as MovieClip).removeEventListener(MouseEvent.CLICK,onStepHandler_1_1);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_934_dialogue_2"),function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["你…你究竟是谁啊！为什么要躲在树叶后面吓人呢？"],["小息快看天上！！！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
               {
                  NpcDialog.show(NPC.KALULU,["那不是阿洛比斯和其他邪恶三灵吗？它们怎么会打起来呢？"],["这边！！！！"],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["大家快来这边，我们还是先隐蔽一下，看看究竟发生什么事情吧！"],["恩恩，好主意赛尔！"],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
                        {
                           TasksManager.complete(TaskController_934.TASK_ID,1,function():void
                           {
                              initStep2();
                           });
                        });
                     }]);
                  }]);
               });
            }]);
         },false);
      }
      
      private static function initStep2() : void
      {
         MainManager.selfVisible = false;
         taskMC.gotoAndStop(5);
         NpcDialog.show(NPC.ALUOBISI_1,["不要再打了，！这次的失败完全是因为珀伽索斯的原因，否则我早就成功了！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.HONGSE_HEIYING,["阿洛比斯别再为你的失败找理由了，你应该知道规则！！！"],["什么！难道你们想…"],[function():void
            {
               NpcDialog.show(NPC.HONGSE_HEIYING,["相信你也应该知道，在我们这个组织中是0xff0000绝对不允许失败的0xffffff！计划失败就等于你的无能，这样你也不配成为邪恶四灵之一！"],["接受惩罚吧！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,5,"mc",function():void
                  {
                     NpcDialog.show(NPC.ALUOBISI_1,["少了我！你们是不可能成功的！哈哈哈，我在0xff0000 黑墓之地 0xffffff等着你们！让我们再沉睡一万年吧！"],null,null,false,function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_934_2"),function():void
                        {
                           taskMC.gotoAndStop(6);
                           NpcDialog.show(NPC.PALUODIYA,["长眠吧！阿洛比斯，你已经尽力了！接下来就让我们来实现曾经邪恶四灵的野心吧！啊哈哈哈！"],["那这里就交给你了帕罗狄亚！！"],[function():void
                           {
                              NpcDialog.show(NPC.PALUODIYA,["恩恩，你们先回去吧！我不会重蹈阿洛比斯的覆辙！这些小鬼休想找到艾伦星的所有0xff0000 星辰之柱0xffffff！"],null,null,false,function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,6,"mc",function():void
                                 {
                                    NpcDialog.show(NPC.PALUODIYA,["别躲躲闪闪了，快出来吧！我早就发现你们了！"],["什么！这样也能被发现？？"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,7,"mc",function():void
                                       {
                                          NpcDialog.show(NPC.ZOG,["你个白痴，他是在嘲笑我们！也是在侮辱海盗集团，不过你可别高兴的太早，一切都在我们掌握之中！！！"],null,null,false,function():void
                                          {
                                             NpcDialog.show(NPC.PALUODIYA,["废话少说！给我滚的远远的，下次别让我再看见你们，否则叫你们有来无回！"],["帕罗狄亚你给我记住！"],[function():void
                                             {
                                                AnimateManager.playMcAnimate(taskMC,8,"mc",function():void
                                                {
                                                   TasksManager.complete(TaskController_934.TASK_ID,2,function():void
                                                   {
                                                      initStep3();
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
                  });
               }]);
            }]);
         });
      }
      
      private static function initStep3() : void
      {
         MainManager.selfVisible = false;
         taskMC.gotoAndStop(9);
         NpcDialog.show(NPC.PALUODIYA,["还有一群人呢？难道一定要我亲手把你们抓出来吗？"],["不好，原来它早就发现我们了！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMC,9,"mc",function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["哼哼，你这个怪物，既然被你发现了，不妨告诉你我们这次的目的就是打倒你们邪恶四灵，拯救第五星系！"],["笑话，天大的笑话！我可不是阿洛比斯！"],[function():void
               {
                  NpcDialog.show(NPC.KALULU,["你连自己的同伙都不放过，简直太可恶了！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.PALUODIYA,["呵呵，这就是游戏规则！！现在该轮到你们了，受死吧！"],["卟卟卟…"],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,10,"mc",function():void
                        {
                           NpcDialog.show(NPC.PALUODIYA,["呵呵，原来你还在艾伦星，我还以为你已经离开了呢？怎么还在挂念你的0xff0000龙族之心0xffffff吗？"],["原来它们认识啊！"],[function():void
                           {
                              NpcDialog.show(NPC.PALUODIYA,["如果你想找回你的0xff0000龙族之心0xffffff，现在就给我解决了他们，否则你这辈子也别想拿回它了！"],["事情已经很清楚了！"],[function():void
                              {
                                 NpcDialog.show(NPC.SAIXIAOXI,["既然是这样，那我们就更不能袖手旁观了！0xff0000米咔0xffffff这家伙就交给你了！"],null,null,false,function():void
                                 {
                                    AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_934_3"),function():void
                                    {
                                       NpcDialog.show(NPC.PALUODIYA,["废物，居然连这么这样的对手都战胜不了，要你何用！"],["卟卟卟…"],[function():void
                                       {
                                          NpcDialog.show(NPC.SAIXIAOXI,["嗯！之前小布还能说话的，怎么现在支支吾吾呢？0xff0000帕罗狄亚0xffffff你究竟对小布做了什么？"],["龙族之心又是什么？"],[function():void
                                          {
                                             NpcDialog.show(NPC.PALUODIYA,["哈哈哈！拥有强大能量的0xff0000龙族之心0xffffff曾经是属于小布的，不过就算是这样，小布也不能好好利用它，还不如给我！"],["你…居然抢了小布的龙族之心？"],[function():void
                                             {
                                                TasksManager.complete(TaskController_934.TASK_ID,3,function():void
                                                {
                                                   initStep4();
                                                });
                                             }]);
                                          }]);
                                       }]);
                                    });
                                 });
                              }]);
                           }]);
                        });
                     }]);
                  });
               }]);
            });
         }]);
      }
      
      private static function initStep4() : void
      {
         MainManager.selfVisible = false;
         taskMC.gotoAndStop(11);
         CartoonManager.play(ClientConfig.getFullMovie("task_934_cartoon"),function():void
         {
            NpcDialog.show(NPC.ATIEDA,["实在是太可恶了，帕罗狄亚先吃我一刀再说！"],["你不可能伤害到我的！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,11,"mc",function():void
               {
                  NpcDialog.show(NPC.PALUODIYA,["别浪费体力了，给你们一次机会，来艾伦星深处找我吧！记得小布的龙族之心还在我这里哦！哈哈哈！"],["你这家伙！我们不会放过你的！"],[function():void
                  {
                     NpcDialog.show(NPC.PALUODIYA,["别高兴的太早，想要维持小布的生命，不但要找到龙族之心，更需要的就是0xff0000激活0xffffff艾伦星上0xff0000四个不同的能量池0xffffff，如果你们可以的话！"],null,null,false,function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,12,"mc",function():void
                        {
                           NpcDialog.show(NPC.SEER,["小息，我们快想办法激活能量池再说，大家快找找！"],["那个不就是吗？"],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,13,"mc",function():void
                              {
                                 NpcDialog.show(NPC.SAIXIAOXI,["奇怪了，这个东西为什么会在这里呢？让我好好看看！"],["点击海边的贝壳！"],[function():void
                                 {
                                    CommonUI.addYellowArrow(_map.conLevel["task934Trigger_4"] as MovieClip);
                                    (_map.conLevel["task934Trigger_4"] as MovieClip).buttonMode = true;
                                    (_map.conLevel["task934Trigger_4"] as MovieClip).mouseEnabled = true;
                                    (_map.conLevel["task934Trigger_4"] as MovieClip).mouseChildren = true;
                                    (_map.conLevel["task934Trigger_4"] as MovieClip).addEventListener(MouseEvent.CLICK,onStepHandler_4_0);
                                 }]);
                              });
                           }]);
                        });
                     });
                  }]);
               });
            }]);
         });
      }
      
      private static function onStepHandler_4_0(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         CommonUI.removeYellowArrow(_map.conLevel["task934Trigger_4"] as MovieClip);
         (_map.conLevel["task934Trigger_4"] as MovieClip).buttonMode = false;
         (_map.conLevel["task934Trigger_4"] as MovieClip).mouseEnabled = false;
         (_map.conLevel["task934Trigger_4"] as MovieClip).mouseChildren = false;
         (_map.conLevel["task934Trigger_4"] as MovieClip).removeEventListener(MouseEvent.CLICK,onStepHandler_4_0);
         AnimateManager.playMcAnimate(taskMC,14,"mc",function():void
         {
            selectAnswer();
         });
      }
      
      private static function selectAnswer() : void
      {
         NpcDialog.show(NPC.JIJUXIE,["我是宇宙漫游旅行家，走着走着我觉得累了，所以在这里休息一下，想让我离开就一定要回答我的问题，你说海水是什么味道呢？"],["海水是咸的！","海水是甜的！"],[function():void
         {
            answerRight();
         },function():void
         {
            NpcDialog.show(NPC.JIJUXIE,["嗯？你确定海水是甜的嘛？再好好想想吧！"],["恩，让我再试一次！"],[function():void
            {
               selectAnswer();
            }]);
         }]);
      }
      
      private static function answerRight() : void
      {
         AnimateManager.playMcAnimate(taskMC,15,"mc",function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["太好了！这下小布就有救了！不过，接下来想要找回龙族之心还是有困难的！怎么办呢？"],["快看小布它怎么了！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,16,"mc",function():void
               {
                  NpcDialog.show(NPC.SEER,["伙伴们，我们一定要想办法找回0xff0000龙族之心0xffffff，还小布一个0xff0000真正的龙族身份0xffffff！"],["恩恩，我们这就回赛尔号汇报！"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,17,"mc",function():void
                     {
                        NpcDialog.show(NPC.SEER,["小布，你放心！你一定可以成为真正的龙族，到时候我一定会带你去0xff0000龙王神殿0xffffff找0xff0000哈莫雷特龙王子0xffffff！"],["拉琪、拉妮！你们就放心吧！"],[function():void
                        {
                           TasksManager.complete(TaskController_934.TASK_ID,4,function():void
                           {
                              destroy();
                           });
                        }]);
                     });
                  }]);
               });
            }]);
         });
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 698)
         {
            return _map.conLevel["task934mc"];
         }
         if(MapManager.currentMap.id == 29)
         {
            return _map.conLevel["task934mc"];
         }
         return null;
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         OgreController.isShow = true;
         MainManager.selfVisible = true;
         ToolBarController.showOrHideAllUser(true);
         if(taskMC)
         {
            if(MapManager.currentMap.id == 29)
            {
               taskMC.removeEventListener(MouseEvent.CLICK,onStepHandler_1_0);
               (_map.conLevel["task934Trigger_4"] as MovieClip).removeEventListener(MouseEvent.CLICK,onStepHandler_4_0);
               (_map.conLevel["task934Trigger_1"] as MovieClip).removeEventListener(MouseEvent.CLICK,onStepHandler_1_1);
            }
            DisplayUtil.removeForParent(taskMC);
         }
         _lani = null;
         _map = null;
      }
   }
}
