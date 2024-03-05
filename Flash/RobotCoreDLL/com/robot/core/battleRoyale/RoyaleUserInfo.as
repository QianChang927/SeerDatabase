package com.robot.core.battleRoyale
{
   import flash.utils.ByteArray;
   
   public class RoyaleUserInfo
   {
       
      
      public var stutas:String;
      
      public var userID:uint;
      
      public var nickName:String;
      
      public var hp:uint;
      
      public var maxHp:uint;
      
      public var distance:uint;
      
      public function RoyaleUserInfo(param1:ByteArray)
      {
         super();
         this.userID = param1.readUnsignedInt();
         this.nickName = param1.readUTFBytes(16);
         this.maxHp = param1.readUnsignedInt();
         this.hp = this.maxHp;
         this.distance = param1.readUnsignedInt();
      }
   }
}
