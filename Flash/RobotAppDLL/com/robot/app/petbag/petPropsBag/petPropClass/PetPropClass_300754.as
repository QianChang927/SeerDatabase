package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.ui.alert.Alarm;
   
   public class PetPropClass_300754 extends PetPropClass_300001
   {
       
      
      public function PetPropClass_300754(param1:PetPropInfo)
      {
         if([2782].indexOf(param1.petInfo.id) == -1)
         {
            Alarm.show("此药剂只能给闪光萨格罗斯使用！");
         }
         else
         {
            super(param1);
         }
      }
   }
}
