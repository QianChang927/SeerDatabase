package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.ui.alert.Alarm;
   
   public class PetPropClass_300700 extends PetPropClass_300129
   {
       
      
      public function PetPropClass_300700(param1:PetPropInfo)
      {
         if(param1.petInfo.level >= 100)
         {
            Alarm.show("已达到100级，不能使用此物品");
         }
         else
         {
            super(param1);
         }
      }
   }
}
