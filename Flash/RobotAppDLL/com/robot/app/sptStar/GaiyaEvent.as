package com.robot.app.sptStar
{
   import flash.events.Event;
   
   public class GaiyaEvent extends Event
   {
      
      public static const INTENSIFY_TRAIN:String = "Intensify_Train";
       
      
      private var _effectID:uint;
      
      public function GaiyaEvent(param1:String, param2:uint)
      {
         super(param1);
         this._effectID = param2;
      }
      
      public function get effectID() : uint
      {
         return this._effectID;
      }
   }
}
