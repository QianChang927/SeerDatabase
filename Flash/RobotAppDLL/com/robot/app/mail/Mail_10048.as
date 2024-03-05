package com.robot.app.mail
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   
   public class Mail_10048 implements IMail
   {
       
      
      private var go:SimpleButton;
      
      public function Mail_10048()
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
         navigateToURL(new URLRequest("http://huodong.61.com/meet"),"_blank");
      }
      
      public function destory() : void
      {
         this.go.removeEventListener(MouseEvent.CLICK,this.onClick);
      }
   }
}
