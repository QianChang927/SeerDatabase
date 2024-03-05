package com.robot.app2.control.nonoAlarm.alarms
{
   import com.robot.app2.control.nonoAlarm.NoNoAlarmControl;
   import com.robot.core.manager.BufferRecordManager;
   import flash.display.Sprite;
   
   public class GuessSprite2014Alarm extends AbstractRegistrationActivitityAlarm
   {
       
      
      public function GuessSprite2014Alarm()
      {
         super();
      }
      
      override public function checkStatu() : void
      {
         if(BufferRecordManager.getMyState(981) == true)
         {
            NoNoAlarmControl.addAlarm(this);
         }
         else
         {
            NoNoAlarmControl.removeAlarm(this);
         }
      }
      
      override public function get icon() : Sprite
      {
         return super.icon;
      }
      
      override public function get showText() : String
      {
         return "2014年兽猜想";
      }
      
      override public function set showText(param1:String) : void
      {
         super.showText = param1;
      }
      
      override public function get statu() : String
      {
         return super.statu;
      }
      
      override public function set statu(param1:String) : void
      {
         super.statu = param1;
      }
   }
}
