package com.robot.core.manager
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.CountermarkXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xmlInfo.LimitItemInfo;
   import com.robot.core.controller.CountermarkController;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.ItemParseInfo;
   import com.robot.core.info.userItem.CountermarkInfo;
   import com.robot.core.info.userItem.CountermarkItemInfo;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.info.userItem.SoulBeadItemInfo;
   import com.robot.core.manager.eggMachine.CrystalCoreItem;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.SaierdouChangeAltert;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.utils.ByteArray;
   import org.taomee.ds.HashMap;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class ItemManager
   {
      
      private static var _clothMap:HashMap = new HashMap();
      
      private static var limitItemHash:Array;
      
      private static var _collectionMap:HashMap = new HashMap();
      
      private static var _fightcollectionMap:HashMap = new HashMap();
      
      private static var _markMap:HashMap = new HashMap();
      
      private static var _throwMap:HashMap = new HashMap();
      
      private static var _petItemMap:HashMap = new HashMap();
      
      private static var _soulBeadMap:HashMap = new HashMap();
      
      private static var _core:HashMap = new HashMap();
      
      private static var _skillStoneMap:HashMap = new HashMap();
      
      private static var _superMap:HashMap = new HashMap();
      
      private static var _skillCMMap:HashMap = new HashMap();
      
      private static var _abilityCMMap:HashMap = new HashMap();
      
      private static var _effectCMMap:HashMap = new HashMap();
      
      private static var _usefulSkillCMMap:HashMap = new HashMap();
      
      public static var _flag:uint;
      
      private static var _gemMap:HashMap = new HashMap();
      
      private static var _gemAssistMap:HashMap = new HashMap();
      
      private static var _instance:EventDispatcher;
       
      
      public function ItemManager()
      {
         super();
      }
      
      public static function containsAll(param1:uint) : Boolean
      {
         if(_clothMap.containsKey(param1))
         {
            return true;
         }
         if(_collectionMap.containsKey(param1))
         {
            return true;
         }
         return false;
      }
      
      public static function getInfo(param1:uint) : SingleItemInfo
      {
         var _loc2_:SingleItemInfo = _clothMap.getValue(param1);
         if(null == _loc2_)
         {
            _loc2_ = _collectionMap.getValue(param1);
         }
         return _loc2_;
      }
      
      public static function getNumByID(param1:uint) : int
      {
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         var _loc4_:Number = NaN;
         if(ItemManager.containsAll(param1))
         {
            return ItemManager.getInfo(param1).itemNum;
         }
         if(limitItemHash)
         {
            _loc3_ = 0;
            while(_loc3_ < limitItemHash.length)
            {
               if(limitItemHash[_loc3_].itemID == param1)
               {
                  if((_loc4_ = limitItemHash[_loc3_].leftTime - SystemTimerManager.time) > 0)
                  {
                     _loc2_ += limitItemHash[_loc3_].itemNum;
                  }
               }
               _loc3_++;
            }
            return _loc2_;
         }
         return 0;
      }
      
      public static function parseItem(param1:String) : Array
      {
         var all:Array = null;
         var i:int = 0;
         var arr:Array = null;
         var item:Array = null;
         var info:ItemParseInfo = null;
         var parse:Object = null;
         var reward:String = param1;
         var items:Array = [];
         if(reward.split("_").length > 2)
         {
            all = reward.split(";");
            i = 0;
            while(i < all.length)
            {
               arr = all[i].split("_");
               item = arr.map(function(param1:*, param2:int, param3:Array):int
               {
                  return int(param1);
               });
               if(item.length > 2)
               {
                  info = new ItemParseInfo();
                  info.type = item[0];
                  info.id = item[1];
                  info.num = item[2];
                  parse = JSON.parse(JSON.stringify(info));
                  items.push(parse);
               }
               else
               {
                  Alarm2.show(reward + "填的不对");
               }
               i++;
            }
         }
         else
         {
            Alarm2.show("道具格式不对:" + reward);
         }
         return items;
      }
      
      public static function getCloth(param1:Function = null) : void
      {
         var fun:Function;
         var endFun:Function;
         var callback:Function = param1;
         _clothMap.clear();
         fun = function(param1:SocketEvent):void
         {
            addClothMap(param1.data as ByteArray);
         };
         endFun = function(param1:SocketEvent):void
         {
            fun(param1);
            dispatchEvent(new ItemEvent(ItemEvent.CLOTH_LIST));
            if(null != callback)
            {
               callback();
            }
         };
         SocketConnection.sendByQueue(CommandID.ITEM_LIST,[100001,101000,2],fun);
         SocketConnection.sendByQueue(CommandID.ITEM_LIST,[1300001,1400000,2],endFun);
      }
      
      public static function haveLinitItem() : Boolean
      {
         var _loc1_:int = 0;
         var _loc2_:Number = NaN;
         if(limitItemHash)
         {
            _loc1_ = 0;
            while(_loc1_ < limitItemHash.length)
            {
               _loc2_ = limitItemHash[_loc1_].leftTime - SystemTimerManager.time;
               if(_loc2_ > 0)
               {
                  return true;
               }
               _loc1_++;
            }
         }
         return false;
      }
      
      public static function changeLimitItem(param1:LimitItemInfo) : void
      {
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         var _loc4_:LimitItemInfo = null;
         if(limitItemHash)
         {
            _loc2_ = -1;
            _loc3_ = 0;
            while(_loc3_ < limitItemHash.length)
            {
               if((_loc4_ = limitItemHash[_loc3_] as LimitItemInfo).itemID == param1.itemID && _loc4_.leftTime == param1.leftTime)
               {
                  _loc2_ = _loc3_;
                  break;
               }
               _loc3_++;
            }
            if(_loc2_ == -1)
            {
               limitItemHash.push(param1);
            }
            else if(param1.itemNum <= 0)
            {
               limitItemHash.splice(_loc2_,1);
            }
            else
            {
               limitItemHash[_loc2_] = param1;
            }
         }
      }
      
      public static function updateLimititem(param1:Function = null) : void
      {
         var fun:Function = param1;
         limitItemHash = [];
         SocketConnection.sendByQueue(CommandID.LIMIT_TIME_ITEM_LIST,[],function(param1:SocketEvent):void
         {
            var _loc5_:LimitItemInfo = null;
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:int = 0;
            while(_loc4_ < _loc3_)
            {
               _loc5_ = new LimitItemInfo(_loc2_);
               limitItemHash.push(_loc5_);
               _loc4_++;
            }
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      public static function getLimitItems() : Array
      {
         return limitItemHash == null ? [] : limitItemHash;
      }
      
      public static function useLimitItem(param1:int, param2:int, param3:int, param4:Function = null) : void
      {
         var itemid:int = param1;
         var leftTime:int = param2;
         var itemNum:int = param3;
         var fun:Function = param4;
         SocketConnection.sendByQueue(CommandID.LIMIT_TIME_ITEM_LIST_USE,[itemid,leftTime,itemNum],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            if(fun != null)
            {
               fun(_loc3_);
            }
         });
      }
      
      private static function getLimitItemNum(param1:int) : int
      {
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         if(limitItemHash)
         {
            _loc3_ = 0;
            while(_loc3_ < limitItemHash.length)
            {
               if(param1 == limitItemHash[_loc3_].itemId)
               {
                  _loc2_ += limitItemHash[_loc3_].itemNum;
               }
               _loc3_++;
            }
         }
         return _loc2_;
      }
      
      private static function addClothMap(param1:ByteArray) : void
      {
         var _loc4_:SingleItemInfo = null;
         param1.position = 0;
         var _loc2_:uint = param1.readUnsignedInt();
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_)
         {
            _loc4_ = new SingleItemInfo(param1);
            _clothMap.add(_loc4_.itemID,_loc4_);
            _loc3_++;
         }
      }
      
      public static function containsCloth(param1:uint) : Boolean
      {
         return _clothMap.containsKey(param1);
      }
      
      public static function getClothInfo(param1:uint) : SingleItemInfo
      {
         return _clothMap.getValue(param1);
      }
      
      public static function getClothIDs() : Array
      {
         return _clothMap.getKeys();
      }
      
      public static function getClothInfos() : Array
      {
         return _clothMap.getValues();
      }
      
      public static function upDateCloth(param1:uint) : void
      {
         var id:uint = param1;
         var fun:Function = function(param1:SocketEvent):void
         {
            var _loc5_:SingleItemInfo = null;
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:uint = _loc2_.readUnsignedInt();
            var _loc4_:int = 0;
            while(_loc4_ < _loc3_)
            {
               _loc5_ = new SingleItemInfo(_loc2_);
               _clothMap.add(_loc5_.itemID,_loc5_);
               _loc4_++;
            }
            dispatchEvent(new ItemEvent(ItemEvent.CLOTH_LIST));
         };
         SocketConnection.sendByQueue(CommandID.ITEM_LIST,[id,id,2],fun);
      }
      
      public static function getCollection(param1:Function = null) : void
      {
         var processFun:Function;
         var endFun:Function;
         var callback:Function = param1;
         _collectionMap.clear();
         processFun = function(param1:SocketEvent):void
         {
            addCollectionMap(param1.data as ByteArray);
         };
         endFun = function(param1:SocketEvent):void
         {
            addCollectionMap(param1.data as ByteArray);
            dispatchEvent(new ItemEvent(ItemEvent.COLLECTION_LIST));
            if(null != callback)
            {
               callback.call();
            }
         };
         SocketConnection.sendByQueue(CommandID.ITEM_LIST,[300001,500000,2],processFun);
         SocketConnection.sendByQueue(CommandID.ITEM_LIST,[400101,400650,2],processFun);
         SocketConnection.sendByQueue(CommandID.ITEM_LIST,[1200001,1300000,2],processFun);
         SocketConnection.sendByQueue(CommandID.ITEM_LIST,[2300001,2400000,2],processFun);
         SocketConnection.sendByQueue(CommandID.ITEM_LIST,[2400001,2500000,2],processFun);
         SocketConnection.sendByQueue(CommandID.ITEM_LIST,[1500000,1500999,2],processFun);
         SocketConnection.sendByQueue(CommandID.ITEM_LIST,[2600001,2699999,2],processFun);
         SocketConnection.sendByQueue(CommandID.ITEM_LIST,[1400000,1800000,2],endFun);
         getEffectCountermark();
      }
      
      public static function getFightCollection(param1:Function = null) : void
      {
         var processFun:Function;
         var callback:Function = param1;
         _fightcollectionMap.clear();
         processFun = function(param1:SocketEvent):void
         {
            addfightCollectionMap(param1.data as ByteArray);
            dispatchEvent(new ItemEvent(ItemEvent.FIGHT_COLLECTION_LIST));
         };
         SocketConnection.sendByQueue(CommandID.FIGHT_ITEM_LIST,[],processFun);
      }
      
      private static function addfightCollectionMap(param1:ByteArray) : void
      {
         var _loc4_:SingleItemInfo = null;
         param1.position = 0;
         var _loc2_:uint = param1.readUnsignedInt();
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_)
         {
            _loc4_ = new SingleItemInfo(param1);
            _fightcollectionMap.add(_loc4_.itemID,_loc4_);
            _loc3_++;
         }
      }
      
      public static function containsfightCollection(param1:uint) : Boolean
      {
         return _fightcollectionMap.containsKey(param1);
      }
      
      public static function getfightCollectionInfo(param1:uint) : SingleItemInfo
      {
         return _fightcollectionMap.getValue(param1);
      }
      
      public static function getfightCollectionIDs() : Array
      {
         return _fightcollectionMap.getKeys();
      }
      
      public static function getfightCollectionInfos() : Array
      {
         return _fightcollectionMap.getValues();
      }
      
      private static function addCollectionMap(param1:ByteArray) : void
      {
         var _loc4_:SingleItemInfo = null;
         param1.position = 0;
         var _loc2_:uint = param1.readUnsignedInt();
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_)
         {
            _loc4_ = new SingleItemInfo(param1);
            _collectionMap.add(_loc4_.itemID,_loc4_);
            _loc3_++;
         }
      }
      
      public static function containsCollection(param1:uint) : Boolean
      {
         return _collectionMap.containsKey(param1);
      }
      
      public static function getCollectionInfo(param1:uint) : SingleItemInfo
      {
         return _collectionMap.getValue(param1);
      }
      
      public static function getCollectionIDs() : Array
      {
         return _collectionMap.getKeys();
      }
      
      public static function getCollectionInfos() : Array
      {
         return _collectionMap.getValues();
      }
      
      public static function upDateCollection(param1:uint, param2:Function = null, param3:uint = 0) : void
      {
         var processFun:Function;
         var sendIds:Array = null;
         var id:uint = param1;
         var callBack:Function = param2;
         var endId:uint = param3;
         endId = endId == 0 ? id : endId;
         sendIds = [];
         var i:int = int(id);
         while(i < endId + 1)
         {
            sendIds.push(i);
            i++;
         }
         processFun = function(param1:SocketEvent):void
         {
            var _loc6_:int = 0;
            var _loc7_:SingleItemInfo = null;
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:uint = _loc2_.readUnsignedInt();
            var _loc4_:Array = [];
            var _loc5_:int = 0;
            while(_loc5_ < _loc3_)
            {
               _loc7_ = new SingleItemInfo(_loc2_);
               _collectionMap.add(_loc7_.itemID,_loc7_);
               _loc4_.push(_loc7_.itemID);
               _loc5_++;
            }
            for each(_loc6_ in sendIds)
            {
               if(_loc4_.indexOf(_loc6_) == -1)
               {
                  _collectionMap.remove(_loc6_);
               }
            }
            if(_loc3_ == 0)
            {
               _collectionMap.remove(id);
            }
            if(null != callBack)
            {
               callBack.call();
            }
            dispatchEvent(new ItemEvent(ItemEvent.COLLECTION_LIST));
         };
         SocketConnection.sendByQueue(CommandID.ITEM_LIST,[id,endId,2],processFun);
      }
      
      public static function updateItems(param1:Array, param2:Function = null) : Promise
      {
         var i:int;
         var sendByteArr:ByteArray;
         var deferred:Deferred = null;
         var itemId:int = 0;
         var receiveFunc:Function = null;
         var itemArr:Array = param1;
         var func:Function = param2;
         deferred = new Deferred();
         if(itemArr.length == 0)
         {
            if(func != null)
            {
               func();
            }
            deferred.resolve(true);
            return deferred.promise;
         }
         if(null == itemArr || itemArr.length < 0 || itemArr.length > 50)
         {
            deferred.resolve(true);
            return deferred.promise;
         }
         i = 0;
         while(i < itemArr.length)
         {
            if(ItemXMLInfo.getCatID(itemArr[i]) == 25)
            {
               itemArr.splice(i,1);
               i--;
            }
            i++;
         }
         sendByteArr = new ByteArray();
         for each(itemId in itemArr)
         {
            sendByteArr.writeUnsignedInt(itemId);
         }
         receiveFunc = function(param1:SocketEvent):void
         {
            var _loc6_:int = 0;
            var _loc9_:SingleItemInfo = null;
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:Array = [];
            var _loc5_:int = 0;
            while(_loc5_ < _loc3_)
            {
               _loc9_ = new SingleItemInfo(_loc2_);
               _loc4_.push(_loc9_.itemID);
               _collectionMap.add(_loc9_.itemID,_loc9_);
               _loc5_++;
            }
            for each(_loc6_ in itemArr)
            {
               if(_loc4_.indexOf(_loc6_) == -1)
               {
                  _collectionMap.remove(_loc6_);
               }
            }
            if(null != func)
            {
               func();
            }
            var _loc7_:Array = [];
            var _loc8_:int = 0;
            while(_loc8_ < itemArr.length)
            {
               _loc7_.push(getNumByID(itemArr[_loc8_]));
               _loc8_++;
            }
            deferred.resolve(_loc7_);
         };
         SocketConnection.sendByQueue(CommandID.MULTI_ITEM_LIST,[itemArr.length,sendByteArr],receiveFunc);
         return deferred.promise;
      }
      
      public static function updateMarkCountByPromise(param1:int, param2:Array) : Promise
      {
         var deferred:Deferred = null;
         var type:int = param1;
         var markArr:Array = param2;
         deferred = new Deferred();
         updateMarkCount(type,markArr,function():void
         {
            var _loc1_:Array = [];
            var _loc2_:int = 0;
            while(_loc2_ < markArr.length)
            {
               _loc1_.push(ItemManager.getMarkCount(markArr[_loc2_]));
               _loc2_++;
            }
            deferred.resolve(_loc1_);
         });
         return deferred.promise;
      }
      
      public static function updateMarkCount(param1:int, param2:Array, param3:Function = null) : void
      {
         var sendByteArr:ByteArray;
         var id:int = 0;
         var count:int = 0;
         var markId:int = 0;
         var receiveFunc:Function = null;
         var type:int = param1;
         var markArr:Array = param2;
         var func:Function = param3;
         _markMap.clear();
         sendByteArr = new ByteArray();
         for each(markId in markArr)
         {
            sendByteArr.writeUnsignedInt(markId);
         }
         receiveFunc = function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:Array = [];
            var _loc5_:int = 0;
            while(_loc5_ < _loc3_)
            {
               id = _loc2_.readUnsignedInt();
               count = _loc2_.readUnsignedInt();
               _markMap.add(id,count);
               _loc5_++;
            }
            if(null != func)
            {
               func();
            }
         };
         SocketConnection.sendByQueue(47327,[type,markArr.length,sendByteArr],receiveFunc);
      }
      
      public static function getMarkCount(param1:uint) : int
      {
         if(_markMap.containsKey(param1))
         {
            return _markMap.getValue(param1);
         }
         return 0;
      }
      
      public static function updateAndGetItemsNum(param1:Array, param2:Function) : void
      {
         var itemArr:Array = param1;
         var func:Function = param2;
         updateItems(itemArr,function():void
         {
            var _loc1_:Array = [];
            var _loc2_:int = 0;
            while(_loc2_ < itemArr.length)
            {
               _loc1_.push(getNumByID(itemArr[_loc2_]));
               _loc2_++;
            }
            func(_loc1_);
         });
      }
      
      public static function updataeItems(param1:int, param2:int, param3:Function = null) : void
      {
         if(param2 < param1)
         {
            throw new Error("endId < startId");
         }
         upDateCollection(param1,param3,param2);
      }
      
      public static function getThrowThing(param1:Function = null) : void
      {
         var fun:Function = param1;
         var processFun:Function = function(param1:SocketEvent):void
         {
            var _loc5_:SingleItemInfo = null;
            _throwMap.clear();
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:uint = _loc2_.readUnsignedInt();
            var _loc4_:int = 0;
            while(_loc4_ < _loc3_)
            {
               _loc5_ = new SingleItemInfo(_loc2_);
               _throwMap.add(_loc5_.itemID,_loc5_);
               _loc4_++;
            }
            dispatchEvent(new ItemEvent(ItemEvent.THROW_LIST));
            if(null != fun)
            {
               fun.call();
            }
         };
         SocketConnection.sendByQueue(CommandID.ITEM_LIST,[600001,600100,2],processFun);
      }
      
      public static function containsThrow(param1:uint) : Boolean
      {
         return _throwMap.containsKey(param1);
      }
      
      public static function getThrowInfo(param1:uint) : SingleItemInfo
      {
         return _throwMap.getValue(param1);
      }
      
      public static function getThrowIDs() : Array
      {
         return _throwMap.getKeys();
      }
      
      public static function getPetItem() : Promise
      {
         var deferred:Deferred = null;
         deferred = new Deferred();
         _petItemMap.clear();
         ItemManager.updataeItems(300011,300250,function():void
         {
            ItemManager.updataeItems(300601,300999,function():void
            {
               ItemManager.updataeItems(1600001,1600100,function():void
               {
                  var _loc2_:SingleItemInfo = null;
                  var _loc1_:int = 300011;
                  while(_loc1_ < 1600100)
                  {
                     if((_loc1_ <= 300250 || _loc1_ >= 1600001 || _loc1_ >= 300601 && _loc1_ <= 300999) && _loc1_ != 300658)
                     {
                        _loc2_ = ItemManager.getInfo(_loc1_);
                        if(null != _loc2_)
                        {
                           _petItemMap.add(_loc2_.itemID,_loc2_);
                        }
                     }
                     _loc1_++;
                  }
                  deferred.resolve(null);
                  dispatchEvent(new ItemEvent(ItemEvent.PET_ITEM_LIST));
               });
            });
         });
         return deferred.promise;
      }
      
      public static function containsPetItem(param1:uint) : Boolean
      {
         return _petItemMap.containsKey(param1);
      }
      
      public static function getPetItemInfo(param1:uint) : SingleItemInfo
      {
         return _petItemMap.getValue(param1);
      }
      
      public static function getPetItemIDs() : Array
      {
         return _petItemMap.getKeys();
      }
      
      public static function getSoulBead() : void
      {
         SocketConnection.addCmdListener(CommandID.GET_SOUL_BEAD_List,onSoulBeadList);
         SocketConnection.send(CommandID.GET_SOUL_BEAD_List);
      }
      
      private static function onSoulBeadList(param1:SocketEvent) : void
      {
         var _loc5_:SoulBeadItemInfo = null;
         SocketConnection.removeCmdListener(CommandID.GET_SOUL_BEAD_List,onSoulBeadList);
         _soulBeadMap.clear();
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = 0;
         while(_loc4_ < _loc3_)
         {
            _loc5_ = new SoulBeadItemInfo(_loc2_);
            _soulBeadMap.add(_loc5_.obtainTime,_loc5_);
            _loc4_++;
         }
         dispatchEvent(new ItemEvent(ItemEvent.SOULBEAD_ITEM_LIST));
      }
      
      public static function containsSoulBead(param1:uint) : Boolean
      {
         return _soulBeadMap.containsKey(param1);
      }
      
      public static function getSoulBeadInfo(param1:uint) : SoulBeadItemInfo
      {
         return _soulBeadMap.getValue(param1);
      }
      
      public static function getSBObtainTms() : Array
      {
         return _soulBeadMap.getKeys();
      }
      
      public static function getSoulBeadInfos() : Array
      {
         return _soulBeadMap.getValues();
      }
      
      public static function getCrystalCore() : void
      {
         SocketConnection.addCmdListener(CommandID.ABILITY_EVOLUTION_GET_CORE_LIST,onCoreList);
         SocketConnection.send(CommandID.ABILITY_EVOLUTION_GET_CORE_LIST);
      }
      
      private static function onCoreList(param1:SocketEvent) : void
      {
         var _loc5_:CrystalCoreItem = null;
         SocketConnection.removeCmdListener(CommandID.ABILITY_EVOLUTION_GET_CORE_LIST,onCoreList);
         _core.clear();
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = 0;
         while(_loc4_ < _loc3_)
         {
            _loc5_ = new CrystalCoreItem(_loc2_);
            _core.add(_loc5_.time,_loc5_);
            _loc4_++;
         }
         dispatchEvent(new ItemEvent(ItemEvent.CRYSTALCORE_LIST));
      }
      
      public static function getCrystalCoreMap() : HashMap
      {
         return _core;
      }
      
      public static function getSkillStone() : void
      {
         SocketConnection.sendByQueue(CommandID.ITEM_LIST,[1100001,1200000,2],onSkillStoneList);
      }
      
      private static function onSkillStoneList(param1:SocketEvent) : void
      {
         var _loc5_:SingleItemInfo = null;
         _skillStoneMap.clear();
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = 0;
         while(_loc4_ < _loc3_)
         {
            _loc5_ = new SingleItemInfo(_loc2_);
            _skillStoneMap.add(_loc5_.itemID,_loc5_);
            _loc4_++;
         }
         dispatchEvent(new ItemEvent(ItemEvent.SKILL_STONE_LIST));
      }
      
      public static function containsSkillStone(param1:uint) : Boolean
      {
         return _skillStoneMap.containsKey(param1);
      }
      
      public static function getSkillStoneInfo(param1:uint) : SingleItemInfo
      {
         return _skillStoneMap.getValue(param1);
      }
      
      public static function getSkillStoneIDs() : Array
      {
         return _skillStoneMap.getKeys();
      }
      
      public static function getSkillStoneInfos() : Array
      {
         return _skillStoneMap.getValues();
      }
      
      public static function getSuper() : void
      {
         var fun:Function;
         var endFun:Function;
         _superMap.clear();
         fun = function(param1:SocketEvent):void
         {
            addSuperMap(param1.data as ByteArray);
         };
         endFun = function(param1:SocketEvent):void
         {
            fun(param1);
            dispatchEvent(new ItemEvent(ItemEvent.SUPER_ITEM_LIST));
         };
         SocketConnection.sendByQueue(CommandID.ITEM_LIST,[100001,200000,2],fun);
         SocketConnection.sendByQueue(CommandID.ITEM_LIST,[200001,300000,2],fun);
         SocketConnection.sendByQueue(CommandID.ITEM_LIST,[300001,400000,2],fun);
         SocketConnection.sendByQueue(CommandID.ITEM_LIST,[1200001,1300000,2],fun);
         SocketConnection.sendByQueue(CommandID.ITEM_LIST,[1300001,1800000,2],endFun);
      }
      
      private static function addSuperMap(param1:ByteArray) : void
      {
         var _loc4_:SingleItemInfo = null;
         param1.position = 0;
         var _loc2_:uint = param1.readUnsignedInt();
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_)
         {
            _loc4_ = new SingleItemInfo(param1);
            _superMap.add(_loc4_.itemID,_loc4_);
            _loc3_++;
         }
      }
      
      public static function containsSuper(param1:uint) : Boolean
      {
         return _superMap.containsKey(param1);
      }
      
      public static function getSuperInfo(param1:uint) : SingleItemInfo
      {
         return _superMap.getValue(param1);
      }
      
      public static function getSuperIDs() : Array
      {
         return _superMap.getKeys();
      }
      
      public static function getSuperInfos() : Array
      {
         return _superMap.getValues();
      }
      
      public static function upDateSuper(param1:uint) : void
      {
         var id:uint = param1;
         var fun:Function = function(param1:SocketEvent):void
         {
            var _loc5_:SingleItemInfo = null;
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:uint = _loc2_.readUnsignedInt();
            var _loc4_:int = 0;
            while(_loc4_ < _loc3_)
            {
               _loc5_ = new SingleItemInfo(_loc2_);
               _superMap.add(_loc5_.itemID,_loc5_);
               _loc4_++;
            }
            dispatchEvent(new ItemEvent(ItemEvent.SUPER_ITEM_LIST));
         };
         SocketConnection.sendByQueue(CommandID.ITEM_LIST,[id,id,2],fun);
      }
      
      public static function getAbilityCMIDs() : Array
      {
         return _abilityCMMap.getKeys();
      }
      
      public static function getAbilityCMInfos() : Array
      {
         return _abilityCMMap.getValues();
      }
      
      public static function getSkillCMIDs() : Array
      {
         return _skillCMMap.getKeys();
      }
      
      public static function getSkillCMInfos() : Array
      {
         return _skillCMMap.getValues();
      }
      
      public static function getUsefulSkillCMIDs() : Array
      {
         return _usefulSkillCMMap.getKeys();
      }
      
      public static function getUsefulSkillCMInfos() : Array
      {
         return _usefulSkillCMMap.getValues();
      }
      
      public static function getEffectCMIDs() : Array
      {
         return _effectCMMap.getKeys();
      }
      
      public static function getEffectCMInfos() : Array
      {
         return _effectCMMap.getValues();
      }
      
      public static function getEffectCMInfo(param1:uint) : CountermarkItemInfo
      {
         return _effectCMMap.getValue(param1);
      }
      
      public static function getUniversalMarkInfo(param1:int) : CountermarkInfo
      {
         var _loc2_:* = undefined;
         var _loc3_:* = undefined;
         if(CountermarkXMLInfo.isUniversalMark(param1))
         {
            _loc2_ = getEffectCMInfo(param1);
            _loc3_ = CountermarkController.getInfo(param1);
            if(_loc3_)
            {
               return _loc3_;
            }
            if(_loc2_)
            {
               return changeOldToNewInfo(_loc2_);
            }
         }
         return null;
      }
      
      public static function changeOldToNewInfo(param1:CountermarkItemInfo) : CountermarkInfo
      {
         var _loc2_:CountermarkInfo = new CountermarkInfo();
         _loc2_.markID = param1.itemID;
         _loc2_.catchTime = param1.installedPet;
         _loc2_.obtainTime = param1.obtainTime;
         _loc2_.bindMonID = param1.bindMonId;
         _loc2_.bindMoveID = param1.bindMoveId;
         _loc2_.adjArray = param1.attriAdj;
         _loc2_.gemID = param1.gemId;
         return _loc2_;
      }
      
      public static function getEffectCMObtainTimeByID(param1:uint) : uint
      {
         var _loc3_:CountermarkItemInfo = null;
         var _loc2_:uint = 0;
         for each(_loc3_ in getEffectCMInfos())
         {
            if(_loc3_.itemID == param1)
            {
               _loc2_ = _loc3_.obtainTime;
               break;
            }
         }
         return _loc2_;
      }
      
      public static function getAbilityCountermark() : void
      {
         _abilityCMMap.clear();
         getCountermark(10001,11000);
      }
      
      public static function ClearAbilityCounterMark() : void
      {
         _abilityCMMap.clear();
      }
      
      public static function getSkillCountermark(param1:uint = 0, param2:uint = 0) : void
      {
         _flag = param2;
         if(_flag == 0)
         {
            _skillCMMap.clear();
         }
         else
         {
            _usefulSkillCMMap.clear();
         }
         getCountermark(20001,21000,param1,param2);
      }
      
      public static function getEffectCountermark() : void
      {
         _effectCMMap.clear();
         SocketConnection.sendWithCallback(40006,function():void
         {
            getCountermark(40001,CountermarkXMLInfo.quanNengKyMax);
         },4);
      }
      
      public static function getCountermark(param1:uint, param2:uint, param3:uint = 0, param4:uint = 0) : void
      {
         _flag = param4;
         if(param1 >= 40001)
         {
            SocketConnection.sendByQueue(CommandID.GET_COUNTERMARK_LIST2,[param1,param2],onCountermarkList2);
         }
         else
         {
            SocketConnection.sendByQueue(CommandID.GET_COUNTERMARK_LIST,[param1,param2,param3,param4],onCountermarkList);
         }
      }
      
      private static function onCountermarkList(param1:SocketEvent) : void
      {
         var _loc5_:uint = 0;
         var _loc6_:uint = 0;
         var _loc7_:SingleItemInfo = null;
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = 0;
         while(_loc4_ < _loc3_)
         {
            _loc5_ = _loc2_.readUnsignedInt();
            _loc6_ = _loc2_.readUnsignedInt();
            (_loc7_ = new SingleItemInfo()).itemID = _loc5_;
            _loc7_.itemNum = _loc6_;
            if(_loc5_ >= 10001 && _loc5_ <= 11000)
            {
               _abilityCMMap.add(_loc5_,_loc7_);
            }
            else if(_loc5_ >= 20001 && _loc5_ <= 21000)
            {
               if(_flag == 0)
               {
                  _skillCMMap.add(_loc5_,_loc7_);
               }
               else if(_flag == 1)
               {
                  _usefulSkillCMMap.add(_loc5_,_loc7_);
               }
            }
            _loc4_++;
         }
         dispatchEvent(new ItemEvent(ItemEvent.COUNTERMARK_LIST));
      }
      
      private static function onCountermarkList2(param1:SocketEvent) : void
      {
         var _loc5_:CountermarkItemInfo = null;
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = 0;
         while(_loc4_ < _loc3_)
         {
            _loc5_ = new CountermarkItemInfo(_loc2_);
            _effectCMMap.add(_loc5_.obtainTime,_loc5_);
            CountermarkController.addToCache(changeOldToNewInfo(_loc5_));
            _loc4_++;
         }
         dispatchEvent(new ItemEvent(ItemEvent.COUNTERMARK_LIST));
      }
      
      public static function getGemIDs() : Array
      {
         return _gemMap.getKeys();
      }
      
      public static function getGemInfos() : Array
      {
         return _gemMap.getValues();
      }
      
      public static function getGemAssistIDs() : Array
      {
         return _gemAssistMap.getKeys();
      }
      
      public static function getGemAssistInfos() : Array
      {
         return _gemAssistMap.getValues();
      }
      
      public static function getGem() : void
      {
         _gemMap.clear();
         SocketConnection.sendByQueue(CommandID.ITEM_LIST,[1800001,1900000,2],onGemList);
      }
      
      public static function getGemAssist() : void
      {
         _gemAssistMap.clear();
         SocketConnection.sendByQueue(CommandID.ITEM_LIST,[1900001,2000000,2],onGemAssistList);
      }
      
      private static function onGemList(param1:SocketEvent) : void
      {
         var _loc5_:SingleItemInfo = null;
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = 0;
         while(_loc4_ < _loc3_)
         {
            _loc5_ = new SingleItemInfo(_loc2_);
            _gemMap.add(_loc5_.itemID,_loc5_);
            _loc4_++;
         }
         dispatchEvent(new ItemEvent(ItemEvent.GEM_LIST));
      }
      
      private static function onGemAssistList(param1:SocketEvent) : void
      {
         var _loc5_:SingleItemInfo = null;
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = 0;
         while(_loc4_ < _loc3_)
         {
            _loc5_ = new SingleItemInfo(_loc2_);
            _gemAssistMap.add(_loc5_.itemID,_loc5_);
            _loc4_++;
         }
         dispatchEvent(new ItemEvent(ItemEvent.GEM_ASSIST_LIST));
      }
      
      public static function delayItemDialog() : void
      {
         EventManager.dispatchEvent(new DynamicEvent(RobotEvent.CLOSE_BUY_ITEM_SHOW,null));
         SaierdouChangeAltert.dalayShowCoinDialog();
      }
      
      public static function showItemDialog() : void
      {
         EventManager.dispatchEvent(new DynamicEvent(RobotEvent.OPEN_BUY_ITEM_SHOW,null));
         SaierdouChangeAltert.showCoinDialog();
      }
      
      public static function clearItemDialog() : void
      {
         EventManager.dispatchEvent(new DynamicEvent(RobotEvent.CLEAR_BUY_ITEM_SHOW,null));
      }
      
      private static function getInstance() : EventDispatcher
      {
         if(_instance == null)
         {
            _instance = new EventDispatcher();
         }
         return _instance;
      }
      
      public static function addEventListener(param1:String, param2:Function, param3:Boolean = false, param4:int = 0, param5:Boolean = false) : void
      {
         getInstance().addEventListener(param1,param2,param3,param4,param5);
      }
      
      public static function removeEventListener(param1:String, param2:Function, param3:Boolean = false) : void
      {
         getInstance().removeEventListener(param1,param2,param3);
      }
      
      public static function dispatchEvent(param1:Event) : void
      {
         getInstance().dispatchEvent(param1);
      }
      
      public static function hasEventListener(param1:String) : Boolean
      {
         return getInstance().hasEventListener(param1);
      }
   }
}
