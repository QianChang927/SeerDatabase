package com.robot.core.info.pvpMatchSysInfo.pvpFlashSpirit
{
   import flash.utils.IDataInput;
   
   public class PvpGroupnoInfo
   {
       
      
      public var groupno_id:int;
      
      public var groupno_is_select:int;
      
      public var groupno_userid:int;
      
      public function PvpGroupnoInfo(param1:IDataInput)
      {
         super();
         this.groupno_id = param1.readUnsignedInt();
         this.groupno_is_select = param1.readUnsignedInt();
         this.groupno_userid = param1.readUnsignedInt();
      }
   }
}
