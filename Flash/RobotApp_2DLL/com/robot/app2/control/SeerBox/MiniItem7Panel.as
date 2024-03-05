package com.robot.app2.control.SeerBox
{
   import flash.display.MovieClip;
   
   public class MiniItem7Panel implements IItemPanel
   {
       
      
      public function MiniItem7Panel()
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
