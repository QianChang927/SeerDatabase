package com.robot.app.mapProcess.control
{
   import com.robot.app.fightLevel.FightPetBagController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.MapTransEffect;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.ui.alert.SimpleAlarm;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class GoldenTwelvePalaceController
   {
      
      private static var _map:BaseMapProcess;
      
      private static const _mapIDArr:Array = [10251,10252,10253,10254,10255,10256,10257,10258,10259,10260,10261,10262,10287];
      
      private static const _palaceNameArr:Array = ["白羊宫","金牛宫","双子宫","巨蟹宫","狮子宫","室女宫","天秤宫","天蝎宫","射手宫","摩羯宫","水瓶宫","双鱼宫","圣域之巅"];
      
      private static var _palaceIndex:int;
      
      private static var _isSameMap:Boolean;
      
      private static var _level:uint;
      
      private static var _monID:uint;
      
      private static var _effectIdArr:Array;
      
      private static var _tempEidArr:Array;
      
      private static const _eidChangeArr:Array = [113,7,53,2,1,269,116,270,259,260,70,72,71,73];
      
      private static var _isWin:Boolean = false;
      
      private static var _isWinByUseBoss:Boolean;
      
      private static var _winTheBoss:Boolean;
      
      private static var _escapeFromFight:Boolean;
      
      private static var _comeBack:Boolean;
      
      public static var commonLeave:Boolean;
      
      private static const _stLeaveFromFirstLevel:Array = [86049424,86049428,86049634,86049874,86050370,86050578,86051442,86052146,86053188,86053284,86053972,86055445,86056691];
       
      
      public function GoldenTwelvePalaceController()
      {
         super();
      }
      
      public static function get effectIdArr() : Array
      {
         return _effectIdArr;
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         _map = param1;
         _palaceIndex = _mapIDArr.indexOf(MapManager.currentMap.id);
         _map.topLevel["level_con"]["level_mc"].visible = false;
         _map.topLevel["level_con"]["level_effect"].visible = false;
         _map.conLevel["boss"].visible = false;
         _map.conLevel["bag"].addEventListener(MouseEvent.CLICK,onPetBagHandler);
         ToolTipManager.add(_map.conLevel["bag"],"打开精灵背包");
         _map.conLevel["exit"].addEventListener(MouseEvent.CLICK,onLeaveMapHandler);
         ToolTipManager.add(_map.conLevel["exit"],"回到空间裂缝");
         _map.conLevel["ball"].visible = false;
         _map.conLevel["disappear"].visible = false;
         _map.conLevel["numBall"]["ball_1"].visible = false;
         _map.conLevel["numBall"]["ball_2"].visible = false;
         _map.conLevel["numBall"]["ball_3"].visible = false;
         _map.conLevel["ballMc"]["ball_1"].visible = false;
         _map.conLevel["ballMc"]["ball_2"].visible = false;
         _map.conLevel["ballMc"]["ball_3"].visible = false;
         _map.conLevel["levelArrow"].buttonMode = true;
         _map.conLevel["levelArrow"].visible = false;
         _map.animatorLevel["levelTable"].visible = false;
         _map.animatorLevel["BossTable"].visible = false;
         _map.conLevel["levelMC"].visible = false;
         if(!_isSameMap)
         {
            _isSameMap = true;
            SocketConnection.addCmdListener(CommandID.GOLDEN_TWELVE_PALACE_ENTER,onStartHandler);
            SocketConnection.send(CommandID.GOLDEN_TWELVE_PALACE_ENTER,_palaceIndex);
         }
         MapManager.addEventListener(MapEvent.MAP_SWITCH_OPEN,accidentEvent);
      }
      
      private static function onPetBagHandler(param1:MouseEvent) : void
      {
         FightPetBagController.show();
      }
      
      private static function onLeaveMapHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         Alert.show("确定要离开战斗吗？如果中途退出的话，需要从头开始挑战哦！",function():void
         {
            commonLeave = true;
            leaveFight();
            if(_level == 1)
            {
               SocketConnection.send(1022,_stLeaveFromFirstLevel[_palaceIndex]);
            }
            else if(_level == 2)
            {
               if(_palaceIndex == 8)
               {
                  SocketConnection.send(1022,86053190);
               }
               else if(_palaceIndex == 9)
               {
                  SocketConnection.send(1022,86053286);
               }
               else if(_palaceIndex == 10)
               {
                  SocketConnection.send(1022,86053976);
               }
               else if(_palaceIndex == 11)
               {
                  SocketConnection.send(1022,86055447);
               }
            }
            else if(_level == 9 && _palaceIndex == 11)
            {
               SocketConnection.send(1022,86055449);
            }
         });
      }
      
      private static function accidentEvent(param1:MapEvent) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_OPEN,accidentEvent);
         commonLeave = false;
         leaveFight();
      }
      
      private static function onStartHandler(param1:SocketEvent) : void
      {
         var _loc5_:uint = 0;
         SocketConnection.removeCmdListener(CommandID.GOLDEN_TWELVE_PALACE_ENTER,onStartHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         _level = _loc2_.readUnsignedInt() + 1;
         _monID = _loc2_.readUnsignedInt();
         _tempEidArr = [];
         _effectIdArr = [];
         var _loc3_:uint = 0;
         while(_loc3_ < 3)
         {
            _tempEidArr.push(_loc2_.readUnsignedInt());
            if(_tempEidArr[_loc3_] == 0)
            {
               break;
            }
            _loc3_++;
         }
         var _loc4_:uint = 0;
         while(_loc4_ < _tempEidArr.length)
         {
            _loc5_ = 0;
            while(_loc5_ < _eidChangeArr.length)
            {
               if(_tempEidArr[_loc4_] == _eidChangeArr[_loc5_])
               {
                  _effectIdArr.push(_eidChangeArr.indexOf(_eidChangeArr[_loc5_]));
               }
               _loc5_++;
            }
            _loc4_++;
         }
         initMap(_level,_monID);
      }
      
      private static function initMap(param1:uint, param2:uint) : void
      {
         var level:uint = param1;
         var monsterID:uint = param2;
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.hide();
         ToolBarController.showOrHideAllUser(false);
         (_map.conLevel["levelMC"] as MovieClip).visible = true;
         (_map.conLevel["levelMC"] as MovieClip).gotoAndStop(level);
         ToolTipManager.add(_map.conLevel["levelMC"],"当前是第" + level + "层");
         if(level == 10 && _palaceIndex != 12)
         {
            ToolTipManager.remove(_map.conLevel["levelArrow"]);
            _map.conLevel["levelArrow"].visible = false;
            _map.animatorLevel["levelTable"].visible = false;
            _map.animatorLevel["BossTable"].visible = true;
            if(!_comeBack)
            {
               _map.topLevel["level_con"]["level_mc"].visible = true;
               _map.topLevel["level_con"]["level_effect"].visible = true;
               _map.topLevel["level_con"]["level_mc"].gotoAndStop(level);
               AnimateManager.playMcAnimate(_map.topLevel["level_con"]["level_effect"],0,"",function():void
               {
                  _map.topLevel["level_con"]["level_mc"].visible = false;
                  _map.topLevel["level_con"]["level_effect"].visible = false;
                  if(!_escapeFromFight)
                  {
                     playDialogAndMcInBossLevel();
                  }
                  else
                  {
                     playMc();
                  }
               });
               if(_palaceIndex == 6)
               {
                  SocketConnection.send(1022,86051442 + level);
               }
               else if(_palaceIndex == 8)
               {
                  SocketConnection.send(1022,86053191);
               }
               else if(_palaceIndex == 9)
               {
                  SocketConnection.send(1022,86053287);
               }
               else if(_palaceIndex == 11)
               {
                  SocketConnection.send(1022,86055452);
               }
            }
            else
            {
               _map.topLevel["level_con"]["level_mc"].visible = false;
               _map.topLevel["level_con"]["level_effect"].visible = false;
               _comeBack = false;
               winTheBoss();
            }
         }
         else if(level == 13 && _palaceIndex == 12)
         {
            ToolTipManager.remove(_map.conLevel["levelArrow"]);
            _map.conLevel["levelArrow"].visible = false;
            _map.animatorLevel["levelTable"].visible = false;
            _map.animatorLevel["BossTable"].visible = true;
            if(!_comeBack)
            {
               _map.topLevel["level_con"]["level_mc"].visible = true;
               _map.topLevel["level_con"]["level_effect"].visible = true;
               _map.topLevel["level_con"]["level_mc"].gotoAndStop(level);
               AnimateManager.playMcAnimate(_map.topLevel["level_con"]["level_effect"],0,"",function():void
               {
                  _map.topLevel["level_con"]["level_mc"].visible = false;
                  _map.topLevel["level_con"]["level_effect"].visible = false;
                  loadBoss(monsterID);
               });
            }
            else
            {
               _map.topLevel["level_con"]["level_mc"].visible = false;
               _map.topLevel["level_con"]["level_effect"].visible = false;
               _comeBack = false;
               winTheBoss();
            }
         }
         else
         {
            ToolTipManager.add(_map.conLevel["levelArrow"],"下一关");
            _map.conLevel["levelArrow"].visible = true;
            _map.animatorLevel["levelTable"].visible = true;
            _map.animatorLevel["BossTable"].visible = false;
            if(!_comeBack)
            {
               _map.topLevel["level_con"]["level_mc"].visible = true;
               _map.topLevel["level_con"]["level_effect"].visible = true;
               _map.topLevel["level_con"]["level_mc"].gotoAndStop(level);
               AnimateManager.playMcAnimate(_map.topLevel["level_con"]["level_effect"],0,"",function():void
               {
                  _map.topLevel["level_con"]["level_mc"].visible = false;
                  _map.topLevel["level_con"]["level_effect"].visible = false;
               });
               if(level == 1)
               {
                  playDialogAndMcInFirstLevel();
               }
               loadBoss(monsterID);
               if(_palaceIndex == 6)
               {
                  SocketConnection.send(1022,86051442 + level);
               }
               if(_palaceIndex == 7 && level == 1)
               {
                  SocketConnection.send(1022,86053844);
               }
               else if(_palaceIndex == 8)
               {
                  if(level == 1)
                  {
                     SocketConnection.send(1022,86053187);
                  }
                  else if(level == 2)
                  {
                     SocketConnection.send(1022,86053189);
                  }
               }
               else if(_palaceIndex == 9)
               {
                  if(level == 1)
                  {
                     SocketConnection.send(1022,86053283);
                  }
                  else if(level == 2)
                  {
                     SocketConnection.send(1022,86053285);
                  }
               }
               else if(_palaceIndex == 10 && level == 1)
               {
                  SocketConnection.send(1022,86053969);
               }
               else if(_palaceIndex == 11)
               {
                  if(level == 1)
                  {
                     SocketConnection.send(1022,86055444);
                  }
                  else if(level == 2)
                  {
                     SocketConnection.send(1022,86055446);
                  }
                  else if(level == 9)
                  {
                     SocketConnection.send(1022,86055448);
                  }
               }
               else if(_palaceIndex == 12)
               {
                  if(level == 1)
                  {
                     SocketConnection.send(1022,86056689);
                  }
                  else if(level == 2)
                  {
                     SocketConnection.send(1022,86056690);
                  }
               }
            }
            else
            {
               _map.topLevel["level_con"]["level_mc"].visible = false;
               _map.topLevel["level_con"]["level_effect"].visible = false;
               _comeBack = false;
            }
         }
      }
      
      public static function leaveFight() : void
      {
         SocketConnection.addCmdListener(CommandID.GOLDEN_TWELVE_PALACE_LEAVE,onLeaveFightHandler);
         SocketConnection.send(CommandID.GOLDEN_TWELVE_PALACE_LEAVE);
         if(commonLeave)
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_OPEN,accidentEvent);
         }
      }
      
      private static function onLeaveFightHandler(param1:SocketEvent) : void
      {
         if((_map.conLevel["boss"] as MovieClip).numChildren == 1)
         {
            (_map.conLevel["boss"] as MovieClip).removeChildAt(0);
         }
         SocketConnection.removeCmdListener(CommandID.GOLDEN_TWELVE_PALACE_LEAVE,onLeaveFightHandler);
         _isSameMap = false;
         _winTheBoss = false;
         _escapeFromFight = false;
         _isWinByUseBoss = false;
         _tempEidArr = null;
         _effectIdArr = null;
         PetFightModel.type = 0;
         ToolBarController.panel.show();
         LevelManager.iconLevel.visible = true;
         ToolBarController.showOrHideAllUser(true);
         MapManager.changeMap(14);
      }
      
      public static function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.GOLDEN_TWELVE_PALACE_ENTER,onStartHandler);
         SocketConnection.removeCmdListener(CommandID.GOLDEN_TWELVE_PALACE_NEXT,onNextLevelHandler);
         SocketConnection.removeCmdListener(CommandID.GOLDEN_TWELVE_PALACE_LEAVE,onLeaveFightHandler);
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_OPEN,accidentEvent);
         _map = null;
      }
      
      private static function playMc() : void
      {
         ToolBarController.panel.hide();
         _map.conLevel["ball"].visible = true;
         AnimateManager.playMcAnimate(_map.conLevel["ball"],1,"ball",function():void
         {
            _map.conLevel["ballMc"]["ball_" + effectIdArr.length].visible = true;
            AnimateManager.playMcAnimate(_map.conLevel["ballMc"]["ball_" + effectIdArr.length],0,"",function():void
            {
               var t:uint = 0;
               var i:uint = 0;
               while(i < effectIdArr.length)
               {
                  _map.conLevel["numBall"]["ball_" + effectIdArr.length]["simple_" + i].gotoAndStop(effectIdArr[i] + 1);
                  i++;
               }
               _map.conLevel["numBall"]["ball_" + effectIdArr.length].visible = true;
               t = setTimeout(function():void
               {
                  if(_map)
                  {
                     _map.conLevel["numBall"]["ball_" + effectIdArr.length].visible = false;
                     _map.conLevel["disappear"].visible = true;
                     AnimateManager.playMcAnimate(_map.conLevel["disappear"],0,"");
                  }
                  clearTimeout(t);
               },2000);
               loadBoss(_monID);
            });
         });
      }
      
      private static function loadBoss(param1:uint) : void
      {
         var id:uint = param1;
         _map.conLevel["boss"].visible = true;
         ToolBarController.panel.hide();
         ResourceManager.getResource(ClientConfig.getPetSwfPath(id),function(param1:DisplayObject):void
         {
            var _loc2_:MovieClip = param1 as MovieClip;
            (_loc2_.getChildAt(0) as MovieClip).gotoAndStop(1);
            if((_map.conLevel["boss"] as MovieClip).numChildren == 1)
            {
               (_map.conLevel["boss"] as MovieClip).removeChildAt(0);
            }
            _map.conLevel["boss"].addChild(_loc2_);
            ToolTipManager.add(_loc2_,PetXMLInfo.getName(id));
            _loc2_.buttonMode = true;
            _loc2_.addEventListener(MouseEvent.CLICK,onBossClick);
            if(_loc2_.width > _loc2_.height)
            {
               _loc2_.scaleX = _loc2_.scaleY = 60 / _loc2_.width;
            }
            else
            {
               _loc2_.scaleX = _loc2_.scaleY = 60 / _loc2_.height;
            }
         },"pet");
      }
      
      private static function onBossClick(param1:MouseEvent) : void
      {
         (param1.currentTarget as MovieClip).removeEventListener(MouseEvent.CLICK,onBossClick);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         SocketConnection.addCmdListener(CommandID.GOLDEN_TWELVE_PALACE_FIGHTWITHBOSS,onSuccessHandler);
         SocketConnection.send(CommandID.GOLDEN_TWELVE_PALACE_FIGHTWITHBOSS);
         if(_palaceIndex != 12)
         {
            if(_level == 10)
            {
               PetFightModel.type = PetFightModel.GOLDEN_PALACE_FIGHT;
               SocketConnection.addCmdListener(CommandID.GOLDEN_TWELVE_PALACE_DRAW_NOTICE,onGetDrawNotice);
            }
         }
      }
      
      private static function onSuccessHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.GOLDEN_TWELVE_PALACE_FIGHTWITHBOSS,onSuccessHandler);
      }
      
      private static function onGetDrawNotice(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.GOLDEN_TWELVE_PALACE_DRAW_NOTICE,onGetDrawNotice);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         DebugTrace.show("是否被分身打败：" + _loc3_);
         if(_loc3_ == 1)
         {
            _isWinByUseBoss = true;
         }
         else
         {
            _isWinByUseBoss = false;
         }
      }
      
      private static function fightOverHandler(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         info = e.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            _isWin = true;
         }
         else
         {
            _isWin = false;
         }
         if(_isWin)
         {
            _comeBack = true;
            if(_palaceIndex != 12)
            {
               if(_level == 10)
               {
                  _winTheBoss = true;
                  initMap(_level,_monID);
               }
               else
               {
                  SimpleAlarm.show("恭喜你获得<font color=\'#ff0000\'>6000点累积经验</font>！");
                  if(_level == 9)
                  {
                     Alert.show("即将进入BOSS层，是否将已获得的经验分配给背包内精灵？",function():void
                     {
                        ModuleManager.showModule(ClientConfig.getAppModule("ExpAdmPanel"),"正在打开经验分配器....");
                        if(_palaceIndex == 1)
                        {
                           SocketConnection.send(1022,86049418);
                        }
                     },function():void
                     {
                        if(_palaceIndex == 1)
                        {
                           SocketConnection.send(1022,86049419);
                        }
                     });
                  }
                  else if(_level == 1 && _palaceIndex == 7)
                  {
                     NpcDialog.show(NPC.SIKAPU,[MainManager.actorInfo.formatNick + ",你果然天资聪慧，已经能够初步克制内心的恐惧了，我在第十层等你，来吧！"],["好，我们约战第十层！"],[function():void
                     {
                        ToolBarController.panel.hide();
                     }]);
                  }
                  SocketConnection.addCmdListener(CommandID.GOLDEN_TWELVE_PALACE_NEXT,onNextLevelHandler);
                  SocketConnection.send(CommandID.GOLDEN_TWELVE_PALACE_NEXT);
                  initMap(_level,_monID);
               }
            }
            else if(_level == 13)
            {
               _winTheBoss = true;
               initMap(_level,_monID);
            }
            else
            {
               SimpleAlarm.show("恭喜你获得<font color=\'#ff0000\'>8000点累积经验</font>！");
               if(_level == 12)
               {
                  Alert.show("即将进入BOSS层，是否将已获得的经验分配给背包内精灵？",function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("ExpAdmPanel"),"正在打开经验分配器....");
                  },function():void
                  {
                  });
               }
               else if(_level == 1 && _palaceIndex == 7)
               {
                  NpcDialog.show(NPC.SIKAPU,[MainManager.actorInfo.formatNick + ",你果然天资聪慧，已经能够初步克制内心的恐惧了，我在第十层等你，来吧！"],["好，我们约战第十层！"],[function():void
                  {
                     ToolBarController.panel.hide();
                  }]);
               }
               SocketConnection.addCmdListener(CommandID.GOLDEN_TWELVE_PALACE_NEXT,onNextLevelHandler);
               SocketConnection.send(CommandID.GOLDEN_TWELVE_PALACE_NEXT);
               initMap(_level,_monID);
            }
         }
         else if(_palaceIndex != 12)
         {
            if(_level == 10 && info.reason == 5)
            {
               _escapeFromFight = true;
               initMap(_level,_monID);
            }
            else
            {
               commonLeave = true;
               leaveFight();
            }
         }
         else if(_level == 13 && info.reason == 5)
         {
            _escapeFromFight = true;
            initMap(_level,_monID);
         }
         else
         {
            commonLeave = true;
            leaveFight();
         }
      }
      
      private static function onNextLevelHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.GOLDEN_TWELVE_PALACE_NEXT,onNextLevelHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         _level = _loc2_.readUnsignedInt() + 1;
         _monID = _loc2_.readUnsignedInt();
         DebugTrace.show("下一层：level--" + _level + "---monID--" + _monID);
         if(_palaceIndex != 12)
         {
            if(_level > 10)
            {
               MapManager.changeMap(14);
            }
            else if(_level <= 10)
            {
               _map.conLevel["levelArrow"].mouseEnabled = true;
               _map.conLevel["levelArrow"].addEventListener(MouseEvent.CLICK,goUPFloor);
            }
         }
         else if(_level > 13)
         {
            MapManager.changeMap(14);
         }
         else if(_level <= 13)
         {
            _map.conLevel["levelArrow"].mouseEnabled = true;
            _map.conLevel["levelArrow"].addEventListener(MouseEvent.CLICK,goUPFloor);
         }
      }
      
      private static function goUPFloor(param1:MouseEvent = null) : void
      {
         var e:MouseEvent = param1;
         _map.conLevel["levelArrow"].mouseEnabled = false;
         _map.conLevel["levelArrow"].removeEventListener(MouseEvent.CLICK,goUPFloor);
         LevelManager.closeMouseEvent();
         MainManager.actorModel.moveAndAction(new Point(550,130),function():void
         {
            MainManager.actorModel.visible = false;
            MainManager.actorModel.alpha = 0;
            AnimateManager.playMcAnimate(_map.animatorLevel["levelTable"],2,"mc2",function():void
            {
               var mte:MapTransEffect;
               _map.animatorLevel["levelTable"].gotoAndStop(1);
               FightPetBagController.destroy();
               mte = new MapTransEffect(MapManager.currentMap,1);
               mte.addEventListener(MapEvent.MAP_EFFECT_COMPLETE,function(param1:MapEvent):void
               {
                  DisplayUtil.removeAllChild(LevelManager.appLevel);
                  DisplayUtil.removeAllChild(LevelManager.mapLevel);
                  LevelManager.mapLevel.addChild(MapManager.currentMap.root);
                  MainManager.actorModel.visible = true;
                  MainManager.actorModel.x = 395;
                  MainManager.actorModel.y = 440;
                  MainManager.actorModel.alpha = 1;
                  LevelManager.openMouseEvent();
                  initMap(_level,_monID);
                  if(_palaceIndex == 1)
                  {
                     SocketConnection.send(1022,86049429 + _level);
                  }
               });
               mte.star();
            });
         });
      }
      
      private static function winTheBoss() : void
      {
         loadBoss(_monID);
         (_map.conLevel["boss"] as MovieClip).mouseChildren = false;
         (_map.conLevel["boss"] as MovieClip).mouseEnabled = false;
         if(_isWinByUseBoss)
         {
            if(_palaceIndex != 12)
            {
               AnimateManager.playMcAnimate(_map.animatorLevel["BossTable"],2,"mc2",function():void
               {
                  _map.conLevel["giftNpc"].buttonMode = true;
                  _map.conLevel["giftNpc"].addEventListener(MouseEvent.CLICK,onShowDrawPanel);
               });
            }
            else
            {
               NpcDialog.show(NPC.SEER,["终于击败你了，你可真难缠，现在可以把12宫的秘密告诉我了吧"],["呵呵"],[function():void
               {
                  NpcDialog.show(NPC.KELAIMENTE,["其实12宫中并没有什么秘密，我和其他12宫的精灵是为了守护星空之子利亚斯而生的，我们的任务就是保卫利亚斯不受任何伤害"],["原来是这样啊"],[function():void
                  {
                     NpcDialog.show(NPC.KELAIMENTE,["是的，能够战胜我足以证明你的强大的实力，作为奖励，我把我的精元赠送给你。"],["哈哈，真是太好了"],[function():void
                     {
                        NpcDialog.show(NPC.KELAIMENTE,["另外，只要你收集到所有12宫的邀请函就可以获得我的主人-利亚斯了，快去努力吧"],["好，我一定会努力的。"],[function():void
                        {
                           commonLeave = true;
                           leaveFight();
                        }]);
                     }]);
                  }]);
               }]);
            }
         }
         else
         {
            switch(_palaceIndex)
            {
               case 0:
                  NpcDialog.show(NPC.ALISI,["哈哈，真是不打不相识呀！你实力很不错，不过如果你能再次来到这里，并用我的分身来战胜我的本体，我就同意星空之子送你一个惊喜。"],["好的，我一定会回来的！！！"],[function():void
                  {
                     commonLeave = true;
                     leaveFight();
                  }]);
                  break;
               case 1:
                  NpcDialog.show(NPC.TUOLUOSI,["哈哈，和你打架真痛快！要是每天都能和你打一架就太好了！"],["这。。。我比较关心的是你会给我礼物吗？"],[function():void
                  {
                     NpcDialog.show(NPC.TUOLUOSI,["额，这个嘛，就要从长计议了！宇宙之中的那个最强存在要求我们黄金十二宫的守护者必须严守各宫宝藏！怎么，你想打架吗？"],["晕倒！"],[function():void
                     {
                        NpcDialog.show(NPC.TUOLUOSI,["嘘！偷偷告诉你哈，只要用我的分身打败我，星空之子就会把我的金库拿出来的，那个人拿星空之子也是没办法的！"],["太好了，托罗斯，等我再次回来吧！"],[function():void
                        {
                           commonLeave = true;
                           leaveFight();
                        }]);
                     }]);
                  }]);
                  break;
               case 2:
                  NpcDialog.show(NPC.JIEMINI,["咦，你不就是那个我邀请你上来做客的赛尔吗？"],["这。。。你终于认出来了！"],[function():void
                  {
                     NpcDialog.show(NPC.JIEMINI,["哎！我最近天气不好，我心情变化比较快，嘿嘿。下次你一定要再来哟，0xff0000用善良的我打败暴躁的我，我好给你一个大礼物！0xffffff"],["嗯嗯，你蛮有趣，我还是蛮喜欢你的！"],[function():void
                     {
                        commonLeave = true;
                        leaveFight();
                     }]);
                  }]);
                  break;
               case 3:
                  NpcDialog.show(NPC.KAISIER,["没有最强的存在，只有更强的挑战！0xff0000战胜自己的人总是会赢得奖励与尊敬的，这就是巨蟹宫的奥义！0xffffff"],["原来是这样，我懂了！我马上回来！"],[function():void
                  {
                     commonLeave = true;
                     leaveFight();
                  }]);
                  break;
               case 4:
                  NpcDialog.show(NPC.LIANGSI,["竟然打败我了，再来！"],["#8哈哈，有意思！"],[function():void
                  {
                     commonLeave = true;
                     leaveFight();
                  }]);
                  break;
               case 5:
               case 6:
                  commonLeave = true;
                  leaveFight();
                  break;
               case 7:
                  NpcDialog.show(NPC.SIKAPU,[MainManager.actorInfo.formatNick + "你的实力还可以，可是你应该对自己有更高的要求，你能以更短的时间打败我么？"],["好，再来战斗一次！","以后再说"],[function():void
                  {
                     gotoFirstLevelAgain();
                  },function():void
                  {
                     commonLeave = true;
                     leaveFight();
                  }]);
                  break;
               case 8:
                  NpcDialog.show(NPC.AQIER,[MainManager.actorInfo.formatNick + "你的实力还不错，再来一次挑战吧，如果还能打败我我不仅会给你神秘奖励（特殊条件触发），还可以让我儿子和你做朋友！！！"],["好呀好呀！"],[function():void
                  {
                     commonLeave = true;
                     leaveFight();
                  }]);
                  break;
               case 9:
                  NpcDialog.show(NPC.CAPURUI,[MainManager.actorInfo.formatNick + "你的实力还不错，再来一次挑战吧，如果还能打败我我不仅会给你神秘奖励（特殊条件触发），还可以让我儿子和你做朋友！！！"],["好呀好呀！"],[function():void
                  {
                     commonLeave = true;
                     leaveFight();
                  }]);
                  break;
               case 10:
                  NpcDialog.show(NPC.AOKEWEI,[MainManager.actorInfo.formatNick + "，赛尔号果然是一个强者云集的地方，我愿和你交个朋友，你若是能用我的分身再次击败我，我可以给你奖励，英雄间的馈赠！"],["好呀好呀！"],[function():void
                  {
                     commonLeave = true;
                     leaveFight();
                  }]);
                  break;
               case 11:
                  NpcDialog.show(NPC.SEER,["你怎么这样就被我打败了，快说快说，十二宫背后到底隐藏着什么秘密！难道……"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.PAIXISI,["我不服气，你只是侥幸获胜而已！快，我要和你再打一局，如果你不来，我会当做你是害怕了哟！"],["好的，那我就打败你，直到你说出秘密"],[function():void
                     {
                        commonLeave = true;
                        leaveFight();
                     }]);
                  });
                  break;
               case 12:
                  NpcDialog.show(NPC.SEER,["终于击败你了，你可真难缠，现在可以把12宫的秘密告诉我了吧"],["呵呵"],[function():void
                  {
                     NpcDialog.show(NPC.KELAIMENTE,["其实12宫中并没有什么秘密，我和其他12宫的精灵是为了守护星空之子利亚斯而生的，我们的任务就是保卫利亚斯不受任何伤害"],["原来是这样啊"],[function():void
                     {
                        NpcDialog.show(NPC.KELAIMENTE,["是的，能够战胜我足以证明你的强大的实力，作为奖励，我把我的精元赠送给你。"],["哈哈，真是太好了"],[function():void
                        {
                           ItemInBagAlert.show(1500062,"1个克莱门特的精元已经放入你的分子转化仪中！");
                           NpcDialog.show(NPC.KELAIMENTE,["另外，只要你收集到所有12宫的邀请函就可以获得我的主人-利亚斯了，快去努力吧"],["好，我一定会努力的。"],[function():void
                           {
                              commonLeave = true;
                              leaveFight();
                           }]);
                        }]);
                     }]);
                  }]);
            }
         }
      }
      
      private static function gotoFirstLevelAgain() : void
      {
         SocketConnection.send(CommandID.GOLDEN_TWELVE_PALACE_LEAVE);
         SocketConnection.addCmdListener(CommandID.GOLDEN_TWELVE_PALACE_LEAVE,function(param1:SocketEvent):void
         {
            var e1:SocketEvent = param1;
            SocketConnection.removeCmdListener(CommandID.GOLDEN_TWELVE_PALACE_LEAVE,arguments.callee);
            _winTheBoss = false;
            _escapeFromFight = false;
            _isWinByUseBoss = false;
            _tempEidArr = null;
            _effectIdArr = null;
            PetFightModel.type = 0;
            SocketConnection.send(CommandID.GOLDEN_TWELVE_PALACE_ENTER,_palaceIndex);
            SocketConnection.addCmdListener(CommandID.GOLDEN_TWELVE_PALACE_ENTER,function(param1:SocketEvent):void
            {
               var by:ByteArray;
               var i:uint;
               var k:uint;
               var mte:MapTransEffect;
               var j:uint = 0;
               var e2:SocketEvent = param1;
               SocketConnection.removeCmdListener(CommandID.GOLDEN_TWELVE_PALACE_ENTER,arguments.callee);
               by = e2.data as ByteArray;
               _level = by.readUnsignedInt() + 1;
               _monID = by.readUnsignedInt();
               _tempEidArr = [];
               _effectIdArr = [];
               i = 0;
               while(i < 3)
               {
                  _tempEidArr.push(by.readUnsignedInt());
                  if(_tempEidArr[i] == 0)
                  {
                     break;
                  }
                  i++;
               }
               k = 0;
               while(k < _tempEidArr.length)
               {
                  j = 0;
                  while(j < _eidChangeArr.length)
                  {
                     if(_tempEidArr[k] == _eidChangeArr[j])
                     {
                        _effectIdArr.push(_eidChangeArr.indexOf(_eidChangeArr[j]));
                     }
                     j++;
                  }
                  k++;
               }
               LevelManager.closeMouseEvent();
               MainManager.actorModel.visible = false;
               MainManager.actorModel.alpha = 0;
               FightPetBagController.destroy();
               mte = new MapTransEffect(MapManager.currentMap,3);
               mte.addEventListener(MapEvent.MAP_EFFECT_COMPLETE,function(param1:MapEvent):void
               {
                  DisplayUtil.removeAllChild(LevelManager.appLevel);
                  DisplayUtil.removeAllChild(LevelManager.mapLevel);
                  LevelManager.mapLevel.addChild(MapManager.currentMap.root);
                  MainManager.actorModel.visible = true;
                  MainManager.actorModel.x = 395;
                  MainManager.actorModel.y = 440;
                  MainManager.actorModel.alpha = 1;
                  LevelManager.openMouseEvent();
                  (_map.conLevel["boss"] as MovieClip).mouseChildren = true;
                  (_map.conLevel["boss"] as MovieClip).mouseEnabled = true;
                  initMap(_level,_monID);
               });
               mte.star();
            });
         });
      }
      
      private static function onShowDrawPanel(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("GoldenTwelvePalaceLoteryDraw"),"正在打开面板……",_palaceIndex);
      }
      
      private static function playDialogAndMcInFirstLevel() : void
      {
         switch(_palaceIndex)
         {
            case 0:
            case 1:
               break;
            case 2:
               if(TasksManager.getTaskStatus(479) == TasksManager.COMPLETE)
               {
                  NpcDialog.show(NPC.JIEMINI,["嘻嘻，" + MainManager.actorInfo.formatNick + "，你果然又回来了，我这么好玩儿的精灵，你是不是很喜欢呀！"],["哈哈，因为你有很多礼物呀！"],[function():void
                  {
                     NpcDialog.show(NPC.JIEMINI,["嗯嗯，不过见面礼只能每天领一次哟！双子宫欢迎你来，欢迎你今天多来，更欢迎你明天再来！快快，我在第十层等你！"],["#1哈哈，你真有趣，像做广告一样！"],[function():void
                     {
                        ToolBarController.panel.hide();
                     }]);
                  }]);
               }
               else
               {
                  NpcDialog.show(NPC.JIEMINI,["嘻嘻，欢迎，欢迎，热烈欢迎！" + MainManager.actorInfo.formatNick + "，欢迎你前来双子宫做客，这是一点赛尔豆作为见面礼，快上来吧，我在第十层热情等候你！"],["哇塞，见面就送礼，好人，你真是好人！"],[function():void
                  {
                     ToolBarController.panel.hide();
                     TasksManager.accept(479,function(param1:Boolean):void
                     {
                        var b:Boolean = param1;
                        TasksManager.complete(479,0,function(param1:Boolean):void
                        {
                           var b1:Boolean = param1;
                           if(b1)
                           {
                              DebugTrace.show("输出500赛尔豆！");
                              NpcDialog.show(NPC.JIEMINI,["嘻嘻，见面礼肯定不能太多，0xff0000在第十层还会有超大礼物哦！0xffffff"],["#1好吧，那我就去第十层看看！"],[function():void
                              {
                                 ToolBarController.panel.hide();
                              }]);
                           }
                        });
                     });
                  }]);
               }
               break;
            case 3:
               NpcDialog.show(NPC.KAISIER,["我是一名战士，一名忠诚与勇敢的战士！"],["#10哇塞，气势逼人呀！"],[function():void
               {
                  NpcDialog.show(NPC.KAISIER,["敢问，你是否与我脾气相投，你是否是巨蟹座的？"],["我是巨蟹座，我要跟你来场战士间的战斗！","我不是巨蟹座，但是我也要挑战你！"],[function():void
                  {
                     NpcDialog.show(NPC.KAISIER,["嗯！你一定懂得巨蟹座的奥义，坚持走下去，我在第十层等你，0xff0000进入第十层即可获得上等体力药剂！0xffffff"],["#8嗯，我懂！"],[function():void
                     {
                        ToolBarController.panel.hide();
                     }]);
                  },function():void
                  {
                     NpcDialog.show(NPC.KAISIER,["不管你是哪个星座，坚持走下去，这是战士的精神！我在第十层等你，0xff0000进入第十层即可获得上等体力药剂！0xffffff"],["#8嗯，我懂！"],[function():void
                     {
                        ToolBarController.panel.hide();
                     }]);
                  }]);
               }]);
               break;
            case 4:
               NpcDialog.show(NPC.LIANGSI,["七月份的尾巴，它是狮子座！没错，就是我，十二宫最勇猛的战士——0xff0000利昂斯0xffffff！"],["#1嘿嘿，八月份的前奏，还是你！"],[function():void
               {
                  NpcDialog.show(NPC.LIANGSI,["我和十二宫别的守护者可不一样，你得三次打败我才能得到我的认可！0xff0000不过，每天在第一层，你都能获得一次英雄见面礼！0xffffff"],["我最喜欢送见面礼的大英雄啦！"],[function():void
                  {
                     ToolBarController.panel.hide();
                     if(TasksManager.getTaskStatus(476) != TasksManager.COMPLETE)
                     {
                        TasksManager.accept(476,function(param1:Boolean):void
                        {
                           var b:Boolean = param1;
                           TasksManager.complete(476,0,function(param1:Boolean):void
                           {
                              if(param1)
                              {
                                 DebugTrace.show("获得上等体力药剂*1");
                              }
                           });
                        });
                     }
                  }]);
               }]);
               break;
            case 5:
               NpcDialog.show(NPC.SHANSHAN,["你好，赛尔。你有什么愿望我都想满足你，因为不留遗憾才是完美！"],["嘿嘿，完美主义的精灵耶！"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["我喜欢你，我是来带你走的，0xff0000成为我的伙伴吧0xffffff！"],["呵呵"],[function():void
                  {
                     ToolBarController.panel.hide();
                     if(TasksManager.getTaskStatus(475) != TasksManager.COMPLETE)
                     {
                        TasksManager.accept(475,function(param1:Boolean):void
                        {
                           var b:Boolean = param1;
                           TasksManager.complete(475,0,function(param1:Boolean):void
                           {
                              if(param1)
                              {
                                 DebugTrace.show("获得上等体力药剂*1");
                              }
                           });
                        });
                     }
                  }]);
               }]);
               break;
            case 6:
               NpcDialog.show(NPC.LAIBOLA,["我将永远效忠于公平与正义，我愿成为他们的使徒并为之战斗，你可以叫我正义战士！"],["嗯嗯，我也最讨厌那些破坏规则的人了"],[function():void
               {
                  NpcDialog.show(NPC.LAIBOLA,["你愿意坚守公平的做事原则吗？你愿意为维护公平与正义而战斗吗？"],["我愿意"],[function():void
                  {
                     NpcDialog.show(NPC.LAIBOLA,["那么，我允许你成为我的伙伴。"],["嘻嘻，像你这么可爱的机械系精灵真是少见@。@"],[function():void
                     {
                        ToolBarController.panel.hide();
                        if(TasksManager.getTaskStatus(474) != TasksManager.COMPLETE)
                        {
                           TasksManager.accept(474,function(param1:Boolean):void
                           {
                              var b:Boolean = param1;
                              TasksManager.complete(474,0,function(param1:Boolean):void
                              {
                                 if(param1)
                                 {
                                    DebugTrace.show("获得上等体力药剂*1");
                                 }
                              });
                           });
                        }
                     }]);
                  }]);
               }]);
               break;
            case 7:
               NpcDialog.show(NPC.SIKAPU,["身为赛尔号上的勇士，如果你不将自己内心的恐惧给灭杀掉，你永远不可能0xff0000成为顶尖的战士，成为傲视的英雄0xffffff！"],["那我该怎么办呢？"],[function():void
               {
                  NpcDialog.show(NPC.SIKAPU,[MainManager.actorInfo.formatNick + "你需要的仅仅是勇气，一股敢于挑战的勇气！永远不向胜利者低头，永远不向强者妥协！"],["好吧，我的永不言败就从你开始吧！"],[function():void
                  {
                     NpcDialog.show(NPC.SIKAPU,["你千万不要畏惧我，不然你会被我的威严压得粉碎！"],["强者，我要挑战你！"],[function():void
                     {
                        ToolBarController.panel.hide();
                        if(TasksManager.getTaskStatus(473) != TasksManager.COMPLETE)
                        {
                           TasksManager.accept(473,function(param1:Boolean):void
                           {
                              var b:Boolean = param1;
                              TasksManager.complete(473,0,function(param1:Boolean):void
                              {
                                 if(param1)
                                 {
                                    DebugTrace.show("获得上等体力药剂*1");
                                 }
                              });
                           });
                        }
                     }]);
                  }]);
               }]);
               break;
            case 8:
               NpcDialog.show(NPC.SHISHI,["咦，你是谁？你看见利亚斯了吗？"],["利亚斯？你找星空之子干嘛..."],[function():void
               {
                  NpcDialog.show(NPC.SHISHI,["对呀对呀，星空之子利亚斯。我才不会告诉你，我们在玩儿做迷藏呢！！！"],["#3\t额，好吧，我是来挑战强者的！"],[function():void
                  {
                     NpcDialog.show(NPC.SHISHI,["这样呀，那你快上去吧，快上去让我爸爸打败你！我要继续玩儿捉迷藏了！"],["#8\t好有自信的样子啊！"],[function():void
                     {
                        ToolBarController.panel.hide();
                        if(TasksManager.getTaskStatus(497) != TasksManager.COMPLETE)
                        {
                           TasksManager.accept(497,function(param1:Boolean):void
                           {
                              var b:Boolean = param1;
                              TasksManager.complete(497,0,function(param1:Boolean):void
                              {
                                 if(param1)
                                 {
                                    DebugTrace.show("获得上等体力药剂*1");
                                 }
                              });
                           });
                        }
                     }]);
                  }]);
               }]);
               break;
            case 9:
               NpcDialog.show(NPC.CAPURUI,["咦，你是谁？难道你想伤害星空之子利亚斯吗？不可以，我绝对不允许！！"],["星空之子利亚斯？不，我是它的好朋友！！"],[function():void
               {
                  NpcDialog.show(NPC.CAPURUI,["星空之子是宇宙中神秘力量诞生的精灵，我们十二宫的守护者决不允许它受到任何伤害！"],["嗯嗯，星空之子虽然小，但它力量已经很强了，你放心吧！"],[function():void
                  {
                     NpcDialog.show(NPC.CAPURUI,["哈哈，看来你果然是星空之子的伙伴！来吧，让我试试你的力量，看你是否有资格和利亚斯做朋友！"],["#8\t好呀好呀！"],[function():void
                     {
                        ToolBarController.panel.hide();
                        if(TasksManager.getTaskStatus(498) != TasksManager.COMPLETE)
                        {
                           TasksManager.accept(498,function(param1:Boolean):void
                           {
                              var b:Boolean = param1;
                              TasksManager.complete(498,0,function(param1:Boolean):void
                              {
                                 if(param1)
                                 {
                                    DebugTrace.show("获得上等体力药剂*1");
                                 }
                              });
                           });
                        }
                     }]);
                  }]);
               }]);
               break;
            case 10:
               NpcDialog.show(NPC.AOKEWEI,["我一直在期待一个能得到我认可的赛尔勇士出现，我希望你就是！我的真身会在第10层等你，不要让我失望哟！"],["好，你燃起了我的斗志！！！"],[function():void
               {
                  ToolBarController.panel.hide();
                  if(TasksManager.getTaskStatus(499) != TasksManager.COMPLETE)
                  {
                     TasksManager.accept(499,function(param1:Boolean):void
                     {
                        var b:Boolean = param1;
                        TasksManager.complete(499,0,function(param1:Boolean):void
                        {
                           if(param1)
                           {
                              DebugTrace.show("获得上等体力药剂*1");
                           }
                        });
                     });
                  }
               }]);
               break;
            case 11:
               NpcDialog.show(NPC.PAIXISI,["竟然真的有赛尔能够闯到我们这片星域！" + MainManager.actorInfo.formatNick + "，你以为这里就是终结？你错了，黄金十二宫的最深处才刚刚开始！"],["什么，黄金十二宫背后到底有着什么秘密？"],[function():void
               {
                  NpcDialog.show(NPC.PAIXISI,["废话少说，先过了我这关再说！"],["嗯，我倒要看看你背后是什么秘密！"],[function():void
                  {
                     ToolBarController.panel.hide();
                     if(TasksManager.getTaskStatus(448) != TasksManager.COMPLETE)
                     {
                        TasksManager.accept(448,function(param1:Boolean):void
                        {
                           var b:Boolean = param1;
                           TasksManager.complete(448,0,function(param1:Boolean):void
                           {
                              if(param1)
                              {
                                 DebugTrace.show("获得上等体力药剂*1");
                              }
                           });
                        });
                     }
                  }]);
               }]);
               break;
            case 12:
               NpcDialog.show(NPC.KELAIMENTE,[MainManager.actorInfo.formatNick + "，你终于来了，我就是黄金十二宫最终的守卫，我在最后一层等着你，能不能见到我就看你的实力了！"],["我一定要击败你！"],[function():void
               {
                  ToolBarController.panel.hide();
                  if(TasksManager.getTaskStatus(449) != TasksManager.COMPLETE)
                  {
                     TasksManager.accept(449,function(param1:Boolean):void
                     {
                        var b:Boolean = param1;
                        TasksManager.complete(449,0,function(param1:Boolean):void
                        {
                           if(param1)
                           {
                              DebugTrace.show("获得上等体力药剂*1");
                           }
                        });
                     });
                  }
               }]);
         }
      }
      
      private static function playDialogAndMcInBossLevel() : void
      {
         switch(_palaceIndex)
         {
            case 0:
               NpcDialog.show(NPC.ALISI,["哼，" + MainManager.actorInfo.formatNick + "，我不知道你从何处得知我们黄金十二宫的存在，但是你绝对不该出现在这里，快离开吧。。。"],["切，我才不会让你知道是星空之子告诉我的。"],[function():void
               {
                  NpcDialog.show(NPC.ALISI,["哎！这个倒霉孩子，太调皮了，真拿它没办法！"],["它还告诉我你有小金库呢，哇咔咔！"],[function():void
                  {
                     NpcDialog.show(NPC.ALISI,["额，无语了。。。我拥有多种特性，实力深不可测，你还是别想打我金库的主意！"],["哼，战场上见分晓！"],[function():void
                     {
                        playMc();
                     }]);
                  }]);
               }]);
               break;
            case 1:
               NpcDialog.show(NPC.TUOLUOSI,["哇咔咔，听白羊宫的阿里斯说竟然有人闯入它的宫殿捣乱，刚开始我还不信，看到你来到这里，我终于相信了！怎么，想打架吗？"],["不不不，我只是来拿走你的金库的！"],[function():void
               {
                  NpcDialog.show(NPC.TUOLUOSI,["哼，我是多么的强大啊，整个宇宙中没有人是我的对手，你竟然还想拿走我的金库！怎么，想打架吗？"],["不不不，金库你留着，宝藏我拿走就行啦！"],[function():void
                  {
                     NpcDialog.show(NPC.TUOLUOSI,["虽然我的宝藏已经快被星空之子利亚斯偷偷拿完了，可是里边还有很多特性重组药剂的，还是不能给你！怎么，想打架吗？"],["额，那就打吧！"],[function():void
                     {
                        playMc();
                     }]);
                  }]);
               }]);
               break;
            case 2:
               NpcDialog.show(NPC.JIEMINI,["咳咳，来者何人，我最讨厌别人闯入我的领地了， 速速离开！！！"],["#7 咦，这是在一楼盛情邀请我上来的那个人吗？"],[function():void
               {
                  NpcDialog.show(NPC.JIEMINI,["什么，我邀请过你来做客吗？哎，最近的脾气好像变得太快了，连我自己都记不得了！总之，我很烦躁，你速速离开！"],["啊，说好的更多礼物呢！"],[function():void
                  {
                     NpcDialog.show(NPC.JIEMINI,["哈哈，你果然是贪图我的宝藏，还冒充什么我的客人！看招！"],["哎呀！这怎么就动手打人了！！"],[function():void
                     {
                        playMc();
                     }]);
                  }]);
               }]);
               break;
            case 3:
               NpcDialog.show(NPC.KAISIER,["我誓死效忠那位宇宙中的最强存在，我誓死为它守护巨蟹宫，为它守护星空之子。"],["#10哇，让人望而生畏的战士呀！"],[function():void
               {
                  NpcDialog.show(NPC.KAISIER,["我知道你来的目的，和我战斗吧！"],["嗯，爽快！"],[function():void
                  {
                     if(TasksManager.getTaskStatus(480) == TasksManager.COMPLETE)
                     {
                        playMc();
                     }
                     else
                     {
                        TasksManager.accept(480,function(param1:Boolean):void
                        {
                           var b:Boolean = param1;
                           TasksManager.complete(480,0,function(param1:Boolean):void
                           {
                              if(param1)
                              {
                                 DebugTrace.show("获得上等体力药剂*1");
                                 playMc();
                              }
                           });
                        });
                     }
                  }]);
               }]);
               break;
            case 4:
               NpcDialog.show(NPC.LIANGSI,["果然是英雄！你有资格做我的对手！"],["那么，你成为我的伙伴吧！"],[function():void
               {
                  NpcDialog.show(NPC.LIANGSI,["我是精灵中的战士，战士中的将军，忠诚是我的灵魂信条！0xff0000你要三次打败我，才能得到我的认可！0xffffff"],["战斗吧，狮子之王！"],[function():void
                  {
                     playMc();
                  }]);
               }]);
               break;
            case 10:
               NpcDialog.show(NPC.AOKEWEI,["你果然没有让我失望，来吧，和我来一场我期待已久的对决！"],["狭路相逢勇者胜！！！"],[function():void
               {
                  playMc();
               }]);
               break;
            default:
               playMc();
         }
      }
   }
}
