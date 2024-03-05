package com.robot.app.task.detectShip
{
   import flash.utils.ByteArray;
   
   public class ShipInfo
   {
       
      
      public var status:uint;
      
      public var monCatchCnt:uint;
      
      public var evtType:uint;
      
      public var shipType:uint;
      
      public var _mapId:uint;
      
      public var endtime:uint;
      
      public var shipTms:uint;
      
      public function ShipInfo(param1:ByteArray)
      {
         super();
         this.status = param1.readUnsignedInt();
         this.monCatchCnt = param1.readUnsignedInt();
         this.evtType = param1.readUnsignedInt();
         this.shipType = param1.readUnsignedInt();
         this._mapId = param1.readUnsignedInt();
         this.endtime = param1.readUnsignedInt();
         this.shipTms = param1.readUnsignedInt();
      }
   }
}
