package com.robot.app.mapProcess
{
   import com.robot.app.control.DynamicClipController;
   import com.robot.app.mapProcess.control.ADNPCController;
   import com.robot.app.mapProcess.control.PetDevelopController;
   import com.robot.app.nono.NonoController;
   import com.robot.app.superParty.SPChannelController;
   import com.robot.app.task.taskscollection.TaskVSController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import flash.events.Event;
   import flash.geom.Point;
   import flash.utils.getDefinitionByName;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_7 extends BaseMapProcess
   {
       
      
      public function MapProcess_7()
      {
         super();
      }
      
      override protected function init() : void
      {
         if(NonoController.alarmArrow[1])
         {
            conLevel["arrow"].visible = true;
            NonoController.alarmArrow[1] = 0;
         }
         else
         {
            DisplayUtil.removeForParent(conLevel["arrow"]);
         }
         MapListenerManager.add(conLevel["petDiscovery"],this.onClickDiscovery);
         ADNPCController.init();
         PetDevelopController.init(this);
         MapListenerManager.add(conLevel["telescope"],this.onTelescope,"未来之门");
         TaskVSController.initForFirst(this);
         DynamicClipController.attachTo(5,conLevel["hotPet"]);
         getDefinitionByName("com.robot.app2.mapProcess.control.SceneEasterEggController").initMap(this);
      }
      
      private function onClickDiscovery(param1:Event) : void
      {
         var e:Event = param1;
         MainManager.actorModel.moveAndAction(new Point(650,300),function():void
         {
            DisplayUtil.removeForParent(conLevel["arrow"]);
            SocketConnection.send(1020,202);
         });
      }
      
      private function onTelescope(param1:Event) : void
      {
         MapManager.changeMap(930);
      }
      
      public function onHotPet() : void
      {
         SocketConnection.send(1020,201);
         var _loc1_:Date = SystemTimerManager.sysDate;
         if(_loc1_.day == 5)
         {
            SocketConnection.send(1022,86050064);
         }
         if(_loc1_.day == 6)
         {
            SocketConnection.send(1022,86050065);
         }
         if(_loc1_.day == 0)
         {
            SocketConnection.send(1022,86050066);
         }
         Alarm.show("设备故障，已停止运行~");
      }
      
      public function onTimeChannel() : void
      {
         SocketConnection.send(1020,203);
         SPChannelController.show();
      }
      
      public function onStarPet() : void
      {
         SocketConnection.send(1020,200);
         ModuleManager.showModule(ClientConfig.getAppModule("PetDetectorPanel"),"正在加载星际精灵探测仪....");
      }
      
      override public function destroy() : void
      {
         CommonUI.removeYellowArrow(conLevel["petDiscovery"]);
         PetDevelopController.destroy();
         getDefinitionByName("com.robot.app2.mapProcess.control.SceneEasterEggController").destroy();
         super.destroy();
      }
   }
}
