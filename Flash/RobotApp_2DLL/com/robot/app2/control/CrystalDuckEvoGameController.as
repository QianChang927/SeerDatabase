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
   
   public class CrystalDuckEvoGameController
   {
      
      private static var _loader:MCLoader;
      
      private static var _game:Sprite;
       
      
      public function CrystalDuckEvoGameController()
      {
         super();
      }
      
      public static function startGame() : void
      {
         _loader = new MCLoader(ClientConfig.getGameSwfPath("SeerLightReflection"));
         _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _loader.doLoad();
      }
      
      private static function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         var e:MCLoadEvent = param1;
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         SocketConnection.sendWithCallback(45646,function():void
         {
            _game = e.getContent() as Sprite;
            LevelManager.stage.focus = _game;
            LevelManager.showOrRemoveMapLevelandToolslevel(false);
            LevelManager.removeContentLevel();
            LevelManager.gameLevel.addChild(_game);
            _game["game"].addEventListener("mini_game_over",onSucess);
         },1);
      }
      
      private static function onSucess(param1:*) : void
      {
         var e:* = param1;
         var sucess:Boolean = e.extra.extra.win as Boolean;
         var index:uint = sucess ? 2 : 3;
         SocketConnection.sendWithCallback(45646,function():void
         {
            removeEvents();
            ModuleManager.showAppModule("CrystalDuckEvoPanel");
         },index);
      }
      
      private static function removeEvents() : void
      {
         if(_game)
         {
            _game["game"].removeEventListener("mini_game_over",onSucess);
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
