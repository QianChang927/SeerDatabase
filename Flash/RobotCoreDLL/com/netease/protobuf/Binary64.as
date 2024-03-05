package com.netease.protobuf
{
   public class Binary64
   {
      
      internal static const CHAR_CODE_0:uint = "0".charCodeAt();
      
      internal static const CHAR_CODE_9:uint = "9".charCodeAt();
      
      internal static const CHAR_CODE_A:uint = "a".charCodeAt();
      
      internal static const CHAR_CODE_Z:uint = "z".charCodeAt();
       
      
      public var low:uint;
      
      internal var internalHigh:uint;
      
      public function Binary64(param1:uint = 0, param2:uint = 0)
      {
         super();
         this.low = param1;
         this.internalHigh = param2;
      }
      
      final internal function div(param1:uint) : uint
      {
         var _loc2_:uint = 0;
         _loc2_ = this.internalHigh % param1;
         var _loc3_:uint = (this.low % param1 + _loc2_ * 6) % param1;
         this.internalHigh /= param1;
         var _loc4_:Number = (_loc2_ * 4294967296 + this.low) / param1;
         this.internalHigh += uint(_loc4_ / 4294967296);
         this.low = _loc4_;
         return _loc3_;
      }
      
      final internal function mul(param1:uint) : void
      {
         var _loc2_:Number = Number(this.low) * param1;
         this.internalHigh *= param1;
         this.internalHigh += uint(_loc2_ / 4294967296);
         this.low *= param1;
      }
      
      final internal function add(param1:uint) : void
      {
         var _loc2_:Number = Number(this.low) + param1;
         this.internalHigh += uint(_loc2_ / 4294967296);
         this.low = _loc2_;
      }
      
      final internal function bitwiseNot() : void
      {
         this.low = ~this.low;
         this.internalHigh = ~this.internalHigh;
      }
   }
}
