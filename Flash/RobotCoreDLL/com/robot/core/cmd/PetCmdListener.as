package com.robot.core.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.info.pet.PetShowInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   
   public class PetCmdListener extends BaseBean
   {
       
      
      public function PetCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.PET_SHOW,this.onPetShow);
         finish();
      }
      
      private function onPetShow(param1:SocketEvent) : void
      {
         var _loc3_:BasePeoleModel = null;
         var _loc2_:PetShowInfo = param1.data as PetShowInfo;
         if(_loc2_.flag == 1)
         {
            if(UserManager.isShow || _loc2_.userID == MainManager.actorID)
            {
               if(_loc2_.userID == MainManager.actorID)
               {
                  PetManager.showingInfo = _loc2_;
               }
               _loc3_ = UserManager.getUserModel(_loc2_.userID);
               if(_loc3_)
               {
                  _loc3_.showPet(_loc2_);
                  _loc3_.showClothLight();
               }
            }
         }
         else
         {
            if(_loc2_.userID == MainManager.actorID)
            {
               PetManager.showingInfo = null;
            }
            _loc3_ = UserManager.getUserModel(_loc2_.userID);
            if(_loc3_)
            {
               _loc3_.hidePet();
            }
         }
      }
   }
}
