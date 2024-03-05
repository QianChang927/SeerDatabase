package com.robot.core.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.behavior.ChangeClothBehavior;
   import com.robot.core.info.ChangeClothInfo;
   import com.robot.core.manager.UserManager;
   import com.robot.core.net.SocketConnection;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   
   public class ChangeClothCmdListener extends BaseBean
   {
       
      
      public function ChangeClothCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.CHANGE_CLOTH,this.onChange);
         finish();
      }
      
      private function onChange(param1:SocketEvent) : void
      {
         var _loc2_:ChangeClothInfo = param1.data as ChangeClothInfo;
         UserManager.execBehavior(_loc2_.userID,new ChangeClothBehavior(_loc2_.clothArray,false),true);
      }
   }
}
