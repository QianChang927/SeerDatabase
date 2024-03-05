package com.robot.app.aimat.state
{
   import com.robot.core.info.AimatInfo;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.mode.IActionSprite;
   
   public class AimatState_10111 extends BaseAimatState
   {
       
      
      private var _obj:BasePeoleModel;
      
      public function AimatState_10111()
      {
         super();
      }
      
      override public function get isFinish() : Boolean
      {
         ++_count;
         if(_count >= 720)
         {
            return true;
         }
         return false;
      }
      
      override public function execute(param1:IActionSprite, param2:AimatInfo) : void
      {
         this._obj = param1 as BasePeoleModel;
         if(this._obj)
         {
            this._obj.changeBody(20000);
         }
      }
      
      override public function destroy() : void
      {
         this._obj.reduction();
      }
   }
}
