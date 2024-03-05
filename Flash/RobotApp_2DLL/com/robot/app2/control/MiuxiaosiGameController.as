package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import flash.display.Sprite;
   import org.taomee.utils.DisplayUtil;
   
   public class MiuxiaosiGameController
   {
      
      private static var _loader:MCLoader;
      
      private static var _game:Sprite;
      
      private static var _index:int;
       
      
      public function MiuxiaosiGameController()
      {
         super();
      }
      
      public static function startGame() : void
      {
         _loader = new MCLoader(ClientConfig.getGameSwfPath("paopao"));
         _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _loader.doLoad();
      }
      
      private static function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         var e:MCLoadEvent = param1;
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         SocketConnection.sendWithCallback(CommandID.CASSIUS_GAME_START,function():void
         {
            _game = e.getContent() as Sprite;
            LevelManager.showOrRemoveMapLevelandToolslevel(false);
            LevelManager.appLevel.addChild(_game);
            _game.addEventListener("game_over",onCloseGame);
         },70);
      }
      
      private static function onCloseGame(param1:*) : void
      {
         var _loc2_:Array = param1.data as Array;
         var _loc3_:Array = [0,0,0,0,0];
         _loc3_[0] = _loc2_[0];
         _loc3_[1] = _loc2_[1];
         _loc3_[2] = _loc2_[3];
         _loc3_[3] = _loc2_[4];
         _loc3_[4] = _loc2_[2];
         _game.removeEventListener("game_over",onCloseGame);
         LevelManager.stage.frameRate = 24;
         _loc3_ = KTool.arrayToInt(_loc3_);
         LevelManager.showOrRemoveMapLevelandToolslevel(true);
         DisplayUtil.removeForParent(_game);
         _game = null;
         _loader.loader.unloadAndStop();
         _loader = null;
         SocketConnection.send(CommandID.CASSIUS_GAME_OVER,_loc3_);
      }
   }
}
