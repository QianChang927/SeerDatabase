package com.robot.app.mapProcess
{
   import com.robot.app.control.ProvPetController;
   import com.robot.app.nono.NonoController;
   import com.robot.app.task.petstory.control.HitEggMacController;
   import com.robot.app.task.taskscollection.Task658;
   import com.robot.app.task.taskscollection.Task730;
   import com.robot.app.task.taskscollection.Task737;
   import com.robot.app.task.taskscollection.Task811;
   import com.robot.app.task.taskscollection.Task912;
   import com.robot.app.task.taskscollection.Task951;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.utils.CommonUI;
   import flash.display.InteractiveObject;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_5 extends BaseMapProcess
   {
       
      
      private var _icon:InteractiveObject;
      
      public function MapProcess_5()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         if(NonoController.alarmArrow[0])
         {
            CommonUI.addYellowArrow(conLevel,72,269,45);
            NonoController.alarmArrow[0] = 0;
         }
         Task658.completeTask();
         Task730.initTaskForMap5(this);
         Task737.initTaskForMap5(this);
         Task811.initTaskForMap5(this);
         Task912.initTaskForMap5(this);
         Task951.initTaskForMap5(this);
         this._icon = btnLevel["bookList"] as InteractiveObject;
         this._icon.addEventListener(MouseEvent.CLICK,this.onBookList);
         ToolTipManager.add(this._icon,"博士研究手册");
         conLevel["evolvePetMC"].buttonMode = true;
         this.addEvents();
         getDefinitionByName("com.robot.app2.mapProcess.control.SceneEasterEggController").initMap(this);
      }
      
      private function addEvents() : void
      {
         conLevel["groomBtn"].addEventListener(MouseEvent.CLICK,this.onGroom);
         conLevel["trainBtn"].addEventListener(MouseEvent.CLICK,this.onTrain);
         conLevel["marketBtn"].addEventListener(MouseEvent.CLICK,this.onOpenMarket);
         conLevel["moleculeBtn"].addEventListener(MouseEvent.CLICK,this.onOpenMolecule);
         conLevel["learningBtn"].addEventListener(MouseEvent.CLICK,this.onGo1018);
         conLevel["upgradeBtn"].addEventListener(MouseEvent.CLICK,this.onGo1017);
         conLevel["provPetBtn"].addEventListener(MouseEvent.CLICK,this.onOpenProvPet);
         conLevel["evolvePetMC"].addEventListener(MouseEvent.CLICK,this.onOpenEvolvePet);
      }
      
      private function onGroom(param1:MouseEvent) : void
      {
         StatManager.sendStat2014("实验室改造","点击二代精灵培育中心",StatManager.USER_CHARACTER);
         ModuleManager.showModule(ClientConfig.getAppModule("ElfGroomPanel"));
      }
      
      private function onTrain(param1:MouseEvent) : void
      {
         CommonUI.removeYellowArrow(conLevel);
         StatManager.sendStat2014("实验室改造","点击天赋修炼器",StatManager.USER_CHARACTER);
         ModuleManager.showModule(ClientConfig.getAppModule("PetCulturePanel"));
      }
      
      private function onOpenMarket(param1:MouseEvent) : void
      {
         StatManager.sendStat2014("实验室改造","点击道具商店",StatManager.USER_CHARACTER);
         ModuleManager.showModule(ClientConfig.getAppModule("DrugBuyPanel"),"正在加载...");
         if(!MainManager.actorInfo.isVip && MainManager.actorInfo.petMaxLev >= 50 && !BufferRecordManager.getMyState(588))
         {
            BufferRecordManager.setMyState(588,true);
            ModuleManager.showModule(ClientConfig.getAppModule("VipTipPushPanel"),"正在加载...","seer_coin_privilege");
         }
      }
      
      private function onBookList(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getBookModule("DoctorBookListPanel"),"正在加载博士研究手册....");
      }
      
      private function onOpenMolecule(param1:MouseEvent) : void
      {
         StatManager.sendStat2014("实验室改造","点击精灵孵化器",StatManager.USER_CHARACTER);
         ModuleManager.showAppModule("EggWareHousePanel",1);
      }
      
      private function onGo1018(param1:MouseEvent) : void
      {
         StatManager.sendStat2014("实验室改造","点击学习力基地",StatManager.USER_CHARACTER);
         MapManager.changeMap(1018);
      }
      
      private function onGo1017(param1:MouseEvent) : void
      {
         StatManager.sendStat2014("实验室改造","点击升级基地",StatManager.USER_CHARACTER);
         MapManager.changeMap(1017);
      }
      
      private function onOpenProvPet(param1:MouseEvent) : void
      {
         ProvPetController.showProcPanel();
      }
      
      private function onOpenScreen(param1:MouseEvent) : void
      {
         StatManager.sendStat2014("实验室改造","点击大屏幕",StatManager.USER_CHARACTER);
         ModuleManager.showModule(ClientConfig.getAppModule("FeeAdPanel_20130222"));
      }
      
      private function onOpenEvolvePet(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("EvolvePetPanel"),"正在加载精灵进化仓....");
      }
      
      override public function destroy() : void
      {
         this.removeEvents();
         Task730.destroy();
         Task737.destroy();
         Task912.destory();
         CommonUI.removeYellowArrow(conLevel);
         ProvPetController.destroy();
         HitEggMacController.getInstance().destroy();
         getDefinitionByName("com.robot.app2.mapProcess.control.SceneEasterEggController").destroy();
         super.destroy();
      }
      
      private function removeEvents() : void
      {
         conLevel["groomBtn"].removeEventListener(MouseEvent.CLICK,this.onGroom);
         conLevel["trainBtn"].removeEventListener(MouseEvent.CLICK,this.onTrain);
         conLevel["marketBtn"].removeEventListener(MouseEvent.CLICK,this.onOpenMarket);
         conLevel["moleculeBtn"].removeEventListener(MouseEvent.CLICK,this.onOpenMolecule);
         conLevel["learningBtn"].removeEventListener(MouseEvent.CLICK,this.onGo1018);
         conLevel["upgradeBtn"].removeEventListener(MouseEvent.CLICK,this.onGo1017);
         conLevel["evolvePetMC"].removeEventListener(MouseEvent.CLICK,this.onOpenEvolvePet);
      }
   }
}
