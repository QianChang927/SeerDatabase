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
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class NaiveteGameController
   {
      
      private static var _loader:MCLoader;
      
      private static var _game:Sprite;
      
      private static var _index:int;
       
      
      public function NaiveteGameController()
      {
         super();
      }
      
      public static function startGame() : void
      {
         _loader = new MCLoader(ClientConfig.getGameSwfPath("SeerDextris"));
         _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _loader.doLoad();
      }
      
      private static function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         var e:MCLoadEvent = param1;
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         SocketConnection.sendWithCallback(CommandID.NAIVETE_EXHANGE_AND_GAME,function(param1:SocketEvent):void
         {
            _game = e.getContent() as Sprite;
            LevelManager.appLevel.addChild(_game);
            _game["_game"].addEventListener("mini_game_over",onCloseGame);
         },4,0);
      }
      
      private static function onCloseGame(param1:*) : void
      {
         var e:* = param1;
         var reOb:Object = e.data.extra as Object;
         var result:Array = [reOb.cnt,0,reOb.seercnt,0];
         _game["_game"].removeEventListener("mini_game_over",onCloseGame);
         LevelManager.stage.frameRate = 24;
         result = KTool.arrayToInt(result);
         SocketConnection.sendWithCallback(CommandID.NAIVETE_EXHANGE_AND_GAME,function(param1:SocketEvent):void
         {
            DisplayUtil.removeForParent(_game);
            _game = null;
            _loader.loader.unloadAndStop();
            _loader = null;
         },5,result);
      }
   }
}
