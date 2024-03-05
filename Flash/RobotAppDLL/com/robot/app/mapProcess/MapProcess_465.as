package com.robot.app.mapProcess
{
   import com.robot.app.mapProcess.control.SpaceGuardController;
   import com.robot.app.sys.SysSOManager;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_465 extends BaseMapProcess
   {
       
      
      private var _panel:AppModel;
      
      private var _panelHero:AppModel;
      
      public function MapProcess_465()
      {
         super();
      }
      
      override protected function init() : void
      {
         SpaceGuardController.addGuard();
         conLevel["king_door"].visible = true;
         conLevel["kingHero_door"].visible = false;
         ToolTipManager.add(conLevel["swit"],"切换模式");
         conLevel["swit"].buttonMode = true;
         conLevel["swit"].addEventListener(MouseEvent.CLICK,this.onSwitClick);
         conLevel["mc_1"].mouseEnabled = conLevel["mc_1"].mouseChildren = false;
         conLevel["mc_2"].mouseEnabled = conLevel["mc_2"].mouseChildren = false;
         Alarm.show("精灵太空站已消失在时空中，请前往全新的贾斯汀太空站！",function():void
         {
            MapManager.changeMap(1147);
         });
      }
      
      private function onSwitClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(conLevel["swit"].currentFrame == 1)
         {
            conLevel["swit"].gotoAndStop(2);
            conLevel["mc_1"].visible = true;
            conLevel["mc_2"].visible = false;
            AnimateManager.playMcAnimate(conLevel["mc_1"],0,"",function():void
            {
               conLevel["king_door"].visible = false;
               conLevel["kingHero_door"].visible = true;
            });
         }
         else
         {
            conLevel["swit"].gotoAndStop(1);
            conLevel["mc_1"].visible = false;
            conLevel["mc_2"].visible = true;
            AnimateManager.playMcAnimate(conLevel["mc_2"],0,"",function():void
            {
               conLevel["king_door"].visible = true;
               conLevel["kingHero_door"].visible = false;
            });
         }
      }
      
      public function onKingDoorClick() : void
      {
         SocketConnection.send(1022,86053867);
         if(!this._panel)
         {
            this._panel = new AppModel(ClientConfig.getAppModule("KingTowerChoicePanel"),"正在加载面板");
            this._panel.setup();
         }
         this._panel.show();
         SysSOManager.freshLastSys(14007);
      }
      
      public function onKingHeroDoorClick() : void
      {
         if(!this._panelHero)
         {
            this._panelHero = new AppModel(ClientConfig.getAppModule("KingTowerHeroChoicePanel"),"正在加载面板");
            this._panelHero.setup();
         }
         this._panelHero.show();
      }
      
      override public function destroy() : void
      {
         if(this._panel)
         {
            this._panel.destroy();
         }
         if(this._panelHero)
         {
            this._panelHero.destroy();
         }
         ToolTipManager.remove(conLevel["swit"]);
         conLevel["swit"].removeEventListener(MouseEvent.CLICK,this.onSwitClick);
      }
   }
}
