package com.robot.core.info
{
   import com.robot.core.config.xml.PetXMLInfo;
   import flash.utils.IDataInput;
   
   public class PictureBookInfo
   {
       
      
      public var id:uint;
      
      public var encont:uint;
      
      public var isCacth:Boolean;
      
      public var hasPic:Boolean = true;
      
      public function PictureBookInfo(param1:IDataInput = null)
      {
         super();
         if(param1)
         {
            this.id = param1.readUnsignedInt();
            this.encont = param1.readUnsignedInt();
            this.isCacth = Boolean(param1.readUnsignedInt());
            param1.readUnsignedInt();
         }
      }
      
      public function get type() : String
      {
         return PetXMLInfo.getType(this.id);
      }
   }
}
