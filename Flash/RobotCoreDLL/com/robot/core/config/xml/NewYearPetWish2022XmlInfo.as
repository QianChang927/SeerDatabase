package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class NewYearPetWish2022XmlInfo
   {
      
      private static var xmlClass:Class = NewYearPetWish2022XmlInfo_xmlClass;
      
      private static var xml:XML;
      
      private static var pets:Array;
      
      private static var versions:HashMap;
      
      private static const VERSION_NUM:int = 2;
      
      {
         setup();
      }
      
      public function NewYearPetWish2022XmlInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         xml = XML(new xmlClass());
         parseXml();
      }
      
      public static function parseXml() : void
      {
         var _loc3_:XML = null;
         var _loc4_:int = 0;
         var _loc5_:Object = null;
         pets = [];
         var _loc1_:int = 0;
         while(_loc1_ < VERSION_NUM)
         {
            pets.push([]);
            _loc1_++;
         }
         versions = new HashMap();
         var _loc2_:XMLList = xml.SpringCustomPetInfo;
         for each(_loc3_ in _loc2_)
         {
            (_loc5_ = {}).id = int(_loc3_.@ID);
            _loc5_.pool = int(_loc3_.@CustomPoolID);
            _loc5_.pid = int(_loc3_.@MonsterID);
            _loc5_.star = int(_loc3_.@MonsterStar);
            pets[_loc5_.pool - 1].push(_loc5_);
         }
         _loc4_ = 0;
         while(_loc4_ < VERSION_NUM)
         {
            versions.add(_loc4_ + 1,pets[_loc4_]);
            _loc4_++;
         }
      }
      
      public static function get versionId() : int
      {
         return 0;
      }
      
      public static function getpetByVersion(param1:int) : Array
      {
         var _loc2_:Array = [];
         if(versions.containsKey(param1))
         {
            _loc2_ = versions.getValue(param1);
         }
         return _loc2_;
      }
      
      public static function getPetIdById(param1:int) : Object
      {
         var _loc4_:Object = null;
         var _loc2_:Array = [];
         var _loc3_:int = 0;
         while(_loc3_ < VERSION_NUM)
         {
            _loc2_ = _loc2_.concat(versions.getValue(_loc3_ + 1));
            _loc3_++;
         }
         for each(_loc4_ in _loc2_)
         {
            if(_loc4_["id"] == param1)
            {
               return _loc4_;
            }
         }
         return null;
      }
      
      public static function getIdByPetId(param1:int) : Object
      {
         var _loc4_:Object = null;
         var _loc2_:Array = [];
         var _loc3_:int = 0;
         while(_loc3_ < VERSION_NUM)
         {
            _loc2_ = _loc2_.concat(versions.getValue(_loc3_ + 1));
            _loc3_++;
         }
         for each(_loc4_ in _loc2_)
         {
            if(_loc4_["pid"] == param1)
            {
               return _loc4_;
            }
         }
         return null;
      }
   }
}
