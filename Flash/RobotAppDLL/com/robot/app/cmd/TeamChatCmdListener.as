package com.robot.app.cmd
{
   import com.robot.app.im.TeamChatController;
   import com.robot.app.im.talk.TeamChatData;
   import com.robot.app.team.TeamController;
   import com.robot.core.CommandID;
   import com.robot.core.event.MapEvent;
   import com.robot.core.info.TeamChatInfo;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.TaskIconManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.net.SharedObject;
   import flash.utils.ByteArray;
   import org.taomee.bean.BaseBean;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   
   public class TeamChatCmdListener extends BaseBean
   {
      
      public static const TEAM_CHAT_CUTBMP:String = "Team_Chat_CutBmp";
       
      
      private var icon:SimpleButton;
      
      public function TeamChatCmdListener()
      {
         super();
      }
      
      public static function sendTeamChatMsg(param1:uint, param2:ByteArray, param3:uint, param4:ByteArray) : void
      {
         SocketConnection.send(CommandID.TEAM_CHAT,param1,param2,param3,param4);
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.TEAM_CHAT,this.getTeamChatMsg);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,this.onSwitchMap);
         finish();
      }
      
      private function onSwitchMap(param1:MapEvent) : void
      {
         TeamChatController.isOpen = false;
      }
      
      private function getTeamChatMsg(param1:SocketEvent) : void
      {
         var _loc3_:TeamChatInfo = null;
         var _loc2_:SharedObject = SOManager.getUser_Info();
         if(!_loc2_.data["isHackTeam"] || _loc2_.data["isHackTeam"] == false)
         {
            _loc3_ = param1.data as TeamChatInfo;
            DebugTrace.show("teamChat -----------------> ",_loc3_.msg);
            if(!TeamChatController.isOpen)
            {
               TeamController.showInfoTip();
            }
            TeamChatData.addTeamChat(_loc3_);
         }
      }
      
      private function showIcon() : void
      {
         if(!this.icon)
         {
            this.icon = UIManager.getButton("Talk_Icon");
            this.icon.addEventListener(MouseEvent.CLICK,this.showTeamChatMsg);
         }
         TaskIconManager.addIcon(this.icon,TaskIconManager.LEFT,6);
      }
      
      private function hideIcon() : void
      {
         TaskIconManager.delIcon(this.icon);
      }
      
      private function showTeamChatMsg(param1:MouseEvent) : void
      {
         this.icon.visible = false;
         TeamChatController.show();
      }
   }
}
