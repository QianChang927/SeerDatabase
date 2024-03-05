package com.robot.core.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.behavior.ChangeColorBehavior;
   import com.robot.core.manager.UserManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   
   public class ChangeColorCmdListener extends BaseBean
   {
       
      
      public function ChangeColorCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.CHANGE_COLOR,this.onChange);
         finish();
      }
      
      private function onChange(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         var _loc5_:uint = _loc2_.readUnsignedInt();
         var _loc6_:uint = _loc2_.readUnsignedInt();
         var _loc7_:BasePeoleModel;
         if(_loc7_ = UserManager.getUserModel(_loc3_))
         {
            _loc7_.info.coins = _loc6_;
         }
         UserManager.execBehavior(_loc3_,new ChangeColorBehavior(_loc4_,false),true);
      }
   }
}
