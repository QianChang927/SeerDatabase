package com.robot.core.info.pet
{
   import com.robot.core.config.xml.PetXMLInfo;
   import flash.utils.IDataInput;
   
   public class PetStorage2015PetInfo
   {
       
      
      public var id:uint;
      
      public var catchTime:uint;
      
      public var posi:int;
      
      public var level:uint;
      
      public var type:int;
      
      public function PetStorage2015PetInfo(param1:IDataInput = null)
      {
         super();
         if(param1)
         {
            this.id = param1.readUnsignedInt();
            this.catchTime = param1.readUnsignedInt();
            this.posi = param1.readUnsignedInt();
            this.level = param1.readUnsignedInt();
            this.type = int(PetXMLInfo.getType(this.id));
         }
      }
      
      public function get name() : String
      {
         return PetXMLInfo.getName(this.id);
      }
   }
}
