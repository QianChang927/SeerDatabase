package com.robot.core.config.xml
{
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   
   public class TuijianJinglingXmlInfo
   {
      
      private static var xmlClass:Class = TuijianJinglingXmlInfo_xmlClass;
      
      private static var xml:XML;
      
      private static var typeHash:HashMap;
      
      private static var classicalTypes:HashMap;
      
      private static var petHash:HashMap;
      
      private static var _favoritePets:Array;
      
      {
         setup();
      }
      
      public function TuijianJinglingXmlInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         xml = XML(new xmlClass());
         parseXml();
      }
      
      public static function parseXml() : void
      {
         var _loc2_:XML = null;
         var _loc3_:XMLList = null;
         var _loc4_:XML = null;
         var _loc5_:Object = null;
         var _loc6_:Array = null;
         var _loc7_:Object = null;
         typeHash = new HashMap();
         classicalTypes = new HashMap();
         petHash = new HashMap();
         var _loc1_:XMLList = xml.recommend;
         for each(_loc2_ in _loc1_)
         {
            (_loc5_ = {}).type = int(_loc2_.@pettype);
            _loc5_.id = int(_loc2_.@ID);
            _loc5_.pid = int(_loc2_.@MonsterID);
            _loc5_.gainperiod = int(_loc2_.@gainperiod);
            _loc5_.gaindifficulty = int(_loc2_.@gaindifficulty);
            _loc5_.characteristic = int(_loc2_.@characteristic);
            _loc5_.petseries_id = int(_loc2_.@petseries_id);
            _loc5_.Des = String(_loc2_.@Des);
            _loc5_.Rarity = int(_loc2_.@Rarity);
            _loc5_.mouseClickFunc = String(_loc2_.@mouseClickFunc);
            if(typeHash.containsKey(_loc5_.type))
            {
               (_loc6_ = typeHash.getValue(_loc5_.type)).push(_loc5_);
               typeHash.add(_loc5_.type,_loc6_);
            }
            else
            {
               typeHash.add(_loc5_.type,[_loc5_]);
            }
            petHash.add(_loc5_.pid,_loc5_);
         }
         _loc3_ = xml.petseries;
         for each(_loc4_ in _loc3_)
         {
            (_loc7_ = {}).id = int(_loc4_.@id);
            _loc7_.Des = String(_loc4_.@Des);
            classicalTypes.add(_loc7_.id,_loc7_);
         }
      }
      
      public static function getclassicalTypeById(param1:int) : Object
      {
         return classicalTypes.getValue(param1);
      }
      
      public static function get classicalTypeArr() : Array
      {
         return classicalTypes.getValues();
      }
      
      public static function getTypeById(param1:int) : Object
      {
         return typeHash.getValue(param1);
      }
      
      public static function getAllPet() : Array
      {
         return typeHash.getValues();
      }
      
      public static function getfavoritePet(param1:Function = null) : void
      {
         var fun:Function = param1;
         _favoritePets = [];
         SocketConnection.sendByQueue(41295,[3,0],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:int = 0;
            while(_loc4_ < _loc3_)
            {
               _favoritePets.push(_loc2_.readUnsignedInt());
               _loc4_++;
            }
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      public static function colfavoritePet(param1:int, param2:Function = null) : void
      {
         var mid:int = param1;
         var fun:Function = param2;
         SocketConnection.sendByQueue(41295,[1,mid],function(param1:SocketEvent):void
         {
            _favoritePets = [];
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:int = 0;
            while(_loc4_ < _loc3_)
            {
               _favoritePets.push(_loc2_.readUnsignedInt());
               _loc4_++;
            }
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      public static function delfavoritePet(param1:int, param2:Function = null) : void
      {
         var mid:int = param1;
         var fun:Function = param2;
         SocketConnection.sendByQueue(41295,[2,mid],function(param1:SocketEvent):void
         {
            _favoritePets = [];
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:int = 0;
            while(_loc4_ < _loc3_)
            {
               _favoritePets.push(_loc2_.readUnsignedInt());
               _loc4_++;
            }
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      public static function get favoritePets() : Array
      {
         return _favoritePets;
      }
      
      public static function getfavoritePetsObjs() : Array
      {
         var _loc2_:int = 0;
         var _loc3_:Object = null;
         var _loc1_:Array = [];
         if(_favoritePets)
         {
            _loc2_ = 0;
            while(_loc2_ < _favoritePets.length)
            {
               _loc3_ = getPetById(_favoritePets[_loc2_]);
               if(_loc3_)
               {
                  _loc1_.push(_loc3_);
               }
               _loc2_++;
            }
         }
         return _loc1_;
      }
      
      public static function getPetById(param1:int) : Object
      {
         return petHash.getValue(param1);
      }
   }
}
