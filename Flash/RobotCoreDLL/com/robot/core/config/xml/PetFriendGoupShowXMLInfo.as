package com.robot.core.config.xml
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import org.taomee.ds.HashMap;
   
   public class PetFriendGoupShowXMLInfo
   {
      
      private static var xmlClass:Class = PetFriendGoupShowXMLInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var _xml:XML;
      
      {
         setup();
      }
      
      public function PetFriendGoupShowXMLInfo()
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
            if(!_loc3_.hasOwnProperty("@Name") || _loc3_.@Name.toString() == "")
            {
               throw new Error("Group的Name不能为空！");
            }
            if(_dataMap.containsKey(_loc3_.@TabName.toString()))
            {
               throw new Error("Group的Name不能重复！");
            }
            _dataMap.add(_loc2_.toString(),_loc3_);
            _loc2_++;
         }
      }
      
      public static function getNames() : Array
      {
         var _loc2_:XML = null;
         var _loc1_:Array = [];
         for each(_loc2_ in _dataMap.getValues())
         {
            _loc1_.push(String(_loc2_.@Name));
         }
         return _loc1_;
      }
      
      public static function getGoupXML(param1:String) : XML
      {
         var _loc2_:XML = null;
         for each(_loc2_ in _dataMap.getValues())
         {
            if(String(_loc2_.@Name) == param1)
            {
               return _loc2_;
            }
         }
         return null;
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
      
      public static function getEffectDesc(param1:String, param2:int) : String
      {
         var _loc4_:XML = null;
         var _loc5_:int = 0;
         var _loc3_:XML = getGoupXML(param1);
         for each(_loc4_ in _loc3_.elements("Pet"))
         {
            if((_loc5_ = int(_loc4_.@ID)) == param2)
            {
               return _loc4_.@Des.toString();
            }
         }
         return "";
      }
      
      public static function getCorePetId(param1:String) : int
      {
         var _loc2_:XML = getGoupXML(param1);
         var _loc3_:int = 0;
         if(_loc2_ != null && _loc2_.@CoreId != null && _loc2_.@CoreId != "")
         {
            _loc3_ = int(_loc2_.@CoreId);
         }
         return _loc3_;
      }
      
      public static function search(param1:String) : Array
      {
         var _loc3_:Array = null;
         var _loc4_:int = 0;
         var _loc5_:int = 0;
         var _loc6_:XMLList = null;
         var _loc7_:int = 0;
         var _loc8_:int = 0;
         var _loc9_:XML = null;
         param1 = param1.replace(/[\s\r\n]+/gim,"");
         var _loc2_:Array = new Array();
         if(param1 != null)
         {
            _loc3_ = PetFriendGoupShowXMLInfo.getGroups();
            _loc4_ = int(_loc3_.length);
            _loc5_ = 1;
            while(_loc5_ <= _loc4_)
            {
               _loc7_ = (_loc6_ = _loc3_[_loc5_ - 1].elements("Pet")).length();
               _loc8_ = 1;
               while(_loc8_ <= _loc7_)
               {
                  _loc9_ = _loc6_[_loc8_ - 1];
                  if(param1 == String(_loc9_.@ID) || String(_loc9_.@Name).indexOf(param1) != -1)
                  {
                     _loc2_.push(_loc3_[_loc5_ - 1].@Name);
                     break;
                  }
                  _loc8_++;
               }
               _loc5_++;
            }
         }
         return _loc2_;
      }
   }
}
