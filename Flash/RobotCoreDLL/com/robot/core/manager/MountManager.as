package com.robot.core.manager
{
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.mode.PetModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   
   public class MountManager
   {
      
      private static var _mount:PetModel;
       
      
      public function MountManager()
      {
         super();
      }
      
      public static function changeMount(param1:uint) : void
      {
         if(param1 == 0)
         {
            SocketConnection.send(CommandID.CHANGE_MOUNT,param1);
         }
         else
         {
            if(MainManager.actorInfo.isVip == false && ItemXMLInfo.getIsSuper(param1))
            {
               Alarm.show("拥有超能NoNo才能使用这个星际座驾哦！");
               return;
            }
            if(MainManager.actorInfo.actionType != 0)
            {
               Alarm.show("NONO飞行模式开启时，不能使用星际座驾哦！");
               return;
            }
            if(Boolean(MainManager.actorModel) && MainManager.actorModel.pet != null)
            {
               if(PetXMLInfo.isFlyPet(MainManager.actorModel.pet.info.petID) || PetXMLInfo.isRidePetOpen(MainManager.actorModel.pet.info.petID,MainManager.actorInfo))
               {
                  Alarm.show("处于骑乘状态时，不能使用星际座驾哦！");
                  return;
               }
            }
            if(param1 != MainManager.actorInfo.mountId)
            {
               SocketConnection.send(CommandID.CHANGE_MOUNT,param1);
            }
         }
      }
   }
}
