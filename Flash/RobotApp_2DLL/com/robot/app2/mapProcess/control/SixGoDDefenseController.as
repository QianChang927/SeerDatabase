package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
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
   import com.robot.core.utils.BitUtils;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.utils.Timer;
   import flash.utils.setTimeout;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class SixGoDDefenseController
   {
      
      private static var _taskMc:MovieClip;
      
      private static var _map:BaseMapProcess;
      
      private static var _fireCount:uint;
      
      private static var _fireCon:MovieClip;
      
      private static var _fireStatus:Array = [];
      
      private static var _hitIndex:int;
      
      private static var _curGateIndex:uint;
      
      private static const _mapAnimate:String = "SixGoDDefense_Animate";
      
      private static const _fullMovie:String = "SixGoDDefenseFullMoive";
      
      private static const _totalFire:uint = 10;
      
      private static const BITFULS:Array = [23029,23030,23031];
      
      private static var _curStep:int;
      
      private static var endPoint:Point;
      
      private static const randArr:Array = [30,60,95,100];
      
      private static var totalTime:int;
      
      private static var _hitTimer:Timer;
      
      private static var _timeToolmc:MovieClip;
      
      private static var dialogArr:Array = [{
         "dialogs":["此火焰内隐藏了一只奇特的精灵，击败他！","好！"],
         "fun":onSetpFire0
      },{
         "dialogs":["此火焰非同一般，不过正在逐渐熄灭中，请在它身边耐心等待10秒！（不可离开该火焰较远，否则无效！）","我知道了！"],
         "fun":onSetpFire1
      },{
         "dialogs":["此火焰威力极大，你被烧晕了…..","…头好痛！"],
         "fun":onSetpFire2
      },{
         "dialogs":["此火焰毫无威力，你一靠近，它就自己熄灭了……","…哎呦？居然自己熄灭了！"],
         "fun":onSetpFire3
      }];
      
      private static var bossCon:MovieClip;
       
      
      public function SixGoDDefenseController()
      {
         super();
      }
      
      public static function getGateInfo(param1:Function = null) : void
      {
         var fun:Function = param1;
         KTool.getMultiValue([3765],function(param1:Array):void
         {
            _curGateIndex = KTool.intTo4byte(param1[0])[1];
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      private static function loadTaskMc(param1:Function) : void
      {
         var fun:Function = param1;
         if(_taskMc == null)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate(_mapAnimate),function(param1:MovieClip):void
            {
               _taskMc = param1;
               _taskMc.addEventListener(MouseEvent.CLICK,onTask);
               if(fun != null)
               {
                  fun();
               }
            });
         }
         else if(fun != null)
         {
            fun();
         }
      }
      
      private static function onTask(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "bossMc":
               NpcDialog.show(NPC.SHIKONGJIEWANG,["你已经熄灭了" + _fireCount + "个火焰，剩余" + (15 - _fireCount) + "个火焰！加油！"],["我想使用时空之水（需购买）","好！"],[function():void
               {
                  NpcDialog.show(NPC.SHIKONGJIEWANG,["由于我的法力有限，1个时空之水只能随机熄灭1~3处火焰，你可以试一试。"],["确定购买（3钻石）","我再想想。"],[function():void
                  {
                     KTool.buyProductByCallback(246335,1,function():void
                     {
                        SocketConnection.sendWithCallback(45614,function():void
                        {
                           reFreshFire();
                        },1,0);
                     });
                  }]);
               }]);
               break;
            case "bossMc2":
               NpcDialog.show(NPC.HUNDUNJIEWANG,["仅凭这点巫术还没办法奈何我，但我并不想花力气在他身上，怎么？你还没有找到真身？我这里有混沌之眼，可以帮助你立刻锁定真身。"],["好！我要使用（需购买）","不了，我能找到。"],[function():void
               {
                  KTool.buyProductByCallback(246336,1,function():void
                  {
                     SocketConnection.sendWithCallback(45614,function():void
                     {
                        startStepTwoFight(1);
                     },2,0);
                  });
               }]);
               break;
            case "bossMc3":
               buyPassGateThree();
               break;
            case "bossMc4":
               ModuleManager.showAppModule("EntrustOfOldDragonFightPanel");
         }
      }
      
      private static function playAnimate(param1:uint, param2:Function = null) : void
      {
         var frame:uint = param1;
         var fun:Function = param2;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         LevelManager.iconLevel.visible = false;
         MapNamePanel.hide();
         AnimateManager.playMcAnimate(_taskMc,frame,"mc",function():void
         {
            KTool.showMapAllPlayerAndMonster();
            MapNamePanel.show();
            MapObjectControl.hideOrShowAllObjects(true);
            LevelManager.iconLevel.visible = true;
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      public static function initForMap11046(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         if(_curGateIndex == 1)
         {
            _map = map;
            loadTaskMc(function():void
            {
               _map.topLevel.addChild(_taskMc);
               if(BitBuffSetClass.getState(BITFULS[0]) == 0)
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie(_fullMovie),function():void
                  {
                     playAnimate(1,function():void
                     {
                        BitBuffSetClass.setState(BITFULS[0],1);
                        initViews11046();
                     });
                  });
               }
               else
               {
                  initViews11046();
               }
            });
         }
      }
      
      private static function initViews11046() : void
      {
         _taskMc.gotoAndStop(1);
         _taskMc.mc.gotoAndStop(_taskMc.mc.totalFrames);
         _taskMc.mc.fireMc.gotoAndStop(_taskMc.mc.fireMc.totalFrames);
         _fireCon = _taskMc.mc.fireMc as MovieClip;
         reFreshFire(true);
         var _loc1_:int = 0;
         while(_loc1_ < 15)
         {
            _fireCon["mc_" + _loc1_].gotoAndStop(1);
            _fireCon["mc_" + _loc1_].buttonMode = true;
            _fireCon["mc_" + _loc1_].addEventListener(MouseEvent.CLICK,onFire);
            _loc1_++;
         }
      }
      
      private static function reFreshFire(param1:Boolean = false, param2:Function = null) : void
      {
         var isInit:Boolean = param1;
         var fun:Function = param2;
         KTool.getMultiValue([3766],function(param1:Array):void
         {
            var flag:Boolean = false;
            var curIndex:uint = 0;
            var val:Array = param1;
            _fireCount = 0;
            var i:int = 0;
            while(i < 15)
            {
               flag = BitUtils.getBit(val[0],i) > 0;
               if(flag)
               {
                  ++_fireCount;
                  if(!isInit && _fireStatus[i] == false)
                  {
                     curIndex = uint(i);
                     AnimateManager.playMcAnimate(_fireCon["mc_" + curIndex],2,"mv",function():void
                     {
                        _fireCon["mc_" + curIndex].gotoAndStop(1);
                        _fireCon["mc_" + curIndex].visible = false;
                     });
                  }
                  else
                  {
                     _fireCon["mc_" + i].visible = !flag;
                  }
               }
               else
               {
                  _fireCon["mc_" + i].visible = true;
               }
               _fireStatus[i] = flag;
               i++;
            }
            if(_fireCount == 15)
            {
               playAnimate(3,function():void
               {
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     ModuleManager.showAppModule("EntrustOfOldDragonJoinPanel");
                  });
               });
               return;
            }
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      private static function onFire(param1:MouseEvent) : void
      {
         var index:uint;
         var e:MouseEvent = param1;
         StatManager.sendStat2014("0108六神归位","点击火焰","2016运营活动");
         index = uint(e.currentTarget.name.split("_")[1]);
         _hitIndex = index;
         endPoint = new Point();
         endPoint.x = _map.topLevel.mouseX;
         endPoint.y = _map.topLevel.mouseY;
         LevelManager.closeMouseEvent();
         MainManager.actorModel.stopAutoWalk();
         MainManager.actorModel.addEventListener(RobotEvent.WALK_END,function(param1:*):void
         {
            var rand:uint;
            var i:int;
            var e:* = param1;
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_END,arguments.callee);
            LevelManager.openMouseEvent();
            rand = Math.floor(Math.random() * 100);
            i = 0;
            while(i < 4)
            {
               if(rand < randArr[i])
               {
                  _curStep = i;
                  break;
               }
               i++;
            }
            NpcDialog.show(NPC.DIYUHUOYAN,[dialogArr[_curStep].dialogs[0]],[dialogArr[_curStep].dialogs[1]],[function():void
            {
               if(dialogArr[_curStep].fun != null)
               {
                  dialogArr[_curStep].fun();
               }
            }]);
         });
         MainManager.actorModel.walkAction([MainManager.actorModel.pos,endPoint],true);
      }
      
      private static function onSetpFire0() : void
      {
         FightManager.fightNoMapBoss("",6296);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
         {
            var info:FightOverInfo;
            var e:PetFightEvent = param1;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            info = e.dataObj as FightOverInfo;
            if(info.winnerID == MainManager.actorID)
            {
               SocketConnection.sendWithCallback(45614,function():void
               {
                  reFreshFire();
               },1,_hitIndex + 1);
            }
         });
      }
      
      private static function onSetpFire1() : void
      {
         _timeToolmc = MapManager.currentMap.libManager.getMovieClip("cdTimeUI");
         var _loc1_:Point = (_fireCon["mc_" + _hitIndex] as MovieClip).localToGlobal(new Point(_fireCon["mc_" + _hitIndex].x,_fireCon["mc_" + _hitIndex].y));
         _timeToolmc.x = _loc1_.x;
         _timeToolmc.y = _loc1_.y;
         _map.topLevel.addChild(_timeToolmc);
         totalTime = 10;
         _timeToolmc["timeTxt"].text = "" + 10;
         _timeToolmc["processMc"].gotoAndStop(10 * totalTime);
         _hitTimer = new Timer(1000);
         _hitTimer.addEventListener(TimerEvent.TIMER,onTimer);
         _hitTimer.start();
         MainManager.actorModel.sprite.addEventListener(RobotEvent.WALK_START,onWalk);
      }
      
      private static function onWalk(param1:*) : void
      {
         if(_hitTimer != null)
         {
            timeOver();
         }
      }
      
      private static function onTimer(param1:TimerEvent) : void
      {
         var e:TimerEvent = param1;
         if(totalTime > 0)
         {
            --totalTime;
            _timeToolmc["timeTxt"].text = "" + totalTime;
            _timeToolmc["processMc"].gotoAndStop(10 * totalTime);
         }
         else
         {
            timeOver();
            SocketConnection.sendWithCallback(45614,function():void
            {
               reFreshFire();
            },1,_hitIndex + 1);
         }
      }
      
      private static function timeOver() : void
      {
         _hitTimer.stop();
         _hitTimer.removeEventListener(TimerEvent.TIMER,onTimer);
         _hitTimer = null;
         DisplayUtil.removeForParent(_timeToolmc);
         _timeToolmc = null;
      }
      
      private static function onSetpFire2() : void
      {
         var t:uint;
         var yunMc:MovieClip = null;
         yunMc = MapManager.currentMap.libManager.getMovieClip("yunAnmiateUI");
         yunMc.x = endPoint.x;
         yunMc.y = endPoint.y - 30;
         _map.topLevel.addChild(yunMc);
         LevelManager.closeMouseEvent();
         LevelManager.appLevel.mouseEnabled = LevelManager.appLevel.mouseChildren = false;
         t = setTimeout(function():void
         {
            SocketConnection.sendWithCallback(45614,function():void
            {
               DisplayUtil.removeForParent(yunMc);
               yunMc = null;
               reFreshFire();
               LevelManager.openMouseEvent();
            },1,_hitIndex + 1);
         },3000);
      }
      
      private static function onSetpFire3() : void
      {
         SocketConnection.sendWithCallback(45614,function():void
         {
            reFreshFire();
         },1,_hitIndex + 1);
      }
      
      public static function destroy11046() : void
      {
         if(_hitTimer != null)
         {
            timeOver();
         }
         var _loc1_:int = 0;
         while(_loc1_ < 15)
         {
            _fireCon["mc_" + _loc1_].removeEventListener(MouseEvent.CLICK,onFire);
            _loc1_++;
         }
         MainManager.actorModel.sprite.removeEventListener(RobotEvent.WALK_START,onWalk);
         if(_taskMc != null)
         {
            DisplayUtil.removeForParent(_taskMc);
            _taskMc.removeEventListener(MouseEvent.CLICK,onTask);
            _taskMc = null;
         }
         _map = null;
      }
      
      public static function initForMap11047(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         if(_curGateIndex == 2)
         {
            _map = map;
            loadTaskMc(function():void
            {
               _map.topLevel.addChild(_taskMc);
               if(BitBuffSetClass.getState(BITFULS[1]) == 0)
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie(_fullMovie),function():void
                  {
                     playAnimate(4,function():void
                     {
                        BitBuffSetClass.setState(BITFULS[1],1);
                        initViews11047();
                     });
                  });
               }
               else
               {
                  initViews11047();
               }
            });
         }
      }
      
      private static function initViews11047() : void
      {
         _taskMc.gotoAndStop(4);
         _taskMc.mc.gotoAndStop(_taskMc.mc.totalFrames);
         bossCon = _taskMc.mc;
         var _loc1_:int = 0;
         while(_loc1_ < 6)
         {
            bossCon["subMc_" + _loc1_].buttonMode = true;
            bossCon["subMc_" + _loc1_].addEventListener(MouseEvent.CLICK,onFight);
            _loc1_++;
         }
         updateFightBossView();
      }
      
      private static function onFight(param1:MouseEvent) : void
      {
         var index:uint = 0;
         var e:MouseEvent = param1;
         StatManager.sendStat2014("0108六神归位","点击分身","2016运营活动");
         index = uint(e.currentTarget.name.split("_")[1]);
         NpcDialog.show(NPC.HUNDUNJIEWANG,["我的每一个分身都蕴藏了一个特殊精灵哦~哈哈！"],null,null,false,function():void
         {
            startStepTwoFight(index);
         });
      }
      
      private static function startStepTwoFight(param1:uint) : void
      {
         SocketConnection.sendWithCallback(45614,null,2,param1 + 1);
      }
      
      private static function updateFightBossView(param1:Function = null) : void
      {
         var fun:Function = param1;
         KTool.getMultiValue([3767,3765],function(param1:Array):void
         {
            var count:int;
            var i:int;
            var flag:Boolean = false;
            var val:Array = param1;
            if(BitUtils.getBit(val[1],1) > 0)
            {
               playAnimate(5,function():void
               {
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     ModuleManager.showAppModule("EntrustOfOldDragonJoinPanel");
                  });
               });
               return;
            }
            count = 0;
            i = 0;
            while(i < 6)
            {
               flag = BitUtils.getBit(val[0],i) > 0;
               bossCon["subMc_" + i].visible = !flag;
               if(flag)
               {
                  count++;
               }
               i++;
            }
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      public static function destroy11047() : void
      {
         if(_taskMc != null)
         {
            DisplayUtil.removeForParent(_taskMc);
            _taskMc.removeEventListener(MouseEvent.CLICK,onTask);
            _taskMc = null;
         }
         _map = null;
      }
      
      public static function initForMap11048(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         if(_curGateIndex == 3)
         {
            _map = map;
            loadTaskMc(function():void
            {
               _map.topLevel.addChild(_taskMc);
               if(BitBuffSetClass.getState(BITFULS[2]) == 0)
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie(_fullMovie),function():void
                  {
                     playAnimate(6,function():void
                     {
                        BitBuffSetClass.setState(BITFULS[2],1);
                        initViews11048();
                     });
                  });
               }
               else
               {
                  initViews11048();
               }
            });
         }
      }
      
      private static function initViews11048() : void
      {
         _taskMc.gotoAndStop(6);
         _taskMc.mc.gotoAndStop(_taskMc.mc.totalFrames);
      }
      
      public static function buyPassGateThree() : void
      {
         NpcDialog.show(NPC.HUANJINGJIEWANG,["咳咳…..如果你感觉非常困难，那这把幻光之剑，你就拿去吧！这本是我留着消灭百鬼夜王的武器。"],["好！借我一用！（需购买）","不必了。"],[function():void
         {
            KTool.buyProductByCallback(246337,1,function():void
            {
               SocketConnection.sendWithCallback(45614,function():void
               {
                  palyOverAnmiate();
               },3,0);
            });
         }]);
      }
      
      public static function palyOverAnmiate() : void
      {
         playAnimate(7,function():void
         {
            MapManager.changeMapWithCallback(1,function():void
            {
               ModuleManager.showAppModule("EntrustOfOldDragonJoinPanel");
            });
         });
      }
   }
}
