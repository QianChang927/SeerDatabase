package com.robot.app.sceneInteraction
{
   import flash.utils.IDataInput;
   
   public class RoomPetFightInfo
   {
       
      
      public var friendId:uint;
      
      public var friendNick:String;
      
      public var petId:uint;
      
      public var exp:uint;
      
      public var time:uint;
      
      public function RoomPetFightInfo(param1:IDataInput)
      {
         super();
         this.friendId = param1.readUnsignedInt();
         this.friendNick = param1.readUTFBytes(16);
         this.petId = param1.readUnsignedInt();
         this.exp = param1.readUnsignedInt();
         this.time = param1.readUnsignedInt();
      }
   }
}
