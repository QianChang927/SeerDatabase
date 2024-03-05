package com.robot.app.task.detectShip
{
   import flash.utils.ByteArray;
   
   public class ShipSeaInfo
   {
       
      
      public var eventType:uint;
      
      public var shipType:uint;
      
      public var endtime:uint;
      
      public var shipTms:uint;
      
      public function ShipSeaInfo(param1:ByteArray = null)
      {
         super();
         if(param1)
         {
            this.shipType = param1.readUnsignedInt();
            this.eventType = param1.readUnsignedInt();
            this.endtime = param1.readUnsignedInt();
            this.shipTms = param1.readUnsignedInt();
         }
      }
   }
}
