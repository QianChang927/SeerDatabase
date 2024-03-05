package com.robot.app.info
{
   import flash.utils.IDataInput;
   
   public class CrystalCoreInfo
   {
       
      
      public var id:uint;
      
      public var time:uint;
      
      public var remainTime:uint;
      
      public function CrystalCoreInfo(param1:IDataInput)
      {
         super();
         this.id = param1.readUnsignedInt();
         this.time = param1.readUnsignedInt();
         this.remainTime = param1.readUnsignedInt();
      }
   }
}
