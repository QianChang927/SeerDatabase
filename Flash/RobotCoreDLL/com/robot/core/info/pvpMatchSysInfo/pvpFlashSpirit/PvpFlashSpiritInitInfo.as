package com.robot.core.info.pvpMatchSysInfo.pvpFlashSpirit
{
   import flash.utils.IDataInput;
   
   public class PvpFlashSpiritInitInfo
   {
       
      
      public var pvpchessInfos:Array;
      
      public var board_infos:Array;
      
      public var next_user_id:uint;
      
      public var round_num:uint;
      
      public var round_remain_time:uint;
      
      public var last_optype:uint;
      
      public function PvpFlashSpiritInitInfo(param1:IDataInput)
      {
         var _loc4_:PvpchessInfo = null;
         var _loc5_:PvpCardInfo = null;
         super();
         this.pvpchessInfos = [];
         var _loc2_:int = 0;
         while(_loc2_ < 2)
         {
            _loc4_ = new PvpchessInfo(param1);
            this.pvpchessInfos.push(_loc4_);
            _loc2_++;
         }
         this.board_infos = [];
         var _loc3_:int = 0;
         while(_loc3_ < 9)
         {
            _loc5_ = new PvpCardInfo(param1);
            this.board_infos.push(_loc5_);
            _loc3_++;
         }
         this.next_user_id = param1.readUnsignedInt();
         this.round_num = param1.readUnsignedInt();
         this.round_remain_time = param1.readUnsignedInt();
         this.last_optype = param1.readUnsignedInt();
      }
   }
}
