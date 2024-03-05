package com.robot.app.mapProcess
{
   import com.robot.app.buyItem.ItemAction;
   import com.robot.app.control.ExploreStationController;
   import com.robot.app.energy.utils.EnergyController;
   import com.robot.app.spt.FightBossController;
   import com.robot.app.sptStar.LeiyiTrainController;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_49 extends BaseMapProcess
   {
       
      
      private var bossMC:MovieClip;
      
      private var bossBtn:SimpleButton;
      
      private var station:MovieClip;
      
      public function MapProcess_49()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.bossMC = conLevel["bossMC"];
         this.bossBtn = conLevel["bossBtn"];
         this.bossBtn.mouseEnabled = false;
         this.bossMC.addEventListener(MouseEvent.CLICK,this.clickBossMC);
         this.bossBtn.addEventListener(MouseEvent.CLICK,this.fightBoss);
      }
      
      override public function destroy() : void
      {
         this.bossMC.removeEventListener(MouseEvent.CLICK,this.clickBossMC);
         this.bossBtn.removeEventListener(MouseEvent.CLICK,this.fightBoss);
         this.bossMC.removeEventListener(Event.ENTER_FRAME,this.eHandler);
         this.bossBtn = null;
         this.bossMC = null;
      }
      
      private function clickBossMC(param1:MouseEvent) : void
      {
         if(this.bossMC.currentFrame == 1)
         {
            this.bossMC.gotoAndPlay(2);
            this.bossMC.addEventListener(Event.ENTER_FRAME,this.eHandler);
         }
      }
      
      private function eHandler(param1:Event) : void
      {
         if(this.bossMC.currentFrame == this.bossMC.totalFrames)
         {
            this.bossMC.removeEventListener(Event.ENTER_FRAME,this.eHandler);
            this.bossBtn.mouseEnabled = true;
         }
      }
      
      private function fightBoss(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         if(TasksManager.getTaskStatus(122) == TasksManager.ALR_ACCEPT)
         {
            if(TasksManager.getTaskStatus(122) == TasksManager.ALR_ACCEPT)
            {
               TasksManager.getProStatusList(122,function(param1:Array):void
               {
                  if(Boolean(param1[0]) && !param1[1])
                  {
                     LeiyiTrainController.initTrain_2(bossBtn);
                  }
                  else if(MapManager.currentMap.id == 49)
                  {
                     getDefinitionByName("com.robot.app2.control.DeepseaLightWarriorController").setup();
                     FightBossController.fightBoss("雷纳多");
                  }
               });
            }
         }
         else if(MapManager.currentMap.id == 49)
         {
            getDefinitionByName("com.robot.app2.control.DeepseaLightWarriorController").setup();
            FightBossController.fightBoss("雷纳多");
         }
      }
      
      public function giveThings() : void
      {
         ItemManager.addEventListener(ItemEvent.CLOTH_LIST,this.onList);
         ItemManager.getCloth();
      }
      
      private function onList(param1:ItemEvent) : void
      {
         ItemManager.removeEventListener(ItemEvent.CLOTH_LIST,this.onList);
         var _loc2_:Array = ItemManager.getClothIDs();
         if(_loc2_.indexOf(100014) != -1 && _loc2_.indexOf(100015) != -1)
         {
            Alarm.show("你已经拥有矿工头盔和采矿钻头了，快去帮忙吧！");
         }
         if(_loc2_.indexOf(100014) == -1)
         {
            ItemAction.buyItem(100014,false);
         }
         if(_loc2_.indexOf(100015) == -1)
         {
            ItemAction.buyItem(100015,false);
         }
      }
      
      public function getStone() : void
      {
         EnergyController.exploit(12);
      }
      
      public function showStationPanel() : void
      {
         SocketConnection.send(1022,86053871);
         ExploreStationController.showPanel("双子贝塔星");
      }
   }
}
