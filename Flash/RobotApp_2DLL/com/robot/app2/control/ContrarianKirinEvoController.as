package com.robot.app2.control
{
   import com.robot.app2.systems.iconLevel.IconController;
   import com.robot.core.manager.SystemTimerManager;
   import flash.display.MovieClip;
   
   public class ContrarianKirinEvoController
   {
       
      
      public function ContrarianKirinEvoController()
      {
         super();
      }
      
      public static function setup(param1:MovieClip) : void
      {
         if(SystemTimerManager.sysDate.day == 5)
         {
            IconController.showIcon("ContrarianKirinIcon");
         }
         else
         {
            IconController.hideIcon("ContrarianKirinIcon");
         }
      }
   }
}
