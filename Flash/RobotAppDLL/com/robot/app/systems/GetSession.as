package com.robot.app.systems
{
   import com.robot.core.CommandID;
   import com.robot.core.manager.MainManager;
   import com.robot.core.net.SocketConnection;
   import flash.external.ExternalInterface;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class GetSession
   {
      
      private static var _flag:Boolean;
       
      
      public function GetSession()
      {
         super();
      }
      
      public static function getSession(param1:Boolean) : void
      {
         _flag = param1;
         SocketConnection.addCmdListener(CommandID.GET_SESSION,onGetSuccessHandler);
         SocketConnection.send(CommandID.GET_SESSION);
      }
      
      public static function onGetSuccessHandler(param1:SocketEvent) : void
      {
         var _loc3_:ByteArray = null;
         var _loc4_:String = null;
         SocketConnection.removeCmdListener(CommandID.GET_SESSION,onGetSuccessHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         try
         {
            _loc3_ = new ByteArray();
            _loc3_.writeUnsignedInt(MainManager.actorID);
            _loc2_.readBytes(_loc3_,4);
            _loc4_ = B2S(_loc3_);
            _loc3_.position = 0;
            ExternalInterface.call("set_sid",_loc4_,_flag);
         }
         catch(e:Error)
         {
         }
      }
      
      private static function B2S(param1:ByteArray) : String
      {
         var _loc4_:String = null;
         var _loc2_:String = "";
         var _loc3_:uint = param1.position;
         param1.position = 0;
         while(param1.bytesAvailable)
         {
            _loc4_ = param1.readUnsignedByte().toString(16);
            _loc2_ += _loc4_.length == 1 ? "0" + _loc4_ : _loc4_;
         }
         param1.position = _loc3_;
         return _loc2_;
      }
   }
}
