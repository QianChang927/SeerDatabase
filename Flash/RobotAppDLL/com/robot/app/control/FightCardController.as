package com.robot.app.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class FightCardController
   {
      
      public static const SIMPLE:String = "FightCardSimple";
      
      public static const COMPLETE:String = "FightCardComplete";
      
      private static var _module:String;
      
      private static var _b:BaseMapProcess;
       
      
      public function FightCardController()
      {
         super();
      }
      
      public static function show(param1:String) : void
      {
         _module = param1;
         ModuleManager.showModule(ClientConfig.getAppModule("FightCardChoiceClassPanel"),"正在加载....",start);
      }
      
      private static function start(param1:uint) : void
      {
         ModuleManager.showModule(ClientConfig.getGameModule(_module),"正在加载....",param1);
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         _b = param1;
         _b.depthLevel["guideNpc"].addEventListener(MouseEvent.CLICK,onNpcClicked);
         _b.depthLevel["exchangeMachine"].addEventListener(MouseEvent.CLICK,onOpenMachine);
         ToolTipManager.add(_b.depthLevel["guideNpc"],"暗金炎魔 暗金鱼龙王");
         ToolTipManager.add(_b.depthLevel["exchangeMachine"],"徽章制造仪");
      }
      
      private static function onNpcClicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.ANJIN_YULONGWANG,[MainManager.actorInfo.formatNick + "，你好！现在通过收集卡牌小队徽章即可兑换暗金鱼龙王精元和暗金炎魔精元！行动起来，这个暑假我们很疯狂！"],["我要兑换精元和道具","如何获得卡牌小队徽章","到处逛逛"],[function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("FightCardBadgeExchange"),"正在打开面板....");
         },function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("FightCardBadgeGuide"),"正在打开面板....");
         }]);
      }
      
      private static function onOpenMachine(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("FightCardBadgeMake"),"正在打开面板....");
      }
      
      public static function destroy() : void
      {
         ToolTipManager.remove(_b.depthLevel["guideNpc"]);
         ToolTipManager.remove(_b.depthLevel["exchangeMachine"]);
         _b.depthLevel["guideNpc"].removeEventListener(MouseEvent.CLICK,onNpcClicked);
         _b.depthLevel["exchangeMachine"].removeEventListener(MouseEvent.CLICK,onOpenMachine);
         _b = null;
      }
   }
}
