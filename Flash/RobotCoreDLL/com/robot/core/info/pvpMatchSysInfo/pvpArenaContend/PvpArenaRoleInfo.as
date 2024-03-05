package com.robot.core.info.pvpMatchSysInfo.pvpArenaContend
{
   import flash.utils.IDataInput;
   
   public class PvpArenaRoleInfo
   {
       
      
      public var role_id:int;
      
      public var role_pos:int;
      
      public var gamble_infos:Array;
      
      public function PvpArenaRoleInfo(param1:IDataInput)
      {
         var _loc3_:PvpArenaGambleInfo = null;
         super();
         this.role_id = param1.readUnsignedInt();
         this.role_pos = param1.readUnsignedInt();
         this.gamble_infos = new Array();
         var _loc2_:int = 0;
         while(_loc2_ < 3)
         {
            _loc3_ = new PvpArenaGambleInfo(param1);
            this.gamble_infos.push(_loc3_);
            _loc2_++;
         }
      }
   }
}
