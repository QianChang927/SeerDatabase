package com.robot.app.control
{
   import com.robot.app.panel.FightMatchingPanel;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.map.MapType;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.UserState;
   import flash.display.MovieClip;
   import flash.utils.ByteArray;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   
   public class FightArenaController
   {
      
      public static var stopSwitch_enter:Boolean;
      
      public static var stopSwitch_leave:Boolean;
      
      private static var signature:ByteArray;
      
      private static var _isWin:Boolean;
      
      private static var _point:uint;
      
      private static var _itemNum:uint;
      
      private static var _hasMedal:Boolean;
       
      
      public function FightArenaController()
      {
         super();
      }
      
      public static function startFight() : void
      {
         register();
         SocketConnection.send(1022,86048908);
      }
      
      private static function register() : void
      {
         SocketConnection.addCmdListener(CommandID.LEAVE_MAP,function(param1:SocketEvent):void
         {
            var _loc5_:uint = 0;
            var _loc3_:ByteArray = param1.data as ByteArray;
            _loc3_.position = 0;
            var _loc4_:uint;
            if((_loc4_ = _loc3_.readUnsignedInt()) == MainManager.actorID)
            {
               SocketConnection.removeCmdListener(CommandID.LEAVE_MAP,arguments.callee);
               stopSwitch_enter = true;
               SocketConnection.addCmdListener(CommandID.ENTER_MAP,onEnterRoom);
               if(PetManager.showInfo)
               {
                  _loc5_ = uint(PetManager.showInfo.catchTime);
               }
               SocketConnection.send(CommandID.ROOM_LOGIN,_loc5_,MapType.FIGHT_ARENA,MainManager.actorID,0,0);
            }
         });
         stopSwitch_leave = true;
         SocketConnection.send(CommandID.LEAVE_MAP);
      }
      
      private static function onEnterRoom(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 4;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == MainManager.actorID)
         {
            SocketConnection.removeCmdListener(CommandID.ENTER_MAP,onEnterRoom);
            startFightArena();
         }
      }
      
      private static function startFightArena() : void
      {
         SocketConnection.addCmdListener(CommandID.FIGHTARENA_SIGNUP,onSignUp);
         SocketConnection.addCmdListener(CommandID.FIGHTARENA_SUCCESS,onSuccess);
         SocketConnection.addCmdListener(CommandID.FIGHTARENA_READY,onReady);
         SocketConnection.addCmdListener(CommandID.FIGHTARENA_CHOICE_PET,onChoicePet);
         SocketConnection.addCmdListener(CommandID.FIGHTARENA_CHOICE_COMPLETE,onChoiceComplete);
         SocketConnection.addCmdListener(CommandID.FIGHTARENA_CANCEL,onCancel);
         SocketConnection.addCmdListener(CommandID.FIGHTARENA_FINISH,onFinish);
         SocketConnection.addCmdListener(CommandID.FIGHTARENA_REWARD,onReward);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         SocketConnection.send(CommandID.FIGHTARENA_SIGNUP);
      }
      
      private static function onSignUp(param1:SocketEvent) : void
      {
         DebugTrace.show("========== SIGNUP ==========");
         FightMatchingPanel.show(onCloseClick);
      }
      
      private static function onCloseClick() : void
      {
         SocketConnection.send(CommandID.FIGHTARENA_CANCEL);
      }
      
      private static function onReady(param1:SocketEvent) : void
      {
         DebugTrace.show("========== READY ==========");
      }
      
      private static function onSuccess(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var type:int = 0;
         var mapID:int = 0;
         var e:SocketEvent = param1;
         DebugTrace.show("========== SUCCESS ==========");
         signature = new ByteArray();
         data = e.data as ByteArray;
         data.readBytes(signature,0,16);
         type = int(data.readUnsignedInt());
         mapID = int(data.readUnsignedInt());
         SocketConnection.addCmdListener(CommandID.LEAVE_MAP,function(param1:SocketEvent):void
         {
            var _loc5_:uint = 0;
            var _loc3_:ByteArray = param1.data as ByteArray;
            _loc3_.position = 0;
            var _loc4_:uint;
            if((_loc4_ = _loc3_.readUnsignedInt()) == MainManager.actorID)
            {
               SocketConnection.removeCmdListener(CommandID.LEAVE_MAP,arguments.callee);
               stopSwitch_enter = true;
               SocketConnection.addCmdListener(CommandID.ENTER_MAP,onChangeRoom);
               if(PetManager.showInfo)
               {
                  _loc5_ = uint(PetManager.showInfo.catchTime);
               }
               SocketConnection.send(CommandID.ENTER_MAP,type,mapID,0,0);
            }
         });
         stopSwitch_leave = true;
         SocketConnection.send(CommandID.LEAVE_MAP);
      }
      
      private static function onChangeRoom(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 4;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == MainManager.actorID)
         {
            SocketConnection.removeCmdListener(CommandID.ENTER_MAP,onChangeRoom);
            SocketConnection.send(CommandID.FIGHTARENA_READY,signature);
         }
      }
      
      private static function onChoicePet(param1:SocketEvent) : void
      {
         DebugTrace.show("========== CHOICE PET ==========");
         FightMatchingPanel.hide();
         PetFightModel.type = PetFightModel.FIGHT_ARENA;
         PetFightModel.status = PetFightModel.FIGHT_WITH_PLAYER;
         var _loc2_:Array = [];
         var _loc3_:ByteArray = param1.data as ByteArray;
         var _loc4_:uint = 0;
         while(_loc4_ < 7)
         {
            _loc2_.push(_loc3_.readUnsignedInt());
            _loc4_++;
         }
         ModuleManager.showModule(ClientConfig.getAppModule("polaris/PolarisChoicePetPanel"),"正在加载面板....",_loc2_);
         SocketConnection.send(1022,86048909);
      }
      
      private static function onChoiceComplete(param1:SocketEvent) : void
      {
         DebugTrace.show("========== CHOICE COMPLETE ==========");
      }
      
      private static function onCancel(param1:SocketEvent) : void
      {
         DebugTrace.show("========== CANCEL ==========");
         leaveMap();
      }
      
      private static function onFinish(param1:SocketEvent) : void
      {
         DebugTrace.show("========== FINISH ==========");
         ModuleManager.destroy(ClientConfig.getAppModule("polaris/PolarisChoicePetPanel"));
         FightMatchingPanel.hide();
         Alarm.show("对手逃跑了！",leaveMap);
      }
      
      private static function onReward(param1:SocketEvent) : void
      {
         DebugTrace.show("========== REWARD ==========");
         var _loc2_:ByteArray = param1.data as ByteArray;
         _isWin = Boolean(_loc2_.readUnsignedInt());
         _point = _loc2_.readUnsignedInt();
         _itemNum = _loc2_.readUnsignedInt();
         _hasMedal = Boolean(_loc2_.readUnsignedInt());
         FightMatchingPanel.hide();
         if(MainManager.actorState == UserState.MAP)
         {
            showAlarm();
         }
      }
      
      public static function choiceComplete(param1:Array) : void
      {
         SocketConnection.send(CommandID.FIGHTARENA_CHOICE_COMPLETE,param1[0],param1[1],param1[2]);
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         leaveMap();
         showAlarm();
      }
      
      private static function showAlarm() : void
      {
         var p:MovieClip = null;
      }
      
      private static function leaveMap() : void
      {
         destory();
         stopSwitch_leave = true;
         SocketConnection.addCmdListener(CommandID.LEAVE_MAP,onLeaveMap);
         SocketConnection.send(CommandID.LEAVE_MAP);
      }
      
      private static function onLeaveMap(param1:SocketEvent) : void
      {
         var _loc4_:uint = 0;
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == MainManager.actorID)
         {
            SocketConnection.removeCmdListener(CommandID.LEAVE_MAP,onLeaveMap);
            stopSwitch_enter = true;
            if(PetManager.showInfo)
            {
               _loc4_ = uint(PetManager.showInfo.catchTime);
            }
            SocketConnection.send(CommandID.LEAVE_ROOM,1,19,_loc4_,MainManager.actorInfo.changeShape,MainManager.actorInfo.actionType);
         }
      }
      
      private static function destory() : void
      {
         PetFightModel.type = 0;
         SocketConnection.removeCmdListener(CommandID.FIGHTARENA_SIGNUP,onSignUp);
         SocketConnection.removeCmdListener(CommandID.FIGHTARENA_SUCCESS,onSuccess);
         SocketConnection.removeCmdListener(CommandID.FIGHTARENA_READY,onReady);
         SocketConnection.removeCmdListener(CommandID.FIGHTARENA_CHOICE_PET,onChoicePet);
         SocketConnection.removeCmdListener(CommandID.FIGHTARENA_CHOICE_COMPLETE,onChoiceComplete);
         SocketConnection.removeCmdListener(CommandID.FIGHTARENA_CANCEL,onCancel);
         SocketConnection.removeCmdListener(CommandID.FIGHTARENA_FINISH,onFinish);
         SocketConnection.removeCmdListener(CommandID.FIGHTARENA_REWARD,onReward);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
      }
   }
}
