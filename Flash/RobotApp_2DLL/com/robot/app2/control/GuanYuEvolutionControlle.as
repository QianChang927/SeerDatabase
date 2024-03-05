package com.robot.app2.control
{
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   
   public class GuanYuEvolutionControlle
   {
       
      
      public function GuanYuEvolutionControlle()
      {
         super();
      }
      
      public static function start() : void
      {
         playStory();
      }
      
      private static function playStory() : void
      {
         if(BitBuffSetClass.getState(22534) == 0)
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("GuanyuchaojinghuaFullMov"),function():void
            {
               BitBuffSetClass.setState(22534,1);
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
         ModuleManager.showModule(ClientConfig.getAppModule("GuanYuEvolutionPanel"),"正在打开...");
      }
   }
}
