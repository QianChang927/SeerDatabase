package com.robot.app.bag
{
   import flash.events.Event;
   
   public class BagCollectTypeEvent extends Event
   {
      
      public static const SELECT:String = "bagSelect_collect";
       
      
      private var _showType:int;
      
      public function BagCollectTypeEvent(param1:String, param2:int)
      {
         super(param1,bubbles,cancelable);
         this._showType = param2;
      }
      
      public function get showType() : int
      {
         return this._showType;
      }
   }
}
