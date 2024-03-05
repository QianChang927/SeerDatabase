package com.riaidea.utils.zip
{
   import flash.utils.ByteArray;
   
   public class CRC32
   {
      
      private static var crcTable:Array = makeCrcTable();
       
      
      public function CRC32()
      {
         super();
      }
      
      public static function getCRC32(param1:ByteArray, param2:int = 0, param3:int = 0) : uint
      {
         if(param2 >= param1.length)
         {
            param2 = int(param1.length);
         }
         if(param3 == 0)
         {
            param3 = param1.length - param2;
         }
         if(param3 + param2 > param1.length)
         {
            param3 = param1.length - param2;
         }
         var _loc4_:* = int(4294967295);
         var _loc5_:int = param2;
         while(_loc5_ < param3)
         {
            _loc4_ = int(crcTable[(_loc4_ ^ param1[_loc5_]) & 255]) ^ _loc4_ >>> 8;
            _loc5_++;
         }
         return _loc4_ ^ 4294967295;
      }
      
      private static function makeCrcTable() : Array
      {
         var _loc4_:uint = 0;
         var _loc5_:int = 0;
         var _loc1_:int = 3988292384;
         var _loc2_:Array = [];
         var _loc3_:int = 256;
         while(_loc3_--)
         {
            _loc4_ = uint(_loc3_);
            _loc5_ = 8;
            while(_loc5_--)
            {
               _loc4_ = !!(_loc4_ & 1) ? uint(_loc4_ >>> 1 ^ _loc1_) : uint(_loc4_ >>> 1);
            }
            _loc2_[_loc3_] = _loc4_;
         }
         return _loc2_;
      }
   }
}
