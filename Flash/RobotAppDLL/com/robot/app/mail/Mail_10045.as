package com.robot.app.mail
{
   import com.robot.core.CommandID;
   import com.robot.core.manager.MainManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class Mail_10045 implements IMail
   {
       
      
      private var go:SimpleButton;
      
      public function Mail_10045()
      {
         super();
      }
      
      public function setup(param1:MovieClip) : void
      {
         this.go = param1["go"];
         this.go.addEventListener(MouseEvent.CLICK,this.onClick);
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         SocketConnection.addCmdListener(CommandID.GET_SESSION_KEY,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.GET_SESSION_KEY,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            var _loc4_:String = (_loc4_ = _loc3_.readUTFBytes(32)).toLowerCase();
            var _loc5_:* = "http://bus.61.com/sign/?uid=" + MainManager.actorID + "&session=" + _loc4_ + "&game=seer&type=1.1";
            navigateToURL(new URLRequest(_loc5_),"_blank");
         });
         SocketConnection.send(CommandID.GET_SESSION_KEY,9);
      }
      
      public function destory() : void
      {
         this.go.removeEventListener(MouseEvent.CLICK,this.onClick);
      }
   }
}
