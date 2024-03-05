package com.robot.core.ui.alert2
{
   public class FightOverAlertManager
   {
      
      public static const HIGHEST:uint = 1;
      
      private static var array:Array = [];
       
      
      public function FightOverAlertManager()
      {
         super();
      }
      
      public static function add(param1:IFightOverAlert, param2:uint = 0) : void
      {
         if(param2 == HIGHEST)
         {
            array.unshift(param1);
         }
         else
         {
            array.push(param1);
         }
      }
      
      public static function showNext() : void
      {
         var _loc1_:IFightOverAlert = null;
         if(array.length > 0)
         {
            _loc1_ = array.shift() as IFightOverAlert;
            _loc1_.show();
         }
      }
      
      public static function get length() : uint
      {
         return array.length;
      }
   }
}
