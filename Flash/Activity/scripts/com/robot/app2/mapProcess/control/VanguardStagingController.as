package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.HitTestDuplicate;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.KeyboardEvent;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.ui.Keyboard;
   import flash.utils.Timer;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class VanguardStagingController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskMc:MovieClip;
      
      private static var buyMc:MovieClip;
      
      private static var _left:Boolean;
      
      private static var waitUI:MovieClip;
      
      private static var _timer:Timer;
      
      private static var _hitTimer:Timer;
      
      private static var _curIndex:uint;
      
      private static var removePaotaTime:uint;
      
      private static var removePaotaCount:uint;
      
      private static var isChange:Boolean;
      
      private static var _changeTimer:Timer;
      
      private static var _changeCDtime:uint;
      
      private static var _secretTimer:Timer;
      
      private static var _secretCount:uint;
      
      private static var taskArr:Array = [];
      
      private static var _mapAnimate:String = "vanguardstagingMapAnimate";
      
      private static var maps:Array = [10834,10835,10836,10838];
       
      
      public function VanguardStagingController()
      {
         super();
      }
      
      private static function updateData(param1:Function = null) : void
      {
         var fun:Function = param1;
         KTool.getMultiValue([6171],function(param1:Array):void
         {
            taskArr = param1;
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      public static function onNextGate() : void
      {
         updateData(function():void
         {
            if(BitUtils.getBit(taskArr[0],4) > 0)
            {
               Alarm2.show("本活动已经成功完成了！");
            }
            else if(BitUtils.getBit(taskArr[0],3) > 0)
            {
               MapManager.changeMap(maps[3]);
            }
            else if(BitUtils.getBit(taskArr[0],1) > 0 && BitUtils.getBit(taskArr[0],2) > 0)
            {
               MapManager.changeMap(maps[2]);
            }
            else if(BitUtils.getBit(taskArr[0],0) > 0)
            {
               MapManager.changeMap(maps[1]);
            }
            else
            {
               MapManager.changeMap(maps[0]);
            }
         });
      }
      
      public static function initForMap10842(param1:BaseMapProcess) : void
      {
         StatManager.sendStat2014("赛尔先锋队集结待命","进入初始场景","2015运营活动");
         _map = param1;
         if(BitBuffSetClass.getState(22672) == 0)
         {
            loadAnimate(playPreAnimate);
         }
      }
      
      private static function playPreAnimate() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         _map.btnLevel.addChild(taskMc);
         MapObjectControl.hideOrShowAllObjects(false);
         LevelManager.iconLevel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["糟了！博士不会被海盗抓走了吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.ERLIYA,["应该不会，不然我们肯定也一起被抓了"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["恩，有道理！估计我们只是跟博士走失了！"]]],[TaskStoryPlayer.DIALOG,[NPC.ERLIYA,["那我们现在该怎么办？"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["还能怎么办，当然是先赶紧找到博士啦！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            DisplayUtil.removeForParent(taskMc);
            storyPlayer.destory();
            LevelManager.iconLevel.visible = true;
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BitBuffSetClass.setState(22672,1);
            loadWaitUI();
         };
         storyPlayer.start();
      }
      
      public static function initForMap10834(param1:BaseMapProcess) : void
      {
         var i:int;
         var map:BaseMapProcess = param1;
         _map = map;
         StatManager.sendStat2014("赛尔先锋队集结待命","进入第1关场景","2015运营活动");
         LevelManager.iconLevel.visible = false;
         initBuyPanel(1);
         removePaotaCount = 0;
         i = 0;
         while(i < 6)
         {
            _map.conLevel["paoTa_" + i]["timeMc"].visible = false;
            i++;
         }
         _map.conLevel["goMc"].visible = false;
         _map.conLevel["door_0"].visible = false;
         _map.conLevel["xunluoMc"].visible = false;
         _map.conLevel["xunluoMc"].mouseEnabled = _map.conLevel["xunluoMc"].mouseChildren = false;
         if(BitBuffSetClass.getState(22673) == 0)
         {
            loadAnimate(playFirstAnimate);
         }
         else
         {
            loadWaitUI(2,function():void
            {
               _map.conLevel["xunluoMc"].visible = true;
               _left = true;
               addFirstGateEvents();
            });
         }
      }
      
      private static function playFirstAnimate() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         _map.btnLevel.addChild(taskMc);
         MapObjectControl.hideOrShowAllObjects(false);
         KTool.hideMapAllPlayerAndMonster();
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["这个好办，躲开巡逻的海盗，把它们全关了不就行了！"]]],[TaskStoryPlayer.DIALOG,[NPC.ERLIYA,["恩！如果实在躲不过去，别忘了用变身药水暂时躲避哦！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["好，看我的！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            DisplayUtil.removeForParent(taskMc);
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BitBuffSetClass.setState(22673,1);
            loadWaitUI(2,function():void
            {
               _map.conLevel["xunluoMc"].visible = true;
               _left = true;
               addFirstGateEvents();
            });
         };
         storyPlayer.start();
      }
      
      private static function addFirstGateEvents() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < 6)
         {
            _map.conLevel["paoTa_" + _loc1_].buttonMode = true;
            _loc1_++;
         }
         LevelManager.stage.stageFocusRect = false;
         LevelManager.stage.focus = LevelManager.stage;
         LevelManager.stage.addEventListener(KeyboardEvent.KEY_UP,onKeyUp);
         LevelManager.stage.addEventListener(Event.ENTER_FRAME,onEnterFrame);
      }
      
      private static function removeFirstGateEvents() : void
      {
         LevelManager.stage.removeEventListener(KeyboardEvent.KEY_UP,onKeyUp);
         LevelManager.stage.removeEventListener(Event.ENTER_FRAME,onEnterFrame);
      }
      
      public static function onHit(param1:uint) : void
      {
         _curIndex = param1;
         _map.conLevel["paoTa_" + _curIndex]["timeMc"].visible = true;
         removePaotaTime = 5;
         _map.conLevel["paoTa_" + _curIndex]["timeMc"]["timeTxt"].text = "" + removePaotaTime;
         _map.conLevel["paoTa_" + _curIndex]["timeMc"]["processMc"].gotoAndStop(1);
         _timer = new Timer(1000,5);
         _timer.addEventListener(TimerEvent.TIMER,onTimer);
         _timer.addEventListener(TimerEvent.TIMER_COMPLETE,onTimeOver);
         _timer.start();
         MapManager.addEventListener(MapEvent.MAP_DESTROY,onMap);
         MainManager.actorModel.sprite.addEventListener(RobotEvent.WALK_START,onWalk);
      }
      
      private static function onTimer(param1:TimerEvent) : void
      {
         --removePaotaTime;
         _map.conLevel["paoTa_" + _curIndex]["timeMc"]["timeTxt"].text = "" + removePaotaTime;
         _map.conLevel["paoTa_" + _curIndex]["timeMc"]["processMc"].gotoAndStop(24 * (5 - removePaotaTime));
      }
      
      private static function onTimeOver(param1:TimerEvent) : void
      {
         var evt:TimerEvent = param1;
         _map.conLevel["paoTa_" + _curIndex].visible = false;
         _map.conLevel["door_" + (_curIndex + 1)].visible = false;
         _map.conLevel["comp_" + (_curIndex + 1)].visible = false;
         destoryForMap10834();
         ++removePaotaCount;
         if(removePaotaCount == 6)
         {
            SocketConnection.sendWithCallback(42133,function(param1:SocketEvent):void
            {
               var e:SocketEvent = param1;
               Alarm2.show("你关闭了全部探测器，快继续前进寻找博士吧！",function():void
               {
                  MapManager.changeMap(maps[1]);
               });
            });
         }
      }
      
      private static function onWalk(param1:RobotEvent) : void
      {
         _map.conLevel["paoTa_" + _curIndex]["timeMc"].visible = false;
         destoryForMap10834();
      }
      
      private static function onMap(param1:MapEvent) : void
      {
         destoryForMap10834();
      }
      
      private static function onKeyUp(param1:KeyboardEvent) : void
      {
         switch(param1.keyCode)
         {
            case Keyboard.SPACE:
               if(_changeTimer == null)
               {
                  isChange = true;
                  MainManager.actorModel.changeBody(10006);
                  _changeCDtime = 8;
                  _changeTimer = new Timer(1000,8);
                  _changeTimer.addEventListener(TimerEvent.TIMER,onChangeTimer);
                  _changeTimer.addEventListener(TimerEvent.TIMER_COMPLETE,onChangeTimeOver);
                  _changeTimer.start();
               }
         }
      }
      
      private static function destoryChangeTimer() : void
      {
         if(_changeTimer)
         {
            _changeTimer.stop();
            _changeTimer.removeEventListener(TimerEvent.TIMER,onChangeTimer);
            _changeTimer.removeEventListener(TimerEvent.TIMER_COMPLETE,onHitTimeOver);
            _changeTimer = null;
         }
      }
      
      private static function onChangeTimer(param1:TimerEvent) : void
      {
         --_changeCDtime;
         if(_changeCDtime == 5)
         {
            isChange = false;
            MainManager.actorModel.reduction();
            buyMc.gotoAndStop(4);
            buyMc["timeTxt"].text = "下次变身剩余时间：" + _changeCDtime;
         }
         else if(_changeCDtime < 5)
         {
            buyMc.gotoAndStop(4);
            buyMc["timeTxt"].text = "下次变身剩余时间：" + _changeCDtime;
         }
      }
      
      private static function onChangeTimeOver(param1:TimerEvent) : void
      {
         buyMc.gotoAndStop(1);
         destoryChangeTimer();
      }
      
      private static function onEnterFrame(param1:Event) : void
      {
         if(_left)
         {
            _map.conLevel["xunluoMc"].x -= 2;
         }
         else
         {
            _map.conLevel["xunluoMc"].x += 2;
         }
         if(_map.conLevel["xunluoMc"].x < 125)
         {
            _left = false;
         }
         else if(_map.conLevel["xunluoMc"].x > 480)
         {
            _left = true;
         }
         checkHit();
      }
      
      private static function checkHit() : void
      {
         if(Boolean(HitTestDuplicate.complexHitTestObject(_map.conLevel["xunluoMc"],MainManager.actorModel.sprite)) && !isChange)
         {
            if(_hitTimer == null)
            {
               _hitTimer = new Timer(1000,2);
               _hitTimer.addEventListener(TimerEvent.TIMER_COMPLETE,onHitTimeOver);
               _hitTimer.start();
            }
         }
         else
         {
            destoryHitTime();
         }
      }
      
      private static function destoryHitTime() : void
      {
         if(_hitTimer)
         {
            _hitTimer.stop();
            _hitTimer.removeEventListener(TimerEvent.TIMER_COMPLETE,onHitTimeOver);
            _hitTimer = null;
         }
      }
      
      private static function onHitTimeOver(param1:TimerEvent) : void
      {
         var evt:TimerEvent = param1;
         destoryHitTime();
         destoryForMap10834();
         removeFirstGateEvents();
         updateData(function():void
         {
            if(BitUtils.getBit(taskArr[0],0) == 0)
            {
               Alarm2.show("你被巡逻的海盗捉住啦！再来试试吧！",function():void
               {
                  MapManager.changeMap(10842);
               });
            }
         });
      }
      
      private static function destoryForMap10834() : void
      {
         if(_timer)
         {
            _timer.stop();
            _timer.removeEventListener(TimerEvent.TIMER,onTimer);
            _timer.removeEventListener(TimerEvent.TIMER_COMPLETE,onTimeOver);
            _timer = null;
         }
         MapManager.removeEventListener(MapEvent.MAP_DESTROY,onMap);
         MainManager.actorModel.stop();
         MainManager.actorModel.sprite.removeEventListener(RobotEvent.WALK_START,onWalk);
      }
      
      public static function destory10834ForLeave() : void
      {
         LevelManager.iconLevel.visible = true;
         MainManager.actorModel.reduction();
         destroyBuyPanel();
         destoryForMap10834();
         removeFirstGateEvents();
         destoryHitTime();
         destoryChangeTimer();
         _map = null;
      }
      
      public static function initForMap10835(param1:BaseMapProcess) : void
      {
         _map = param1;
         initBuyPanel(2);
         LevelManager.iconLevel.visible = false;
         StatManager.sendStat2014("赛尔先锋队集结待命","进入第2关场景","2015运营活动");
         _map.conLevel["goMc"].visible = false;
         _map.conLevel["door_0"].visible = false;
         _map.conLevel["bossMc_0"].buttonMode = true;
         _map.conLevel["bossMc_1"].buttonMode = true;
         _map.conLevel["bossMc_0"].addEventListener(MouseEvent.CLICK,onFight);
         _map.conLevel["bossMc_1"].addEventListener(MouseEvent.CLICK,onFight);
         checkSecondTask();
         if(BitBuffSetClass.getState(22674) == 0)
         {
            loadAnimate(playSecondAnimate);
         }
      }
      
      private static function playSecondAnimate() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         _map.btnLevel.addChild(taskMc);
         MapObjectControl.hideOrShowAllObjects(false);
         KTool.hideMapAllPlayerAndMonster();
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            DisplayUtil.removeForParent(taskMc);
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BitBuffSetClass.setState(22674,1);
         };
         storyPlayer.start();
      }
      
      private static function onFight(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         LevelManager.iconLevel.visible = false;
         _curIndex = uint(e.currentTarget.name.split("_")[1]);
         if(_curIndex == 0)
         {
            NpcDialog.show(NPC.PIRATE,["此山是我栽，此树是我开，要想从此过……"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SEER,["等等……“此山是我栽，此树是我开”，你是不是说反了？"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.PIRATE,["那个……你管我！总之受死吧！"],["谁怕你！"],[function():void
                  {
                     KTool.showMapAllPlayerAndMonster();
                     MapObjectControl.hideOrShowAllObjects(true);
                     LevelManager.iconLevel.visible = true;
                     startFight(_curIndex);
                  }]);
               });
            });
         }
         else
         {
            NpcDialog.show(NPC.PIRATE,["加入我的队伍，和我一起征服星辰大海吧！我可是要成为海盗王的男人！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SEER,["这个海盗好像漫画看多了。我可没兴趣成为海盗"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.PIRATE,["那你就受死吧！"],["谁怕你！"],[function():void
                  {
                     KTool.showMapAllPlayerAndMonster();
                     MapObjectControl.hideOrShowAllObjects(true);
                     LevelManager.iconLevel.visible = true;
                     startFight(_curIndex);
                  }]);
               });
            });
         }
      }
      
      private static function startFight(param1:uint) : void
      {
         var index:uint = param1;
         FightManager.fightNoMapBoss("海盗",3290 + index);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
         {
            var info:FightOverInfo;
            var e:PetFightEvent = param1;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            info = e.dataObj as FightOverInfo;
            if(info.winnerID == MainManager.actorID)
            {
               if(index == 0)
               {
                  NpcDialog.show(NPC.PIRATE,["好汉饶命，好汉饶命啊！"],null,null,false,function():void
                  {
                     checkSecondTask();
                  });
               }
               else
               {
                  NpcDialog.show(NPC.PIRATE,["我……我可是要成为海盗王的男人……我怎么能死在这里…………"],null,null,false,function():void
                  {
                     checkSecondTask();
                  });
               }
            }
         });
      }
      
      private static function checkSecondTask() : void
      {
         updateData(function():void
         {
            var _loc1_:int = 0;
            while(_loc1_ < 2)
            {
               _map.conLevel["bossMc_" + _loc1_].visible = BitUtils.getBit(taskArr[0],1 + _loc1_) > 0 ? false : true;
               _loc1_++;
            }
            if(BitUtils.getBit(taskArr[0],1) > 0 && BitUtils.getBit(taskArr[0],2) > 0)
            {
               destroyBuyPanel();
               _map.conLevel["goMc"].visible = true;
               _map.conLevel["door_0"].visible = true;
            }
         });
      }
      
      public static function destory10835ForLeave() : void
      {
         _map.conLevel["bossMc_0"].removeEventListener(MouseEvent.CLICK,onFight);
         _map.conLevel["bossMc_1"].removeEventListener(MouseEvent.CLICK,onFight);
         destroyBuyPanel();
         LevelManager.iconLevel.visible = true;
         _map = null;
      }
      
      public static function initForMap10836(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         LevelManager.iconLevel.visible = false;
         if(BitBuffSetClass.getState(22675) == 0)
         {
            loadAnimate(playThreeAnimate);
         }
         else if(_secretTimer == null)
         {
            StatManager.sendStat2014("赛尔先锋队集结待命","进入第3关场景","2015运营活动");
            loadWaitUI(3,function():void
            {
               startThreeTask();
               MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onLeave);
               initBuyPanel(3);
               MapNamePanel.hide();
            });
         }
         else
         {
            MapManager.currentMap.topLevel.addChild(buyMc);
            MapNamePanel.hide();
         }
      }
      
      private static function playThreeAnimate() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         _map.btnLevel.addChild(taskMc);
         MapObjectControl.hideOrShowAllObjects(false);
         KTool.hideMapAllPlayerAndMonster();
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            DisplayUtil.removeForParent(taskMc);
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BitBuffSetClass.setState(22675,1);
            loadWaitUI(3,startThreeTask);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onLeave);
            initBuyPanel(3);
            MapNamePanel.hide();
         };
         storyPlayer.start();
      }
      
      private static function startThreeTask() : void
      {
         _secretCount = 30;
         MapManager.currentMap.controlLevel["timeTxt"].text = "" + _secretCount;
         _secretTimer = new Timer(1000,30);
         _secretTimer.addEventListener(TimerEvent.TIMER,onSecretTimer);
         _secretTimer.addEventListener(TimerEvent.TIMER_COMPLETE,onSecretTimeOver);
         _secretTimer.start();
      }
      
      private static function onSecretTimer(param1:TimerEvent) : void
      {
         --_secretCount;
         MapManager.currentMap.controlLevel["timeTxt"].text = "" + _secretCount;
      }
      
      private static function onSecretTimeOver(param1:TimerEvent) : void
      {
         removeSecretTimer();
         loadAnimate(playThreeEndAnimate);
      }
      
      private static function playThreeEndAnimate() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         MapManager.currentMap.btnLevel.addChild(taskMc);
         MapObjectControl.hideOrShowAllObjects(false);
         KTool.hideMapAllPlayerAndMonster();
         story = [];
         if(MapManager.currentMap.id == 10836)
         {
            story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,6,"mc6"]]];
         }
         else
         {
            story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,7,"mc7"]]];
         }
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            DisplayUtil.removeForParent(taskMc);
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            MapNamePanel.show();
            Alarm2.show("你被闻讯而来的海盗捉住了，再来试试吧！",function():void
            {
               MapManager.changeMap(10842);
            });
         };
         storyPlayer.start();
      }
      
      private static function removeSecretTimer() : void
      {
         if(_secretTimer)
         {
            _secretTimer.stop();
            _secretTimer.removeEventListener(TimerEvent.TIMER,onSecretTimer);
            _secretTimer.removeEventListener(TimerEvent.TIMER_COMPLETE,onSecretTimeOver);
            _secretTimer = null;
         }
      }
      
      public static function changeRandMap() : void
      {
         var rand:Number = NaN;
         if(_secretCount > 10)
         {
            rand = Math.random();
            if(rand > 0.5)
            {
               MapManager.changeMap(10837);
            }
            else
            {
               MainManager.actorModel.sprite.x = 80;
               MainManager.actorModel.sprite.y = 450;
            }
         }
         else
         {
            removeSecretTimer();
            SocketConnection.sendWithCallback(42133,function(param1:SocketEvent):void
            {
               MapManager.changeMap(10838);
            });
         }
      }
      
      private static function onLeave(param1:*) : void
      {
         if(MapManager.currentMap.id != 10836 && MapManager.currentMap.id != 10837)
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onLeave);
            removeSecretTimer();
            MapNamePanel.show();
            destroyBuyPanel();
            LevelManager.iconLevel.visible = true;
         }
         else if(MapManager.currentMap.id == 10837)
         {
            buyMc.gotoAndStop(3);
            MapManager.currentMap.topLevel.addChild(buyMc);
            MapNamePanel.hide();
         }
      }
      
      public static function initForMap10838(param1:BaseMapProcess) : void
      {
         _map = param1;
         StatManager.sendStat2014("赛尔先锋队集结待命","进入第4关场景","2015运营活动");
         _map.conLevel["doctor"].buttonMode = true;
         _map.conLevel["xiaoxi"].buttonMode = true;
         _map.conLevel["doctor"].addEventListener(MouseEvent.CLICK,onGuess);
         _map.conLevel["xiaoxi"].addEventListener(MouseEvent.CLICK,onGuess);
         if(BitBuffSetClass.getState(22676) == 0)
         {
            loadAnimate(playFourAnimate);
         }
      }
      
      private static function playFourAnimate() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         _map.btnLevel.addChild(taskMc);
         MapObjectControl.hideOrShowAllObjects(false);
         LevelManager.iconLevel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,8,"mc8"]],[TaskStoryPlayer.DIALOG,[NPC.DOCTOR,["恩……有点麻烦"]]],[TaskStoryPlayer.DIALOG,[NPC.DOCTOR,["这个系统被上了锁，需要破解出密码才能发送信号"]]],[TaskStoryPlayer.DIALOG,[NPC.DOCTOR,["你帮我看看，密码究竟是什么吧"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["好，我来试试！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            DisplayUtil.removeForParent(taskMc);
            storyPlayer.destory();
            LevelManager.iconLevel.visible = true;
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BitBuffSetClass.setState(22676,1);
         };
         storyPlayer.start();
      }
      
      private static function onGuess(param1:MouseEvent) : void
      {
         switch(param1.currentTarget.name)
         {
            case "doctor":
               NpcDialog.show(NPC.DOCTOR,["快，赶快破解海盗设下的密码，向赛尔号发送求救信号！"],null,null,false,null);
               break;
            case "xiaoxi":
               ModuleManager.showModule(ClientConfig.getAppModule("VanguardStagingAnswerPanel"));
         }
      }
      
      private static function initBuyPanel(param1:uint = 1, param2:Function = null) : void
      {
         var frame:uint = param1;
         var fun:Function = param2;
         ResourceManager.getResource(ClientConfig.getActiveUrl("vanguardbuyPanel"),function(param1:MovieClip):void
         {
            buyMc = param1;
            buyMc.x = 678;
            buyMc.y = 110;
            buyMc.gotoAndStop(frame);
            buyMc.addEventListener(MouseEvent.CLICK,onBuyPanel);
            MapManager.currentMap.btnLevel.addChild(buyMc);
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      private static function onBuyPanel(param1:MouseEvent) : void
      {
         var curFrame:uint = 0;
         var e:MouseEvent = param1;
         switch(e.target)
         {
            case buyMc["close"]:
               destroyBuyPanel();
               break;
            case buyMc["buyBtn"]:
               curFrame = uint(buyMc.currentFrame - 1);
               if(curFrame == 3)
               {
                  curFrame = 0;
               }
               buyItem(242715 + curFrame,4992 + curFrame,function():void
               {
                  onNextGate();
               });
         }
      }
      
      private static function buyItem(param1:int, param2:int, param3:Function = null) : void
      {
         var productID:int = param1;
         var exchangeID:int = param2;
         var fun:Function = param3;
         KTool.buyProductByCallback(productID,1,function():void
         {
            KTool.doExchange(exchangeID,function():void
            {
               if(fun != null)
               {
                  fun();
               }
            });
         });
      }
      
      private static function destroyBuyPanel() : void
      {
         if(buyMc)
         {
            DisplayUtil.removeForParent(buyMc);
            buyMc.removeEventListener(MouseEvent.CLICK,onBuyPanel);
            buyMc = null;
         }
      }
      
      private static function loadWaitUI(param1:uint = 1, param2:Function = null) : void
      {
         var frame:uint = param1;
         var fun:Function = param2;
         ResourceManager.getResource(ClientConfig.getActiveUrl("vanguardpanel"),function(param1:MovieClip):void
         {
            var t:uint = 0;
            var mc:MovieClip = param1;
            waitUI = mc;
            waitUI.mc.gotoAndStop(frame);
            LevelManager.topLevel.addChild(waitUI);
            t = setTimeout(function():void
            {
               clearTimeout(t);
               DisplayUtil.removeForParent(waitUI);
               waitUI = null;
               if(fun != null)
               {
                  fun();
               }
            },3000);
         });
      }
      
      private static function loadAnimate(param1:Function = null) : void
      {
         var fun:Function = param1;
         if(taskMc)
         {
            if(fun != null)
            {
               fun();
            }
         }
         else
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate(_mapAnimate),function(param1:MovieClip):void
            {
               taskMc = param1;
               if(fun != null)
               {
                  fun();
               }
            });
         }
      }
   }
}
