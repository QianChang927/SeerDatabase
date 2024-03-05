package com.robot.core.info.pvpMatchSysInfo.pvpFlashSpirit
{
   import flash.utils.IDataInput;
   
   public class PvpChooseInfo
   {
       
      
      public var choiceuser_id:int;
      
      public var choiceuser_hand_seq:int;
      
      public var choiceuser_groupno_id:int;
      
      public function PvpChooseInfo(param1:IDataInput)
      {
         super();
         this.choiceuser_id = param1.readUnsignedInt();
         this.choiceuser_hand_seq = param1.readUnsignedInt();
         this.choiceuser_groupno_id = param1.readUnsignedInt();
      }
   }
}
