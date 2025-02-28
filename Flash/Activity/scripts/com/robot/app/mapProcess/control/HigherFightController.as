package com.robot.app.mapProcess.control
{
   import com.robot.app.control.PetEnvolutionController;
   import com.robot.app.fightLevel.FightPetBagController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.MapTransEffect;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alert;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class HigherFightController
   {
      
      private static var _map:BaseMapProcess;
      
      public static var level:uint;
      
      public static var isElite:Boolean;
      
      public static var monID:uint;
      
      public static var eidArr:Array;
      
      private static var isPlayMovie:Boolean = false;
      
      private static var _level:uint;
      
      private static var _isElite:Boolean;
      
      public static var _monID:uint;
      
      private static var _tempEidArr:Array = [];
      
      public static var _eidArr:Array = [];
      
      private static var _isSameMap:Boolean;
      
      private static var _eidChangeArr:Array = [113,7,53,2,1,269,116,270,259,260,70,72,71,73,58,117,1086,1213,192,1214];
      
      private static var _isWin:Boolean = false;
      
      private static var EffectTIPS:Array = ["伤害有所提升","受到伤害下降","技能命中自身几率下降","免疫异常状态","免疫能力下降","每回合恢复一定体力值","自身攻击速度提升","致命一击率提升","免疫物理攻击","免疫特殊攻击","随着体力下降，自身攻击提升","随着体力下降，自身特攻提升","随着体力下降，自身防御提升","随着体力下降，自身特防提升","招式无限","反弹一部分伤害","反馈自身的能力下降","所有技能都可以消除强化","双方都会流失体力","每次攻击都会吸取一定生命值"];
      
      private static var _isleave:Boolean;
      
      private static const PETID:Array = [[1116,1117],[1559,1560]];
       
      
      public function HigherFightController()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         var i:uint = 0;
         var j:uint = 0;
         var map:BaseMapProcess = param1;
         _map = map;
         _map.animatorLevel["bossAppear"].visible = false;
         _map.animatorLevel["foot"].visible = false;
         _map.conLevel["boss"].visible = false;
         _map.animatorLevel["ballAppear"].visible = false;
         _map.conLevel["numBall"]["ball_1"].visible = false;
         _map.conLevel["numBall"]["ball_2"].visible = false;
         _map.conLevel["numBall"]["ball_3"].visible = false;
         _map.conLevel["numBall"]["ball_4"].visible = false;
         _map.topLevel["level_con2"]["level_mc"].visible = false;
         _map.topLevel["level_con2"]["level_effect"].visible = false;
         _map.topLevel["level_con"]["level_mc"].visible = false;
         _map.topLevel["level_con"]["level_effect"].visible = false;
         ToolTipManager.add(_map.conLevel["level_map_mc"],"太空站");
         ToolTipManager.add(_map.conLevel["mosterMc"],"精灵背包");
         ToolTipManager.add(_map.conLevel["door"],"下一关");
         _map.conLevel["door"].buttonMode = true;
         _map.conLevel["level_map_mc"].addEventListener(MouseEvent.CLICK,onLevelMapHandler);
         _map.conLevel["mosterMc"].addEventListener(MouseEvent.CLICK,onMonsterHandler);
         if(!_isSameMap)
         {
            _tempEidArr = [];
            _eidArr = [];
            _isWin = false;
            _isSameMap = true;
            _level = level;
            _isElite = isElite;
            _monID = monID;
            i = 0;
            while(i < eidArr.length)
            {
               j = 0;
               while(j < _eidChangeArr.length)
               {
                  if(eidArr[i] == _eidChangeArr[j])
                  {
                     _eidArr.push(_eidChangeArr.indexOf(_eidChangeArr[j]));
                  }
                  j++;
               }
               i++;
            }
            if(!BufferRecordManager.getState(MainManager.actorInfo,239))
            {
               BufferRecordManager.setState(MainManager.actorInfo,239,true);
               CartoonManager.play(ClientConfig.getFullMovie("cartoon/higherFight"),function():void
               {
                  initMap();
               });
            }
            else
            {
               initMap();
            }
         }
      }
      
      private static function onLevelMapHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         Alert.show("确定要离开高阶战斗吗？如果中途退出的话，需要从头开始挑战哦！",function():void
         {
            _isleave = true;
            leaveFight();
         });
      }
      
      private static function onMonsterHandler(param1:MouseEvent) : void
      {
         FightPetBagController.show();
      }
      
      private static function initMap() : void
      {
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.hide();
         if(_isElite)
         {
            _isWin = false;
            _map.topLevel["level_con2"]["level_mc"].visible = true;
            _map.topLevel["level_con2"]["level_effect"].visible = true;
            AnimateManager.playMcAnimate(_map.topLevel["level_con2"]["level_effect"],0,"",function():void
            {
               _map.topLevel["level_con2"]["level_mc"].visible = false;
               _map.topLevel["level_con2"]["level_effect"].visible = false;
               playMc();
            });
         }
         else
         {
            _isWin = false;
            _map.topLevel["level_con"]["level_mc"].visible = true;
            _map.topLevel["level_con"]["level_effect"].visible = true;
            _map.topLevel["level_con"]["level_mc"].gotoAndStop(_level + 1);
            AnimateManager.playMcAnimate(_map.topLevel["level_con"]["level_effect"],0,"",function():void
            {
               _map.topLevel["level_con"]["level_mc"].visible = false;
               _map.topLevel["level_con"]["level_effect"].visible = false;
               playMc();
            });
         }
      }
      
      private static function playMc() : void
      {
         _map.animatorLevel["bossAppear"].visible = true;
         AnimateManager.playMcAnimate(_map.animatorLevel as MovieClip,1,"bossAppear",function():void
         {
            _map.animatorLevel["bossAppear"].visible = false;
            _map.animatorLevel["foot"].visible = true;
            _map.animatorLevel["foot"].gotoAndStop(_eidArr[0] + 1);
            loadBoss(_monID,function():void
            {
               (_map.conLevel["boss"] as MovieClip).mouseChildren = false;
               (_map.conLevel["boss"] as MovieClip).mouseEnabled = false;
               _map.animatorLevel["ballAppear"].visible = true;
               AnimateManager.playMcAnimate(_map.animatorLevel["ballAppear"],1,"mc1",function():void
               {
                  _map.animatorLevel["ballAppear"].visible = false;
                  _map.conLevel["numBall"]["ball_" + _eidArr.length].visible = true;
                  var _loc1_:uint = 0;
                  while(_loc1_ < _eidArr.length)
                  {
                     ToolTipManager.add(_map.conLevel["numBall"]["ball_" + _eidArr.length]["simple_" + _loc1_],EffectTIPS[_eidArr[_loc1_]]);
                     _map.conLevel["numBall"]["ball_" + _eidArr.length]["simple_" + _loc1_].gotoAndStop(_eidArr[_loc1_] + 1);
                     _loc1_++;
                  }
                  (_map.conLevel["boss"] as MovieClip).mouseChildren = true;
                  (_map.conLevel["boss"] as MovieClip).mouseEnabled = true;
               });
            });
         });
      }
      
      private static function loadBoss(param1:uint, param2:Function = null) : void
      {
         var id:uint = param1;
         var fun:Function = param2;
         _map.conLevel["boss"].visible = true;
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
            if(fun != null)
            {
               fun();
            }
         },"pet");
      }
      
      private static function onBossClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         (_map.conLevel["boss"] as MovieClip).mouseChildren = false;
         (_map.conLevel["boss"] as MovieClip).mouseEnabled = false;
         if(_level == 49)
         {
            SocketConnection.addCmdListener(CommandID.HIGHER_FIGHT_FIFTH_AGAIN_CHECK,function(param1:SocketEvent):void
            {
               var data:ByteArray;
               var result:uint;
               var e:SocketEvent = param1;
               SocketConnection.removeCmdListener(CommandID.HIGHER_FIGHT_FIFTH_AGAIN_CHECK,arguments.callee);
               data = e.data as ByteArray;
               data.position = 0;
               result = data.readUnsignedInt();
               if(result == 1)
               {
                  NpcDialog.show(NPC.BAERNUOSI,["你并没有将费奥德或巴尔诺斯带在背包中，把他们带在背包中再来挑战我吧！"],["好的，我知道了！"],[function():void
                  {
                     leaveFight();
                  }]);
               }
               else if(result == 2)
               {
                  NpcDialog.show(NPC.BAERNUOSI,["你没有足够的挑战令，我不会接受你的挑战的，快去收集吧！"],["好的，现在就去！"],[function():void
                  {
                     leaveFight();
                  }]);
               }
               else if(result == 0)
               {
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,handle);
                  PetFightModel.type = PetFightModel.HIGHER_FIGHT;
                  SocketConnection.addCmdListener(CommandID.HIGHER_FIGHT_FIGHTWITHBOSS,onSuccessHandler);
                  SocketConnection.send(CommandID.HIGHER_FIGHT_FIGHTWITHBOSS);
               }
            });
            SocketConnection.send(CommandID.HIGHER_FIGHT_FIFTH_AGAIN_CHECK);
         }
         else
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,handle);
            PetFightModel.type = PetFightModel.HIGHER_FIGHT;
            SocketConnection.addCmdListener(CommandID.HIGHER_FIGHT_FIGHTWITHBOSS,onSuccessHandler);
            SocketConnection.send(CommandID.HIGHER_FIGHT_FIGHTWITHBOSS);
         }
      }
      
      private static function onSuccessHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.HIGHER_FIGHT_FIGHTWITHBOSS,onSuccessHandler);
      }
      
      private static function handle(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var infos:Array = null;
         var i:int = 0;
         var k:int = 0;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,handle);
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
            if(_isElite)
            {
               SocketConnection.addCmdListener(CommandID.HIGHER_FIGHT_NEXT2,onNextLevelHandler);
               SocketConnection.send(CommandID.HIGHER_FIGHT_NEXT2);
            }
            else if(_level == 49)
            {
               infos = [];
               infos.push(PetEnvolutionController.hasNewSkillPetInBag(PETID[0]));
               infos.push(PetEnvolutionController.hasNewSkillPetInBag(PETID[1]));
               k = 0;
               i = 0;
               while(i < 2)
               {
                  if(infos[i] != null)
                  {
                     k++;
                  }
                  i++;
               }
               if(k == 0)
               {
                  NpcDialog.show(NPC.BAERNUOSI,["下次将费奥德或巴尔诺斯带在背包中，再来挑战我，就有可能提升他们的个体哦！"],null,null,false,function():void
                  {
                     LevelManager.iconLevel.visible = false;
                     ToolBarController.panel.hide();
                     leaveFight();
                  });
               }
               else
               {
                  NpcDialog.show(NPC.BAERNUOSI,["呵呵，干得不错啊！现在选择你想要提升个体的精灵吧！"],null,null,false,function():void
                  {
                     LevelManager.iconLevel.visible = false;
                     ToolBarController.panel.hide();
                     ModuleManager.showModule(ClientConfig.getAppModule("HigherFight_abilityUp"),"正在打开……",infos);
                  });
               }
            }
            else
            {
               SocketConnection.addCmdListener(CommandID.HIGHER_FIGHT_NEXT,onNextLevelHandler);
               SocketConnection.send(CommandID.HIGHER_FIGHT_NEXT);
            }
         }
         else if(_isElite)
         {
            SocketConnection.addCmdListener(CommandID.HIGHER_FIGHT_NEXT2,onNextLevelHandler);
            SocketConnection.send(CommandID.HIGHER_FIGHT_NEXT2);
         }
         else if(_level == 49)
         {
            NpcDialog.show(NPC.BAERNUOSI,[MainManager.actorInfo.formatNick + "你的实力还不足以击败我，继续努力吧！"],["我一定会再回来挑战你的！"],[function():void
            {
               leaveFight();
            }]);
         }
         else
         {
            leaveFight();
         }
      }
      
      public static function leaveFight() : void
      {
         SocketConnection.addCmdListener(CommandID.HIGHER_FIGHT_LEAVE,onLeaveFightHandler);
         SocketConnection.send(CommandID.HIGHER_FIGHT_LEAVE);
      }
      
      private static function onLeaveFightHandler(param1:SocketEvent) : void
      {
         var e:SocketEvent = param1;
         if((_map.conLevel["boss"] as MovieClip).numChildren == 1)
         {
            (_map.conLevel["boss"] as MovieClip).removeChildAt(0);
         }
         SocketConnection.removeCmdListener(CommandID.HIGHER_FIGHT_LEAVE,onLeaveFightHandler);
         _isSameMap = false;
         if(_isWin == false)
         {
            if(_isleave)
            {
               _isleave = false;
            }
            else
            {
               Alert.show("很遗憾，这次挑战你失败了，你可以从" + (int(_level / 10) * 10 + 1) + "层开始挑战，要继续挑战吗？",function():void
               {
                  reStart();
               });
            }
         }
         else
         {
            _isWin = false;
         }
         PetFightModel.type = 0;
         ToolBarController.panel.show();
         LevelManager.iconLevel.visible = true;
         MapManager.changeMap(503);
      }
      
      private static function onNextLevelHandler(param1:SocketEvent) : void
      {
         var _loc6_:uint = 0;
         SocketConnection.removeCmdListener(CommandID.HIGHER_FIGHT_NEXT,onNextLevelHandler);
         SocketConnection.removeCmdListener(CommandID.HIGHER_FIGHT_NEXT2,onNextLevelHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         _monID = _loc2_.readUnsignedInt();
         _tempEidArr = [];
         _eidArr = [];
         if(_loc3_ == 0)
         {
            _isElite = false;
         }
         else
         {
            _isElite = true;
         }
         var _loc4_:uint = 0;
         while(_loc4_ < 4)
         {
            _tempEidArr.push(_loc2_.readUnsignedInt());
            if(_tempEidArr[_loc4_] == 0)
            {
               break;
            }
            _loc4_++;
         }
         var _loc5_:uint = 0;
         while(_loc5_ < _tempEidArr.length)
         {
            _loc6_ = 0;
            while(_loc6_ < _eidChangeArr.length)
            {
               if(_tempEidArr[_loc5_] == _eidChangeArr[_loc6_])
               {
                  _eidArr.push(_eidChangeArr.indexOf(_eidChangeArr[_loc6_]));
               }
               _loc6_++;
            }
            _loc5_++;
         }
         if(!_isElite)
         {
            ++_level;
            if(_level >= 50)
            {
               leaveFight();
            }
            else
            {
               _map.conLevel["door"].mouseEnabled = true;
               _map.conLevel["door"].addEventListener(MouseEvent.CLICK,goUPFloor);
            }
         }
         else
         {
            initMap();
         }
      }
      
      private static function reStart() : void
      {
         _isSameMap = true;
         SocketConnection.addCmdListener(CommandID.HIGHER_FIGHT_ENTER,onReStartHandler);
         SocketConnection.send(CommandID.HIGHER_FIGHT_ENTER,int(_level / 10));
         _level = int(_level / 10) * 10;
      }
      
      private static function onReStartHandler(param1:SocketEvent) : void
      {
         var _loc6_:uint = 0;
         MapManager.changeLocalMap(10093);
         SocketConnection.removeCmdListener(CommandID.HIGHER_FIGHT_ENTER,onReStartHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         _monID = _loc2_.readUnsignedInt();
         _tempEidArr = [];
         _eidArr = [];
         if(_loc3_ == 0)
         {
            _isElite = false;
         }
         else
         {
            _isElite = true;
         }
         var _loc4_:uint = 0;
         while(_loc4_ < 4)
         {
            _tempEidArr.push(_loc2_.readUnsignedInt());
            if(_tempEidArr[_loc4_] == 0)
            {
               break;
            }
            _loc4_++;
         }
         var _loc5_:uint = 0;
         while(_loc5_ < _tempEidArr.length)
         {
            _loc6_ = 0;
            while(_loc6_ < _eidChangeArr.length)
            {
               if(_tempEidArr[_loc5_] == _eidChangeArr[_loc6_])
               {
                  _eidArr.push(_eidChangeArr.indexOf(_eidChangeArr[_loc6_]));
               }
               _loc6_++;
            }
            _loc5_++;
         }
         initMap();
      }
      
      public static function goUPFloor(param1:MouseEvent) : void
      {
         var mte:MapTransEffect;
         var e:MouseEvent = param1;
         _map.conLevel["door"].mouseEnabled = false;
         _map.conLevel["door"].removeEventListener(MouseEvent.CLICK,goUPFloor);
         FightPetBagController.destroy();
         MainManager.actorModel.visible = false;
         MainManager.actorModel.alpha = 0;
         mte = new MapTransEffect(MapManager.currentMap,1);
         mte.addEventListener(MapEvent.MAP_EFFECT_COMPLETE,function(param1:MapEvent):void
         {
            DisplayUtil.removeAllChild(LevelManager.appLevel);
            DisplayUtil.removeAllChild(LevelManager.mapLevel);
            LevelManager.mapLevel.addChild(MapManager.currentMap.root);
            MainManager.actorModel.visible = true;
            MainManager.actorModel.x = 480;
            MainManager.actorModel.y = 450;
            MainManager.actorModel.alpha = 1;
            initMap();
         });
         mte.star();
      }
   }
}
