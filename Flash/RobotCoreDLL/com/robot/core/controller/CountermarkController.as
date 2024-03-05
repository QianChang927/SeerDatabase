package com.robot.core.controller
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.CountermarkXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.CountermarkEvent;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.userItem.CountermarkInfo;
   import com.robot.core.info.userItem.CountermarkItemInfo;
   import com.robot.core.info.userItem.CountermarkType;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.itemTip.CountermarkItemTip;
   import flash.events.Event;
   import flash.utils.ByteArray;
   import flash.utils.getDefinitionByName;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class CountermarkController
   {
      
      public static const STORAGE_MAX:int = 18;
      
      private static var _bagLength:int;
      
      private static var _storageLength:int;
      
      private static var _wildLength:int;
      
      private static var _generalMap:HashMap = new HashMap();
      
      private static var _universalMap:HashMap = new HashMap();
      
      private static var _info:CountermarkInfo;
      
      private static var _holeType:int;
      
      private static var _petInfo:PetInfo;
       
      
      public function CountermarkController()
      {
         super();
      }
      
      public static function getBagAbilityMarks(param1:Function = null) : void
      {
         var marks:Array = null;
         var pageIndex:int = 0;
         var func:Function = param1;
         var getAbilityList:Function = function():void
         {
            getBagAbilityMarkByPage(pageIndex,100,function(param1:Array):void
            {
               marks = marks.concat(param1);
               if(param1.length == 100)
               {
                  ++pageIndex;
                  getAbilityList();
               }
               else
               {
                  marks.sortOn(["markID","obtainTime"],[Array.NUMERIC | Array.DESCENDING,Array.NUMERIC | Array.DESCENDING]);
                  if(null != func)
                  {
                     func(marks);
                  }
               }
            });
         };
         marks = [];
         pageIndex = 0;
         getAbilityList();
      }
      
      public static function getStorageAbilityMarks(param1:Function = null) : void
      {
         var marks:Array = null;
         var pageIndex:int = 0;
         var func:Function = param1;
         var getAbilityList:Function = function():void
         {
            getStorageAbilityMarkByPage(pageIndex,100,function(param1:Array):void
            {
               marks = marks.concat(param1);
               if(param1.length == 100)
               {
                  ++pageIndex;
                  getAbilityList();
               }
               else
               {
                  marks.sortOn(["markID","obtainTime"],[Array.NUMERIC | Array.DESCENDING,Array.NUMERIC | Array.DESCENDING]);
                  if(null != func)
                  {
                     func(marks);
                  }
               }
            });
         };
         marks = [];
         pageIndex = 0;
         getAbilityList();
      }
      
      public static function getBagSkillMarks(param1:Function = null) : void
      {
         var marks:Array = null;
         var pageIndex:int = 0;
         var func:Function = param1;
         var getSkillList:Function = function():void
         {
            getBagSkillMarkByPage(pageIndex,100,function(param1:Array):void
            {
               marks = marks.concat(param1);
               if(param1.length == 100)
               {
                  ++pageIndex;
                  getSkillList();
               }
               else
               {
                  pageIndex = 0;
                  getQuanxiaoList();
               }
            });
         };
         var getQuanxiaoList:Function = function():void
         {
            getBagQuanxiaoMarkByPage(pageIndex,100,function(param1:Array):void
            {
               marks = marks.concat(param1);
               if(param1.length == 100)
               {
                  ++pageIndex;
                  getQuanxiaoList();
               }
               else
               {
                  marks.sortOn("markID",Array.NUMERIC);
                  if(null != func)
                  {
                     func(marks);
                  }
               }
            });
         };
         marks = [];
         pageIndex = 0;
         getSkillList();
      }
      
      public static function getAblityMarkByPage(param1:int = 0, param2:int = 100, param3:Function = null) : void
      {
         getCountermarkByPosAndPage(0,1,param1 * param2,param2,param3);
      }
      
      public static function getSkillMarkByPage(param1:int = 0, param2:int = 100, param3:Function = null) : void
      {
         getCountermarkByPosAndPage(0,2,param1 * param2,param2,param3);
      }
      
      public static function getBagMarkByPage(param1:int = 0, param2:int = 100, param3:Function = null) : void
      {
         getCountermarkByPosAndPage(1,0,param1 * param2,param2,param3);
      }
      
      public static function getStorageMarkByPage(param1:int = 0, param2:int = 100, param3:Function = null) : void
      {
         getCountermarkByPosAndPage(3,0,param1 * param2,param2,param3);
      }
      
      public static function getWildMarkByPage(param1:int = 0, param2:int = 100, param3:Function = null) : void
      {
         getCountermarkByPosAndPage(2,0,param1 * param2,param2,param3);
      }
      
      public static function getBagAbilityMarkByPage(param1:int = 0, param2:int = 100, param3:Function = null) : void
      {
         getCountermarkByPosAndPage(1,1,param1 * param2,param2,param3);
      }
      
      public static function getBagSkillMarkByPage(param1:int = 0, param2:int = 100, param3:Function = null) : void
      {
         getCountermarkByPosAndPage(1,2,param1 * param2,param2,param3);
      }
      
      public static function getBagQuanxiaoMarkByPage(param1:int = 0, param2:int = 100, param3:Function = null) : void
      {
         getCountermarkByPosAndPage(1,3,param1 * param2,param2,param3);
      }
      
      public static function getStorageAbilityMarkByPage(param1:int = 0, param2:int = 100, param3:Function = null) : void
      {
         getCountermarkByPosAndPage(3,1,param1 * param2,param2,param3);
      }
      
      public static function getCountermarkByPosAndPage(param1:int, param2:int, param3:int = 0, param4:int = 100, param5:Function = null) : void
      {
         var pos:int = param1;
         var type:int = param2;
         var start:int = param3;
         var pageSize:int = param4;
         var func:Function = param5;
         SocketConnection.sendByQueue(CommandID.QUERY_COUNTMARK_BY_TYPE_PAGE,[pos,type,start,pageSize],function(param1:SocketEvent):void
         {
            var _loc6_:CountermarkInfo = null;
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:Array = new Array();
            var _loc4_:int = _loc2_.readUnsignedInt() / 14;
            var _loc5_:int = 0;
            while(_loc5_ < _loc4_)
            {
               _loc6_ = new CountermarkInfo(_loc2_);
               addToCache(_loc6_);
               _loc3_.push(_loc6_);
               _loc5_++;
            }
            if(null != func)
            {
               func(_loc3_);
            }
         });
      }
      
      public static function addToCache(param1:CountermarkInfo) : void
      {
         if(CountermarkXMLInfo.isUniversalMark(param1.markID))
         {
            _universalMap.add(param1.obtainTime,param1);
         }
         else
         {
            _generalMap.add(param1.markID,param1);
         }
      }
      
      public static function getGeneralInfoById(param1:int) : CountermarkInfo
      {
         return _generalMap.getValue(param1);
      }
      
      public static function getUniversalInfoByMarkid(param1:int) : CountermarkInfo
      {
         var _loc2_:Array = null;
         var _loc3_:CountermarkInfo = null;
         if(_universalMap != null)
         {
            _loc2_ = _universalMap.getValues();
            if(!(Boolean(_loc2_) && Boolean(_loc2_.length)))
            {
               return null;
            }
            for each(_loc3_ in _loc2_)
            {
               if(_loc3_.markID == param1)
               {
                  return _loc3_;
               }
            }
         }
         return null;
      }
      
      public static function getUniversalInfoByObtainTime(param1:int) : CountermarkInfo
      {
         return _universalMap.getValue(param1);
      }
      
      public static function getInfo(param1:int) : CountermarkInfo
      {
         if(CountermarkXMLInfo.isUniversalMark(param1))
         {
            return getUniversalInfoByObtainTime(param1);
         }
         return getGeneralInfoById(param1);
      }
      
      public static function get bagLength() : int
      {
         return _bagLength;
      }
      
      public static function get storageLength() : int
      {
         return _storageLength;
      }
      
      public static function get wildLength() : int
      {
         return _wildLength;
      }
      
      public static function updatePackageLength(param1:Function = null) : void
      {
         var func:Function = param1;
         SocketConnection.sendByQueue(CommandID.COUNTMARK_GET_LENGTH,null,function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            _bagLength = _loc2_.readUnsignedInt();
            _wildLength = _loc2_.readUnsignedInt();
            _storageLength = _loc2_.readUnsignedInt();
            if(null != func)
            {
               func();
            }
         });
      }
      
      public static function filterCountermark(param1:Array, param2:PetInfo) : Array
      {
         var currentPetClass:int = 0;
         var markList:Array = param1;
         var petInfo:PetInfo = param2;
         currentPetClass = PetXMLInfo.getPetClass(petInfo.id);
         return markList.filter(function(param1:CountermarkInfo, param2:int, param3:Array):Boolean
         {
            if(param1.isInstall)
            {
               return false;
            }
            var _loc4_:*;
            if((_loc4_ = CountermarkXMLInfo.getMonsterIDs(param1.markID)).length > 0)
            {
               if(_loc4_.indexOf(petInfo.id) == -1)
               {
                  return false;
               }
            }
            else if(param1.isBindMon && PetXMLInfo.getPetClass(param1.bindMonID) != currentPetClass)
            {
               return false;
            }
            return true;
         });
      }
      
      private static function checkPetBindMintMarkInBag(param1:PetInfo, param2:CountermarkInfo) : int
      {
         var _loc6_:CountermarkItemInfo = null;
         var _loc3_:int = 0;
         var _loc4_:uint = CountermarkXMLInfo.getMintMarkClass(param2.markID);
         var _loc5_:Array = ItemManager.getEffectCMInfos();
         for each(_loc6_ in _loc5_)
         {
            if(Boolean(_loc6_.isBindMon) && _loc6_.bindMonId == param1.id && CountermarkXMLInfo.getMintMarkClass(_loc6_.itemID) == _loc4_)
            {
               _loc3_++;
            }
         }
         return _loc3_;
      }
      
      private static function checkPetBindMintNum(param1:PetInfo, param2:CountermarkInfo) : int
      {
         if(!CountermarkXMLInfo.isUniversalMark(param2.markID))
         {
            return 0;
         }
         var _loc3_:int = 0;
         var _loc4_:uint = CountermarkXMLInfo.getMintMarkClass(param2.markID);
         if(param1.commonMarkActived && param1.commonMark > 0 && CountermarkXMLInfo.getMintMarkClass(ItemManager.getUniversalMarkInfo(param1.commonMark).markID) == _loc4_)
         {
            _loc3_++;
         }
         if(param1.abilityMark > 0 && CountermarkXMLInfo.getMintMarkClass(ItemManager.getUniversalMarkInfo(param1.abilityMark).markID) == _loc4_)
         {
            _loc3_++;
         }
         if(param1.skillMark > 0 && CountermarkXMLInfo.getMintMarkClass(ItemManager.getUniversalMarkInfo(param1.skillMark).markID) == _loc4_)
         {
            _loc3_++;
         }
         return _loc3_;
      }
      
      public static function equipCountermark(param1:CountermarkInfo, param2:int, param3:PetInfo) : void
      {
         if(param2 == CountermarkType.HOLE_IS_ABILITY && param3.abilityMark > 0)
         {
            equipFailMessage("刻印孔上已装备了刻印了哦！");
            return;
         }
         if(param2 == CountermarkType.HOLE_IS_SKILL && param3.skillMark > 0)
         {
            equipFailMessage("刻印孔上已装备了刻印了哦！");
            return;
         }
         if(param2 == CountermarkType.HOLE_IS_COMMON && !param3.commonMarkActived)
         {
            equipFailMessage("你的通用刻印孔还没有激活哦！");
            return;
         }
         if(param2 == CountermarkType.HOLE_IS_COMMON && param3.commonMarkActived && param3.commonMark > 0)
         {
            equipFailMessage("你的刻印孔已装备了刻印了哦！");
            return;
         }
         _info = param1;
         _holeType = param2;
         _petInfo = param3;
         beginEquip(param1);
      }
      
      private static function equipFailMessage(param1:String = "") : void
      {
         if(param1 != "")
         {
            Alarm.show(param1);
         }
         EventManager.dispatchEvent(new CountermarkEvent(CountermarkEvent.EQUIP_FAIL,param1));
      }
      
      private static function onSocketError(param1:* = null) : void
      {
         equipFailMessage();
      }
      
      private static function beginEquip(param1:CountermarkInfo) : void
      {
         if(!CountermarkXMLInfo.isUniversalMark(param1.markID))
         {
            doEquip(param1,0);
            return;
         }
         bindPet(param1);
      }
      
      private static function bindPet(param1:CountermarkInfo) : void
      {
         var ids:Array = null;
         var alertString:String = null;
         var alertMarkName:String = null;
         var info:CountermarkInfo = param1;
         if(!info.isBindMon)
         {
            ids = CountermarkXMLInfo.getMonsterIDs(info.markID);
            if(CountermarkXMLInfo.isExclusive(info.markID) && CountermarkXMLInfo.getMonsterIDs(info.markID).indexOf(_petInfo.id) == -1)
            {
               equipFailMessage("这是其他精灵的专属刻印哦！不能使用在" + PetXMLInfo.getName(_petInfo.id) + "身上！");
               return;
            }
            alertMarkName = CountermarkItemTip.getColorName(info.markID);
            if(checkPetBindMintMarkInBag(_petInfo,info) >= 2)
            {
               alertString = alertMarkName + "尚未绑定精灵，使用之前必须绑定精灵，" + PetXMLInfo.getName(_petInfo.id) + "已绑定2个或以上该系列全能刻印且只能同时装备2个同系列刻印，是否确认绑定" + PetXMLInfo.getName(_petInfo.id) + "么？";
            }
            else
            {
               alertString = alertMarkName + "没有绑定精灵呢，使用之前必须绑定精灵的，确定要绑定" + PetXMLInfo.getName(_petInfo.id) + "么？";
            }
            EventManager.dispatchEvent(new Event("newseerBindMarkAlertShow"));
            Alert.show(alertString,function():void
            {
               if(info.isBindGem)
               {
                  selectSkill(info);
               }
               else
               {
                  doBindSkill(info,0);
               }
               EventManager.dispatchEvent(new Event("newseerBindMarkAlertClick"));
            },equipFailMessage);
         }
         else if(info.isBindGem)
         {
            if(!info.isBindMove)
            {
               selectSkill(info);
            }
            else
            {
               doEquip(info,info.obtainTime);
            }
         }
         else
         {
            doBindSkill(info,0);
         }
      }
      
      private static function selectSkill(param1:CountermarkInfo) : void
      {
         var onBindingMove:Function = null;
         var onBindingCancel:Function = null;
         var info:CountermarkInfo = param1;
         onBindingMove = function(param1:CountermarkEvent):void
         {
            EventManager.removeEventListener(CountermarkEvent.SKILL_SELECT,onBindingMove);
            EventManager.removeEventListener(CountermarkEvent.SKILL_CANCEL,onBindingCancel);
            var _loc2_:uint = param1.info as uint;
            doBindSkill(info,_loc2_);
         };
         onBindingCancel = function(param1:CountermarkEvent):void
         {
            EventManager.removeEventListener(CountermarkEvent.SKILL_SELECT,onBindingMove);
            EventManager.removeEventListener(CountermarkEvent.SKILL_CANCEL,onBindingCancel);
            equipFailMessage();
         };
         EventManager.addEventListener(CountermarkEvent.SKILL_SELECT,onBindingMove);
         EventManager.addEventListener(CountermarkEvent.SKILL_CANCEL,onBindingCancel);
         ModuleManager.showModule(ClientConfig.getAppModule("CountermarkMoveBingPanel"),"",_petInfo);
      }
      
      private static function doBindSkill(param1:CountermarkInfo, param2:int) : void
      {
         var info:CountermarkInfo = param1;
         var move:int = param2;
         var ExpeditionController:* = getDefinitionByName("com.robot.app2.control.ExpeditionController");
         if(ExpeditionController.isPetInBag(_petInfo.catchTime))
         {
            SocketConnection.sendByQueue(CommandID.COUNTERMARK_BANDING,[info.obtainTime,_petInfo.catchTime,_petInfo.id,move],function(param1:*):void
            {
               doEquip(info,info.obtainTime);
            },onSocketError);
         }
         else
         {
            SocketConnection.sendByQueue(45549,[info.obtainTime,_petInfo.catchTime,_petInfo.id,move],function(param1:*):void
            {
               doEquip(info,info.obtainTime);
            },onSocketError);
         }
      }
      
      private static function doEquip(param1:CountermarkInfo, param2:int) : void
      {
         var info:CountermarkInfo = param1;
         var obtainTime:int = param2;
         var ExpeditionController:* = getDefinitionByName("com.robot.app2.control.ExpeditionController");
         if(ExpeditionController.isPetInBag(_petInfo.catchTime))
         {
            SocketConnection.sendByQueue(CommandID.USE_COUNTERMARK,[_petInfo.catchTime,_holeType,info.markID,obtainTime],function(param1:*):void
            {
               var _loc2_:ByteArray = param1.data as ByteArray;
               _loc2_.position = 0;
               var _loc3_:uint = _loc2_.readUnsignedInt();
               var _loc4_:uint = _loc2_.readUnsignedInt();
               var _loc5_:uint = _loc2_.readUnsignedInt();
               EventManager.dispatchEvent(new CountermarkEvent(CountermarkEvent.EQUIP_ON,info));
               updateMintMark(info);
            },onSocketError);
         }
         else
         {
            SocketConnection.sendByQueue(45548,[_petInfo.catchTime,_holeType,info.markID,obtainTime],function(param1:*):void
            {
               var _loc2_:ByteArray = param1.data as ByteArray;
               _loc2_.position = 0;
               var _loc3_:uint = _loc2_.readUnsignedInt();
               var _loc4_:uint = _loc2_.readUnsignedInt();
               var _loc5_:uint = _loc2_.readUnsignedInt();
               EventManager.dispatchEvent(new CountermarkEvent(CountermarkEvent.EQUIP_ON,info));
               updateMintMark(info);
            },onSocketError);
         }
      }
      
      private static function updateMintMark(param1:CountermarkInfo) : void
      {
         ItemManager.getCountermark(param1.markID,param1.markID + 1,param1.catchTime);
      }
   }
}
