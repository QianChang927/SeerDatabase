package com.robot.app.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.UserState;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import flash.utils.Timer;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.BitUtil;
   
   public class StoneTowerController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _timer:Array;
      
      private static var _delay:Array;
      
      private static var _stone:Array;
      
      private static var _isMoving:Array;
      
      private static var _pos:Array;
      
      private static var _point:Array;
      
      private static var _isBreak:Boolean;
      
      private static var _current:MovieClip;
       
      
      public function StoneTowerController()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         var i:uint;
         var timer:Timer = null;
         var map:BaseMapProcess = param1;
         MapNamePanel.hide();
         _timer = [];
         _delay = [Math.random() + 1,Math.random() + 1,Math.random() + 1,Math.random() + 1];
         _stone = [0,0,0,0];
         _isMoving = [false,false,false,false];
         _pos = [new Point(324,450),new Point(146,402),new Point(104,384),new Point(48,272),new Point(642,450),new Point(836,360),new Point(486,442),new Point(474,248)];
         _point = [new Point(282,424),new Point(220,388),new Point(112,344),new Point(76,302),new Point(686,432),new Point(792,392),new Point(494,378),new Point(494,290)];
         _current = null;
         _map = map;
         i = 0;
         while(i < 4)
         {
            timer = new Timer(1000);
            timer.addEventListener(TimerEvent.TIMER,onTimer);
            _timer.push(timer);
            _map.conLevel["stone_" + i].x = _point[i * 2].x;
            _map.conLevel["stone_" + i].y = _point[i * 2].y;
            if(i != 3)
            {
               startMove(i);
               _map.conLevel["stone_" + i]["hit"].buttonMode = true;
               _map.conLevel["stone_" + i]["hit"].addEventListener(MouseEvent.CLICK,onStoneClick);
            }
            i++;
         }
         if(MainManager.actorPrevState == UserState.FIGHT)
         {
            return;
         }
         SocketConnection.addCmdListener(CommandID.STONE_TOWER_GET_INFO,function(param1:SocketEvent):void
         {
            var by:ByteArray;
            var num:uint;
            var e:SocketEvent = param1;
            SocketConnection.removeCmdListener(CommandID.STONE_TOWER_GET_INFO,arguments.callee);
            by = e.data as ByteArray;
            num = by.readUnsignedInt();
            if(BitUtil.getBit(num,12))
            {
               startMove(3);
               _map.conLevel["stone_3"]["hit"].buttonMode = true;
               _map.conLevel["stone_3"]["hit"].addEventListener(MouseEvent.CLICK,onStoneClick);
            }
            else
            {
               callBoss(num);
               AnimateManager.playMcAnimate(_map.conLevel["boss"],1,"mc_1",function():void
               {
                  NpcDialog.show(NPC.SEER,["哇！那个黑影难道就是这里的守护者，但是" + MainManager.actorInfo.formatNick + "去哪里了呢？" + MainManager.actorInfo.formatNick + "你在哪里啊！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.FA_LUO_TE,["哼哼，能来到这里的只有死路一条，先击败我再说吧！不过就看你能不能到我面前了！看到你眼前的浮石了吗？先过来再说吧！"],["你…别得意的太早！"]);
                  });
               });
            }
         });
         SocketConnection.send(CommandID.STONE_TOWER_GET_INFO);
      }
      
      public static function callBoss(param1:uint) : void
      {
         var num:uint = param1;
         var isCom:Boolean = true;
         var j:uint = 0;
         while(j < 12)
         {
            if(Boolean(BitUtil.getBit(num,j)) == false)
            {
               isCom = false;
               break;
            }
            j++;
         }
         if(isCom)
         {
            SocketConnection.addCmdListener(CommandID.STONE_TOWER_CALL_BOSS,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(CommandID.STONE_TOWER_CALL_BOSS,arguments.callee);
               startMove(3);
               _map.conLevel["stone_3"]["hit"].buttonMode = true;
               _map.conLevel["stone_3"]["hit"].addEventListener(MouseEvent.CLICK,onStoneClick);
            });
            SocketConnection.send(CommandID.STONE_TOWER_CALL_BOSS);
         }
      }
      
      private static function startMove(param1:uint) : void
      {
         var point:Point;
         var i:uint = param1;
         if(_stone[i] == 0)
         {
            _stone[i] = 1;
         }
         else
         {
            _stone[i] = 0;
         }
         _isMoving[i] = true;
         point = _point[i * 2 + _stone[i]];
         TweenLite.to(_map.conLevel["stone_" + i],_delay[i],{
            "x":point.x,
            "y":point.y,
            "onComplete":function():void
            {
               if(_map == null)
               {
                  return;
               }
               _isMoving[i] = false;
               if(_isBreak == false && _current == _map.conLevel["stone_" + i])
               {
                  LevelManager.openMouseEvent();
                  MainManager.actorModel.removeEventListener(Event.ENTER_FRAME,onEnterFrame);
                  _current = null;
                  MainManager.actorModel.pos = _pos[i * 2 + _stone[i]];
                  if(i * 2 + _stone[i] == 3)
                  {
                     NpcDialog.show(NPC.SEER,["哇！好大的石壁啊！上面好像有凹槽，样子看上去好熟悉啊！难道是…啊！我知道了就是那些稀有的碎片，看来只有这些碎片才能激活石壁！"],["让我试试！"],[function():void
                     {
                        CommonUI.removeYellowArrow(_map.topLevel);
                        CommonUI.addYellowArrow(_map.topLevel,150,90,45);
                     }]);
                  }
                  else if(i * 2 + _stone[i] == 5)
                  {
                     NpcDialog.show(NPC.SEER,["哇！好大的石壁啊！上面好像有凹槽，样子看上去好熟悉啊！难道是…啊！我知道了就是那些稀有的碎片，看来只有这些碎片才能激活石壁！"],["让我试试！"],[function():void
                     {
                        CommonUI.removeYellowArrow(_map.topLevel);
                        CommonUI.addYellowArrow(_map.topLevel,600,90,315);
                     }]);
                  }
                  else if(i * 2 + _stone[i] == 7)
                  {
                     AnimateManager.playMcAnimate(_map.conLevel["boss"],2,"mc_2",function():void
                     {
                        NpcDialog.show(NPC.FA_LUO_TE,["既然这样，那我就让你看看你的伙伴吧！哈哈…"],["你说什么！！！！你把拉琪怎么了？"],[function():void
                        {
                           AnimateManager.playMcAnimate(_map.conLevel["boss"],3,"mc_3",function():void
                           {
                              NpcDialog.show(NPC.SEER,["不行，我是不会放弃朋友的，法洛特让你尝尝我的厉害！接招吧！"],null,null,false,function():void
                              {
                                 ToolTipManager.add(_map.conLevel["bossHit"],"法洛特");
                                 _map.conLevel["bossHit"].buttonMode = true;
                                 _map.conLevel["bossHit"].addEventListener(MouseEvent.CLICK,onBossClick);
                              });
                           });
                        }]);
                     });
                  }
               }
               _timer[i].start();
            }
         });
      }
      
      private static function onTimer(param1:TimerEvent) : void
      {
         var _loc2_:Timer = param1.currentTarget as Timer;
         _loc2_.stop();
         startMove(_timer.indexOf(_loc2_));
      }
      
      private static function onStoneClick(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget.parent as MovieClip;
         var _loc3_:uint = uint(_loc2_.name.split("_")[1]);
         if(_isMoving[_loc3_])
         {
            return;
         }
         checkStone(_loc3_,0,_loc2_);
         checkStone(_loc3_,1,_loc2_);
      }
      
      private static function checkStone(param1:uint, param2:uint, param3:MovieClip) : void
      {
         var i:uint = param1;
         var j:uint = param2;
         var stone:MovieClip = param3;
         if(_map.animatorLevel["area_" + i + "_" + j].hitTestPoint(MainManager.actorModel.pos.x,MainManager.actorModel.pos.y,true))
         {
            if(_stone[i] != j)
            {
               return;
            }
            MainManager.actorModel.moveAndAction(_pos[i * 2 + j],function():void
            {
               var id:uint = 0;
               if(_isMoving[i])
               {
                  return;
               }
               LevelManager.closeMouseEvent();
               _current = stone;
               MainManager.actorModel.pos = new Point(_current.x,_current.y);
               MainManager.actorModel.addEventListener(Event.ENTER_FRAME,onEnterFrame);
               if(i != 3 && _stone[i] == 0 && Math.random() < 0.5)
               {
                  _isBreak = true;
                  AnimateManager.playMcAnimate(_current,2,"mc",function():void
                  {
                     var id:uint = 0;
                     id = setTimeout(function():void
                     {
                        clearTimeout(id);
                        if(_map == null)
                        {
                           return;
                        }
                        _current.gotoAndStop(1);
                     },3000);
                     MainManager.actorModel.removeEventListener(Event.ENTER_FRAME,onEnterFrame);
                     MainManager.actorModel.pos = new Point(480,496);
                  });
               }
               else
               {
                  _isBreak = false;
               }
               if(i != 3 && _stone[i] == 0)
               {
                  _map.conLevel["word"].gotoAndStop(2 + Math.floor(Math.random() * 3));
                  id = setTimeout(function():void
                  {
                     clearTimeout(id);
                     if(_map == null)
                     {
                        return;
                     }
                     _map.conLevel["word"].gotoAndStop(1);
                  },3000);
               }
            });
         }
      }
      
      private static function onEnterFrame(param1:Event) : void
      {
         MainManager.actorModel.pos = new Point(_current.x,_current.y);
      }
      
      private static function onBossClick(param1:MouseEvent) : void
      {
         EventManager.addEventListener(RobotEvent.NO_PET_CAN_FIGHT,onError);
         FightDispatcher.addEventListener(PetFightEvent.CATCH_PET,onCatch);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFight);
         FightManager.fightWithBoss("法洛特");
      }
      
      private static function onError(param1:RobotEvent) : void
      {
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onError);
         FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,onCatch);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFight);
      }
      
      private static function onCatch(param1:PetFightEvent) : void
      {
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onError);
         FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,onCatch);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFight);
         userWin();
      }
      
      private static function onFight(param1:PetFightEvent) : void
      {
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onError);
         FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,onCatch);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFight);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            userWin();
         }
         else
         {
            userLose();
         }
      }
      
      private static function userWin() : void
      {
         NpcDialog.show(NPC.FA_LUO_TE,["不可能…怎么可能会这样！我不信…."],["哈哈哈！叫你再欺负弱小！"],[function():void
         {
            AnimateManager.playMcAnimate(_map.conLevel["boss"],5,"mc_5",function():void
            {
               NpcDialog.show(NPC.LA_QI,["赛尔，你再一次的挽救了我！我真不知该如何道谢！我想法洛特也不是存心这样！它也是想自己的领地不被侵犯而已！放心吧！我会感化它的！"],["恩恩，你没事就好！"],[function():void
               {
                  NpcDialog.show(NPC.FA_LUO_TE,["哼哼！别以为就这么完了，下次你们就没这么走运了！"],["我不想伤害任何人，你还是好自为之吧！"],[function():void
                  {
                     AnimateManager.playMcAnimate(_map.conLevel["boss"],6,"mc_6",function():void
                     {
                        MainManager.actorModel.pos = new Point(480,496);
                        NpcDialog.show(NPC.FA_LUO_TE,["这里是我的国度，谁都别想闯入这里！下次在遇到你，一定要你知道我的厉害！"],["真是死心不改…."],[function():void
                        {
                           MapManager.changeMap(702);
                        }]);
                     });
                  }]);
               }]);
            });
         }]);
      }
      
      private static function userLose() : void
      {
         NpcDialog.show(NPC.FA_LUO_TE,["哈哈！就凭你这样的实力也敢来石塔挑战我，乖乖的给我回去吧！"],null,null,false,function():void
         {
            AnimateManager.playMcAnimate(_map.conLevel["boss"],4,"mc_4",function():void
            {
               MainManager.actorModel.pos = new Point(480,496);
               NpcDialog.show(NPC.SEER,["可恶，我怎么可以输给你这样的对手！你等着，下次你就没这么幸运了！"],null,null,false,function():void
               {
                  MapManager.changeMap(702);
               });
            });
         });
      }
      
      public static function destory() : void
      {
         var _loc1_:Timer = null;
         var _loc2_:uint = 0;
         ToolTipManager.remove(_map.conLevel["bossHit"]);
         _map.conLevel["bossHit"].removeEventListener(MouseEvent.CLICK,onBossClick);
         for each(_loc1_ in _timer)
         {
            _loc1_.stop();
            _loc1_.removeEventListener(TimerEvent.TIMER,onTimer);
         }
         _loc2_ = 0;
         while(_loc2_ < 4)
         {
            _map.conLevel["stone_" + _loc2_]["hit"].removeEventListener(MouseEvent.CLICK,onStoneClick);
            _loc2_++;
         }
         _map = null;
         _timer = null;
         _delay = null;
         _stone = null;
         _isMoving = null;
         _pos = null;
         _point = null;
         _current = null;
      }
   }
}
