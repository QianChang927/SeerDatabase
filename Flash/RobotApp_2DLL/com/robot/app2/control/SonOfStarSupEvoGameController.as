package com.robot.app2.control
{
   import com.robot.app2.utilClass.EncrySmallGame;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import flash.display.Sprite;
   import org.taomee.utils.DisplayUtil;
   
   public class SonOfStarSupEvoGameController
   {
      
      private static var _loader:MCLoader;
      
      private static var _game:Sprite;
      
      private static var _index:int;
      
      private static var _encry:EncrySmallGame;
       
      
      public function SonOfStarSupEvoGameController()
      {
         super();
      }
      
      public static function startGame() : void
      {
         _loader = new MCLoader(ClientConfig.getGameSwfPath("RocketFire"));
         _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _loader.doLoad();
      }
      
      private static function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         var e:MCLoadEvent = param1;
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         SocketConnection.sendWithCallback(43310,function():void
         {
            _game = e.getContent() as Sprite;
            LevelManager.showOrRemoveMapLevelandToolslevel(false);
            LevelManager.appLevel.addChild(_game);
            _game.addEventListener("closeGame",onCloseGame);
            _encry = new EncrySmallGame();
            _encry.rand = 1033;
         },30,4);
      }
      
      private static function onCloseGame(param1:*) : void
      {
         var e:* = param1;
         var nums:Array = e.changeList as Array;
         _game.removeEventListener("game_over",onCloseGame);
         LevelManager.stage.frameRate = 24;
         LevelManager.showOrRemoveMapLevelandToolslevel(true);
         DisplayUtil.removeForParent(_game);
         _game = null;
         _loader.loader.unloadAndStop();
         _loader = null;
         _encry.score = nums[0];
         SocketConnection.sendWithCallback(43310,function():void
         {
            ModuleManager.showAppModule("TenthAnniversaryCelebrationGameNo2MainPanel");
         },32,_encry.sendValue);
      }
   }
}
