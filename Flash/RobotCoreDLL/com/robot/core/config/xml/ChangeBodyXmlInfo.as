package com.robot.core.config.xml
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.ChangeBodyInfo;
   import org.taomee.ds.HashMap;
   
   public class ChangeBodyXmlInfo
   {
      
      private static var xmlClass:Class = ChangeBodyXmlInfo_xmlClass;
      
      private static var _infoMap:HashMap = new HashMap();
       
      
      public function ChangeBodyXmlInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:ChangeBodyInfo = null;
         var _loc1_:XMLList = XML(new xmlClass()).elements("list");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = new ChangeBodyInfo();
            _loc3_.itemId = uint(_loc2_.@itemId);
            _loc3_.petId = uint(_loc2_.@changePetId);
            _loc3_.petUrl = ClientConfig.getPetSwfPath(_loc3_.petId);
            _infoMap.add(_loc3_.itemId,_loc3_);
         }
      }
      
      public static function getInfoByItemId(param1:uint) : ChangeBodyInfo
      {
         if(_infoMap.length == 0)
         {
            setup();
         }
         return _infoMap.getValue(param1) as ChangeBodyInfo;
      }
      
      public static function getAllItemIds() : Array
      {
         if(_infoMap.length == 0)
         {
            setup();
         }
         return _infoMap.getKeys();
      }
   }
}
