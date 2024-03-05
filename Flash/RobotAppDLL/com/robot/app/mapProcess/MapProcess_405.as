package com.robot.app.mapProcess
{
   import com.robot.app.mapProcess.control.SpaceGuardController;
   import com.robot.app.sys.SysSOManager;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PanelRecallManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class MapProcess_405 extends BaseMapProcess
   {
       
      
      private var panel:AppModel;
      
      private var _moveMC:MovieClip;
      
      private var exMc:MovieClip;
      
      private var expanel:AppModel;
      
      public function MapProcess_405()
      {
         super();
      }
      
      override protected function init() : void
      {
         SpaceGuardController.addGuard();
         this._moveMC = this.conLevel["moveMC"];
         if(PanelRecallManager.addArrorForMap405)
         {
            PanelRecallManager.addArrorForMap405 = false;
            CommonUI.addYellowArrow(topLevel,807,267,315);
         }
         Alarm.show("精灵太空站已消失在时空中，请前往全新的贾斯汀太空站！",function():void
         {
            MapManager.changeMap(1147);
         });
      }
      
      private function onClickMap(param1:MouseEvent) : void
      {
         ModuleManager.showAppModule("PirateAttackMapPanel");
      }
      
      private function onClickTask(param1:MouseEvent) : void
      {
         ModuleManager.showAppModule("PirateAttacksDonationTaskPanel");
      }
      
      private function onClickPirateAttack(param1:MouseEvent) : void
      {
      }
      
      private function onClickExchangeHandler(param1:MouseEvent) : void
      {
         if(!this.expanel)
         {
            this.expanel = new AppModel(ClientConfig.getAppModule("YuanDanExchangePanel"),"正在打开");
            this.expanel.setup();
         }
         this.expanel.show();
      }
      
      public function onEnterHandler() : void
      {
         AnimateManager.playMcAnimate(this._moveMC,0,"",function():void
         {
            MapManager.changeMap(108);
         });
      }
      
      public function onFightLadder() : void
      {
         if(!this.panel)
         {
            this.panel = new AppModel(ClientConfig.getAppModule("LadderChoicePanel"),"正在打开战斗阶梯面板");
            this.panel.setup();
         }
         this.panel.show();
      }
      
      public function onFateFightHandler() : void
      {
         ModuleManager.showAppModule("WheelChoicePanel");
         SysSOManager.freshLastSys(11003);
      }
      
      override public function destroy() : void
      {
         if(this.panel)
         {
            this.panel.destroy();
            this.panel = null;
         }
      }
   }
}
