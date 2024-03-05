package com.robot.app2.control
{
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   
   public class TaXiYaController
   {
       
      
      public function TaXiYaController()
      {
         super();
      }
      
      public static function start() : void
      {
         if(MapManager.currentMap.id != 1036)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("AnastasiaAwakeningMsgPanel"));
         }
         else if(BitBuffSetClass.getState(22551) == 0)
         {
            playStory();
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("AnastasiaAwakeningMainPanel"));
         }
      }
      
      private static function playStory() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active_20141024_3"),function():void
         {
            BitBuffSetClass.setState(22551,1);
            ModuleManager.showModule(ClientConfig.getAppModule("AnastasiaAwakeningMainPanel"));
         });
      }
      
      public static function destroy() : void
      {
      }
   }
}
