package com.robot.app2.control.SeerBox
{
   import flash.display.MovieClip;
   
   public interface ISeerBoxSubPanel
   {
       
      
      function init(param1:XML, param2:MovieClip) : void;
      
      function get dotNum() : int;
      
      function show() : void;
      
      function hide() : void;
      
      function destroy() : void;
   }
}
