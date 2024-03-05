package com.robot.app.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.manager.UserManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   
   public class ChangeFireCmdListener extends BaseBean
   {
       
      
      public function ChangeFireCmdListener()
      {
         super();
         SocketConnection.addCmdListener(CommandID.FIRE_ACT_NOTICE,this.onfireHandler);
         finish();
      }
      
      private function onfireHandler(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedByte();
         var _loc5_:BasePeoleModel;
         if(_loc5_ = UserManager.getUserModel(_loc3_))
         {
            _loc5_.info.fireBuff = _loc4_;
            _loc5_.updateFireBuff();
         }
      }
   }
}
