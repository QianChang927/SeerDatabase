package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.ui.alert.Alarm;
   
   public class PetPropClass_300105
   {
       
      
      public function PetPropClass_300105(param1:PetPropInfo)
      {
         super();
         Alarm.show("该物品功能已下架！");
      }
   }
}
