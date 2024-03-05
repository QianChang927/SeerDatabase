package com.robot.app2.control
{
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   
   public class DarkBuLaiKeController
   {
       
      
      public function DarkBuLaiKeController()
      {
         super();
      }
      
      public static function start() : void
      {
         if(MapManager.currentMap.id != 1020)
         {
            MapManager.changeMap(1020);
            return;
         }
         playStory();
      }
      
      private static function playStory() : void
      {
         if(BitBuffSetClass.getState(22528) == 0)
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("DarkBuLaiKeFullMov"),function():void
            {
               BitBuffSetClass.setState(22528,1);
               openPanel();
            });
         }
         else
         {
            openPanel();
         }
      }
      
      private static function openPanel() : void
      {
         DiamondDailyTaskController.tryFinish(9,5);
         ModuleManager.showModule(ClientConfig.getAppModule("DarkBuLaiKeMianPanel"),"正在打开...");
      }
   }
}
