package com.robot.app.aimat.state
{
   import com.robot.core.aimat.IAimatState;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.mode.IActionSprite;
   
   public class BaseAimatState implements IAimatState
   {
       
      
      protected var _count:int = 0;
      
      public function BaseAimatState()
      {
         super();
      }
      
      public function get isFinish() : Boolean
      {
         ++this._count;
         if(this._count >= 50)
         {
            return true;
         }
         return false;
      }
      
      public function execute(param1:IActionSprite, param2:AimatInfo) : void
      {
      }
      
      public function destroy() : void
      {
      }
   }
}
