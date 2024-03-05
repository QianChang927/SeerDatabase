package com.robot.core.config.Ixml
{
   import com.robot.core.config.IXmlInfo.IPvp_taskInfo;
   import org.taomee.ds.HashMap;
   
   public class Pvp_task
   {
      
      private static var xmlClass:Class = Pvp_task_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _itemHash:HashMap;
      
      {
         setup();
      }
      
      public function Pvp_task()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:IPvp_taskInfo = null;
         _xml = XML(new xmlClass());
         _itemHash = new HashMap();
         var _loc1_:XMLList = _xml.elements("item");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = new IPvp_taskInfo();
            _loc3_.id = int(_loc2_.@id);
            _loc3_.title = String(_loc2_.@title);
            _loc3_.describe = String(_loc2_.@describe);
            _loc3_.tasktype = int(_loc2_.@tasktype);
            _loc3_.taskparam = String(_loc2_.@taskparam);
            _loc3_.value = int(_loc2_.@value);
            _loc3_.time = int(_loc2_.@time);
            _loc3_.time2 = String(_loc2_.@time2);
            _loc3_.init = int(_loc2_.@title);
            _loc3_.rewardinfo = String(_loc2_.@rewardinfo);
            _loc3_.rarity = int(_loc2_.@rarity);
            _loc3_.weight = int(_loc2_.@weight);
            _loc3_.userinfo = int(_loc2_.@userinfo);
            _loc3_.pos = int(_loc2_.@pos);
            _loc3_.subkey = int(_loc2_.@subkey);
            _loc3_.exp = int(_loc2_.@exp);
            _itemHash.add(int(_loc2_.@id),_loc3_);
         }
      }
      
      public static function getItem(param1:int) : IPvp_taskInfo
      {
         return _itemHash.getValue(param1);
      }
      
      public static function getItems() : Array
      {
         return _itemHash.getValues();
      }
   }
}
