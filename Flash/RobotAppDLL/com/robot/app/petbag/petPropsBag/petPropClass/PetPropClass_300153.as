package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.pet.PetIdTransform;
   import com.robot.core.ui.alert.Alarm;
   
   public class PetPropClass_300153
   {
       
      
      public function PetPropClass_300153(param1:PetPropInfo)
      {
         super();
         if(PetIdTransform.getHasTransform(param1.petInfo.catchTime))
         {
            SocketConnection.send(CommandID.SET_PET_CONST_FORM,param1.petInfo.catchTime,0);
         }
         else
         {
            Alarm.show(PetXMLInfo.getName(param1.petInfo.id) + "未进行形态固定，无法使用形态还原胶囊哦！");
         }
      }
   }
}
