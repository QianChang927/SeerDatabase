package com.robot.app.group.cmd
{
   import com.robot.app.group.manager.GroupNoticeManager;
   import com.robot.core.group.manager.GroupInviteManager;
   import org.taomee.bean.BaseBean;
   
   public class GroupNoticeCmdListener extends BaseBean
   {
       
      
      public function GroupNoticeCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         GroupNoticeManager.setup();
         GroupInviteManager.setup();
         finish();
      }
   }
}
