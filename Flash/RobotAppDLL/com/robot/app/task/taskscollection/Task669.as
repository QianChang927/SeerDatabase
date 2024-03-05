package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.control.TaskController_663;
   import com.robot.app.task.control.TaskController_669;
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
   import flash.events.KeyboardEvent;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.ui.Keyboard;
   import flash.utils.Timer;
   import org.taomee.debug.DebugTrace;
   import org.taomee.utils.DisplayUtil;
   
   public class Task669
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskStep:int = -100;
      
      private static var stoneShape:Shape;
      
      private static var monsterShape:Shape;
      
      private static var doorShape:Shape;
      
      private static var gamePanel:MovieClip;
      
      private static var gameTimer:Timer;
      
      private static var gameArr:Array;
       
      
      public function Task669()
      {
         super();
      }
      
      public static function initTaskForMap452(param1:BaseMapProcess) : void
      {
         var nRet:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         _map.conLevel["lineMC"]["alertMC"].visible = false;
         _map.conLevel["lineMC"]["pointMC"].visible = false;
         nRet = uint(TasksManager.getTaskStatus(TaskController_663.TASK_ID));
         if(nRet == TasksManager.COMPLETE)
         {
            nRet = uint(TasksManager.getTaskStatus(TaskController_669.TASK_ID));
            if(nRet == TasksManager.UN_ACCEPT)
            {
               _map.conLevel["lineMC"]["alertMC"].visible = true;
               _map.conLevel["lineMC"].gotoAndStop(4);
               _map.conLevel["lineMC"]["task669Hit"].buttonMode = true;
               _map.conLevel["lineMC"]["task669Hit"].addEventListener(MouseEvent.CLICK,task669HitHandler);
            }
            else if(nRet == TasksManager.ALR_ACCEPT)
            {
               TasksManager.getProStatusList(TaskController_669.TASK_ID,function(param1:Array):void
               {
                  if(!param1[0])
                  {
                     _map.conLevel["lineMC"].gotoAndStop(4);
                     taskStep = 0;
                     gotoStep1();
                  }
               });
            }
         }
      }
      
      private static function task669HitHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         _map.conLevel["lineMC"]["alertMC"].visible = false;
         NpcDialog.show(NPC.AODE_ZHANGLAO,["看样子，布莱克是拿着星际碎片去与组织汇合了，一定要想办法阻止它才行！"],["嗯！长老，别担心,我一定会阻止布莱克的！","先让我休息一会吧！"],[function():void
         {
            NpcDialog.show(NPC.AODE_ZHANGLAO,["那个地洞被称为黯夜地穴，由于阴森恐怖，还流传着各种鬼怪传说，已经很久没有生灵敢踏入了。"],["听着我都有点害怕了….."],[function():void
            {
               NpcDialog.show(NPC.AODE_ZHANGLAO,["但最近也有流言称，崇拜黑暗的邪灵组织早已在里面建立了基地，还经常做着恶毒的实验与祭祀！刚刚布莱克的行为正好印证了这一点！"],["嗯，无论如何先进去看看！"],[function():void
               {
                  NpcDialog.show(NPC.AODE_ZHANGLAO,[MainManager.actorInfo.formatNick + "，我很佩服你的胆量，如果遇到那群残暴的家伙，千万别鲁莽行事！小心啊！"],["我知道了"],[function():void
                  {
                     TasksManager.accept(TaskController_669.TASK_ID,function(param1:Boolean):void
                     {
                        if(param1)
                        {
                           DebugTrace.show("任务接取成功");
                           _map.conLevel["lineMC"]["task669Hit"].visible = false;
                           _map.conLevel["lineMC"]["task669Hit"].removeEventListener(MouseEvent.CLICK,task669HitHandler);
                           taskStep = 0;
                           gotoStep1();
                        }
                     });
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function gotoStep1() : void
      {
         _map.conLevel["lineMC"]["alertMC"].visible = false;
         _map.conLevel["lineMC"]["pointMC"].visible = true;
      }
      
      public static function initTaskForMap453(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         var nRet:uint = uint(TasksManager.getTaskStatus(TaskController_669.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            OgreController.isShow = false;
            ToolBarController.showOrHideAllUser(false);
            TasksManager.getProStatusList(TaskController_669.TASK_ID,function(param1:Array):void
            {
               var a:Array = param1;
               if(!a[0])
               {
                  taskStep = 0;
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_669_1"),function():void
                  {
                     TasksManager.complete(TaskController_669.TASK_ID,0,function(param1:Boolean):void
                     {
                        if(param1)
                        {
                           DebugTrace.show("第一步完成");
                           taskStep = 1;
                           gotoStep2();
                        }
                     });
                  });
               }
               else if(Boolean(a[0]) && !a[1])
               {
                  taskStep = 1;
                  gotoStep2();
               }
               else if(Boolean(a[0]) && Boolean(a[1]) && !a[2])
               {
                  taskStep = 2;
                  gotoStep3();
               }
               else if(Boolean(a[0]) && Boolean(a[1]) && Boolean(a[2]) && !a[3])
               {
                  taskStep = 3;
                  gotoStep4();
               }
               else if(Boolean(a[0]) && Boolean(a[1]) && Boolean(a[2]) && Boolean(a[3]) && !a[4])
               {
                  taskStep = 4;
                  gotoStep5();
               }
               else if(Boolean(a[0]) && Boolean(a[1]) && Boolean(a[2]) && Boolean(a[3]) && Boolean(a[4]) && !a[5])
               {
                  taskStep = 5;
                  gotoStep6();
               }
            });
         }
         else
         {
            _map.conLevel["stoneMC"]["stone1"].gotoAndStop(3);
            _map.conLevel["stoneMC"]["stone2"].gotoAndStop(3);
            _map.conLevel["stoneMC"]["stone3"].gotoAndStop(3);
            _map.conLevel["doorMC"].visible = false;
         }
      }
      
      private static function gotoStep2() : void
      {
         var _loc1_:MovieClip = _map.conLevel["firstMC"];
         _loc1_.visible = true;
         _loc1_.buttonMode = true;
         _loc1_.addEventListener(MouseEvent.CLICK,firstMCHandler);
         initStoneShape();
         initMonsterShape();
         initDoorShape();
      }
      
      private static function firstMCHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         var firstMC:MovieClip = _map.conLevel["firstMC"];
         firstMC.buttonMode = false;
         firstMC.removeEventListener(MouseEvent.CLICK,firstMCHandler);
         MainManager.selfVisible = false;
         AnimateManager.playMcAnimate(_map.conLevel["firstMC"],1,"mc1",function():void
         {
            NpcDialog.show(NPC.SEER,["小家伙，你怎么会在这里啊！刚刚吓我一跳。"],null,null,false,function():void
            {
               NpcDialog.show(NPC.FITJIDU,["呜呜！我听说这里面有很多稀奇古怪的事情，所以就好奇的跑进来看看，转来转去迷路了！呜呜呜…"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.SEER,["别哭了小家伙！放心，我现在就带你出去，跟在我身后，听话哈！"],["嗯嗯嗯…"],[function():void
                  {
                     AnimateManager.playMcAnimate(_map.conLevel["firstMC"],2,"mc2",function():void
                     {
                        NpcDialog.show(NPC.SEER,["到入口咯， 赶紧出去吧！下次要是再来探险记得准备火把，照亮道路才好前进嘛！你很勇敢！加油哦！ "],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.FITJIDU,["嗯嗯，谢谢你。对了，地洞里的油木堆应该可以帮到你！前面我躲在角落里的时候好像看见布莱克经过，好恐怖！你可要小心呀！"],["嗯，我到这里找的就是它！"],[function():void
                           {
                              TasksManager.complete(TaskController_669.TASK_ID,1,function(param1:Boolean):void
                              {
                                 if(param1)
                                 {
                                    DebugTrace.show("第二步完成");
                                    taskStep = 2;
                                    gotoStep3();
                                 }
                              });
                           }]);
                        });
                     });
                  }]);
               });
            });
         });
      }
      
      private static function gotoStep3() : void
      {
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,walkHandler);
         MainManager.actorModel.pos = new Point(116,492);
         MainManager.selfVisible = true;
         _map.conLevel["firstMC"].visible = false;
         initStoneShape();
         initMonsterShape();
         initDoorShape();
      }
      
      private static function walkHandler(param1:RobotEvent) : void
      {
         var evt:RobotEvent = param1;
         DebugTrace.show(taskStep);
         if(taskStep == 2 && Point.distance(MainManager.actorModel.pos,new Point(122,290)) < 80)
         {
            NpcDialog.show(NPC.SEER,["前方的地面塌陷了，在这低矮的洞穴里又不能飞行，我得想想别的法子."],["（点击移动附近的石块，填埋断层坑洞）"],[function():void
            {
               MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,walkHandler);
               _map.conLevel["stoneMC"]["stone1"].buttonMode = true;
               _map.conLevel["stoneMC"]["stone1"].gotoAndStop(2);
               _map.conLevel["stoneMC"]["stone1"].addEventListener(MouseEvent.CLICK,stoneMCHandler);
               _map.conLevel["stoneMC"]["stone2"].buttonMode = true;
               _map.conLevel["stoneMC"]["stone2"].gotoAndStop(2);
               _map.conLevel["stoneMC"]["stone2"].addEventListener(MouseEvent.CLICK,stoneMCHandler);
               _map.conLevel["stoneMC"]["stone3"].buttonMode = true;
               _map.conLevel["stoneMC"]["stone3"].gotoAndStop(2);
               _map.conLevel["stoneMC"]["stone3"].addEventListener(MouseEvent.CLICK,stoneMCHandler);
            }]);
         }
         else if(taskStep == 3 && Point.distance(MainManager.actorModel.pos,new Point(430,107)) < 100)
         {
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,walkHandler);
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_669_2"),function():void
            {
               _map.conLevel["petMC"].visible = true;
               NpcDialog.show(NPC.DIXUE_ZHIZHU,["谁，竟敢闯到这里来！ 打扰布莱克殿下将会受到最严厉的惩罚！"],["额…你是什么东西！"],[function():void
               {
                  NpcDialog.show(NPC.DIXUE_ZHIZHU,["哈哈哈！我可是布莱克殿下的第一号猛将！也是这里的守护者！小子，今天你别想通过这里！我已经好久没有尝到新鲜的食物了！啊哈哈哈！"],["好恶心的怪物啊！"],[function():void
                  {
                     AnimateManager.playMcAnimate(_map.conLevel["petMC"],1,"mc1",function():void
                     {
                        NpcDialog.show(NPC.DIXUE_ZHIZHU,["你这个破铁皮，少在这唧唧歪歪的，尝尝我的厉害！"],["哼，小喽啰接招吧！（点击地穴生物开始对战）"],[function():void
                        {
                           _map.conLevel["petMC"].buttonMode = true;
                           _map.conLevel["petMC"].addEventListener(MouseEvent.CLICK,petClickHandler);
                        }]);
                     });
                  }]);
               }]);
            });
         }
         else if(taskStep == 4 && Point.distance(MainManager.actorModel.pos,new Point(860,200)) < 100)
         {
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,walkHandler);
            NpcDialog.show(NPC.SEER,["这里被一股能量给封印了，看来前面一定隐藏着重要的秘密。"],["（尝试去除能量封印）"],[function():void
            {
               _map.conLevel["doorMC"].mouseEnabled = _map.conLevel["doorMC"].mouseChildren = true;
               initGame();
            }]);
         }
      }
      
      private static function petClickHandler(param1:MouseEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         FightManager.fightWithBoss("地穴蜘蛛",0);
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
            TasksManager.complete(TaskController_669.TASK_ID,3,function(param1:Boolean):void
            {
               var b:Boolean = param1;
               if(b)
               {
                  DebugTrace.show("第四步完成");
                  taskStep = 4;
                  NpcDialog.show(NPC.DIXUE_ZHIZHU,["小子，给我记住，布莱克殿下不会放过你的！哈哈哈！"],["哼哼，就你这点实力根本不是我的对手！"],[function():void
                  {
                     AnimateManager.playMcAnimate(_map.conLevel["petMC"],2,"mc2",function():void
                     {
                        taskStep = 4;
                        gotoStep5();
                     });
                  }]);
               }
            });
         }
         else
         {
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,walkHandler);
            NpcDialog.show(NPC.DIXUE_ZHIZHU,["臭小子，我还以为你有多大能耐呢！原来是块废铁！简直就不堪一击！啊啊啊！"],["可恶！我一定要打倒你！"],[function():void
            {
               _map.conLevel["petMC"].buttonMode = true;
               _map.conLevel["petMC"].removeEventListener(MouseEvent.CLICK,petClickHandler);
               _map.conLevel["petMC"].addEventListener(MouseEvent.CLICK,petClickHandler);
            }]);
         }
      }
      
      private static function initStoneShape() : void
      {
         if(stoneShape == null)
         {
            stoneShape = new Shape();
            stoneShape.graphics.beginFill(16776960);
            stoneShape.graphics.drawRect(0,0,60,40);
            stoneShape.graphics.endFill();
            _map.typeLevel.addChild(stoneShape);
            stoneShape.x = 90;
            stoneShape.y = 228;
            MapManager.currentMap.makeMapArray();
         }
      }
      
      private static function stoneMCHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         var stone:MovieClip = evt.currentTarget as MovieClip;
         stone.gotoAndStop(3);
         stone.mouseChildren = stone.mouseEnabled = false;
         stone.removeEventListener(MouseEvent.CLICK,stoneMCHandler);
         if(_map.conLevel["stoneMC"]["stone1"].currentFrame == 3 && _map.conLevel["stoneMC"]["stone2"].currentFrame == 3 && _map.conLevel["stoneMC"]["stone1"].currentFrame == 3 && Boolean(stoneShape))
         {
            NpcDialog.show(NPC.SEER,["哈哈，地面总算是有点样了，将就着走过去吧！"],null,null,false,function():void
            {
               TasksManager.complete(TaskController_669.TASK_ID,2,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     DebugTrace.show("第三步完成");
                     taskStep = 3;
                     gotoStep4();
                  }
               });
            });
         }
      }
      
      private static function gotoStep4() : void
      {
         if(stoneShape)
         {
            DisplayUtil.removeForParent(stoneShape);
            stoneShape = null;
            MapManager.currentMap.makeMapArray();
         }
         _map.conLevel["stoneMC"]["stone1"].gotoAndStop(3);
         _map.conLevel["stoneMC"]["stone2"].gotoAndStop(3);
         _map.conLevel["stoneMC"]["stone3"].gotoAndStop(3);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,walkHandler);
         initMonsterShape();
         initDoorShape();
      }
      
      private static function initMonsterShape() : void
      {
         if(monsterShape == null)
         {
            monsterShape = new Shape();
            monsterShape.graphics.beginFill(16776960);
            monsterShape.graphics.drawRect(0,0,15,75);
            monsterShape.graphics.endFill();
            _map.typeLevel.addChild(monsterShape);
            monsterShape.x = 500;
            monsterShape.y = 78;
            MapManager.currentMap.makeMapArray();
         }
      }
      
      private static function gotoStep5() : void
      {
         if(monsterShape)
         {
            DisplayUtil.removeForParent(monsterShape);
            monsterShape = null;
            MapManager.currentMap.makeMapArray();
         }
         _map.conLevel["stoneMC"]["stone1"].gotoAndStop(3);
         _map.conLevel["stoneMC"]["stone2"].gotoAndStop(3);
         _map.conLevel["stoneMC"]["stone3"].gotoAndStop(3);
         _map.conLevel["petMC"].visible = false;
         _map.conLevel["doorMC"].buttonMode = true;
         _map.conLevel["doorMC"].addEventListener(MouseEvent.CLICK,doorMCHandler);
         _map.conLevel["doorMC"].mouseEnabled = _map.conLevel["doorMC"].mouseChildren = false;
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,walkHandler);
         initDoorShape();
      }
      
      private static function initDoorShape() : void
      {
         if(doorShape == null)
         {
            doorShape = new Shape();
            doorShape.graphics.beginFill(16776960);
            doorShape.graphics.drawRect(0,0,150,40);
            doorShape.graphics.endFill();
            _map.typeLevel.addChild(doorShape);
            doorShape.x = 790;
            doorShape.y = 210;
            MapManager.currentMap.makeMapArray();
         }
      }
      
      private static function doorMCHandler(param1:MouseEvent) : void
      {
         initGame();
      }
      
      private static function initGame() : void
      {
         if(gamePanel == null)
         {
            gamePanel = _map.topLevel["gamePanel"];
            gamePanel["mainMC"].gotoAndStop(1);
            gamePanel["closeBTN"].addEventListener(MouseEvent.CLICK,closeGame);
            gameArr = [gamePanel["upBTN"],gamePanel["downBTN"],gamePanel["leftBTN"],gamePanel["rightBTN"]];
            gameTimer = new Timer(800);
            gameTimer.addEventListener(TimerEvent.TIMER,timerHandler);
            _map.topLevel.stage.addEventListener(KeyboardEvent.KEY_DOWN,keyHandler);
            gameTimer.start();
            gamePanel.visible = true;
            gamePanel.data = {"ok":false};
            gamePanel.stage.focus = gamePanel;
         }
      }
      
      private static function timerHandler(param1:TimerEvent) : void
      {
         var _loc4_:int = 0;
         var _loc2_:uint = uint(Math.random() * gameArr.length);
         var _loc3_:uint = 0;
         while(_loc3_ < gameArr.length)
         {
            if(_loc3_ == _loc2_)
            {
               gameArr[_loc3_].gotoAndStop(2);
            }
            else
            {
               gameArr[_loc3_].gotoAndStop(1);
            }
            _loc3_++;
         }
         if(gamePanel.data.ok == false)
         {
            if((_loc4_ = gamePanel["mainMC"].currentFrame - 5) < 1)
            {
               _loc4_ = 1;
            }
            gamePanel["mainMC"].gotoAndStop(_loc4_);
         }
         gamePanel.data.ok = false;
      }
      
      private static function keyHandler(param1:KeyboardEvent) : void
      {
         var success:Boolean;
         var frame:int = 0;
         var evt:KeyboardEvent = param1;
         if(gamePanel == null && gamePanel.data.ok == true)
         {
            return;
         }
         success = false;
         if(evt.keyCode == Keyboard.UP && gamePanel["upBTN"].currentFrame == 2)
         {
            gamePanel["upBTN"].gotoAndStop(1);
            success = true;
         }
         else if(evt.keyCode == Keyboard.DOWN && gamePanel["downBTN"].currentFrame == 2)
         {
            gamePanel["downBTN"].gotoAndStop(1);
            success = true;
         }
         else if(evt.keyCode == Keyboard.LEFT && gamePanel["leftBTN"].currentFrame == 2)
         {
            gamePanel["leftBTN"].gotoAndStop(1);
            success = true;
         }
         else if(evt.keyCode == Keyboard.RIGHT && gamePanel["rightBTN"].currentFrame == 2)
         {
            gamePanel["rightBTN"].gotoAndStop(1);
            success = true;
         }
         if(success)
         {
            frame = gamePanel["mainMC"].currentFrame + 5;
         }
         else
         {
            frame = gamePanel["mainMC"].currentFrame - 5;
         }
         if(frame < 1)
         {
            frame = 1;
         }
         if(frame > 100)
         {
            frame = 100;
         }
         gamePanel["mainMC"].gotoAndStop(frame);
         gamePanel.data.ok = true;
         if(frame == 100)
         {
            DebugTrace.show("成功！");
            closeGame();
            _map.conLevel["doorMC"].removeEventListener(MouseEvent.CLICK,doorMCHandler);
            AnimateManager.playMcAnimate(_map.conLevel["doorMC"],2,"mc2",function():void
            {
               TasksManager.complete(TaskController_669.TASK_ID,4,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     DebugTrace.show("第五步完成");
                     taskStep = 5;
                     gotoStep6();
                  }
               });
            });
         }
      }
      
      private static function closeGame(param1:MouseEvent = null) : void
      {
         if(gamePanel)
         {
            gamePanel.visible = false;
            gamePanel["closeBTN"].removeEventListener(MouseEvent.CLICK,closeGame);
            gameTimer.removeEventListener(TimerEvent.TIMER,timerHandler);
            _map.topLevel.stage.removeEventListener(KeyboardEvent.KEY_DOWN,keyHandler);
            gameTimer.stop();
            gameArr.length = 0;
            gameArr = null;
            gameTimer = null;
            gamePanel = null;
         }
      }
      
      private static function gotoStep6() : void
      {
         if(doorShape)
         {
            DisplayUtil.removeForParent(doorShape);
            doorShape = null;
            MapManager.currentMap.makeMapArray();
         }
         _map.conLevel["stoneMC"]["stone1"].gotoAndStop(3);
         _map.conLevel["stoneMC"]["stone2"].gotoAndStop(3);
         _map.conLevel["stoneMC"]["stone3"].gotoAndStop(3);
         _map.conLevel["doorMC"].visible = false;
         AnimateManager.playMcAnimate(_map.conLevel["blackMC"],2,"mc2",function():void
         {
            NpcDialog.show(NPC.SEER,["看这个邪恶祭祀的情形，布莱克肯定是正在吸取星际碎片的暗黑能量！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SEER,["绝不能让它得逞，我要立刻阻止。"],["（持续点击布莱克）"],[function():void
               {
                  AnimateManager.playMcAnimate(_map.conLevel["blackMC"],3,"mc3",function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_669_3"),function():void
                     {
                        NpcDialog.show(NPC.SEER,["哎呦！好疼啊，我全身都快散架了！这究竟是什么力量！好强大啊！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.BULAIKE,["这才刚刚开始！小子，知难而退吧！格雷斯星球不是你该来的地方……"],null,null,false,function():void
                           {
                              AnimateManager.playMcAnimate(_map.conLevel["blackMC"],4,"mc4",function():void
                              {
                                 NpcDialog.show(NPC.SEER,["布莱克这个混蛋！它现在拥有的力量太可怕了！我得先回赛尔号修复一下身体，然后再找船长商量对策。"],["（返回赛尔号）"],[function():void
                                 {
                                    AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_669_4"),function():void
                                    {
                                       TasksManager.complete(TaskController_669.TASK_ID,5,function(param1:Boolean):void
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
                                 }]);
                              });
                           });
                        });
                     });
                  });
               }]);
            });
         });
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 452)
         {
            _map.conLevel["lineMC"]["task669Hit"].removeEventListener(MouseEvent.CLICK,task669HitHandler);
         }
         else if(MapManager.currentMap.id == 453)
         {
            OgreController.isShow = true;
            ToolBarController.showOrHideAllUser(true);
            _map.conLevel["firstMC"].removeEventListener(MouseEvent.CLICK,firstMCHandler);
            _map.conLevel["doorMC"].removeEventListener(MouseEvent.CLICK,doorMCHandler);
            _map.conLevel["stoneMC"]["stone1"].removeEventListener(MouseEvent.CLICK,stoneMCHandler);
            _map.conLevel["stoneMC"]["stone2"].removeEventListener(MouseEvent.CLICK,stoneMCHandler);
            _map.conLevel["stoneMC"]["stone3"].removeEventListener(MouseEvent.CLICK,stoneMCHandler);
            _map.conLevel["petMC"].removeEventListener(MouseEvent.CLICK,petClickHandler);
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,walkHandler);
            closeGame();
            if(stoneShape)
            {
               DisplayUtil.removeForParent(stoneShape);
               stoneShape = null;
            }
            if(monsterShape)
            {
               DisplayUtil.removeForParent(monsterShape);
               monsterShape = null;
            }
            if(doorShape)
            {
               DisplayUtil.removeForParent(doorShape);
               doorShape = null;
            }
         }
         _map = null;
      }
   }
}
