package com.robot.core.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.info.pet.PetShowInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   
   public class PetEatDumpCmdListener extends BaseBean
   {
       
      
      public function PetEatDumpCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.PET_EAT_DUMP,this.onEatHandler);
         finish();
      }
      
      private function onEatHandler(param1:SocketEvent) : void
      {
         var _loc5_:BasePeoleModel = null;
         var _loc6_:PetShowInfo = null;
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == MainManager.actorID)
         {
            _loc5_ = MainManager.actorModel;
         }
         else
         {
            _loc5_ = UserManager.getUserModel(_loc3_);
         }
         if(_loc5_)
         {
            if(_loc5_.pet)
            {
               if((_loc6_ = _loc5_.pet.info).catchTime == _loc4_)
               {
                  _loc5_.info.specialBright = true;
                  _loc5_.pet.showFace("#11");
                  _loc5_.pet.showDumpLight(true);
               }
            }
         }
      }
   }
}
