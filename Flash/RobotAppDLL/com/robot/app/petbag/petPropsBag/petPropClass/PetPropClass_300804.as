package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.TextFormatUtil;
   
   public class PetPropClass_300804
   {
       
      
      public function PetPropClass_300804(param1:PetPropInfo)
      {
         super();
         if(param1.petInfo.id == 3227)
         {
            SocketConnection.send(CommandID.UP_GRADE_MEDICINE,300804,param1.petInfo.catchTime);
         }
         else
         {
            Alarm.show(TextFormatUtil.getRedTxt("月之子•奇拉美专属满级秘药") + "只能给精灵" + TextFormatUtil.getRedTxt("月之子•奇拉美") + "使用");
         }
      }
   }
}
