package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.MapProcess_688;
   import com.robot.app.mapProcess.MapProcess_696;
   import com.robot.app.task.control.TaskController_832;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.SoundManager;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.GamePlatformEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.GamePlatformManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.debug.DebugTrace;
   import org.taomee.utils.DisplayUtil;
   
   public class Task832
   {
      
      private static var _map:BaseMapProcess;
      
      private static var showSpring:Boolean = false;
      
      private static var panel:AppModel;
       
      
      public function Task832()
      {
         super();
      }
      
      public static function initForMap688(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         TasksManager.getProStatusList(TaskController_832.TASK_ID,function(param1:Array):void
         {
            var _loc2_:MovieClip = _map.conLevel["task832mc"];
            if(Boolean(param1[0]) && !param1[1])
            {
               _loc2_.buttonMode = true;
               _loc2_.addEventListener(MouseEvent.CLICK,map688DandiClicked);
            }
            else
            {
               DisplayUtil.removeForParent(_loc2_);
            }
            var _loc3_:MovieClip = _map.conLevel["task832mc2"];
            if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && Boolean(param1[4]) && !param1[5])
            {
               if(TasksManager.getTaskStatus(TaskController_832.TASK_ID) == TasksManager.ALR_ACCEPT)
               {
                  _loc3_.buttonMode = true;
                  _loc3_.addEventListener(MouseEvent.CLICK,map688BossClicked);
               }
               else
               {
                  DisplayUtil.removeForParent(_loc3_);
               }
            }
            else
            {
               DisplayUtil.removeForParent(_loc3_);
            }
         });
      }
      
      private static function map688BossClicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(570,165),function():void
         {
            NpcDialog.show(NPC.DANDI,["瑞尔斯！你把杰西带到哪里去了！你来推特星肯定没有好事！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SEER,["盖亚最近一直在寻找瑞尔斯的踪迹，但他们兄弟俩在这种局面下相见，情况令人担忧啊！"],["……"],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_832_3"),function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_832_4"),function():void
                     {
                        TasksManager.complete(TaskController_832.TASK_ID,5,function(param1:Boolean):void
                        {
                           var _loc2_:* = undefined;
                           if(param1)
                           {
                              NpcController.showNpc(112);
                              _loc2_ = _map.conLevel["task832mc2"];
                              _loc2_.removeEventListener(MouseEvent.CLICK,map688BossClicked);
                              DisplayUtil.removeForParent(_loc2_);
                              (_map as MapProcess_688).showRoadTo696();
                           }
                        });
                     });
                  });
               }]);
            });
         });
      }
      
      private static function map688DandiClicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(580,190),function():void
         {
            NpcDialog.show(NPC.DANDI,[MainManager.actorInfo.formatNick + "，元素之星的能量进入水底了，看来我们得冒险咯。"],["哇，虽然我是铁皮做的，但很防水的哦。 "],[function():void
            {
               NpcDialog.show(NPC.DANDI,["哈哈哈！你的铁皮质量一级棒！咱们出发吧。"],["（开始潜水）"],[function():void
               {
                  loadGame();
               }]);
            }]);
         });
      }
      
      public static function initForMap690(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.conLevel["task832mc"].visible = false;
      }
      
      public static function playMap690MC() : void
      {
         ToolBarController.showOrHideAllUser(false);
         MainManager.selfVisible = false;
         NpcController.hideNpc(109);
         _map.conLevel["task832mc"].visible = true;
         AnimateManager.playMcAnimate(_map.conLevel["task832mc"],1,"",function():void
         {
            TasksManager.complete(TaskController_832.TASK_ID,0,function(param1:Boolean):void
            {
               if(param1)
               {
                  _map.conLevel["task832mc"].visible = false;
                  _map.conLevel["entryGuide"].visible = true;
                  showAll();
               }
            });
         });
      }
      
      private static function showAll() : void
      {
         ToolBarController.showOrHideAllUser(true);
         MainManager.selfVisible = true;
         NpcController.showNpc(109);
      }
      
      public static function initForMap696(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         TasksManager.getProStatusList(TaskController_832.TASK_ID,function(param1:Array):void
         {
            if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
            {
               map696mc.gotoAndStop(1);
               map696mc.buttonMode = true;
               map696mc.addEventListener(MouseEvent.CLICK,onDandiClicked);
            }
            else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
            {
               map696mc.gotoAndStop(3);
               showSpring = true;
            }
            else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
            {
               prepareForStep4();
            }
            else
            {
               DisplayUtil.removeForParent(map696mc);
            }
         });
      }
      
      private static function onDandiClicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.DANDI,[MainManager.actorInfo.formatNick + "，石梯上面闪闪发光，这个水中岩洞埋藏的肯定是水元素之星。"],["嗯，没错，就是这里。 "],[function():void
         {
            NpcDialog.show(NPC.DANDI,["可前方的道路塌陷了，我们得想想法子啊！"],["丹迪，你看！ "],[function():void
            {
               _map.conLevel["guide"].visible = true;
               map696mc["guide"].visible = false;
               NpcDialog.show(NPC.SEER,["断层上有结晶石柱，把它们击碎填埋好路面，我们应该就能通过啦。"],["（用头部射击结晶石柱）"],[function():void
               {
                  map696mc.buttonMode = false;
                  map696mc.removeEventListener(MouseEvent.CLICK,onDandiClicked);
                  ToolBarController.noticeAimat(true);
               }]);
            }]);
         }]);
      }
      
      public static function checkIsFinished() : void
      {
         TasksManager.getProStatusList(TaskController_832.TASK_ID,function(param1:Array):void
         {
            var a:Array = param1;
            if(Boolean(a[0]) && Boolean(a[1]) && !a[2])
            {
               if(_map.conLevel["stone1"].currentFrame == 2 && _map.conLevel["stone2"].currentFrame == 2)
               {
                  _map.conLevel["guide"].visible = false;
                  ToolBarController.noticeAimat(false);
                  map696mc.removeEventListener(MouseEvent.CLICK,onDandiClicked);
                  TasksManager.complete(TaskController_832.TASK_ID,2,function(param1:Boolean):void
                  {
                     var b:Boolean = param1;
                     if(b)
                     {
                        AnimateManager.playMcAnimate(map696mc,2,"mc",function():void
                        {
                           map696mc.gotoAndStop(3);
                           showSpring = true;
                        });
                     }
                  });
               }
            }
         });
      }
      
      public static function showStone() : void
      {
         var i:int;
         var sp:MovieClip = null;
         if(!showSpring)
         {
            return;
         }
         showSpring = false;
         i = 1;
         while(i < 4)
         {
            sp = _map.conLevel["sp" + i];
            sp.visible = false;
            i++;
         }
         AnimateManager.playMcAnimate(_map.conLevel["sp"],2,"mc",function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_832_2"),function():void
            {
               _map.conLevel["sp"].gotoAndStop(1);
               TasksManager.complete(TaskController_832.TASK_ID,3,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     prepareForStep4();
                  }
               });
            });
         });
      }
      
      private static function prepareForStep4() : void
      {
         map696mc.gotoAndStop(4);
         _map.conLevel["diudiu"].buttonMode = true;
         _map.conLevel["diudiu"].addEventListener(MouseEvent.CLICK,onDiudiuClicked);
      }
      
      private static function onDiudiuClicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(520,205),function():void
         {
            _map.conLevel["diudiu"].removeEventListener(MouseEvent.CLICK,onDiudiuClicked);
            NpcDialog.show(NPC.DIUDIU,["哇哈哈，总算是见到新生物啦！来，来，来，和我打一场。"],["你是？ "],[function():void
            {
               NpcDialog.show(NPC.DIUDIU,["我叫丢丢，一个人在这结晶岩洞生活了好长好长时间，具体多久自己都不记得了，真的很孤单很寂寞很冷的，所以你们必须陪我玩啊。"],["…… "],[function():void
               {
                  NpcDialog.show(NPC.SEER,["丢丢，推特星正陷入困境，我们得抓紧时间去解决，下次再来找你玩好吗？"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.DIUDIU,["不行！不行！我好不容易碰上活生生的东西，绝不能放你们走。"],["“活生生的东西”……我晕倒。"],[function():void
                     {
                        NpcDialog.show(NPC.SEER,["丹迪，这家伙独自生活在这里很可怜的，咱们还是陪他玩一会吧。"],["（点击丢丢对战）"],[function():void
                        {
                           map696mc.gotoAndStop(5);
                           _map.conLevel["diudiu"].addEventListener(MouseEvent.CLICK,onDiudiuFight);
                        }]);
                     }]);
                  });
               }]);
            }]);
         });
      }
      
      private static function onDiudiuFight(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(520,205),function():void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
            FightManager.fightWithBoss("丢丢",0);
         });
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         (_map as MapProcess_696).showRoad();
         _map.conLevel["diudiu"].removeEventListener(MouseEvent.CLICK,onDiudiuClicked);
         if((e.dataObj as FightOverInfo).winnerID == MainManager.actorID)
         {
            MainManager.selfVisible = false;
            AnimateManager.playMcAnimate(map696mc,6,"mc",function():void
            {
               MainManager.selfVisible = true;
               TasksManager.complete(TaskController_832.TASK_ID,4,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     map696mc.visible = false;
                     _map.conLevel["guide2"].visible = true;
                     _map.conLevel["diudiu"].buttonMode = false;
                  }
               });
            });
         }
         else
         {
            NpcDialog.show(NPC.DIUDIU,["哈哈哈，哇哦哦，好开心！我最厉害。"],["哼！我还没展示出真正的实力呢！"]);
            _map.conLevel["diudiu"].addEventListener(MouseEvent.CLICK,onDiudiuFight);
         }
      }
      
      private static function get map696mc() : MovieClip
      {
         return _map.conLevel["task832mc"];
      }
      
      public static function destroy() : void
      {
         var _loc1_:MovieClip = null;
         var _loc2_:MovieClip = null;
         if(MapManager.currentMap.id == 690)
         {
            showAll();
         }
         else if(MapManager.currentMap.id == 688)
         {
            _loc1_ = _map.conLevel["task832mc"];
            _loc2_ = _map.conLevel["task832mc2"];
            if(_loc1_)
            {
               _loc1_.removeEventListener(MouseEvent.CLICK,map688DandiClicked);
               if(panel)
               {
                  panel.destroy();
                  panel = null;
               }
            }
            if(_loc2_)
            {
               _loc2_.removeEventListener(MouseEvent.CLICK,map688BossClicked);
            }
         }
         else if(MapManager.currentMap.id == 696)
         {
            if(map696mc)
            {
               map696mc.removeEventListener(MouseEvent.CLICK,onDandiClicked);
            }
            _map.conLevel["diudiu"].removeEventListener(MouseEvent.CLICK,onDiudiuClicked);
            _map.conLevel["diudiu"].removeEventListener(MouseEvent.CLICK,onDiudiuFight);
         }
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
         panel = new AppModel(ClientConfig.getTaskModule("Task832Game"),"正在打开游戏");
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
         if(e.gameIndex == 832)
         {
            NpcDialog.show(NPC.SEER,["加油！加油！我是潜水健将，一定能够成功！"],["继续前进！","下次再玩！"],[function():void
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
         if(e.gameIndex == 832)
         {
            TasksManager.complete(TaskController_832.TASK_ID,1,function(param1:Boolean):void
            {
               var b:Boolean = param1;
               if(b)
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_832_1"),function():void
                  {
                     MapManager.changeMap(696);
                  });
               }
            });
         }
         else
         {
            DebugTrace.show("不是航行游戏");
         }
      }
   }
}
