package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.control.TaskController_716;
   import com.robot.core.SoundManager;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.debug.DebugTrace;
   
   public class Task716
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskStep:int = -100;
      
      private static var musicPanel:MovieClip;
       
      
      public function Task716()
      {
         super();
      }
      
      public static function initTaskForMap325(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         var nRet:uint = uint(TasksManager.getTaskStatus(TaskController_716.TASK_ID));
         if(nRet == TasksManager.UN_ACCEPT)
         {
            _map.conLevel["npcMC"].gotoAndStop(1);
         }
         else if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_716.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  taskStep = 1;
                  _map.conLevel["npcMC"].gotoAndStop(1);
               }
            });
         }
         _map.conLevel["npcMC"].buttonMode = true;
         _map.conLevel["npcMC"].addEventListener(MouseEvent.CLICK,npcClickHandler1);
      }
      
      private static function npcClickHandler1(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(620,440),function():void
         {
            if(_map.conLevel["npcMC"].currentFrame == 1 && taskStep == -100)
            {
               NpcDialog.show(NPC.PAGENI,["艾迪星是全宇宙最有情调的地方！美妙的音乐无处不在。"],["#101战神的约定","嗯嗯！这里的音乐真美。"],[function():void
               {
                  _map.conLevel["npcMC"].gotoAndStop(2);
                  NpcDialog.show(NPC.PAGENI,["刚才的事情实在是太可怕了！"],["艾迪星发生什么了？"],[function():void
                  {
                     NpcDialog.show(NPC.PAGENI,["呜呜呜！事情大概是这样一个情况……"],null,null,false,function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_716_1"),function():void
                        {
                           NpcDialog.show(NPC.SEER,["嗯，看来我有必要去暮色之城瞧瞧！"],["（去暮色之城）"],[function():void
                           {
                              TasksManager.accept(TaskController_716.TASK_ID,function(param1:Boolean):void
                              {
                                 if(param1)
                                 {
                                    DebugTrace.show("任务接取成功");
                                    taskStep = 0;
                                    MapManager.changeMap(326);
                                 }
                              });
                           }]);
                        });
                     });
                  }]);
               }]);
            }
            else if(_map.conLevel["npcMC"].currentFrame == 1 && taskStep == 1)
            {
               NpcDialog.show(NPC.PAGENI,["艾迪星是全宇宙最有情调的地方！美妙的音乐无处不在。"],["#101战神的约定","嗯嗯！这里的音乐真美。"],[function():void
               {
                  _map.conLevel["npcMC"].gotoAndStop(2);
                  NpcDialog.show(NPC.SEER,["帕格尼，如果猜想，你认为海盗进入暮色之城会干什么，那里到底有什么东西吸引他们呢？"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.PAGENI,[MainManager.actorInfo.formatNick + "，你这么一问，我倒是想到了有关“魔音盒”的故事。"],["魔音盒？"],[function():void
                     {
                        NpcDialog.show(NPC.PAGENI,["嗯！这是艾迪星很古老的一个传说……"],null,null,false,function():void
                        {
                           CartoonManager.play(ClientConfig.getFullMovie("task_716_3"),function():void
                           {
                              NpcDialog.show(NPC.PAGENI,["暮色之城有个地下宫殿，据说里面埋藏着许许多多的宝物。如果你人品不错，说不定就能在那找到遗失已久的“魔音盒”哦！"],["谢谢你的建议，我的人品一定会爆发的！"],[function():void
                              {
                                 TasksManager.complete(TaskController_716.TASK_ID,1,function():void
                                 {
                                    DebugTrace.show("第二步完成");
                                    taskStep = 2;
                                    MapManager.changeMap(326);
                                 });
                              }]);
                           });
                        });
                     }]);
                  });
               }]);
            }
            else
            {
               NpcDialog.show(NPC.PAGENI,["艾迪星是全宇宙最有情调的地方！美妙的音乐无处不在。"],["嗯嗯！这里的音乐真美。"]);
            }
         });
      }
      
      public static function initTaskForMap326(param1:BaseMapProcess) : void
      {
         var nRet:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         _map.conLevel["npcMC"].gotoAndStop(2);
         nRet = uint(TasksManager.getTaskStatus(TaskController_716.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_716.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  taskStep = 0;
                  _map.conLevel["npcMC"].gotoAndStop(1);
               }
               if(Boolean(param1[0]) && !param1[1])
               {
                  taskStep = 1;
                  _map.conLevel["npcMC"].gotoAndStop(5);
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  taskStep = 2;
                  _map.conLevel["npcMC"].gotoAndStop(4);
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
               {
                  taskStep = 3;
                  _map.conLevel["npcMC"].gotoAndStop(7);
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
               {
                  taskStep = 4;
                  _map.conLevel["npcMC"].gotoAndStop(8);
               }
            });
         }
         _map.conLevel["npcMC"].buttonMode = true;
         _map.conLevel["npcMC"].addEventListener(MouseEvent.CLICK,npcClickHandler2);
      }
      
      private static function npcClickHandler2(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(480,320),function():void
         {
            if(_map.conLevel["npcMC"].currentFrame == 1 && taskStep == 0)
            {
               NpcDialog.show(NPC.RUIERSI,["我为了一个约定出现在这里！英雄必须时刻做好战斗准备！"],["#101战神的约定","我感受到了你强大的能量！"],[function():void
               {
                  _map.conLevel["npcMC"].gotoAndStop(2);
                  NpcDialog.show(NPC.SEER,["盖亚？你的身形外貌怎么变了？"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.RUIERSI,["盖亚！盖亚！碰到我的人都喊出这两个字！难道这就是我的名字……"],["你的神情不对劲，发生什么事了！"],[function():void
                     {
                        NpcDialog.show(NPC.RUIERSI,["你是谁，我根本就不认识你。啊！我的头好痛！脑袋里一片空白！"],null,null,false,function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_716_2"),function():void
                           {
                              AnimateManager.playMcAnimate(_map.conLevel["npcMC"],3,"mc3",function():void
                              {
                                 NpcDialog.show(NPC.SEER,["盖亚！这到底是怎么一回事啊！这家伙怎么长得和你一模一样？"],null,null,false,function():void
                                 {
                                    NpcDialog.show(NPC.GAIYA,[MainManager.actorInfo.formatNick + "，他叫瑞尔斯，是我的哥哥。我们之间有个约定，每年都要展开大战，一较高下！"],["原来是这样，瑞尔斯似乎受了刺激！记忆也有点模糊不清。"],[function():void
                                    {
                                       NpcDialog.show(NPC.GAIYA,["嗯，确实不对劲！才几个回合他就倒下去了！我必须把事情搞清楚。"],["海盗和邪灵组织也进入了暮色之城，这里必有玄机。"],[function():void
                                       {
                                          NpcDialog.show(NPC.GAIYA,["又是海盗，看来现在的艾迪星热闹非凡呀！哼，遇到我是他们的不幸！"],["你守护好瑞尔斯，我去找帕格尼，看看是否能打听到关键信息。"],[function():void
                                          {
                                             NpcDialog.show(NPC.GAIYA,[MainManager.actorInfo.formatNick + "，快去快回，路上小心。"],["嗯，没问题。"],[function():void
                                             {
                                                TasksManager.complete(TaskController_716.TASK_ID,0,function():void
                                                {
                                                   DebugTrace.show("第一步完成");
                                                   taskStep = 1;
                                                   MapManager.changeMap(325);
                                                });
                                             }]);
                                          }]);
                                       }]);
                                    }]);
                                 });
                              });
                           });
                        });
                     }]);
                  });
               }]);
            }
            else if(_map.conLevel["npcMC"].currentFrame == 4 && taskStep == 2)
            {
               _map.conLevel["npcMC"].gotoAndStop(5);
               NpcDialog.show(NPC.GAIYA,[MainManager.actorInfo.formatNick + "，看你的表情似乎已经找到答案了。"],["艾迪星有这么一个传说……（向盖亚叙述了一遍有关魔音盒的故事）。"],[function():void
               {
                  NpcDialog.show(NPC.GAIYA,["这样事情就清楚了！瑞尔斯在到达艾迪星的时候不幸被失忆磁场辐射，开始变得神志不清。"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.GAIYA,["而海盗和邪灵组织也许是无意中知道了“魔音盒”的传说，所以来一探究竟。"],["你分析得很透彻。"],[function():void
                     {
                        NpcDialog.show(NPC.GAIYA,["我会用能量给瑞尔斯设置了一个保护罩，然后咱们进入地下宫殿，希望能找到“魔音盒”帮助瑞尔斯恢复记忆。"],["设置保护罩要消耗很多能量，你的状态会变得相当虚弱呀！"],[function():void
                        {
                           NpcDialog.show(NPC.GAIYA,["为了保证哥哥的安全，必须这样做。"],["好吧！就这么办。"],[function():void
                           {
                              AnimateManager.playMcAnimate(_map.conLevel["npcMC"],6,"mc6",function():void
                              {
                                 TasksManager.complete(TaskController_716.TASK_ID,2,function():void
                                 {
                                    DebugTrace.show("第三步完成");
                                    taskStep = 3;
                                    MapManager.changeMap(327);
                                 });
                              });
                           }]);
                        }]);
                     }]);
                  });
               }]);
            }
            else if(_map.conLevel["npcMC"].currentFrame == 8 && taskStep == 4)
            {
               NpcDialog.show(NPC.SEER,["我要打开魔音盒，希望能够帮助瑞尔斯恢复记忆！"],["打开魔音盒"],[function():void
               {
                  openMusicBox();
               }]);
            }
            else
            {
               NpcDialog.show(NPC.RUIERSI,["我为了一个约定出现在这里！英雄必须时刻做好战斗准备！"],["我感受到了你强大的能量！"]);
            }
         });
      }
      
      private static function openMusicBox() : void
      {
         if(musicPanel == null)
         {
            musicPanel = _map.topLevel["musicPanel"];
            musicPanel.buttonMode = true;
            musicPanel.addEventListener(MouseEvent.CLICK,musicBoxHandler);
            musicPanel["closeBTN"].addEventListener(MouseEvent.CLICK,destroyMusicBox);
         }
         musicPanel.gotoAndStop(1);
         musicPanel.visible = true;
      }
      
      private static function musicBoxHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         if(musicPanel.currentFrame == 1)
         {
            musicPanel.buttonMode = false;
            musicPanel.removeEventListener(MouseEvent.CLICK,musicBoxHandler);
            SoundManager.stopSound();
            AnimateManager.playMcAnimate(musicPanel,2,"mc2",function():void
            {
               _map.conLevel["npcMC"].gotoAndStop(2);
               SoundManager.playSound();
               destroyMusicBox();
               NpcDialog.show(NPC.RUIERSI,["我怎么了！刚刚仿佛陷入了梦境！你是谁？"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.SEER,["我是赛尔号先锋队的" + MainManager.actorInfo.formatNick + "，你的弟弟盖亚正被海盗围困着！我们必须马上去救他！"],["区区几个海盗怎么能阻挡得了盖亚呢！"],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["在你晕厥的时候，他用大部分能量设置成保护罩维护你的安全！因此，他现在的状态很虚弱，导致与敌人交战也处于劣势！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.RUIERSI,["看你真诚的眼神，我必须相信你！咱们赶紧去帮助他吧。"],["嗯！"],[function():void
                        {
                           TasksManager.complete(TaskController_716.TASK_ID,4,function():void
                           {
                              DebugTrace.show("第五步完成");
                              taskStep = 5;
                              MapManager.changeMap(327);
                           });
                        }]);
                     });
                  }]);
               });
            });
         }
      }
      
      private static function destroyMusicBox(param1:MouseEvent = null) : void
      {
         if(musicPanel)
         {
            musicPanel.removeEventListener(MouseEvent.CLICK,musicBoxHandler);
            musicPanel["closeBTN"].removeEventListener(MouseEvent.CLICK,destroyMusicBox);
            musicPanel.gotoAndStop(1);
            musicPanel.visible = false;
            musicPanel = null;
         }
      }
      
      public static function initTaskForMap327(param1:BaseMapProcess) : void
      {
         var nRet:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         _map.conLevel["task716MC"].visible = false;
         nRet = uint(TasksManager.getTaskStatus(TaskController_716.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_716.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
               {
                  taskStep = 3;
                  _map.conLevel["task716MC"].gotoAndStop(1);
                  _map.conLevel["task716MC"].visible = true;
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
               {
                  taskStep = 4;
                  _map.conLevel["task716MC"].gotoAndStop(3);
                  _map.conLevel["task716MC"].visible = true;
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && Boolean(param1[4]) && !param1[5])
               {
                  taskStep = 5;
                  _map.conLevel["task716MC"].gotoAndStop(3);
                  _map.conLevel["task716MC"].visible = true;
               }
            });
         }
         _map.conLevel["task716MC"].buttonMode = true;
         _map.conLevel["task716MC"].addEventListener(MouseEvent.CLICK,task716ClickHandler);
      }
      
      private static function task716ClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(380,390),function():void
         {
            if(taskStep == 3)
            {
               NpcDialog.show(NPC.GAIYA,["来得早不如来得巧！这群家伙正对着宝物吭吭哧哧呢！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.PIRATE_2,["该死的盖亚，怎么追到这来了！"],["你们休想拿走魔音盒！"],[function():void
                  {
                     FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
                     FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
                     FightManager.fightWithBoss("奇洛",2);
                  }]);
               });
            }
            else if(taskStep == 5)
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_716_5"),function():void
               {
                  _map.conLevel["task716MC"].visible = false;
                  NpcDialog.show(NPC.GAIYA,["瑞尔斯！失忆磁场这种概率超低的现象都会被你碰到，可见你的人品真的很差啊！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.RUIERSI,["哈哈哈！盖亚，我人品再差也不会乘人之危，等你体力恢复，我们再继续约定之战！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.GAIYA,["必须的！这次我会让你大开眼界！"],["一言为定!"],[function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_716_6"),function():void
                           {
                              TasksManager.complete(TaskController_716.TASK_ID,5,function():void
                              {
                                 DebugTrace.show("任务完成");
                                 taskStep = 6;
                              });
                           });
                        }]);
                     });
                  });
               });
            }
         });
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         var evt:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_716_4"),function():void
         {
            AnimateManager.playMcAnimate(_map.conLevel["task716MC"],2,"mc2",function():void
            {
               TasksManager.complete(TaskController_716.TASK_ID,3,function():void
               {
                  DebugTrace.show("第四步完成");
                  taskStep = 4;
                  MapManager.changeMap(326);
               });
            });
         });
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 325)
         {
            _map.conLevel["npcMC"].removeEventListener(MouseEvent.CLICK,npcClickHandler1);
         }
         else if(MapManager.currentMap.id == 326)
         {
            _map.conLevel["npcMC"].removeEventListener(MouseEvent.CLICK,npcClickHandler2);
            destroyMusicBox();
         }
         else if(MapManager.currentMap.id == 327)
         {
            _map.conLevel["task716MC"].removeEventListener(MouseEvent.CLICK,task716ClickHandler);
         }
         _map = null;
      }
   }
}
