package com.robot.app.task.petstory.control
{
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import org.taomee.events.SocketEvent;
   
   public class CarnivalBufferManager
   {
      
      private static var _instance:com.robot.app.task.petstory.control.CarnivalBufferManager;
       
      
      private var _arr:Array;
      
      private var _func:Function;
      
      public function CarnivalBufferManager(param1:PrivateClass)
      {
         super();
      }
      
      public static function getInstance() : com.robot.app.task.petstory.control.CarnivalBufferManager
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.task.petstory.control.CarnivalBufferManager(new PrivateClass());
         }
         return _instance;
      }
      
      public function combinationNum2Arr(param1:uint, param2:uint, param3:uint) : void
      {
         this._arr = this.toBitArray(param1,32).concat(this.toBitArray(param2,32)).concat(this.toBitArray(param3,32));
      }
      
      public function setBitArr(param1:uint, param2:Boolean, param3:Function = null) : void
      {
         this._func = param3;
         this._arr[param1] = param2;
         SocketConnection.addCmdListener(CommandID.SET_CARNIVAL_BUFFER,this.onSetBufferComHandler);
         SocketConnection.send(CommandID.SET_CARNIVAL_BUFFER,this.get32Num(1),this.get32Num(2),this.get32Num(3));
      }
      
      private function onSetBufferComHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.SET_CARNIVAL_BUFFER,this.onSetBufferComHandler);
         if(this._func != null)
         {
            this._func();
         }
      }
      
      public function getBitArr(param1:uint) : Boolean
      {
         return this._arr[param1];
      }
      
      public function get32Num(param1:uint) : uint
      {
         var _loc2_:Array = null;
         if(param1 == 1)
         {
            _loc2_ = this._arr.slice(0,32 * param1);
         }
         else
         {
            _loc2_ = this._arr.slice(32 * (param1 - 1),32 * param1);
         }
         return this.fromBitArray(_loc2_);
      }
      
      public function fromBitArray(param1:Array) : uint
      {
         var _loc2_:uint = 0;
         var _loc3_:int = int(param1.length);
         while(_loc3_ >= 0)
         {
            _loc2_ <<= 1;
            _loc2_ |= param1[_loc3_];
            _loc3_--;
         }
         return _loc2_;
      }
      
      public function toBitArray(param1:uint, param2:int) : Array
      {
         var _loc3_:Array = [];
         var _loc4_:int = 0;
         while(_loc4_ < param2)
         {
            _loc3_[_loc4_] = Boolean(param1 & 1);
            param1 >>= 1;
            _loc4_++;
         }
         return _loc3_;
      }
      
      public function getBufferList() : Array
      {
         return this._arr;
      }
      
      public function clearTest() : void
      {
         SocketConnection.send(CommandID.SET_CARNIVAL_BUFFER,0,0,0);
      }
      
      public function destory() : void
      {
         this._arr.splice(0);
         this._arr = null;
      }
   }
}

class PrivateClass
{
    
   
   public function PrivateClass()
   {
      super();
   }
}
