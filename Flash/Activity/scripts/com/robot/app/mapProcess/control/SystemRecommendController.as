package com.robot.app.mapProcess.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class SystemRecommendController
   {
      
      private static var _icon:MovieClip;
       
      
      public function SystemRecommendController()
      {
         super();
      }
      
      public static function setup() : void
      {
      }
      
      private static function onClicked(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,84807440);
         ModuleManager.showModule(ClientConfig.getAppModule("SystemRecommendPanel"),"正在加载....");
      }
   }
}
