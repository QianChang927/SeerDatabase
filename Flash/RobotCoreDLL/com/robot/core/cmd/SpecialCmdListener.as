package com.robot.core.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.manager.UserManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.Direction;
   import flash.utils.ByteArray;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   
   public class SpecialCmdListener extends BaseBean
   {
       
      
      public function SpecialCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.DANCE_ACTION,this.onSpecial);
         finish();
      }
      
      private function onSpecial(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         var _loc5_:String = Direction.indexToStr(_loc2_.readUnsignedInt());
         var _loc6_:BasePeoleModel;
         if(_loc6_ = UserManager.getUserModel(_loc3_))
         {
            _loc6_.peculiarAction(_loc5_,false);
         }
      }
   }
}
