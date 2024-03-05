package com.robot.core.info.pvpMatchSysInfo.pvpLegionStruggle
{
   import flash.utils.IDataInput;
   
   public class PvpDisplayInfo
   {
       
      
      public var user_id:int;
      
      public var win_count:int;
      
      public var last_num:int;
      
      public function PvpDisplayInfo(param1:IDataInput)
      {
         super();
         this.user_id = param1.readUnsignedInt();
         this.win_count = param1.readUnsignedInt();
         this.last_num = param1.readUnsignedInt();
      }
   }
}
