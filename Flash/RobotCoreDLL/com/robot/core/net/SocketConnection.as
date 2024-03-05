package com.robot.core.net
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.core.net.netHelper.SendQueueItemVo;
   import com.robot.core.net.netHelper.SocketConnectionHelper;
   import com.taomee.analytics.Analytics;
   import flash.events.Event;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketErrorEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.net.SocketEncryptImpl;
   import org.taomee.tmf.HeadInfo;
   import org.taomee.utils.StringUtil;
   
   public class SocketConnection
   {
      
      private static var _mainSocket:SocketEncryptImpl;
      
      private static var _encryptKeyStringArr:Array;
       
      
      public function SocketConnection()
      {
         super();
      }
      
      public static function get mainSocket() : SocketEncryptImpl
      {
         if(_mainSocket == null)
         {
            _mainSocket = new SocketEncryptImpl();
            Analytics.reset();
            _mainSocket.errorCallback = Analytics.recordCommand;
         }
         return _mainSocket;
      }
      
      public static function addCmdListener(param1:uint, param2:Function) : void
      {
         mainSocket.addCmdListener(param1,param2);
      }
      
      public static function removeCmdListener(param1:uint, param2:Function) : void
      {
         mainSocket.removeCmdListener(param1,param2);
      }
      
      public static function dispatchCmd(param1:uint, param2:HeadInfo, param3:Object) : void
      {
         mainSocket.dispatchCmd(param1,param2,param3);
      }
      
      public static function hasCmdListener(param1:uint) : Boolean
      {
         return mainSocket.hasCmdListener(param1);
      }
      
      public static function send(param1:uint, ... rest) : void
      {
         if(param1 == 0)
         {
            return;
         }
         if(!mainSocket.connected)
         {
            mainSocket.dispatchEvent(new Event(Event.CLOSE));
            return;
         }
         mainSocket.send(param1,rest);
      }
      
      public static function sendWithCallback(param1:uint, param2:Function, ... rest) : void
      {
         sendWithCallback2(param1,param2,rest);
      }
      
      public static function sendWithCallback2(param1:int, param2:Function, param3:Array = null, param4:Function = null) : void
      {
         var cmdBackFun:Function = null;
         var errorFun:Function = null;
         var cmdID:int = param1;
         var callback:Function = param2;
         var sendArgs:Array = param3;
         var errorCallback:Function = param4;
         sendArgs = null == sendArgs ? [] : sendArgs;
         cmdBackFun = function(param1:SocketEvent):void
         {
            if(param1.data != null && param1.data is ByteArray)
            {
               (param1.data as ByteArray).position = 0;
            }
            SocketConnection.removeCmdListener(cmdID,arguments.callee);
            SocketConnection.mainSocket.removeErrorListener(cmdID,errorFun);
            if(callback != null)
            {
               callback(param1);
            }
         };
         errorFun = function(param1:SocketErrorEvent):void
         {
            SocketConnection.removeCmdListener(cmdID,cmdBackFun);
            SocketConnection.mainSocket.removeErrorListener(cmdID,errorFun);
            if(errorCallback != null)
            {
               errorCallback(param1);
            }
         };
         SocketConnection.addCmdListener(cmdID,cmdBackFun);
         SocketConnection.mainSocket.addErrorListener(cmdID,errorFun);
         if(!mainSocket.connected)
         {
            mainSocket.dispatchEvent(new Event(Event.CLOSE));
         }
         mainSocket.send(cmdID,sendArgs);
      }
      
      public static function sendByQueue(param1:int, param2:Array, param3:Function = null, param4:Function = null) : void
      {
         var _loc5_:SendQueueItemVo;
         (_loc5_ = new SendQueueItemVo()).cmdID = param1;
         _loc5_.args = param2;
         _loc5_.callBackFun = param3;
         _loc5_.errorHandleFun = param4;
         SocketConnectionHelper.sendCommandByQueue(_loc5_);
      }
      
      public static function sendWithPromise(param1:int, param2:Array) : Promise
      {
         var deferred:Deferred = null;
         var cmdID:int = param1;
         var sendArgs:Array = param2;
         deferred = new Deferred();
         var sendItemVo:SendQueueItemVo = new SendQueueItemVo();
         sendItemVo.cmdID = cmdID;
         sendItemVo.args = sendArgs;
         sendItemVo.callBackFun = function(param1:*):void
         {
            deferred.resolve(param1);
         };
         sendItemVo.errorHandleFun = function(param1:* = null):void
         {
            deferred.reject(param1);
         };
         SocketConnectionHelper.sendCommandByQueue(sendItemVo);
         return deferred.promise;
      }
      
      internal static function send_2(param1:uint, param2:Array) : void
      {
         if(!mainSocket.connected)
         {
            mainSocket.dispatchEvent(new Event(Event.CLOSE));
         }
         mainSocket.send(param1,param2);
      }
      
      public static function setEncryptKeyStringArr(param1:Array) : void
      {
         _encryptKeyStringArr = param1;
      }
      
      public static function get key() : String
      {
         var _loc2_:int = 0;
         var _loc3_:String = null;
         var _loc1_:String = "";
         if(_encryptKeyStringArr == null)
         {
            _loc1_ = "!crAckmE4nOthIng:-)";
         }
         else
         {
            _loc2_ = 0;
            while(_loc2_ < _encryptKeyStringArr.length)
            {
               _loc3_ = String(StringUtil.replace(_encryptKeyStringArr[_loc2_],"*",""));
               _loc1_ += _loc3_;
               _loc2_++;
            }
         }
         return _loc1_;
      }
   }
}
