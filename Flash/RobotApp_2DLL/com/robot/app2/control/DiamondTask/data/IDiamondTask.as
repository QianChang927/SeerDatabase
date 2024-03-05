package com.robot.app2.control.DiamondTask.data
{
   public interface IDiamondTask
   {
       
      
      function taskGo() : void;
      
      function award(param1:Function) : void;
      
      function updateTaskInfo(param1:Function = null) : void;
      
      function get hasComplete() : Boolean;
      
      function get taskProgress() : int;
      
      function get taskTotalStep() : int;
      
      function get taskCompleteDetail() : String;
      
      function get awardDetail() : Array;
      
      function get hasAward() : Boolean;
      
      function get id() : int;
      
      function get taskType() : int;
   }
}
