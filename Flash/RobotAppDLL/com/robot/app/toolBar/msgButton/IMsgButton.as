package com.robot.app.toolBar.msgButton
{
   import flash.events.MouseEvent;
   
   public interface IMsgButton
   {
       
      
      function show(param1:String, param2:Boolean = true) : void;
      
      function showTxtContent(param1:String) : void;
      
      function onClick(param1:MouseEvent = null) : void;
      
      function hide() : void;
   }
}
