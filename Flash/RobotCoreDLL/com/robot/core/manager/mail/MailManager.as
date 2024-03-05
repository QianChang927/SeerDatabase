package com.robot.core.manager.mail
{
   import com.robot.core.CommandID;
   import com.robot.core.cmd.MailCmdListener;
   import com.robot.core.event.MailEvent;
   import com.robot.core.info.mail.MailListInfo;
   import com.robot.core.info.mail.SingleMailInfo;
   import com.robot.core.manager.SOManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.loading.loadingstyle.ILoadingStyle;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.text.TextField;
   import flash.utils.ByteArray;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   
   public class MailManager
   {
      
      private static var _hashMap:HashMap = new HashMap();
      
      public static var total:uint;
      
      private static var unReadCount:uint;
      
      private static var unreadTxt:TextField;
      
      private static var loadingView:ILoadingStyle;
      
      private static var delArray:Array;
      
      private static var sysMailMap:HashMap = new HashMap();
      
      private static var _instance:EventDispatcher;
       
      
      public function MailManager()
      {
         super();
      }
      
      public static function getNew() : void
      {
      }
      
      private static function getUnRead() : void
      {
         SocketConnection.addCmdListener(CommandID.MAIL_GET_UNREAD,onGetUnRead);
         SocketConnection.send(CommandID.MAIL_GET_UNREAD);
      }
      
      private static function onGetUnRead(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.MAIL_GET_UNREAD,onGetUnRead);
         var _loc2_:ByteArray = param1.data as ByteArray;
         unReadCount = _loc2_.readUnsignedInt();
         if(unReadCount > 0)
         {
            unreadTxt.text = unReadCount.toString();
         }
         else
         {
            unreadTxt.text = "";
         }
      }
      
      public static function sendMail(param1:uint, param2:String, param3:Array) : void
      {
         var _loc6_:uint = 0;
         var _loc4_:ByteArray;
         (_loc4_ = new ByteArray()).writeUTFBytes(param2 + "0");
         if(_loc4_.length > 150)
         {
            Alarm.show("你输入的邮件内容过长！");
            return;
         }
         if(param3.length > 10)
         {
            Alarm.show("最多只能同时给10个人发送邮件哦！");
            return;
         }
         var _loc5_:ByteArray = new ByteArray();
         for each(_loc6_ in param3)
         {
            _loc5_.writeUnsignedInt(_loc6_);
         }
         SocketConnection.send(CommandID.MAIL_SEND,param1,_loc4_.length,_loc4_,param3.length,_loc5_);
      }
      
      public static function getMailContent(param1:uint, param2:Function) : void
      {
         var id:uint = param1;
         var fun:Function = param2;
         SocketConnection.addCmdListener(CommandID.MAIL_GET_CONTENT,function(param1:SocketEvent):void
         {
            var _loc12_:SingleMailInfo = null;
            var _loc13_:Array = null;
            SocketConnection.removeCmdListener(CommandID.MAIL_GET_CONTENT,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            var _loc4_:uint = _loc3_.readUnsignedInt();
            var _loc5_:uint = _loc3_.readUnsignedInt();
            var _loc6_:uint = _loc3_.readUnsignedInt();
            var _loc7_:uint = _loc3_.readUnsignedInt();
            var _loc8_:String = _loc3_.readUTFBytes(16);
            var _loc9_:* = _loc3_.readUnsignedInt() == 1;
            var _loc10_:uint = _loc3_.readUnsignedInt();
            var _loc11_:String = _loc3_.readUTFBytes(_loc10_);
            if(_hashMap.containsKey(_loc4_))
            {
               _loc12_ = _hashMap.getValue(_loc4_);
            }
            else
            {
               _loc12_ = new SingleMailInfo();
               _hashMap.add(_loc4_,_loc12_);
            }
            _loc12_.template = _loc5_;
            _loc12_.time = _loc6_;
            _loc12_.fromID = _loc7_;
            _loc12_.fromNick = _loc8_;
            _loc12_.readed = _loc9_;
            _loc12_.content = _loc11_;
            if(_loc5_ == 10033 || _loc5_ == 10034)
            {
               _loc13_ = _loc12_.content.split("|");
               _loc12_.inviteID = int(_loc13_[0]);
               _loc12_.inviteName = _loc13_[1];
               _loc12_.inviteCode = _loc13_[2];
            }
            if(fun != null)
            {
               fun(_loc12_);
            }
         });
         SocketConnection.send(CommandID.MAIL_GET_CONTENT,id);
      }
      
      public static function setReaded(param1:Array) : void
      {
         var _loc3_:uint = 0;
         if(param1.length == 0)
         {
            return;
         }
         var _loc2_:ByteArray = new ByteArray();
         for each(_loc3_ in param1)
         {
            _loc2_.writeUnsignedInt(_loc3_);
         }
         SocketConnection.send(CommandID.MAIL_SET_READED,param1.length,_loc2_);
      }
      
      public static function delMail(param1:Array) : void
      {
         var _loc3_:uint = 0;
         if(param1.length == 0)
         {
            return;
         }
         delArray = param1.slice();
         var _loc2_:ByteArray = new ByteArray();
         for each(_loc3_ in param1)
         {
            _loc2_.writeUnsignedInt(_loc3_);
            if(_loc3_ == 0)
            {
               SOManager.getUserSO(SOManager.MAIL).data[SOManager.MAIL_VERSION] = true;
            }
         }
         SocketConnection.send(CommandID.MAIL_DELETE,param1.length,_loc2_);
      }
      
      public static function delAllMail() : void
      {
         SOManager.getUserSO(SOManager.MAIL).data[SOManager.MAIL_VERSION] = true;
         SocketConnection.send(CommandID.MAIL_DEL_ALL);
      }
      
      public static function getMailList(param1:uint = 1) : void
      {
         SocketConnection.addCmdListener(CommandID.MAIL_GET_LIST,onMailList);
         SocketConnection.send(CommandID.MAIL_GET_LIST,param1);
      }
      
      private static function onMailList(param1:SocketEvent) : void
      {
         var _loc3_:SingleMailInfo = null;
         var _loc2_:MailListInfo = param1.data as MailListInfo;
         total = _loc2_.total;
         for each(_loc3_ in _loc2_.mailList)
         {
            _hashMap.add(_loc3_.id,_loc3_);
         }
         if(_loc2_.total > _hashMap.length)
         {
            getMailList(_hashMap.length + 1);
         }
         else
         {
            dispatchEvent(new MailEvent(MailEvent.MAIL_LIST));
         }
      }
      
      public static function getMailInfos() : Array
      {
         return _hashMap.getValues().sortOn("time",Array.NUMERIC | Array.DESCENDING);
      }
      
      public static function getMailIDs() : Array
      {
         return _hashMap.getKeys();
      }
      
      public static function getSingleMail(param1:uint) : SingleMailInfo
      {
         return _hashMap.getValue(param1);
      }
      
      public static function deleteComplete() : void
      {
         var _loc1_:uint = 0;
         for each(_loc1_ in delArray)
         {
            _hashMap.remove(_loc1_);
         }
         dispatchEvent(new MailEvent(MailEvent.MAIL_LIST));
      }
      
      public static function clearComplete() : void
      {
         _hashMap.clear();
         dispatchEvent(new MailEvent(MailEvent.MAIL_LIST));
      }
      
      public static function addSysMail(param1:uint) : void
      {
         sysMailMap.add(param1,param1);
      }
      
      public static function delSysMail() : void
      {
         MailCmdListener.isShowTip = false;
         var _loc1_:Array = sysMailMap.getKeys();
         delMail(_loc1_);
         sysMailMap.clear();
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
