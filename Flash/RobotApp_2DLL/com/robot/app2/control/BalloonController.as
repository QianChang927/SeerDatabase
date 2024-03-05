package com.robot.app2.control
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import flash.display.Sprite;
   import flash.events.Event;
   import org.taomee.events.DynamicEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class BalloonController
   {
      
      private static var loader:MCLoader;
      
      public static var game:Sprite;
       
      
      public function BalloonController()
      {
         super();
      }
      
      public static function setup() : void
      {
         loader = new MCLoader(ClientConfig.getGameSwfPath("BalloonGame"));
         loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         loader.doLoad();
      }
      
      private static function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         game = param1.getContent() as Sprite;
         LevelManager.showOrRemoveMapLevelandToolslevel(false,true);
         LevelManager.appLevel.addChild(game);
         game.addEventListener("game_close",onGameClose);
         game.addEventListener("game_buy",onGame1Buy);
         SocketConnection.send(CommandID.BALLOON_GAME,1,0);
      }
      
      private static function onGame1Buy(param1:Event) : void
      {
         ModuleManager.showAppModule("BalloonBuyPanel");
      }
      
      private static function onGameClose(param1:DynamicEvent) : void
      {
         var _loc2_:uint = param1.paramObject as uint;
         SocketConnection.send(CommandID.BALLOON_GAME,2,_loc2_);
         destroyGame();
         ModuleManager.showModule(ClientConfig.getAppModule("LotteryPanel"));
      }
      
      public static function destroyGame() : void
      {
         LevelManager.stage.frameRate = 24;
         if(game != null)
         {
            game.removeEventListener("game_close",onGameClose);
            game.removeEventListener("game_buy",onGame1Buy);
            LevelManager.showOrRemoveMapLevelandToolslevel(true);
            DisplayUtil.removeForParent(game);
            game = null;
            loader = null;
         }
      }
   }
}
