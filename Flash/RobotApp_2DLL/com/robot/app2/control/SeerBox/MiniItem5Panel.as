package com.robot.app2.control.SeerBox
{
   import flash.display.MovieClip;
   
   public class MiniItem5Panel implements IItemPanel
   {
       
      
      public function MiniItem5Panel()
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
