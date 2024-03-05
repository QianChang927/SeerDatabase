package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import flash.display.Sprite;
   import flash.events.SyncEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class HelpLeiyForSmallPetGameController
   {
      
      private static var _loader:MCLoader;
      
      private static var _game:Sprite;
       
      
      public function HelpLeiyForSmallPetGameController()
      {
         super();
      }
      
      public static function startGame() : void
      {
         _loader = new MCLoader(ClientConfig.getGameSwfPath("SeerEntangleGame"));
         _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _loader.doLoad();
      }
      
      private static function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         var e:MCLoadEvent = param1;
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         SocketConnection.sendWithCallback(42256,function():void
         {
            _game = e.getContent() as Sprite;
            LevelManager.stage.focus = _game;
            LevelManager.showOrRemoveMapLevelandToolslevel(false);
            LevelManager.removeContentLevel();
            LevelManager.gameLevel.addChild(_game);
            _game.addEventListener("closeGame",onSucess);
         },[1,0,0,0,0,0]);
      }
      
      private static function onSucess(param1:SyncEvent) : void
      {
         var arr:Array;
         var e:SyncEvent = param1;
         StatManager.sendStat2014("0520助力雷伊B","关闭游戏","2016运营活动");
         arr = e.changeList.concat([0,0,0]);
         SocketConnection.sendWithCallback(42256,function():void
         {
            removeEvents();
            ModuleManager.showAppModule("HelpLeiyForSmallPetPanel");
         },[2].concat(arr));
      }
      
      private static function removeEvents() : void
      {
         if(_game)
         {
            _game.removeEventListener("closeGame",onSucess);
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
