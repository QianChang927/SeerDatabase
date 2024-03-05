package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task1343;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_45 extends BaseMapProcess
   {
       
      
      private var cls;
      
      public function MapProcess_45()
      {
         super();
      }
      
      override protected function init() : void
      {
         SocketConnection.send(1022,86053504);
         this.cls = getDefinitionByName("com.robot.app2.mapProcess.control.activityControl.DevilSoulContainerController") as Class;
         this.cls.initForMap45(this);
         MapListenerManager.add(conLevel["xuanwo"],function():void
         {
            MapManager.changeMap(709);
         },"前往巨石营地");
         Task1343.initForMap45(this);
      }
      
      override public function destroy() : void
      {
         if(this.cls)
         {
            this.cls.destroy();
            this.cls = null;
         }
         Task1343.destroy();
      }
   }
}
