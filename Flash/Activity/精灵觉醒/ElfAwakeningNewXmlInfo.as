package com.robot.core.config.xml
{
   import com.robot.core.manager.SystemTimerManager;
   import org.taomee.ds.HashMap;
   
   public class ElfAwakeningNewXmlInfo
   {
      
      private static var xmlClass:Class = ElfAwakeningNewXmlInfo_xmlClass;
      
      private static var xmlClass1:Class = ElfAwakeningNewXmlInfo_xmlClass1;
      
      private static var xmlClass2:Class = ElfAwakeningNewXmlInfo_xmlClass2;
      
      private static var xmlClass3:Class = ElfAwakeningNewXmlInfo_xmlClass3;
      
      private static var xmlClass4:Class = ElfAwakeningNewXmlInfo_xmlClass4;
      
      private static var xmlClass5:Class = ElfAwakeningNewXmlInfo_xmlClass5;
      
      private static var xmlClass6:Class = ElfAwakeningNewXmlInfo_xmlClass6;
      
      private static var _levelsMap:HashMap;
      
      private static var _list:Object;
      
      private static var _levels:Object;
      
      private static var _tasks:Object;
      
      private static var bossBuff:Object;
      
      private static var bossLevel:Object;
      
      private static var condition:Object;
      
      private static var bossConfig:Object;
      
      private static var _awakeMap:HashMap;
      
      private static var _taskMap:HashMap;
      
      private static var _bossBuffMap:HashMap;
      
      private static var _bossLevelMap:HashMap;
      
      private static var conditionMap:HashMap;
      
      private static var bossConfigMap:HashMap;
       
      
      public function ElfAwakeningNewXmlInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:int = 0;
         _list = JSON.parse(new xmlClass());
         _levels = JSON.parse(new xmlClass1());
         _tasks = JSON.parse(new xmlClass2());
         bossBuff = JSON.parse(new xmlClass3());
         bossLevel = JSON.parse(new xmlClass4());
         condition = JSON.parse(new xmlClass5());
         bossConfig = JSON.parse(new xmlClass6());
         _awakeMap = new HashMap();
         var _loc1_:Array = _list["data"] as Array;
         _loc2_ = 0;
         while(_loc2_ < _loc1_.length)
         {
            if(_loc1_[_loc2_]["id"] > 0)
            {
               _awakeMap.add(_loc1_[_loc2_]["id"],_loc1_[_loc2_]);
            }
            _loc2_++;
         }
         _list = null;
         _levelsMap = new HashMap();
         var _loc3_:Array = _levels["data"] as Array;
         _loc2_ = 0;
         while(_loc2_ < _loc3_.length)
         {
            if(_loc3_[_loc2_]["id"] > 0)
            {
               _levelsMap.add(_loc3_[_loc2_]["id"],_loc3_[_loc2_]);
            }
            _loc2_++;
         }
         _levels = null;
         _taskMap = new HashMap();
         var _loc4_:Array = _tasks["data"] as Array;
         _loc2_ = 0;
         while(_loc2_ < _loc4_.length)
         {
            if(_loc4_[_loc2_]["id"] > 0)
            {
               _taskMap.add(_loc4_[_loc2_]["id"],_loc4_[_loc2_]);
            }
            _loc2_++;
         }
         _tasks = null;
         _bossBuffMap = new HashMap();
         var _loc5_:Array = bossBuff["data"] as Array;
         _loc2_ = 0;
         while(_loc2_ < _loc5_.length)
         {
            if(_loc5_[_loc2_]["id"] > 0)
            {
               _bossBuffMap.add(_loc5_[_loc2_]["id"],_loc5_[_loc2_]);
            }
            _loc2_++;
         }
         bossBuff = null;
         _bossLevelMap = new HashMap();
         var _loc6_:Array = bossLevel["data"] as Array;
         _loc2_ = 0;
         while(_loc2_ < _loc6_.length)
         {
            if(_loc6_[_loc2_]["id"] > 0)
            {
               _bossLevelMap.add(_loc6_[_loc2_]["id"],_loc6_[_loc2_]);
            }
            _loc2_++;
         }
         bossLevel = null;
         conditionMap = new HashMap();
         var _loc7_:Array = condition["data"] as Array;
         _loc2_ = 0;
         while(_loc2_ < _loc7_.length)
         {
            if(_loc7_[_loc2_]["id"] > 0)
            {
               conditionMap.add(_loc7_[_loc2_]["id"],_loc7_[_loc2_]);
            }
            _loc2_++;
         }
         bossConfigMap = new HashMap();
         var _loc8_:Array = bossConfig["data"] as Array;
         _loc2_ = 0;
         while(_loc2_ < _loc8_.length)
         {
            if(_loc8_[_loc2_]["id"] > 0)
            {
               bossConfigMap.add(_loc8_[_loc2_]["id"],_loc8_[_loc2_]);
            }
            _loc2_++;
         }
         bossConfig = null;
         condition = null;
         xmlClass = null;
         xmlClass1 = null;
         xmlClass2 = null;
         xmlClass3 = null;
         xmlClass4 = null;
         xmlClass5 = null;
         xmlClass6 = null;
      }
      
      public static function init() : void
      {
         if(_awakeMap == null)
         {
            setup();
         }
      }
      
      public static function getBossConfigByBid(param1:int) : Object
      {
         var _loc2_:Object = null;
         if(bossConfigMap)
         {
            _loc2_ = bossConfigMap.getValue(param1);
         }
         return _loc2_;
      }
      
      public static function getInfoByAid(param1:int) : Object
      {
         var _loc2_:Object = null;
         if(_awakeMap)
         {
            _loc2_ = _awakeMap.getValue(param1);
         }
         return _loc2_;
      }
      
      public static function getCurPet() : Object
      {
         var _loc1_:Object = null;
         var _loc2_:Array = null;
         var _loc3_:Object = null;
         var _loc4_:int = 0;
         if(_awakeMap)
         {
            _loc2_ = _awakeMap.getKeys();
            _loc4_ = 0;
            while(_loc4_ < _loc2_.length)
            {
               _loc3_ = _awakeMap.getValue(_loc2_[_loc4_]);
               if(_loc3_["awakentype"] == 1)
               {
                  return _loc3_;
               }
               _loc4_++;
            }
         }
         return _loc1_;
      }
      
      public static function getLastPets() : Array
      {
         var _loc1_:Array = null;
         var _loc2_:Array = null;
         var _loc3_:int = 0;
         var _loc4_:Object = null;
         if(_awakeMap)
         {
            _loc1_ = [];
            _loc2_ = _awakeMap.getKeys();
            _loc3_ = 0;
            while(_loc3_ < _loc2_.length)
            {
               if((_loc4_ = _awakeMap.getValue(_loc2_[_loc3_]))["awakentype"] == 2)
               {
                  _loc1_.push(_loc4_);
               }
               _loc3_++;
            }
         }
         return _loc1_;
      }
      
      public static function getAllInfo() : HashMap
      {
         return _awakeMap;
      }
      
      public static function getNextPet() : Object
      {
         var _loc1_:Object = null;
         var _loc2_:Array = null;
         var _loc3_:Object = null;
         var _loc4_:int = 0;
         if(_awakeMap)
         {
            _loc2_ = _awakeMap.getKeys();
            _loc4_ = 0;
            while(_loc4_ < _loc2_.length)
            {
               _loc3_ = _awakeMap.getValue(_loc2_[_loc4_]);
               if(_loc3_["awakentype"] == 3)
               {
                  return _loc3_;
               }
               _loc4_++;
            }
         }
         return _loc1_;
      }
      
      public static function getConditionsByLevelId(param1:int) : Array
      {
         var _loc2_:Array = null;
         var _loc3_:Object = null;
         var _loc4_:Array = null;
         var _loc5_:int = 0;
         var _loc6_:Object = null;
         if(Boolean(_levelsMap) && Boolean(conditionMap))
         {
            _loc2_ = [];
            _loc3_ = _levelsMap.getValue(param1);
            if(_loc3_)
            {
               _loc4_ = _loc3_.conditionid.split(";");
               _loc5_ = 0;
               while(_loc5_ < _loc4_.length)
               {
                  if(_loc6_ = getConditionById(parseInt(_loc4_[_loc5_])))
                  {
                     _loc2_.push(_loc6_);
                  }
                  _loc5_++;
               }
            }
         }
         return _loc2_;
      }
      
      public static function getConditionById(param1:int) : Object
      {
         return conditionMap.getValue(param1);
      }
      
      public static function getDesByAid(param1:int) : String
      {
         var _loc2_:Object = null;
         var _loc3_:String = null;
         if(_awakeMap)
         {
            _loc2_ = _awakeMap.getValue(param1);
            if(_loc2_)
            {
               _loc3_ = (_loc2_.des as String).substr(0);
               return _loc3_.replace("$",ItemXMLInfo.getName(_loc2_.itemurl)).replace("$",ItemXMLInfo.getName(_loc2_.monstername));
            }
         }
         return "";
      }
      
      public static function gkOpen(param1:int, param2:int = 0, param3:Boolean = false) : Boolean
      {
         var _loc4_:Boolean = false;
         var _loc6_:String = null;
         var _loc7_:String = null;
         var _loc8_:Date = null;
         var _loc9_:Date = null;
         var _loc10_:Array = null;
         var _loc11_:Array = null;
         var _loc12_:Date = null;
         var _loc5_:Object;
         if(_loc5_ = _awakeMap.getValue(param1))
         {
            _loc6_ = String(_loc5_.startdate);
            _loc7_ = String(_loc5_.enddate);
            _loc10_ = _loc6_.split("/");
            _loc11_ = _loc7_.split("/");
            _loc8_ = new Date(_loc10_.length > 0 ? parseInt(_loc10_[0]) : 2024,_loc10_.length > 1 ? parseInt(_loc10_[1]) - 1 : 0,_loc10_.length > 2 ? parseInt(_loc10_[2]) : 0,_loc10_.length > 3 ? parseInt(_loc10_[3]) : 0);
            if(_loc7_ != "")
            {
               _loc9_ = new Date(_loc11_.length > 0 ? parseInt(_loc11_[0]) : 2024,_loc11_.length > 1 ? parseInt(_loc11_[1]) - 1 : 0,_loc11_.length > 2 ? parseInt(_loc11_[2]) : 0,_loc11_.length > 3 ? parseInt(_loc11_[3]) : 0);
            }
            if(param2 > 1)
            {
               _loc12_ = new Date(_loc10_.length > 0 ? parseInt(_loc10_[0]) : 2024,_loc10_.length > 1 ? parseInt(_loc10_[1]) - 1 : 0,_loc10_.length > 2 ? parseInt(_loc10_[2]) : 0);
               _loc8_ = new Date(_loc12_.time + (param2 - 1) * 24 * 60 * 60 * 1000);
            }
            _loc4_ = getIsOpen(_loc8_,_loc9_);
         }
         return _loc4_ || param3;
      }
      
      public static function getOpenTime(param1:int, param2:int = 0, param3:Boolean = false) : String
      {
         var _loc6_:String = null;
         var _loc7_:String = null;
         var _loc8_:Date = null;
         var _loc9_:Date = null;
         var _loc10_:Array = null;
         var _loc11_:Array = null;
         var _loc12_:Date = null;
         var _loc4_:* = "";
         var _loc5_:Object;
         if(_loc5_ = _awakeMap.getValue(param1))
         {
            _loc6_ = String(_loc5_.startdate);
            _loc7_ = String(_loc5_.enddate);
            _loc10_ = _loc6_.split("/");
            _loc11_ = _loc7_.split("/");
            _loc8_ = new Date(_loc10_.length > 0 ? parseInt(_loc10_[0]) : 2024,_loc10_.length > 1 ? parseInt(_loc10_[1]) - 1 : 0,_loc10_.length > 2 ? parseInt(_loc10_[2]) : 0,_loc10_.length > 3 ? parseInt(_loc10_[3]) : 0);
            if(_loc7_ != "")
            {
               _loc9_ = new Date(_loc11_.length > 0 ? parseInt(_loc11_[0]) : 2024,_loc11_.length > 1 ? parseInt(_loc11_[1]) - 1 : 0,_loc11_.length > 2 ? parseInt(_loc11_[2]) : 0,_loc11_.length > 3 ? parseInt(_loc11_[3]) : 0);
            }
            if(param2 > 1)
            {
               _loc12_ = new Date(_loc10_.length > 0 ? parseInt(_loc10_[0]) : 2024,_loc10_.length > 1 ? parseInt(_loc10_[1]) - 1 : 0,_loc10_.length > 2 ? parseInt(_loc10_[2]) : 0);
               _loc8_ = new Date(_loc12_.time + (param2 - 1) * 24 * 60 * 60 * 1000);
            }
            _loc4_ = _loc8_.month + 1 + "月" + _loc8_.date + "日" + (_loc8_.hours == 0 ? "" : _loc8_.hours + "时") + "解锁";
         }
         return _loc4_;
      }
      
      public static function getIsOpen(param1:Date, param2:Date) : Boolean
      {
         var _loc3_:Boolean = false;
         if(param2 == null)
         {
            return SystemTimerManager.sysBJDate.time >= param1.time;
         }
         return SystemTimerManager.sysBJDate.time >= param1.time && SystemTimerManager.sysBJDate.time < param2.time;
      }
      
      public static function getTimeDes(param1:int) : String
      {
         var _loc4_:String = null;
         var _loc5_:String = null;
         var _loc6_:Date = null;
         var _loc7_:Date = null;
         var _loc8_:Array = null;
         var _loc9_:Array = null;
         var _loc2_:String = "";
         var _loc3_:Object = _awakeMap.getValue(param1);
         if(_loc3_)
         {
            _loc4_ = String(_loc3_.startdate);
            _loc5_ = String(_loc3_.enddate);
            _loc8_ = _loc4_.split("/");
            _loc9_ = _loc5_.split("/");
            _loc6_ = new Date(_loc8_.length > 0 ? parseInt(_loc8_[0]) : 2024,_loc8_.length > 1 ? parseInt(_loc8_[1]) - 1 : 0,_loc8_.length > 2 ? parseInt(_loc8_[2]) : 0,_loc8_.length > 3 ? parseInt(_loc8_[3]) : 0);
            _loc2_ += _loc6_.month + 1 + "月" + _loc6_.date + "日";
            if(_loc5_ != "")
            {
               _loc7_ = new Date(_loc9_.length > 0 ? parseInt(_loc9_[0]) : 2024,_loc9_.length > 1 ? parseInt(_loc9_[1]) - 1 : 0,_loc9_.length > 2 ? parseInt(_loc9_[2]) : 0,_loc9_.length > 3 ? parseInt(_loc9_[3]) : 0);
               _loc2_ += "-" + (_loc7_.month + 1) + "月" + _loc7_.date + "日";
            }
         }
         return _loc2_;
      }
      
      public static function getTasksByAId(param1:int) : Array
      {
         var _loc2_:Array = null;
         var _loc4_:Array = null;
         var _loc5_:int = 0;
         var _loc6_:int = 0;
         var _loc7_:Object = null;
         var _loc3_:Object = _awakeMap.getValue(param1);
         if(_loc3_)
         {
            _loc2_ = [];
            if(_loc4_ = _loc3_.taskid.split(";"))
            {
               _loc5_ = 0;
               while(_loc5_ < _loc4_.length)
               {
                  _loc6_ = parseInt(_loc4_[_loc5_]);
                  if(_loc7_ = getTaskInfoById(_loc6_))
                  {
                     if(!(_loc7_.tasktype == 2 && _loc3_.awakentype != 1))
                     {
                        if(!(_loc7_.tasktype == 2 && _loc3_.awakentype == 1 && !gkOpen(_loc3_.id)))
                        {
                           _loc2_.push(_loc7_);
                        }
                     }
                  }
                  _loc5_++;
               }
            }
         }
         return _loc2_;
      }
      
      public static function getTaskInfoById(param1:int) : Object
      {
         return _taskMap.getValue(param1);
      }
      
      public static function getBossBuffInfoById(param1:int) : Object
      {
         return _bossBuffMap.getValue(param1);
      }
      
      public static function getBossBuffsByAId(param1:int) : Array
      {
         var _loc2_:Array = null;
         var _loc4_:int = 0;
         var _loc5_:Object = null;
         var _loc6_:Array = null;
         var _loc7_:Array = null;
         var _loc8_:Array = null;
         var _loc9_:int = 0;
         var _loc10_:Object = null;
         var _loc3_:Object = _awakeMap.getValue(param1);
         if(_loc3_)
         {
            _loc2_ = [];
            _loc4_ = int(_loc3_.bosslevelid);
            if(_loc5_ = _bossLevelMap.getValue(_loc4_))
            {
               _loc6_ = _loc5_.buffeffect.split(";");
               _loc7_ = _loc5_.debuffeffect.split(";");
               _loc8_ = _loc6_.concat(_loc7_);
               _loc9_ = 0;
               while(_loc9_ < _loc8_.length)
               {
                  if(_loc10_ = getBossBuffInfoById(parseInt(_loc8_[_loc9_])))
                  {
                     _loc2_.push(_loc10_);
                  }
                  _loc9_++;
               }
            }
         }
         return _loc2_;
      }
      
      public static function getBossInfoByAid(param1:int) : Object
      {
         var _loc2_:Object = null;
         var _loc4_:int = 0;
         var _loc3_:Object = _awakeMap.getValue(param1);
         if(_loc3_)
         {
            _loc4_ = int(_loc3_.bosslevelid);
            _loc2_ = _bossLevelMap.getValue(_loc4_);
         }
         return _loc2_;
      }
      
      public static function getLevelsInfoByAid(param1:int) : Array
      {
         var _loc2_:Array = null;
         var _loc4_:Array = null;
         var _loc5_:int = 0;
         var _loc6_:Object = null;
         var _loc3_:Object = _awakeMap.getValue(param1);
         if(_loc3_)
         {
            _loc2_ = [];
            _loc4_ = _loc3_.levelid.split(";");
            _loc5_ = 0;
            while(_loc5_ < _loc4_.length)
            {
               if(_loc6_ = getLevelByLevelId(parseInt(_loc4_[_loc5_])))
               {
                  _loc2_.push(_loc6_);
               }
               _loc5_++;
            }
         }
         return _loc2_;
      }
      
      public static function getLevelByLevelId(param1:int) : Object
      {
         var _loc2_:Object = null;
         return _levelsMap.getValue(param1);
      }
      
      public static function getLevelEnemysByid(param1:int) : Array
      {
         var _loc2_:Array = null;
         var _loc4_:Array = null;
         var _loc5_:int = 0;
         var _loc3_:Object = _levelsMap.getValue(param1);
         if(_loc3_)
         {
            _loc2_ = [];
            _loc4_ = _loc3_.troopid.split(";");
            _loc5_ = 0;
            while(_loc5_ < _loc4_.length)
            {
               _loc2_.push(parseInt(_loc4_[_loc5_]));
               _loc5_++;
            }
         }
         return _loc2_;
      }
      
      public static function getBossEnemysByid(param1:int) : Array
      {
         var _loc2_:Array = null;
         var _loc4_:Array = null;
         var _loc5_:int = 0;
         var _loc3_:Object = _bossLevelMap.getValue(param1);
         if(_loc3_)
         {
            _loc2_ = [];
            _loc4_ = _loc3_.troopid.split(";");
            _loc5_ = 0;
            while(_loc5_ < _loc4_.length)
            {
               _loc2_.push(parseInt(_loc4_[_loc5_]));
               _loc5_++;
            }
         }
         return _loc2_;
      }
   }
}
