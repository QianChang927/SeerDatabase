package com.robot.app.task.tc
{
   import com.robot.core.info.task.novice.NoviceFinishInfo;
   
   public class TaskClass_146
   {
      
      public static var spriteID:int = -1;
       
      
      public function TaskClass_146(param1:NoviceFinishInfo)
      {
         super();
         spriteID = param1.monBallList[0].itemID;
      }
   }
}
