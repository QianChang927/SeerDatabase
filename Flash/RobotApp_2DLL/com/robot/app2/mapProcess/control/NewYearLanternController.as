package com.robot.app2.mapProcess.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   
   public class NewYearLanternController
   {
      
      private static var _index:int;
       
      
      public function NewYearLanternController()
      {
         super();
      }
      
      public static function click1() : void
      {
         var _loc1_:int = int(MapManager.currentMap.id);
         switch(_loc1_)
         {
            case 1:
               _index = 1;
               break;
            case 4:
               _index = 2;
               break;
            case 103:
               _index = 3;
         }
         go();
      }
      
      public static function click2() : void
      {
         var _loc1_:int = int(MapManager.currentMap.id);
         switch(_loc1_)
         {
            case 1:
               _index = 4;
               break;
            case 4:
               _index = 5;
               break;
            case 103:
               _index = 6;
         }
         go();
      }
      
      private static function go() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("NewYearLanternPanel"),"",_index);
      }
   }
}
