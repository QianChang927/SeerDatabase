package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.ui.alert.Alarm;
   
   public class PetPropClass_300655 extends PetPropClass_300129
   {
       
      
      public function PetPropClass_300655(param1:PetPropInfo)
      {
         if(param1.petInfo.level >= 60)
         {
            Alarm.show("已达到60级，不能使用此物品");
         }
         else
         {
            super(param1);
         }
      }
   }
}
