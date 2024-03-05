package com.robot.app.mapProcess
{
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.mapProcess.control.ColorfulPrivilegeWishController;
   import com.robot.app.superParty.SPChannelController;
   import com.robot.app.systems.HelpManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_324 extends BaseMapProcess
   {
       
      
      private var wishStates:uint;
      
      private var wishType:uint;
      
      public function MapProcess_324()
      {
         super();
      }
      
      override protected function init() : void
      {
         SocketConnection.send(1022,86052592);
         MapListenerManager.add(conLevel["machine1"],this.onClickMachine1,"超no特权介绍");
         MapListenerManager.add(conLevel["machine2"],this.onClickMachine2,"超时空通道");
         MapListenerManager.add(conLevel["machine3"],this.onClickMachine3,"暗黑武斗场");
         MapListenerManager.add(depthLevel["equipment"],this.onShowGlidingRidePanel,"奥飞激战滑翔翼");
         MapListenerManager.add(depthLevel["envoy"],this.onEnvoyClick,"超No特使");
         this.initDoor();
         MapListenerManager.add(depthLevel["topPet"],function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("WatchTowerMainPanel"));
         },"本周热门精灵汇总");
         MapListenerManager.add(depthLevel["btnDarkGod"],function():void
         {
            SocketConnection.send(1022,86058915);
            ModuleManager.showModule(ClientConfig.getAppModule("godHades/NoNo1YearPanel"));
         },"立即免费领取暗黑之神与星灵王");
         MapListenerManager.add(conLevel["weibingMc"],this.onClickGuide,"紫金神宠向导");
         this.checkForeverHandler();
      }
      
      private function checkForeverHandler() : void
      {
         KTool.getMultiValue([75,76],function(param1:Array):void
         {
            wishStates = param1[0];
            wishType = param1[1];
         });
      }
      
      private function onClickGuide(param1:Event) : void
      {
         HelpManager.show(140);
      }
      
      private function onEnvoyClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.NONO_ENVOY,["哇咔咔，我就是vip特使！发明家肖恩发明了我，我可是只为vip服务哦！"],["我要领取vip战斗火焰 "," 我要查看vip专属物品","我要立刻开通vip","  我找错人了，抱歉！"],[function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("nonoPanel/NonoVipFirePanel"));
         },function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("nonoPanel/NonoVipBuyPanel"));
         },function():void
         {
            LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
         }]);
      }
      
      private function onShowGlidingRidePanel(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86053296);
         ModuleManager.showModule(ClientConfig.getAppModule("GlidingRidePanel"));
      }
      
      private function initDoor() : void
      {
         if(Boolean(MainManager.actorInfo.isVip) || ColorfulPrivilegeWishController.bonusType == 1)
         {
            SocketConnection.send(1022,86052593);
            conLevel["midDoor"].mouseEnabled = false;
            conLevel["midDoor"].mouseChildren = false;
            DisplayUtil.removeForParent(typeLevel["barrier"]);
            MapManager.currentMap.makeMapArray();
            AnimateManager.playMcAnimate(conLevel["midDoor"],2,"mc2");
            MovieClip(conLevel["midDoor"]).removeEventListener(MouseEvent.CLICK,this.showBetoNoNo);
            MovieClip(conLevel["door1"]).removeEventListener(MouseEvent.CLICK,this.showBetoNoNo);
         }
         else
         {
            SocketConnection.send(1022,86052594);
            this.showBetoNoNo(null);
            MovieClip(conLevel["midDoor"]).addEventListener(MouseEvent.CLICK,this.showBetoNoNo);
            MovieClip(conLevel["door1"]).addEventListener(MouseEvent.CLICK,this.showBetoNoNo);
         }
      }
      
      private function showBetoNoNo(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         Alert.show("你还没有权限进入！只有" + TextFormatUtil.getRedTxt("超能NoNo用户") + "才能进入超No空间内部及光辉殿堂，是否立即开通超能NoNo？",function():void
         {
            LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4,"2",function():void
            {
               initDoor();
            });
         });
      }
      
      public function onClickMachine1(param1:Event) : void
      {
         SocketConnection.send(1022,86052602);
         ModuleManager.showModule(ClientConfig.getAppModule("NewVIPEquityPanel"));
      }
      
      public function onClickMachine2(param1:Event) : void
      {
         var e:Event = param1;
         MainManager.actorModel.moveAndAction(new Point(conLevel["hit2"].x,conLevel["hit2"].y),function():void
         {
            SocketConnection.send(1022,86052603);
            SPChannelController.show();
         });
      }
      
      public function onClickMachine3(param1:Event) : void
      {
         var e:Event = param1;
         MainManager.actorModel.moveAndAction(new Point(conLevel["hit3"].x,conLevel["hit3"].y),function():void
         {
            SocketConnection.send(1022,86052604);
            Alert.show("是否立即前往暗黑武斗场，获取实力强劲的暗黑精灵？",function():void
            {
               MapManager.changeMap(110);
            });
         });
      }
      
      override public function destroy() : void
      {
         super.destroy();
      }
   }
}
