package com.robot.core.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.behavior.ChangeNickBehavior;
   import com.robot.core.controller.SaveUserInfo;
   import com.robot.core.info.ChangeUserNameInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.net.SocketConnection;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   
   public class ChangeNameCmdListener extends BaseBean
   {
       
      
      public function ChangeNameCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.CHANG_NICK_NAME,this.onNameChanged);
         finish();
      }
      
      private function onNameChanged(param1:SocketEvent) : void
      {
         var _loc2_:ChangeUserNameInfo = param1.data as ChangeUserNameInfo;
         if(_loc2_.userId == MainManager.actorInfo.userID)
         {
            SaveUserInfo.saveSo();
         }
         UserManager.execBehavior(_loc2_.userId,new ChangeNickBehavior(_loc2_.nickName,false),true);
      }
   }
}
