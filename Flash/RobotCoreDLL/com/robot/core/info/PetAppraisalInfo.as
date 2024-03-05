package com.robot.core.info
{
   import flash.utils.IDataInput;
   
   public class PetAppraisalInfo
   {
       
      
      public var userID:uint;
      
      public var petCapTime:uint;
      
      public var isBright:Boolean;
      
      public var petDv:uint;
      
      public function PetAppraisalInfo(param1:IDataInput = null)
      {
         super();
         if(param1)
         {
            this.petCapTime = param1.readUnsignedInt();
            this.isBright = Boolean(param1.readUnsignedInt());
            this.petDv = param1.readUnsignedInt();
         }
      }
   }
}
