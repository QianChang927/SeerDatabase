package com.robot.core.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.behavior.ChangeDoodleBehavior;
   import com.robot.core.info.item.DoodleInfo;
   import com.robot.core.manager.UserManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   
   public class ChangeDoodleCmdListener extends BaseBean
   {
       
      
      public function ChangeDoodleCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.CHANGE_DOODLE,this.onChange);
         finish();
      }
      
      private function onChange(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:DoodleInfo = new DoodleInfo(_loc2_);
         UserManager.execBehavior(_loc3_.userID,new ChangeDoodleBehavior(_loc3_,false),true);
      }
   }
}
