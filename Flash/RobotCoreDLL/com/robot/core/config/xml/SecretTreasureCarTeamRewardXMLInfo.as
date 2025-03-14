package com.robot.core.config.xml
{
   import com.robot.core.zip.PreloadZipXMLController;
   import org.taomee.ds.HashMap;
   
   public class SecretTreasureCarTeamRewardXMLInfo
   {
      
      public static var configXml:XML;
      
      private static var _targetSubmenuName:String;
      
      private static var _fun:Function;
      
      private static var _menusHash:HashMap = new HashMap();
      
      private static var _itemHash:HashMap = new HashMap();
       
      
      public function SecretTreasureCarTeamRewardXMLInfo()
      {
         super();
      }
      
      public static function setup(param1:Function) : void
      {
         var callBack:Function = param1;
         _fun = callBack;
         PreloadZipXMLController.getXML("secretTreasureCarTeamReward_Config.xml",function(param1:*):void
         {
            var _loc3_:XML = null;
            configXml = new XML(param1);
            var _loc2_:XMLList = configXml.elements("menu");
            for each(_loc3_ in _loc2_)
            {
               _menusHash.add(uint(_loc3_.@id),_loc3_);
            }
            if(null != _fun)
            {
               _fun();
            }
         });
      }
      
      public static function getDefultMenuIndex() : int
      {
         var index:int = 0;
         var defultMenu:String = configXml.elements("defaultMenu")[0].@name;
         _targetSubmenuName = null == _targetSubmenuName ? defultMenu : _targetSubmenuName;
         index = int(configXml.menu.(@name.contains(_targetSubmenuName)).@id);
         return index;
      }
      
      public static function getCurIndextem(param1:int) : Array
      {
         var _loc5_:XML = null;
         var _loc6_:Object = null;
         var _loc2_:XML = _menusHash.getValue(param1);
         var _loc3_:XMLList = _loc2_.elements("item");
         var _loc4_:Array = [];
         for each(_loc5_ in _loc3_)
         {
            (_loc6_ = new Object()).itemName = _loc5_.@name;
            _loc6_.itemID = _loc5_.@itemID;
            _loc6_.require1 = _loc5_.@require1;
            _loc6_.require2 = _loc5_.@require2;
            _loc6_.require3 = _loc5_.@require3;
            _loc6_.require4 = _loc5_.@require4;
            _loc6_.restrictions = _loc5_.@restrictions;
            _loc6_.exchangeId = _loc5_.@exchangeId;
            _loc4_.push(_loc6_);
         }
         return _loc4_;
      }
      
      public static function getCurIndexViewMaxNum(param1:int) : int
      {
         var _loc2_:XML = _menusHash.getValue(param1);
         return int(_loc2_.@viewNum);
      }
      
      public static function getAllItem() : Array
      {
         var _loc3_:XML = null;
         var _loc4_:XMLList = null;
         var _loc5_:XML = null;
         var _loc6_:Object = null;
         var _loc1_:Array = [];
         var _loc2_:int = 0;
         while(_loc2_ < _menusHash.length)
         {
            _loc3_ = _menusHash.getValue(_loc2_);
            _loc4_ = _loc3_.elements("item");
            for each(_loc5_ in _loc4_)
            {
               (_loc6_ = new Object()).itemName = _loc5_.@name;
               _loc6_.itemID = _loc5_.@itemID;
               _loc6_.price = _loc5_.@price;
               _loc6_.requireLv = _loc5_.@requireLv;
               _loc6_.restrictions = _loc5_.@restrictions;
               _loc6_.exchangeId = _loc5_.@exchangeId;
               _loc1_.push(_loc6_);
            }
            _loc2_++;
         }
         return _loc1_;
      }
   }
}
