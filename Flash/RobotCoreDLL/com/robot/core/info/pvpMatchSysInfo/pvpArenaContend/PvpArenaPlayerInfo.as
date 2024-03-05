package com.robot.core.info.pvpMatchSysInfo.pvpArenaContend
{
   import flash.utils.IDataInput;
   
   public class PvpArenaPlayerInfo
   {
       
      
      public var user_id:int;
      
      public var player_is_offline:int;
      
      public var pvpuser_cards:Array;
      
      public function PvpArenaPlayerInfo(param1:IDataInput)
      {
         var _loc3_:int = 0;
         super();
         this.user_id = param1.readUnsignedInt();
         this.player_is_offline = param1.readUnsignedInt();
         this.pvpuser_cards = new Array();
         var _loc2_:int = 0;
         while(_loc2_ < 4)
         {
            _loc3_ = int(param1.readUnsignedInt());
            this.pvpuser_cards.push(_loc3_);
            _loc2_++;
         }
      }
   }
}
