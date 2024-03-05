package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.TextFormatUtil;
   
   public class PetPropClass_300698
   {
       
      
      public function PetPropClass_300698(param1:PetPropInfo)
      {
         super();
         if(param1.petInfo.id == 2238 || param1.petInfo.id == 2239)
         {
            SocketConnection.send(CommandID.UP_STAR_GAME_SPIRIT,4,param1.petInfo.catchTime);
         }
         else
         {
            Alarm.show(TextFormatUtil.getRedTxt("艾普欧满级秘药") + "只能给精灵" + TextFormatUtil.getRedTxt("艾普欧/艾普利") + "使用");
         }
      }
   }
}
