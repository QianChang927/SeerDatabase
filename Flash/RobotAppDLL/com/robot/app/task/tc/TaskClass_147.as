package com.robot.app.task.tc
{
   import com.robot.core.info.task.novice.NoviceFinishInfo;
   
   public class TaskClass_147
   {
      
      public static var spriteID:int = -1;
       
      
      public function TaskClass_147(param1:NoviceFinishInfo)
      {
         super();
         spriteID = param1.monBallList[0].itemID;
      }
   }
}
