package com.robot.app.mapProcess
{
   import com.robot.app.control.ProvPetController;
   import com.robot.app.task.taskscollection.Task529;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   
   public class MapProcess_330 extends BaseMapProcess
   {
       
      
      public function MapProcess_330()
      {
         super();
      }
      
      override protected function init() : void
      {
         SocketConnection.send(1022,86057905);
         conLevel["door_1"].visible = false;
         conLevel["grass"].buttonMode = true;
         conLevel["grass"].addEventListener(MouseEvent.CLICK,this.onGrass);
         Task529.initSecondTask(this);
         MapListenerManager.add(depthLevel["checkup"] as SimpleButton,function():void
         {
            SocketConnection.send(1022,86056816);
            ProvPetController.showProcPanel();
         },"精灵鉴定台");
      }
      
      private function onGrass(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(conLevel["grass"].currentFrame == 1)
         {
            AnimateManager.playMcAnimate(conLevel["grass"],0,"",function():void
            {
               conLevel["door_1"].visible = true;
               conLevel["grass"].buttonMode = false;
               conLevel["grass"].removeEventListener(MouseEvent.CLICK,onGrass);
            });
         }
      }
      
      public function changeMap() : void
      {
         AnimateManager.playMcAnimate(conLevel["light"],0,"",function():void
         {
            MapManager.changeMap(331);
         });
      }
      
      override public function destroy() : void
      {
         conLevel["grass"].removeEventListener(MouseEvent.CLICK,this.onGrass);
         Task529.destory();
      }
   }
}
