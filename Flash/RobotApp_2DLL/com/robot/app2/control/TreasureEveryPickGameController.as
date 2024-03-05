package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   
   public class TreasureEveryPickGameController
   {
       
      
      public function TreasureEveryPickGameController()
      {
         super();
      }
      
      public static function startGame() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("TreasureEveryPickGameExplanationPanel"),"正在打开...");
      }
      
      public static function onCloseGame(param1:int) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("LotteryPanel"));
      }
   }
}
