package com.robot.app.mapProcess
{
   import com.robot.app.control.ProvPetController;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.display.SimpleButton;
   
   public class MapProcess_86 extends BaseMapProcess
   {
       
      
      public function MapProcess_86()
      {
         super();
      }
      
      override protected function init() : void
      {
         SocketConnection.send(1022,86057509);
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         MapListenerManager.add(conLevel["checkup"] as SimpleButton,function():void
         {
            SocketConnection.send(1022,86056816);
            ProvPetController.showProcPanel();
         },"精灵鉴定台");
      }
      
      override public function destroy() : void
      {
      }
   }
}
