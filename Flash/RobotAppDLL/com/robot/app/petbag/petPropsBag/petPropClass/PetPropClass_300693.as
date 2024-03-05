package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.ui.alert.Alarm;
   
   public class PetPropClass_300693 extends PetPropClass_300054
   {
       
      
      public function PetPropClass_300693(param1:PetPropInfo)
      {
         if([1978,1979,1980,1981].indexOf(param1.petInfo.id) == -1)
         {
            Alarm.show("此药剂只能给霍伊特或者沙多克使用！");
         }
         else
         {
            super(param1);
         }
      }
   }
}
