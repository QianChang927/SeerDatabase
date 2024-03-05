package com.robot.app.control.broadCast
{
   import flash.display.MovieClip;
   
   public interface IBroadCastType
   {
       
      
      function handleHtmlStr(param1:String, param2:MovieClip) : void;
      
      function destroy() : void;
   }
}
