package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.control.TaskController_849;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.SoundManager;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.GamePlatformEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.GamePlatformManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.debug.DebugTrace;
   import org.taomee.utils.DisplayUtil;
   
   public class Task849
   {
      
      public static var _map:BaseMapProcess;
      
      private static var stoneCount:int = 0;
      
      private static var panel:AppModel;
       
      
      public function Task849()
      {
         super();
      }
      
      public static function initForMap700(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ToolBarController.showOrHideAllUser(false);
         TasksManager.getProStatusList(TaskController_849.TASK_ID,function(param1:Array):void
         {
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
      
      private static function initStep2() : void
      {
         taskMC.addEventListener(MouseEvent.CLICK,onStep2Clicked);
         MainManager.actorModel.x = 445;
         MainManager.actorModel.y = 485;
      }
      
      private static function onStep2Clicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(445,485),function():void
         {
            AnimateManager.playMcAnimate(taskMC,1,"mc",function():void
            {
               taskMC.removeEventListener(MouseEvent.CLICK,onStep2Clicked);
               LevelManager.closeMouseEvent();
               MainManager.actorModel.moveAndAction(new Point(500,320),function():void
               {
                  LevelManager.openMouseEvent();
                  NpcDialog.show(NPC.DANDI,["这种发光的石块一定藏有玄机！"],["（点击发光的石块）"],[function():void
                  {
                     TasksManager.complete(TaskController_849.TASK_ID,2,function():void
                     {
                        initStep3();
                     });
                  }]);
               });
            });
         });
      }
      
      private static function initStep3() : void
      {
         taskMC.gotoAndStop(2);
         stoneCount = 0;
         var _loc1_:int = 0;
         while(_loc1_ < 3)
         {
            getStone(_loc1_).buttonMode = true;
            getStone(_loc1_).addEventListener(MouseEvent.CLICK,onStoneClicked);
            getStone(_loc1_).gotoAndStop(2);
            _loc1_++;
         }
      }
      
      private static function onStoneClicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var s:MovieClip = e.currentTarget as MovieClip;
         s.buttonMode = false;
         ++stoneCount;
         s.gotoAndStop(3);
         s.removeEventListener(MouseEvent.CLICK,onStoneClicked);
         if(stoneCount == 3)
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_849_1"),function():void
            {
               var i:int;
               taskMC.gotoAndStop(3);
               i = 0;
               while(i < 3)
               {
                  getStone(i).gotoAndStop(1);
                  i++;
               }
               NpcDialog.show(NPC.ATIEDA,["哪里来的家伙，竟敢抢我们的元素之星！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.KARUI,["哼！元素之星是属于萨菲罗殿下的！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.DANDI,["什么萨菲罗！别胡来，赶紧把元素之星还给我们！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.ATIEDA,["别和他们废话了！开打！"],["（点击精灵对战）"],[function():void
                        {
                           TasksManager.complete(TaskController_849.TASK_ID,3,function():void
                           {
                              initStep4();
                           });
                        }]);
                     });
                  });
               });
            });
         }
      }
      
      private static function getStone(param1:int) : MovieClip
      {
         return _map.conLevel["stone"]["stone" + param1];
      }
      
      private static function initStep4() : void
      {
         taskMC.gotoAndStop(3);
         taskMC.addEventListener(MouseEvent.CLICK,onStep4Clicked);
      }
      
      private static function onStep4Clicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(550,310),function():void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
            FightManager.fightWithBoss("卡瑞",0);
         });
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_849_2"),function():void
         {
            taskMC.removeEventListener(MouseEvent.CLICK,onStep4Clicked);
            taskMC.gotoAndStop(4);
            NpcDialog.show(NPC.DANDI,["糟糕，萨菲罗带着元素之星逃走了！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SEER,["嘿嘿！我放了一个追踪器在萨菲罗身上，我们可以根据追踪器的指示找到他。"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.KALULU,[MainManager.actorInfo.formatNick + "，真聪明，我和阿铁打对付这个家伙，你和赛小息、丹迪去找萨菲罗。"],["嗯，就这么办！"],[function():void
                  {
                     TasksManager.complete(TaskController_849.TASK_ID,4,function():void
                     {
                        initStep5();
                     });
                  }]);
               });
            });
         });
      }
      
      private static function initStep5() : void
      {
         taskMC.gotoAndStop(4);
         taskMC.addEventListener(MouseEvent.CLICK,onStep5Clicked);
      }
      
      private static function onStep5Clicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.SAIXIAOXI,["萨菲罗逃走了，咱们赶紧驾驶飞船追击吧！"],["嗯，出发。（开始航行）"],[function():void
         {
            loadGame();
         }]);
      }
      
      public static function initForMap699(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         TasksManager.getProStatusList(TaskController_849.TASK_ID,function(param1:Array):void
         {
            if(TasksManager.getTaskStatus(TaskController_849.TASK_ID) == TasksManager.ALR_ACCEPT)
            {
               if(Boolean(param1[5]) && !param1[6])
               {
                  ToolBarController.showOrHideAllUser(false);
                  initStep6();
               }
               else
               {
                  destroy();
               }
            }
            else
            {
               destroy();
            }
         });
      }
      
      private static function initStep6() : void
      {
         taskMC.buttonMode = true;
         taskMC.addEventListener(MouseEvent.CLICK,onStep6Clicked);
      }
      
      private static function onStep6Clicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.SEER,["快看，萨菲罗把7颗元素之星都激活啦！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["木、火元素之星不是被海盗抢走了吗？怎么会出现在这里！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SAFEILUO,["没想到竟然被你们追来了！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.DANDI,["你这个家伙，要对元素之星做什么！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.SAFEILUO,["这里是诺可撒斯星，我的家乡！相信你们也看到了这一片荒废的景象！"],["到底是怎么一回事？"],[function():void
                     {
                        NpcDialog.show(NPC.SAFEILUO,[""],["（萨菲罗开始讲述有关诺可撒斯星的故事……）"],[function():void
                        {
                           CartoonManager.play(ClientConfig.getFullMovie("task_849_6"),function():void
                           {
                              NpcDialog.show(NPC.SEER,["我们懂了！可是，推特星也正处于紧急关头啊！你这么做，根本就没考虑其他生命的安危。"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.SAFEILUO,["我知道，可有些事情必须做出抉择！我只想尽全力拯救自己的家园！"],null,null,false,function():void
                                 {
                                    NpcDialog.show(NPC.SAIXIAOXI,["我相信一定会找到更好的办法来帮助推特星和诺可撒斯星的！"],null,null,false,function():void
                                    {
                                       NpcDialog.show(NPC.DANDI,["萨菲罗，把元素之星还给推特星吧！"],null,null,false,function():void
                                       {
                                          NpcDialog.show(NPC.SAFEILUO,["不可能！我所做的一切就是为了今天，七星连珠仪式只能在诺可撒斯星开启！"],null,null,false,function():void
                                          {
                                             NpcDialog.show(NPC.SEER,["别和他废话了！咱们把元素之星夺回来。"],["（点击萨菲罗对战）"],[function():void
                                             {
                                                AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_849_4"),function():void
                                                {
                                                   AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_849_7"),function():void
                                                   {
                                                      TasksManager.complete(TaskController_849.TASK_ID,6,function():void
                                                      {
                                                         destroy();
                                                      });
                                                   });
                                                });
                                             }]);
                                          });
                                       });
                                    });
                                 });
                              });
                           });
                        }]);
                     }]);
                  });
               });
            });
         });
      }
      
      private static function get taskMC() : MovieClip
      {
         return _map.conLevel["task849mc"];
      }
      
      public static function destroy() : void
      {
         var _loc1_:int = 0;
         if(!_map)
         {
            return;
         }
         if(panel)
         {
            panel.destroy();
            panel = null;
         }
         if(MapManager.currentMap.id == 700)
         {
            taskMC.removeEventListener(MouseEvent.CLICK,onStep2Clicked);
            _loc1_ = 0;
            while(_loc1_ < 3)
            {
               getStone(_loc1_).removeEventListener(MouseEvent.CLICK,onStoneClicked);
               _loc1_++;
            }
            taskMC.removeEventListener(MouseEvent.CLICK,onStep4Clicked);
            taskMC.removeEventListener(MouseEvent.CLICK,onStep5Clicked);
         }
         else if(MapManager.currentMap.id == 699)
         {
            taskMC.removeEventListener(MouseEvent.CLICK,onStep6Clicked);
         }
         if(taskMC)
         {
            DisplayUtil.removeForParent(taskMC);
         }
         ToolBarController.showOrHideAllUser(true);
         _map = null;
      }
      
      private static function loadGame() : void
      {
         SoundManager.stopSound();
         addGameEvent();
         if(panel)
         {
            panel.destroy();
            panel = null;
         }
         panel = new AppModel(ClientConfig.getTaskModule("Task849Game"),"正在打开游戏");
         panel.setup();
         panel.show();
      }
      
      private static function addGameEvent() : void
      {
         GamePlatformManager.addEventListener(GamePlatformEvent.GAME_LOST,onFailGame);
         GamePlatformManager.addEventListener(GamePlatformEvent.GAME_WIN,onSucGame);
      }
      
      private static function removeGameEvent() : void
      {
         GamePlatformManager.removeEventListener(GamePlatformEvent.GAME_LOST,onFailGame);
         GamePlatformManager.removeEventListener(GamePlatformEvent.GAME_WIN,onSucGame);
      }
      
      private static function onFailGame(param1:GamePlatformEvent) : void
      {
         var e:GamePlatformEvent = param1;
         SoundManager.playSound();
         removeGameEvent();
         panel.destroy();
         panel = null;
         if(e.gameIndex == 849)
         {
            NpcDialog.show(NPC.SEER,["加油！加油！我一定能够成功！"],["继续前进！","下次再玩！"],[function():void
            {
               loadGame();
            }]);
         }
         else
         {
            DebugTrace.show("不是此游戏");
         }
      }
      
      private static function onSucGame(param1:GamePlatformEvent = null) : void
      {
         var e:GamePlatformEvent = param1;
         removeGameEvent();
         SoundManager.playSound();
         panel.destroy();
         panel = null;
         if(e.gameIndex == 849)
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_849_3"),function():void
            {
               TasksManager.complete(TaskController_849.TASK_ID,5,function():void
               {
                  MapManager.changeMap(699);
               });
            });
         }
         else
         {
            DebugTrace.show("不是航行游戏");
         }
      }
   }
}
