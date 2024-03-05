package com.robot.app.sceneInteraction
{
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.RoomFightStatAlarm;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.EventDispatcher;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class RoomPetManager extends EventDispatcher
   {
      
      private static var _instance:com.robot.app.sceneInteraction.RoomPetManager;
      
      public static var _isRoomFight:Boolean;
       
      
      private var _petMap:HashMap;
      
      private var _isget:Boolean;
      
      private var _panel:MovieClip;
      
      private var _item:MovieClip;
      
      public function RoomPetManager()
      {
         this._petMap = new HashMap();
         super();
      }
      
      public static function getInstance() : com.robot.app.sceneInteraction.RoomPetManager
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.sceneInteraction.RoomPetManager();
         }
         return _instance;
      }
      
      public static function destroy() : void
      {
         if(_instance)
         {
            _instance.destroy();
            _instance = null;
         }
      }
      
      public function getShowList(param1:uint) : void
      {
         if(this._isget)
         {
            dispatchEvent(new PetEvent(PetEvent.ROOM_PET_LIST,0));
            return;
         }
         SocketConnection.addCmdListener(CommandID.PET_ROOM_LIST,this.onList);
         SocketConnection.addCmdListener(CommandID.PET_ROOM_SHOW,this.onList);
         SocketConnection.addCmdListener(CommandID.PET_ROOM_INBAG,this.onInbag);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightCom);
         EventManager.addEventListener(RobotEvent.NO_PET_CAN_FIGHT,this.onFightError);
         SocketConnection.send(CommandID.PET_ROOM_LIST,param1);
      }
      
      public function getInfos() : Array
      {
         return this._petMap.getValues();
      }
      
      public function showOrHide(param1:PetListInfo, param2:Boolean) : Boolean
      {
         if(param2)
         {
            if(this._petMap.length == 5)
            {
               Alarm.show("你已经有5个精灵在展示，再添加的话，精灵会觉得很拥挤哦！");
               return false;
            }
            this._petMap.add(param1.catchTime,param1);
         }
         else if(!this._petMap.remove(param1.catchTime))
         {
            return false;
         }
         if(param2)
         {
            SocketConnection.send(CommandID.PET_ROOM_SHOW,param1.catchTime,param1.id,uint(param1.isBright),48);
         }
         else
         {
            SocketConnection.send(CommandID.PET_ROOM_INBAG,param1.catchTime,param1.id,uint(param1.isBright));
         }
         return true;
      }
      
      public function removePet(param1:uint) : void
      {
         if(this._petMap.remove(param1))
         {
            dispatchEvent(new PetEvent(PetEvent.ROOM_PET_SHOW,0));
         }
      }
      
      public function contains(param1:uint) : Boolean
      {
         return this._petMap.containsKey(param1);
      }
      
      public function getPetListInfo(param1:uint) : PetListInfo
      {
         return this._petMap.getValue(param1);
      }
      
      public function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.PET_ROOM_LIST,this.onList);
         SocketConnection.removeCmdListener(CommandID.PET_ROOM_SHOW,this.onList);
         SocketConnection.removeCmdListener(CommandID.PET_ROOM_INBAG,this.onInbag);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightCom);
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,this.onFightError);
         if(this._panel)
         {
            this._panel["okBtn"].removeEventListener(MouseEvent.CLICK,this.onCloseClick);
         }
         this._petMap = null;
      }
      
      private function onList(param1:SocketEvent) : void
      {
         var _loc5_:PetListInfo = null;
         this._petMap.clear();
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_)
         {
            (_loc5_ = new PetListInfo(_loc2_)).abilityType = _loc2_.readUnsignedInt();
            _loc5_.starTime = _loc2_.readUnsignedInt();
            _loc5_.duration = _loc2_.readUnsignedInt();
            this._petMap.add(_loc5_.catchTime,_loc5_);
            _loc4_++;
         }
         if(param1.headInfo.cmdID == CommandID.PET_ROOM_LIST)
         {
            this._isget = true;
            SocketConnection.removeCmdListener(CommandID.PET_ROOM_LIST,this.onList);
            dispatchEvent(new PetEvent(PetEvent.ROOM_PET_LIST,0));
         }
         else
         {
            dispatchEvent(new PetEvent(PetEvent.ROOM_PET_SHOW,0));
         }
      }
      
      private function onInbag(param1:SocketEvent) : void
      {
         dispatchEvent(new PetEvent(PetEvent.ROOM_PET_SHOW,0));
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.readUnsignedInt();
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         var _loc5_:uint = _loc2_.readUnsignedInt();
         Alarm2.show(PetXMLInfo.getName(_loc4_) + "已经收回了！");
      }
      
      private function onLoadComp(param1:DisplayObject) : void
      {
         param1.scaleX = param1.scaleY = 60 / param1.height;
         param1.x = (55 - param1.width) / 2;
         param1.y = (55 - param1.height) / 2;
         this._item["iconMC"].addChild(param1);
      }
      
      private function onCloseClick(param1:MouseEvent) : void
      {
         DisplayUtil.removeForParent(this._panel);
         this._panel["okBtn"].removeEventListener(MouseEvent.CLICK,this.onCloseClick);
      }
      
      private function onFightCom(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         if(_isRoomFight)
         {
            _isRoomFight = false;
            com.robot.app.sceneInteraction.RoomPetManager.getInstance().getFightStat(function(param1:Object):void
            {
               var _loc2_:Boolean = false;
               var _loc3_:FightOverInfo = e.dataObj as FightOverInfo;
               if(_loc3_.winnerID == MainManager.actorID)
               {
                  _loc2_ = true;
               }
               else
               {
                  _loc2_ = false;
               }
               RoomFightStatAlarm.show(param1.win,param1.lose,_loc2_);
            });
         }
      }
      
      private function onFightError(param1:RobotEvent) : void
      {
         _isRoomFight = false;
      }
      
      public function fightWithPet(param1:uint) : void
      {
         var ct:uint = param1;
         SocketConnection.addCmdListener(CommandID.PET_ROOM_FIGHT_NUM,function(param1:SocketEvent):void
         {
            var _loc7_:uint = 0;
            SocketConnection.removeCmdListener(CommandID.PET_ROOM_FIGHT_NUM,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            var _loc4_:uint;
            if((_loc4_ = _loc3_.readUnsignedInt()) >= 15)
            {
               Alarm.show("今天的15点挑战能量已被完全消耗，明天再继续挑战吧！");
               return;
            }
            var _loc5_:int = 0;
            var _loc6_:int = 0;
            while(_loc6_ < _loc4_)
            {
               if((_loc7_ = _loc3_.readUnsignedInt()) == MapManager.currentMap.id)
               {
                  _loc5_++;
               }
               _loc6_++;
            }
            if(_loc5_ >= 3)
            {
               Alarm.show("每天最多挑战同一个好友3次，找其他好友继续挑战吧！");
               return;
            }
            _isRoomFight = true;
            SocketConnection.send(CommandID.PET_ROOM_FIGHT,MapManager.currentMap.id,ct);
         });
         SocketConnection.send(CommandID.PET_ROOM_FIGHT_NUM);
      }
      
      public function getTodayFightNum(param1:Function) : void
      {
         var fun:Function = param1;
         SocketConnection.addCmdListener(CommandID.PET_ROOM_FIGHT_NUM,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.PET_ROOM_FIGHT_NUM,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            _loc3_.position = 0;
            var _loc4_:uint = _loc3_.readUnsignedInt();
            var _loc5_:int = 0;
            while(_loc5_ < _loc4_)
            {
               _loc3_.readUnsignedInt();
               _loc5_++;
            }
            fun(_loc4_);
         });
         SocketConnection.send(CommandID.PET_ROOM_FIGHT_NUM);
      }
      
      public function getFightInfo(param1:Function, param2:int = 0) : void
      {
         var fun:Function = param1;
         var type:int = param2;
         SocketConnection.addCmdListener(CommandID.PET_ROOM_FIGHT_INFO,function(param1:SocketEvent):void
         {
            var _loc8_:RoomPetFightInfo = null;
            SocketConnection.removeCmdListener(CommandID.PET_ROOM_FIGHT_INFO,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            var _loc4_:Array = new Array();
            var _loc5_:uint = _loc3_.readUnsignedInt();
            var _loc6_:uint = _loc3_.readUnsignedInt();
            var _loc7_:int = 0;
            while(_loc7_ < _loc6_)
            {
               _loc8_ = new RoomPetFightInfo(_loc3_);
               _loc4_.push(_loc8_);
               _loc7_++;
            }
            if(type == 0)
            {
               fun(_loc4_);
            }
            if(type == 1)
            {
               fun(_loc5_);
            }
         });
         SocketConnection.send(CommandID.PET_ROOM_FIGHT_INFO,type);
      }
      
      public function getFightStat(param1:Function) : void
      {
         var fun:Function = param1;
         SocketConnection.addCmdListener(CommandID.PET_ROOM_FIGHT_STAT,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.PET_ROOM_FIGHT_STAT,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            var _loc4_:Object;
            (_loc4_ = new Object()).win = _loc3_.readUnsignedInt();
            _loc4_.lose = _loc3_.readUnsignedInt();
            fun(_loc4_);
         });
         SocketConnection.send(CommandID.PET_ROOM_FIGHT_STAT);
      }
   }
}
