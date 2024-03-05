package com.robot.app.task.petstory.app.syllabus
{
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   
   public class SyllabusDayBtn extends Sprite
   {
       
      
      private var _btnMC:MovieClip;
      
      private var _day:uint;
      
      public function SyllabusDayBtn(param1:MovieClip, param2:uint)
      {
         super();
         this._btnMC = param1;
         this._btnMC.buttonMode = true;
         this._day = param2;
         this._btnMC.addEventListener(MouseEvent.CLICK,this.onMouseDayMC);
      }
      
      private function onMouseDayMC(param1:MouseEvent) : void
      {
         this._btnMC.gotoAndStop(2);
         this.dispatchEvent(new MouseEvent(MouseEvent.CLICK));
      }
      
      public function getDayIndex() : uint
      {
         return this._day;
      }
      
      public function recoverBtn() : void
      {
         this._btnMC.gotoAndStop(1);
      }
      
      public function lightBtn() : void
      {
         this._btnMC.gotoAndStop(2);
      }
   }
}
