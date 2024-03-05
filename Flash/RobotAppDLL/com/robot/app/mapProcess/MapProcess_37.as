package com.robot.app.mapProcess
{
   import com.robot.app.control.FightCardController;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_37 extends BaseMapProcess
   {
       
      
      public function MapProcess_37()
      {
         super();
      }
      
      override protected function init() : void
      {
         SocketConnection.send(1020,278);
         ToolTipManager.add(conLevel["cardInfo"],"精灵决斗卡");
         conLevel["cardInfo"].addEventListener(MouseEvent.CLICK,this.onCardInfo);
         ToolTipManager.add(conLevel["exchangePet"],"精灵召唤仪");
         conLevel["exchangePet"].addEventListener(MouseEvent.CLICK,this.onExchangePet);
         ToolTipManager.add(conLevel["exchangeCard"],"卡牌激活器");
         conLevel["exchangeCard"].addEventListener(MouseEvent.CLICK,this.onExchangeCard);
         ToolTipManager.add(depthLevel["video"],"精灵决斗卡大师决斗视频教学");
         depthLevel["video"].addEventListener(MouseEvent.CLICK,this.onVideo);
         ToolTipManager.add(btnLevel["book"],"精灵决斗卡手册");
         btnLevel["book"].addEventListener(MouseEvent.CLICK,this.onBook);
         ToolTipManager.add(btnLevel["collectPlan"],"精灵决斗卡收集计划");
         btnLevel["collectPlan"].addEventListener(MouseEvent.CLICK,this.onCollectPlan);
         depthLevel["simpleSeer"].buttonMode = true;
         depthLevel["simpleSeer"].addEventListener(MouseEvent.CLICK,this.onSimpleSeer);
         FightCardController.init(this);
      }
      
      private function onCardInfo(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("BattleCardInfo"),"正在加载....");
      }
      
      private function onExchangePet(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("FightCardExchangePetPanel"),"正在加载....");
      }
      
      private function onExchangeCard(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("FightCardExchangePanel"),"正在加载....");
      }
      
      private function onVideo(param1:MouseEvent) : void
      {
         SocketConnection.send(1020,280);
         ModuleManager.showModule(ClientConfig.getAppModule("FlvPlayer"),"正在加载....","video/fightCard.flv");
      }
      
      private function onBook(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getBookModule("FightCardBook"),"正在加载....");
      }
      
      private function onCollectPlan(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getBookModule("FightCardCollectPlanBook"),"正在加载....");
      }
      
      private function onSimpleSeer(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         SocketConnection.addCmdListener(CommandID.FIGHT_CARD_GET_CARD_INFO,function(param1:SocketEvent):void
         {
            var by:ByteArray;
            var hasCard:Boolean;
            var i:uint;
            var e:SocketEvent = param1;
            SocketConnection.removeCmdListener(CommandID.FIGHT_CARD_GET_CARD_INFO,arguments.callee);
            by = e.data as ByteArray;
            by.readUnsignedInt();
            hasCard = false;
            i = 0;
            while(i < 8)
            {
               if(by.readUnsignedInt() != 0)
               {
                  hasCard = true;
               }
               i++;
            }
            if(hasCard)
            {
               NpcDialog.show(NPC.SEER,[MainManager.actorInfo.nick + "，你好！想和我们一起玩疾风决斗吗？"],["立即参加！","下次再说...."],[function():void
               {
                  SocketConnection.send(1020,279);
                  FightCardController.show(FightCardController.SIMPLE);
               }]);
            }
            else
            {
               NpcDialog.show(NPC.SEER,["你现在还没有套牌，每个赛尔都可以免费领取一套哦！"],["立刻领取！","下次再说...."],[function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("FightCardExchangePanel"),"正在加载....");
               }]);
            }
         });
         SocketConnection.send(CommandID.FIGHT_CARD_GET_CARD_INFO);
      }
      
      override public function destroy() : void
      {
         ToolTipManager.remove(conLevel["cardInfo"]);
         conLevel["cardInfo"].removeEventListener(MouseEvent.CLICK,this.onCardInfo);
         ToolTipManager.remove(conLevel["exchangePet"]);
         conLevel["exchangePet"].removeEventListener(MouseEvent.CLICK,this.onExchangePet);
         ToolTipManager.remove(conLevel["exchangeCard"]);
         conLevel["exchangeCard"].removeEventListener(MouseEvent.CLICK,this.onExchangeCard);
         ToolTipManager.remove(depthLevel["video"]);
         depthLevel["video"].removeEventListener(MouseEvent.CLICK,this.onVideo);
         ToolTipManager.remove(btnLevel["book"]);
         btnLevel["book"].removeEventListener(MouseEvent.CLICK,this.onBook);
         ToolTipManager.remove(btnLevel["collectPlan"]);
         btnLevel["collectPlan"].removeEventListener(MouseEvent.CLICK,this.onCollectPlan);
         depthLevel["simpleSeer"].removeEventListener(MouseEvent.CLICK,this.onSimpleSeer);
         FightCardController.destroy();
         super.destroy();
      }
   }
}
