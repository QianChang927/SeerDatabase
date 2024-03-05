package com.robot.core
{
   import com.robot.core.config.xml.BufferRecordConfig;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class BitBuffSetClass
   {
      
      public static var buffStates:Array;
       
      
      public function BitBuffSetClass()
      {
         super();
      }
      
      public static function getBitSet(param1:Array, param2:Function = null) : void
      {
         var bitbuff:int = 0;
         var b:ByteArray = null;
         var i:uint = 0;
         var arr:Array = param1;
         var func:Function = param2;
         if(null == arr || arr.length == 0)
         {
            return;
         }
         for each(bitbuff in arr)
         {
            if(isOutOfBound(bitbuff))
            {
               throw new Error(bitbuff + "超出此类管理范围(22401-25600)！");
            }
         }
         b = new ByteArray();
         i = 0;
         while(i < arr.length)
         {
            b.writeUnsignedInt(arr[i]);
            i++;
         }
         b.position = 0;
         SocketConnection.sendByQueue(CommandID.BATCH_GET_BITSET,[arr.length,b],function(param1:SocketEvent):void
         {
            var _loc6_:uint = 0;
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:uint = _loc2_.readUnsignedInt();
            var _loc4_:Array = [];
            var _loc5_:uint = 0;
            while(_loc5_ < _loc3_)
            {
               _loc6_ = BufferRecordConfig.getBitBuffID(arr[_loc5_]);
               _loc4_[_loc6_] = _loc2_.readUnsignedByte();
               _loc5_++;
            }
            if(null != func)
            {
               func.call(null,_loc4_);
            }
         });
      }
      
      public static function setBitSet(param1:Array, param2:Array, param3:Function = null) : void
      {
         var sendArr:ByteArray;
         var i:int = 0;
         var bitbuff:int = 0;
         var arr:Array = param1;
         var valueArr:Array = param2;
         var func:Function = param3;
         if(null == arr || arr.length == 0 || null == valueArr || valueArr.length == 0 || arr.length != valueArr.length)
         {
            return;
         }
         i = 0;
         while(i < arr.length)
         {
            bitbuff = int(arr[i]);
            if(isOutOfBound(bitbuff))
            {
               throw new Error(bitbuff + "超出此类管理范围(22401-25600)！");
            }
            if(!(valueArr[i] is int) || valueArr[i] < 0 || valueArr[i] > 1)
            {
               throw new Error("BitBuff值必须为0或者1！");
            }
            i++;
         }
         sendArr = new ByteArray();
         i = 0;
         while(i < arr.length)
         {
            sendArr.writeShort(arr[i]);
            sendArr.writeByte(valueArr[i]);
            i++;
         }
         SocketConnection.sendByQueue(CommandID.BITSET_SET_MULTI_VALUE,[arr.length,sendArr],function(param1:SocketEvent):void
         {
            var _loc2_:uint = 0;
            i = 0;
            while(i < arr.length)
            {
               _loc2_ = BufferRecordConfig.getBitBuffID(arr[i]);
               buffStates[_loc2_] = valueArr[i];
               ++i;
            }
            if(null != func)
            {
               func();
            }
         });
      }
      
      private static function isOutOfBound(param1:int) : Boolean
      {
         return param1 < 22401 || param1 > 25600;
      }
      
      public static function checkBitBuffBound(param1:int) : void
      {
         if(param1 >= 22409 && param1 <= 25600)
         {
            throw new Error("此号段的bitbuff值由BitBuffSetClass.getBitSet管理，其他范围使用KTool.getBitSet！");
         }
      }
      
      public static function getState(param1:uint) : Boolean
      {
         var _loc2_:uint = BufferRecordConfig.getBitBuffID(param1);
         return Boolean(buffStates[_loc2_]);
      }
      
      public static function setState(param1:uint, param2:int, param3:Function = null) : void
      {
         var id:uint = 0;
         var bufferID:uint = param1;
         var value:int = param2;
         var func:Function = param3;
         id = BufferRecordConfig.getBitBuffID(bufferID);
         if(isOutOfBound(bufferID))
         {
            throw new Error(bufferID + "超出此类管理范围(22401-25600)！");
         }
         if(value < 0 || value > 1)
         {
            throw new Error("BitBuff值必须为0或者1！");
         }
         SocketConnection.sendWithCallback(CommandID.COMMAND_42019,function(param1:SocketEvent):void
         {
            buffStates[id] = value;
            if(func != null)
            {
               func();
            }
         },bufferID,value);
      }
      
      public static function setBinaryValue(param1:uint, param2:int, param3:int) : void
      {
         var _loc5_:* = 0;
         var _loc4_:int = 0;
         while(_loc4_ < param2)
         {
            _loc5_ = param3 & 1;
            setState(param1 + _loc4_,_loc5_);
            param3 >>= 1;
            _loc4_++;
         }
         if(param3 > 0)
         {
            throw new Error("位数不对");
         }
      }
      
      public static function getBinaryValue(param1:uint, param2:int) : int
      {
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         while(_loc4_ < param2)
         {
            if(getState(_loc4_ + param1))
            {
               _loc3_ += 1 << _loc4_;
            }
            _loc4_++;
         }
         return _loc3_;
      }
   }
}
