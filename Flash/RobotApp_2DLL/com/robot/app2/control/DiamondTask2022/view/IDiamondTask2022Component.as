package com.robot.app2.control.DiamondTask2022.view
{
   import flash.utils.ByteArray;
   
   public interface IDiamondTask2022Component
   {
       
      
      function loadPanel() : void;
      
      function update(param1:ByteArray) : void;
      
      function show() : void;
      
      function hide() : void;
      
      function destroy() : void;
      
      function showRedPoint() : Boolean;
   }
}
