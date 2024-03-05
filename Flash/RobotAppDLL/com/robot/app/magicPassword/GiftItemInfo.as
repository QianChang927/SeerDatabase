package com.robot.app.magicPassword
{
   import com.robot.core.ui.alert.Alarm;
   import flash.utils.IDataInput;
   
   public class GiftItemInfo
   {
       
      
      private var giftList_a:Array;
      
      private var _coundA:Array;
      
      public function GiftItemInfo(param1:IDataInput)
      {
         var _loc3_:uint = 0;
         var _loc4_:uint = 0;
         var _loc5_:uint = 0;
         var _loc6_:uint = 0;
         super();
         this.giftList_a = new Array();
         this._coundA = new Array();
         var _loc2_:uint = uint(param1.readUnsignedInt());
         if(_loc2_ == 1)
         {
            _loc3_ = uint(param1.readUnsignedInt());
            _loc4_ = 0;
            while(_loc4_ < _loc3_)
            {
               _loc5_ = uint(param1.readUnsignedInt());
               _loc6_ = uint(param1.readUnsignedInt());
               this._coundA.push(_loc6_);
               this.giftList_a.push(_loc5_);
               _loc4_++;
            }
         }
         else
         {
            Alarm.show("你已经有这些礼物了");
         }
      }
      
      public function getCound(param1:uint) : uint
      {
         return this._coundA[this.giftList_a.indexOf(param1)];
      }
      
      public function get giftList() : Array
      {
         return this.giftList_a;
      }
   }
}
