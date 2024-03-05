package com.robot.app.mapProcess
{
   import com.robot.app.control.ProvPetController;
   import com.robot.app.energy.utils.EnergyController;
   import com.robot.app.mapProcess.control.ConchHornController;
   import com.robot.app.mapProcess.control.MysteriousCryController;
   import com.robot.app.task.taskscollection.Task934;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.display.SimpleButton;
   
   public class MapProcess_29 extends BaseMapProcess
   {
       
      
      public function MapProcess_29()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         Task934.initForMap29(this);
         ConchHornController.setup(this);
         StatManager.sendStat2014("母情节主题活动2","进入浅滩海岛（29）场景",StatManager.RUN_ACT);
         MapListenerManager.add(depthLevel["checkup"] as SimpleButton,function():void
         {
            SocketConnection.send(1022,86056816);
            ProvPetController.showProcPanel();
         },"精灵鉴定台");
         MysteriousCryController.initForMap(this);
      }
      
      public function exploitGas() : void
      {
         EnergyController.exploit(36);
      }
      
      override public function destroy() : void
      {
         ConchHornController.destroy();
         Task934.destroy();
         MysteriousCryController.destroy();
         super.destroy();
      }
   }
}
