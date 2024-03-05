package com.robot.app.control
{
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class BirthdayActivityIconController
   {
       
      
      public function BirthdayActivityIconController()
      {
         super();
      }
      
      public static function setup(param1:MovieClip) : void
      {
         param1.addEventListener(MouseEvent.CLICK,onClick);
         ToolTipManager.add(param1,"开学送礼");
      }
      
      protected static function onClick(param1:MouseEvent) : void
      {
      }
   }
}
