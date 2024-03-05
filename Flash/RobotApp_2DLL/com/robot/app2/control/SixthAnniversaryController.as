package com.robot.app2.control
{
   import com.robot.core.ui.alert.Alarm;
   
   public class SixthAnniversaryController
   {
       
      
      public function SixthAnniversaryController()
      {
         super();
      }
      
      public static function clickDoor() : void
      {
         Alarm.show("六一欢乐广场将在5月29日开放！记得一定要来哦！");
      }
   }
}
