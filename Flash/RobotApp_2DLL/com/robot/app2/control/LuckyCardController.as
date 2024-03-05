package com.robot.app2.control
{
   import flash.events.Event;
   import org.taomee.manager.EventManager;
   
   public class LuckyCardController
   {
      
      private static var e1:Event = new Event("lucky_card_roll_event");
      
      private static var e2:Event = new Event("lucky_card_mouse_event");
      
      private static var e3:Event = new Event("lucky_card_set_gold");
       
      
      public function LuckyCardController()
      {
         super();
      }
      
      public static function dispatchRollEvent() : void
      {
         EventManager.dispatchEvent(e1);
      }
      
      public static function dispatchMouseEvent() : void
      {
         EventManager.dispatchEvent(e2);
      }
      
      public static function dispatchSetGoldEvent() : void
      {
         EventManager.dispatchEvent(e3);
      }
   }
}
