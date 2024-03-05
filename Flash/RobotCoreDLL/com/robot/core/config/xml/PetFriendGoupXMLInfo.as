package com.robot.core.config.xml
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import org.taomee.ds.HashMap;
   
   public class PetFriendGoupXMLInfo
   {
      
      private static var xmlClass:Class = PetFriendGoupXMLInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var _xml:XML;
      
      {
         setup();
      }
      
      public function PetFriendGoupXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc3_:XML = null;
         _dataMap = new HashMap();
         _xml = XML(new xmlClass());
         var _loc1_:XMLList = _xml.elements("Group");
         var _loc2_:int = 1;
         for each(_loc3_ in _loc1_)
         {
            if(!_loc3_.hasOwnProperty("@TabName") || _loc3_.@TabName.toString() == "")
            {
               throw new Error("Group的TabName不能为空！");
            }
            if(_dataMap.containsKey(_loc3_.@TabName.toString()))
            {
               throw new Error("Group的TabName不能重复！");
            }
            _dataMap.add(_loc2_.toString(),_loc3_);
            _loc2_++;
         }
      }
      
      public static function getTabNames() : Array
      {
         var _loc2_:XML = null;
         var _loc1_:Array = [];
         for each(_loc2_ in _dataMap.getValues())
         {
            _loc1_.push(String(_loc2_.@TabName));
         }
         return _loc1_;
      }
      
      public static function getGoupXML(param1:String) : XML
      {
         var _loc2_:XML = null;
         for each(_loc2_ in _dataMap.getValues())
         {
            if(String(_loc2_.@TabName) == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      public static function getGoupArt(param1:String) : String
      {
         var _loc2_:XML = getGoupXML(param1);
         if(_loc2_)
         {
            return String(_loc2_.@Art);
         }
         return "";
      }
      
      public static function getGroupPets(param1:String) : Array
      {
         var _loc4_:XML = null;
         var _loc2_:XML = getGoupXML(param1);
         var _loc3_:Array = [];
         if(_loc2_)
         {
            for each(_loc4_ in _loc2_.elements("Pet"))
            {
               _loc3_.push(_loc4_);
            }
         }
         return _loc3_;
      }
      
      public static function getGroups() : Array
      {
         return _dataMap.getValues();
      }
      
      public static function getPetPanel(param1:int) : String
      {
         var _loc3_:XML = null;
         var _loc4_:XML = null;
         var _loc5_:int = 0;
         var _loc2_:Array = getGroups();
         for each(_loc3_ in _loc2_)
         {
            for each(_loc4_ in _loc3_.elements("Pet"))
            {
               if((_loc5_ = int(_loc4_.@ID)) == param1)
               {
                  return _loc4_.@Go.toString();
               }
            }
         }
         return "";
      }
      
      public static function go(param1:String) : void
      {
         if(param1 == "")
         {
            return;
         }
         if(param1.substr(0,"map:".length) == "map:")
         {
            MapManager.changeMap(int(param1.substr("map:".length)));
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule(param1));
         }
      }
   }
}
