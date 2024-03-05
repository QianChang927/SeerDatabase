package com.robot.core.info
{
   import com.robot.core.manager.MainManager;
   import flash.utils.IDataInput;
   
   public class ChatInfo
   {
       
      
      private var _senderID:uint;
      
      private var _senderNicName:String;
      
      private var _toID:uint;
      
      private var _msg:String;
      
      public var isRead:Boolean = false;
      
      public function ChatInfo(param1:IDataInput)
      {
         super();
         if(param1 == null)
         {
            return;
         }
         this._senderID = param1.readUnsignedInt();
         this._senderNicName = param1.readUTFBytes(16);
         this._toID = param1.readUnsignedInt();
         var _loc2_:uint = uint(param1.readUnsignedInt());
         this._msg = param1.readUTFBytes(_loc2_);
      }
      
      public function get senderNickName() : String
      {
         return this._senderNicName;
      }
      
      public function get toID() : uint
      {
         return this._toID;
      }
      
      public function get msg() : String
      {
         return this._msg;
      }
      
      public function get talkID() : uint
      {
         if(this._senderID == MainManager.actorID)
         {
            return this._toID;
         }
         return this._senderID;
      }
      
      public function get senderID() : uint
      {
         return this._senderID;
      }
      
      public function set senderID(param1:uint) : void
      {
         this._senderID = param1;
      }
      
      public function get senderNicName() : String
      {
         return this._senderNicName;
      }
      
      public function set senderNicName(param1:String) : void
      {
         this._senderNicName = param1;
      }
      
      public function set toID(param1:uint) : void
      {
         this._toID = param1;
      }
      
      public function set msg(param1:String) : void
      {
         this._msg = param1;
      }
   }
}
