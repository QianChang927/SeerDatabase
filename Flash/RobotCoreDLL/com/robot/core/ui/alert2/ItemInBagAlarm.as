package com.robot.core.ui.alert2
{
   import com.robot.core.manager.alert.AlertInfo;
   import flash.events.MouseEvent;
   
   public class ItemInBagAlarm extends BaseAlert
   {
       
      
      public function ItemInBagAlarm(param1:AlertInfo)
      {
         super(param1,"TaskItemAlarmMC");
         _iconOfftX = -110;
         _iconOfftY = 5;
      }
      
      override protected function onApply(param1:MouseEvent) : void
      {
         super.onApply(param1);
      }
   }
}
