package com.robot.app.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class DarkSingerController
   {
      
      public static var _map:BaseMapProcess;
      
      private static var _mcForMap713:MovieClip;
      
      private static var _isGetState:Boolean;
      
      private static var _isGetStateOutTime:Boolean;
      
      private static var _bossStateArr:Array;
      
      private static var _bossMc:MovieClip;
      
      private static var _boxMc:MovieClip;
      
      private static const AC:ActivityControl = new ActivityControl([new CronTimeVo("*","*","19-25","2","*","2016")]);
       
      
      public function DarkSingerController()
      {
         super();
      }
      
      public static function get isActiveTime() : Boolean
      {
         return AC.isInActivityTime;
      }
      
      public static function initForMap713(param1:BaseMapProcess) : void
      {
         if(!AC.isIncoming && !AC.isPast)
         {
            _map = param1;
            _mcForMap713 = _map.conLevel["activity"];
            _bossMc = _map.conLevel["boss"];
            _boxMc = _map.conLevel["box"];
            _map.conLevel["yan"].mouseChildren = false;
            _map.conLevel["yan"].mouseEnabled = false;
            SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,checkCurrentState);
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,checkCurrentState);
            _map.conLevel["adBtn"].removeEventListener(MouseEvent.CLICK,onAdClick);
            _map.conLevel["adBtn"].addEventListener(MouseEvent.CLICK,onAdClick);
            ToolTipManager.add(_map.conLevel["adBtn"],"好心人的忠告");
            checkCurrentState(null);
         }
         else
         {
            (param1.conLevel["activity"] as MovieClip).visible = false;
            (param1.conLevel["boss"] as MovieClip).visible = false;
            (param1.conLevel["box"] as MovieClip).visible = false;
            (param1.conLevel["yan"] as MovieClip).visible = false;
            (param1.conLevel["men"] as MovieClip).visible = false;
            (param1.conLevel["adBtn"] as SimpleButton).visible = false;
         }
      }
      
      private static function onAdClick(param1:MouseEvent) : void
      {
         SocketConnection.send(1020,206);
         ModuleManager.showModule(ClientConfig.getAppModule("HeiangezheAdPanel"),"正在打开....");
      }
      
      private static function checkCurrentState(param1:SocketEvent) : void
      {
         var _loc2_:int = 0;
         var _loc3_:uint = 0;
         if(isActiveTime)
         {
            if(!_isGetState)
            {
               _isGetState = true;
               if(!BufferRecordManager.getState(MainManager.actorInfo,1038))
               {
                  _mcForMap713.gotoAndStop(3);
               }
               else
               {
                  _mcForMap713.visible = false;
               }
               _map.conLevel["yan"].gotoAndPlay(2);
               _loc2_ = 1;
               while(_loc2_ < 5)
               {
                  _bossMc["boss_" + _loc2_].removeEventListener(MouseEvent.CLICK,onBossClick);
                  _boxMc["box_" + _loc2_].removeEventListener(MouseEvent.CLICK,onBoxClick);
                  _bossMc["boss_" + _loc2_].addEventListener(MouseEvent.CLICK,onBossClick);
                  _boxMc["box_" + _loc2_].addEventListener(MouseEvent.CLICK,onBoxClick);
                  _loc2_++;
               }
               getBossState();
               _map.conLevel["men"].removeEventListener(MouseEvent.CLICK,onDoorClick);
               _map.conLevel["men"].addEventListener(MouseEvent.CLICK,onDoorClick);
               _map.conLevel["men"].buttonMode = true;
            }
         }
         else
         {
            outofActivityTime();
            _map.conLevel["men"].removeEventListener(MouseEvent.CLICK,onDoorClick);
            _map.conLevel["men"].buttonMode = false;
            _loc3_ = 1;
            while(_loc3_ < 5)
            {
               _bossMc["boss_" + _loc3_].removeEventListener(MouseEvent.CLICK,onBossClick);
               _boxMc["box_" + _loc3_].removeEventListener(MouseEvent.CLICK,onBoxClick);
               _loc3_++;
            }
         }
      }
      
      private static function onDoorClick(param1:MouseEvent) : void
      {
         SocketConnection.send(1020,208);
         SocketConnection.addCmdListener(CommandID.DUOLI_KEY_STATE,getKeyState);
         SocketConnection.send(CommandID.DUOLI_KEY_STATE);
      }
      
      private static function getKeyState(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.DUOLI_KEY_STATE,getKeyState);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == 0)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("HeiangezhePanel"),"正在打开....");
         }
         else if(_loc3_ == 1)
         {
            fightBossDuoLi();
         }
      }
      
      public static function fightBossDuoLi() : void
      {
         if(!BufferRecordManager.getState(MainManager.actorInfo,1038))
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         }
         FightManager.fightWithBoss("朵莉哈特",4);
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         info = e.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            _bossMc.visible = false;
            _boxMc.visible = false;
            AnimateManager.playMcAnimate(_mcForMap713,4,"mc4",function():void
            {
               _bossMc.visible = true;
               _boxMc.visible = true;
               _mcForMap713.gotoAndStop(3);
               BufferRecordManager.setState(MainManager.actorInfo,1038,true);
            });
         }
      }
      
      private static function setBossState(param1:SocketEvent) : void
      {
         _bossMc.visible = true;
         _boxMc.visible = true;
         _bossMc.buttonMode = true;
         _boxMc.buttonMode = true;
         SocketConnection.removeCmdListener(CommandID.DUOLI_BOSS_STATE,setBossState);
         _bossStateArr = [];
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = 0;
         while(_loc3_ < 4)
         {
            _bossStateArr.push(_loc2_.readUnsignedInt());
            _loc3_++;
         }
         initBoss();
      }
      
      private static function initBoss() : void
      {
         var _loc1_:uint = 0;
         while(_loc1_ < 4)
         {
            switch(_bossStateArr[_loc1_])
            {
               case 0:
                  _bossMc["boss_" + (_loc1_ + 1)].visible = true;
                  _boxMc["box_" + (_loc1_ + 1)].visible = true;
                  break;
               case 1:
                  _bossMc["boss_" + (_loc1_ + 1)].visible = false;
                  _boxMc["box_" + (_loc1_ + 1)].visible = true;
                  break;
               case 2:
                  _bossMc["boss_" + (_loc1_ + 1)].visible = false;
                  _boxMc["box_" + (_loc1_ + 1)].visible = false;
                  break;
            }
            _loc1_++;
         }
      }
      
      private static function onBossClick(param1:MouseEvent) : void
      {
         SocketConnection.send(1020,207);
         var _loc2_:String = String(param1.currentTarget.name);
         var _loc3_:uint = uint(int(_loc2_.split("_")[1]) - 1);
         FightManager.fightWithBoss("纳克",_loc3_);
      }
      
      private static function onBoxClick(param1:MouseEvent) : void
      {
         var s:String = null;
         var boxId:uint = 0;
         var event:MouseEvent = param1;
         SocketConnection.send(1020,207);
         s = String(event.currentTarget.name);
         boxId = uint(int(s.split("_")[1]));
         AnimateManager.playMcAnimate(_boxMc[s],2,"mc",function():void
         {
            _boxMc[s].visible = false;
            SocketConnection.addCmdListener(CommandID.DUOLI_OPEN_BOX,openBoxHandler);
            SocketConnection.send(CommandID.DUOLI_OPEN_BOX,boxId);
         });
      }
      
      private static function openBoxHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.DUOLI_OPEN_BOX,openBoxHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         switch(_loc3_)
         {
            case 1:
               Alarm.show("恭喜你获得了钥匙！");
               getBossState();
               break;
            case 2:
               Alarm.show("恭喜你获得了500赛尔豆！");
               MainManager.actorInfo.coins += 500;
               break;
            case 3:
               ItemInBagAlert.show(400064,"恭喜你获得了" + ItemXMLInfo.getName(400064) + "，已经放入了你的储物箱中！");
               break;
            case 4:
               Alarm.show("恭喜你获得了2000赛尔豆！");
               MainManager.actorInfo.coins += 2000;
         }
      }
      
      public static function getBossState() : void
      {
         SocketConnection.addCmdListener(CommandID.DUOLI_BOSS_STATE,setBossState);
         SocketConnection.send(CommandID.DUOLI_BOSS_STATE);
      }
      
      private static function outofActivityTime() : void
      {
         if(!_isGetStateOutTime)
         {
            _isGetStateOutTime = true;
            _bossMc.visible = false;
            _boxMc.visible = false;
            if(!BufferRecordManager.getState(MainManager.actorInfo,1044))
            {
               CommonUI.removeYellowExcal(_mcForMap713);
               CommonUI.addYellowExcal(_mcForMap713,0,0);
               _mcForMap713.gotoAndStop(1);
               _mcForMap713.buttonMode = true;
               _mcForMap713.addEventListener(MouseEvent.CLICK,onNpcClick);
            }
            else
            {
               _mcForMap713.gotoAndStop(2);
            }
         }
      }
      
      private static function onNpcClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         CommonUI.removeYellowExcal(_mcForMap713);
         _mcForMap713.removeEventListener(MouseEvent.CLICK,onNpcClick);
         AnimateManager.playMcAnimate(_mcForMap713,1,"mc1",function():void
         {
            NpcDialog.show(NPC.GELIN,["555，谁能救救我的好朋友。"],["你好呀，你为什么在哭呀？"],[function():void
            {
               NpcDialog.show(NPC.GELIN,["我的好朋友被叫朵莉哈特的坏人抓走了！"],["别担心，我会帮你的，怎么才能救它呢？"],[function():void
               {
                  NpcDialog.show(NPC.GELIN,["那边的警告牌里说，朵莉哈特的王座只有她的卫兵才有钥匙。"],["她的卫兵在哪里呢？"],[function():void
                  {
                     NpcDialog.show(NPC.GELIN,["你一定要前来救它呀!"],["别担心，到时候我一定会来救你的朋友！"],[function():void
                     {
                        BufferRecordManager.setState(MainManager.actorInfo,1044,true);
                        _mcForMap713.gotoAndStop(2);
                     }]);
                  }]);
               }]);
            }]);
         });
      }
      
      public static function destroy() : void
      {
         var _loc1_:int = 0;
         if(!_map)
         {
            return;
         }
         _loc1_ = 1;
         while(_loc1_ < 5)
         {
            _bossMc["boss_" + _loc1_].removeEventListener(MouseEvent.CLICK,onBossClick);
            _boxMc["box_" + _loc1_].removeEventListener(MouseEvent.CLICK,onBoxClick);
            _loc1_++;
         }
         _map.conLevel["men"].removeEventListener(MouseEvent.CLICK,onDoorClick);
         _mcForMap713.removeEventListener(MouseEvent.CLICK,onNpcClick);
         ToolTipManager.remove(_map.conLevel["adBtn"]);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,checkCurrentState);
         SocketConnection.removeCmdListener(CommandID.DUOLI_KEY_STATE,getKeyState);
         SocketConnection.removeCmdListener(CommandID.DUOLI_OPEN_BOX,openBoxHandler);
         SocketConnection.removeCmdListener(CommandID.DUOLI_BOSS_STATE,setBossState);
         _isGetState = false;
         _isGetStateOutTime = false;
         _bossMc = null;
         _boxMc = null;
         _mcForMap713 = null;
         _bossStateArr = [];
         _map = null;
      }
   }
}
