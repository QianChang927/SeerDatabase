package com.robot.core.config.xml
{
   import com.robot.core.info.itemUse.ItemUseInfo;
   import org.taomee.ds.HashMap;
   
   public class ItemUseXMLInfo
   {
      
      private static var xmlClass:Class = ItemUseXMLInfo_xmlClass;
      
      private static var xml:XML = XML(new xmlClass());
      
      private static var xmllist:XMLList;
      
      private static var _map:HashMap;
      
      {
         setup();
      }
      
      public function ItemUseXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _map = new HashMap();
         xmllist = xml.descendants("item");
         for each(_loc1_ in xmllist)
         {
            _map.add(uint(_loc1_.@id),_loc1_);
         }
      }
      
      public static function getInfoById(param1:int) : ItemUseInfo
      {
         var _loc2_:ItemUseInfo = null;
         var _loc3_:XML = _map.getValue(param1);
         if(_loc3_ != null)
         {
            _loc2_ = new ItemUseInfo();
            _loc2_.itemId = _loc3_.@id;
            _loc2_.type = _loc3_.@type;
            _loc2_.status = _loc3_.@status != null ? int(_loc3_.@status) : 0;
            _loc2_.updatePetInfo = _loc3_.@updatePetInfo != null ? int(_loc3_.@updatePetInfo) : 0;
            _loc2_.showCompleted = _loc3_.@showCompleted != null ? int(_loc3_.@showCompleted) : 0;
            _loc2_.param = _loc3_.@param != null ? String(_loc3_.@param) : "";
         }
         return _loc2_;
      }
   }
}
