package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.control.TaskController_678;
   import com.robot.app.task.petstory.util.FightGang;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.display.Shape;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.utils.Timer;
   import org.taomee.debug.DebugTrace;
   import org.taomee.utils.DisplayUtil;
   
   public class Task678
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskStep:int = -100;
      
      private static var fightGang:FightGang;
      
      private static var isFirstOnMap:Boolean = true;
      
      private static var bloodTimer:Timer;
      
      private static var firstIsOver:Boolean;
      
      private static var secondIsOver:Boolean;
      
      private static var stoneArr:Array;
      
      private static var stoneShape1:Shape;
      
      private static var stoneShape2:Shape;
       
      
      public function Task678()
      {
         super();
      }
      
      public static function initTask() : void
      {
         NpcDialog.show(NPC.SHIPER,["布莱克为了得到星际碎片，竟然把邪灵组织的成员击落峡谷，它的行为真是让人琢磨不透啊！" + MainManager.actorInfo.formatNick + "，你有什么看法。"],["布莱克肯定是为了获取暗黑能量，同时它的真实身份很可疑呀！","我现在不想讨论这个，先休息一会。"],[function():void
         {
            TasksManager.accept(TaskController_678.TASK_ID,null);
            taskStep = 0;
            gotoStep1();
         }]);
      }
      
      public static function gotoStep1() : void
      {
         taskStep = 0;
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_678_1"),function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_678_2"),function():void
            {
               MapManager.changeMap(451);
            });
         });
      }
      
      public static function initTaskForMap451(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TaskController_678.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            ToolBarController.showOrHideAllUser(false);
            TasksManager.getProStatusList(TaskController_678.TASK_ID,function(param1:Array):void
            {
               _map.conLevel["task678MC"].visible = true;
               if(!param1[0])
               {
                  initTask678MC();
               }
            });
         }
      }
      
      private static function initTask678MC() : void
      {
         AnimateManager.playMcAnimate(_map.conLevel["task678MC"],2,"mc2",function():void
         {
            _map.conLevel["task678MC"].buttonMode = true;
            _map.conLevel["task678MC"].addEventListener(MouseEvent.CLICK,task678MCHandler);
         });
      }
      
      private static function task678MCHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         _map.conLevel["task678MC"].buttonMode = false;
         _map.conLevel["task678MC"].removeEventListener(MouseEvent.CLICK,task678MCHandler);
         NpcDialog.show(NPC.SEER,["奥德长老，这里到底发生了什么事！我们得到情报，格雷斯星突然之间就陷入了混乱！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.AODE_ZHANGLAO,[MainManager.actorInfo.formatNick + "，你总算来了！布莱克带领着一群邪灵组织成员进入黯夜之城，到处释放暗黑能量！"],["什么？"],[function():void
            {
               NpcDialog.show(NPC.AODE_ZHANGLAO,["我们这已经变得混乱不堪了，有的精灵受到污染，变得凶恶好斗，互相攻击！"],null,null,false,function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_678_3"),function():void
                  {
                     NpcDialog.show(NPC.SEER,["这些吉嘟好像变异了，正向我们袭来！哎呀！没办法，先把它们击倒吧！"],["（快用头部射击）"],[function():void
                     {
                        initFight();
                     }]);
                  });
               });
            }]);
         });
      }
      
      private static function initFight() : void
      {
         _map.conLevel["task678MC"].visible = false;
         if(fightGang == null)
         {
            fightGang = new FightGang(120,100,5);
            fightGang.createOgre(2528,new Point(370,338),10,5);
            fightGang.createOgre(2528,new Point(308,382),10,5);
            fightGang.createOgre(2528,new Point(484,358),10,5);
            fightGang.beginFight().addResponse(function():void
            {
               fightGang.destroyFight();
               fightGang = null;
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_678_4"),function():void
               {
                  TasksManager.complete(TaskController_678.TASK_ID,0,function():void
                  {
                     DebugTrace.show("第一步完成");
                     taskStep = 1;
                     _map.conLevel["task678MC"].visible = true;
                     _map.conLevel["task678MC"].gotoAndStop(3);
                  });
               });
            },function():void
            {
               NpcDialog.show(NPC.SEER,["不行！一定要让这些吉嘟变得清醒！"],["（继续用头部射击）"],[function():void
               {
                  fightGang.beginFight();
               }]);
            });
         }
      }
      
      public static function initTaskForMap455(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         var nRet:uint = uint(TasksManager.getTaskStatus(TaskController_678.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            _map.conLevel["kaciMC"].visible = false;
            OgreController.isShow = false;
            ToolBarController.showOrHideAllUser(false);
            TasksManager.getProStatusList(TaskController_678.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  gotoStep2();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  gotoStep3();
               }
            });
         }
         else if(nRet == TasksManager.COMPLETE)
         {
            _map.conLevel["firstMC"].visible = false;
            _map.conLevel["secondMC"].visible = false;
            _map.conLevel["kaciMC"].visible = true;
            DisplayUtil.removeForParent(_map.conLevel["monsterMC1"]);
            DisplayUtil.removeForParent(_map.conLevel["monsterMC2"]);
            DisplayUtil.removeForParent(_map.conLevel["monsterMC3"]);
            DisplayUtil.removeForParent(_map.conLevel["monsterMC4"]);
            DisplayUtil.removeForParent(_map.conLevel["bulaikeMC"]);
            _map.conLevel["blockMC1"].visible = false;
            _map.conLevel["blockMC2"].visible = false;
            _map.conLevel["blockMC3"].visible = false;
            taskStep = 3;
         }
         else if(nRet == TasksManager.UN_ACCEPT)
         {
            _map.conLevel["firstMC"].visible = false;
            _map.conLevel["secondMC"].visible = false;
            _map.conLevel["kaciMC"].visible = false;
            _map.conLevel["tuoruisiMC"].visible = false;
            _map.conLevel["tuote1MC"].visible = false;
            _map.conLevel["tuote2MC"].visible = false;
            DisplayUtil.removeForParent(_map.conLevel["monsterMC1"]);
            DisplayUtil.removeForParent(_map.conLevel["monsterMC2"]);
            DisplayUtil.removeForParent(_map.conLevel["monsterMC3"]);
            DisplayUtil.removeForParent(_map.conLevel["monsterMC4"]);
            DisplayUtil.removeForParent(_map.conLevel["bulaikeMC"]);
            _map.conLevel["blockMC1"].visible = false;
            _map.conLevel["blockMC2"].visible = false;
            _map.conLevel["blockMC3"].visible = false;
         }
      }
      
      private static function gotoStep2() : void
      {
         initStoneShape();
         initFirstMC();
         initSecondMC();
         if(isFirstOnMap)
         {
            isFirstOnMap = false;
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_678_5"),function():void
            {
               NpcDialog.show(NPC.SEER,["先解救这几只精灵吧！"]);
            });
         }
      }
      
      private static function initFirstMC() : void
      {
         var _loc1_:MovieClip = null;
         if(firstIsOver)
         {
            _map.conLevel["firstMC"].visible = false;
            return;
         }
         if(bloodTimer == null)
         {
            _loc1_ = _map.conLevel["firstMC"];
            _loc1_["stoneMC"].buttonMode = true;
            _loc1_["stoneMC"].addEventListener(MouseEvent.CLICK,stoneClickHandler);
            _loc1_["bloodMC"]["perMC"].gotoAndStop(1);
            bloodTimer = new Timer(500);
            bloodTimer.addEventListener(TimerEvent.TIMER,bloodTimerHandler);
            bloodTimer.start();
         }
      }
      
      private static function bloodTimerHandler(param1:TimerEvent) : void
      {
         var _loc2_:int = int(_map.conLevel["firstMC"]["bloodMC"]["perMC"].currentFrame);
         _loc2_ -= 2;
         if(_loc2_ < 1)
         {
            _loc2_ = 1;
         }
         _map.conLevel["firstMC"]["bloodMC"]["perMC"].gotoAndStop(_loc2_);
         _map.conLevel["firstMC"]["stoneMC"].y = 0 - _loc2_ / 4;
         if(_loc2_ == 1 && _map.conLevel["firstMC"]["bloodMC"].visible == true)
         {
            _map.conLevel["firstMC"]["bloodMC"].visible = false;
         }
      }
      
      private static function stoneClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         var nFrame:int = int(_map.conLevel["firstMC"]["bloodMC"]["perMC"].currentFrame);
         nFrame += 5;
         if(nFrame > 100)
         {
            nFrame = 100;
         }
         _map.conLevel["firstMC"]["bloodMC"]["perMC"].gotoAndStop(nFrame);
         _map.conLevel["firstMC"]["bloodMC"].visible = true;
         if(nFrame == 100)
         {
            bloodTimer.removeEventListener(TimerEvent.TIMER,bloodTimerHandler);
            bloodTimer.stop();
            bloodTimer = null;
            _map.conLevel["firstMC"]["stoneMC"].visible = false;
            DisplayUtil.removeForParent(_map.conLevel["firstMC"]["bloodMC"]);
            _map.conLevel["firstMC"]["petMC"].gotoAndStop(2);
            _map.conLevel["firstMC"]["tipMC"].gotoAndStop(1);
            NpcDialog.show(NPC.TUOTE,["太感谢你了，布莱克它们还在广场，我得先开溜！你保重啊..."],["（快去救其他精灵吧！）"],[function():void
            {
               AnimateManager.playMcAnimate(_map.conLevel["firstMC"]["petMC"],3,"mc3",function():void
               {
                  firstIsOver = true;
                  checkStep();
               });
            }]);
         }
      }
      
      private static function initSecondMC() : void
      {
         if(secondIsOver)
         {
            _map.conLevel["secondMC"].gotoAndStop(4);
            return;
         }
         _map.conLevel["secondMC"].buttonMode = true;
         _map.conLevel["secondMC"].addEventListener(MouseEvent.CLICK,secondMCClickHandler);
      }
      
      private static function secondMCClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         NpcDialog.show(NPC.XIELING_ZHANSHI,["臭铁皮！给我识相点，别多管闲事！"],["哼！我要好好收拾你！","呜呜！我有点小害怕......"],[function():void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
            FightManager.fightWithBoss("邪灵战士",0);
         }]);
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var evt:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         info = evt.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            AnimateManager.playMcAnimate(_map.conLevel["secondMC"],2,"mc2",function():void
            {
               _map.conLevel["secondMC"].mouseEnabled = _map.conLevel["secondMC"].mouseChildren = false;
               NpcDialog.show(NPC.TUORUISI,["我好像被邪灵组织释放的暗黑能量感染了，你有办法帮我吗？"],["等我的队友拿来药品就能给你治疗！你先找个地方休息会吧！"],[function():void
               {
                  AnimateManager.playMcAnimate(_map.conLevel["secondMC"],3,"mc3",function():void
                  {
                     secondIsOver = true;
                     checkStep();
                  });
               }]);
            });
         }
         else
         {
            NpcDialog.show(NPC.SEER,["先解救这几只精灵吧！"],null,null,false,function():void
            {
            });
         }
      }
      
      private static function checkStep() : void
      {
         if(firstIsOver && secondIsOver)
         {
            TasksManager.complete(TaskController_678.TASK_ID,1,function():void
            {
               DebugTrace.show("第二步完成");
               taskStep = 2;
               gotoStep3();
            });
         }
      }
      
      private static function gotoStep3() : void
      {
         initStoneShape();
         _map.conLevel["firstMC"].visible = false;
         _map.conLevel["secondMC"].gotoAndStop(4);
         _map.conLevel["blockMC1"].gotoAndStop(2);
         _map.conLevel["blockMC2"].gotoAndStop(2);
         _map.conLevel["blockMC3"].gotoAndStop(2);
         _map.conLevel["blockMC1"].addEventListener(MouseEvent.CLICK,blockClickHandler);
         _map.conLevel["blockMC2"].addEventListener(MouseEvent.CLICK,blockClickHandler);
         _map.conLevel["blockMC3"].addEventListener(MouseEvent.CLICK,blockClickHandler);
         stoneArr = [_map.conLevel["blockMC1"],_map.conLevel["blockMC2"],_map.conLevel["blockMC3"]];
         AimatController.addEventListener(AimatEvent.PLAY_END,onAimatEndhandler);
      }
      
      private static function blockClickHandler(param1:MouseEvent) : void
      {
         NpcDialog.show(NPC.SEER,["布莱克就在对面，要通过这里得先把障碍物给清除！"],["（用头部射击清除障碍物）"]);
      }
      
      private static function initStoneShape() : void
      {
         if(stoneShape1 == null && stoneShape2 == null)
         {
            stoneShape1 = new Shape();
            stoneShape1.graphics.beginFill(16776960);
            stoneShape1.graphics.drawRect(0,0,200,110);
            stoneShape1.graphics.endFill();
            _map.typeLevel.addChild(stoneShape1);
            stoneShape1.x = 189;
            stoneShape1.y = 174;
            stoneShape2 = new Shape();
            stoneShape2.graphics.beginFill(16776960);
            stoneShape2.graphics.drawRect(0,0,200,90);
            stoneShape2.graphics.endFill();
            _map.typeLevel.addChild(stoneShape2);
            stoneShape2.x = 462;
            stoneShape2.y = 316;
            MapManager.currentMap.makeMapArray();
         }
      }
      
      private static function onAimatEndhandler(param1:AimatEvent) : void
      {
         var obj:MovieClip = null;
         var evt:AimatEvent = param1;
         for each(obj in stoneArr)
         {
            if(obj.visible && obj.hitTestPoint(evt.info.endPos.x,evt.info.endPos.y))
            {
               AnimateManager.playMcAnimate(obj,3,"mc3",function():void
               {
                  obj.visible = false;
                  checkBlock();
               });
               break;
            }
         }
      }
      
      private static function checkBlock() : void
      {
         var obj:MovieClip = null;
         var n:uint = 0;
         for each(obj in stoneArr)
         {
            if(obj.visible == false)
            {
               n++;
            }
         }
         if(n == stoneArr.length)
         {
            MainManager.selfVisible = false;
            AnimateManager.playMcAnimate(_map.conLevel["bulaikeMC"],1,"mc1",function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_678_6"),function():void
               {
                  MainManager.actorModel.pos = new Point(602,312);
                  MainManager.selfVisible = true;
                  DisplayUtil.removeForParent(_map.conLevel["monsterMC1"]);
                  DisplayUtil.removeForParent(_map.conLevel["monsterMC2"]);
                  DisplayUtil.removeForParent(_map.conLevel["monsterMC3"]);
                  DisplayUtil.removeForParent(_map.conLevel["monsterMC4"]);
                  DisplayUtil.removeForParent(_map.conLevel["bulaikeMC"]);
                  if(Boolean(stoneShape1) && Boolean(stoneShape2))
                  {
                     DisplayUtil.removeForParent(stoneShape1);
                     DisplayUtil.removeForParent(stoneShape2);
                     stoneShape1 = null;
                     stoneShape2 = null;
                     MapManager.currentMap.makeMapArray();
                  }
                  _map.conLevel["kaciMC"].gotoAndStop(2);
                  _map.conLevel["kaciMC"].visible = true;
                  _map.conLevel["kaciMC"].buttonMode = true;
                  _map.conLevel["kaciMC"].addEventListener(MouseEvent.CLICK,kaciClickHandler);
               });
            });
         }
      }
      
      private static function kaciClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         if(taskStep != 3)
         {
            _map.conLevel["kaciMC"].gotoAndStop(1);
            NpcDialog.show(NPC.SEER,["卡茨！你来得太及时了！可是，你怎么找到格雷斯星的呢？"],null,null,false,function():void
            {
               NpcDialog.show(NPC.KAXIUSI_WHITE,["前不久怀特星出现了一些诡异黑影！我觉得迹象可疑，所以就联系赛尔号查探情况！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.KAXIUSI_WHITE,["罗杰船长告诉了我有关格雷斯星的事情，我知道形势危急所以立刻赶来相助，正好遇到了你们与邪灵组织的战斗！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.SEER,["卡茨，太棒了！让我们再次并肩作战吧！帮助格雷斯星重返光明！"],["嗯！"],[function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_678_7"),function():void
                        {
                           TasksManager.complete(TaskController_678.TASK_ID,2,function():void
                           {
                              DebugTrace.show("任务完成");
                              taskStep = 3;
                              OgreController.isShow = true;
                              ToolBarController.showOrHideAllUser(true);
                           });
                        });
                     }]);
                  });
               });
            });
         }
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 451)
         {
            OgreController.isShow = true;
            ToolBarController.showOrHideAllUser(true);
            _map.conLevel["task678MC"].removeEventListener(MouseEvent.CLICK,task678MCHandler);
            if(fightGang)
            {
               fightGang.destroyFight();
               fightGang = null;
            }
         }
         else if(MapManager.currentMap.id == 455)
         {
            OgreController.isShow = true;
            ToolBarController.showOrHideAllUser(true);
            if(bloodTimer)
            {
               bloodTimer.removeEventListener(TimerEvent.TIMER,bloodTimerHandler);
               bloodTimer.stop();
               bloodTimer = null;
            }
            _map.conLevel["firstMC"]["stoneMC"].removeEventListener(MouseEvent.CLICK,stoneClickHandler);
            _map.conLevel["secondMC"].removeEventListener(MouseEvent.CLICK,secondMCClickHandler);
            _map.conLevel["kaciMC"].removeEventListener(MouseEvent.CLICK,kaciClickHandler);
            _map.conLevel["blockMC1"].removeEventListener(MouseEvent.CLICK,blockClickHandler);
            _map.conLevel["blockMC2"].removeEventListener(MouseEvent.CLICK,blockClickHandler);
            _map.conLevel["blockMC3"].removeEventListener(MouseEvent.CLICK,blockClickHandler);
            AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatEndhandler);
            if(stoneArr)
            {
               stoneArr.length = 0;
               stoneArr = null;
            }
            stoneShape1 = null;
            stoneShape2 = null;
         }
         _map = null;
      }
   }
}
