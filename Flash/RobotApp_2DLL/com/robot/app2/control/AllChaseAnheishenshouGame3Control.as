package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import flash.display.Sprite;
   import org.taomee.utils.DisplayUtil;
   
   public class AllChaseAnheishenshouGame3Control
   {
      
      private static var _loader:MCLoader;
      
      private static var _game:Sprite;
       
      
      public function AllChaseAnheishenshouGame3Control()
      {
         super();
      }
      
      public static function startGame() : void
      {
         _loader = new MCLoader(ClientConfig.getGameSwfPath("FiveMagicHouseGame20161118"));
         _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _loader.doLoad();
      }
      
      private static function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _game = param1.getContent() as Sprite;
         LevelManager.stage.focus = _game;
         LevelManager.showOrRemoveMapLevelandToolslevel(false);
         LevelManager.removeContentLevel();
         LevelManager.gameLevel.addChild(_game);
         _game.addEventListener("MiniGameClose",onCloseGame);
      }
      
      private static function onCloseGame(param1:*) : void
      {
         var _loc2_:uint = param1.extra as uint;
         if(_loc2_ >= 1500)
         {
            SocketConnection.send(45695,1,1);
         }
         removeEvents();
         ModuleManager.showAppModule("AllChaseAnheishenshouTaskPanel");
      }
      
      private static function removeEvents() : void
      {
         if(_game)
         {
            _game.removeEventListener("MiniGameClose",onCloseGame);
            LevelManager.stage.frameRate = 24;
            LevelManager.showOrRemoveMapLevelandToolslevel(true);
            LevelManager.addLevel();
            DisplayUtil.removeForParent(_game);
            _game = null;
            _loader.loader.unloadAndStop();
            _loader = null;
         }
      }
   }
}
