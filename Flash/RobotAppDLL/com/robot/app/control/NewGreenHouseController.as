package com.robot.app.control
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.app.greenHouse.GreenHousePlantInfo;
   import com.robot.app.greenHouse.GreenHouseUserInfo;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.xml.GreenHouseXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.DisplayObject;
   import flash.display.InteractiveObject;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.utils.ByteArray;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class NewGreenHouseController
   {
      
      private static const COMMAND_ID:uint = 43324;
      
      private static var _instance:com.robot.app.control.NewGreenHouseController;
       
      
      private var _userInfo:GreenHouseUserInfo;
      
      private var _totalMineral:Array;
      
      private var _myMineral:Array;
      
      private var _totalSeeds:Array;
      
      private var _mySeeds:Array;
      
      private var _totalFruits:Array;
      
      private var _myFruits:Array;
      
      public const UPDATE_MAP_PLANTS:String = "updateMapPlants";
      
      public const PREPARE_USE_SEED:String = "prepareUseSeed";
      
      public const TECHNOLOGY_UP:String = "technologyUp";
      
      public const PLANT_INFO_CHANGED:String = "plant_info_changed";
      
      public var dispatch:EventDispatcher;
      
      public const GREENHOUSE_INFO_ARR:Array = [105230,105231,105232,105258];
      
      public const PLANTS_ARR:Array = [105233,105234,105235,105236,105237,105238];
      
      public const PLANTS_INFO_ARR:Array = [[105259,105233,105239,105240,105249],[105260,105234,105239,105241,105250],[105261,105235,105239,105242,105251],[105262,105236,105239,105243,105252],[105263,105237,105239,105244,105253],[105264,105238,105239,105245,105254]];
      
      public function NewGreenHouseController()
      {
         super();
         this.dispatch = new EventDispatcher();
         this._totalSeeds = GreenHouseXMLInfo.getSeedsByQuality(0);
         this._totalMineral = GreenHouseXMLInfo.getMineralMap();
         this._totalFruits = GreenHouseXMLInfo.getFruitsMap();
      }
      
      public static function onAddWater() : Promise
      {
         var deferred:Deferred = null;
         deferred = new Deferred();
         SocketConnection.sendByQueue(COMMAND_ID,[3,1,1],function(param1:SocketEvent):void
         {
            deferred.resolve(param1);
         });
         return deferred.promise;
      }
      
      public static function onUpgradeST(param1:Array = null) : Promise
      {
         var choice:Array;
         var len:int;
         var i:int;
         var deferred:Deferred = null;
         var fillMinerals:Array = param1;
         deferred = new Deferred();
         if(fillMinerals == null)
         {
            fillMinerals = [];
         }
         choice = [5,4].concat(fillMinerals);
         len = 6 - choice.length;
         i = 0;
         while(i < len)
         {
            choice.push(0);
            i++;
         }
         SocketConnection.sendByQueue(COMMAND_ID,choice,function(param1:SocketEvent):void
         {
            deferred.resolve(param1);
            com.robot.app.control.NewGreenHouseController.getInstance().dispatch.dispatchEvent(new Event(com.robot.app.control.NewGreenHouseController.getInstance().TECHNOLOGY_UP));
         });
         return deferred.promise;
      }
      
      public static function onAddFertilizer(param1:uint, param2:uint) : Promise
      {
         var deferred:Deferred = null;
         var itemId:uint = param1;
         var num:uint = param2;
         deferred = new Deferred();
         SocketConnection.sendByQueue(COMMAND_ID,[4,2,itemId,num],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:Object = new Object();
            _loc3_.costNum = _loc2_.readUnsignedInt();
            _loc3_.itemId = _loc2_.readUnsignedInt();
            _loc3_.addEnemy = _loc2_.readUnsignedInt();
            deferred.resolve(_loc3_);
         });
         return deferred.promise;
      }
      
      public static function onPlant(param1:uint, param2:uint) : Promise
      {
         var deferred:Deferred = null;
         var landIdx:uint = param1;
         var plantIdx:uint = param2;
         deferred = new Deferred();
         SocketConnection.sendByQueue(COMMAND_ID,[7,2,landIdx,plantIdx],function(param1:SocketEvent):void
         {
            deferred.resolve(param1);
         });
         return deferred.promise;
      }
      
      public static function onCarePlant(param1:uint) : Promise
      {
         var deferred:Deferred = null;
         var plantIdx:uint = param1;
         deferred = new Deferred();
         SocketConnection.sendByQueue(COMMAND_ID,[8,2,plantIdx,1],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:Object = new Object();
            var _loc4_:uint = _loc2_.readUnsignedInt();
            _loc3_.tip1Idx = _loc4_ & 7;
            _loc3_.tip2Idx = _loc4_ >> 4 & 7;
            _loc3_.change = _loc4_ >> 8;
            deferred.resolve(_loc3_);
            EventManager.dispatchEvent(new DynamicEvent(com.robot.app.control.NewGreenHouseController.getInstance().PLANT_INFO_CHANGED,plantIdx));
         });
         return deferred.promise;
      }
      
      public static function onEradicatePlant(param1:uint) : Promise
      {
         var deferred:Deferred = null;
         var plantIdx:uint = param1;
         deferred = new Deferred();
         SocketConnection.sendByQueue(COMMAND_ID,[8,2,plantIdx,5],function(param1:SocketEvent):void
         {
            deferred.resolve(param1);
            EventManager.dispatchEvent(new DynamicEvent(com.robot.app.control.NewGreenHouseController.getInstance().PLANT_INFO_CHANGED,plantIdx));
         });
         return deferred.promise;
      }
      
      public static function onWaterPlant(param1:uint) : Promise
      {
         var deferred:Deferred = null;
         var plantIdx:uint = param1;
         deferred = new Deferred();
         SocketConnection.sendByQueue(COMMAND_ID,[8,2,plantIdx,2],function(param1:SocketEvent):void
         {
            deferred.resolve(param1);
            EventManager.dispatchEvent(new DynamicEvent(com.robot.app.control.NewGreenHouseController.getInstance().PLANT_INFO_CHANGED,plantIdx));
         });
         return deferred.promise;
      }
      
      public static function onFertilizerPlant(param1:uint) : Promise
      {
         var deferred:Deferred = null;
         var plantIdx:uint = param1;
         deferred = new Deferred();
         SocketConnection.sendByQueue(COMMAND_ID,[8,2,plantIdx,3],function(param1:SocketEvent):void
         {
            deferred.resolve(param1);
            EventManager.dispatchEvent(new DynamicEvent(com.robot.app.control.NewGreenHouseController.getInstance().PLANT_INFO_CHANGED,plantIdx));
         });
         return deferred.promise;
      }
      
      public static function onMaturePlant(param1:uint) : Promise
      {
         var deferred:Deferred = null;
         var plantIdx:uint = param1;
         deferred = new Deferred();
         SocketConnection.sendByQueue(COMMAND_ID,[8,2,plantIdx,4],function(param1:SocketEvent):void
         {
            deferred.resolve(param1);
            EventManager.dispatchEvent(new DynamicEvent(com.robot.app.control.NewGreenHouseController.getInstance().PLANT_INFO_CHANGED,plantIdx));
         });
         return deferred.promise;
      }
      
      private static function onGetPlantsInfo(param1:Array) : GreenHousePlantInfo
      {
         var _loc2_:GreenHousePlantInfo = new GreenHousePlantInfo();
         _loc2_.energy = param1[0] & 255;
         _loc2_.water = param1[0] >> 8 & 255;
         _loc2_.quality = param1[0] >> 16 & 255;
         _loc2_.growPercent = param1[0] >> 24 & 255;
         _loc2_.id = param1[1];
         _loc2_.stLevel = param1[2];
         _loc2_.updateTime = param1[3];
         _loc2_.state = param1[4];
         return _loc2_;
      }
      
      public static function getInstance() : com.robot.app.control.NewGreenHouseController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.control.NewGreenHouseController();
         }
         return _instance;
      }
      
      public function addEventListener(param1:String, param2:Function) : void
      {
         this.dispatch.addEventListener(param1,param2);
      }
      
      public function removeEventListener(param1:String, param2:Function) : void
      {
         this.dispatch.removeEventListener(param1,param2);
      }
      
      public function dispatchEvent(param1:String) : void
      {
         if(this.dispatch.hasEventListener(param1))
         {
            this.dispatch.dispatchEvent(new Event(param1));
         }
      }
      
      public function loadResource(param1:Object) : void
      {
         var obj:Object = param1;
         if(obj.parent == null)
         {
            return;
         }
         DisplayUtil.removeAllChild(obj.parent);
         ResourceManager.getResource(obj.path,function(param1:DisplayObject):void
         {
            if(obj.parent == null)
            {
               return;
            }
            param1.x -= param1.width / 2;
            param1.y -= param1.height / 2;
            obj.parent.addChild(param1);
            if(obj.fun != null)
            {
               obj.self = param1;
               obj.fun(obj);
            }
         });
      }
      
      private function updateItemsNum(param1:Array, param2:Array) : Promise
      {
         var myArr:Array = param1;
         var itemsArr:Array = param2;
         return ItemManager.updateItems(itemsArr).then(function(param1:*):void
         {
            var _loc3_:* = undefined;
            var _loc2_:* = param1 is Array ? param1 : new Array();
            myArr.length = 0;
            var _loc4_:* = 0;
            while(_loc4_ < _loc2_.length)
            {
               if(_loc2_[_loc4_] > 0)
               {
                  _loc3_ = ItemXMLInfo.getItemInfo(itemsArr[_loc4_]);
                  _loc3_.num = _loc2_[_loc4_];
                  myArr.push(_loc3_);
               }
               _loc4_++;
            }
         });
      }
      
      private function enableInteracteObj(param1:InteractiveObject, param2:Boolean, param3:Boolean) : void
      {
         var _loc4_:Sprite;
         if(_loc4_ = param1 as Sprite)
         {
            _loc4_.mouseChildren = param3;
            _loc4_.mouseEnabled = param2;
         }
         var _loc5_:SimpleButton;
         if(_loc5_ = param1 as SimpleButton)
         {
            _loc5_.mouseChildren = param3;
            _loc5_.enabled = param2;
            _loc5_.mouseEnabled = param2;
         }
      }
      
      public function getPlantInfo(param1:int) : Promise
      {
         var deferred:Deferred = null;
         var plantIdx:int = param1;
         deferred = new Deferred();
         SocketConnection.sendByQueue(COMMAND_ID,[1,1,plantIdx + 1],function(param1:SocketEvent):void
         {
            var e:SocketEvent = param1;
            KTool.getMultiValue(PLANTS_INFO_ARR[plantIdx],function(param1:Array):void
            {
               deferred.resolve(onGetPlantsInfo(param1));
            });
         });
         return deferred.promise;
      }
      
      public function getPlantForever(param1:int) : Promise
      {
         var deferred:Deferred = null;
         var plantIdx:int = param1;
         deferred = new Deferred();
         KTool.getMultiValue(this.PLANTS_INFO_ARR[plantIdx],function(param1:Array):void
         {
            var _loc2_:Object = new Object();
            _loc2_.fertizer = param1[0] & 255;
            _loc2_.water = param1[0] >> 8 & 255;
            _loc2_.quality = param1[0] >> 16 & 255;
            _loc2_.growth = param1[0] >> 24 & 255;
            _loc2_.itemId = param1[1];
            _loc2_.level = param1[2];
            _loc2_.updateTime = param1[3];
            _loc2_.state = param1[4];
            deferred.resolve(_loc2_);
         });
         return deferred.promise;
      }
      
      public function useNatureFruit(param1:uint, param2:PetInfo) : void
      {
         var itemID:uint = param1;
         var petInfo:PetInfo = param2;
         SocketConnection.sendByQueue(2326,[petInfo.catchTime,itemID],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            EventManager.dispatchEvent(new DynamicEvent(GreenHouseController.USE_FRUIT,itemID));
         });
      }
      
      public function useExpFruit(param1:uint, param2:uint = 1) : void
      {
         var itemID:uint = param1;
         var itemNum:uint = param2;
         SocketConnection.sendByQueue(2338,[itemID,itemNum],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            Alarm.show(_loc2_.readUnsignedInt() + "点经验值已存于你的经验分配器中！");
            EventManager.dispatchEvent(new DynamicEvent(GreenHouseController.USE_FRUIT,itemID));
         });
      }
      
      public function useEnegyFruit(param1:uint, param2:uint = 1) : void
      {
         var itemID:uint = param1;
         var itemNum:uint = param2;
         SocketConnection.sendByQueue(43324,[9,1,itemID],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            EventManager.dispatchEvent(new DynamicEvent(GreenHouseController.USE_FRUIT,itemID));
         });
      }
      
      public function getPlantsNum() : Promise
      {
         var deferred:Deferred = null;
         deferred = new Deferred();
         KTool.getMultiValue(this.PLANTS_ARR,function(param1:Array):void
         {
            var _loc2_:int = 0;
            var _loc3_:int = 0;
            while(_loc3_ < param1.length)
            {
               _loc2_ += param1[_loc3_] > 0 ? 1 : 0;
               _loc3_++;
            }
            deferred.resolve(_loc2_);
         });
         return deferred.promise;
      }
      
      public function updateMySeedsMap() : Promise
      {
         var _loc1_:Array = new Array();
         var _loc2_:int = 0;
         while(_loc2_ < this._totalSeeds.length)
         {
            _loc1_.push(this._totalSeeds[_loc2_].id);
            _loc2_++;
         }
         return this.updateItemsNum(this.mySeeds,_loc1_);
      }
      
      public function updateMyFruitsMap() : Promise
      {
         return this.updateItemsNum(this.myFruits,this._totalFruits);
      }
      
      public function updateMyMineralMap() : Promise
      {
         return this.updateItemsNum(this.myMineral,this._totalMineral);
      }
      
      public function updateUserInfo() : Promise
      {
         var deferred:Deferred = null;
         deferred = new Deferred();
         SocketConnection.sendByQueue(COMMAND_ID,[1,1,0],function(param1:SocketEvent):void
         {
            var e:SocketEvent = param1;
            KTool.getMultiValue(GREENHOUSE_INFO_ARR,function(param1:Array):void
            {
               deferred.resolve(onGetUserInfo(param1));
            });
         });
         return deferred.promise;
      }
      
      private function onGetUserInfo(param1:Array) : void
      {
         this._userInfo = new GreenHouseUserInfo();
         this._userInfo.energy = param1[0] & 65535;
         this._userInfo.water = param1[0] >> 16 & 65535;
         this._userInfo.stPoint = param1[1] & 65535;
         this._userInfo.stLevel = (param1[1] >> 16 & 65535) + 1;
         var _loc2_:int = 0;
         var _loc3_:* = int(param1[2]);
         while(_loc3_ != 0)
         {
            _loc2_ += _loc3_ & 1;
            _loc3_ >>= 1;
         }
         this._userInfo.newLand = _loc2_;
         this._userInfo.waterRefreshTime = param1[3];
      }
      
      public function destory() : void
      {
         this._userInfo = null;
         this._totalMineral = null;
         this._myMineral = null;
         this._totalSeeds = null;
         this._mySeeds = null;
         this._totalFruits = null;
         this._myFruits = null;
         this.dispatch = null;
         _instance = null;
      }
      
      public function get userInfo() : GreenHouseUserInfo
      {
         return this._userInfo;
      }
      
      public function get mySeeds() : Array
      {
         if(null == this._mySeeds)
         {
            this._mySeeds = new Array();
         }
         return this._mySeeds;
      }
      
      public function get myMineral() : Array
      {
         if(null == this._myMineral)
         {
            this._myMineral = new Array();
         }
         return this._myMineral;
      }
      
      public function get myFruits() : Array
      {
         if(null == this._myFruits)
         {
            this._myFruits = new Array();
         }
         return this._myFruits;
      }
   }
}
