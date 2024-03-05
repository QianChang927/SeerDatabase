package com.robot.app.task.taskscollection
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class Task753
   {
      
      private static var _map:BaseMapProcess;
      
      private static const TASK_ID:uint = 753;
      
      private static var _mcForMap677:MovieClip;
      
      private static var _mcForMap668:MovieClip;
      
      private static var _mcForMap669:MovieClip;
      
      private static var _mcForMap676:MovieClip;
      
      private static var _ClickCount:uint = 1;
       
      
      public function Task753()
      {
         super();
      }
      
      public static function initTaskForMap677(param1:BaseMapProcess) : void
      {
         var i:uint = 0;
         var j:uint = 0;
         var map:BaseMapProcess = param1;
         _map = map;
         _mcForMap677 = _map.conLevel["task_753_1"];
         _mcForMap677.visible = false;
         _map.conLevel["yinengBoss"].visible = false;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            _mcForMap677.visible = true;
            _map.conLevel["task746"].visible = false;
            AnimateManager.playMcAnimate(_mcForMap677,1,"task_753_mc1",function():void
            {
               NpcDialog.show(NPC.SEER,["哇，光明这是怎么了？一定是为了和暗黑异能王的终极对战做准备吧！"],["帮助异能王！"],[function():void
               {
                  TasksManager.accept(TASK_ID,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        goStep1();
                     }
                  });
               }]);
            });
         }
         else if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  goStep1();
               }
               else if(Boolean(param1[0]) && !param1[1])
               {
                  goStep2();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && Boolean(param1[4]) && !param1[5])
               {
                  goStep6();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && Boolean(param1[4]) && Boolean(param1[5]) && !param1[6])
               {
                  goStep7();
               }
            });
         }
         else if(TasksManager.getTaskStatus(753) == TasksManager.COMPLETE)
         {
            _map.conLevel["task746"].visible = false;
            i = 0;
            while(i < 3)
            {
               _map.conLevel["crystal_" + i].gotoAndStop(8);
               i++;
            }
            if(TasksManager.getTaskStatus(746) == TasksManager.COMPLETE)
            {
               j = 3;
               while(j < 6)
               {
                  _map.conLevel["crystal_" + j].gotoAndStop(8);
                  j++;
               }
            }
            initYiNengBoss();
         }
      }
      
      private static function initYiNengBoss() : void
      {
         var _loc1_:uint = 0;
         _map.conLevel["yinengBoss"].visible = true;
         _map.conLevel["yinengBoss"].buttonMode = true;
         _map.conLevel["yinengBoss"].addEventListener(MouseEvent.CLICK,onYinengBossClick);
         if(BufferRecordManager.getState(MainManager.actorInfo,209))
         {
            _loc1_ = 0;
            while(_loc1_ < 6)
            {
               _map.conLevel["crystal_" + _loc1_].gotoAndStop(5);
               _map.conLevel["crystalTig_" + _loc1_].buttonMode = true;
               _map.conLevel["crystalTig_" + _loc1_].addEventListener(MouseEvent.CLICK,onFightBossClick);
               _loc1_++;
            }
         }
      }
      
      private static function onYinengBossClick(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         _map.conLevel["arrow"].visible = false;
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_753_4"),function():void
         {
            BufferRecordManager.setState(MainManager.actorInfo,209,true);
            NpcDialog.show(NPC.GUANMING_YINENGWANG,["如果你想拥有和我一样的超能力，那就来挑战我的0xff0000六重试炼0xffffff吧！只要你能顺利通过，接下来所发生的一切会让你终身难忘！你有这个勇气吗？"],["没问题，我现在就挑战你！"],[function():void
            {
               _map.conLevel["crystal_3"].gotoAndStop(5);
               _map.conLevel["crystalTig_3"].buttonMode = true;
               _map.conLevel["crystalTig_3"].addEventListener(MouseEvent.CLICK,onFightBossClick);
               _map.conLevel["crystal_4"].gotoAndStop(5);
               _map.conLevel["crystalTig_4"].buttonMode = true;
               _map.conLevel["crystalTig_4"].addEventListener(MouseEvent.CLICK,onFightBossClick);
            }]);
         });
      }
      
      private static function onFightBossClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("YiNengBossPanel"),"正在打开异能王的六重试炼....");
      }
      
      public static function initTaskForMap668(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _mcForMap668 = _map.conLevel["task_753_2"];
         _mcForMap668.visible = false;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  goStep3();
               }
            });
         }
      }
      
      public static function initTaskForMap669(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _mcForMap669 = _map.topLevel["task_753_3"];
         _mcForMap669.visible = false;
         _map.topLevel["arrow"].visible = false;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
               {
                  goStep4();
               }
            });
         }
      }
      
      public static function initTaskForMap676(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _mcForMap676 = _map.conLevel["task_753_4"];
         _mcForMap676.visible = false;
         _map.conLevel["arrow"].visible = false;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
               {
                  goStep5();
               }
            });
         }
      }
      
      public static function goStep1() : void
      {
         MainManager.selfVisible = false;
         OgreController.isShow = false;
         ToolBarController.showOrHideAllUser(false);
         _mcForMap677.visible = true;
         _mcForMap677.gotoAndStop(2);
         _map.conLevel["task746"].visible = false;
         NpcDialog.show(NPC.SEER,["光明…光明！你在干什么啊！是不是已经有战胜暗黑异能王的办法啦！我就知道，你肯定是最棒的！这下异能星有救了！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.GUANMING_YINENGWANG,["哎….还是没有成功！！！毕竟我现在一半的力量都被暗黑异能王占据着，使不出劲啊！"],["什么！怎么会这样？？？"],[function():void
            {
               NpcDialog.show(NPC.GUANMING_YINENGWANG,["原本暗黑异能王将永久被我封印在异能石中，正义与邪恶的能量也一直斗争了上万年！这次我们的出现也许就是天意吧！"],["天意！"],[function():void
               {
                  AnimateManager.playMcAnimate(_mcForMap677,2,"task_753_mc2",function():void
                  {
                     NpcDialog.show(NPC.SEER,["如果我没有猜错的话，光明你一直希望暗黑异能王能改邪归正，封印它也是为了净化它的心灵吗？"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.GUANMING_YINENGWANG,["说的没错，我当时就是抱着这样的目的才不杀它的！看来，我错了！而且错的很离谱，这次就让我亲手了断这多年的恩怨吧！"],["不，光明！我一定会和你并肩作战的！"],[function():void
                        {
                           NpcDialog.show(NPC.GUANMING_YINENGWANG,["呵呵！原来这个世界还是有正义存在啊！我已经感到很欣慰了，对了，小赛尔！很高兴能认识你，暗黑异能王的对手是我，你的任务是将正义坚持到底，快离开这里吧！"],["不行，在我的字典中没有逃跑这两个字！"],[function():void
                           {
                              AnimateManager.playMcAnimate(_mcForMap677,3,"task_753_mc3",function():void
                              {
                                 TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
                                 {
                                    if(param1)
                                    {
                                       goStep2();
                                    }
                                 });
                              });
                           }]);
                        }]);
                     });
                  });
               }]);
            }]);
         });
      }
      
      public static function goStep2() : void
      {
         _mcForMap677.visible = true;
         _mcForMap677.gotoAndStop(4);
         _map.conLevel["task746"].visible = false;
         MainManager.selfVisible = false;
         OgreController.isShow = false;
         ToolBarController.showOrHideAllUser(false);
         NpcDialog.show(NPC.SEER,["暗黑赛尔，你也来啦！这下好了，多个人多份力量！光明你就放心吧！我们会助你一臂之力的！"],["快告诉我们该做些什么吧！"],[function():void
         {
            NpcDialog.show(NPC.GUANMING_YINENGWANG,["好吧！不过想要击败暗黑异能王就一定要收集所有的恶魔水晶，只有这样才能真正开启恶魔封印，相信也只有这样才能克制暗黑异能王了！"],["恶魔水晶？？我们有啊！"],[function():void
            {
               NpcDialog.show(NPC.GUANMING_YINENGWANG,["什么！六颗恶魔水晶你们都找到了吗？快将这些水晶放入恶魔封印中吧！"],["啊！六颗？我们只寻找到三颗！"],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_753_1"),function():void
                  {
                     var i:* = 3;
                     while(i < 6)
                     {
                        _map.conLevel["crystal_" + i].gotoAndStop(8);
                        i++;
                     }
                     NpcDialog.show(NPC.GUANMING_YINENGWANG,["不行啊！缺少其他三颗恶魔水晶还是无法启动封印的终极能量！我们一定要想办法寻找其他恶魔水晶才行！"],["可恶，时间紧迫，这些水晶会在哪里呢？"],[function():void
                     {
                        AnimateManager.playMcAnimate(_mcForMap677,4,"task_753_mc4",function():void
                        {
                           NpcDialog.show(NPC.DINUOEN,["尊敬的光明异能王，很高兴能再次为您效劳！关于恶魔水晶的下落我都已经调查清楚了！"],["哦，好久不见啊！先知迪诺恩。"],[function():void
                           {
                              NpcDialog.show(NPC.DINUOEN,["为了这次战役，异能星上的所有精灵都行动起来了！相信它们很快就会抵达封印之境的！"],null,null,false,function():void
                              {
                                 CartoonManager.play(ClientConfig.getFullMovie("cartoon/task_753_1"),function():void
                                 {
                                    NpcDialog.show(NPC.SEER,["迪诺恩，快告诉我其余恶魔水晶的下落吧！我已经等不及了！"],["先别急，我这就告诉你们！"],[function():void
                                    {
                                       NpcDialog.show(NPC.DINUOEN,["听说，0xff0000蓝色恶魔水晶在异能部落，黄色恶魔水晶在异能山谷，最后一块橙色恶魔水晶在守护部落0xffffff，你们可要小心，别让暗黑异能王发现啊！"],["哇！太棒了，暗黑赛尔我们走！"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(_mcForMap677,5,"task_753_mc5",function():void
                                          {
                                             NpcDialog.show(NPC.ANHEI_SEER,["这件事是因我而起，所以作为赛尔，我一定要履行我的责任，别管我，放心去吧！赛尔！"],null,null,false,function():void
                                             {
                                                NpcDialog.show(NPC.SEER,["好吧！那你就和先知迪诺恩一起守护光明异能王吧！我找到恶魔水晶就马上回来！"],["异能部落，我来了！"],[function():void
                                                {
                                                   TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
                                                   {
                                                      if(param1)
                                                      {
                                                         MapManager.changeMap(668);
                                                      }
                                                   });
                                                }]);
                                             });
                                          });
                                       }]);
                                    }]);
                                 });
                              });
                           }]);
                        });
                     }]);
                  });
               }]);
            }]);
         }]);
      }
      
      public static function goStep3() : void
      {
         _map.depthLevel["rock"].visible = false;
         _map.conLevel["changeCapsule"].visible = false;
         _map.conLevel["task746"].visible = false;
         _mcForMap668.visible = true;
         MainManager.selfVisible = false;
         OgreController.isShow = false;
         ToolBarController.showOrHideAllUser(false);
         AnimateManager.playMcAnimate(_mcForMap668,1,"task_753_mc1",function():void
         {
            MainManager.selfVisible = true;
            MainManager.actorModel.x = 600;
            MainManager.actorModel.y = 280;
            NpcDialog.show(NPC.JIENI,["看来我们的守护石一定是都到了封印之境的感应，难道正如先知迪诺恩告诉我们的一样，守护石其实就是恶魔水晶其中的一部分？"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SEER,["太好了，恶魔水晶终于找到了！"],["点击中央的蓝色水晶石！"],[function():void
               {
                  _map.conLevel["arrow"].visible = true;
                  _map.conLevel["arrow"].x = 320;
                  _map.conLevel["arrow"].y = 150;
                  _map.conLevel["rockTig"].buttonMode = true;
                  _map.conLevel["rockTig"].addEventListener(MouseEvent.CLICK,onRockClick);
               }]);
            });
         });
      }
      
      private static function onRockClick(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         _map.conLevel["arrow"].visible = false;
         _map.conLevel["rockTig"].buttonMode = false;
         _map.conLevel["rockTig"].removeEventListener(MouseEvent.CLICK,onRockClick);
         AnimateManager.playMcAnimate(_mcForMap668,2,"task_753_mc2",function():void
         {
            NpcDialog.show(NPC.SEER,["耶，太棒了，接下来赶快去0xff0000异能山谷0xffffff，时间不多了，杰尼我们封印之境见！"],["恩恩，我们一定会来的！"],[function():void
            {
               TasksManager.complete(TASK_ID,2,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     MapManager.changeMap(669);
                  }
               });
            }]);
         });
      }
      
      public static function goStep4() : void
      {
         _mcForMap669.visible = true;
         _map.topLevel["task746"].visible = false;
         OgreController.isShow = false;
         ToolBarController.showOrHideAllUser(false);
         AnimateManager.playMcAnimate(_mcForMap669,1,"task_753_mc1",function():void
         {
            NpcDialog.show(NPC.SEER,["哇！这一定是恶魔水晶的光芒，一定是的，让我来试试！"],["点击石柱上的雪堆！"],[function():void
            {
               _map.topLevel["arrow"].visible = true;
               _map.topLevel["snowTig"].buttonMode = true;
               _map.topLevel["snowTig"].addEventListener(MouseEvent.CLICK,onSnowClick);
            }]);
         });
      }
      
      private static function onSnowClick(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         ++_ClickCount;
         AnimateManager.playMcAnimate(_mcForMap669,_ClickCount,"task_753_mc" + _ClickCount,function():void
         {
            if(_ClickCount == 3)
            {
               _map.topLevel["arrow"].visible = false;
               _map.topLevel["snowTig"].buttonMode = false;
               _map.topLevel["snowTig"].removeEventListener(MouseEvent.CLICK,onSnowClick);
               NpcDialog.show(NPC.SEER,["耶，黄色恶魔水晶也顺利找到，就差最后守护部落的那块了， 达迪拉，召集你们一族快去封印之境吧！"],["达迪拉一族将会一战成名！"],[function():void
               {
                  TasksManager.complete(TASK_ID,3,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        MapManager.changeMap(676);
                     }
                  });
               }]);
            }
         });
      }
      
      public static function goStep5() : void
      {
         _mcForMap676.visible = true;
         _map.conLevel["task746"].visible = false;
         OgreController.isShow = false;
         ToolBarController.showOrHideAllUser(false);
         AnimateManager.playMcAnimate(_mcForMap676,1,"task_753_mc1",function():void
         {
            NpcDialog.show(NPC.SEER,["哇！那一定时橙色恶魔晶石的机关，太好了！恶魔水晶马上就能收集全了！ "],["点击石柱上的符号！"],[function():void
            {
               _map.conLevel["arrow"].visible = true;
               _map.conLevel["lockTig1"].buttonMode = true;
               _map.conLevel["lockTig1"].addEventListener(MouseEvent.CLICK,onLockClick1);
            }]);
         });
      }
      
      private static function onLockClick1(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         _map.conLevel["arrow"].visible = false;
         _map.conLevel["lockTig1"].buttonMode = false;
         _map.conLevel["lockTig1"].removeEventListener(MouseEvent.CLICK,onLockClick1);
         AnimateManager.playMcAnimate(_mcForMap676,2,"task_753_mc2",function():void
         {
            _map.conLevel["arrow"].visible = true;
            _map.conLevel["arrow"].x = 230;
            _map.conLevel["arrow"].x = 200;
            _map.conLevel["lockTig2"].buttonMode = true;
            _map.conLevel["lockTig2"].addEventListener(MouseEvent.CLICK,onLockClick2);
         });
      }
      
      private static function onLockClick2(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         _map.conLevel["arrow"].visible = false;
         _map.conLevel["lockTig2"].buttonMode = false;
         _map.conLevel["lockTig2"].removeEventListener(MouseEvent.CLICK,onLockClick2);
         AnimateManager.playMcAnimate(_mcForMap676,3,"task_753_mc3",function():void
         {
            NpcDialog.show(NPC.SEER,["好了，这下就全齐了，我要赶快回到封印之境才行，异能王和先知他们还在等我呢？"],["你们也和我一起去吧！"],[function():void
            {
               AnimateManager.playMcAnimate(_mcForMap676,4,"task_753_mc4",function():void
               {
                  NpcDialog.show(NPC.MIER,["快看，光明和暗黑已经打起来了！我们要赶紧去啊！我身为光明的专属守卫，"],["火速返回封印之境！"],[function():void
                  {
                     TasksManager.complete(TASK_ID,4,function(param1:Boolean):void
                     {
                        if(param1)
                        {
                           MapManager.changeMap(677);
                        }
                     });
                  }]);
               });
            }]);
         });
      }
      
      public static function goStep6() : void
      {
         var i:uint;
         _mcForMap677.visible = true;
         _mcForMap677.gotoAndStop(6);
         i = 3;
         while(i < 6)
         {
            _map.conLevel["crystal_" + i].gotoAndStop(8);
            i++;
         }
         _map.conLevel["task746"].visible = false;
         MainManager.selfVisible = false;
         OgreController.isShow = false;
         ToolBarController.showOrHideAllUser(false);
         CartoonManager.play(ClientConfig.getFullMovie("cartoon/task_753_2"),function():void
         {
            NpcDialog.show(NPC.SEER,["哇！这下可怎么办！暗黑异能王竟然会如此强大！"],null,null,false,function():void
            {
               AnimateManager.playMcAnimate(_mcForMap677,6,"task_753_mc6",function():void
               {
                  MainManager.selfVisible = true;
                  MainManager.actorModel.x = 650;
                  MainManager.actorModel.y = 320;
                  NpcDialog.show(NPC.SEER,["呀！我怎么把这个忘记了，真是的，我这就去！光明异能王、暗黑赛尔，你们一定要坚持住啊！"],["我马上就启动恶魔封印！"],[function():void
                  {
                     _ClickCount = 0;
                     var _loc1_:* = 0;
                     _loc1_ = 0;
                     while(_loc1_ < 3)
                     {
                        _map.conLevel["crystalTig_" + _loc1_].buttonMode = true;
                        _map.conLevel["crystal_" + _loc1_].gotoAndStop(2);
                        _map.conLevel["crystalTig_" + _loc1_].addEventListener(MouseEvent.CLICK,onCrystalClick);
                        _map.conLevel["crystalTig_" + _loc1_].addEventListener(MouseEvent.MOUSE_OVER,onCrystalOver);
                        _map.conLevel["crystalTig_" + _loc1_].addEventListener(MouseEvent.MOUSE_OUT,onCrystalOut);
                        _loc1_++;
                     }
                  }]);
               });
            });
         });
      }
      
      private static function onCrystalClick(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         var target:MovieClip = evt.currentTarget as MovieClip;
         var s:String = String(evt.currentTarget.name);
         target.buttonMode = false;
         target.removeEventListener(MouseEvent.CLICK,onCrystalClick);
         target.removeEventListener(MouseEvent.MOUSE_OVER,onCrystalOver);
         target.removeEventListener(MouseEvent.MOUSE_OUT,onCrystalOut);
         ++_ClickCount;
         AnimateManager.playMcAnimate(_map.conLevel["crystal_" + int(s.split("_")[1])],4,"mc",function():void
         {
            if(_ClickCount == 3)
            {
               NpcDialog.show(NPC.SEER,["耶！终于成功了，六块恶魔水晶都已经正确的放在的相应的位置，奇怪怎么没有反应呢？"],["难道是我放错了？"],[function():void
               {
                  AnimateManager.playMcAnimate(_mcForMap677,7,"task_753_mc7",function():void
                  {
                     NpcDialog.show(NPC.SEER,["那是什么？难道是另一块异能石？"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.HEIAN_YINENGWANG,["什么？难道那就是传说中的……..不可能…绝对不可能！"],null,null,false,function():void
                        {
                           TasksManager.complete(TASK_ID,5,function(param1:Boolean):void
                           {
                              if(param1)
                              {
                                 goStep7();
                              }
                           });
                        });
                     });
                  });
               }]);
            }
         });
      }
      
      private static function onCrystalOver(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.currentTarget.name);
         _map.conLevel["crystal_" + int(_loc2_.split("_")[1])].gotoAndStop(3);
      }
      
      private static function onCrystalOut(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.currentTarget.name);
         _map.conLevel["crystal_" + int(_loc2_.split("_")[1])].gotoAndStop(2);
      }
      
      public static function goStep7() : void
      {
         var i:uint;
         _mcForMap677.visible = true;
         _map.conLevel["task746"].visible = false;
         i = 3;
         while(i < 6)
         {
            _map.conLevel["crystal_" + i].gotoAndStop(8);
            i++;
         }
         OgreController.isShow = false;
         ToolBarController.showOrHideAllUser(false);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_753_2"),function():void
         {
            _mcForMap677.gotoAndStop(8);
            NpcDialog.show(NPC.GUANMING_YINENGWANG,["小赛尔，我已经成功将暗黑异能王再次封印起来，拥有了神之技能石的力量，相信这次应该可以彻底净化它的心灵！"],["哇！异能王太棒了！"],[function():void
            {
               NpcDialog.show(NPC.SEER,["但是暗黑赛尔，它却…呜呜呜！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.DINUOEN,["别难过了，赛尔！既然我们没有找到暗黑赛尔的零件，说明他一定还活着，你要相信这个世界还是有奇迹的！"],["恩恩，暗黑如果你还活着，记得回来找我啊！"],[function():void
                  {
                     NpcDialog.show(NPC.DINUOEN,["终于结束了，异能星也恢复了往日的平静，感谢你赛尔，如果不是你的帮助，异能星和我们异能精灵恐怕已经不复存在了！"],["没事啦！这是我们赛尔应该做的！"],[function():void
                     {
                        AnimateManager.playMcAnimate(_mcForMap677,9,"task_753_mc9",function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_753_3"),function():void
                           {
                              TasksManager.complete(TASK_ID,6);
                              _map.conLevel["arrow"].visible = true;
                              _mcForMap677.visible = false;
                              MainManager.selfVisible = true;
                              OgreController.isShow = true;
                              ToolBarController.showOrHideAllUser(true);
                              initYiNengBoss();
                           });
                        });
                     }]);
                  }]);
               });
            }]);
         });
      }
      
      public static function destroy() : void
      {
         var _loc1_:uint = 0;
         if(Boolean(_map) && Boolean(_map.conLevel["rockTig"]))
         {
            _map.conLevel["rockTig"].removeEventListener(MouseEvent.CLICK,onRockClick);
         }
         if(Boolean(_map) && Boolean(_map.topLevel["snowTig"]))
         {
            _map.topLevel["snowTig"].removeEventListener(MouseEvent.CLICK,onSnowClick);
         }
         if(Boolean(_map) && Boolean(_map.conLevel["lockTig1"]))
         {
            _map.conLevel["lockTig1"].removeEventListener(MouseEvent.CLICK,onLockClick1);
         }
         if(Boolean(_map) && Boolean(_map.conLevel["lockTig2"]))
         {
            _map.conLevel["lockTig2"].removeEventListener(MouseEvent.CLICK,onLockClick2);
         }
         if(_map && _map.conLevel["crystalTig_0"] && Boolean(_map.conLevel["crystalTig_1"]) && Boolean(_map.conLevel["crystalTig_2"]))
         {
            _loc1_ = 0;
            while(_loc1_ < 3)
            {
               _map.conLevel["crystalTig_" + _loc1_].addEventListener(MouseEvent.CLICK,onCrystalClick);
               _map.conLevel["crystalTig_" + _loc1_].addEventListener(MouseEvent.MOUSE_OVER,onCrystalOver);
               _map.conLevel["crystalTig_" + _loc1_].addEventListener(MouseEvent.MOUSE_OUT,onCrystalOut);
               _loc1_++;
            }
         }
         OgreController.isShow = true;
         ToolBarController.showOrHideAllUser(true);
         _map = null;
      }
   }
}
