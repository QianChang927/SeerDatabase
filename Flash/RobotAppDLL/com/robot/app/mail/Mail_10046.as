package com.robot.app.mail
{
   import com.robot.core.manager.MapManager;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   
   public class Mail_10046 implements IMail
   {
       
      
      private var go:SimpleButton;
      
      public function Mail_10046()
      {
         super();
      }
      
      public function setup(param1:MovieClip) : void
      {
         this.go = param1["go"];
         this.go.addEventListener(MouseEvent.CLICK,this.onClick);
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         MapManager.changeMap(667);
      }
      
      public function destory() : void
      {
         this.go.removeEventListener(MouseEvent.CLICK,this.onClick);
      }
   }
}
