package com.robot.app.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import flash.display.MovieClip;
   
   public class SeerPVPArenaController
   {
      
      public static var FROM_PVP_ARENSA:Boolean;
      
      private static var _IS_IN_ARENA:Boolean;
      
      public static var hasOverviewMovie:Boolean;
       
      
      public function SeerPVPArenaController()
      {
         super();
      }
      
      public static function onIconClick(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SeerPVPArenaMainPanel"));
      }
      
      public static function get IS_IN_ARENA() : Boolean
      {
         return _IS_IN_ARENA;
      }
      
      public static function set IS_IN_ARENA(param1:Boolean) : void
      {
         _IS_IN_ARENA = param1;
         LevelManager.showOrRemoveMapLevelandToolslevel(!param1);
      }
   }
}
