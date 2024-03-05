package com.robot.core.behavior
{
   import com.robot.core.mode.BasePeoleModel;
   
   public interface IBehavior
   {
       
      
      function get isNet() : Boolean;
      
      function set isNet(param1:Boolean) : void;
      
      function execute(param1:BasePeoleModel) : void;
      
      function destroy() : void;
   }
}
