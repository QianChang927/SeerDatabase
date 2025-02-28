package com.robot.app.mapProcess
{
   import com.robot.app.control.GhostSpaceController;
   import com.robot.app.mapProcess.control.ImageFightController;
   import com.robot.app.mapProcess.control.spcaeMaze.SpaceMazeController;
   import com.robot.app.sys.SysSOManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_14 extends BaseMapProcess
   {
       
      
      public function MapProcess_14()
      {
         super();
      }
      
      override protected function init() : void
      {
         conLevel["mc_effect"].mouseChildren = false;
         conLevel["mc_effect"].mouseEnabled = false;
         ToolTipManager.add(conLevel["mc_soldier"],"士兵");
         conLevel["mc_soldier"].buttonMode = true;
         conLevel["mc_soldier"].addEventListener(MouseEvent.CLICK,this.onSoldierClick);
         ToolTipManager.add(conLevel["ghostSpace"],"伏魔空间");
         conLevel["ghostSpace"].addEventListener(MouseEvent.CLICK,this.onGhostSpaceClick);
         ToolTipManager.add(conLevel["spaceMaze"],"远古迷宫");
         conLevel["spaceMaze"].addEventListener(MouseEvent.CLICK,this.onSpaceMazeClick);
         ToolTipManager.add(conLevel["trainMC"],"空中列车");
         conLevel["trainMC"].addEventListener(MouseEvent.CLICK,this.onSkyTrain);
         ToolTipManager.add(conLevel["imageFight"],"平行空间");
         conLevel["imageFight"].addEventListener(MouseEvent.CLICK,this.onImageFight);
         MapListenerManager.add(conLevel["goldenPalace"],this.onGoldenPalace,"黄金十二宫");
         SocketConnection.send(1022,86064284);
         Alarm.show("精灵太空站已消失在时空中，请前往全新的贾斯汀太空站！",function():void
         {
            MapManager.changeMap(1147);
         });
      }
      
      private function onSoldierClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         NpcDialog.show(NPC.SOLIDMAN,[MainManager.actorInfo.formatNick + "你来的正好，我们刚发现伏魔空间发生了巨变，你看那些能量，难道魔界三巨头即将脱离上古战神的封印吗？快去报告船长吧！"],["这些小事就交给我吧！"],[function():void
         {
            if(!BufferRecordManager.getState(MainManager.actorInfo,613))
            {
               GhostSpaceController.enter(1);
            }
         }]);
      }
      
      private function onGhostSpaceClick(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86053845);
         GhostSpaceController.showChoicePanel();
      }
      
      private function onSpaceMazeClick(param1:MouseEvent) : void
      {
         SpaceMazeController.showPanel();
      }
      
      private function onSkyTrain(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86053856);
         ModuleManager.showModule(ClientConfig.getAppModule("SkyTrainChallengePanel"),"正在打开面板....");
      }
      
      private function onGoldenPalace(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86056687);
         ModuleManager.showModule(ClientConfig.getAppModule("GoldenTwelvePalaceChoicePanel"),"正在打开面板....");
      }
      
      private function onImageFight(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86053854);
         ImageFightController.enterMap();
         SysSOManager.freshLastSys(11005);
      }
      
      override public function destroy() : void
      {
         ToolTipManager.remove(conLevel["mc_soldier"]);
         conLevel["mc_soldier"].removeEventListener(MouseEvent.CLICK,this.onSoldierClick);
         ToolTipManager.remove(conLevel["ghostSpace"]);
         conLevel["ghostSpace"].removeEventListener(MouseEvent.CLICK,this.onGhostSpaceClick);
         ToolTipManager.remove(conLevel["spaceMaze"]);
         conLevel["spaceMaze"].removeEventListener(MouseEvent.CLICK,this.onSpaceMazeClick);
         ToolTipManager.remove(conLevel["trainMC"]);
         conLevel["trainMC"].removeEventListener(MouseEvent.CLICK,this.onSpaceMazeClick);
         ToolTipManager.remove(conLevel["imageFight"]);
         conLevel["imageFight"].removeEventListener(MouseEvent.CLICK,this.onImageFight);
      }
   }
}
