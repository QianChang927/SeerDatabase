package com.robot.core.info.pvpMatchSysInfo.pvpLegionStruggle
{
   import flash.utils.IDataInput;
   
   public class PvpRoundLogInfo
   {
       
      
      public var user_id:int;
      
      public var logArr:Array;
      
      public function PvpRoundLogInfo(param1:IDataInput)
      {
         var _loc5_:int = 0;
         super();
         this.user_id = param1.readUnsignedInt();
         var _loc2_:int = int(param1.readUnsignedInt());
         var _loc3_:int = int(param1.readUnsignedInt());
         this.logArr = new Array();
         var _loc4_:int = 0;
         while(_loc4_ < _loc2_)
         {
            _loc5_ = int(param1.readUnsignedInt());
            this.logArr.push(_loc5_);
            _loc4_++;
         }
      }
   }
}
