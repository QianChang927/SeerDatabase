package com.robot.app2.control.SeerBox
{
   import flash.display.MovieClip;
   
   public class MiniItem8Panel implements IItemPanel
   {
       
      
      public function MiniItem8Panel()
      {
         super();
      }
      
      public function destory() : void
      {
      }
      
      public function init(param1:MovieClip) : void
      {
         param1["flag"].visible = false;
      }
   }
}
