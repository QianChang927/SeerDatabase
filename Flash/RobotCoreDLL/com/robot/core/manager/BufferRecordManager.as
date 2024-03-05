package com.robot.core.manager
{
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.BufferRecordConfig;
   import com.robot.core.info.UserInfo;
   import com.robot.core.net.SocketConnection;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class BufferRecordManager
   {
      
      private static const LENGTH:uint = 1600;
      
      public static const VALUE_CHANGE:String = "value_change";
      
      private static var _curIndex;
      
      private static var _curValue;
      
      private static var _curInfo:UserInfo;
      
      private static var _isSend:Boolean = true;
      
      private static var _func:Function;
      
      private static var _instance:EventDispatcher;
       
      
      public function BufferRecordManager()
      {
         super();
      }
      
      private static function getBitState(param1:UserInfo, param2:uint) : Boolean
      {
         return param1.bufferRecordArr[param2];
      }
      
      private static function setBitStatge(param1:UserInfo, param2:uint, param3:Boolean, param4:uint, param5:Function = null) : void
      {
         var _loc6_:ByteArray = null;
         if(param3)
         {
            _curValue = 1;
         }
         else
         {
            _curValue = 0;
         }
         if(param2 >= LENGTH)
         {
            throw new Error("bitIndex 不能超过" + LENGTH + "，检查bufferrecord.xml文件");
         }
         if(_isSend)
         {
            _func = param5;
            _isSend = false;
            _curInfo = param1;
            _curIndex = param2;
            (_loc6_ = new ByteArray()).writeUnsignedInt(_curIndex);
            _loc6_.writeUnsignedInt(_curValue);
            SocketConnection.sendByQueue(CommandID.BUFFERRECORD,[param4,_loc6_],onSetBufferComHandler);
         }
      }
      
      private static function onSetBufferComHandler(param1:SocketEvent) : void
      {
         var _loc3_:uint = 0;
         var _loc4_:uint = 0;
         if(_curValue is Array || _curIndex is Array)
         {
            _loc3_ = 0;
            while(_loc3_ < _curIndex.length)
            {
               _loc4_ = uint(_curIndex[_loc3_]);
               _curInfo.bufferRecordArr[_loc4_] = _curValue[_loc3_];
               _loc3_++;
            }
         }
         else
         {
            _curInfo.bufferRecordArr[_curIndex] = _curValue;
         }
         _isSend = true;
         if(_func != null)
         {
            _func();
         }
         var _loc2_:Event = new Event(VALUE_CHANGE);
         dispatchEvent(_loc2_);
      }
      
      public static function getState(param1:UserInfo, param2:uint) : Boolean
      {
         var _loc3_:uint = BufferRecordConfig.getBitIndexByID(param2);
         return getBitState(param1,_loc3_);
      }
      
      public static function getMyState(param1:uint) : Boolean
      {
         return getState(MainManager.actorInfo,param1);
      }
      
      public static function setMyState(param1:uint, param2:Boolean, param3:Function = null) : void
      {
         return setState(MainManager.actorInfo,param1,param2,param3);
      }
      
      public static function setState(param1:UserInfo, param2:uint, param3:Boolean, param4:Function = null) : void
      {
         var _loc5_:uint = BufferRecordConfig.getBitIndexByID(param2);
         setBitStatge(param1,_loc5_,param3,1,param4);
      }
      
      private static function setBitStatges(param1:UserInfo, param2:Array, param3:Array, param4:uint, param5:Function = null) : void
      {
         var _loc6_:uint = 0;
         var _loc7_:ByteArray = null;
         var _loc8_:uint = 0;
         if(param3.length != param2.length)
         {
            throw new Error("bit位对应的bool的值不对应，请检查");
         }
         if(param4 <= 0)
         {
            throw new Error("没有传入bit位的索引值");
         }
         _loc6_ = 0;
         while(_loc6_ < param4)
         {
            if(!(param3[_loc6_] == 1 || param3[_loc6_] == 0))
            {
               throw new Error("设置bit位的值只能是1或者0");
            }
            if(param2[_loc8_] >= LENGTH)
            {
               throw new Error("bitIndex 不能超过" + LENGTH + "，检查bufferrecord.xml文件");
            }
            _loc6_++;
         }
         if(_isSend)
         {
            _func = param5;
            _isSend = false;
            _curInfo = param1;
            _curIndex = param2;
            _curValue = param3;
            _loc7_ = new ByteArray();
            _loc8_ = 0;
            while(_loc8_ < param4)
            {
               _loc7_.writeUnsignedInt(param2[_loc8_]);
               _loc7_.writeUnsignedInt(param3[_loc8_]);
               _loc8_++;
            }
            SocketConnection.sendByQueue(CommandID.BUFFERRECORD,[param4,_loc7_],onSetBufferComHandler);
         }
      }
      
      public static function setStates(param1:UserInfo, param2:Array, param3:Array, param4:Function = null) : void
      {
         var _loc7_:uint = 0;
         var _loc5_:Array = [];
         var _loc6_:uint = 0;
         while(_loc6_ < param2.length)
         {
            _loc7_ = BufferRecordConfig.getBitIndexByID(param2[_loc6_]);
            _loc5_.push(_loc7_);
            _loc6_++;
         }
         setBitStatges(param1,_loc5_,param3,_loc5_.length,param4);
      }
      
      private static function getInstance() : EventDispatcher
      {
         if(_instance == null)
         {
            _instance = new EventDispatcher();
         }
         return _instance;
      }
      
      public static function addEventListener(param1:String, param2:Function, param3:Boolean = false, param4:int = 0, param5:Boolean = false) : void
      {
         getInstance().addEventListener(param1,param2,param3,param4,param5);
      }
      
      public static function removeEventListener(param1:String, param2:Function, param3:Boolean = false) : void
      {
         getInstance().removeEventListener(param1,param2,param3);
      }
      
      public static function dispatchEvent(param1:Event) : void
      {
         getInstance().dispatchEvent(param1);
      }
      
      public static function hasEventListener(param1:String) : Boolean
      {
         return getInstance().hasEventListener(param1);
      }
   }
}
