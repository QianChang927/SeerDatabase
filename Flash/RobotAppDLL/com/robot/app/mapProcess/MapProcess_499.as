package com.robot.app.mapProcess
{
   import com.robot.app.control.SpaceArenaController;
   import com.robot.app.sys.SysSOManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_499 extends BaseMapProcess
   {
       
      
      public function MapProcess_499()
      {
         super();
      }
      
      override protected function init() : void
      {
         ToolTipManager.add(depthLevel["signup"],"星空擂台");
         depthLevel["signup"].buttonMode = true;
         depthLevel["signup"].addEventListener(MouseEvent.CLICK,this.onSignUp);
         SysSOManager.freshLastSys(14004);
         SocketConnection.send(1022,86053852);
         Alarm.show("精灵太空站已消失在时空中，请前往全新的贾斯汀太空站！",function():void
         {
            MapManager.changeMap(1147);
         });
      }
      
      private function onSignUp(param1:MouseEvent) : void
      {
         SpaceArenaController.show();
      }
      
      override public function destroy() : void
      {
         ToolTipManager.remove(depthLevel["signup"]);
         depthLevel["signup"].removeEventListener(MouseEvent.CLICK,this.onSignUp);
      }
   }
}
