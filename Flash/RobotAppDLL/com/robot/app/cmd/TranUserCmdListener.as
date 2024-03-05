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
   
   public class TranUserCmdListener extends BaseBean
   {
      
      private static const DURATION:uint = 120;
       
      
      public function TranUserCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.NOTE_TRANSFORM_USER,this.onTran);
         finish();
      }
      
      private function onTran(param1:SocketEvent) : void
      {
         var _loc6_:BasePeoleModel = null;
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         var _loc5_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == MainManager.actorID)
         {
            _loc6_ = MainManager.actorModel;
         }
         else
         {
            _loc6_ = UserManager.getUserModel(_loc3_);
         }
         if(_loc6_)
         {
            if(_loc4_ == 0)
            {
               _loc6_.reduction(true);
            }
            else if(_loc3_ == MainManager.actorID)
            {
               _loc6_.changeBody(_loc4_,DURATION * 1000,true);
            }
            else
            {
               _loc6_.changeBody(_loc4_,0,true);
            }
         }
      }
   }
}
