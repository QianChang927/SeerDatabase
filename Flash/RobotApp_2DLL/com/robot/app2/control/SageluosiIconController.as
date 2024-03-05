package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class SageluosiIconController
   {
      
      private static var _icon:MovieClip;
       
      
      public function SageluosiIconController()
      {
         super();
      }
      
      public static function setup(param1:MovieClip) : void
      {
         _icon = param1;
         _icon.buttonMode = true;
         _icon.addEventListener(MouseEvent.CLICK,onClickIcon);
      }
      
      public static function onClickIcon(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SageluosiWarning/SageluosiMainPanel"));
      }
   }
}
