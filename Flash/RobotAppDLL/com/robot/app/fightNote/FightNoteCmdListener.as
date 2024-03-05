package com.robot.app.fightNote
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.info.fightInvite.InviteHandleInfo;
   import com.robot.app.info.fightInvite.InviteNoteInfo;
   import com.robot.app.team.TeamCmdManager;
   import com.robot.app.user.UserInfoController;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.FightStartInfo;
   import com.robot.core.info.fightInfo.NoteReadyToFightInfo;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.FightdllLoader;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.loading.Loading;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.TextEvent;
   import flash.utils.clearTimeout;
   import flash.utils.getDefinitionByName;
   import flash.utils.setTimeout;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class FightNoteCmdListener extends BaseBean
   {
      
      public static var isInFightModule:Boolean = false;
       
      
      private var readyData:NoteReadyToFightInfo;
      
      private var loader:FightdllLoader;
      
      private var _delay:uint;
      
      private var typeNpc:Array;
      
      private var typeBoss:Array;
      
      private var typePvp:Array;
      
      private var typePve:Array;
      
      public function FightNoteCmdListener()
      {
         this.typeNpc = [];
         this.typeBoss = [];
         this.typePvp = [];
         this.typePve = [3,4,7,10,12,13,16,17,18,24,25,26,27,29,30,32,33,34,35,36,37,38,40,41,42,43,45,46,47,52,54,55,56,57,58,59,63,64,65,66,67,68,69,70,71,73,75,79,81,82,83,89,90,91,92,93,94,95,96,97,98,99,100,101,105];
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.NOTE_INVITE_TO_FIGHT,this.noteInviteToFight);
         SocketConnection.addCmdListener(CommandID.NOTE_HANDLE_FIGHT_INVITE,this.noteHandlerFightInvite);
         SocketConnection.addCmdListener(CommandID.NOTE_READY_TO_FIGHT,this.noteReadyToFight);
         SocketConnection.addCmdListener(CommandID.NOTE_START_FIGHT,this.startFight);
         FightManager.setup();
         finish();
      }
      
      private function noteInviteToFight(param1:SocketEvent) : void
      {
         var _loc2_:InviteNoteInfo = param1.data as InviteNoteInfo;
         FightManager.add(_loc2_);
      }
      
      private function noteHandlerFightInvite(param1:SocketEvent) : void
      {
         var data:InviteHandleInfo = null;
         var sprite:Sprite = null;
         var event:SocketEvent = param1;
         data = event.data as InviteHandleInfo;
         if(data.result == 0)
         {
            sprite = Alarm.show("<a href=\'event:\'><u><font color=\'#ff0000\'>" + data.nickName + "(" + data.userID + ")</font></u></a>拒绝了你的邀请！");
            sprite.addEventListener(TextEvent.LINK,function():void
            {
               UserInfoController.show(data.userID);
            });
            FightWaitPanel.hide();
         }
         else if(data.result == 2)
         {
            Alarm.show("对方在线时长超过6小时！");
            FightWaitPanel.hide();
         }
         else if(data.result == 3)
         {
            Alarm.show("对方没有可以出战的精灵！");
            FightWaitPanel.hide();
         }
         else if(data.result == 4)
         {
            Alarm.show("对方不在线！");
            FightWaitPanel.hide();
         }
      }
      
      private function noteReadyToFight(param1:SocketEvent) : void
      {
         var event:SocketEvent = param1;
         this.readyData = event.data as NoteReadyToFightInfo;
         FightManager.amyPetIds = this.readyData.userInfos.otherInfo.petIDArr.slice();
         try
         {
            this.beforeFightEntry();
         }
         catch(e:Error)
         {
            loader = new FightdllLoader(ClientConfig.getDLLPath(FightManager.petFightClass + ".swf"),LevelManager.topLevel,Loading.TITLE_AND_PERCENT,"正在进入对战系统....",true,true);
            loader.setIsShowClose(false);
            loader.addEventListener(MCLoadEvent.SUCCESS,onLoadDLL);
            loader.doLoad();
         }
         FightWaitPanel.hide();
      }
      
      private function onLoadDLL(param1:MCLoadEvent) : void
      {
         this.loader.removeEventListener(MCLoadEvent.SUCCESS,this.onLoadDLL);
         this.loader.loader.unload();
         this.loader.clear();
         this.loader = null;
         this.beforeFightEntry();
      }
      
      private function beforeFightEntry() : void
      {
         var cls:* = undefined;
         var onReady:Function = null;
         onReady = function():void
         {
            if(typePve.indexOf(readyData.model) == -1)
            {
               PetFightModel.status = PetFightModel.FIGHT_WITH_PLAYER;
            }
            else if(PetFightModel.status == PetFightModel.FIGHT_WITH_PLAYER)
            {
               PetFightModel.status = PetFightModel.FIGHT_WITH_BOSS;
            }
            if(PetFightModel.type == PetFightModel.PET_ELMENT_FIGHT)
            {
               EventManager.dispatchEvent(new DynamicEvent("ElementFightStart",{
                  "type":readyData.efFightType,
                  "name":readyData.userInfos.otherInfo.nickName,
                  "clothes":readyData.userInfos.otherInfo.clothArr
               }));
               SocketConnection.addCmdListener(CommandID.FIGHT_OVER,onBeforeFightOver);
               _delay = setTimeout(function():void
               {
                  SocketConnection.removeCmdListener(CommandID.FIGHT_OVER,onBeforeFightOver);
                  clearTimeout(_delay);
                  cls.setup(readyData);
               },3000);
            }
            else
            {
               cls.setup(readyData);
            }
         };
         EventManager.dispatchEvent(new Event("petFight_Ready"));
         TeamCmdManager.instance.refreshTeamInfo();
         cls = getDefinitionByName(FightManager.petFightClass);
         if(PetManager.isUpdateing())
         {
            onReady();
         }
         else
         {
            PetManager.upDate(onReady);
         }
      }
      
      private function onBeforeFightOver(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.FIGHT_OVER,this.onBeforeFightOver);
         clearTimeout(this._delay);
         Alarm.show("对手已退出！");
         MapManager.refMap();
      }
      
      private function startFight(param1:SocketEvent) : void
      {
         var _loc2_:FightStartInfo = param1.data as FightStartInfo;
         FightDispatcher.dispatchEvent(new PetFightEvent(PetFightEvent.START_FIGHT,_loc2_));
         isInFightModule = true;
      }
   }
}
