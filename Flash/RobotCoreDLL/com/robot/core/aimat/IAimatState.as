package com.robot.core.aimat
{
   import com.robot.core.info.AimatInfo;
   import com.robot.core.mode.IActionSprite;
   
   public interface IAimatState
   {
       
      
      function get isFinish() : Boolean;
      
      function execute(param1:IActionSprite, param2:AimatInfo) : void;
      
      function destroy() : void;
   }
}
