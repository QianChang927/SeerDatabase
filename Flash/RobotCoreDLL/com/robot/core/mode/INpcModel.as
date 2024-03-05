package com.robot.core.mode
{
   import com.robot.core.npc.NpcInfo;
   
   public interface INpcModel
   {
       
      
      function show() : void;
      
      function hide() : void;
      
      function setMark(param1:uint) : void;
      
      function get npcInfo() : NpcInfo;
      
      function set tasks(param1:Array) : void;
      
      function get tasks() : Array;
      
      function set allTasks(param1:Array) : void;
      
      function get allTasks() : Array;
      
      function destroy() : void;
   }
}
