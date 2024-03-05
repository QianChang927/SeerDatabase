package com.robot.app.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class DiamondGiftIConController
   {
       
      
      public function DiamondGiftIConController()
      {
         super();
      }
      
      public static function setup(param1:MovieClip) : void
      {
         param1.addEventListener(MouseEvent.CLICK,onClick);
         param1.buttonMode = true;
         param1.gotoAndStop(1);
         ToolTipManager.add(param1,"兑换钻石送好礼");
      }
      
      protected static function onClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ExchangeDiamondGetXteamPet"));
      }
   }
}
