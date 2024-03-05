package com.robot.core.info.pvpMatchSysInfo.pvpArenaContend
{
   import flash.utils.IDataInput;
   
   public class PvpArenaGambleInfo
   {
       
      
      public var user_id:int;
      
      public var points:int;
      
      public function PvpArenaGambleInfo(param1:IDataInput)
      {
         super();
         this.user_id = param1.readUnsignedInt();
         this.points = param1.readUnsignedInt();
      }
   }
}
