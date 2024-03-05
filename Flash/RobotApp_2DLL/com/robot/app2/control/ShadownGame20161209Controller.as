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
   import flash.events.Event;
   import flash.events.SyncEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class ShadownGame20161209Controller
   {
       
      
      public function ShadownGame20161209Controller()
      {
         super();
      }
      
      public static function startGhost() : void
      {
         var _loader:MCLoader = null;
         var _game:Sprite = null;
         var onLoadSWFComplete:Function = null;
         var onGameStartHandler:Function = null;
         var onGameCloseHandler:Function = null;
         var startGame:Function = function():void
         {
            _loader = new MCLoader(ClientConfig.getGameSwfPath("ShadownGame20161209"));
            _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
            _loader.doLoad();
         };
         onLoadSWFComplete = function(param1:MCLoadEvent):void
         {
            _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
            _game = param1.getContent() as Sprite;
            _game.addEventListener("startGame",onGameStartHandler);
            _game.addEventListener("closeGame",onGameCloseHandler);
            LevelManager.showOrRemoveMapLevelandToolslevel(false);
            LevelManager.removeContentLevel();
            LevelManager.gameLevel.addChild(_game);
            LevelManager.stage.focus = _game;
         };
         onGameStartHandler = function(param1:Event):void
         {
            var e:Event = param1;
            KTool.getMultiValue([15330],function(param1:Array):void
            {
               var _loc2_:int = int(param1[0]);
               var _loc3_:int = 4 - param1[0];
               if(_loc3_ > 0)
               {
                  SocketConnection.sendWithCallback(43224,null,1,0,0,0,0,0);
               }
            });
         };
         onGameCloseHandler = function(param1:*):void
         {
            var _result:uint = 0;
            var e:* = param1;
            remove();
            _result = 0;
            if(e is SyncEvent)
            {
               _result = e.changeList[1] as uint;
            }
            ModuleManager.showAppModule("WhiteTigerThemeActivitiesMainPanel");
            KTool.getBitSet([16359],function(param1:Array):void
            {
               _result = _result >= 4 ? 4 : _result;
               if(param1[0])
               {
                  if(e is SyncEvent)
                  {
                     SocketConnection.sendWithCallback(43224,null,2,_result * 10 * 2,0,0,0,0);
                  }
               }
               else if(e is SyncEvent)
               {
                  SocketConnection.sendWithCallback(43224,null,2,_result * 10,0,0,0,0);
               }
            });
         };
         var remove:Function = function():void
         {
            if(_game)
            {
               LevelManager.stage.frameRate = 24;
               LevelManager.showOrRemoveMapLevelandToolslevel(true);
               LevelManager.addLevel();
               DisplayUtil.removeForParent(_game);
               _game.removeEventListener("startGame",onGameStartHandler);
               _game.removeEventListener("closeGame",onGameCloseHandler);
               _game = null;
               _loader.loader.unloadAndStop();
               _loader = null;
            }
         };
         startGame();
      }
   }
}
