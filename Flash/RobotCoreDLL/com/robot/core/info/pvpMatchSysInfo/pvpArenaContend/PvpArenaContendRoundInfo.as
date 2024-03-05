package com.robot.core.info.pvpMatchSysInfo.pvpArenaContend
{
   import flash.utils.IDataInput;
   
   public class PvpArenaContendRoundInfo
   {
       
      
      public var op_user_id:uint;
      
      public var op_troop_type:uint;
      
      public var round_num:uint;
      
      public var round_remain_time:uint;
      
      public var round_userid:uint;
      
      public var is_player_op:Boolean;
      
      public var playerInfosArr:Array;
      
      public var roleInfosArr:Array;
      
      public function PvpArenaContendRoundInfo(param1:IDataInput)
      {
         var _loc4_:PvpArenaPlayerInfo = null;
         var _loc5_:PvpArenaRoleInfo = null;
         super();
         this.op_user_id = param1.readUnsignedInt();
         this.op_troop_type = param1.readUnsignedInt();
         this.round_num = param1.readUnsignedInt();
         this.round_remain_time = param1.readUnsignedInt();
         this.round_userid = param1.readUnsignedInt();
         this.is_player_op = param1.readUnsignedInt() > 0 ? true : false;
         this.playerInfosArr = new Array();
         var _loc2_:int = 0;
         while(_loc2_ < 3)
         {
            _loc4_ = new PvpArenaPlayerInfo(param1);
            this.playerInfosArr.push(_loc4_);
            _loc2_++;
         }
         this.roleInfosArr = new Array();
         var _loc3_:int = 0;
         while(_loc3_ < 3)
         {
            _loc5_ = new PvpArenaRoleInfo(param1);
            this.roleInfosArr.push(_loc5_);
            _loc3_++;
         }
      }
   }
}
