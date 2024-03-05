package com.robot.core.info
{
   import flash.utils.IDataInput;
   
   public class BroadcastInfo
   {
       
      
      public var isLocal:Boolean = false;
      
      public var type:uint;
      
      public var uid:uint;
      
      public var nick:String;
      
      public var map:uint;
      
      public var module:String;
      
      public var moduleType:String;
      
      public var txt:String;
      
      public function BroadcastInfo(param1:IDataInput = null)
      {
         super();
         if(param1)
         {
            this.type = param1.readUnsignedInt();
            this.uid = param1.readUnsignedInt();
            this.nick = param1.readUTFBytes(16);
         }
      }
   }
}
