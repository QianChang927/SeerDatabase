package com.robot.core.config.Ixml
{
   import com.robot.core.config.IXmlInfo.IMapInfo;
   import com.robot.core.config.IXmlInfo.IPass_rewardInfo;
   import org.taomee.ds.HashMap;
   
   public class Map_h5
   {
      
      private static var xmlClass:Class = Map_h5_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _itemHash:HashMap;
      
      {
         setup();
      }
      
      public function Map_h5()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:IMapInfo = null;
         _xml = XML(new xmlClass());
         _itemHash = new HashMap();
         var _loc1_:XMLList = _xml.elements("item");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = new IMapInfo();
            _loc3_.id = int(_loc2_.@id);
            _loc3_.name = String(_loc2_.@name);
            _loc3_.pic = String(_loc2_.@pic);
            _loc3_.sound = String(_loc2_.@sound);
            _loc3_.GroupID = int(_loc2_.@GroupID);
            _loc3_.GroupName = String(_loc2_.@GroupName);
            _loc3_.PrimaryScene = int(_loc2_.@PrimaryScene);
            _loc3_.PlayerXYZ = String(_loc2_.@PlayerXYZ);
            _loc3_.DeviceID = String(_loc2_.@DeviceID);
            _loc3_.DeviceScale = String(_loc2_.@DeviceScale);
            _loc3_.DeviceXYZ = String(_loc2_.@DeviceXYZ);
            _loc3_.NPCID = String(_loc2_.@NPCID);
            _loc3_.NPCScale = String(_loc2_.@NPCScale);
            _loc3_.NPCXYZ = String(_loc2_.@NPCXYZ);
            _loc3_.WildBossNum = int(_loc2_.@WildBossNum);
            _loc3_.WildBossPoint = String(_loc2_.@WildBossPoint);
            _loc3_.WildBossLifeTime = int(_loc2_.@WildBossLifeTime);
            _loc3_.WildBossID = String(_loc2_.@WildBossID);
            _loc3_.WildBossWeight = String(_loc2_.@WildBossWeight);
            _loc3_.hidenAllPlayers = int(_loc2_.@hidenAllPlayers);
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
      
      public static function getH5MapIdByFlashMapId(param1:int) : int
      {
         var mapId:int = param1;
         var arr:Array = _itemHash.getValues().filter(function(param1:IMapInfo, param2:int, param3:Array):Boolean
         {
            return int(param1.pic) == mapId;
         });
         return arr.length > 0 ? int(arr[0].id) : 9999999;
      }
   }
}
