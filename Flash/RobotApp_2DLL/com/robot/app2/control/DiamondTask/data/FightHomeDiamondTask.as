package com.robot.app2.control.DiamondTask.data
{
   import com.robot.app.team.TeamController;
   
   public class FightHomeDiamondTask extends BitForeverDiamondTask
   {
       
      
      public function FightHomeDiamondTask(param1:XML)
      {
         super(param1);
      }
      
      override public function taskGo() : void
      {
         TeamController.show();
      }
   }
}
