package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import flash.display.Sprite;
   import org.taomee.utils.DisplayUtil;
   
   public class CassiusGameController
   {
      
      private static var _loader:MCLoader;
      
      private static var _game:Sprite;
      
      private static var _index:int;
       
      
      public function CassiusGameController()
      {
         super();
      }
      
      public static function startGame(param1:int) : void
      {
         _loader = new MCLoader(ClientConfig.getGameSwfPath("IcyIslandSecretGameModule"));
         _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _loader.doLoad();
         _index = param1;
      }
      
      private static function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         var e:MCLoadEvent = param1;
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         SocketConnection.sendWithCallback(CommandID.CASSIUS_GAME_START,function():void
         {
            _game = e.getContent() as Sprite;
            _game["startGame"](_index);
            LevelManager.showOrRemoveMapLevelandToolslevel(false);
            LevelManager.appLevel.addChild(_game);
            _game.addEventListener("game_over",onCloseGame);
         },66);
      }
      
      private static function onCloseGame(param1:*) : void
      {
         var e:* = param1;
         var nums:Array = e.data["result"] as Array;
         _game.removeEventListener("game_over",onCloseGame);
         LevelManager.stage.frameRate = 24;
         LevelManager.showOrRemoveMapLevelandToolslevel(true);
         DisplayUtil.removeForParent(_game);
         _game = null;
         _loader.loader.unloadAndStop();
         _loader = null;
         nums = KTool.arrayToInt(nums);
         SocketConnection.sendWithCallback(CommandID.CASSIUS_GAME_OVER,function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("CassiusPanel"));
         },nums);
      }
   }
}
