package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.control.TaskController_669;
   import com.robot.app.task.control.TaskController_673;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
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
   import flash.geom.Point;
   import org.taomee.debug.DebugTrace;
   import org.taomee.utils.DisplayUtil;
   
   public class Task673
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskStep:int = -100;
      
      private static var stoneShape:Shape;
      
      private static var gamePanel:MovieClip;
       
      
      public function Task673()
      {
         super();
      }
      
      public static function gotoStep1() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_673_1"),function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_673_2"),function():void
            {
               MapManager.changeMap(451);
            });
         });
      }
      
      public static function initTaskForMap451(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         var nRet:uint = uint(TasksManager.getTaskStatus(TaskController_669.TASK_ID));
         if(nRet == TasksManager.COMPLETE)
         {
            nRet = uint(TasksManager.getTaskStatus(TaskController_673.TASK_ID));
            if(nRet == TasksManager.ALR_ACCEPT)
            {
               TasksManager.getProStatusList(TaskController_673.TASK_ID,function(param1:Array):void
               {
                  var a:Array = param1;
                  if(!a[0])
                  {
                     TasksManager.complete(TaskController_673.TASK_ID,0,function(param1:Boolean):void
                     {
                        if(param1)
                        {
                           DebugTrace.show("第一步完成");
                           taskStep = 1;
                           gotoStep2();
                        }
                     });
                  }
                  if(Boolean(a[0]) && !a[1])
                  {
                     taskStep = 1;
                     gotoStep2();
                  }
               });
            }
         }
      }
      
      public static function gotoStep2() : void
      {
         _map.conLevel["task673MC"].visible = true;
         _map.conLevel["task673MC"].buttonMode = true;
         _map.conLevel["task673MC"].addEventListener(MouseEvent.CLICK,task673MCHandler);
      }
      
      private static function task673MCHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         _map.conLevel["task673MC"].gotoAndStop(2);
         _map.conLevel["task673MC"].buttonMode = false;
         _map.conLevel["task673MC"].removeEventListener(MouseEvent.CLICK,task673MCHandler);
         NpcDialog.show(NPC.AODE_ZHANGLAO,[MainManager.actorInfo.formatNick + "，看到你平安无事，我就放心了！你在黯夜地穴遇到了什么啊？"],null,null,false,function():void
         {
            NpcDialog.show(NPC.SEER,["回想起来可真是刺激、兴奋加颤抖呀……（叽里呱啦说一大堆）为了方便我展开侦查行动，这些事先别透露出去，你懂的！"],["嗯，我懂的！看来事情变得越来越复杂了！"],[function():void
            {
               NpcDialog.show(NPC.AODE_ZHANGLAO,["依稀记得，我爷爷的爷爷曾说过，大峡谷也封藏着一块黑暗的星际碎片。如果确有其事，而我们又能够抢先找到的话，那将是格雷斯星的幸运。"],["大峡谷在哪里啊？我现在就去。"],[function():void
               {
                  NpcDialog.show(NPC.AODE_ZHANGLAO,["大峡谷在黯夜之城的西面，那边的地势异常险峻，你要小心啊！"],["我知道了，放心吧！"],[function():void
                  {
                     TasksManager.complete(TaskController_673.TASK_ID,1,function(param1:Boolean):void
                     {
                        if(param1)
                        {
                           DebugTrace.show("第二步完成");
                           taskStep = 2;
                           _map.conLevel["door_1"].visible = true;
                           _map.conLevel["task673MC"].gotoAndStop(3);
                        }
                     });
                  }]);
               }]);
            }]);
         });
      }
      
      public static function initTaskForMap454(param1:BaseMapProcess) : void
      {
         var nRet:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         _map.conLevel["petMC"].visible = false;
         _map.conLevel["bloodMC"].visible = false;
         initStoneShape();
         nRet = uint(TasksManager.getTaskStatus(TaskController_669.TASK_ID));
         if(nRet == TasksManager.COMPLETE)
         {
            nRet = uint(TasksManager.getTaskStatus(TaskController_673.TASK_ID));
            if(nRet == TasksManager.ALR_ACCEPT)
            {
               OgreController.isShow = false;
               ToolBarController.showOrHideAllUser(false);
               TasksManager.getProStatusList(TaskController_673.TASK_ID,function(param1:Array):void
               {
                  if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
                  {
                     taskStep = 2;
                     gotoStep3();
                  }
                  else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
                  {
                     taskStep = 3;
                     gotoStep4();
                  }
                  else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
                  {
                     taskStep = 4;
                     gotoStep5();
                  }
                  else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && Boolean(param1[4]) && !param1[5])
                  {
                     taskStep = 5;
                     removeBlock();
                     gotoStep6();
                  }
               });
            }
            else if(nRet != TasksManager.UN_ACCEPT)
            {
               if(nRet == TasksManager.COMPLETE)
               {
                  _map.conLevel["petMC"].visible = false;
                  _map.conLevel["holeMC"].gotoAndStop(3);
                  _map.conLevel["bridgeMC"]["mc1"].gotoAndStop(2);
                  _map.conLevel["bridgeMC"]["mc2"].gotoAndStop(2);
                  _map.conLevel["bridgeMC"]["mc3"].gotoAndStop(2);
                  _map.conLevel["bridgeMC"].mouseEnabled = _map.conLevel["bridgeMC"].mouseChildren = false;
                  removeBlock();
                  clearStoneShape();
               }
            }
         }
      }
      
      private static function gotoStep3() : void
      {
         MainManager.selfVisible = false;
         AnimateManager.playMcAnimate(_map.conLevel["mainMC"],1,"mc1",function():void
         {
            NpcDialog.show(NPC.SEER,["你好，刚刚我好像看见一个黑影在这边出现，你发现什么动静了吗？"],null,null,false,function():void
            {
               NpcDialog.show(NPC.JIDU,["没注意啊？我是过来散步的，最近吃太多，越长越胖，必须得运动了！你到大峡谷来干嘛？"],["哦！我是来看风景的。（现在不能随便透露有关星际碎片的事情）"],[function():void
               {
                  NpcDialog.show(NPC.JIDU,["（流汗），你还真有情趣啊！好吧，你慢慢欣赏，我先回去了！拜拜！"],["嗯，你现在圆得跟球似的，别走太快，小心摔着！"],[function():void
                  {
                     AnimateManager.playMcAnimate(_map.conLevel["mainMC"],2,"mc2",function():void
                     {
                        TasksManager.complete(TaskController_673.TASK_ID,2,function(param1:Boolean):void
                        {
                           if(param1)
                           {
                              DebugTrace.show("第三步完成");
                              taskStep = 3;
                              gotoStep4();
                           }
                        });
                     });
                  }]);
               }]);
            });
         });
      }
      
      private static function gotoStep4() : void
      {
         MainManager.actorModel.pos = new Point(224,312);
         MainManager.selfVisible = true;
         initStone(_map.conLevel["stoneMC1"],new Point(70,428));
      }
      
      private static function initStone(param1:MovieClip, param2:Point) : void
      {
         param1.data = {"point":param2};
         param1.gotoAndStop(2);
         param1.buttonMode = true;
         param1.addEventListener(MouseEvent.CLICK,stoneClickHandler);
      }
      
      private static function checkDistance(param1:MovieClip) : Boolean
      {
         var _loc2_:Point = param1.data["point"];
         if(Point.distance(MainManager.actorModel.pos,new Point(param1.x,param1.y)) < 100)
         {
            return true;
         }
         MainManager.actorModel.walkAction(_loc2_);
         return false;
      }
      
      private static function stoneClickHandler(param1:MouseEvent) : void
      {
         var stone:MovieClip = null;
         var mc:MovieClip = null;
         var evt:MouseEvent = param1;
         stone = evt.currentTarget as MovieClip;
         if(checkDistance(stone) == false)
         {
            return;
         }
         mc = _map.conLevel["bloodMC"];
         mc.x = stone.x - 40;
         mc.y = stone.y - 50;
         stone.gotoAndStop(1);
         stone.buttonMode = false;
         stone.removeEventListener(MouseEvent.CLICK,stoneClickHandler);
         mc.addFrameScript(mc.totalFrames - 1,function():void
         {
            mc.stop();
            mc.addFrameScript(mc.totalFrames - 1,null);
            if(stone.name == "stoneMC1")
            {
               NpcDialog.show(NPC.SEER,["这里没有能量异常的情况，换个地方继续勘测吧！"],["（点击其它发光的地块）"],[function():void
               {
                  mc.visible = false;
                  initStone(_map.conLevel["stoneMC2"],new Point(220,280));
               }]);
            }
            else if(stone.name == "stoneMC2")
            {
               NpcDialog.show(NPC.SEER,["这边也没有发现什么异常情况，看来只有寄希望于对面的区域了。"],["（点击移动吊桥）"],[function():void
               {
                  mc.visible = false;
                  initBridge();
               }]);
            }
            else if(stone.name == "stoneMC3")
            {
               NpcDialog.show(NPC.SEER,["哎！看来有的传说还是不可靠啊，我都快把大峡谷翻个遍了！神马情况都木出现！"],null,null,false,function():void
               {
                  mc.visible = false;
                  initBox();
               });
            }
         });
         mc.visible = true;
         mc.gotoAndPlay(2);
      }
      
      private static function initStoneShape() : void
      {
         if(stoneShape == null)
         {
            stoneShape = new Shape();
            stoneShape.graphics.beginFill(16776960);
            stoneShape.graphics.drawRect(0,0,48,95);
            stoneShape.graphics.endFill();
            _map.typeLevel.addChild(stoneShape);
            stoneShape.x = 360;
            stoneShape.y = 300;
            MapManager.currentMap.makeMapArray();
         }
      }
      
      private static function clearStoneShape() : void
      {
         if(stoneShape)
         {
            DisplayUtil.removeForParent(stoneShape);
            stoneShape = null;
            MapManager.currentMap.makeMapArray();
         }
      }
      
      private static function initBridge() : void
      {
         _map.conLevel["bridgeMC"]["mc1"].buttonMode = true;
         _map.conLevel["bridgeMC"]["mc1"].addEventListener(MouseEvent.CLICK,bridgeClickHandler);
         _map.conLevel["bridgeMC"]["mc2"].buttonMode = true;
         _map.conLevel["bridgeMC"]["mc2"].addEventListener(MouseEvent.CLICK,bridgeClickHandler);
         _map.conLevel["bridgeMC"]["mc3"].buttonMode = true;
         _map.conLevel["bridgeMC"]["mc3"].addEventListener(MouseEvent.CLICK,bridgeClickHandler);
      }
      
      private static function bridgeClickHandler(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         _loc2_.buttonMode = false;
         _loc2_.removeEventListener(MouseEvent.CLICK,bridgeClickHandler);
         _loc2_.gotoAndStop(2);
         if(_map.conLevel["bridgeMC"]["mc1"].currentFrame == 2 && _map.conLevel["bridgeMC"]["mc2"].currentFrame == 2 && _map.conLevel["bridgeMC"]["mc3"].currentFrame == 2)
         {
            clearStoneShape();
            _map.conLevel["bridgeMC"].mouseEnabled = _map.conLevel["bridgeMC"].mouseChildren = false;
            MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,walkHandler);
         }
      }
      
      private static function walkHandler(param1:RobotEvent) : void
      {
         var evt:RobotEvent = param1;
         if(Point.distance(MainManager.actorModel.pos,new Point(440,340)) < 60)
         {
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,walkHandler);
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_673_3"),function():void
            {
               MainManager.selfVisible = false;
               _map.conLevel["mainMC"].data = {"n":0};
               _map.conLevel["mainMC"].gotoAndStop(3);
               _map.conLevel["mainMC"].addEventListener(MouseEvent.CLICK,saveSeerHandler);
            });
         }
      }
      
      private static function saveSeerHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         ++_map.conLevel["mainMC"].data["n"];
         if(_map.conLevel["mainMC"].data["n"] == 10)
         {
            _map.conLevel["mainMC"].data = null;
            _map.conLevel["mainMC"].removeEventListener(MouseEvent.CLICK,saveSeerHandler);
            AnimateManager.playMcAnimate(_map.conLevel["mainMC"],4,"mc4",function():void
            {
               MainManager.actorModel.pos = new Point(430,330);
               MainManager.selfVisible = true;
               NpcDialog.show(NPC.SEER,["我的个天啦！太刺激了！那个发动袭击的飞行生物就在对面，似乎守护着什么？"],["（点击飞行生物）"],[function():void
               {
                  TasksManager.complete(TaskController_673.TASK_ID,3,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        DebugTrace.show("第四步完成");
                        taskStep = 4;
                        gotoStep5();
                     }
                  });
               }]);
            });
         }
      }
      
      private static function gotoStep5() : void
      {
         _map.conLevel["bridgeMC"]["mc1"].gotoAndStop(2);
         _map.conLevel["bridgeMC"]["mc2"].gotoAndStop(2);
         _map.conLevel["bridgeMC"]["mc3"].gotoAndStop(2);
         _map.conLevel["bridgeMC"].mouseEnabled = _map.conLevel["bridgeMC"].mouseChildren = false;
         _map.conLevel["petMC"].visible = true;
         clearStoneShape();
         MainManager.actorModel.pos = new Point(430,330);
         NpcDialog.show(NPC.KUANGYEHEINIAO,["你这个破烂铁皮，谁让你到大峡谷来的！这可是我的领地！"],["大鸟，别那么激动嘛，我只想过去看看风景！"],[function():void
         {
            NpcDialog.show(NPC.KUANGYEHEINIAO,["看什么都是浮云，赶紧离开这里，要不然我可不客气了！"],["看来，咱们得分个胜负了！（点击大鸟对战）"],[function():void
            {
               _map.conLevel["petMC"].buttonMode = true;
               _map.conLevel["petMC"].addEventListener(MouseEvent.CLICK,petClickHandler);
            }]);
         }]);
      }
      
      private static function petClickHandler(param1:MouseEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         FightManager.fightWithBoss("狂野黑鸟",0);
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var evt:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         _map.conLevel["petMC"].visible = true;
         info = evt.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            removeBlock();
            TasksManager.complete(TaskController_673.TASK_ID,4,function(param1:Boolean):void
            {
               var b:Boolean = param1;
               if(b)
               {
                  DebugTrace.show("第五步完成");
                  taskStep = 5;
                  NpcDialog.show(NPC.KUANGYEHEINIAO,["你这个家伙还有两下子嘛！你等着，我会回来的！"],["哈哈！我随时恭候！"],[function():void
                  {
                     taskStep = 5;
                     gotoStep6();
                  }]);
               }
            });
         }
         else
         {
            NpcDialog.show(NPC.KUANGYEHEINIAO,["哈哈，乖乖回家吃饭去吧！"],["不行！我要战胜它！（点击大鸟对战）"],[function():void
            {
               _map.conLevel["petMC"].buttonMode = true;
               _map.conLevel["petMC"].removeEventListener(MouseEvent.CLICK,petClickHandler);
               _map.conLevel["petMC"].addEventListener(MouseEvent.CLICK,petClickHandler);
            }]);
         }
      }
      
      private static function removeBlock() : void
      {
         DisplayUtil.removeForParent(_map.typeLevel["block"]);
         MapManager.currentMap.makeMapArray();
      }
      
      private static function gotoStep6() : void
      {
         _map.conLevel["petMC"].visible = false;
         _map.conLevel["bridgeMC"]["mc1"].gotoAndStop(2);
         _map.conLevel["bridgeMC"]["mc2"].gotoAndStop(2);
         _map.conLevel["bridgeMC"]["mc3"].gotoAndStop(2);
         _map.conLevel["bridgeMC"].mouseEnabled = _map.conLevel["bridgeMC"].mouseChildren = false;
         clearStoneShape();
         initStone(_map.conLevel["stoneMC3"],new Point(800,285));
      }
      
      private static function initBox() : void
      {
         MainManager.selfVisible = false;
         AnimateManager.playMcAnimate(_map.conLevel["mainMC"],5,"mc5",function():void
         {
            _map.conLevel["mainMC"].mouseEnabled = false;
            _map.conLevel["mainMC"].mouseChildren = false;
            _map.conLevel["holeMC"].buttonMode = true;
            _map.conLevel["holeMC"].addEventListener(MouseEvent.CLICK,holeClickHandler);
            _map.conLevel["holeMC"].gotoAndStop(2);
            initGame();
         });
      }
      
      private static function holeClickHandler(param1:MouseEvent) : void
      {
         initGame();
      }
      
      private static function initGame() : void
      {
         if(gamePanel == null)
         {
            gamePanel = _map.topLevel["gamePanel"];
            gamePanel.data = {"n":0};
            gamePanel["closeBTN"].addEventListener(MouseEvent.CLICK,closeGame);
            gamePanel["backMC"].buttonMode = true;
            gamePanel["backMC"].addEventListener(MouseEvent.CLICK,backClickHandler);
            gamePanel.visible = true;
         }
      }
      
      private static function closeGame(param1:MouseEvent = null) : void
      {
         if(gamePanel)
         {
            gamePanel.visible = false;
            gamePanel["closeBTN"].removeEventListener(MouseEvent.CLICK,closeGame);
            gamePanel["backMC"].removeEventListener(MouseEvent.CLICK,backClickHandler);
            gamePanel["thingMC"].gotoAndStop(1);
            gamePanel = null;
         }
      }
      
      private static function backClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         ++gamePanel.data["n"];
         AnimateManager.playMcAnimate(gamePanel["midMC"],0,"",function():void
         {
            gamePanel["midMC"].gotoAndStop(1);
            if(gamePanel.data["n"] == 3)
            {
               gamePanel["thingMC"].gotoAndStop(2);
            }
            else if(gamePanel.data["n"] == 6)
            {
               gamePanel["thingMC"].gotoAndStop(3);
            }
            else if(gamePanel.data["n"] == 9)
            {
               gameSuccess();
            }
         });
      }
      
      private static function gameSuccess() : void
      {
         _map.conLevel["mainMC"].mouseEnabled = true;
         _map.conLevel["mainMC"].mouseChildren = true;
         AnimateManager.playMcAnimate(gamePanel["thingMC"],4,"mc4",function():void
         {
            _map.conLevel["holeMC"].gotoAndStop(3);
            _map.conLevel["holeMC"].buttonMode = false;
            _map.conLevel["holeMC"].removeEventListener(MouseEvent.CLICK,holeClickHandler);
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_673_4"),function():void
            {
               closeGame();
               AnimateManager.playMcAnimate(_map.conLevel["mainMC"],6,"mc6",function():void
               {
                  _map.conLevel["mainMC"].visible = false;
                  MainManager.actorModel.pos = new Point(660,220);
                  MainManager.selfVisible = true;
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_673_5"),function():void
                  {
                     TasksManager.complete(TaskController_673.TASK_ID,5,function(param1:Boolean):void
                     {
                        if(param1)
                        {
                           DebugTrace.show("任务完成");
                           taskStep = 6;
                           OgreController.isShow = true;
                           ToolBarController.showOrHideAllUser(true);
                        }
                     });
                  });
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
         if(MapManager.currentMap.id == 451)
         {
            _map.conLevel["task673MC"].removeEventListener(MouseEvent.CLICK,task673MCHandler);
         }
         else if(MapManager.currentMap.id == 454)
         {
            OgreController.isShow = true;
            ToolBarController.showOrHideAllUser(true);
            MainManager.selfVisible = true;
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,walkHandler);
            _map.conLevel["stoneMC1"].removeEventListener(MouseEvent.CLICK,stoneClickHandler);
            _map.conLevel["stoneMC2"].removeEventListener(MouseEvent.CLICK,stoneClickHandler);
            _map.conLevel["stoneMC3"].removeEventListener(MouseEvent.CLICK,stoneClickHandler);
            _map.conLevel["bridgeMC"]["mc1"].removeEventListener(MouseEvent.CLICK,bridgeClickHandler);
            _map.conLevel["bridgeMC"]["mc2"].removeEventListener(MouseEvent.CLICK,bridgeClickHandler);
            _map.conLevel["bridgeMC"]["mc3"].removeEventListener(MouseEvent.CLICK,bridgeClickHandler);
            _map.conLevel["mainMC"].removeEventListener(MouseEvent.CLICK,saveSeerHandler);
            _map.conLevel["petMC"].removeEventListener(MouseEvent.CLICK,petClickHandler);
            _map.conLevel["holeMC"].removeEventListener(MouseEvent.CLICK,holeClickHandler);
            closeGame();
            if(stoneShape)
            {
               DisplayUtil.removeForParent(stoneShape);
               stoneShape = null;
            }
         }
         _map = null;
      }
   }
}
