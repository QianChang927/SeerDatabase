package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   
   public class ELingShouController
   {
       
      
      public function ELingShouController()
      {
         super();
      }
      
      public static function initForMap1015() : void
      {
         start();
      }
      
      public static function start() : void
      {
         if(MapManager.currentMap.id != 1015)
         {
            MapManager.changeMap(1015);
         }
         else if(BitBuffSetClass.getState(22495) == 0)
         {
            playStory();
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("elingshou/ELingShouRegressionPanel"));
         }
      }
      
      private static function playStory() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("elingshou_bounsMovie"),function():void
         {
            KTool.showMapAllPlayerAndMonster();
            BitBuffSetClass.setState(22495,1);
         });
      }
      
      public static function destroy() : void
      {
      }
   }
}
