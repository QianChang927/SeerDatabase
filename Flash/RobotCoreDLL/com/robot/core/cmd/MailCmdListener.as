package com.robot.core.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.event.MailEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.mail.MailManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.Sprite;
   import flash.utils.ByteArray;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class MailCmdListener extends BaseBean
   {
      
      public static var isShowTip:Boolean = true;
       
      
      private var spr:Sprite;
      
      public function MailCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.MAIL_NEW_NOTE,this.onNewMail);
         SocketConnection.addCmdListener(CommandID.MAIL_SEND,this.onSendMail);
         SocketConnection.addCmdListener(CommandID.MAIL_DEL_ALL,this.onDeleteAll);
         SocketConnection.addCmdListener(CommandID.MAIL_DELETE,this.onDelete);
         finish();
      }
      
      private function onNewMail(param1:SocketEvent) : void
      {
         MailManager.getNew();
      }
      
      private function onSendMail(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         MainManager.actorInfo.coins = _loc3_;
         if(this.spr)
         {
            DisplayUtil.removeForParent(this.spr);
         }
         this.spr = Alarm.show("恭喜你，邮件发送成功！");
         MailManager.dispatchEvent(new MailEvent(MailEvent.MAIL_SEND));
      }
      
      private function onDelete(param1:SocketEvent) : void
      {
         if(isShowTip)
         {
            Alarm.show("邮件删除成功！");
         }
         else
         {
            isShowTip = true;
         }
         MailManager.deleteComplete();
      }
      
      private function onDeleteAll(param1:SocketEvent) : void
      {
         if(isShowTip)
         {
            Alarm.show("邮件删除成功！");
         }
         else
         {
            isShowTip = true;
         }
         MailManager.clearComplete();
      }
   }
}
