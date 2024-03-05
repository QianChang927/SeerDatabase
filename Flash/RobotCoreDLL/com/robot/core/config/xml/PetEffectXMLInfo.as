package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class PetEffectXMLInfo
   {
      
      private static var xmlClass:Class = PetEffectXMLInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var _statXML:XMLList;
      
      public static var RACIAl_VALUE_ADDITION:String = "1";
      
      public static var SKILL_POWER_ADDITION:String = "2";
      
      {
         setup();
      }
      
      public function PetEffectXMLInfo()
      {
         super();
      }
      
      public static function getEffectType(param1:uint, param2:String) : String
      {
         var result:String = null;
         var xmllist:XMLList = null;
         var xl:XMLList = null;
         var xml:XML = null;
         var eid:uint = param1;
         var arg:String = param2;
         result = "0";
         xmllist = _statXML.(@Eid == eid);
         if(xmllist.length() > 0)
         {
            xl = xmllist.(@Args == arg);
            if(xl)
            {
               xml = xl.(@Idx > 1000)[0];
               if(xml)
               {
                  result = xml.@AdditionType;
               }
            }
         }
         return result;
      }
      
      public static function getEffectAdditonNum(param1:uint, param2:String) : int
      {
         var result:int = 0;
         var xmllist:XMLList = null;
         var xl:XMLList = null;
         var xml:XML = null;
         var eid:uint = param1;
         var arg:String = param2;
         result = 0;
         xmllist = _statXML.(@Eid == eid);
         if(xmllist.length() > 0)
         {
            xl = xmllist.(@Args == arg);
            if(xl)
            {
               xml = xl.(@Idx > 1000)[0];
               if(xml)
               {
                  result = int(xml.@AdditionNum);
               }
            }
         }
         return result;
      }
      
      private static function setup() : void
      {
         var item:XML = null;
         var _id:uint = 0;
         _dataMap = new HashMap();
         var xl:XMLList = XML(new xmlClass()).elements("NewSeIdx");
         _statXML = xl.(@Stat == 1 || @Stat == 4 || @Stat == 5);
         for each(item in xl)
         {
            _id = uint(item.@ItemId);
            if(_id > 0)
            {
               _dataMap.add(_id,item);
            }
            if(item.hasOwnProperty("Desc"))
            {
            }
         }
      }
      
      public static function getItemIdForEffectId(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1) as XML;
         return uint(_loc2_.@ItemId);
      }
      
      public static function getDes(param1:uint) : String
      {
         var _loc2_:XML = _dataMap.getValue(param1) as XML;
         return _loc2_.@Des;
      }
      
      public static function getEffect(param1:uint, param2:String) : String
      {
         var str:String = null;
         var xmllist:XMLList = null;
         var xl:XMLList = null;
         var xml:XML = null;
         var eid:uint = param1;
         var arg:String = param2;
         str = "";
         xmllist = _statXML.(@Eid == eid);
         if(xmllist.length() > 0)
         {
            xl = xmllist.(@Args == arg);
            if(xl)
            {
               xml = xl.(@Idx > 1000)[0];
               if(xml)
               {
                  str = xml.@Desc;
               }
            }
         }
         return str;
      }
      
      public static function getEffectDes(param1:uint, param2:String) : String
      {
         var str:String = null;
         var xmllist:XMLList = null;
         var xl:XMLList = null;
         var xml:XML = null;
         var eid:uint = param1;
         var arg:String = param2;
         str = "";
         xmllist = _statXML.(@Eid == eid);
         if(xmllist.length() > 0)
         {
            xl = xmllist.(@Args == arg);
            if(xl)
            {
               xml = xl.(@Idx > 1000)[0];
               if(xml)
               {
                  str = xml.@Intro;
               }
            }
         }
         return str;
      }
      
      public static function getStarLevel(param1:uint, param2:String) : int
      {
         var level:int = 0;
         var xmllist:XMLList = null;
         var xl:XMLList = null;
         var xml:XML = null;
         var eid:uint = param1;
         var arg:String = param2;
         level = 0;
         xmllist = _statXML.(@Eid == eid);
         if(xmllist.length() > 0)
         {
            xl = xmllist.(@Args == arg);
            if(xl)
            {
               xml = xl.(@Idx > 1000)[0];
               if(xml)
               {
                  level = int(xml.@StarLevel);
               }
            }
         }
         return level;
      }
      
      public static function getIntros(param1:String) : HashMap
      {
         var arr:HashMap = null;
         var xmllist:XMLList = null;
         var level:int = 0;
         var item:XML = null;
         var desc:String = param1;
         arr = new HashMap();
         xmllist = _statXML.(@Desc == desc);
         level = 0;
         if(xmllist.length() > 0)
         {
            for each(item in xmllist)
            {
               arr.add(int(item.@StarLevel),item.@Intro);
            }
         }
         return arr;
      }
      
      public static function getDescByIdx(param1:int) : String
      {
         var xml:XMLList = null;
         var item:XML = null;
         var idx:int = param1;
         xml = _statXML.(@Idx == idx.toString());
         if(xml.length() > 0)
         {
            var _loc3_:int = 0;
            var _loc4_:* = xml;
            for each(item in _loc4_)
            {
               return xml.@Desc.toString();
            }
         }
         return "";
      }
      
      public static function getEffectIdx(param1:uint, param2:String) : int
      {
         var idx:int = 0;
         var xmllist:XMLList = null;
         var xl:XMLList = null;
         var xml:XML = null;
         var eid:uint = param1;
         var arg:String = param2;
         idx = 0;
         xmllist = _statXML.(@Eid == eid);
         if(xmllist.length() > 0)
         {
            xl = xmllist.(@Args == arg);
            if(xl)
            {
               xml = xl.(@Idx > 1000)[0];
               if(xml)
               {
                  idx = int(xml.@Idx);
               }
            }
         }
         return idx;
      }
   }
}
