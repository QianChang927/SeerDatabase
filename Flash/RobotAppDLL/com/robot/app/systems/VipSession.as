package com.robot.app.systems
{
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class VipSession extends EventDispatcher
   {
      
      public static const GET_SESSION:String = "getSession";
       
      
      public var key:String;
      
      private var _func:Function;
      
      public function VipSession()
      {
         super();
      }
      
      public function getSession(param1:uint = 2, param2:Function = null) : void
      {
         this._func = param2;
         SocketConnection.sendByQueue(CommandID.GET_SESSION_KEY,[param1],this.onGet);
      }
      
      private function onGet(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         if(_loc2_ == null || _loc2_.length < 32 || _loc2_.bytesAvailable < 32)
         {
            return;
         }
         this.key = _loc2_.readUTFBytes(32);
         this.key = this.key.toLowerCase();
         dispatchEvent(new Event(GET_SESSION));
         if(null != this._func)
         {
            this._func.call();
         }
      }
   }
}
