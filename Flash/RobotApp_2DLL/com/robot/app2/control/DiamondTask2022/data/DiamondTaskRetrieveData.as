package com.robot.app2.control.DiamondTask2022.data
{
   import com.robot.core.config.xml.DiamondTask2022XMLInfo;
   import flash.utils.ByteArray;
   
   public class DiamondTaskRetrieveData
   {
       
      
      private var rdata:XML;
      
      public const retrieveLimit:int = 150;
      
      protected var retrieveTime:int = 1;
      
      protected var giftState:int = 0;
      
      public function DiamondTaskRetrieveData(param1:ByteArray)
      {
         var _loc5_:int = 0;
         var _loc6_:int = 0;
         var _loc7_:int = 0;
         var _loc8_:int = 0;
         super();
         var _loc2_:int = int(param1.readUnsignedInt());
         this.giftState = param1.readUnsignedInt();
         this.retrieveTime = param1.readUnsignedInt();
         var _loc3_:int = param1.readInt();
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_)
         {
            _loc5_ = int(param1.readUnsignedInt());
            _loc6_ = int(param1.readUnsignedInt());
            _loc7_ = int(param1.readUnsignedInt());
            _loc8_ = int(param1.readUnsignedInt());
            _loc4_++;
         }
         this.rdata = DiamondTask2022XMLInfo.getRetrieveInfo(this.retrieveTime);
      }
      
      public function updateData(param1:ByteArray) : void
      {
         var _loc5_:int = 0;
         var _loc6_:int = 0;
         var _loc7_:int = 0;
         var _loc8_:int = 0;
         var _loc2_:int = int(param1.readUnsignedInt());
         this.giftState = param1.readUnsignedInt();
         this.retrieveTime = param1.readUnsignedInt();
         var _loc3_:int = param1.readInt();
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_)
         {
            _loc5_ = int(param1.readUnsignedInt());
            _loc6_ = int(param1.readUnsignedInt());
            _loc7_ = int(param1.readUnsignedInt());
            _loc8_ = int(param1.readUnsignedInt());
            _loc4_++;
         }
         this.rdata = DiamondTask2022XMLInfo.getRetrieveInfo(this.retrieveTime);
      }
      
      public function getCost() : int
      {
         return this.rdata.@money.split("_")[2];
      }
      
      public function getRatio() : Number
      {
         return this.rdata.@ratio / 100;
      }
      
      public function isInLimit() : Boolean
      {
         return this.retrieveLimit > this.retrieveTime;
      }
      
      public function isGot(param1:int) : Boolean
      {
         return (this.giftState >> param1 & 1) == 1;
      }
      
      public function getRetrieveTime() : int
      {
         return this.retrieveTime;
      }
      
      public function hasUngot() : Boolean
      {
         return (this.giftState & 63) != 63;
      }
   }
}
