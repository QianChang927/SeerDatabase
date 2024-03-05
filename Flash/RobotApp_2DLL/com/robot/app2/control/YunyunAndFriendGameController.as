package com.robot.app2.control
{
   import com.robot.app2.mapProcess.control.LoongBadgeTrueMeanController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import flash.display.Sprite;
   import org.taomee.utils.DisplayUtil;
   
   public class YunyunAndFriendGameController
   {
      
      private static var _loader:MCLoader;
      
      private static var _game:Sprite;
      
      private static var _gameName:String;
       
      
      public function YunyunAndFriendGameController()
      {
         super();
      }
      
      public static function startGame(param1:String = "game3") : void
      {
         _gameName = param1;
         _loader = new MCLoader(ClientConfig.getGameSwfPath(param1));
         _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _loader.doLoad();
      }
      
      private static function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         var e:MCLoadEvent = param1;
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _game = e.getContent() as Sprite;
         _game["startGame"]();
         if(_gameName == "game3")
         {
            SocketConnection.sendWithCallback(43538,function():void
            {
               addToView();
            },2,1,0);
         }
         else if(_gameName == "game4")
         {
            addToView();
         }
      }
      
      private static function addToView() : void
      {
         LevelManager.showOrRemoveMapLevelandToolslevel(false);
         LevelManager.appLevel.addChild(_game);
         _game.addEventListener("game_over",onCloseGame);
      }
      
      private static function onCloseGame(param1:*) : void
      {
         var e:* = param1;
         var num:int = e.data["result"] as int;
         _game.removeEventListener("game_over",onCloseGame);
         LevelManager.stage.frameRate = 24;
         LevelManager.showOrRemoveMapLevelandToolslevel(true);
         DisplayUtil.removeForParent(_game);
         _game = null;
         _loader.loader.unloadAndStop();
         _loader = null;
         if(_gameName == "game3")
         {
            SocketConnection.sendWithCallback(43538,function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("QingmingGetpetPanel"));
            },2,2,num);
         }
         else if(_gameName == "game4")
         {
            if(num >= 50)
            {
               SocketConnection.sendWithCallback(45617,function():void
               {
                  LoongBadgeTrueMeanController.endSetp2();
               },3,1,0);
            }
            else
            {
               ModuleManager.showModule(ClientConfig.getAppModule("LoongBadgeTrueMeanPanel"));
            }
         }
      }
   }
}
