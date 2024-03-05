package com.robot.core.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   
   public class ChangeMountCmdListener extends BaseBean
   {
       
      
      public function ChangeMountCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.CHANGE_MOUNT,this.onChange);
         finish();
      }
      
      private function onChange(param1:SocketEvent) : void
      {
         var _loc6_:uint = 0;
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         var _loc5_:BasePeoleModel;
         if((_loc5_ = UserManager.getUserModel(_loc3_)) != null)
         {
            _loc6_ = _loc5_.info.mountId;
            _loc5_.info.mountId = _loc4_;
            _loc5_.showMount(_loc4_);
            if(_loc3_ == MainManager.actorID)
            {
               if(_loc4_ == 0)
               {
                  _loc5_.dispatchEvent(new DynamicEvent("takeOffCloth",_loc6_));
               }
               else if(_loc6_ == 0)
               {
                  _loc5_.dispatchEvent(new DynamicEvent("useCloth",_loc6_));
               }
               else
               {
                  _loc5_.dispatchEvent(new DynamicEvent("replaceCloth",_loc6_));
               }
            }
         }
      }
   }
}
