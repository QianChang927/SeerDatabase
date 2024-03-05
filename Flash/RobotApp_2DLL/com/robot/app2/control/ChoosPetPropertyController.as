package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import flash.display.MovieClip;
   
   public class ChoosPetPropertyController
   {
      
      private static var _panel:MovieClip;
      
      private static var _callBlack:Function;
       
      
      public function ChoosPetPropertyController()
      {
         super();
      }
      
      public static function init(param1:Function, param2:Boolean = true) : void
      {
         _callBlack = param1;
         ModuleManager.showModule(ClientConfig.getAppModule("ChoosPetPropertyPanel"),"正在打开....",{"isFree":!param2});
      }
      
      public static function setNewSe(param1:int) : void
      {
         if(_callBlack != null)
         {
            _callBlack(param1);
         }
      }
   }
}
