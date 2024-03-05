package com.robot.core.info.teamTask
{
   import flash.utils.ByteArray;
   
   public class NewestTeamTaskInfo
   {
       
      
      public var team_task_id:int;
      
      public var team_task_pets:Array;
      
      public var team_task_finish_timestamp:int;
      
      public var team_task_succ_rate:int;
      
      public var team_task_is_extrea_reward:int;
      
      public var team_task_state:int;
      
      public function NewestTeamTaskInfo(param1:ByteArray)
      {
         var _loc3_:uint = 0;
         super();
         this.team_task_id = param1.readUnsignedInt();
         this.team_task_pets = [];
         var _loc2_:int = 0;
         while(_loc2_ < 5)
         {
            _loc3_ = param1.readUnsignedInt();
            this.team_task_pets.push(_loc3_);
            _loc2_++;
         }
         this.team_task_finish_timestamp = param1.readUnsignedInt();
         this.team_task_succ_rate = param1.readUnsignedInt();
         this.team_task_is_extrea_reward = param1.readUnsignedInt();
         this.team_task_state = param1.readUnsignedInt();
      }
   }
}
