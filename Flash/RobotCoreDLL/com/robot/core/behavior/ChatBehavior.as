package com.robot.core.behavior
{
   import com.robot.core.CommandID;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   
   public class ChatBehavior extends BaseBehavior
   {
      
      private static const MAX:int = 131;
       
      
      public var _msg:String;
      
      private var _toID:uint;
      
      private var _byte:ByteArray;
      
      public function ChatBehavior(param1:String, param2:uint = 0, param3:Boolean = true)
      {
         var _loc4_:int = 0;
         var _loc5_:int = 0;
         this._byte = new ByteArray();
         super(param3);
         this._msg = param1;
         this._toID = param2;
         if(_isNet)
         {
            _loc4_ = param1.length;
            _loc5_ = 0;
            while(_loc5_ < _loc4_)
            {
               if(this._byte.length > MAX)
               {
                  break;
               }
               this._byte.writeUTFBytes(param1.charAt(_loc5_));
               _loc5_++;
            }
            this._byte.writeUTFBytes("0");
         }
      }
      
      override public function execute(param1:BasePeoleModel) : void
      {
         if(this._msg == "")
         {
            this._byte = null;
            return;
         }
         if(_isNet)
         {
            SocketConnection.send(CommandID.CHAT,this._toID,this._byte.length,this._byte);
         }
         else
         {
            param1.showBox(this._msg,5);
         }
         this._byte = null;
      }
   }
}
