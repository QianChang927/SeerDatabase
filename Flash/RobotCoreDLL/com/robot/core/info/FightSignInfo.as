package com.robot.core.info
{
   import flash.utils.IDataInput;
   
   public class FightSignInfo
   {
       
      
      public var id:int;
      
      public var lvNum:int;
      
      public var roundNum:int;
      
      public var spValue:int;
      
      public function FightSignInfo(param1:IDataInput)
      {
         super();
         var _loc2_:uint = uint(param1.readUnsignedInt());
         var _loc3_:uint = uint(param1.readUnsignedInt());
         this.id = this.subByte(_loc2_,0,16);
         this.lvNum = this.subByte(_loc2_,16,8);
         this.roundNum = this.subByte(_loc2_,24,8);
         this.spValue = _loc3_;
      }
      
      private function subByte(param1:uint, param2:uint, param3:uint) : uint
      {
         var _loc5_:uint = 0;
         if(param3 + param2 > 32)
         {
            throw new Error("超出uint上限！");
         }
         if(param3 > 16)
         {
            return (_loc5_ = this.subByte(param1,param2,16)) + (this.subByte(param1 - _loc5_,param2 + 16,param3 - 16) << 16);
         }
         return uint(65535 >> 16 - param3 & param1 >> param2);
      }
   }
}
