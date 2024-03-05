package com.robot.core.info
{
   import flash.utils.IDataInput;
   
   public class HighScoreInfo
   {
       
      
      public var time:uint;
      
      public var uid:uint;
      
      public var nick:String;
      
      public var gameID:uint;
      
      public var newRecord:uint;
      
      public function HighScoreInfo(param1:IDataInput)
      {
         super();
         this.time = param1.readUnsignedInt();
         this.uid = param1.readUnsignedInt();
         this.nick = param1.readUTFBytes(16);
         this.gameID = param1.readUnsignedInt();
         this.newRecord = param1.readUnsignedInt();
      }
   }
}
