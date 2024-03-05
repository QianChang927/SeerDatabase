package com.robot.app.mapProcess
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   
   public class MapProcess_65 extends BaseMapProcess
   {
       
      
      public function MapProcess_65()
      {
         super();
      }
      
      override protected function init() : void
      {
         SocketConnection.send(1022,86054208);
         CommonUI.removeYellowArrow(topLevel);
         this.addMapListener();
         this.addTrainListener();
      }
      
      private function addMapListener() : void
      {
         conLevel["crystal"].visible = false;
         MapListenerManager.add(conLevel["nono"],function():void
         {
            NpcDialog.show(NPC.XIAKE,[MainManager.actorInfo.formatNick + "，我是超能小管家，名字叫侠客，相信这些战神联盟超No专属外形一定会很帅气哦！快给你的NoNo装扮一下吧！"],["恩恩，我要装扮联盟超No装扮！","我要卸下联盟超NO装扮","还是...再考虑一下！"],[function():void
            {
               NpcDialog.show(NPC.XIAKE,[MainManager.actorInfo.formatNick + "，赶快将自己的超NoNo装扮成你们所参加的队伍的超酷外形吧！"],["我要变成雷神！","我要变成战神！","我要变成卡修斯！","我要变成布莱克！"],[function():void
               {
                  loadAppearence(1400007);
               },function():void
               {
                  loadAppearence(1400008);
               },function():void
               {
                  loadAppearence(1400009);
               },function():void
               {
                  loadAppearence(1400010);
               }]);
            },function():void
            {
               unLoadNoNoAppearence();
            },null]);
         },"nono侠客");
         MapListenerManager.add(conLevel["improve"],function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("AresUnionChallengeFightDetectionLeadPanel"));
         },"战斗力探测");
      }
      
      private function loadAppearence(param1:uint) : void
      {
         var type:uint = param1;
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,function():void
         {
            var info:SingleItemInfo;
            ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,arguments.callee);
            info = ItemManager.getCollectionInfo(type);
            if(Boolean(info) && Boolean(info.itemNum))
            {
               NonoManager.changeToPet(type);
            }
            else
            {
               Alarm.show("你还没领取超炫战神联盟超No专属外观，快去每日签到处领取吧！",function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("AresUnionChallengeSignUpLeadPanel"));
               });
            }
         });
         ItemManager.upDateCollection(type);
      }
      
      private function unLoadNoNoAppearence() : void
      {
         if(MainManager.actorInfo.nonoChangeToPet)
         {
            NonoManager.changeToPet(0);
         }
         else
         {
            Alarm.show("你还没领取超炫战神联盟超No专属外观，快去每日签到处领取吧！",function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("AresUnionChallengeSignUpLeadPanel"));
            });
         }
      }
      
      private function addTrainListener() : void
      {
         MapListenerManager.add(conLevel["difute"],function():void
         {
            SocketConnection.send(1022,86054813);
            ModuleManager.showModule(ClientConfig.getAppModule("AresUnionChallengeTrainPanel"),"正在打开...",1);
         },"卡修斯特训");
         MapListenerManager.add(conLevel["leiyi_fenshen"],function():void
         {
            SocketConnection.send(1022,86054801);
            ModuleManager.showModule(ClientConfig.getAppModule("AresUnionChallengeTrainPanel"),"正在打开...",2);
         },"雷伊特训");
         MapListenerManager.add(conLevel["laokemengde"],function():void
         {
            SocketConnection.send(1022,86054808);
            ModuleManager.showModule(ClientConfig.getAppModule("AresUnionChallengeTrainPanel"),"正在打开...",3);
         },"盖亚特训");
         MapListenerManager.add(conLevel["suolante"],function():void
         {
            SocketConnection.send(1022,86054817);
            ModuleManager.showModule(ClientConfig.getAppModule("AresUnionChallengeTrainPanel"),"正在打开...",4);
         },"布莱克特训");
      }
      
      override public function destroy() : void
      {
      }
   }
}
