package com.robot.app2.mapProcess.control
{
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   
   public class CassiusAwakeController
   {
       
      
      public function CassiusAwakeController()
      {
         super();
      }
      
      public static function initMap() : void
      {
      }
      
      public static function playStory() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("cassius_awake"),function():void
         {
            ModuleManager.showAppModule("CassiusAwakePanel");
            BitBuffSetClass.setState(22801,1);
         });
      }
   }
}
