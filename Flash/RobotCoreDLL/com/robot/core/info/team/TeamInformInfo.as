package com.robot.core.info.team
{
   import flash.utils.IDataInput;
   
   public class TeamInformInfo
   {
       
      
      public var type:uint;
      
      public var userID:uint;
      
      public var nick:String;
      
      public var data1:uint;
      
      public var data2:uint;
      
      public function TeamInformInfo(param1:IDataInput = null)
      {
         super();
         if(param1)
         {
            this.type = param1.readUnsignedInt();
            this.userID = param1.readUnsignedInt();
            this.nick = param1.readUTFBytes(16);
            this.data1 = param1.readUnsignedInt();
            this.data2 = param1.readUnsignedInt();
         }
      }
   }
}
