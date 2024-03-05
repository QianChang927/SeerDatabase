package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.ui.alert.Alarm;
   
   public class PetPropClass_300689 extends PetPropClass_300054
   {
       
      
      public function PetPropClass_300689(param1:PetPropInfo)
      {
         if([1954,1955].indexOf(param1.petInfo.id) == -1)
         {
            Alarm.show("此药剂只能给加奈恩使用！");
         }
         else
         {
            super(param1);
         }
      }
   }
}
