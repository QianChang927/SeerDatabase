package com.robot.app2.mapProcess.control
{
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class PlotTask
   {
       
      
      protected var ui:MovieClip;
      
      protected var state:int;
      
      public function PlotTask(param1:MovieClip)
      {
         super();
         this.ui = param1;
         this.ui.addEventListener(MouseEvent.CLICK,this.onClick);
         this.updateState();
      }
      
      protected function onNpcClick(param1:int) : void
      {
      }
      
      protected function onClick(param1:MouseEvent) : void
      {
      }
      
      protected function updateState() : void
      {
      }
      
      public function destroy() : void
      {
         if(this.ui != null)
         {
            this.ui.removeEventListener(MouseEvent.CLICK,this.onClick);
         }
         this.ui = null;
      }
   }
}
