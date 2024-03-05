package com.robot.core.info.pvpMatchSysInfo.pvpFlashSpirit
{
   import flash.utils.IDataInput;
   
   public class PvpchessInfo
   {
       
      
      public var user_id:int;
      
      public var user_hand_seq:int;
      
      public var chess_card_infos:Array;
      
      public function PvpchessInfo(param1:IDataInput)
      {
         var _loc3_:PvpCardInfo = null;
         super();
         this.user_id = param1.readUnsignedInt();
         this.user_hand_seq = param1.readUnsignedInt();
         this.chess_card_infos = [];
         var _loc2_:int = 0;
         while(_loc2_ < 6)
         {
            _loc3_ = new PvpCardInfo(param1);
            this.chess_card_infos.push(_loc3_);
            _loc2_++;
         }
      }
   }
}
