package com.netease.protobuf
{
   public final class Int64 extends Binary64
   {
       
      
      public function Int64(param1:uint = 0, param2:int = 0)
      {
         super(param1,param2);
      }
      
      public static function fromNumber(param1:Number) : Int64
      {
         return new Int64(param1,Math.floor(param1 / 4294967296));
      }
      
      public static function parseInt64(param1:String, param2:uint = 0) : Int64
      {
         var _loc6_:uint = 0;
         var _loc3_:* = param1.search(/^\-/) == 0;
         var _loc4_:uint = _loc3_ ? 1 : 0;
         if(param2 == 0)
         {
            if(param1.search(/^\-?0x/) == 0)
            {
               param2 = 16;
               _loc4_ += 2;
            }
            else
            {
               param2 = 10;
            }
         }
         if(param2 < 2 || param2 > 36)
         {
            throw new ArgumentError();
         }
         param1 = param1.toLowerCase();
         var _loc5_:Int64 = new Int64();
         while(_loc4_ < param1.length)
         {
            if((_loc6_ = param1.charCodeAt(_loc4_)) >= CHAR_CODE_0 && _loc6_ <= CHAR_CODE_9)
            {
               _loc6_ -= CHAR_CODE_0;
            }
            else
            {
               if(!(_loc6_ >= CHAR_CODE_A && _loc6_ <= CHAR_CODE_Z))
               {
                  throw new ArgumentError();
               }
               _loc6_ = uint((_loc6_ -= CHAR_CODE_A) + 10);
            }
            if(_loc6_ >= param2)
            {
               throw new ArgumentError();
            }
            _loc5_.mul(param2);
            _loc5_.add(_loc6_);
            _loc4_++;
         }
         if(_loc3_)
         {
            _loc5_.bitwiseNot();
            _loc5_.add(1);
         }
         return _loc5_;
      }
      
      final public function set high(param1:int) : void
      {
         internalHigh = param1;
      }
      
      final public function get high() : int
      {
         return internalHigh;
      }
      
      final public function toNumber() : Number
      {
         return this.high * 4294967296 + low;
      }
      
      final public function toString(param1:uint = 10) : String
      {
         var _loc4_:uint = 0;
         if(param1 < 2 || param1 > 36)
         {
            throw new ArgumentError();
         }
         switch(this.high)
         {
            case 0:
               return low.toString(param1);
            case -1:
               if((low & 2147483648) == 0)
               {
                  return (int(low | 2147483648) - 2147483648).toString(param1);
               }
               return int(low).toString(param1);
               break;
            default:
               if(low == 0 && this.high == 0)
               {
                  return "0";
               }
               var _loc2_:Array = [];
               var _loc3_:UInt64 = new UInt64(low,this.high);
               if(this.high < 0)
               {
                  _loc3_.bitwiseNot();
                  _loc3_.add(1);
               }
               do
               {
                  if((_loc4_ = uint(_loc3_.div(param1))) < 10)
                  {
                     _loc2_.push(_loc4_ + CHAR_CODE_0);
                  }
                  else
                  {
                     _loc2_.push(_loc4_ - 10 + CHAR_CODE_A);
                  }
               }
               while(_loc3_.high != 0);
               
               if(this.high < 0)
               {
                  return "-" + _loc3_.low.toString(param1) + String.fromCharCode.apply(String,_loc2_.reverse());
               }
               return _loc3_.low.toString(param1) + String.fromCharCode.apply(String,_loc2_.reverse());
         }
      }
   }
}
