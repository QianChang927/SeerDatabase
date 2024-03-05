package com.robot.core.info.pvpMatchSysInfo.pvpLegionStruggle
{
   import flash.utils.IDataInput;
   
   public class PvpLegionStruggleRoundInfo
   {
       
      
      public var op_user_id:uint;
      
      public var op_troop_type:uint;
      
      public var round_num:uint;
      
      public var round_remain_time:uint;
      
      public var round_userid:uint;
      
      public var cur_round_winner:uint;
      
      public var displayInfosArr:Array;
      
      public var is_player_op:Boolean;
      
      public function PvpLegionStruggleRoundInfo(param1:IDataInput)
      {
         var _loc3_:PvpDisplayInfo = null;
         super();
         this.op_user_id = param1.readUnsignedInt();
         this.op_troop_type = param1.readUnsignedInt();
         this.round_num = param1.readUnsignedInt();
         this.round_remain_time = param1.readUnsignedInt();
         this.round_userid = param1.readUnsignedInt();
         this.cur_round_winner = param1.readUnsignedInt();
         this.is_player_op = param1.readUnsignedInt() > 0 ? true : false;
         this.displayInfosArr = new Array();
         var _loc2_:int = 0;
         while(_loc2_ < 2)
         {
            _loc3_ = new PvpDisplayInfo(param1);
            this.displayInfosArr.push(_loc3_);
            _loc2_++;
         }
      }
   }
}
