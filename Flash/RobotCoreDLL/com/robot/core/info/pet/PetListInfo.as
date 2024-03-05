package com.robot.core.info.pet
{
   import flash.utils.IDataInput;
   
   public class PetListInfo
   {
       
      
      public var id:uint;
      
      public var isBright:Boolean;
      
      public var catchTime:uint;
      
      public var abilityType:uint;
      
      public var starTime:uint;
      
      public var duration:uint;
      
      public var course:uint;
      
      public var level:uint;
      
      public function PetListInfo(param1:IDataInput = null)
      {
         super();
         if(param1)
         {
            this.id = param1.readUnsignedInt();
            this.isBright = Boolean(param1.readUnsignedInt());
            this.catchTime = param1.readUnsignedInt();
         }
      }
   }
}
