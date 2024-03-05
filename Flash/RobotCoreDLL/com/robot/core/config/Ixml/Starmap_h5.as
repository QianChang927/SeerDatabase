package com.robot.core.config.Ixml
{
   import com.robot.core.config.IXmlInfo.IPass_rewardInfo;
   import com.robot.core.config.IXmlInfo.IStarmapInfo;
   import org.taomee.ds.HashMap;
   
   public class Starmap_h5
   {
      
      private static var xmlClass:Class = Starmap_h5_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _itemHash:HashMap;
      
      {
         setup();
      }
      
      public function Starmap_h5()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:IStarmapInfo = null;
         _xml = XML(new xmlClass());
         _itemHash = new HashMap();
         var _loc1_:XMLList = _xml.elements("item");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = new IStarmapInfo();
            _loc3_.id = int(_loc2_.@id);
            _loc3_.name = String(_loc2_.@name);
            _loc3_.intro = String(_loc2_.@intro);
            _loc3_.fun = String(_loc2_.@fun);
            _loc3_.type = int(_loc2_.@type);
            _loc3_.pic = String(_loc2_.@pic);
            _loc3_.Gotomap = int(_loc2_.@Gotomap);
            _loc3_.submap = String(_loc2_.@submap);
            _loc3_.TipType = String(_loc2_.@TipType);
            _loc3_.StarShow = int(_loc2_.@StarShow);
            _loc3_.StarContrl = String(_loc2_.@StarContrl);
            _loc3_.anima = int(_loc2_.@anima);
            _loc3_.TipShow = int(_loc2_.@TipShow);
            _loc3_.TipContrl = String(_loc2_.@TipContrl);
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
      
      public static function getStarmapInfoByH5MapId(param1:int) : IStarmapInfo
      {
         var H5MapId:int = param1;
         var arr:Array = _itemHash.getValues().filter(function(param1:IStarmapInfo, param2:int, param3:Array):Boolean
         {
            var _loc4_:*;
            return (_loc4_ = param1.submap.split("_")).indexOf(String(H5MapId)) >= 0;
         });
         return arr.length > 0 ? arr[0] : null;
      }
   }
}
