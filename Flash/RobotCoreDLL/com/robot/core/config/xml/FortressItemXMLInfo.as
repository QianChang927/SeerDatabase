package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class FortressItemXMLInfo
   {
      
      private static var xmlClass:Class = FortressItemXMLInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      {
         setup();
      }
      
      public function FortressItemXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         _dataMap = new HashMap();
         var _loc1_:XMLList = XML(new xmlClass()).elements("LiveItem");
         for each(_loc2_ in _loc1_)
         {
            _dataMap.add(uint(_loc2_.@ID),_loc2_);
         }
      }
      
      public static function getName(param1:uint) : String
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return String(_loc2_.@Name);
         }
         return "";
      }
      
      public static function getPrice(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return uint(_loc2_.@Price);
         }
         return 0;
      }
      
      public static function getDes(param1:uint) : String
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return String(_loc2_.@Des);
         }
         return "";
      }
      
      public static function getPreBuildingID(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return uint(_loc2_.@PreBuildingID);
         }
         return 0;
      }
      
      public static function getFormName(param1:uint, param2:uint) : String
      {
         var str:String = null;
         var id:uint = param1;
         var form:uint = param2;
         var item:XML = _dataMap.getValue(id);
         if(item)
         {
            item = item.elements("Form").(uint(@ID) == form)[0];
            if(item)
            {
               str = String(item.@Name);
               return str;
            }
         }
         return "";
      }
      
      public static function getNextLevel(param1:uint, param2:uint) : String
      {
         var str:String = null;
         var id:uint = param1;
         var form:uint = param2;
         var item:XML = _dataMap.getValue(id);
         if(item)
         {
            item = item.elements("Form").(uint(@ID) == form)[0];
            if(item)
            {
               str = String(item.@NeedTeamLv);
               return str;
            }
         }
         return "";
      }
      
      public static function getMaxLevel(param1:uint) : String
      {
         var _loc3_:XMLList = null;
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            _loc3_ = _loc2_.elements("Form");
            if(_loc3_)
            {
               if(_loc3_.length() == 0)
               {
                  return "";
               }
               _loc2_ = _loc3_[_loc3_.length() - 1];
               return String(_loc2_.@ID);
            }
         }
         return "";
      }
      
      public static function getNextLevExp(param1:uint, param2:uint) : uint
      {
         var str:String = null;
         var id:uint = param1;
         var form:uint = param2;
         var item:XML = _dataMap.getValue(id);
         if(item)
         {
            item = item.elements("Form").(uint(@ID) == form)[0];
            if(item)
            {
               str = String(item.@NeedTeamExp);
               if(str != "")
               {
                  return uint(str);
               }
            }
         }
         return 0;
      }
      
      public static function getMaxHP(param1:uint, param2:uint) : String
      {
         var str:String = null;
         var id:uint = param1;
         var form:uint = param2;
         var item:XML = _dataMap.getValue(id);
         if(item)
         {
            item = item.elements("Form").(uint(@ID) == form)[0];
            if(item)
            {
               str = String(item.@MaxHP);
               return str;
            }
         }
         return "";
      }
      
      public static function getAtk(param1:uint, param2:uint) : String
      {
         var str:String = null;
         var id:uint = param1;
         var form:uint = param2;
         var item:XML = _dataMap.getValue(id);
         if(item)
         {
            item = item.elements("Form").(uint(@ID) == form)[0];
            if(item)
            {
               str = String(item.@Atk);
               return str;
            }
         }
         return "";
      }
      
      public static function getDef(param1:uint, param2:uint) : String
      {
         var str:String = null;
         var id:uint = param1;
         var form:uint = param2;
         var item:XML = _dataMap.getValue(id);
         if(item)
         {
            item = item.elements("Form").(uint(@ID) == form)[0];
            if(item)
            {
               str = String(item.@Def);
               return str;
            }
         }
         return "";
      }
      
      public static function getScience(param1:uint, param2:uint) : String
      {
         var str:String = null;
         var id:uint = param1;
         var form:uint = param2;
         var item:XML = _dataMap.getValue(id);
         if(item)
         {
            item = item.elements("Form").(uint(@ID) == form)[0];
            if(item)
            {
               str = String(item.@Science);
               return str;
            }
         }
         return "";
      }
      
      public static function getResearch(param1:uint, param2:uint) : String
      {
         var str:String = null;
         var id:uint = param1;
         var form:uint = param2;
         var item:XML = _dataMap.getValue(id);
         if(item)
         {
            item = item.elements("Form").(uint(@ID) == form)[0];
            if(item)
            {
               str = String(item.@Research);
               return str;
            }
         }
         return "";
      }
      
      public static function getEnergy(param1:uint, param2:uint) : String
      {
         var str:String = null;
         var id:uint = param1;
         var form:uint = param2;
         var item:XML = _dataMap.getValue(id);
         if(item)
         {
            item = item.elements("Form").(uint(@ID) == form)[0];
            if(item)
            {
               str = String(item.@Energy);
               return str;
            }
         }
         return "";
      }
      
      public static function getNextForm(param1:uint, param2:uint) : uint
      {
         var id:uint = param1;
         var form:uint = param2;
         var item:XML = _dataMap.getValue(id);
         if(item)
         {
            item = item.elements("Form").(uint(@ID) == form)[0];
            if(item)
            {
               return uint(item.@NextForm);
            }
         }
         return 0;
      }
      
      public static function getNextFormNeedExp(param1:uint, param2:uint) : uint
      {
         var id:uint = param1;
         var form:uint = param2;
         var item:XML = _dataMap.getValue(id);
         if(item)
         {
            item = item.elements("Form").(uint(@ID) == form)[0];
            if(item)
            {
               return uint(item.@NeedTeamExp);
            }
         }
         return 0;
      }
      
      public static function getResIDs(param1:uint, param2:uint) : Array
      {
         var arr:Array = null;
         var i:int = 0;
         var id:uint = param1;
         var form:uint = param2;
         var item:XML = _dataMap.getValue(id);
         if(item)
         {
            arr = [];
            item = item.elements("Form").(uint(@ID) == form)[0];
            if(item)
            {
               i = 1;
               while(i <= 4)
               {
                  arr.push(int(item.attribute("ResID" + i.toString())));
                  i++;
               }
               return arr;
            }
            return [];
         }
         return [];
      }
      
      public static function getResMaxs(param1:uint, param2:uint) : Array
      {
         var arr:Array = null;
         var i:int = 0;
         var id:uint = param1;
         var form:uint = param2;
         var item:XML = _dataMap.getValue(id);
         if(item)
         {
            arr = [];
            item = item.elements("Form").(uint(@ID) == form)[0];
            if(item)
            {
               i = 1;
               while(i <= 4)
               {
                  arr.push(int(item.attribute("ResMax" + i.toString())));
                  i++;
               }
               return arr;
            }
            return [];
         }
         return [];
      }
      
      public static function getAllResMax(param1:uint, param2:uint) : uint
      {
         var _loc4_:uint = 0;
         var _loc5_:uint = 0;
         var _loc3_:Array = getResMaxs(param1,param2);
         for each(_loc5_ in _loc3_)
         {
            _loc4_ += _loc5_;
         }
         return _loc4_;
      }
      
      public static function getFunID(param1:uint) : int
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(!_loc2_.hasOwnProperty("@Fun"))
         {
            return 0;
         }
         return int(_loc2_.@Fun);
      }
      
      public static function getFunIsCom(param1:uint) : Boolean
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(!_loc2_.hasOwnProperty("@isCom"))
         {
            return false;
         }
         return Boolean(int(_loc2_.@isCom));
      }
      
      public static function getShootRadius(param1:uint, param2:uint) : uint
      {
         var id:uint = param1;
         var form:uint = param2;
         var item:XML = _dataMap.getValue(id);
         if(item)
         {
            item = item.elements("Form").(uint(@ID) == form)[0];
            if(item)
            {
               return uint(item.@ShootRadius);
            }
         }
         return 0;
      }
   }
}
