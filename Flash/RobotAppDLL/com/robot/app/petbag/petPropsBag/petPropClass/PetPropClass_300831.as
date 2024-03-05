package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.TextFormatUtil;
   
   public class PetPropClass_300831
   {
       
      
      public function PetPropClass_300831(param1:PetPropInfo)
      {
         super();
         if(param1.petInfo.id == 3287)
         {
            SocketConnection.send(CommandID.UP_GRADE_MEDICINE,300831,param1.petInfo.catchTime);
         }
         else
         {
            Alarm.show(TextFormatUtil.getRedTxt("嘉德曼专属100级升级秘药") + "只能给精灵" + TextFormatUtil.getRedTxt("嘉德曼") + "使用");
         }
      }
   }
}
