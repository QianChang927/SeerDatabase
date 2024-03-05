package com.robot.core.info
{
   import flash.errors.EOFError;
   import flash.utils.IDataInput;
   
   public class Broadcast2016Info
   {
       
      
      public var id:uint;
      
      public var type:uint;
      
      public var userId:uint;
      
      public var nick:String;
      
      public var msg:IDataInput;
      
      public function Broadcast2016Info(param1:IDataInput = null)
      {
         var data:IDataInput = param1;
         super();
         if(data)
         {
            this.id = data.readUnsignedInt();
            this.type = data.readUnsignedInt();
            this.userId = data.readUnsignedInt();
            try
            {
               this.nick = data.readUTFBytes(16);
            }
            catch(e:EOFError)
            {
            }
            this.msg = data;
         }
      }
   }
}
