package com.robot.core.info.pvpMatchSysInfo.pvpFlashSpirit
{
   import flash.utils.IDataInput;
   
   public class PvpFlashSpiritChooseInfo
   {
       
      
      public var pvpChooseInfos:Array;
      
      public var groupno_infos:Array;
      
      public var choose_user_id:uint;
      
      public var choose_remain_time:uint;
      
      public var choice_state:uint;
      
      public function PvpFlashSpiritChooseInfo(param1:IDataInput)
      {
         var _loc4_:PvpChooseInfo = null;
         var _loc5_:PvpGroupnoInfo = null;
         super();
         this.pvpChooseInfos = [];
         var _loc2_:int = 0;
         while(_loc2_ < 2)
         {
            _loc4_ = new PvpChooseInfo(param1);
            this.pvpChooseInfos.push(_loc4_);
            _loc2_++;
         }
         this.groupno_infos = [];
         var _loc3_:int = 0;
         while(_loc3_ < 4)
         {
            _loc5_ = new PvpGroupnoInfo(param1);
            this.groupno_infos.push(_loc5_);
            _loc3_++;
         }
         this.choose_user_id = param1.readUnsignedInt();
         this.choose_remain_time = param1.readUnsignedInt();
         this.choice_state = param1.readUnsignedInt();
      }
   }
}
