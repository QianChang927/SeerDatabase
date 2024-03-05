package com.robot.core
{
   import com.robot.core.config.xml.BufferRecordConfig;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   
   public class BitBuffSetManager extends BaseBean
   {
       
      
      public function BitBuffSetManager()
      {
         super();
      }
      
      public static function getMultiValue(param1:Array, param2:Function) : void
      {
         var num:int = 0;
         var foreverArr:Array = param1;
         var fun:Function = param2;
         var paramArr:ByteArray = new ByteArray();
         for each(num in foreverArr)
         {
            paramArr.writeInt(num);
         }
         SocketConnection.sendByQueue(CommandID.GET_MULTI_FOREVER,[foreverArr.length,paramArr],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:Array = new Array();
            var _loc5_:int = 0;
            while(_loc5_ < _loc3_)
            {
               _loc4_.push(_loc2_.readUnsignedInt());
               _loc5_++;
            }
            if(null != fun)
            {
               fun(_loc4_);
            }
         });
      }
      
      public static function getBitSet(param1:Array, param2:Function) : void
      {
         var paramArr:Array = param1;
         var fun:Function = param2;
         var b:ByteArray = new ByteArray();
         var i:uint = 0;
         while(i < paramArr.length)
         {
            BitBuffSetClass.checkBitBuffBound(paramArr[i]);
            b.writeUnsignedInt(paramArr[i]);
            i++;
         }
         b.position = 0;
         SocketConnection.sendByQueue(CommandID.BATCH_GET_BITSET,[paramArr.length,b],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:uint = _loc2_.readUnsignedInt();
            var _loc4_:Array = [];
            var _loc5_:uint = 0;
            while(_loc5_ < _loc3_)
            {
               _loc4_.push(_loc2_.readUnsignedByte());
               _loc5_++;
            }
            fun.call(null,_loc4_);
         });
      }
      
      override public function start() : void
      {
         getBitSet([16427],function(param1:Array):void
         {
            var arr:Array = param1;
            getMultiValue([6906,120200],function(param1:Array):void
            {
               var arr1:Array = param1;
               BitBuffSetClass.getBitSet(BufferRecordConfig.getBitBuffArray(),function(param1:Array):void
               {
                  NewSeerTaskController.newseer2020Forever = arr1[1];
                  NewSeerTaskController.isNewVersionSeer20170627 = arr[0] == 1;
                  NewSeerTaskController.newSeer20170627TaskPro = arr1[0];
                  BitBuffSetClass.buffStates = param1;
                  finish();
               });
            });
         });
      }
   }
}
