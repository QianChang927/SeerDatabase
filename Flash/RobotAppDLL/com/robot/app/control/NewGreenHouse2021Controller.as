package com.robot.app.control
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.app.greenHouse.GreenHouse2021PlantInfo;
   import com.robot.app.greenHouse.GreenHouse2021UserInfo;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.xml.GreenHouse2021XMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.SystemTimerManager;
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
   
   public class NewGreenHouse2021Controller
   {
      
      private static const COMMAND_ID:uint = 43324;
      
      private static var _instance:com.robot.app.control.NewGreenHouse2021Controller;
       
      
      private var _userInfo:GreenHouse2021UserInfo;
      
      private var _totalSeeds:Array;
      
      private var _mySeeds:Array;
      
      public const UPDATE_MAP_PLANTS:String = "updateMapPlants";
      
      public const PREPARE_USE_SEED:String = "prepareUseSeed";
      
      public const TECHNOLOGY_UP:String = "technologyUp";
      
      public const PLANT_INFO_CHANGED:String = "plant_info_changed";
      
      public var dispatch:EventDispatcher;
      
      public const GREENHOUSE_INFO_ARR:Array = [107990];
      
      public const PLANTS_INFO_ARR:Array = [105233,105234,105235,105236,105237,105238];
      
      public const PLANTS_TIME_ARR:Array = [105240,105241,105242,105243,105244,105245];
      
      public function NewGreenHouse2021Controller()
      {
         super();
         this.dispatch = new EventDispatcher();
         this._totalSeeds = GreenHouse2021XMLInfo.getAllSeeds();
      }
      
      public static function onPlant(param1:uint, param2:int) : Promise
      {
         var deferred:Deferred = null;
         var plantIdx:uint = param1;
         var seedId:int = param2;
         deferred = new Deferred();
         SocketConnection.sendByQueue(COMMAND_ID,[7,2,plantIdx,seedId],function(param1:SocketEvent):void
         {
            deferred.resolve(param1);
            EventManager.dispatchEvent(new DynamicEvent(com.robot.app.control.NewGreenHouse2021Controller.getInstance().PLANT_INFO_CHANGED,plantIdx));
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
            EventManager.dispatchEvent(new DynamicEvent(com.robot.app.control.NewGreenHouse2021Controller.getInstance().PLANT_INFO_CHANGED,plantIdx));
         });
         return deferred.promise;
      }
      
      public static function onPickPlant(param1:uint) : Promise
      {
         var deferred:Deferred = null;
         var plantIdx:uint = param1;
         deferred = new Deferred();
         SocketConnection.sendByQueue(COMMAND_ID,[8,2,plantIdx,6],function(param1:SocketEvent):void
         {
            deferred.resolve(param1);
            EventManager.dispatchEvent(new DynamicEvent(com.robot.app.control.NewGreenHouse2021Controller.getInstance().PLANT_INFO_CHANGED,plantIdx));
         });
         return deferred.promise;
      }
      
      public static function onFertilizerPlant(param1:uint, param2:int) : Promise
      {
         var deferred:Deferred = null;
         var plantIdx:uint = param1;
         var lv:int = param2;
         deferred = new Deferred();
         SocketConnection.sendByQueue(COMMAND_ID,[8,2,plantIdx,lv],function(param1:SocketEvent):void
         {
            deferred.resolve(param1);
            EventManager.dispatchEvent(new DynamicEvent(com.robot.app.control.NewGreenHouse2021Controller.getInstance().PLANT_INFO_CHANGED,plantIdx));
         });
         return deferred.promise;
      }
      
      public static function buySeed(param1:uint, param2:int) : Promise
      {
         var deferred:Deferred = null;
         var itemID:uint = param1;
         var buyCnt:int = param2;
         deferred = new Deferred();
         SocketConnection.sendByQueue(COMMAND_ID,[2,2,itemID,buyCnt],function(param1:SocketEvent):void
         {
            deferred.resolve(1);
            Alarm.show("购买成功！");
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function getInstance() : com.robot.app.control.NewGreenHouse2021Controller
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.control.NewGreenHouse2021Controller();
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
      
      public function getPlantsInfo() : Promise
      {
         var deferred:Deferred = null;
         deferred = new Deferred();
         var arr:Array = this.PLANTS_INFO_ARR;
         arr = arr.concat(this.PLANTS_TIME_ARR);
         KTool.getMultiValue(arr,function(param1:Array):void
         {
            var _loc4_:GreenHouse2021PlantInfo = null;
            var _loc5_:int = 0;
            var _loc6_:Object = null;
            var _loc2_:Array = [];
            var _loc3_:int = 0;
            while(_loc3_ < PLANTS_INFO_ARR.length)
            {
               (_loc4_ = new GreenHouse2021PlantInfo()).id = param1[_loc3_];
               _loc4_.index = _loc3_ + 1;
               if(_loc4_.id > 0)
               {
                  _loc5_ = int(SystemTimerManager.sysBJDate.time / 1000) - param1[_loc3_ + PLANTS_INFO_ARR.length];
                  _loc6_ = GreenHouse2021XMLInfo.getSeedInfoByItemId(_loc4_.id);
                  _loc4_.matureTime = int(_loc6_.MatureTime) * 60 * 60;
                  _loc4_.changeTime = int(_loc6_.ChangeTime) * 60 * 60;
                  _loc4_.surplusTime = _loc4_.matureTime - _loc5_;
                  if(_loc4_.surplusTime <= 0)
                  {
                     _loc4_.growPercent = 2;
                  }
                  else if(_loc5_ >= _loc4_.changeTime)
                  {
                     _loc4_.growPercent = 1;
                  }
                  else
                  {
                     _loc4_.growPercent = 0;
                  }
               }
               _loc2_.push(_loc4_);
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
            _loc1_.push(this._totalSeeds[_loc2_].ID);
            _loc2_++;
         }
         return this.updateItemsNum(this.mySeeds,_loc1_);
      }
      
      public function updateUserInfo() : Promise
      {
         var deferred:Deferred = null;
         deferred = new Deferred();
         KTool.getMultiValue(this.GREENHOUSE_INFO_ARR,function(param1:Array):void
         {
            deferred.resolve(_userInfo = onGetUserInfo(param1,MainManager.actorID));
         });
         return deferred.promise;
      }
      
      public function onGetUserInfo(param1:Array, param2:int = 0) : GreenHouse2021UserInfo
      {
         var _loc9_:int = 0;
         var _loc3_:GreenHouse2021UserInfo = new GreenHouse2021UserInfo();
         _loc3_.userId = param2;
         _loc3_.allexp = param1[0];
         var _loc4_:int = int(GreenHouse2021XMLInfo.getlvlength());
         var _loc5_:Array = [];
         var _loc6_:int = 0;
         var _loc7_:int = 0;
         while(_loc7_ < _loc4_)
         {
            _loc9_ = int(GreenHouse2021XMLInfo.getRequireExpBylvid(_loc7_ + 1));
            _loc5_.push(_loc9_);
            if(_loc3_.allexp < _loc9_)
            {
               _loc3_.level = _loc7_;
               _loc3_.curlvExpTotal = _loc9_ - _loc6_;
               _loc3_.curlvExp = _loc3_.allexp - _loc6_;
               break;
            }
            _loc6_ = _loc9_;
            _loc7_++;
         }
         var _loc8_:int = int(GreenHouse2021XMLInfo.getRequireExpBylvid(_loc4_));
         if(_loc3_.allexp >= _loc8_)
         {
            _loc3_.level = _loc4_;
            _loc3_.curlvExpTotal = 0;
            _loc3_.curlvExp = 0;
         }
         return _loc3_;
      }
      
      public function destory() : void
      {
         this._userInfo = null;
         this._totalSeeds = null;
         this._mySeeds = null;
         this.dispatch = null;
         _instance = null;
      }
      
      public function get userInfo() : GreenHouse2021UserInfo
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
   }
}
