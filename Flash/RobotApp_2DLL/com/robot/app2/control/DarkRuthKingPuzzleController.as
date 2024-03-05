package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import flash.display.Sprite;
   import org.taomee.utils.DisplayUtil;
   
   public class DarkRuthKingPuzzleController
   {
      
      private static var _loader:MCLoader;
      
      private static var _game:Sprite;
       
      
      public function DarkRuthKingPuzzleController()
      {
         super();
      }
      
      public static function startGame() : void
      {
         _loader = new MCLoader(ClientConfig.getGameSwfPath("Game2048"));
         _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _loader.doLoad();
      }
      
      private static function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         var e:MCLoadEvent = param1;
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         KTool.getMultiValue([5638],function(param1:Array):void
         {
            var values:Array = param1;
            SocketConnection.sendWithCallback(43563,function():void
            {
               _game = e.getContent() as Sprite;
               _game["setCallBackFun"](onGameOver);
               _game["setBestScore"](values[0]);
               LevelManager.showOrRemoveMapLevelandToolslevel(false);
               LevelManager.appLevel.addChild(_game);
            },1,0,0);
         });
      }
      
      private static function onGameOver(param1:int, param2:int) : void
      {
         var score:int = param1;
         var maxNum:int = param2;
         _game["destroy"]();
         LevelManager.stage.frameRate = 24;
         LevelManager.showOrRemoveMapLevelandToolslevel(true);
         DisplayUtil.removeForParent(_game);
         _game = null;
         _loader.loader.unloadAndStop();
         _loader = null;
         SocketConnection.sendWithCallback(43563,function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("DiabloRuthKingMainGetSmallPanel"));
         },2,maxNum,score);
      }
   }
}
