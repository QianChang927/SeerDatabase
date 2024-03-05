package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.ui.alert.Alarm;
   
   public class PetPropClass_300787 extends PetPropClass_300001
   {
       
      
      public function PetPropClass_300787(param1:PetPropInfo)
      {
         if(param1.petInfo.id == 3191)
         {
            super(param1);
         }
         else
         {
            Alarm.show("此药剂只能给小乔使用！");
         }
      }
   }
}
