package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class MonsterKingMonthGiftController
   {
       
      
      public function MonsterKingMonthGiftController()
      {
         super();
      }
      
      public static function setup() : void
      {
         ResourceManager.getResource(ClientConfig.getAppResource("2017/0407/MonsterKingMonthGiftMainIconPanel"),function(param1:MovieClip):void
         {
            param1.x = 831;
            param1.y = 60;
            param1.addEventListener(MouseEvent.CLICK,clickHandle);
            LevelManager.iconLevel.addChild(param1);
         });
      }
      
      private static function clickHandle(param1:MouseEvent) : void
      {
         ModuleManager.showAppModule("MonsterKingMonthGiftMainPanel");
      }
   }
}
