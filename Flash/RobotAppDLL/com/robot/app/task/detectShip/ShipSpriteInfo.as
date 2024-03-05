package com.robot.app.task.detectShip
{
   import flash.utils.ByteArray;
   
   public class ShipSpriteInfo
   {
       
      
      public var flag:uint;
      
      public var petID:uint;
      
      public var captTm:uint;
      
      public function ShipSpriteInfo(param1:ByteArray)
      {
         super();
         this.flag = param1.readUnsignedInt();
         this.petID = param1.readUnsignedInt();
         this.captTm = param1.readUnsignedInt();
      }
   }
}
