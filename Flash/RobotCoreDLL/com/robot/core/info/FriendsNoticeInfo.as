package com.robot.core.info
{
   import flash.utils.IDataInput;
   
   public class FriendsNoticeInfo
   {
       
      
      private var _userID:uint;
      
      private var _type:uint;
      
      private var _data:uint;
      
      public function FriendsNoticeInfo(param1:IDataInput)
      {
         super();
         this._userID = param1.readUnsignedInt();
         this._type = param1.readUnsignedInt();
         this._data = param1.readUnsignedInt();
      }
      
      public function get userID() : uint
      {
         return this._userID;
      }
      
      public function get type() : uint
      {
         return this._type;
      }
      
      public function get data() : uint
      {
         return this._data;
      }
   }
}
