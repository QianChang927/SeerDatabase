package com.robot.core.manager
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.CountermarkXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.PetEffectXMLInfo;
   import com.robot.core.config.xml.PetFriendsXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.config.xml.SkillXMLInfo;
   import com.robot.core.config.xml.SuperEvoXMLInfo;
   import com.robot.core.controller.CountermarkController;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.error.PromiseError;
   import com.robot.core.event.PetEvent;
   import com.robot.core.info.pet.ExeingPetInfo;
   import com.robot.core.info.pet.PetEffectInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.info.pet.PetShowInfo;
   import com.robot.core.info.pet.PetSkillInfo;
   import com.robot.core.info.pet.PetTakeOutInfo;
   import com.robot.core.info.userItem.CountermarkInfo;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.alert.SpecAlert;
   import com.robot.core.utils.TextFormatUtil;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.media.Sound;
   import flash.net.URLRequest;
   import flash.utils.ByteArray;
   import flash.utils.IDataInput;
   import flash.utils.getDefinitionByName;
   import org.taomee.debug.DebugTrace;
   import org.taomee.ds.HashMap;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketErrorEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.Utils;
   
   public class PetManager
   {
      
      public static const FIRST_BAG:String = "first_bag";
      
      public static const SECOND_BAG:String = "second_bag";
      
      public static const STORAGE:String = "storage";
      
      public static const EACH_BAG_MAX:uint = 6;
      
      public static const FIRST_BAG_MAX:uint = 6;
      
      public static const SECOND_BAG_MAX:uint = 6;
      
      private static var _bagMap:HashMap = new HashMap();
      
      private static var _secondBagMap:HashMap = new HashMap();
      
      public static var _defaultTime:uint;
      
      public static var showInfo:PetInfo = null;
      
      public static var showingInfo:PetShowInfo = null;
      
      public static var curViewEffectIdx:int = 0;
      
      public static const SECOND_BAG_UNLOCK_LEVELS:Array = [0,0,0,3,4,5];
      
      private static var hasListen:Boolean = false;
      
      private static var _updatePetBag:Promise;
      
      private static var sound:Sound = new Sound(new URLRequest(ClientConfig.getActiveSound("cure")));
      
      private static var _isGetdata:Boolean;
      
      private static var _storageMap:HashMap = new HashMap();
      
      private static var _exePetListMap:HashMap = new HashMap();
      
      private static var _handles:Array;
      
      private static var _lovePetMap:HashMap = new HashMap();
      
      private static var curLovePetInfo:PetListInfo;
      
      private static var curRetrieveLovePetInfo:PetListInfo;
      
      private static var _roweiPetMap:HashMap = new HashMap();
      
      private static var roweiFun:Function;
      
      private static var _curRoweiPetInfo:PetListInfo;
      
      private static var _type:int = 0;
      
      private static var _curRetrievePetInfo:PetListInfo;
      
      public static var specialPetsInfo:Array = [];
      
      private static var _instance:EventDispatcher;
      
      public static var petBagTotalCombat:uint;
      
      public static var petBagCombatList:Array = [];
      
      private static var _objs:Object;
      
      public static var expeditionPetArray:Array = [];
       
      
      public function PetManager()
      {
         super();
      }
      
      public static function set defaultTime(param1:int) : *
      {
         _defaultTime = param1;
      }
      
      public static function get defaultTime() : int
      {
         return _defaultTime;
      }
      
      public static function initData(param1:IDataInput, param2:uint, param3:Boolean = false) : void
      {
         var onDelect:Function = null;
         var info:PetInfo = null;
         var data:IDataInput = param1;
         var len:uint = param2;
         var isSecond:Boolean = param3;
         onDelect = function(param1:SocketEvent):void
         {
            var _loc5_:int = 0;
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:int = 0;
            while(_loc4_ < _loc3_)
            {
               _loc5_ = int(_loc2_.readUnsignedInt());
               if(_bagMap.containsKey(_loc5_))
               {
                  _bagMap.remove(_loc5_);
               }
               if(_secondBagMap.containsKey(_loc5_))
               {
                  _secondBagMap.remove(_loc5_);
               }
               _loc4_++;
            }
         };
         var i:int = 0;
         while(i < len)
         {
            info = new PetInfo(data,true,true,false);
            if(i == 0 && !isSecond)
            {
               info.isDefault = true;
               defaultTime = info.catchTime;
            }
            if(!isSecond)
            {
               info.sortIndex = i + 1;
               _bagMap.add(info.catchTime,info);
            }
            else
            {
               info.sortIndex = i + 7;
               _secondBagMap.add(info.catchTime,info);
            }
            i++;
         }
         if(!hasListen)
         {
            SocketConnection.addCmdListener(11188,onDelect);
            hasListen = true;
         }
      }
      
      public static function isUpdateing() : Boolean
      {
         return _updatePetBag != null;
      }
      
      public static function upDate(param1:Function = null) : Promise
      {
         return upDateByOnce(param1);
      }
      
      public static function upDateByOnce(param1:Function = null) : Promise
      {
         var callback:Function = param1;
         if(_updatePetBag == null)
         {
            _updatePetBag = SocketConnection.sendWithPromise(CommandID.GET_PET_INFO_BY_ONCE,[]).then(function(param1:SocketEvent):void
            {
               var _loc2_:* = undefined;
               var _loc5_:* = undefined;
               _loc2_ = param1.data.readUnsignedInt();
               DebugTrace.show("第一背包: len = " + _loc2_);
               _bagMap.clear();
               var _loc3_:* = 0;
               while(_loc3_ < _loc2_)
               {
                  _loc5_ = new PetInfo(param1.data as IDataInput,true,true,true);
                  DebugTrace.show("第一背包: PetID:" + _loc5_.id + " PetName:" + PetXMLInfo.getName(_loc5_.id) + " CatchTime:" + _loc5_.catchTime);
                  if(_loc5_.catchTime == defaultTime)
                  {
                     _loc5_.isDefault = true;
                  }
                  _loc5_.sortIndex = _loc3_ + 1;
                  if(NewSeerTaskController.isNewSeer)
                  {
                     if(_loc3_ == 0 && _bagMap.length == 0)
                     {
                        defaultTime = _loc5_.catchTime;
                        _loc5_.isDefault = true;
                     }
                  }
                  _bagMap.add(_loc5_.catchTime,_loc5_);
                  if(_loc5_.id == 904 || _loc5_.id == 462 || _loc5_.id == 916)
                  {
                     SocketConnection.send(CommandID.BUERSIGUANG_ATTRIBUTES_FIX,_loc5_.catchTime,_loc5_.id);
                  }
                  _loc3_++;
               }
               _loc2_ = param1.data.readUnsignedInt();
               DebugTrace.show("第二背包: len = " + _loc2_);
               _secondBagMap.clear();
               var _loc4_:* = 0;
               while(_loc4_ < _loc2_)
               {
                  _loc5_ = new PetInfo(param1.data as IDataInput,true,true,true);
                  DebugTrace.show("第二背包: PetID:" + _loc5_.id + " PetName:" + PetXMLInfo.getName(_loc5_.id) + " CatchTime:" + _loc5_.catchTime);
                  if(_loc5_.catchTime == defaultTime)
                  {
                     _loc5_.isDefault = true;
                  }
                  _loc5_.sortIndex = _loc4_ + 7;
                  _secondBagMap.add(_loc5_.catchTime,_loc5_);
                  if(_loc5_.id == 904 || _loc5_.id == 462 || _loc5_.id == 916)
                  {
                     SocketConnection.send(CommandID.BUERSIGUANG_ATTRIBUTES_FIX,_loc5_.catchTime,_loc5_.id);
                  }
                  _loc4_++;
               }
               DebugTrace.show("=END===(一条协议)更新宠物信息====>GET_PET_INFO_BY_ONCE(cmdID:43706)=======>>");
               dispatchEvent(new PetEvent(PetEvent.UPDATE_INFO,0));
               _updatePetBag = null;
            });
         }
         _updatePetBag.then(function():void
         {
            if(callback != null)
            {
               callback();
            }
         });
         return _updatePetBag;
      }
      
      public static function upDateBagPetInfo(param1:uint, param2:Function = null) : Promise
      {
         var catchTime:uint = param1;
         var callback:Function = param2;
         return SocketConnection.sendWithPromise(CommandID.GET_PET_INFO,[catchTime]).then(function(param1:SocketEvent):void
         {
            var _loc3_:* = undefined;
            var _loc4_:* = undefined;
            var _loc2_:* = param1.data as PetInfo;
            if(_loc2_.catchTime == defaultTime)
            {
               _loc2_.isDefault = true;
            }
            if(containsBagForCapTime(_loc2_.catchTime))
            {
               _loc3_ = PetManager._bagMap.getValue(_loc2_.catchTime);
               _loc2_.sortIndex = _loc3_.sortIndex;
               _bagMap.add(_loc2_.catchTime,_loc2_);
            }
            if(containsSecondBagForCapTime(_loc2_.catchTime))
            {
               _loc4_ = PetManager._secondBagMap.getValue(_loc2_.catchTime);
               _loc2_.sortIndex = _loc4_.sortIndex;
               _secondBagMap.add(_loc2_.catchTime,_loc2_);
            }
            if(_loc2_.id == 904 || _loc2_.id == 462 || _loc2_.id == 916)
            {
               SocketConnection.send(CommandID.BUERSIGUANG_ATTRIBUTES_FIX,_loc2_.catchTime,_loc2_.id);
            }
            if(callback != null)
            {
               callback(param1.data as PetInfo);
            }
            dispatchEvent(new PetEvent(PetEvent.UPDATE_INFO,_loc2_.catchTime));
         });
      }
      
      public static function add(param1:PetInfo) : void
      {
         if(!isBagFull)
         {
            addToBag(param1);
         }
         else
         {
            addStorage(param1.id,param1.catchTime,param1.level);
         }
      }
      
      public static function addToBag(param1:PetInfo) : void
      {
         if(_bagMap.length == 0)
         {
            param1.isDefault = true;
            defaultTime = param1.catchTime;
         }
         param1.sortIndex = _bagMap.length + 1;
         _bagMap.add(param1.catchTime,param1);
         dispatchEvent(new PetEvent(PetEvent.ADDED,param1.catchTime));
      }
      
      public static function addToSecondBag(param1:PetInfo) : void
      {
         param1.sortIndex = 6 + _secondBagMap.length + 1;
         _secondBagMap.add(param1.catchTime,param1);
         dispatchEvent(new PetEvent(PetEvent.ADDED,param1.catchTime));
      }
      
      public static function equipSkin(param1:int, param2:int, param3:Function = null) : Promise
      {
         var catchTime:int = param1;
         var skinId:int = param2;
         var callBack:Function = param3;
         return SocketConnection.sendWithPromise(47310,[catchTime,skinId]).then(function():void
         {
            var _loc1_:* = PetManager.getPetInfo(catchTime);
            _loc1_.skinId = skinId;
            dispatchEvent(new PetEvent(PetEvent.EQUIP_SKIN,catchTime,skinId));
            if(callBack != null)
            {
               callBack();
            }
         });
      }
      
      public static function remove(param1:uint) : PetInfo
      {
         var _loc2_:PetInfo = null;
         if(containsBagForCapTime(param1))
         {
            _loc2_ = _bagMap.remove(param1);
         }
         else
         {
            _loc2_ = _secondBagMap.remove(param1);
         }
         if(_loc2_)
         {
            if(showInfo)
            {
               if(showInfo.catchTime == param1)
               {
                  showInfo = null;
               }
            }
            dispatchEvent(new PetEvent(PetEvent.REMOVED,param1));
            return _loc2_;
         }
         return null;
      }
      
      public static function deletePet(param1:uint) : void
      {
         _bagMap.remove(param1);
         _secondBagMap.remove(param1);
         _storageMap.remove(param1);
      }
      
      public static function containsBagForID(param1:uint) : Boolean
      {
         var id:uint = param1;
         var arr:Array = _bagMap.getValues();
         return arr.some(function(param1:PetInfo, param2:int, param3:Array):Boolean
         {
            if(id == param1.id)
            {
               return true;
            }
            return false;
         });
      }
      
      public static function containsBagPetNum(param1:uint) : uint
      {
         var _loc4_:PetListInfo = null;
         var _loc2_:int = 0;
         var _loc3_:Array = getBagMap(true);
         for each(_loc4_ in _loc3_)
         {
            if(_loc4_.id == param1)
            {
               _loc2_++;
            }
         }
         return _loc2_;
      }
      
      public static function containsSecondBagForID(param1:uint) : Boolean
      {
         var id:uint = param1;
         var arr:Array = _secondBagMap.getValues();
         return arr.some(function(param1:PetInfo, param2:int, param3:Array):Boolean
         {
            if(id == param1.id)
            {
               return true;
            }
            return false;
         });
      }
      
      public static function containsBagForCapTime(param1:uint) : Boolean
      {
         return _bagMap.containsKey(param1);
      }
      
      public static function containsSecondBagForCapTime(param1:uint) : Boolean
      {
         return _secondBagMap.containsKey(param1);
      }
      
      public static function getPetInfo(param1:uint) : PetInfo
      {
         var _loc2_:PetInfo = _bagMap.getValue(param1);
         return _loc2_ || _secondBagMap.getValue(param1);
      }
      
      public static function getDefaultByPetIDs(param1:Array) : Boolean
      {
         var _loc2_:PetInfo = getPetInfo(PetManager.defaultTime);
         if(_loc2_ == null || param1.indexOf(_loc2_.id) == -1)
         {
            return false;
         }
         return true;
      }
      
      public static function get length() : uint
      {
         return _bagMap.length;
      }
      
      public static function get secondLength() : uint
      {
         return _secondBagMap.length;
      }
      
      public static function get catchTimes() : Array
      {
         return _bagMap.getKeys();
      }
      
      public static function get secondCatchTimes() : Array
      {
         return _secondBagMap.getKeys();
      }
      
      public static function get infos() : Array
      {
         return _bagMap.getValues().sortOn("sortIndex",Array.NUMERIC);
      }
      
      public static function get secondInfos() : Array
      {
         var _loc1_:Array = _secondBagMap.getValues();
         _loc1_.sortOn("sortIndex",Array.NUMERIC);
         return _loc1_;
      }
      
      public static function get allInfos() : Array
      {
         var _loc2_:PetInfo = null;
         var _loc3_:PetInfo = null;
         var _loc1_:Array = new Array();
         for each(_loc2_ in infos)
         {
            _loc1_.push(_loc2_);
         }
         for each(_loc3_ in secondInfos)
         {
            _loc1_.push(_loc3_);
         }
         return _loc1_;
      }
      
      public static function setIn(param1:uint, param2:uint, param3:uint = 0) : void
      {
         var catchTime:uint = param1;
         var flag:uint = param2;
         var id:uint = param3;
         SocketConnection.sendByQueue(CommandID.PET_RELEASE,[catchTime,flag],function(param1:SocketEvent):void
         {
            var _loc2_:PetTakeOutInfo = param1.data as PetTakeOutInfo;
            if(_loc2_.flag != 0)
            {
               add(_loc2_.petInfo);
            }
            else
            {
               addStorage(id,catchTime);
            }
            if(flag == 1)
            {
               _setDefault(_loc2_.firstPetTime);
            }
         });
      }
      
      public static function petToAssitBag(param1:uint, param2:String) : Promise
      {
         return null;
      }
      
      public static function bagToInStorage(param1:uint, param2:Function = null) : Promise
      {
         var catchTime:uint = param1;
         var callBak:Function = param2;
         if(containsSecondBagForCapTime(catchTime))
         {
            return secondBagToStorage(catchTime,callBak);
         }
         return changePetPosition(catchTime,0,function(param1:PetTakeOutInfo):void
         {
            if(callBak != null)
            {
               callBak();
            }
            var _loc2_:* = remove(catchTime);
            if(_loc2_)
            {
               addStorage(_loc2_.id,_loc2_.catchTime,_loc2_.level);
            }
            _setDefault(param1.firstPetTime);
         });
      }
      
      public static function loveToInBag(param1:uint, param2:Function = null, param3:int = 1) : Promise
      {
         var cmdIndex:int = 0;
         var catchTime:uint = param1;
         var callBack:Function = param2;
         var bagIndex:int = param3;
         if(bagIndex == 1)
         {
            cmdIndex = !isBagFull ? 1 : 2;
         }
         else
         {
            cmdIndex = !isSecondBagFull ? 2 : 1;
         }
         return SocketConnection.sendWithPromise(CommandID.PET_RELEASE,[catchTime,cmdIndex]).then(function(param1:SocketEvent):void
         {
            var _loc2_:* = param1.data as PetTakeOutInfo;
            dispatchEvent(new PetEvent(PetEvent.LOVE_REMOVED,catchTime));
            if(bagIndex == 1)
            {
               if(!isBagFull)
               {
                  addToBag(_loc2_.petInfo);
               }
               else if(!isSecondBagFull)
               {
                  addToSecondBag(_loc2_.petInfo);
               }
            }
            else if(!isSecondBagFull)
            {
               addToSecondBag(_loc2_.petInfo);
            }
            else if(!isBagFull)
            {
               addToBag(_loc2_.petInfo);
            }
            _setDefault(_loc2_.firstPetTime);
            if(callBack != null)
            {
               callBack();
            }
         });
      }
      
      public static function storageToInBag(param1:uint, param2:Function = null) : void
      {
         var catchTime:uint = param1;
         var callBack:Function = param2;
         if(_lovePetMap.containsKey(catchTime))
         {
            loveToInBag(catchTime,callBack,1);
            return;
         }
         if(containsSecondBagForCapTime(catchTime))
         {
            secondBagToBag(catchTime);
            return;
         }
         changePetPosition(catchTime,1,function(param1:PetTakeOutInfo):void
         {
            removeStorage(catchTime);
            add(param1.petInfo);
            _setDefault(param1.firstPetTime);
            if(callBack != null)
            {
               callBack();
            }
         });
      }
      
      public static function bagPetSwitch(param1:int, param2:int, param3:Function = null) : void
      {
         var catchTime1:int = param1;
         var catchTime2:int = param2;
         var func:Function = param3;
         if(containsBagForCapTime(catchTime1) && containsSecondBagForCapTime(catchTime2))
         {
            PetManager.addEventListener(PetEvent.STORAGE_ADDED,function(param1:PetEvent):void
            {
               var e:PetEvent = param1;
               PetManager.removeEventListener(PetEvent.STORAGE_ADDED,arguments.callee);
               PetManager.addEventListener(PetEvent.ADDED,function(param1:PetEvent):void
               {
                  var e1:PetEvent = param1;
                  PetManager.removeEventListener(PetEvent.ADDED,arguments.callee);
                  PetManager.addEventListener(PetEvent.ADDED,function(param1:PetEvent):void
                  {
                     PetManager.removeEventListener(PetEvent.ADDED,arguments.callee);
                     if(null != func)
                     {
                        func();
                     }
                  });
                  storageToSecondBag(catchTime1);
               });
               secondBagToBag(catchTime2);
            });
            bagToInStorage(catchTime1);
         }
         else if(containsBagForCapTime(catchTime2) && containsSecondBagForCapTime(catchTime1))
         {
            PetManager.addEventListener(PetEvent.STORAGE_ADDED,function(param1:PetEvent):void
            {
               var e:PetEvent = param1;
               PetManager.removeEventListener(PetEvent.STORAGE_ADDED,arguments.callee);
               PetManager.addEventListener(PetEvent.ADDED,function(param1:PetEvent):void
               {
                  var e1:PetEvent = param1;
                  PetManager.removeEventListener(PetEvent.ADDED,arguments.callee);
                  PetManager.addEventListener(PetEvent.ADDED,function(param1:PetEvent):void
                  {
                     PetManager.removeEventListener(PetEvent.ADDED,arguments.callee);
                     if(null != func)
                     {
                        func();
                     }
                  });
                  storageToSecondBag(catchTime2);
               });
               secondBagToBag(catchTime1);
            });
            bagToInStorage(catchTime2);
         }
      }
      
      public static function bagToSecondBag(param1:int) : Promise
      {
         var deferred:Deferred = null;
         var catchTime:int = param1;
         deferred = new Deferred();
         changePetPosition(catchTime,4,function(param1:PetTakeOutInfo):void
         {
            remove(catchTime);
            addToSecondBag(param1.petInfo);
            deferred.resolve(null);
         },function():void
         {
            deferred.reject("set error");
         });
         return deferred.promise;
      }
      
      public static function secondBagToBag(param1:int) : Promise
      {
         var deferred:Deferred = null;
         var catchTime:int = param1;
         deferred = new Deferred();
         changePetPosition(catchTime,5,function(param1:PetTakeOutInfo):void
         {
            remove(catchTime);
            addToBag(param1.petInfo);
            deferred.resolve(null);
         },function():void
         {
            deferred.reject("error");
         });
         return deferred.promise;
      }
      
      public static function storageToSecondBag(param1:int, param2:Function = null) : Promise
      {
         var catchTime:int = param1;
         var callBack:Function = param2;
         if(_lovePetMap.containsKey(catchTime))
         {
            return loveToInBag(catchTime,callBack,2);
         }
         return changePetPosition(catchTime,2,function(param1:PetTakeOutInfo):void
         {
            removeStorage(catchTime);
            addToSecondBag(param1.petInfo);
            if(callBack != null)
            {
               callBack();
            }
         });
      }
      
      public static function secondBagToStorage(param1:int, param2:Function = null) : Promise
      {
         var catchTime:int = param1;
         var callBak:Function = param2;
         return changePetPosition(catchTime,3,function(param1:PetTakeOutInfo):void
         {
            if(callBak != null)
            {
               callBak();
            }
            var _loc2_:* = remove(catchTime);
            if(_loc2_)
            {
               addStorage(_loc2_.id,_loc2_.catchTime,_loc2_.level);
            }
         });
      }
      
      private static function changePetPosition(param1:int, param2:int, param3:Function = null, param4:Function = null) : Promise
      {
         var catchTime:int = param1;
         var posIndex:int = param2;
         var func:Function = param3;
         var errFunc:Function = param4;
         return SocketConnection.sendWithPromise(CommandID.PET_RELEASE,[catchTime,posIndex]).then(function(param1:*):void
         {
            if(null != func)
            {
               func(param1.data as PetTakeOutInfo);
            }
         }).otherwise(function(param1:*):void
         {
            if(null != errFunc)
            {
               errFunc();
            }
         });
      }
      
      public static function exchangePetPosition(param1:int, param2:int, param3:int = 1) : Promise
      {
         var _loc4_:Array = null;
         var _loc5_:int = 0;
         var _loc6_:int = 0;
         var _loc7_:PetInfo = null;
         if(param1 == param2)
         {
            return null;
         }
         if(param3 == 1)
         {
            _loc4_ = PetManager.allInfos;
            for each(_loc7_ in _loc4_)
            {
               if(_loc7_.catchTime == param1)
               {
                  _loc5_ = _loc7_.sortIndex;
               }
               else if(_loc7_.catchTime == param2)
               {
                  _loc6_ = _loc7_.sortIndex;
               }
            }
            return SocketConnection.sendWithPromise(41462,[_loc5_,param1,_loc6_,param2]);
         }
         return null;
      }
      
      public static function setDefault(param1:uint, param2:Boolean = true) : Promise
      {
         var deferred:Deferred = null;
         var catchTime:uint = param1;
         var isNet:Boolean = param2;
         deferred = new Deferred();
         if(defaultTime == catchTime)
         {
            deferred.resolve(true);
            return deferred.promise;
         }
         if(isNet)
         {
            SocketConnection.sendWithPromise(CommandID.PET_DEFAULT,[catchTime]).then(function(param1:SocketEvent):void
            {
               _setDefault(catchTime);
               deferred.resolve(1);
            },function(param1:*):void
            {
               deferred.reject(new PromiseError());
            });
         }
         else
         {
            _setDefault(catchTime);
            deferred.resolve(1);
         }
         return deferred.promise;
      }
      
      public static function setDefaultfromSecondBag(param1:uint, param2:Boolean = true) : void
      {
         var catchTime:uint = param1;
         var isNet:Boolean = param2;
         if(defaultTime == catchTime)
         {
            return;
         }
         if(isNet)
         {
            SocketConnection.addCmdListener(CommandID.PET_DEFAULT,function(param1:SocketEvent):void
            {
               var _loc3_:PetInfo = null;
               var _loc4_:PetInfo = null;
               SocketConnection.removeCmdListener(CommandID.PET_DEFAULT,arguments.callee);
               _loc3_ = getPetInfo(defaultTime) as PetInfo;
               _loc4_ = getPetInfo(catchTime) as PetInfo;
               if(containsBagForCapTime(defaultTime) && containsSecondBagForCapTime(catchTime) && _loc3_ && Boolean(_loc4_))
               {
                  if(_bagMap.length < 6)
                  {
                     _secondBagMap.remove(catchTime);
                     _bagMap.add(catchTime,_loc4_);
                  }
                  else
                  {
                     _bagMap.remove(defaultTime);
                     _secondBagMap.remove(catchTime);
                     _bagMap.add(catchTime,_loc4_);
                     _secondBagMap.add(defaultTime,_loc3_);
                  }
               }
               _setDefault(catchTime);
            });
            SocketConnection.send(CommandID.PET_DEFAULT,catchTime);
         }
      }
      
      private static function _setDefault(param1:uint) : void
      {
         var _loc2_:PetInfo = null;
         var _loc5_:PetInfo = null;
         _loc2_ = getPetInfo(defaultTime) as PetInfo;
         if(_loc2_)
         {
            _loc2_.isDefault = false;
         }
         var _loc3_:Array = _bagMap.getValues().concat(_secondBagMap.getValues());
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_.length)
         {
            if((_loc5_ = _loc3_[_loc4_]).isDefault && _loc5_.catchTime != defaultTime)
            {
               _loc5_.isDefault = false;
            }
            _loc4_++;
         }
         _loc2_ = getPetInfo(param1) as PetInfo;
         if(_loc2_)
         {
            defaultTime = param1;
            _loc2_.isDefault = true;
            dispatchEvent(new PetEvent(PetEvent.SET_DEFAULT,defaultTime));
            EventManager.dispatchEvent(new DynamicEvent("newseer_petBag_checkDefaultPet",_loc2_));
         }
      }
      
      public static function showPet(param1:uint) : void
      {
         if(param1 == 0)
         {
            param1 = uint(catchTimes[0]);
         }
         var _loc2_:PetInfo = getPetInfo(param1);
         if(_loc2_ == null)
         {
            Alarm.show("你还没有精灵！");
            return;
         }
         if(showInfo == null)
         {
            if(MainManager.actorInfo.actionType != 0)
            {
               if(PetXMLInfo.isFlyPet(_loc2_.id) || PetXMLInfo.isRidePetOpen(_loc2_.id,MainManager.actorInfo))
               {
                  Alarm.show("NONO飞行模式开启时，不能召唤骑宠精灵哦！");
                  return;
               }
            }
            showInfo = _loc2_;
            SocketConnection.send(CommandID.PET_SHOW,_loc2_.catchTime,1);
         }
         else if(showInfo.catchTime == param1)
         {
            showInfo = null;
            SocketConnection.send(CommandID.PET_SHOW,_loc2_.catchTime,0);
         }
         else
         {
            if(MainManager.actorInfo.actionType != 0)
            {
               if(PetXMLInfo.isFlyPet(_loc2_.id) || PetXMLInfo.isRidePetOpen(_loc2_.id,MainManager.actorInfo))
               {
                  Alarm.show("NONO飞行模式开启时，不能召唤骑宠精灵哦！");
                  return;
               }
            }
            showInfo = _loc2_;
            SocketConnection.send(CommandID.PET_SHOW,_loc2_.catchTime,1);
         }
      }
      
      public static function hidePet(param1:Boolean = true) : void
      {
         var _loc2_:BasePeoleModel = null;
         if(showInfo)
         {
            if(param1)
            {
               SocketConnection.send(CommandID.PET_SHOW,showInfo.catchTime,0);
               showInfo = null;
            }
            else
            {
               PetManager.showingInfo = null;
               showInfo = null;
               _loc2_ = UserManager.getUserModel(MainManager.actorID);
               if(_loc2_)
               {
                  _loc2_.hidePet();
               }
            }
         }
      }
      
      public static function cureAll(param1:Boolean = true, param2:Boolean = true) : void
      {
         var isTip:Boolean = param1;
         var showAlarm:Boolean = param2;
         addEventListener(PetEvent.UPDATE_INFO,function():void
         {
            var isCure:Boolean;
            removeEventListener(PetEvent.UPDATE_INFO,arguments.callee);
            isCure = false;
            _bagMap.eachValue(function(param1:PetInfo):void
            {
               var _loc3_:PetSkillInfo = null;
               if(param1.hp != param1.maxHp)
               {
                  isCure = true;
                  return;
               }
               var _loc2_:int = 0;
               while(_loc2_ < param1.skillNum)
               {
                  _loc3_ = param1.skillArray[_loc2_] as PetSkillInfo;
                  if(_loc3_.pp != SkillXMLInfo.getPP(_loc3_.id))
                  {
                     isCure = true;
                     return;
                  }
                  _loc2_++;
               }
               if(Boolean(param1.hideSKill) && param1.hideSKill.pp != SkillXMLInfo.getPP(param1.hideSKill.id))
               {
                  isCure = true;
               }
            });
            if(isCure == false)
            {
               if(showAlarm)
               {
                  Alarm.show("你的精灵们状态已满，不需要恢复体力！超No用户拥有免费恢复精灵活力的特权哟！");
               }
               return;
            }
            SocketConnection.addCmdListener(CommandID.PET_CURE,function(param1:SocketEvent):void
            {
               var e:SocketEvent = param1;
               sound.play();
               SocketConnection.removeCmdListener(CommandID.PET_CURE,arguments.callee);
               _bagMap.eachValue(function(param1:PetInfo):void
               {
                  var _loc3_:PetSkillInfo = null;
                  param1.hp = param1.maxHp;
                  var _loc2_:int = 0;
                  while(_loc2_ < param1.skillNum)
                  {
                     _loc3_ = param1.skillArray[_loc2_] as PetSkillInfo;
                     _loc3_.pp = SkillXMLInfo.getPP(_loc3_.id);
                     _loc2_++;
                  }
               });
               dispatchEvent(new PetEvent(PetEvent.CURE_COMPLETE,0));
               if(MainManager.actorInfo.isVip == false)
               {
                  MainManager.actorInfo.coins -= 50;
               }
               if(isTip)
               {
                  Alarm.show("恢复成功！你的精灵已经重新充满活力了！");
               }
            });
            SocketConnection.send(CommandID.PET_CURE);
         });
         upDate();
      }
      
      public static function cureAllFree(param1:Boolean = true) : void
      {
         var showAlarm:Boolean = param1;
         addEventListener(PetEvent.UPDATE_INFO,function():void
         {
            var isCure:Boolean;
            removeEventListener(PetEvent.UPDATE_INFO,arguments.callee);
            isCure = false;
            _bagMap.eachValue(function(param1:PetInfo):void
            {
               var _loc3_:PetSkillInfo = null;
               if(param1.hp != param1.maxHp)
               {
                  isCure = true;
                  return;
               }
               var _loc2_:int = 0;
               while(_loc2_ < param1.skillNum)
               {
                  _loc3_ = param1.skillArray[_loc2_] as PetSkillInfo;
                  if(_loc3_.pp != SkillXMLInfo.getPP(_loc3_.id))
                  {
                     isCure = true;
                     return;
                  }
                  _loc2_++;
               }
               if(Boolean(param1.hideSKill) && param1.hideSKill.pp != SkillXMLInfo.getPP(param1.hideSKill.id))
               {
                  isCure = true;
               }
            });
            if(isCure == false)
            {
               if(showAlarm)
               {
                  Alarm.show("你的精灵们状态已满，不需要恢复体力！");
               }
               return;
            }
            SocketConnection.addCmdListener(CommandID.PET_CURE_FREE,function(param1:SocketEvent):void
            {
               var e:SocketEvent = param1;
               sound.play();
               SocketConnection.removeCmdListener(CommandID.PET_CURE_FREE,arguments.callee);
               _bagMap.eachValue(function(param1:PetInfo):void
               {
                  var _loc3_:PetSkillInfo = null;
                  param1.hp = param1.maxHp;
                  var _loc2_:int = 0;
                  while(_loc2_ < param1.skillNum)
                  {
                     _loc3_ = param1.skillArray[_loc2_] as PetSkillInfo;
                     _loc3_.pp = SkillXMLInfo.getPP(_loc3_.id);
                     _loc2_++;
                  }
               });
               dispatchEvent(new PetEvent(PetEvent.CURE_COMPLETE,0));
               Alarm.show("你的精灵已经全部恢复了！");
            });
            SocketConnection.send(CommandID.PET_CURE_FREE);
         });
         upDate();
      }
      
      public static function cure(param1:uint) : void
      {
         var i:int;
         var info:PetSkillInfo = null;
         var catchTime:uint = param1;
         var isCure:Boolean = false;
         var petInfo:PetInfo = _bagMap.getValue(catchTime);
         if(petInfo == null)
         {
            Alarm.show("没有找到精灵！");
            return;
         }
         if(petInfo.hp != petInfo.maxHp)
         {
            isCure = true;
         }
         i = 0;
         while(i < petInfo.skillNum)
         {
            info = petInfo.skillArray[i] as PetSkillInfo;
            if(info.pp != SkillXMLInfo.getPP(info.id))
            {
               isCure = true;
               break;
            }
            i++;
         }
         if(isCure == false)
         {
            Alarm.show("你的精灵们状态已满，不需要恢复体力！VIP用户拥有免费恢复精灵活力的特权哟！");
            return;
         }
         SocketConnection.addCmdListener(CommandID.PET_ONE_CURE,function(param1:SocketEvent):void
         {
            var _loc6_:int = 0;
            var _loc7_:PetSkillInfo = null;
            sound.play();
            SocketConnection.removeCmdListener(CommandID.PET_ONE_CURE,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            var _loc4_:uint = _loc3_.readUnsignedInt();
            var _loc5_:PetInfo;
            if(_loc5_ = _bagMap.getValue(_loc4_))
            {
               _loc5_.hp = _loc5_.maxHp;
               _loc6_ = 0;
               while(_loc6_ < _loc5_.skillNum)
               {
                  (_loc7_ = _loc5_.skillArray[_loc6_] as PetSkillInfo).pp = SkillXMLInfo.getPP(_loc7_.id);
                  _loc6_++;
               }
            }
            dispatchEvent(new PetEvent(PetEvent.CURE_ONE_COMPLETE,_loc4_));
            if(MainManager.actorInfo.isVip == false)
            {
               MainManager.actorInfo.coins -= 20;
            }
            Alarm.show("恢复成功！你的精灵已经重新充满活力了！");
         });
         SocketConnection.send(CommandID.PET_ONE_CURE,catchTime);
      }
      
      public static function currencyCureAll() : void
      {
         var cls:* = undefined;
         if(MainManager.actorInfo.superNono)
         {
            PetManager.cureAll();
         }
         else
         {
            cls = Utils.getClass("com.robot.app.mapProcess.control.ColorfulPrivilegeWishController") as Class;
            if(cls.bonusType == 1)
            {
               PetManager.cureAll();
            }
            else
            {
               SpecAlert.show("恢复精灵体力需要花费50赛尔豆，成为超No用户即可享受永久免费恢复特权！",function():void
               {
                  PetManager.cureAll();
               });
            }
         }
      }
      
      public static function get storageLength() : int
      {
         return _storageMap.length - _bagMap.length;
      }
      
      public static function get allLength() : int
      {
         return _storageMap.length;
      }
      
      public static function getAll() : Array
      {
         var _loc2_:int = 0;
         var _loc3_:PetInfo = null;
         var _loc4_:PetListInfo = null;
         var _loc1_:Array = _storageMap.getValues();
         if(_bagMap.length > 0)
         {
            _loc2_ = 0;
            while(_loc2_ < _bagMap.length)
            {
               _loc3_ = _bagMap.getValues()[_loc2_] as PetInfo;
               if(containsStorageForCapTime(_loc3_.catchTime) == false)
               {
                  (_loc4_ = new PetListInfo()).catchTime = _loc3_.catchTime;
                  _loc4_.id = _loc3_.id;
                  _loc1_.push(_loc4_);
               }
               _loc2_++;
            }
         }
         return _loc1_;
      }
      
      public static function checkPetCount(param1:int) : Array
      {
         var _loc4_:PetListInfo = null;
         var _loc2_:Array = [];
         var _loc3_:Array = getAll();
         for each(_loc4_ in _loc3_)
         {
            if(_loc4_.id == param1)
            {
               _loc2_.push(_loc4_);
            }
         }
         return _loc2_;
      }
      
      public static function getCanExePetList() : Array
      {
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         var _loc4_:PetInfo = null;
         var _loc5_:PetListInfo = null;
         var _loc1_:Array = _storageMap.getValues();
         if(_loc1_)
         {
            _loc2_ = 0;
            while(_loc2_ < _loc1_.length)
            {
               if((_loc1_[_loc2_] as PetListInfo).course != 0)
               {
                  _loc1_.splice(_loc2_,1);
                  _loc2_--;
               }
               _loc2_++;
            }
         }
         if(_bagMap.length > 0)
         {
            _loc3_ = 0;
            while(_loc3_ < _bagMap.length)
            {
               _loc4_ = _bagMap.getValues()[_loc3_] as PetInfo;
               if(containsStorageForCapTime(_loc4_.catchTime) == false)
               {
                  (_loc5_ = new PetListInfo()).catchTime = _loc4_.catchTime;
                  _loc5_.id = _loc4_.id;
                  _loc1_.push(_loc5_);
               }
               _loc3_++;
            }
         }
         return _loc1_;
      }
      
      public static function getStorage() : Array
      {
         var arr:Array = _storageMap.getValues();
         return arr.filter(function(param1:PetListInfo, param2:int, param3:Array):Boolean
         {
            if(!_bagMap.containsKey(param1.catchTime))
            {
               return true;
            }
            return false;
         });
      }
      
      public static function refreshStorageList(param1:Function = null) : void
      {
         var fun:Function = param1;
         getStorageArgList(0,1000,function():void
         {
            getStorageArgList(1000,2000,function():void
            {
               getStorageArgList(2000,3000,function():void
               {
                  _isGetdata = true;
                  dispatchEvent(new PetEvent(PetEvent.STORAGE_LIST,0));
                  if(fun != null)
                  {
                     fun();
                  }
               });
            });
         });
      }
      
      public static function getStorageList() : void
      {
         if(_isGetdata)
         {
            dispatchEvent(new PetEvent(PetEvent.STORAGE_LIST,0));
            return;
         }
         getStorageArgList(0,1000,function():void
         {
            getStorageArgList(1000,2000,function():void
            {
               getStorageArgList(2000,3000,function():void
               {
                  getStorageArgList(3000,4000,function():void
                  {
                     getStorageArgList(4000,5000,function():void
                     {
                        getStorageArgList(5000,6000,function():void
                        {
                           _isGetdata = true;
                           dispatchEvent(new PetEvent(PetEvent.STORAGE_LIST,0));
                        });
                     });
                  });
               });
            });
         });
      }
      
      private static function getStorageArgList(param1:uint, param2:uint, param3:Function = null) : void
      {
         var startID:uint = param1;
         var endID:uint = param2;
         var fun:Function = param3;
         SocketConnection.addCmdListener(CommandID.GET_PET_LIST,function(param1:SocketEvent):void
         {
            var data:ByteArray;
            var len:uint;
            var i:int;
            var info:PetListInfo = null;
            var e:SocketEvent = param1;
            SocketConnection.removeCmdListener(CommandID.GET_PET_LIST,arguments.callee);
            data = e.data as ByteArray;
            len = data.readUnsignedInt();
            i = 0;
            while(i < len)
            {
               info = new PetListInfo(data);
               info.level = data.readUnsignedInt();
               _storageMap.add(info.catchTime,info);
               i++;
            }
            if(MainManager.actorInfo.hasNono && NonoManager.info && Boolean(NonoManager.info.func[3]))
            {
               getExePetList(function():void
               {
                  if(fun != null)
                  {
                     fun();
                  }
               });
            }
            else if(fun != null)
            {
               fun();
            }
         });
         SocketConnection.send(CommandID.GET_PET_LIST,startID,endID);
      }
      
      private static function getExePetList(param1:Function = null) : void
      {
         var fun:Function = param1;
         SocketConnection.addCmdListener(CommandID.NONO_EXE_LIST,function(param1:SocketEvent):void
         {
            var _loc5_:int = 0;
            var _loc6_:ExeingPetInfo = null;
            var _loc7_:PetListInfo = null;
            SocketConnection.removeCmdListener(CommandID.NONO_EXE_LIST,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            var _loc4_:uint;
            if((_loc4_ = _loc3_.readUnsignedInt()) > 0)
            {
               _loc5_ = 0;
               while(_loc5_ < _loc4_)
               {
                  _loc6_ = new ExeingPetInfo(_loc3_);
                  _exePetListMap.add(_loc6_._capTm,_loc6_);
                  (_loc7_ = new PetListInfo()).id = _loc6_._petId;
                  _loc7_.catchTime = _loc6_._capTm;
                  addStorage(_loc7_.id,_loc7_.catchTime);
                  if(containsBagForCapTime(_loc6_._capTm))
                  {
                     _bagMap.remove(_loc6_._capTm);
                  }
                  _loc5_++;
               }
            }
            if(fun != null)
            {
               fun();
            }
         });
         SocketConnection.send(CommandID.NONO_EXE_LIST);
      }
      
      public static function getCanStudySkill(param1:uint, param2:Function = null) : void
      {
         if(_handles == null)
         {
            _handles = [];
         }
         _handles.push(param2);
         SocketConnection.addCmdListener(CommandID.GET_PET_SKILL,onGetSuccessHandler);
         SocketConnection.send(CommandID.GET_PET_SKILL,param1);
      }
      
      public static function getBlackCanStudySkill(param1:uint, param2:Function = null) : void
      {
         if(_handles == null)
         {
            _handles = [];
         }
         _handles.push(param2);
         SocketConnection.addCmdListener(CommandID.REQUEST_BLACKPET_SKILL,onGetBlackSuccessHandler);
         SocketConnection.send(CommandID.REQUEST_BLACKPET_SKILL,param1);
      }
      
      private static function onGetBlackSuccessHandler(param1:SocketEvent) : void
      {
         var _loc6_:uint = 0;
         var _loc7_:* = 0;
         SocketConnection.removeCmdListener(CommandID.REQUEST_BLACKPET_SKILL,onGetBlackSuccessHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:Array = [];
         var _loc5_:int = 0;
         while(_loc5_ < _loc3_)
         {
            if((_loc6_ = _loc2_.readUnsignedInt()) != 0)
            {
               _loc4_.push(_loc6_);
            }
            _loc5_++;
         }
         if(_handles != null)
         {
            _loc7_ = 0;
            while(_loc7_ < _handles.length)
            {
               _handles[_loc7_](_loc4_);
               _handles.splice(_loc7_,1);
               _loc7_ = --_loc7_ + 1;
            }
         }
      }
      
      private static function onGetSuccessHandler(param1:SocketEvent) : void
      {
         var _loc6_:uint = 0;
         var _loc7_:* = 0;
         SocketConnection.removeCmdListener(CommandID.GET_PET_SKILL,onGetSuccessHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:Array = [];
         var _loc5_:int = 0;
         while(_loc5_ < _loc3_)
         {
            if((_loc6_ = _loc2_.readUnsignedInt()) != 0)
            {
               _loc4_.push(_loc6_);
            }
            _loc5_++;
         }
         if(_handles != null)
         {
            _loc7_ = 0;
            while(_loc7_ < _handles.length)
            {
               _handles[_loc7_](_loc4_);
               _handles.splice(_loc7_,1);
               _loc7_ = --_loc7_ + 1;
            }
         }
      }
      
      public static function get exePetListMap() : HashMap
      {
         return _exePetListMap;
      }
      
      public static function getBagMap(param1:Boolean = false) : Array
      {
         var _loc3_:Array = null;
         var _loc4_:int = 0;
         var _loc5_:PetInfo = null;
         var _loc6_:PetListInfo = null;
         var _loc2_:Array = [];
         if(_bagMap)
         {
            _loc2_ = _bagMap.getValues();
         }
         if(Boolean(_secondBagMap) && param1)
         {
            _loc2_ = _loc2_.concat(_secondBagMap.getValues());
         }
         if(_loc2_.length > 0)
         {
            _loc2_.sortOn("sortIndex",Array.NUMERIC);
            _loc3_ = new Array();
            _loc4_ = 0;
            while(_loc4_ < _loc2_.length)
            {
               _loc5_ = _loc2_[_loc4_] as PetInfo;
               (_loc6_ = new PetListInfo()).catchTime = _loc5_.catchTime;
               _loc6_.id = _loc5_.id;
               _loc6_.level = _loc5_.level;
               _loc3_.push(_loc6_);
               _loc4_++;
            }
            return _loc3_;
         }
         return [];
      }
      
      public static function getSecondBagMap() : Array
      {
         var _loc2_:Array = null;
         var _loc3_:int = 0;
         var _loc4_:PetInfo = null;
         var _loc5_:PetListInfo = null;
         var _loc1_:Array = [];
         if(_secondBagMap)
         {
            _loc1_ = _secondBagMap.getValues();
         }
         if(_loc1_.length > 0)
         {
            _loc1_.sortOn("sortIndex",Array.NUMERIC);
            _loc2_ = new Array();
            _loc3_ = 0;
            while(_loc3_ < _loc1_.length)
            {
               _loc4_ = _loc1_[_loc3_] as PetInfo;
               (_loc5_ = new PetListInfo()).catchTime = _loc4_.catchTime;
               _loc5_.id = _loc4_.id;
               _loc5_.level = _loc4_.level;
               _loc2_.push(_loc5_);
               _loc3_++;
            }
            return _loc2_;
         }
         return [];
      }
      
      public static function getBagPetsById(param1:uint, param2:Boolean = false) : Array
      {
         var _loc5_:PetListInfo = null;
         var _loc3_:Array = getBagMap(param2);
         var _loc4_:Array = [];
         for each(_loc5_ in _loc3_)
         {
            if(_loc5_.id == param1)
            {
               _loc4_.push(_loc5_);
            }
         }
         return _loc4_;
      }
      
      public static function getPetsById(param1:uint, param2:Boolean = false) : Array
      {
         var _loc3_:Array = [];
         var _loc4_:int = 0;
         var _loc5_:Array = getBagPetsById(param1,param2);
         var _loc6_:Array = getStoragePetsById(param1);
         while(_loc4_ < _loc5_.length)
         {
            _loc3_.push(_loc5_[_loc4_]);
            _loc4_++;
         }
         _loc4_ = 0;
         while(_loc4_ < _loc6_.length)
         {
            _loc3_.push(_loc6_[_loc4_]);
            _loc4_++;
         }
         return _loc3_;
      }
      
      public static function getBagPetsByIdList(param1:Array) : Array
      {
         var _loc4_:PetListInfo = null;
         var _loc5_:uint = 0;
         var _loc2_:Array = getBagMap();
         var _loc3_:Array = [];
         for each(_loc4_ in _loc2_)
         {
            for each(_loc5_ in param1)
            {
               if(_loc4_.id == _loc5_)
               {
                  _loc3_.push(_loc4_);
               }
            }
         }
         return _loc3_;
      }
      
      public static function getStoragePetsById(param1:uint) : Array
      {
         var _loc4_:PetListInfo = null;
         var _loc2_:Array = getStorage();
         var _loc3_:Array = [];
         for each(_loc4_ in _loc2_)
         {
            if(_loc4_.id == param1)
            {
               _loc3_.push(_loc4_);
            }
         }
         return _loc3_;
      }
      
      public static function getLovePetsById(param1:uint) : Array
      {
         var _loc4_:PetListInfo = null;
         var _loc2_:Array = getLovePetListArr();
         var _loc3_:Array = [];
         for each(_loc4_ in _loc2_)
         {
            if(_loc4_.id == param1)
            {
               _loc3_.push(_loc4_);
            }
         }
         return _loc3_;
      }
      
      public static function getPetsCount(param1:uint) : uint
      {
         var _loc5_:PetListInfo = null;
         var _loc6_:PetListInfo = null;
         var _loc2_:Array = getStorage();
         var _loc3_:Array = getBagMap(true);
         var _loc4_:uint = 0;
         for each(_loc5_ in _loc2_)
         {
            if(_loc5_.id == param1)
            {
               _loc4_++;
            }
         }
         for each(_loc6_ in _loc3_)
         {
            if(_loc6_.id == param1)
            {
               _loc4_++;
            }
         }
         return _loc4_;
      }
      
      public static function checkPetNumInBag(param1:Array, param2:Array, param3:Function) : void
      {
         var petId:Array = param1;
         var petName:Array = param2;
         var callBack:Function = param3;
         upDate(function():void
         {
            var _loc1_:Array = getBagPetsByIdList(petId);
            var _loc2_:String = petName.length > 1 ? petName.join("或") : String(petName[0]);
            if(_loc1_.length <= 0)
            {
               callBack(0);
               Alarm.show("请先仅把一只" + _loc2_ + "放入出战背包再来超进化！");
            }
            else if(_loc1_.length > 1)
            {
               callBack(_loc1_.length);
               Alarm.show("请在出战背包内放入一只" + _loc2_ + "再来超进化。");
            }
            else
            {
               callBack(_loc1_[0]);
            }
         });
      }
      
      public static function getLovePetList() : void
      {
         _lovePetMap.clear();
         SocketConnection.sendByQueue(CommandID.GET_LOVE_PET_LIST,null,onLoveListHandler,function(param1:*):void
         {
            SocketConnection.send(40006,3);
         });
      }
      
      private static function onLoveListHandler(param1:SocketEvent) : void
      {
         var data:ByteArray = null;
         var count:uint = 0;
         var e:SocketEvent = param1;
         var getList:Function = function(param1:int):void
         {
            var info:PetListInfo = null;
            var i:int = param1;
            if(i >= count)
            {
               dispatchEvent(new PetEvent(PetEvent.GET_LOVE_PET_LIST,0));
               return;
            }
            info = new PetListInfo(data);
            if(info.level == 0)
            {
               storageUpDate(info.catchTime,function(param1:PetInfo):void
               {
                  info.level = param1.level;
                  _lovePetMap.add(info.catchTime,info);
                  ++i;
                  getList(i);
               });
            }
            else
            {
               _lovePetMap.add(info.catchTime,info);
               i++;
               getList(i);
            }
         };
         SocketConnection.removeCmdListener(CommandID.GET_LOVE_PET_LIST,onLoveListHandler);
         data = e.data as ByteArray;
         count = data.readUnsignedInt();
         getList(0);
      }
      
      public static function get lovePetLength() : uint
      {
         return _lovePetMap.length;
      }
      
      public static function getLovePetListArr() : Array
      {
         return _lovePetMap.getValues();
      }
      
      public static function containsLovePetForCapTime(param1:uint) : Boolean
      {
         return _lovePetMap.containsKey(param1);
      }
      
      public static function getLovePetInfoByCapTime(param1:uint) : PetListInfo
      {
         return _lovePetMap.getValue(param1);
      }
      
      public static function getLovePetCatchTimeListArr() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:Array = _lovePetMap.getKeys();
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_.length)
         {
            _loc1_.push(int(_loc2_[_loc3_]));
            _loc3_++;
         }
         return _loc1_;
      }
      
      public static function addLovePet(param1:uint, param2:uint, param3:uint) : void
      {
         curLovePetInfo = new PetListInfo();
         curLovePetInfo.id = param1;
         curLovePetInfo.catchTime = param2;
         curLovePetInfo.level = param3;
         SocketConnection.addCmdListener(CommandID.ADD_LOVE_PET,onAddLovePetSuccessHandler);
         SocketConnection.send(CommandID.ADD_LOVE_PET,param2);
      }
      
      public static function onAddLovePetSuccessHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ADD_LOVE_PET,onAddLovePetSuccessHandler);
         _storageMap.remove(curLovePetInfo.catchTime);
         _lovePetMap.add(curLovePetInfo.catchTime,curLovePetInfo);
         dispatchEvent(new PetEvent(PetEvent.ADD_LOVE_PET,curLovePetInfo.catchTime));
      }
      
      public static function delLovePet(param1:uint, param2:uint, param3:uint) : void
      {
         curRetrieveLovePetInfo = new PetListInfo();
         curRetrieveLovePetInfo.id = param1;
         curRetrieveLovePetInfo.catchTime = param2;
         curRetrieveLovePetInfo.level = param3;
         SocketConnection.addCmdListener(CommandID.DEL_LOVE_PET,onDelLovePetSuccessHandler);
         SocketConnection.send(CommandID.DEL_LOVE_PET,param2);
      }
      
      private static function onDelLovePetSuccessHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.DEL_LOVE_PET,onDelLovePetSuccessHandler);
         _storageMap.add(curRetrieveLovePetInfo.catchTime,curRetrieveLovePetInfo);
         _lovePetMap.remove(curRetrieveLovePetInfo.catchTime);
         dispatchEvent(new PetEvent(PetEvent.DEL_LOVE_PET,curRetrieveLovePetInfo.catchTime));
      }
      
      public static function getRoweiPetList(param1:Function = null) : void
      {
         _roweiPetMap.clear();
         SocketConnection.addCmdListener(CommandID.PET_ROWEI_LIST,onRoweiListHandler);
         SocketConnection.send(CommandID.PET_ROWEI_LIST);
         roweiFun = param1;
      }
      
      private static function onRoweiListHandler(param1:SocketEvent) : void
      {
         var _loc5_:PetListInfo = null;
         SocketConnection.removeCmdListener(CommandID.PET_ROWEI_LIST,onRoweiListHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_)
         {
            (_loc5_ = new PetListInfo()).id = _loc2_.readUnsignedInt();
            _loc5_.catchTime = _loc2_.readUnsignedInt();
            _loc5_.level = _loc2_.readUnsignedInt();
            _roweiPetMap.add(_loc5_.catchTime,_loc5_);
            _loc4_++;
         }
         dispatchEvent(new PetEvent(PetEvent.GET_ROWEI_PET_LIST,0));
         if(roweiFun != null)
         {
            roweiFun();
            roweiFun = null;
         }
      }
      
      public static function get roweiPets() : Array
      {
         return _roweiPetMap.getValues();
      }
      
      public static function get roweiPetLength() : uint
      {
         return _roweiPetMap.length;
      }
      
      public static function getRoweiTypeList(param1:uint) : Array
      {
         var t:uint = param1;
         var arr:Array = _roweiPetMap.getValues();
         return arr.filter(function(param1:PetListInfo, param2:int, param3:Array):Boolean
         {
            if(PetXMLInfo.getType(param1.id) == t.toString())
            {
               return true;
            }
            return false;
         });
      }
      
      public static function roweiPet(param1:uint, param2:uint, param3:uint, param4:uint = 0) : void
      {
         _type = param4;
         _curRoweiPetInfo = new PetListInfo();
         _curRoweiPetInfo.id = param1;
         _curRoweiPetInfo.catchTime = param2;
         _curRoweiPetInfo.level = param3;
         SocketConnection.addCmdListener(CommandID.PET_ROWEI,onRoweiPetSuccessHandler);
         SocketConnection.send(CommandID.PET_ROWEI,param1,param2);
      }
      
      private static function onRoweiPetSuccessHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.PET_ROWEI,onRoweiPetSuccessHandler);
         if(_type == 3)
         {
            _lovePetMap.remove(_curRoweiPetInfo.catchTime);
         }
         else
         {
            _storageMap.remove(_curRoweiPetInfo.catchTime);
         }
         _roweiPetMap.add(_curRoweiPetInfo.catchTime,_curRoweiPetInfo);
         dispatchEvent(new PetEvent(PetEvent.ROWEI_PET,_curRoweiPetInfo.catchTime));
      }
      
      public static function retrievePet(param1:uint, param2:uint, param3:uint) : void
      {
         _curRetrievePetInfo = new PetListInfo();
         _curRetrievePetInfo.id = param1;
         _curRetrievePetInfo.catchTime = param2;
         _curRetrievePetInfo.level = param3;
         SocketConnection.addCmdListener(CommandID.PET_RETRIEVE,onRetrievePetSuccessHandler);
         SocketConnection.send(CommandID.PET_RETRIEVE,param2);
      }
      
      private static function onRetrievePetSuccessHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.PET_RETRIEVE,onRetrievePetSuccessHandler);
         _storageMap.add(_curRetrievePetInfo.catchTime,_curRetrievePetInfo);
         _roweiPetMap.remove(_curRetrievePetInfo.catchTime);
         dispatchEvent(new PetEvent(PetEvent.RETRIEVE_PET,_curRetrievePetInfo.catchTime));
      }
      
      public static function storageUpDate(param1:uint, param2:Function) : void
      {
         var catchTime:uint = param1;
         var event:Function = param2;
         SocketConnection.sendByQueue(CommandID.GET_PET_INFO,[catchTime],function(param1:SocketEvent):void
         {
            var _loc2_:PetInfo = param1.data as PetInfo;
            if(_loc2_.id == 904 || _loc2_.id == 462 || _loc2_.id == 916)
            {
               SocketConnection.send(CommandID.BUERSIGUANG_ATTRIBUTES_FIX,_loc2_.catchTime,_loc2_.id);
            }
            event(param1.data as PetInfo);
         },function(param1:SocketErrorEvent):void
         {
         });
      }
      
      public static function getStorageTypeList(param1:uint) : Array
      {
         var t:uint = param1;
         var arr:Array = getStorage();
         return arr.filter(function(param1:PetListInfo, param2:int, param3:Array):Boolean
         {
            if(PetXMLInfo.getType(param1.id) == t.toString())
            {
               return true;
            }
            return false;
         });
      }
      
      public static function getSuperArray() : Array
      {
         var _loc3_:PetListInfo = null;
         var _loc1_:Array = getStorage();
         var _loc2_:Array = [];
         for each(_loc3_ in _loc1_)
         {
            if(PetXMLInfo.checkSuper(_loc3_.id))
            {
               _loc2_.push(_loc3_);
            }
         }
         return _loc2_;
      }
      
      public static function getSuperOnlyPetList(param1:uint) : Array
      {
         var t:uint = param1;
         var returnA:Array = getSuperArray();
         return returnA.filter(function(param1:PetListInfo, param2:int, param3:Array):Boolean
         {
            if(PetXMLInfo.getType(param1.id) == t.toString())
            {
               return true;
            }
            return false;
         });
      }
      
      public static function addStorage(param1:uint, param2:uint, param3:uint = 0, param4:Function = null) : void
      {
         var info:PetListInfo = null;
         var id:uint = param1;
         var catchTime:uint = param2;
         var level:uint = param3;
         var fun:Function = param4;
         info = new PetListInfo();
         info.id = id;
         info.catchTime = catchTime;
         if(level == 0)
         {
            storageUpDate(catchTime,function(param1:PetInfo):void
            {
               info.level = param1.level;
               _storageMap.add(catchTime,info);
               dispatchEvent(new PetEvent(PetEvent.STORAGE_ADDED,catchTime));
               if(fun != null)
               {
                  fun(param1);
               }
            });
         }
         else
         {
            info.level = level;
            _storageMap.add(catchTime,info);
            dispatchEvent(new PetEvent(PetEvent.STORAGE_ADDED,catchTime));
            if(fun != null)
            {
               fun(info);
            }
         }
      }
      
      public static function removeStorage(param1:uint) : PetListInfo
      {
         var _loc2_:PetListInfo = _storageMap.remove(param1);
         if(_loc2_)
         {
            dispatchEvent(new PetEvent(PetEvent.STORAGE_REMOVED,param1));
            return _loc2_;
         }
         return null;
      }
      
      public static function containsStorageForID(param1:uint) : Boolean
      {
         var id:uint = param1;
         var arr:Array = _storageMap.getValues();
         return arr.some(function(param1:PetListInfo, param2:int, param3:Array):Boolean
         {
            if(id == param1.id)
            {
               return true;
            }
            return false;
         });
      }
      
      public static function containsStorageForCapTime(param1:uint) : Boolean
      {
         return _storageMap.containsKey(param1);
      }
      
      public static function getPetInfoStorageForCapTime(param1:uint) : PetListInfo
      {
         return _storageMap.getValue(param1) as PetListInfo;
      }
      
      public static function provPet(param1:uint) : void
      {
         SocketConnection.send(CommandID.PROVING_PET,param1);
      }
      
      public static function eatPet(param1:uint, param2:uint) : void
      {
         SocketConnection.send(CommandID.PET_EAT_DUMP,param1,param2);
      }
      
      public static function getSpecialPetsInfo(param1:Function = null) : void
      {
         var fun:Function = param1;
         SocketConnection.addCmdListener(CommandID.GET_SPECIAL_PETS_INFO,function(param1:SocketEvent):void
         {
            var b:ByteArray;
            var s:Array;
            var i:int;
            var c:Array;
            var d:Array;
            var t:int;
            var petid:int = 0;
            var e:SocketEvent = param1;
            SocketConnection.removeCmdListener(CommandID.GET_SPECIAL_PETS_INFO,arguments.callee);
            b = e.data as ByteArray;
            specialPetsInfo = [];
            specialPetsInfo.push(b.readUnsignedInt());
            s = [];
            i = 0;
            while(i < 13)
            {
               s.push(b.readUnsignedInt());
               i++;
            }
            specialPetsInfo.push(s);
            c = [];
            i = 0;
            while(i < 8)
            {
               c.push(b.readUnsignedInt());
               i++;
            }
            specialPetsInfo.push(c);
            d = [];
            t = int(b.readUnsignedInt());
            i = 0;
            while(i < t)
            {
               petid = int(b.readUnsignedInt());
               if(!petid)
               {
                  break;
               }
               d.push(petid);
               SocketConnection.addCmdListener(CommandID.GET_PET_INFO,function(param1:SocketEvent):void
               {
                  SocketConnection.removeCmdListener(CommandID.GET_PET_INFO,arguments.callee);
                  var _loc3_:PetInfo = param1.data as PetInfo;
                  var _loc4_:PetListInfo;
                  (_loc4_ = new PetListInfo()).id = _loc3_.id;
                  _loc4_.catchTime = _loc3_.catchTime;
                  _loc4_.level = _loc3_.level;
                  _storageMap.add(_loc3_.catchTime,_loc4_);
               });
               SocketConnection.send(CommandID.GET_PET_INFO,d[i]);
               i++;
            }
            specialPetsInfo.push(d);
            if(fun != null)
            {
               fun();
            }
         });
         SocketConnection.send(CommandID.GET_SPECIAL_PETS_INFO);
      }
      
      public static function getPetSpecialState(param1:int) : int
      {
         if(specialPetsInfo.length)
         {
            if(param1 == specialPetsInfo[0])
            {
               return 1;
            }
            if((specialPetsInfo[1] as Array).indexOf(param1) != -1)
            {
               return 2;
            }
            if((specialPetsInfo[2] as Array).indexOf(param1) != -1)
            {
               return 3;
            }
            if((specialPetsInfo[3] as Array).indexOf(param1) != -1)
            {
               return 4;
            }
            return 0;
         }
         return -1;
      }
      
      public static function getPetClassInfo(param1:Function) : void
      {
         var fun:Function = param1;
         SocketConnection.sendByQueue(CommandID.PET_GET_INFO,[],function(param1:SocketEvent):void
         {
            var _loc5_:int = 0;
            var _loc6_:int = 0;
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:Array = [null];
            var _loc4_:int = 0;
            while(_loc4_ < 500)
            {
               _loc5_ = _loc2_.readByte();
               _loc6_ = 1;
               while(_loc6_ < 9)
               {
                  _loc3_.push(getBit(_loc5_,_loc6_));
                  _loc6_++;
               }
               _loc4_++;
            }
            fun(_loc3_);
         });
      }
      
      private static function getBit(param1:uint, param2:uint) : uint
      {
         return (param1 & 1 << param2 - 1) >> param2 - 1;
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
         if(hasEventListener(param1.type))
         {
            getInstance().dispatchEvent(param1);
         }
      }
      
      public static function hasEventListener(param1:String) : Boolean
      {
         return getInstance().hasEventListener(param1);
      }
      
      public static function willTrigger(param1:String) : Boolean
      {
         return getInstance().willTrigger(param1);
      }
      
      public static function get type() : int
      {
         return _type;
      }
      
      public static function set type(param1:int) : void
      {
         _type = param1;
      }
      
      public static function get isPackSpiriHavetHp() : Boolean
      {
         var _loc4_:PetInfo = null;
         var _loc1_:Array = infos;
         var _loc2_:Boolean = false;
         var _loc3_:uint = 0;
         while(_loc3_ < _loc1_.length)
         {
            if((_loc4_ = _loc1_[_loc3_] as PetInfo).hp > 0)
            {
               _loc2_ = true;
               break;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      public static function refreshPetCombat(param1:Function, param2:Boolean = true) : void
      {
         var func:Function = param1;
         var isUpdate:Boolean = param2;
         if(isUpdate)
         {
            upDate(function():void
            {
               if(infos.length == 0)
               {
                  Alarm.show("请先把精灵放入背包");
               }
               else
               {
                  refreshPetCombat2(func);
               }
            });
         }
         else
         {
            refreshPetCombat2(func);
         }
      }
      
      private static function refreshPetCombat2(param1:Function) : void
      {
         var onCallBack:Function = null;
         var func:Function = param1;
         onCallBack = function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            petBagTotalCombat = _loc2_.readUnsignedInt();
            var _loc3_:int = 0;
            while(_loc3_ < infos.length)
            {
               _objs = {};
               _objs["catTime"] = _loc2_.readUnsignedInt();
               _objs["combat"] = _loc2_.readUnsignedInt();
               petBagCombatList.push(_objs);
               _loc3_++;
            }
            if(func != null)
            {
               func();
            }
         };
         SocketConnection.sendWithCallback2(CommandID.ADPETBAGNEW_REFRISH_COMBAT,onCallBack);
      }
      
      public static function hasPet(param1:int) : Boolean
      {
         var _loc2_:Boolean = true;
         if(getBagPetsById(param1,true).length + getStoragePetsById(param1).length == 0)
         {
            _loc2_ = false;
         }
         return _loc2_;
      }
      
      public static function hasPetContainLove(param1:int) : Boolean
      {
         var _loc2_:Boolean = true;
         if(getBagPetsById(param1,true).length + getStoragePetsById(param1).length + getLovePetsById(param1).length == 0)
         {
            _loc2_ = false;
         }
         return _loc2_;
      }
      
      public static function getHasPet(param1:int, param2:Boolean = false) : Boolean
      {
         var _loc3_:Boolean = false;
         var _loc4_:int = 0;
         while(_loc4_ < infos.length)
         {
            if(infos[_loc4_].id == param1)
            {
               _loc3_ = true;
            }
            _loc4_++;
         }
         if(param2)
         {
            _loc4_ = 0;
            while(_loc4_ < secondInfos.length)
            {
               if(secondInfos[_loc4_].id == param1)
               {
                  _loc3_ = true;
               }
               _loc4_++;
            }
         }
         return _loc3_;
      }
      
      public static function superEvolveWithPromise(param1:int) : Promise
      {
         var deferred:Deferred = null;
         var evolveId:int = param1;
         deferred = new Deferred();
         superEvolve(evolveId,function(param1:int):void
         {
            if(param1 == 1)
            {
               deferred.resolve(1);
            }
            else
            {
               deferred.reject(new PromiseError());
            }
         });
         return deferred.promise;
      }
      
      public static function getPetAttValue(param1:int, param2:int) : Promise
      {
         return SocketConnection.sendWithPromise(43325,[param1,param2]);
      }
      
      public static function superEvolve(param1:int, param2:Function) : void
      {
         var result:int = 0;
         var msg:String = null;
         var i:int = 0;
         var evolveId:int = param1;
         var callBack:Function = param2;
         var checkItems:Function = function():void
         {
            var items:Array = null;
            items = SuperEvoXMLInfo.getInItems(evolveId);
            var ids:Array = [];
            i = 0;
            while(i < items.length)
            {
               ids.push(items[i].id);
               ++i;
            }
            if(items.length == 0)
            {
               checkPet(evolveId,result,callBack);
               return;
            }
            ItemManager.updateItems(ids,function():void
            {
               var _loc1_:int = 0;
               i = 0;
               while(i < items.length)
               {
                  _loc1_ = ItemManager.getNumByID(items[i].id);
                  if(_loc1_ < items[i].count)
                  {
                     if(items[i].count > 1)
                     {
                        msg = "进行" + TextFormatUtil.getRedTxt(SuperEvoXMLInfo.getDesc(evolveId)) + "需要消耗";
                        msg += TextFormatUtil.getRedTxt("" + items[i].count) + "个";
                        msg += TextFormatUtil.getRedTxt(ItemXMLInfo.getName(items[i].id)) + ",你没有足够的" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(items[i].id));
                        msg += "无法进行" + TextFormatUtil.getRedTxt(SuperEvoXMLInfo.getDesc(evolveId));
                     }
                     else
                     {
                        msg = "进行" + TextFormatUtil.getRedTxt(SuperEvoXMLInfo.getDesc(evolveId)) + "需要超进化道具";
                        msg += TextFormatUtil.getRedTxt(ItemXMLInfo.getName(items[i].id)) + ",你还没有" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(items[i].id));
                        msg += "无法进行" + TextFormatUtil.getRedTxt(SuperEvoXMLInfo.getDesc(evolveId));
                     }
                     Alarm2.show(msg);
                     callBack(result);
                     return;
                  }
                  ++i;
               }
               checkPet(evolveId,result,callBack);
            });
         };
         var bitset:int = SuperEvoXMLInfo.getBitSet(evolveId);
         result = 0;
         i = 0;
         if(bitset > 0)
         {
            SocketConnection.sendWithCallback(CommandID.COMMAND_46075,function(param1:SocketEvent):void
            {
               var _loc2_:ByteArray = param1.data as ByteArray;
               var _loc3_:int = _loc2_.readByte();
               if(_loc3_ > 0)
               {
                  msg = SuperEvoXMLInfo.getDesc(evolveId);
                  Alarm2.show("你已经完成了" + TextFormatUtil.getRedTxt(msg) + ",不需要重新超进化了！");
                  callBack(result);
                  return;
               }
               checkItems();
            },bitset);
         }
         else
         {
            checkItems();
         }
      }
      
      private static function checkPet(param1:int, param2:int, param3:Function) : void
      {
         var evolveId:int = param1;
         var result:int = param2;
         var callBack:Function = param3;
         checkEvoPetCatchTime(evolveId,function(param1:int):void
         {
            var catchTime:int = param1;
            SocketConnection.sendWithCallback(43076,function(param1:SocketEvent):void
            {
               var _loc2_:ByteArray = param1.data as ByteArray;
               var _loc3_:int = int(_loc2_.readUnsignedInt());
               var _loc4_:int = int(_loc2_.readUnsignedInt());
               PetManager.upDateBagPetInfo(_loc3_);
               result = 1;
               callBack(result);
               CountermarkController.getBagAbilityMarks();
            },catchTime,evolveId);
         },function():void
         {
            callBack(result);
         });
      }
      
      private static function checkEvoPetCatchTime(param1:int, param2:Function, param3:Function) : void
      {
         var catchTime:int = 0;
         var petList:Array = null;
         var petInfo:PetInfo = null;
         var evolveId:int = param1;
         var evoFunc:Function = param2;
         var resultFunc:Function = param3;
         catchTime = 0;
         var origins:Array = SuperEvoXMLInfo.getOrigins(evolveId);
         var bagLen:int = 0;
         var storageLen:int = 0;
         var i:int = 0;
         var allPetName:String = "";
         while(i < origins.length)
         {
            allPetName += "、" + PetXMLInfo.getName(origins[i]);
            bagLen += PetManager.getBagPetsById(origins[i],true).length;
            storageLen += PetManager.getStoragePetsById(origins[i]).length;
            i++;
         }
         if(bagLen + storageLen == 0)
         {
            if(origins.length > 1)
            {
               Alarm2.show("你还未获得精灵" + TextFormatUtil.getRedTxt(allPetName.substring(1)) + "中的任意一只，无法进行" + TextFormatUtil.getRedTxt(SuperEvoXMLInfo.getDesc(evolveId)));
            }
            else
            {
               Alarm2.show("你还未获得精灵" + TextFormatUtil.getRedTxt(PetXMLInfo.getName(origins[0])) + "，无法进行" + TextFormatUtil.getRedTxt(SuperEvoXMLInfo.getDesc(evolveId)));
            }
         }
         else if(bagLen == 0)
         {
            if(origins.length > 1)
            {
               Alarm.show("请将精灵" + TextFormatUtil.getRedTxt(allPetName.substring(1)) + "中的任意一只放入出战背包，才能完成" + TextFormatUtil.getRedTxt(SuperEvoXMLInfo.getDesc(evolveId)));
            }
            else
            {
               Alarm.show("请将精灵" + TextFormatUtil.getRedTxt(PetXMLInfo.getName(origins[0])) + "放入出战背包，才能完成" + TextFormatUtil.getRedTxt(SuperEvoXMLInfo.getDesc(evolveId)));
            }
         }
         else
         {
            petList = PetManager.getBagMap();
            i = 0;
            while(i < petList.length)
            {
               if(origins.indexOf(petList[i].id) >= 0)
               {
                  catchTime = int(petList[i].catchTime);
                  break;
               }
               i++;
            }
            if(catchTime == 0)
            {
               if(origins.length > 1)
               {
                  Alarm.show("请将精灵" + TextFormatUtil.getRedTxt(allPetName.substring(1)) + "中的任意一只放入出战背包，才能完成" + TextFormatUtil.getRedTxt(SuperEvoXMLInfo.getDesc(evolveId)));
               }
               else
               {
                  Alarm.show("请将精灵" + TextFormatUtil.getRedTxt(PetXMLInfo.getName(origins[0])) + "放入出战背包，才能完成" + TextFormatUtil.getRedTxt(SuperEvoXMLInfo.getDesc(evolveId)));
               }
            }
         }
         if(catchTime > 0)
         {
            petInfo = PetManager.getPetInfo(catchTime);
            if(petInfo)
            {
               if(petInfo.abilityMark > 0 || petInfo.commonMark > 0 || petInfo.skillMark > 0)
               {
                  Alert.show("本次超进化会将精灵携带的非专属刻印一起进化，确定要立即进行超进化吗？",function():void
                  {
                     evoFunc(catchTime);
                  },resultFunc);
               }
               else
               {
                  evoFunc(catchTime);
               }
               return;
            }
         }
         if(resultFunc != null)
         {
            resultFunc();
         }
      }
      
      public static function isFriendSkillActivate(param1:int, param2:int, param3:int = 0) : Boolean
      {
         var petID:int = param1;
         var skillID:int = param2;
         var catchTime:int = param3;
         if(catchTime < 0)
         {
            return expeditionPetArray.some(function(param1:PetInfo, param2:int, param3:Array):Boolean
            {
               var _loc4_:* = PetFriendsXMLInfo.getAffectedSkills(petID,param1.id);
               if(isFriendActivate(petID,param1.id,param1.catchTime) && _loc4_.indexOf(skillID) != -1)
               {
                  return true;
               }
               return false;
            });
         }
         return getBagMap(true).some(function(param1:PetListInfo, param2:int, param3:Array):Boolean
         {
            var _loc4_:* = PetFriendsXMLInfo.getAffectedSkills(petID,param1.id);
            if(isFriendActivate(petID,param1.id) && _loc4_.indexOf(skillID) != -1)
            {
               return true;
            }
            return false;
         });
      }
      
      public static function checkMultiPet(param1:Array, param2:Function) : void
      {
         var petArray:Array = param1;
         var func:Function = param2;
         var temp:Array = petArray.slice();
         temp.unshift(petArray.length);
         SocketConnection.sendByQueue(CommandID.CHECK_MULTI_PET_CMD,temp,function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:Array = [];
            var _loc5_:int = 0;
            while(_loc5_ < _loc3_)
            {
               _loc4_.push(_loc2_.readUnsignedInt());
               _loc5_++;
            }
            if(func != null)
            {
               func(_loc4_);
            }
         });
      }
      
      public static function isFriendActivate(param1:int, param2:int, param3:int = 0) : Boolean
      {
         var _loc4_:Boolean = false;
         var _loc5_:Boolean = false;
         var _loc6_:int = 0;
         var _loc7_:PetInfo = null;
         if(param3 < 0)
         {
            _loc4_ = false;
            _loc5_ = false;
            _loc6_ = 0;
            while(_loc6_ < expeditionPetArray.length)
            {
               if((_loc7_ = expeditionPetArray[_loc6_]).id == param1)
               {
                  _loc4_ = true;
               }
               if(_loc7_.id == param2)
               {
                  _loc5_ = true;
               }
               _loc6_++;
            }
            if(PetFriendsXMLInfo.isFriendPet(param1,param2) && _loc4_ && _loc5_)
            {
               return true;
            }
         }
         else if(PetFriendsXMLInfo.isFriendPet(param1,param2) && (containsBagForID(param1) || containsSecondBagForID(param1)) && (containsBagForID(param2) || containsSecondBagForID(param2)))
         {
            return true;
         }
         return false;
      }
      
      public static function checkFightPets(param1:Boolean = true) : int
      {
         var _loc4_:PetInfo = null;
         var _loc2_:Array = infos;
         if(_loc2_.length == 0)
         {
            if(param1)
            {
               Alarm.show("你的背包里没有精灵！");
            }
            return 0;
         }
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_.length)
         {
            if((_loc4_ = _loc2_[_loc3_]).level < 100)
            {
               if(param1)
               {
                  Alarm.show("你的背包里有未满级精灵！（只能携带满级精灵参与此挑战）");
               }
               return 1;
            }
            _loc3_++;
         }
         return 2;
      }
      
      public static function get isSecondBagFull() : Boolean
      {
         return secondBagTotalLength <= _secondBagMap.length;
      }
      
      public static function get secondBagTotalLength() : int
      {
         if(MainManager.actorInfo.isVip && !NewSeerTaskController.isNewSeer)
         {
            if(getDefinitionByName("com.robot.app.control.YearVip2016Controller").isCurYearVip)
            {
               return 6;
            }
            if(MainManager.actorInfo.vipLevel < 1)
            {
               return 3;
            }
            if(MainManager.actorInfo.vipLevel < 3)
            {
               return 4;
            }
            if(MainManager.actorInfo.vipLevel < 5)
            {
               return 5;
            }
            return 6;
         }
         return 3;
      }
      
      public static function get isBagFull() : Boolean
      {
         return _bagMap.length >= EACH_BAG_MAX;
      }
      
      public static function getPetExHp(param1:int, param2:Function = null) : void
      {
         var catchTime:int = param1;
         var func:Function = param2;
         SocketConnection.sendWithCallback(CommandID.JAMES_ARMOR_QUERY_ABIBLITY,function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            if(null != func)
            {
               func(_loc3_);
            }
         },catchTime);
      }
      
      public static function isDefaultPet(param1:int) : Boolean
      {
         if(defaultTime > 0)
         {
            if(getPetInfo(defaultTime) != null && getPetInfo(defaultTime).id == param1)
            {
               return true;
            }
         }
         return false;
      }
      
      public static function getPetisOpenEffect(param1:int, param2:int, param3:String = "") : uint
      {
         var _loc5_:int = 0;
         var _loc6_:PetListInfo = null;
         var _loc7_:PetInfo = null;
         var _loc8_:uint = 0;
         var _loc9_:PetEffectInfo = null;
         var _loc4_:Array;
         if((_loc4_ = getBagPetsById(param1)).length > 0)
         {
            _loc5_ = 0;
            while(_loc5_ < _loc4_.length)
            {
               _loc6_ = _loc4_[_loc5_];
               _loc7_ = getPetInfo(_loc6_.catchTime);
               _loc8_ = 0;
               while(_loc8_ < _loc7_.effectList.length)
               {
                  if((_loc9_ = _loc7_.effectList[_loc8_]).effectID == param2)
                  {
                     if(param3 == "")
                     {
                        return _loc7_.catchTime;
                     }
                     if(_loc9_.args == param3)
                     {
                        return _loc7_.catchTime;
                     }
                  }
                  _loc8_++;
               }
               _loc5_++;
            }
         }
         return 0;
      }
      
      public static function getPetisOpenEffectByCatchTime(param1:int, param2:int, param3:String = "") : Boolean
      {
         var _loc5_:uint = 0;
         var _loc6_:PetEffectInfo = null;
         var _loc4_:PetInfo;
         if((_loc4_ = getPetInfo(param1)) != null)
         {
            _loc5_ = 0;
            while(_loc5_ < _loc4_.effectList.length)
            {
               if((_loc6_ = _loc4_.effectList[_loc5_]).effectID == param2)
               {
                  if(param3 == "")
                  {
                     return true;
                  }
                  if(_loc6_.args == param3)
                  {
                     return true;
                  }
               }
               _loc5_++;
            }
         }
         return false;
      }
      
      public static function getPetisHaveExclusiveEffect(param1:int, param2:int, param3:String) : Boolean
      {
         var _loc4_:Array;
         var _loc5_:PetListInfo = (_loc4_ = PetManager.getBagPetsById(param1,true))[0];
         return PetManager.getPetisOpenEffectByCatchTime(_loc5_.catchTime,param2,param3);
      }
      
      public static function GetEffectInfo(param1:PetInfo) : PetEffectInfo
      {
         var _loc2_:PetEffectInfo = null;
         var _loc3_:PetEffectInfo = null;
         var _loc5_:PetEffectInfo = null;
         var _loc6_:String = null;
         var _loc4_:uint = 0;
         while(_loc4_ < param1.effectList.length)
         {
            if(!((_loc5_ = param1.effectList[_loc4_] as PetEffectInfo).effectID == 177 || _loc5_.effectID == 287))
            {
               if(_loc5_.status == 1 || _loc5_.status == 4)
               {
                  if((_loc6_ = PetEffectXMLInfo.getEffect(_loc5_.effectID,_loc5_.args)).length <= "这四个字".length && _loc6_.length > 0)
                  {
                     if(_loc5_.effectID > 400 && _loc5_.effectID <= 420)
                     {
                        _loc3_ = _loc5_;
                     }
                     else
                     {
                        _loc2_ = _loc5_;
                        PetManager.curViewEffectIdx = PetEffectXMLInfo.getEffectIdx(_loc5_.effectID,_loc5_.args);
                     }
                     break;
                  }
               }
            }
            _loc4_++;
         }
         return _loc2_;
      }
      
      public static function getPetAllSkillPPIsFull(param1:PetInfo) : Boolean
      {
         var _loc4_:PetSkillInfo = null;
         var _loc2_:Boolean = true;
         var _loc3_:int = 0;
         while(_loc3_ < param1.skillNum)
         {
            if((_loc4_ = param1.skillArray[_loc3_] as PetSkillInfo).pp != SkillXMLInfo.getPP(_loc4_.id))
            {
               _loc2_ = false;
            }
            _loc3_++;
         }
         if(Boolean(param1.hideSKill) && param1.hideSKill.pp != SkillXMLInfo.getPP(param1.hideSKill.id))
         {
            _loc2_ = false;
         }
         return _loc2_;
      }
      
      public static function checkPetLearnFifthSkill(param1:int, param2:Function) : void
      {
         var catchTime:int = param1;
         var func:Function = param2;
         SocketConnection.sendByQueue(CommandID.GET_LEARNED_FIFTH_SKILL,[catchTime],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:Array = [];
            var _loc5_:int = 0;
            while(_loc5_ < _loc3_)
            {
               _loc4_.push(_loc2_.readUnsignedInt());
               _loc5_++;
            }
            if(func != null)
            {
               func(_loc4_);
            }
         });
      }
      
      public static function getPetLearnInitFifthSkill(param1:int) : Boolean
      {
         var _loc3_:PetSkillInfo = null;
         var _loc2_:PetInfo = getPetInfo(param1);
         if(_loc2_ != null)
         {
            _loc3_ = _loc2_.hideSKill;
            if(_loc3_ != null)
            {
               return true;
            }
         }
         return false;
      }
      
      public static function getPetIsEquipSpecificMarks(param1:int, param2:Array) : Boolean
      {
         var _loc4_:Array = null;
         var _loc5_:int = 0;
         var _loc6_:CountermarkInfo = null;
         var _loc3_:PetInfo = getPetInfo(param1);
         if(_loc3_ != null)
         {
            if(_loc3_.abilityMark > 0 || _loc3_.skillMark > 0 || _loc3_.commonMark > 0)
            {
               _loc4_ = [_loc3_.abilityMark,_loc3_.skillMark,_loc3_.commonMark];
               _loc5_ = 0;
               while(_loc5_ < 3)
               {
                  if(_loc4_[_loc5_] > 0)
                  {
                     if(CountermarkXMLInfo.isUniversalMark(_loc4_[_loc5_]))
                     {
                        _loc6_ = ItemManager.getUniversalMarkInfo(_loc4_[_loc5_]);
                     }
                     else
                     {
                        (_loc6_ = new CountermarkInfo()).markID = _loc4_[_loc5_];
                     }
                     if(param2.indexOf(_loc6_.markID) != -1)
                     {
                        return true;
                     }
                  }
                  _loc5_++;
               }
            }
            return false;
         }
         return false;
      }
   }
}
