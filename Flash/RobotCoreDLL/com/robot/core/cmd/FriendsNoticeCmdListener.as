package com.robot.core.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.info.FriendsNoticeInfo;
   import com.robot.core.manager.FriendsNoticeManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.RelationManager;
   import com.robot.core.net.SocketConnection;
   import flash.events.TimerEvent;
   import flash.utils.ByteArray;
   import flash.utils.Timer;
   import org.taomee.events.SocketEvent;
   
   public class FriendsNoticeCmdListener
   {
       
      
      private var _timer:Timer;
      
      private var _count:uint;
      
      private var _onLineFriendsList:Array;
      
      private var _type:uint = 0;
      
      public function FriendsNoticeCmdListener()
      {
         super();
      }
      
      public function start() : void
      {
         this._timer = new Timer(1000);
         this._timer.addEventListener(TimerEvent.TIMER,this.onTimer);
         this._timer.start();
         SocketConnection.addCmdListener(CommandID.FRIEND_NOTICE_MSG,this.onGetFriendsNoticeMsg);
         SocketConnection.addCmdListener(CommandID.FRIEND_NOTICE,this.onGetFriendsNotice);
      }
      
      private function onTimer(param1:TimerEvent) : void
      {
         ++this._count;
      }
      
      private function onGetFriendsNoticeMsg(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         this._type = _loc2_.readUnsignedInt();
         this.getFriendNoticeContent();
      }
      
      private function getFriendNoticeContent() : void
      {
         var _loc2_:uint = 0;
         var _loc1_:ByteArray = new ByteArray();
         for each(_loc2_ in RelationManager.friendIDs)
         {
            _loc1_.writeUnsignedInt(_loc2_);
         }
         if(RelationManager.friendIDs.length > 0)
         {
            SocketConnection.send(CommandID.GET_FRIEND_NOTICE,this._type,RelationManager.friendIDs.length,_loc1_);
         }
      }
      
      private function onGetFriendsNotice(param1:SocketEvent) : void
      {
         var _loc2_:FriendsNoticeInfo = param1.data as FriendsNoticeInfo;
         if(_loc2_.type == 3)
         {
            ++MainManager.actorInfo.blanketInvateCount;
         }
         FriendsNoticeManager.getNotice(_loc2_);
      }
   }
}
