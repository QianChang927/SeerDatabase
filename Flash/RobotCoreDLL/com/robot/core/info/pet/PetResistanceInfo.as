package com.robot.core.info.pet
{
   import flash.utils.IDataInput;
   
   public class PetResistanceInfo
   {
       
      
      public var resist_state:uint;
      
      public var red_gem:uint;
      
      public var green_gem:uint;
      
      public var reserve:uint;
      
      public var resist_all:uint;
      
      public var hurtResistarr:Array;
      
      public var effResistarr:Array;
      
      public var cirt:uint;
      
      public var cirt_adj:uint;
      
      public var regular:uint;
      
      public var regular_adj:uint;
      
      public var precent:uint;
      
      public var precent_adj:uint;
      
      public var ctl_1_idx:uint;
      
      public var ctl_1:uint;
      
      public var ctl_1_adj:uint;
      
      public var ctl_2_idx:uint;
      
      public var ctl_2:uint;
      
      public var ctl_2_adj:uint;
      
      public var ctl_3_idx:uint;
      
      public var ctl_3:uint;
      
      public var ctl_3_adj:uint;
      
      public var weak_1_idx:uint;
      
      public var weak_1:uint;
      
      public var weak_1_adj:uint;
      
      public var weak_2_idx:uint;
      
      public var weak_2:uint;
      
      public var weak_2_adj:uint;
      
      public var weak_3_idx:uint;
      
      public var weak_3:uint;
      
      public var weak_3_adj:uint;
      
      public function PetResistanceInfo(param1:IDataInput)
      {
         var _loc2_:uint = 0;
         var _loc3_:int = 0;
         this.hurtResistarr = [];
         this.effResistarr = [];
         super();
         _loc2_ = uint(param1.readUnsignedInt());
         this.cirt = this.getbitValue(_loc2_,17,16);
         this.cirt_adj = this.getbitValue(_loc2_,1,16);
         _loc2_ = uint(param1.readUnsignedInt());
         this.regular = this.getbitValue(_loc2_,17,16);
         this.regular_adj = this.getbitValue(_loc2_,1,16);
         _loc2_ = uint(param1.readUnsignedInt());
         this.precent = this.getbitValue(_loc2_,17,16);
         this.precent_adj = this.getbitValue(_loc2_,1,16);
         _loc3_ = 1;
         while(_loc3_ < 4)
         {
            _loc2_ = uint(param1.readUnsignedInt());
            this["ctl_" + _loc3_ + "_idx"] = this.getbitValue(_loc2_,17,8);
            this["ctl_" + _loc3_] = this.getbitValue(_loc2_,9,8);
            this["ctl_" + _loc3_ + "_adj"] = this.getbitValue(_loc2_,1,8);
            _loc3_++;
         }
         _loc3_ = 1;
         while(_loc3_ < 4)
         {
            _loc2_ = uint(param1.readUnsignedInt());
            this["weak_" + _loc3_ + "_idx"] = this.getbitValue(_loc2_,17,8);
            this["weak_" + _loc3_] = this.getbitValue(_loc2_,9,8);
            this["weak_" + _loc3_ + "_adj"] = this.getbitValue(_loc2_,1,8);
            _loc3_++;
         }
         this.resist_all = param1.readUnsignedInt();
         this.resist_state = param1.readUnsignedInt();
         this.red_gem = param1.readUnsignedInt();
         this.green_gem = param1.readUnsignedInt();
         this.reserve = param1.readUnsignedInt();
      }
      
      public static function getBit(param1:uint, param2:uint) : uint
      {
         return (param1 & 1 << param2 - 1) >> param2 - 1;
      }
      
      private function getbitValue(param1:int, param2:int, param3:int) : uint
      {
         var _loc4_:uint = 0;
         var _loc5_:int = 0;
         while(_loc5_ < param3)
         {
            _loc4_ += getBit(param1,param2 + _loc5_) * Math.pow(2,_loc5_);
            _loc5_++;
         }
         return _loc4_;
      }
   }
}
