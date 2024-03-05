package com.robot.app2.control
{
   import com.robot.core.SoundManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.newloader.MCLoader;
   import flash.display.MovieClip;
   import flash.events.Event;
   import org.taomee.utils.DisplayUtil;
   
   public class SafeGuardController
   {
      
      private static var loader:MCLoader;
      
      private static var _game:MovieClip;
       
      
      public function SafeGuardController()
      {
         super();
      }
      
      public static function startGame() : void
      {
         loader = new MCLoader(ClientConfig.getGameSwfPath("safeGuard/bin/main"));
         loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         loader.doLoad();
      }
      
      private static function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _game = param1.getContent() as MovieClip;
         LevelManager.showOrRemoveMapLevelandToolslevel(false);
         LevelManager.appLevel.addChild(_game);
         _game.addEventListener("game_close",onGameClose);
      }
      
      private static function onGameClose(param1:Event) : void
      {
         if(_game != null)
         {
            _game.removeEventListener("game_close",onGameClose);
            DisplayUtil.removeForParent(_game);
            _game = null;
            loader = null;
            LevelManager.stage.frameRate = 24;
            SoundManager.playSound();
            LevelManager.showOrRemoveMapLevelandToolslevel(true);
         }
      }
   }
}
