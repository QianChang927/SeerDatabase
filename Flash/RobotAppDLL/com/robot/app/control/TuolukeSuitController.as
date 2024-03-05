package com.robot.app.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   
   public class TuolukeSuitController
   {
       
      
      public function TuolukeSuitController()
      {
         super();
      }
      
      public static function initSet() : void
      {
         if(!suitSet)
         {
            MapManager.currentMap.depthLevel.addChild(suitSet);
         }
         suitSet.visible = true;
         MapListenerManager.add(suitSet,onSetClick,"托鲁克套装售卖机");
      }
      
      private static function onSetClick(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86053174);
         ModuleManager.showModule(ClientConfig.getAppModule("TuolukeSuitSalePanel"));
      }
      
      private static function get suitSet() : SimpleButton
      {
         return MapManager.currentMap.depthLevel["suitSet"] as SimpleButton;
      }
   }
}
