package com.robot.core.mode
{
   import com.robot.core.aimat.AimatStateManamer;
   import com.robot.core.info.AimatInfo;
   
   public interface IActionSprite extends ISprite
   {
       
      
      function set actionType(param1:String) : void;
      
      function get actionType() : String;
      
      function play() : void;
      
      function stop() : void;
      
      function get speed() : Number;
      
      function get aimatStateManager() : AimatStateManamer;
      
      function aimatState(param1:AimatInfo) : void;
   }
}
