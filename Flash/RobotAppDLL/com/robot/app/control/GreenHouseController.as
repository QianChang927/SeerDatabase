package com.robot.app.control
{
   import com.robot.app.info.greenHouse.GreenHousePlantInfo;
   import com.robot.app.info.greenHouse.GreenHouseUserInfo;
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.ui.alert.SimpleAlarm;
   import flash.events.EventDispatcher;
   import flash.events.TimerEvent;
   import flash.utils.ByteArray;
   import flash.utils.Timer;
   import flash.utils.getDefinitionByName;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   
   public class GreenHouseController extends EventDispatcher
   {
      
      public static const USER_UPDATE:String = "user_update";
      
      public static const PLANT_UPDATE:String = "plant_update";
      
      public static const PLANTING:String = "planting";
      
      public static const ENERGYING:String = "energying";
      
      public static const WATERING:String = "watering";
      
      public static const REMOVEING:String = "removeing";
      
      public static const REAPING:String = "reaping";
      
      public static const RECLAIMING:String = "reclaiming";
      
      public static const USE_FRUIT:String = "use_fruit";
      
      private static var _instance:com.robot.app.control.GreenHouseController;
       
      
      private var _timer:Timer;
      
      private var _user:GreenHouseUserInfo;
      
      private var _plant:Array;
      
      public function GreenHouseController()
      {
         super();
         SocketConnection.addCmdListener(CommandID.GREEN_HOUSE_TO_ENERGY,this.onToEnergy);
         SocketConnection.addCmdListener(CommandID.GREEN_HOUSE_GET_USER_INFO,this.onGetUserInfo);
         SocketConnection.addCmdListener(CommandID.GREEN_HOUSE_GET_PLANT_INFO,this.onGetPlantInfo);
         SocketConnection.addCmdListener(CommandID.GREEN_HOUSE_PLANTING,this.onPlanting);
         SocketConnection.addCmdListener(CommandID.GREEN_HOUSE_ENERGYING,this.onEnergying);
         SocketConnection.addCmdListener(CommandID.GREEN_HOUSE_WATERING,this.onWatering);
         SocketConnection.addCmdListener(CommandID.GREEN_HOUSE_REMOVEING,this.onRemoveing);
         SocketConnection.addCmdListener(CommandID.GREEN_HOUSE_REAPING,this.onReaping);
         SocketConnection.addCmdListener(CommandID.GREEN_HOUSE_RECLAIMING,this.onReclaiming);
      }
      
      public static function getInstance() : com.robot.app.control.GreenHouseController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.control.GreenHouseController();
         }
         return _instance;
      }
      
      public function startTimer() : void
      {
         if(this._timer == null)
         {
            this._timer = new Timer(6000000);
            this._timer.addEventListener(TimerEvent.TIMER,this.onTimer);
         }
         this._timer.start();
      }
      
      public function stopTimer() : void
      {
         this._timer.reset();
      }
      
      private function onTimer(param1:TimerEvent) : void
      {
         this.getUserInfo(this._user.userId);
         this.GetPlantInfo(this._user.userId);
      }
      
      private function onToEnergy(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.readUnsignedInt();
         this._user.energy = _loc2_.readUnsignedInt();
         Alarm.show("消耗了" + _loc2_.readUnsignedInt() + "个" + ItemXMLInfo.getName(_loc2_.readUnsignedInt()) + "，获得" + _loc2_.readUnsignedInt() + "点肥料值。");
         dispatchEvent(new DynamicEvent(USER_UPDATE,this._user));
      }
      
      private function onGetUserInfo(param1:SocketEvent) : void
      {
         this._user = new GreenHouseUserInfo();
         var _loc2_:ByteArray = param1.data as ByteArray;
         this._user.userId = _loc2_.readUnsignedInt();
         this._user.energy = _loc2_.readUnsignedInt();
         this._user.water = _loc2_.readUnsignedInt();
         this._user.level = _loc2_.readUnsignedInt();
         this._user.exp = _loc2_.readUnsignedInt();
         this._user.expTotal = _loc2_.readUnsignedInt();
         this._user.newLand = _loc2_.readUnsignedInt();
         dispatchEvent(new DynamicEvent(USER_UPDATE,this._user));
      }
      
      private function onGetPlantInfo(param1:SocketEvent) : void
      {
         var _loc5_:GreenHousePlantInfo = null;
         this._plant = [];
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.readUnsignedInt();
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = 0;
         while(_loc4_ < _loc3_)
         {
            (_loc5_ = new GreenHousePlantInfo()).index = _loc2_.readUnsignedInt();
            _loc5_.status = _loc2_.readUnsignedInt();
            _loc5_.id = _loc2_.readUnsignedInt();
            _loc5_.energy = _loc2_.readUnsignedInt();
            _loc5_.water = _loc2_.readUnsignedInt();
            _loc5_.growPercent = _loc2_.readUnsignedInt();
            this._plant.push(_loc5_);
            _loc4_++;
         }
         dispatchEvent(new DynamicEvent(PLANT_UPDATE,this._plant));
      }
      
      private function onPlanting(param1:SocketEvent) : void
      {
         var _loc2_:GreenHousePlantInfo = new GreenHousePlantInfo();
         var _loc3_:ByteArray = param1.data as ByteArray;
         _loc3_.readUnsignedInt();
         _loc2_.index = _loc3_.readUnsignedInt();
         _loc2_.id = _loc3_.readUnsignedInt();
         _loc2_.energy = _loc3_.readUnsignedInt();
         _loc2_.water = _loc3_.readUnsignedInt();
         _loc2_.growPercent = _loc3_.readUnsignedInt();
         dispatchEvent(new DynamicEvent(PLANTING,_loc2_));
      }
      
      private function onEnergying(param1:SocketEvent) : void
      {
         var _loc2_:GreenHousePlantInfo = new GreenHousePlantInfo();
         var _loc3_:ByteArray = param1.data as ByteArray;
         _loc3_.readUnsignedInt();
         this._user.energy = _loc3_.readUnsignedInt();
         _loc2_.index = _loc3_.readUnsignedInt();
         _loc2_.id = _loc3_.readUnsignedInt();
         _loc2_.energy = _loc3_.readUnsignedInt();
         _loc2_.water = _loc3_.readUnsignedInt();
         _loc2_.growPercent = _loc3_.readUnsignedInt();
         dispatchEvent(new DynamicEvent(USER_UPDATE,this._user));
         dispatchEvent(new DynamicEvent(ENERGYING,_loc2_));
      }
      
      private function onWatering(param1:SocketEvent) : void
      {
         var _loc2_:GreenHousePlantInfo = new GreenHousePlantInfo();
         var _loc3_:ByteArray = param1.data as ByteArray;
         _loc3_.readUnsignedInt();
         this._user.water = _loc3_.readUnsignedInt();
         _loc2_.index = _loc3_.readUnsignedInt();
         _loc2_.id = _loc3_.readUnsignedInt();
         _loc2_.energy = _loc3_.readUnsignedInt();
         _loc2_.water = _loc3_.readUnsignedInt();
         _loc2_.growPercent = _loc3_.readUnsignedInt();
         dispatchEvent(new DynamicEvent(USER_UPDATE,this._user));
         dispatchEvent(new DynamicEvent(WATERING,_loc2_));
      }
      
      private function onRemoveing(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.readUnsignedInt();
         var _loc3_:uint = _loc2_.readUnsignedInt();
         dispatchEvent(new DynamicEvent(REMOVEING,_loc3_));
      }
      
      private function onReaping(param1:SocketEvent) : void
      {
         var index:uint;
         var id:uint;
         var exp:uint = 0;
         var e:SocketEvent = param1;
         var b:ByteArray = e.data as ByteArray;
         b.readUnsignedInt();
         index = b.readUnsignedInt();
         id = b.readUnsignedInt();
         this._user.level = b.readUnsignedInt();
         exp = b.readUnsignedInt();
         this._user.exp = b.readUnsignedInt();
         this._user.expTotal = b.readUnsignedInt();
         ItemInBagAlert.show(id,"你获得了一个" + ItemXMLInfo.getName(id) + "！",function():void
         {
            SimpleAlarm.show("你获得了" + exp + "点种植经验！");
         });
         dispatchEvent(new DynamicEvent(USER_UPDATE,this._user));
         dispatchEvent(new DynamicEvent(REAPING,index));
      }
      
      private function onReclaiming(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.readUnsignedInt();
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         var _loc5_:uint = _loc2_.readUnsignedInt();
         if(_loc4_ == 0)
         {
            SimpleAlarm.show("你的种植等级需要达到" + _loc5_ + "级才能开垦新的土地！",true);
         }
         else
         {
            ++this._user.newLand;
            dispatchEvent(new DynamicEvent(USER_UPDATE,this._user));
            dispatchEvent(new DynamicEvent(RECLAIMING,_loc3_));
            SimpleAlarm.show("恭喜你开垦了一块新的土地，赶快去种植神奇的种子吧！");
         }
      }
      
      public function toEnergy(param1:uint, param2:uint, param3:uint) : void
      {
         SocketConnection.send(CommandID.GREEN_HOUSE_TO_ENERGY,param1,param2,param3);
      }
      
      public function getUserInfo(param1:uint) : void
      {
         SocketConnection.send(CommandID.GREEN_HOUSE_GET_USER_INFO,param1);
      }
      
      public function GetPlantInfo(param1:uint) : void
      {
         SocketConnection.send(CommandID.GREEN_HOUSE_GET_PLANT_INFO,param1);
      }
      
      public function planting(param1:uint, param2:uint, param3:uint) : void
      {
         SocketConnection.send(CommandID.GREEN_HOUSE_PLANTING,param1,param2,param3);
      }
      
      public function energying(param1:uint, param2:uint) : void
      {
         SocketConnection.send(CommandID.GREEN_HOUSE_ENERGYING,param1,param2);
      }
      
      public function watering(param1:uint, param2:uint) : void
      {
         SocketConnection.send(CommandID.GREEN_HOUSE_WATERING,param1,param2);
      }
      
      public function removeing(param1:uint, param2:uint) : void
      {
         SocketConnection.send(CommandID.GREEN_HOUSE_REMOVEING,param1,param2);
      }
      
      public function reaping(param1:uint, param2:uint) : void
      {
         SocketConnection.send(CommandID.GREEN_HOUSE_REAPING,param1,param2);
      }
      
      public function reclaiming(param1:uint, param2:uint) : void
      {
         SocketConnection.send(CommandID.GREEN_HOUSE_RECLAIMING,param1,param2);
      }
      
      public function useFruit(param1:uint, param2:PetInfo) : void
      {
         var obj:Object;
         var itemID:uint = param1;
         var petInfo:PetInfo = param2;
         var propInfo:PetPropInfo = new PetPropInfo();
         propInfo.itemId = itemID;
         propInfo.petInfo = petInfo;
         propInfo.itemName = PetXMLInfo.getName(petInfo.id);
         obj = getDefinitionByName("com.robot.app.petbag.petPropsBag.petPropClass.PetPropClass_" + itemID);
         if(obj)
         {
            SocketConnection.addCmdListener(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,arguments.callee);
               Alarm.show("物品使用成功！");
               dispatchEvent(new DynamicEvent(USE_FRUIT,itemID));
            });
            SocketConnection.addCmdListener(CommandID.USE_PET_ITEM_INCREASE_STUDY,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(CommandID.USE_PET_ITEM_INCREASE_STUDY,arguments.callee);
               Alarm.show("物品使用成功！");
               dispatchEvent(new DynamicEvent(USE_FRUIT,itemID));
            });
            new obj(propInfo);
         }
      }
      
      public function useExpFruit(param1:uint, param2:uint) : void
      {
         var itemID:uint = param1;
         var itemNum:uint = param2;
         SocketConnection.addCmdListener(CommandID.EXT_EXP_TICK,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.EXT_EXP_TICK,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            Alarm.show(_loc3_.readUnsignedInt() + "点经验值已存于你的经验分配器中！");
            dispatchEvent(new DynamicEvent(USE_FRUIT,itemID));
         });
         SocketConnection.send(CommandID.EXT_EXP_TICK,itemID,itemNum);
      }
   }
}
