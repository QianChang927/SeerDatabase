package com.robot.app.toolBar
{
   import flash.events.MouseEvent;
   
   public interface IToolBarButton
   {
       
      
      function onMosOver(param1:MouseEvent = null) : void;
      
      function onMosOut(param1:MouseEvent = null) : void;
   }
}
