package com.robot.core.behavior
{
   import com.robot.core.mode.BasePeoleModel;
   
   public class BaseBehavior implements IBehavior
   {
       
      
      protected var _isFinished:Boolean = false;
      
      protected var _isNet:Boolean = true;
      
      public function BaseBehavior(param1:Boolean = true)
      {
         super();
         this._isNet = param1;
      }
      
      public function get isNet() : Boolean
      {
         return this._isNet;
      }
      
      public function set isNet(param1:Boolean) : void
      {
         this._isNet = param1;
      }
      
      public function execute(param1:BasePeoleModel) : void
      {
      }
      
      public function destroy() : void
      {
      }
   }
}
