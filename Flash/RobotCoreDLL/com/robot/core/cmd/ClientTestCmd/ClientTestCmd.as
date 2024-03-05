package com.robot.core.cmd.ClientTestCmd
{
   import com.robot.core.manager.MainManager;
   import com.robot.core.net.SocketConnection;
   import flash.net.Socket;
   import flash.utils.ByteArray;
   import org.taomee.tmf.HeadInfo;
   
   public class ClientTestCmd extends Socket
   {
      
      private static var _instance:com.robot.core.cmd.ClientTestCmd.ClientTestCmd;
       
      
      private const cmdPrefix:String = "cmd_";
      
      private var _cmdID:int;
      
      public function ClientTestCmd()
      {
         super();
      }
      
      public static function get instance() : com.robot.core.cmd.ClientTestCmd.ClientTestCmd
      {
         if(_instance == null)
         {
            _instance = new com.robot.core.cmd.ClientTestCmd.ClientTestCmd();
         }
         return _instance;
      }
      
      public function cToc(param1:uint, param2:Array, param3:Function) : void
      {
         var _loc4_:Array = null;
         this._cmdID = param1;
         switch(param1)
         {
            case 8888:
               if(param2[0] == 1)
               {
                  _loc4_ = [2];
                  SocketConnection.dispatchCmd(param1,this.makeHead(),this.makeBody(_loc4_));
               }
               else
               {
                  param3();
               }
               break;
            default:
               param3();
         }
      }
      
      private function makeHead() : HeadInfo
      {
         var _loc1_:ByteArray = new ByteArray();
         _loc1_.writeUTFBytes("1");
         _loc1_.writeUnsignedInt(this._cmdID);
         _loc1_.writeUnsignedInt(MainManager.actorID);
         _loc1_.writeInt(1);
         _loc1_.position = 0;
         return new HeadInfo(_loc1_);
      }
      
      private function makeBody(param1:Array) : ByteArray
      {
         var _loc2_:ByteArray = new ByteArray();
         this.serializeBinary(_loc2_,param1);
         var _loc3_:ByteArray = new ByteArray();
         _loc3_.writeBytes(_loc2_);
         return _loc3_;
      }
      
      private function serializeBinary(param1:ByteArray, param2:Array) : void
      {
         var _loc3_:* = undefined;
         for each(_loc3_ in param2)
         {
            if(_loc3_ is Array)
            {
               this.serializeBinary(param1,_loc3_);
            }
            else if(_loc3_ is String)
            {
               param1.writeUTFBytes(_loc3_);
            }
            else if(_loc3_ is ByteArray)
            {
               param1.writeBytes(_loc3_);
            }
            else
            {
               param1.writeUnsignedInt(_loc3_);
            }
         }
      }
   }
}
