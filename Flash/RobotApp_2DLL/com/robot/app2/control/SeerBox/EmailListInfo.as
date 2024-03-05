package com.robot.app2.control.SeerBox
{
   public class EmailListInfo
   {
       
      
      private var _mId:uint;
      
      private var _status:Boolean;
      
      private var _sender:String;
      
      private var _title:String;
      
      private var _hasAttachment:Boolean;
      
      private var _attachmentGetFlag:Boolean;
      
      private var _date:String;
      
      private var _senderTemp:String;
      
      private var _senderArr:Array;
      
      private var _senderArr1:Array;
      
      private var _star:String;
      
      public function EmailListInfo(param1:Object = null)
      {
         this._senderArr = [];
         this._senderArr1 = [];
         super();
         this.mId = param1.readUnsignedInt();
         this.status = Boolean(param1.readUnsignedInt());
         this.title = param1.readMultiByte(64,"utf-8");
         this.hasAttachment = param1.readUnsignedInt();
         this.attachmentGetFlag = Boolean(param1.readUnsignedInt());
         var _loc2_:Date = new Date(param1.readUnsignedInt() * 1000);
         this.date = _loc2_.getFullYear() + "." + (_loc2_.getMonth() + 1) + "." + _loc2_.getDate();
         this._senderTemp = param1.readMultiByte(64,"utf-8");
         this._senderArr = String(this._senderTemp).split("-");
         this._sender = this._senderArr[0];
         this._senderArr1 = String(this._senderArr[1]).split("+");
         this._star = this._senderArr1[0];
      }
      
      public function get mId() : uint
      {
         return this._mId;
      }
      
      public function set mId(param1:uint) : void
      {
         this._mId = param1;
      }
      
      public function get status() : Boolean
      {
         return this._status;
      }
      
      public function set status(param1:Boolean) : void
      {
         this._status = param1;
      }
      
      public function get sender() : String
      {
         return this._sender;
      }
      
      public function set sender(param1:String) : void
      {
         this._sender = param1;
      }
      
      public function get title() : String
      {
         return this._title;
      }
      
      public function set title(param1:String) : void
      {
         this._title = param1;
      }
      
      public function get date() : String
      {
         return this._date;
      }
      
      public function get star() : String
      {
         return this._star;
      }
      
      public function set star(param1:String) : void
      {
         this._star = param1;
      }
      
      public function set date(param1:String) : void
      {
         this._date = param1;
      }
      
      public function get hasAttachment() : Boolean
      {
         return this._hasAttachment;
      }
      
      public function set hasAttachment(param1:Boolean) : void
      {
         this._hasAttachment = param1;
      }
      
      public function get attachmentGetFlag() : Boolean
      {
         return this._attachmentGetFlag;
      }
      
      public function set attachmentGetFlag(param1:Boolean) : void
      {
         this._attachmentGetFlag = param1;
      }
   }
}
