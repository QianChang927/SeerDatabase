package com.robot.core.config
{
   import org.taomee.ds.HashMap;
   
   public class ServerConfig
   {
      
      private static var xml:XML;
      
      private static var hashMap:HashMap = new HashMap();
       
      
      public function ServerConfig()
      {
         super();
      }
      
      public static function setup(param1:XML) : void
      {
         var _loc3_:XML = null;
         xml = param1;
         var _loc2_:uint = 1;
         for each(_loc3_ in xml.descendants("list"))
         {
            hashMap.add(_loc2_,_loc3_);
            _loc2_++;
         }
      }
      
      public static function getNameByID(param1:uint) : String
      {
         if(!hashMap.containsKey(param1))
         {
            return param1 + "服务器";
         }
         return hashMap.getValue(param1).@name;
      }
      
      public static function getMaxPeople(param1:uint) : uint
      {
         var _loc2_:XML = hashMap.getValue(param1);
         if(!_loc2_)
         {
            return uint(xml.@max);
         }
         if(uint(_loc2_.parent().@max) != 0)
         {
            return uint(_loc2_.parent().@max);
         }
         return uint(xml.@max);
      }
   }
}
