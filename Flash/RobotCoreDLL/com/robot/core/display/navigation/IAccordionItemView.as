package com.robot.core.display.navigation
{
   import com.robot.core.display.IDisplayObject;
   
   public interface IAccordionItemView extends IDisplayObject
   {
       
      
      function set model(param1:Object) : void;
      
      function get model() : Object;
      
      function get maximumHeight() : Number;
      
      function set maximumHeight(param1:Number) : void;
      
      function set minimumHeight(param1:Number) : void;
      
      function get minimumHeight() : Number;
      
      function open() : void;
      
      function close() : void;
   }
}
