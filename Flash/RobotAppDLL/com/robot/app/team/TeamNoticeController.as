package com.robot.app.team
{
   import com.robot.app.im.TeamChatController;
   import com.robot.app.im.talk.TeamChatData;
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.info.TeamChatInfo;
   import com.robot.core.info.team.TeamInformInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MessageManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class TeamNoticeController
   {
      
      public static const NEW_TEAM_LEVEL_UP:String = "newTeamLevelup";
      
      public static const kindArray:Array = ["战队等级","精灵科技中心","道具科技中心","战队物资中心"];
       
      
      public function TeamNoticeController()
      {
         super();
      }
      
      public static function setup() : void
      {
         if(MainManager.actorInfo.teamInfo.id > 0)
         {
            TeamMemberInfoManager.instance.getAllMembers();
         }
         SocketConnection.addCmdListener(CommandID.NEW_TEAM_TEAM_TECH_LVUP,onTeamTechLvUp);
         SocketConnection.addCmdListener(CommandID.NEW_TEAM_LEVELUP,onTeamLvUp);
         SocketConnection.addCmdListener(CommandID.NEW_TEAM_LEADER_CHANGE,onLeaderChange);
         SocketConnection.addCmdListener(CommandID.NEW_TEAM_GET_NOTICE,onBonus);
         SocketConnection.addCmdListener(CommandID.NEW_TEAM_DISBAND_NOTICE,onDisband);
      }
      
      private static function onDisband(param1:SocketEvent) : void
      {
         var _loc2_:TeamInformInfo = new TeamInformInfo();
         _loc2_.type = CommandID.NEW_TEAM_DISBAND_NOTICE;
         MessageManager.addTeamInformInfo(_loc2_);
      }
      
      private static function onTeamTechLvUp(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:int = int(_loc2_.readUnsignedInt());
         var _loc4_:int = int(_loc2_.readUnsignedInt());
         var _loc5_:Array = ["体力","攻击","防御","特攻","特防"];
         var _loc6_:TeamChatInfo;
         (_loc6_ = new TeamChatInfo()).senderID = -1;
         _loc6_.msg = "战队精灵" + _loc5_[_loc3_] + "升级至" + _loc4_ + "级";
         addNewTeamChatInfo(_loc6_);
      }
      
      private static function onTeamLvUp(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:int = int(_loc2_.readUnsignedInt());
         var _loc4_:int = int(_loc2_.readUnsignedInt());
         var _loc5_:TeamChatInfo;
         (_loc5_ = new TeamChatInfo()).senderID = -1;
         _loc5_.msg = kindArray[_loc3_] + "升级至" + _loc4_ + "级";
         addNewTeamChatInfo(_loc5_);
         EventManager.dispatchEvent(new DynamicEvent(NEW_TEAM_LEVEL_UP,{
            "leveltype":_loc3_,
            "level":_loc4_
         }));
      }
      
      private static function onLeaderChange(param1:SocketEvent) : void
      {
         var oldLeader:int = 0;
         var newLeader:int = 0;
         var oldLeaderName:String = null;
         var newLeaderName:String = null;
         var e:SocketEvent = param1;
         var b:ByteArray = e.data as ByteArray;
         oldLeader = int(b.readUnsignedInt());
         newLeader = int(b.readUnsignedInt());
         SocketConnection.addCmdListener(CommandID.USER_PARTY_GET_USER_IMAGE_NAME,function(param1:SocketEvent):void
         {
            var _loc6_:TeamChatInfo = null;
            var _loc3_:ByteArray = param1.data as ByteArray;
            _loc3_.position = 0;
            var _loc4_:uint = _loc3_.readUnsignedInt();
            var _loc5_:String = _loc3_.readUTFBytes(16);
            if(_loc4_ == oldLeader)
            {
               oldLeaderName = _loc5_;
               SocketConnection.send(CommandID.USER_PARTY_GET_USER_IMAGE_NAME,newLeader);
            }
            else
            {
               SocketConnection.removeCmdListener(CommandID.USER_PARTY_GET_USER_IMAGE_NAME,arguments.callee);
               newLeaderName = _loc5_;
               (_loc6_ = new TeamChatInfo()).senderID = -1;
               _loc6_.msg = oldLeaderName + "(" + oldLeader + ")" + "把会长权限移交给了" + newLeaderName + "(" + newLeader + ")";
               addNewTeamChatInfo(_loc6_);
            }
         });
         SocketConnection.send(CommandID.USER_PARTY_GET_USER_IMAGE_NAME,oldLeader);
         TeamMemberInfoManager.instance.getAllMembers();
      }
      
      private static function onBonus(param1:SocketEvent) : void
      {
         var userid:int = 0;
         var itemid:int = 0;
         var itemnum:int = 0;
         var e:SocketEvent = param1;
         var b:ByteArray = e.data as ByteArray;
         userid = int(b.readUnsignedInt());
         itemid = int(b.readUnsignedInt());
         itemnum = int(b.readUnsignedInt());
         SocketConnection.addCmdListener(CommandID.USER_PARTY_GET_USER_IMAGE_NAME,function(param1:SocketEvent):void
         {
            var _loc3_:ByteArray = param1.data as ByteArray;
            _loc3_.position = 0;
            var _loc4_:uint = _loc3_.readUnsignedInt();
            var _loc5_:String = _loc3_.readUTFBytes(16);
            SocketConnection.removeCmdListener(CommandID.USER_PARTY_GET_USER_IMAGE_NAME,arguments.callee);
            var _loc6_:TeamChatInfo;
            (_loc6_ = new TeamChatInfo()).senderID = -1;
            _loc6_.msg = _loc5_ + "(" + userid + ")" + "在物资中心获得了" + itemnum + "个" + ItemXMLInfo.getName(itemid);
            addNewTeamChatInfo(_loc6_);
         });
         SocketConnection.send(CommandID.USER_PARTY_GET_USER_IMAGE_NAME,userid);
      }
      
      private static function addNewTeamChatInfo(param1:TeamChatInfo) : void
      {
         if(!TeamChatController.isOpen)
         {
            TeamController.showInfoTip();
         }
         TeamChatData.addTeamChat(param1);
      }
   }
}
