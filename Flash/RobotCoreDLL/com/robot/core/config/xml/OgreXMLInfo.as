package com.robot.core.config.xml
{
   import flash.geom.Point;
   import org.taomee.ds.HashMap;
   
   public class OgreXMLInfo
   {
      
      private static var xmlClass:Class = OgreXMLInfo_xmlClass;
      
      private static var _ogreMap:HashMap;
      
      private static var _bossMap:HashMap;
      
      private static var _specialMap:HashMap;
      
      private static var timeBossMap:HashMap;
      
      {
         setup();
      }
      
      public function OgreXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:XMLList = null;
         var _loc4_:XML = null;
         var _loc5_:XMLList = null;
         var _loc6_:XML = null;
         var _loc7_:XMLList = null;
         var _loc8_:XML = null;
         var _loc9_:String = null;
         var _loc10_:Array = null;
         var _loc11_:int = 0;
         var _loc12_:int = 0;
         var _loc13_:Array = null;
         var _loc14_:String = null;
         var _loc15_:Array = null;
         var _loc16_:int = 0;
         var _loc17_:Array = null;
         _ogreMap = new HashMap();
         var _loc1_:XMLList = XML(new xmlClass()).elements("ogre")[0].elements("item");
         for each(_loc2_ in _loc1_)
         {
            _loc11_ = int((_loc10_ = (_loc9_ = _loc2_.@pList.toString()).split("|")).length);
            _loc12_ = 0;
            while(_loc12_ < _loc11_)
            {
               _loc13_ = _loc10_[_loc12_].split(",");
               _loc10_[_loc12_] = new Point(_loc13_[0],_loc13_[1]);
               _loc12_++;
            }
            _ogreMap.add(uint(_loc2_.@id),_loc10_);
         }
         _bossMap = new HashMap();
         _loc3_ = XML(new xmlClass()).elements("boss")[0].elements("item");
         for each(_loc4_ in _loc3_)
         {
            _bossMap.add(uint(_loc4_.@id),_loc4_);
         }
         _specialMap = new HashMap();
         _loc5_ = XML(new xmlClass()).elements("special")[0].elements("item");
         for each(_loc6_ in _loc5_)
         {
            _loc16_ = int((_loc15_ = (_loc14_ = String(_loc6_.@pList.toString())).split("|")).length);
            _loc12_ = 0;
            while(_loc12_ < _loc16_)
            {
               _loc17_ = _loc15_[_loc12_].split(",");
               _loc15_[_loc12_] = new Point(_loc17_[0],_loc17_[1]);
               _loc12_++;
            }
            _specialMap.add(uint(_loc6_.@id),_loc15_);
         }
         timeBossMap = new HashMap();
         _loc7_ = XML(new xmlClass()).elements("timeBoss")[0].elements("item");
         for each(_loc8_ in _loc7_)
         {
            timeBossMap.add(uint(_loc8_.@petID),_loc8_);
         }
      }
      
      public static function getOgreList(param1:uint) : Array
      {
         return _ogreMap.getValue(param1);
      }
      
      public static function getBossList(param1:uint, param2:uint) : Array
      {
         var str:String = null;
         var arr:Array = null;
         var len:int = 0;
         var k:int = 0;
         var parr:Array = null;
         var mapID:uint = param1;
         var region:uint = param2;
         var xml:XML = _bossMap.getValue(mapID);
         if(xml)
         {
            xml = xml.elements("region").(@id == region)[0];
            if(xml)
            {
               str = xml.@pList.toString();
               arr = str.split("|");
               len = int(arr.length);
               k = 0;
               while(k < len)
               {
                  parr = arr[k].split(",");
                  arr[k] = new Point(parr[0],parr[1]);
                  k++;
               }
               return arr;
            }
         }
         return null;
      }
      
      public static function getSpecialList(param1:uint) : Array
      {
         return _specialMap.getValue(param1);
      }
      
      public static function getOgreMapList() : Array
      {
         return _ogreMap.getKeys();
      }
      
      public static function getTimeBossList() : Array
      {
         return timeBossMap.getKeys();
      }
      
      public static function getWeekdayPets(param1:uint) : Array
      {
         var _loc3_:uint = 0;
         var _loc6_:XML = null;
         var _loc7_:XMLList = null;
         var _loc8_:XML = null;
         var _loc2_:Array = [];
         var _loc4_:Array = timeBossMap.getValues();
         var _loc5_:uint = 0;
         while(_loc5_ < _loc4_.length)
         {
            if(_loc6_ = XML(_loc4_[_loc5_]))
            {
               if(_loc6_.hasOwnProperty("date"))
               {
                  _loc7_ = _loc6_.date;
                  if(_loc6_.hasOwnProperty("@petID"))
                  {
                     _loc3_ = uint(_loc6_.@petID);
                  }
                  for each(_loc8_ in _loc7_)
                  {
                     if(_loc8_)
                     {
                        if(_loc8_.hasOwnProperty("@week"))
                        {
                           if(_loc8_.@week == param1)
                           {
                              _loc2_.push(_loc3_);
                           }
                        }
                     }
                  }
               }
            }
            _loc5_++;
         }
         return _loc2_;
      }
      
      public static function getTimeBossDays(param1:uint) : Array
      {
         var _loc4_:XMLList = null;
         var _loc5_:XML = null;
         var _loc2_:Array = [];
         var _loc3_:XML = timeBossMap.getValue(param1);
         if(_loc3_)
         {
            if(_loc4_ = _loc3_.date)
            {
               for each(_loc5_ in _loc4_)
               {
                  if(_loc5_.hasOwnProperty("@week"))
                  {
                     _loc2_.push(_loc5_.@week);
                  }
               }
            }
         }
         return _loc2_;
      }
      
      public static function getTBFightModel(param1:uint) : uint
      {
         var _loc2_:XML = timeBossMap.getValue(param1);
         if(_loc2_)
         {
            if(_loc2_.hasOwnProperty("@fightModel"))
            {
               return 1;
            }
         }
         return 2;
      }
      
      public static function getTBWeekDay(param1:uint, param2:String) : XML
      {
         var _loc4_:XMLList = null;
         var _loc5_:XML = null;
         var _loc3_:XML = timeBossMap.getValue(param1);
         if(_loc3_)
         {
            if(_loc4_ = _loc3_.date)
            {
               for each(_loc5_ in _loc4_)
               {
                  if(_loc5_.hasOwnProperty("@week"))
                  {
                     if(_loc5_.@week == param2)
                     {
                        return _loc5_;
                     }
                  }
               }
            }
         }
         return null;
      }
      
      public static function getTBMaps(param1:uint, param2:String) : Array
      {
         var _loc5_:XMLList = null;
         var _loc6_:XML = null;
         var _loc3_:Array = [];
         var _loc4_:XML;
         if(_loc4_ = getTBWeekDay(param1,param2))
         {
            if(_loc5_ = _loc4_.hour)
            {
               for each(_loc6_ in _loc5_)
               {
                  if(_loc6_.hasOwnProperty("@mapID"))
                  {
                     _loc3_.push(uint(_loc6_.@mapID));
                  }
               }
            }
         }
         return _loc3_;
      }
      
      public static function getTBHours(param1:uint, param2:String, param3:uint) : XML
      {
         var _loc5_:XMLList = null;
         var _loc6_:XML = null;
         var _loc4_:XML;
         if(_loc4_ = getTBWeekDay(param1,param2))
         {
            if(_loc5_ = _loc4_.hour)
            {
               for each(_loc6_ in _loc5_)
               {
                  if(_loc6_.hasOwnProperty("@mapID"))
                  {
                     if(uint(_loc6_.@mapID) == param3)
                     {
                        return _loc6_;
                     }
                  }
               }
            }
         }
         return null;
      }
      
      public static function getTBMsg(param1:uint, param2:String, param3:uint) : String
      {
         var _loc4_:XML;
         if(_loc4_ = getTBHours(param1,param2,param3))
         {
            if(_loc4_.hasOwnProperty("msg"))
            {
               return String(_loc4_.msg);
            }
         }
         return "";
      }
      
      public static function getTBMapPoint(param1:uint, param2:String, param3:uint) : Array
      {
         var _loc5_:String = null;
         var _loc6_:Array = null;
         var _loc7_:int = 0;
         var _loc8_:Array = null;
         var _loc4_:XML;
         if((_loc4_ = getTBHours(param1,param2,param3)).hasOwnProperty("@pList"))
         {
            _loc6_ = (_loc5_ = _loc4_.@pList.toString()).split("|");
            _loc7_ = 0;
            while(_loc7_ < _loc6_.length)
            {
               _loc8_ = _loc6_[_loc7_].split(",");
               _loc6_[_loc7_] = new Point(_loc8_[0],_loc8_[1]);
               _loc7_++;
            }
            return _loc6_;
         }
         return null;
      }
      
      public static function getTBShowHour(param1:uint, param2:String, param3:uint) : Array
      {
         var _loc5_:String = null;
         var _loc6_:Array = null;
         var _loc4_:XML;
         if((_loc4_ = getTBHours(param1,param2,param3)).hasOwnProperty("@showHour"))
         {
            return (_loc5_ = _loc4_.@showHour).split("|");
         }
         return null;
      }
      
      public static function getTBShowMinute(param1:uint, param2:String, param3:uint) : Array
      {
         var _loc5_:String = null;
         var _loc6_:Array = null;
         var _loc4_:XML;
         if((_loc4_ = getTBHours(param1,param2,param3)).hasOwnProperty("@showMinute"))
         {
            return (_loc5_ = _loc4_.@showMinute).split("|");
         }
         return null;
      }
      
      public static function getTBLastTime(param1:uint, param2:String, param3:uint) : uint
      {
         var _loc4_:XML;
         if((_loc4_ = getTBHours(param1,param2,param3)).hasOwnProperty("@lastTime"))
         {
            return uint(_loc4_.@lastTime);
         }
         return 0;
      }
      
      public static function getTBDes(param1:uint, param2:String) : Array
      {
         var _loc4_:String = null;
         var _loc5_:Array = null;
         var _loc3_:XML = getTBWeekDay(param1,param2);
         if(_loc3_.hasOwnProperty("des"))
         {
            return (_loc4_ = _loc3_.des).split("$$");
         }
         return null;
      }
      
      public static function getTBSucDes(param1:uint, param2:String) : Array
      {
         var _loc4_:String = null;
         var _loc5_:Array = null;
         var _loc3_:XML = timeBossMap.getValue(param1);
         if(_loc3_)
         {
            if(_loc3_.hasOwnProperty("sucDes"))
            {
               return (_loc4_ = _loc3_.sucDes).split("$$");
            }
         }
         return null;
      }
      
      public static function getTBLoseDes(param1:uint, param2:String) : Array
      {
         var _loc4_:String = null;
         var _loc5_:Array = null;
         var _loc3_:XML = timeBossMap.getValue(param1);
         if(_loc3_)
         {
            if(_loc3_.hasOwnProperty("lostDes"))
            {
               return (_loc4_ = _loc3_.lostDes).split("$$");
            }
         }
         return null;
      }
      
      public static function getTBEscapeDes(param1:uint, param2:String) : Array
      {
         var _loc4_:String = null;
         var _loc5_:Array = null;
         var _loc3_:XML = timeBossMap.getValue(param1);
         if(_loc3_)
         {
            if(_loc3_.hasOwnProperty("escapeDes"))
            {
               return (_loc4_ = _loc3_.escapeDes).split("$$");
            }
         }
         return null;
      }
   }
}
