package com.robot.core.config.Ixml
{
   import com.robot.core.config.IXmlInfo.IPass_rewardInfo;
   import org.taomee.ds.HashMap;
   
   public class Pass_reward
   {
      
      private static var xmlClass:Class = Pass_reward_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _itemHash:HashMap;
      
      {
         setup();
      }
      
      public function Pass_reward()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:IPass_rewardInfo = null;
         _xml = XML(new xmlClass());
         _itemHash = new HashMap();
         var _loc1_:XMLList = _xml.elements("item");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = new IPass_rewardInfo();
            _loc3_.id = int(_loc2_.@id);
            _loc3_.freereward = String(_loc2_.@freereward);
            _loc3_.paidreward = String(_loc2_.@paidreward);
            _loc3_.diamondnum = int(_loc2_.@diamondnum);
            _loc3_.exp = int(_loc2_.@exp);
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
   }
}
