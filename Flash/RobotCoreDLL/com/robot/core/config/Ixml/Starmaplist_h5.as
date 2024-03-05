package com.robot.core.config.Ixml
{
   import com.robot.core.config.IXmlInfo.IPass_rewardInfo;
   import com.robot.core.config.IXmlInfo.IStarmaplistInfo;
   import org.taomee.ds.HashMap;
   
   public class Starmaplist_h5
   {
      
      private static var xmlClass:Class = Starmaplist_h5_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _itemHash:HashMap;
      
      {
         setup();
      }
      
      public function Starmaplist_h5()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:IStarmaplistInfo = null;
         _xml = XML(new xmlClass());
         _itemHash = new HashMap();
         var _loc1_:XMLList = _xml.elements("item");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = new IStarmaplistInfo();
            _loc3_.id = int(_loc2_.@id);
            _loc3_.name = String(_loc2_.@name);
            _loc3_.type = int(_loc2_.@type);
            _loc3_.pic = String(_loc2_.@pic);
            _loc3_.uni = int(_loc2_.@uni);
            _loc3_.StarID = String(_loc2_.@StarID);
            _loc3_.StarBG = String(_loc2_.@StarBG);
            _loc3_.isopen = int(_loc2_.@isopen);
            _itemHash.add(int(_loc2_.@id),_loc3_);
         }
      }
      
      public static function getItem(param1:int) : IPass_rewardInfo
      {
         return _itemHash.getValue(param1);
      }
      
      public static function getItems() : Array
      {
         return _itemHash.getValues();
      }
      
      public static function getStarmaplistInfoByH5StarMapId(param1:int) : IStarmaplistInfo
      {
         var H5StarMapId:int = param1;
         var arr:Array = _itemHash.getValues().filter(function(param1:IStarmaplistInfo, param2:int, param3:Array):Boolean
         {
            var _loc4_:*;
            return (_loc4_ = param1.StarID.split("_")).indexOf(String(H5StarMapId)) >= 0;
         });
         return arr.length > 0 ? arr[0] : null;
      }
   }
}
