package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.ui.alert.Alarm2;
   
   public class PetPropClass_300839 extends PetPropClass_300001
   {
       
      
      public function PetPropClass_300839(param1:PetPropInfo)
      {
         if(param1.petInfo.id == 3343)
         {
            super(param1);
         }
         else
         {
            Alarm2.show("此药剂只能给阴冥妖姬使用哦!");
         }
      }
   }
}
