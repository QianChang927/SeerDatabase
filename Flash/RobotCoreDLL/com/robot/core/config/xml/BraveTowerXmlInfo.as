package com.robot.core.config.xml
{
   import com.robot.core.info.BraveTowerInfo;
   import org.taomee.ds.HashMap;
   
   public class BraveTowerXmlInfo
   {
      
      private static var xmlClass:Class = BraveTowerXmlInfo_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _itemshashMap:HashMap;
      
      private static var _xmllist:XMLList;
      
      {
         setup();
      }
      
      public function BraveTowerXmlInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         var _loc2_:BraveTowerInfo = null;
         _xml = XML(new xmlClass());
         _itemshashMap = new HashMap();
         _xmllist = _xml.elements("item");
         for each(_loc1_ in _xmllist)
         {
            _loc2_ = new BraveTowerInfo();
            _loc2_.id = int(_loc1_.@id);
            _loc2_.rewardtype = _loc1_.@rewardtype;
            _loc2_.rewardid = _loc1_.@rewardid;
            _loc2_.rewardnum = _loc1_.@rewardnum;
            _loc2_.raidunlocktext = _loc1_.@raidunlocktext;
            _loc2_.raidunlockarg = int(_loc1_.@raidunlockarg);
            _loc2_.bigbossid = _loc1_.@bigbossid;
            _loc2_.bosslist = _loc1_.@bosslist;
            _loc2_.sebossid = _loc1_.@sebossid;
            _loc2_.bossgettext = _loc1_.@bossgettext;
            _loc2_.bossgetarg = int(_loc1_.@bossgetarg);
            _itemshashMap.add(_loc2_.id,_loc2_);
         }
      }
      
      public static function getAllItems() : Array
      {
         return _itemshashMap.getValues();
      }
      
      public static function getInfoById(param1:int) : BraveTowerInfo
      {
         return _itemshashMap.getValue(param1);
      }
   }
}
