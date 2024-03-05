package com.robot.core.event
{
   import com.robot.core.info.BonusInfo;
   import flash.events.Event;
   
   public class BonusEvent extends Event
   {
      
      public static const BONUS_RECEIVE:String = "bonus_receive_notice";
       
      
      private var _info:BonusInfo;
      
      public function BonusEvent(param1:String, param2:BonusInfo, param3:Boolean = false, param4:Boolean = false)
      {
         this._info = param2;
         super(param1,param3,param4);
      }
      
      public function get info() : BonusInfo
      {
         return this._info;
      }
   }
}
