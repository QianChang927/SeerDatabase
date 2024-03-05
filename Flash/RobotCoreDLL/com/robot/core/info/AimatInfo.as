package com.robot.core.info
{
   import flash.geom.Point;
   
   public class AimatInfo
   {
       
      
      private var _id:uint;
      
      public var userID:uint;
      
      public var startPos:Point;
      
      public var endPos:Point;
      
      public var aimatType:uint;
      
      public var aimatState:uint;
      
      public function AimatInfo()
      {
         super();
      }
      
      public function set id(param1:uint) : void
      {
         this._id = param1;
      }
      
      public function get id() : uint
      {
         return this._id;
      }
      
      public function clone() : AimatInfo
      {
         var _loc1_:AimatInfo = new AimatInfo();
         _loc1_.id = this.id;
         _loc1_.userID = this.userID;
         _loc1_.startPos = this.startPos;
         _loc1_.endPos = this.endPos;
         _loc1_.aimatType = this.aimatType;
         _loc1_.aimatState = this.aimatState;
         return _loc1_;
      }
   }
}
