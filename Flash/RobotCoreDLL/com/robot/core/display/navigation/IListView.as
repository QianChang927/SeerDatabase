package com.robot.core.display.navigation
{
   import flash.events.IEventDispatcher;
   
   public interface IListView extends IEventDispatcher
   {
       
      
      function get model() : XMLList;
      
      function set model(param1:XMLList) : void;
      
      function get itemViewClass() : Class;
      
      function set itemViewClass(param1:Class) : void;
      
      function showItemAt(param1:int) : void;
   }
}
