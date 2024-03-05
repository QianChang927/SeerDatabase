package com.robot.core.info.pvpMatchSysInfo.pvpFlashSpirit
{
   import flash.utils.IDataInput;
   
   public class PvpCardInfo
   {
       
      
      public var user_hand_seq:int;
      
      public var cardNum:int;
      
      public var cardType:int;
      
      public var cardMoveState:int;
      
      public var cardValue:int;
      
      public function PvpCardInfo(param1:IDataInput)
      {
         var _loc3_:String = null;
         super();
         var _loc2_:uint = uint(param1.readUnsignedInt());
         if(_loc2_ > 0)
         {
            _loc3_ = _loc2_.toString();
            this.user_hand_seq = int(_loc3_.substr(0,1));
            this.cardNum = int(_loc3_.substr(1,2));
            this.cardType = int(_loc3_.substr(3,1));
            this.cardMoveState = int(_loc3_.substr(4,1));
            this.cardValue = int(_loc3_.substr(5,1));
         }
         else
         {
            this.user_hand_seq = 0;
            this.cardNum = 0;
            this.cardType = 0;
            this.cardMoveState = 0;
            this.cardValue = 0;
         }
      }
   }
}
