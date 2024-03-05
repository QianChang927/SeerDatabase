package com.robot.app.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.event.PetEvent;
   import com.robot.core.info.PetAppraisalInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.net.SocketConnection;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class UserProvPetCmdListener extends BaseBean
   {
       
      
      public function UserProvPetCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.PROVING_PET,this.onProvPetHandler);
         finish();
      }
      
      public function onProvPetHandler(param1:SocketEvent) : void
      {
         var _loc2_:PetAppraisalInfo = param1.data as PetAppraisalInfo;
         var _loc3_:uint = uint(_loc2_.petCapTime);
         var _loc4_:Boolean = Boolean(_loc2_.isBright);
         var _loc5_:uint = uint(_loc2_.petDv);
         if(_loc4_)
         {
            if(MainManager.actorModel.pet)
            {
               if(MainManager.actorModel.pet.info.catchTime == _loc3_)
               {
                  MainManager.actorModel.pet.bright();
               }
               MainManager.actorInfo.coins -= 500;
            }
         }
         MainManager.actorInfo.isBright = _loc4_;
         EventManager.dispatchEvent(new DynamicEvent(PetEvent.PROVING_PET,_loc2_));
      }
   }
}
