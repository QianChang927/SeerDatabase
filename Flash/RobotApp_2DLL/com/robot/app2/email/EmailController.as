package com.robot.app2.email
{
   import com.robot.app2.control.SeerBoxIconController;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.setInterval;
   import org.taomee.events.SocketEvent;
   
   public class EmailController
   {
      
      private static var _intervalID:uint;
      
      private static var _icon:MovieClip;
      
      private static const PAGE_SIZE:uint = 8;
      
      private static var _pageNum:uint = 1;
      
      private static var _data:ByteArray;
      
      private static var _isOpenModule:Boolean;
      
      public static var _UnReadNum:int = 0;
       
      
      public function EmailController()
      {
         super();
      }
      
      public static function start(param1:MovieClip) : void
      {
         _icon = param1;
         _icon.buttonMode = true;
         _icon.addEventListener(MouseEvent.CLICK,onOpenEmail);
         hideEmail();
         _intervalID = setInterval(onShowEmail,60000 * 15);
         onShowEmail();
         SocketConnection.addCmdListener(CommandID.MAIL_IS_UNREAD,sendSocket);
         EmailXmlController.setup();
      }
      
      public static function onShowEmail() : void
      {
         SocketConnection.send(CommandID.MAIL_IS_UNREAD);
      }
      
      private static function sendSocket(param1:SocketEvent) : void
      {
         var _loc2_:uint = 0;
         var _loc3_:uint = 0;
         if(param1 != null)
         {
            _data = param1.data as ByteArray;
            _loc2_ = _data.readUnsignedInt();
            SeerBoxIconController.showEmail = _loc2_ == 1;
            if(_loc2_ == 1)
            {
               SeerBoxIconController.updateDot();
            }
            if(_data.length > 4)
            {
               _loc3_ = _data.readUnsignedInt();
               if(_loc3_ == 1)
               {
                  _UnReadNum = _loc2_;
               }
               else
               {
                  SocketConnection.send(CommandID.MAIL_IS_UNREAD);
               }
            }
            return;
         }
      }
      
      private static function onOpenEmail(param1:MouseEvent) : void
      {
         isOpenModule = true;
         ModuleManager.showModule(ClientConfig.getAppModule("email/EmailMainPanel"),"",null);
      }
      
      private static function hideEmail() : void
      {
         _icon.visible = false;
      }
      
      private static function showEmail() : void
      {
      }
      
      private static function get isOpenModule() : Boolean
      {
         return _isOpenModule;
      }
      
      private static function set isOpenModule(param1:Boolean) : void
      {
         _isOpenModule = param1;
      }
   }
}
