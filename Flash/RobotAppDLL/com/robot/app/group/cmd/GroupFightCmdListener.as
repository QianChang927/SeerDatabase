package com.robot.app.group.cmd
{
   import com.robot.app.fightNote.FightWaitPanel;
   import com.robot.app.group.GroupFightWaitPanel;
   import com.robot.app.team.TeamCmdManager;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.group.event.GroupFightEvent;
   import com.robot.core.group.fightInfo.readyToFight.GroupReadyToFightInfo;
   import com.robot.core.group.fightInfo.startFight.GroupFightStartInfo;
   import com.robot.core.group.model.GroupFightModel;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.ui.loading.Loading;
   import flash.utils.ByteArray;
   import flash.utils.getDefinitionByName;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class GroupFightCmdListener extends BaseBean
   {
      
      private static const DLL_PATH:String = "com.robot.groupFight.GroupFightDLL";
      
      private static var readyData:GroupReadyToFightInfo;
       
      
      public function GroupFightCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.NOTICE_MEMBER_JOIN_FIGHT,this.groupMembJoin);
         SocketConnection.addCmdListener(CommandID.GROUP_READY_TO_FIGHT,this.groupReadyToFight);
         finish();
      }
      
      private function groupInviteToFight(param1:SocketEvent) : void
      {
      }
      
      private function groupHandlerFightInvite(param1:SocketEvent) : void
      {
      }
      
      private function groupMembJoin(param1:SocketEvent) : void
      {
         var _loc2_:uint = (param1.data as ByteArray).readUnsignedInt();
         switch(_loc2_)
         {
            case 1:
            case 2:
               break;
            case 3:
               GroupFightModel.status = GroupFightModel.FIGHT_WITH_NPC;
               break;
            case 4:
               GroupFightModel.status = GroupFightModel.FIGHT_WITH_BOSS;
               break;
            case 5:
               GroupFightModel.status = GroupFightModel.FIGHT_WITH_PLAYER;
               GroupFightModel.mode = GroupFightModel.SINGLE_MODE;
               GroupFightWaitPanel.show(false);
               break;
            case 6:
               GroupFightModel.status = GroupFightModel.FIGHT_WITH_PLAYER;
               GroupFightModel.mode = GroupFightModel.MULTI_MODE;
               GroupFightWaitPanel.show(false);
               break;
            case 7:
         }
         SocketConnection.send(CommandID.GROUP_MEMB_JOIN_FIGHT);
      }
      
      private function groupReadyToFight(param1:SocketEvent = null) : void
      {
         var evt:SocketEvent = param1;
         GroupFightWaitPanel.hide();
         readyData = evt.data as GroupReadyToFightInfo;
         switch(readyData.model)
         {
            case 1:
            case 2:
               break;
            case 3:
               GroupFightModel.status = GroupFightModel.FIGHT_WITH_NPC;
               break;
            case 4:
               GroupFightModel.status = GroupFightModel.FIGHT_WITH_BOSS;
               break;
            case 5:
               GroupFightModel.status = GroupFightModel.FIGHT_WITH_PLAYER;
               GroupFightModel.mode = GroupFightModel.SINGLE_MODE;
               break;
            case 6:
               GroupFightModel.status = GroupFightModel.FIGHT_WITH_PLAYER;
               GroupFightModel.mode = GroupFightModel.MULTI_MODE;
               break;
            case 7:
         }
         TeamCmdManager.instance.refreshTeamInfo();
         PetManager.upDate(function():void
         {
            var cls:* = undefined;
            var loader:MCLoader = null;
            try
            {
               cls = getDefinitionByName(DLL_PATH);
               cls.setup(readyData.readyFtGroupOneInfo,readyData.readyFtGroupTwoInfo);
            }
            catch(e:Error)
            {
               loader = new MCLoader(ClientConfig.getDLLPath("GroupFightDLL.swf"),LevelManager.topLevel,Loading.TITLE_AND_PERCENT,"正在进入组队对战系统",true,true);
               loader.setIsShowClose(false);
               loader.addEventListener(MCLoadEvent.SUCCESS,onLoadDLL);
               loader.doLoad();
            }
         });
         FightWaitPanel.hide();
      }
      
      private function onLoadDLL(param1:MCLoadEvent) : void
      {
         var _loc2_:* = getDefinitionByName(DLL_PATH);
         _loc2_.setup(readyData.readyFtGroupOneInfo,readyData.readyFtGroupTwoInfo);
      }
      
      private function startGroupFight(param1:SocketEvent) : void
      {
         var _loc2_:GroupFightStartInfo = param1.data as GroupFightStartInfo;
         EventManager.dispatchEvent(new GroupFightEvent(GroupFightEvent.START_FIGHT,[]));
         var _loc3_:GroupFightEvent = new GroupFightEvent(GroupFightEvent.START_FIGHT,_loc2_);
      }
   }
}
