package com.robot.app.mapProcess
{
   import com.robot.app.control.ProvPetController;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.display.SimpleButton;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_92 extends BaseMapProcess
   {
       
      
      private var cls:*;
      
      public function MapProcess_92()
      {
         super();
      }
      
      override protected function init() : void
      {
         SocketConnection.send(1022,86058472);
         this.cls = getDefinitionByName("com.robot.app2.control.DarkGodEnvoy_GodContractController");
         if(this.cls)
         {
            this.cls.initForMap(this);
         }
         MapListenerManager.add(btnLevel["checkup"] as SimpleButton,function():void
         {
            SocketConnection.send(1022,86056816);
            ProvPetController.showProcPanel();
         },"精灵鉴定台");
      }
      
      override public function destroy() : void
      {
         if(this.cls)
         {
            this.cls.destroy();
         }
      }
   }
}
