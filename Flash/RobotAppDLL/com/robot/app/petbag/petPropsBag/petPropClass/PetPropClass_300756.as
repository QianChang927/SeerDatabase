package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.ui.alert.Alarm;
   
   public class PetPropClass_300756 extends PetPropClass_300001
   {
       
      
      public function PetPropClass_300756(param1:PetPropInfo)
      {
         if([300].indexOf(param1.petInfo.id) == -1)
         {
            Alarm.show("此药剂只能给谱尼使用！");
         }
         else
         {
            super(param1);
         }
      }
   }
}
