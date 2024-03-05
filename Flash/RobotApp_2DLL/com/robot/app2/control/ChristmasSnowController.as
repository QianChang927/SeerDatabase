package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class ChristmasSnowController
   {
      
      private static var _mcSnow:MovieClip;
      
      private static var _trees:Array;
       
      
      public function ChristmasSnowController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         _trees = [];
      }
      
      protected static function onClickTreeHandler(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ChristmasMagicBarPanel"));
      }
      
      public static function destroy() : void
      {
         _trees = null;
         _mcSnow = null;
      }
   }
}
