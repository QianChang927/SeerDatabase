package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.automaticFight.ShowFightHpManager;
   import com.robot.app.petbag.PetPropInfo;
   
   public class PetPropClass_300062
   {
       
      
      public function PetPropClass_300062(param1:PetPropInfo)
      {
         super();
         ShowFightHpManager.useItem(param1.itemId);
      }
   }
}
