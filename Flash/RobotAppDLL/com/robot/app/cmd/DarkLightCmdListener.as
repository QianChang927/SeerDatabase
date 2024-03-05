package com.robot.app.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.manager.UserManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   
   public class DarkLightCmdListener extends BaseBean
   {
       
      
      public function DarkLightCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.GET_DARKLIGHT_NOTICE,this.onCmdHandler);
         finish();
      }
      
      private function onCmdHandler(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         var _loc5_:BasePeoleModel;
         if(_loc5_ = UserManager.getUserModel(_loc3_))
         {
            _loc5_.info.darkLight = _loc4_;
            _loc5_.showDarkLight();
         }
      }
   }
}
