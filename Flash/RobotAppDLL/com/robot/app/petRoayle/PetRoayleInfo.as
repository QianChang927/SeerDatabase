package com.robot.app.petRoayle
{
   import flash.utils.ByteArray;
   
   public class PetRoayleInfo
   {
       
      
      public var userID:uint;
      
      public var nick:String;
      
      public var petID:uint;
      
      public var maxHP:uint;
      
      public var curHP:uint;
      
      public var killNum:uint;
      
      public var medalNum:uint;
      
      public var status:uint;
      
      public var posIndex:uint;
      
      public function PetRoayleInfo(param1:ByteArray)
      {
         super();
         this.userID = param1.readUnsignedInt();
         this.nick = param1.readUTFBytes(16);
         this.petID = param1.readUnsignedInt();
         this.maxHP = param1.readUnsignedInt();
         this.curHP = param1.readUnsignedInt();
         this.killNum = 0;
         this.medalNum = 0;
         this.status = 0;
         this.posIndex = 0;
      }
   }
}
