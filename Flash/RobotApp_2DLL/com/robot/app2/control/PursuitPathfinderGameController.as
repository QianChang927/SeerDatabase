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
   
   public class PursuitPathfinderGameController
   {
      
      private static var _loader:MCLoader;
      
      private static var _game:Sprite;
       
      
      public function PursuitPathfinderGameController()
      {
         super();
      }
      
      public static function startGame() : void
      {
         _loader = new MCLoader(ClientConfig.getGameSwfPath("PursuitPathfinderGame"));
         _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _loader.doLoad();
      }
      
      private static function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         var e:MCLoadEvent = param1;
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         SocketConnection.sendWithCallback(45696,function():void
         {
            _game = e.getContent() as Sprite;
            _game["startGame"]();
            LevelManager.showOrRemoveMapLevelandToolslevel(false);
            LevelManager.appLevel.addChild(_game);
            _game.addEventListener("game_over",onCloseGame);
         },1,0);
      }
      
      private static function onCloseGame(param1:*) : void
      {
         var num:int = 0;
         var e:* = param1;
         num = e.data["result"] as int;
         _game.removeEventListener("game_over",onCloseGame);
         LevelManager.stage.frameRate = 24;
         LevelManager.showOrRemoveMapLevelandToolslevel(true);
         DisplayUtil.removeForParent(_game);
         _game = null;
         _loader.loader.unloadAndStop();
         _loader = null;
         SocketConnection.sendWithCallback(45696,function():void
         {
            if(num >= 10)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("PursuitPathfinderGameEndPanel"));
            }
            else
            {
               ModuleManager.showModule(ClientConfig.getAppModule("PursuitPathfinderGameMainPanel"));
            }
         },2,num);
      }
   }
}
