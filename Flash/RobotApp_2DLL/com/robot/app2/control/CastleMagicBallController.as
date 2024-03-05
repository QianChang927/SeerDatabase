package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.newloader.MCLoader;
   import flash.display.Sprite;
   import flash.events.Event;
   import org.taomee.utils.DisplayUtil;
   
   public class CastleMagicBallController
   {
      
      private static var _loader:MCLoader;
      
      private static var _game:Sprite;
       
      
      public function CastleMagicBallController()
      {
         super();
      }
      
      public static function startGame() : void
      {
         _loader = new MCLoader(ClientConfig.getGameSwfPath("XHXMiniGame"));
         _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _loader.doLoad();
      }
      
      private static function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _game = param1.getContent() as Sprite;
         LevelManager.showOrRemoveMapLevelandToolslevel(false);
         LevelManager.appLevel.addChild(_game);
         _game.addEventListener("game_end",onCloseGame);
      }
      
      private static function onCloseGame(param1:Event) : void
      {
         LevelManager.stage.frameRate = 24;
         if(_game != null)
         {
            LevelManager.showOrRemoveMapLevelandToolslevel(true);
            DisplayUtil.removeForParent(_game);
            _game = null;
            _loader.loader.unloadAndStop();
            _loader = null;
         }
         ModuleManager.showModule(ClientConfig.getAppModule("SamllDarkFireVajraPanel"));
      }
   }
}
