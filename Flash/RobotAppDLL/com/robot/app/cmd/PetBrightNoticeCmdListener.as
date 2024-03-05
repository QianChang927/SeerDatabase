package com.robot.app.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   
   public class PetBrightNoticeCmdListener extends BaseBean
   {
       
      
      public function PetBrightNoticeCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.PET_BRIGHT_NOTICE,this.onNoticeHandler);
         finish();
      }
      
      private function onNoticeHandler(param1:SocketEvent) : void
      {
         var _loc6_:BasePeoleModel = null;
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         var _loc5_:Boolean = Boolean(_loc2_.readUnsignedInt());
         if(_loc3_ != MainManager.actorID)
         {
            if(_loc6_ = UserManager.getUserModel(_loc3_))
            {
               if(_loc6_.pet)
               {
                  if(_loc5_)
                  {
                     if(_loc6_.pet.info.catchTime == _loc4_)
                     {
                        _loc6_.pet.bright();
                     }
                  }
                  else if(_loc6_.pet.info.catchTime == _loc4_)
                  {
                     _loc6_.pet.removeBright();
                  }
               }
            }
         }
         else if(MainManager.actorModel.pet)
         {
            if(!_loc5_)
            {
               if(_loc6_.pet.info.catchTime == _loc4_)
               {
                  MainManager.actorModel.pet.removeBright();
               }
            }
         }
      }
   }
}
