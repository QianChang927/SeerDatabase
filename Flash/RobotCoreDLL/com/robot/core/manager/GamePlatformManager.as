package com.robot.core.manager
{
   import com.robot.core.CommandID;
   import com.robot.core.SoundManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.GamePlatformEvent;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.group.manager.GroupManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.DisplayObject;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class GamePlatformManager
   {
      
      private static var currentName:String = "";
      
      public static const GAME_OVER:String = "game_over";
      
      private static var _isOnline:Boolean = false;
      
      private static var currentGame:AppModel;
      
      private static var _name:String;
      
      private static var paramObj:Object;
      
      private static var _isApp:Boolean;
      
      private static var _loader:MCLoader;
      
      private static var isConnecting:Boolean = false;
      
      private static var _curDisplayObj:DisplayObject;
      
      private static var _instance:EventDispatcher;
       
      
      public function GamePlatformManager()
      {
         super();
      }
      
      private static function setup() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_OPEN,onSwitchOpen);
      }
      
      public static function win(param1:uint = 0) : void
      {
         DebugTrace.show(param1);
         dispatchEvent(new GamePlatformEvent(GamePlatformEvent.GAME_WIN,param1));
      }
      
      public static function lost(param1:uint = 0) : void
      {
         dispatchEvent(new GamePlatformEvent(GamePlatformEvent.GAME_LOST,param1));
      }
      
      private static function onSwitchOpen(param1:MapEvent) : void
      {
         if(currentGame)
         {
            currentGame.destroy();
            currentGame = null;
         }
      }
      
      public static function join(param1:String, param2:Boolean = true, param3:uint = 1, param4:Object = null, param5:Boolean = true) : void
      {
         if(_isOnline)
         {
            throw new Error("游戏平台中已经有游戏在运行，不能再次加入");
         }
         if(isConnecting)
         {
            Alarm.show("正在连接游戏平台，不能重复发送连接申请");
            return;
         }
         if(GroupManager.isInGroup)
         {
            Alarm.show("组队过程中不能玩游戏的噢");
            return;
         }
         _name = param1;
         paramObj = param4;
         _isApp = param5;
         if(param2)
         {
            isConnecting = true;
            SocketConnection.addCmdListener(CommandID.JOIN_GAME,onJoin);
            SocketConnection.send(CommandID.JOIN_GAME,param3);
         }
         else
         {
            _isOnline = false;
            loadGame();
         }
      }
      
      public static function exitGame() : void
      {
         if(_isOnline)
         {
            _isOnline = false;
         }
         if(currentGame)
         {
            if(currentGame.appLoader)
            {
               currentGame.appLoader.removeEventListener(MCLoadEvent.CLOSE,onCloseLoading);
            }
            currentGame.destroy();
            currentGame = null;
         }
      }
      
      public static function leave() : void
      {
         if(_isOnline)
         {
            SocketConnection.send(CommandID.LEAVE_GAME);
         }
      }
      
      public static function gameOver(param1:String = "", param2:uint = 0, param3:uint = 0, param4:uint = 0) : void
      {
         DebugTrace.show("游戏结束",param2,param3);
         SoundManager.stopSoundImmediately();
         SoundManager.playSound();
         if(param1 == "PetLLK" || param1 == "StoneLLK" || param1 == "Shadow" || param1 == "Zuma" || param1 == "flyeavesgowall" || param1 == "standing" || param1 == "adventuregame")
         {
            if(_isOnline)
            {
               SocketConnection.send(CommandID.FOOLISH_GAME_OVER,param2,param3,param4);
               _isOnline = false;
            }
         }
         else if(_isOnline)
         {
            SocketConnection.send(CommandID.GAME_OVER,param2,param3);
            _isOnline = false;
         }
      }
      
      private static function onJoin(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.JOIN_GAME,onJoin);
         _isOnline = true;
         isConnecting = false;
         if(!_isApp)
         {
            loadSwf();
         }
         else
         {
            loadGame();
         }
      }
      
      private static function loadGame() : void
      {
         if(_name == currentName)
         {
            currentGame = new AppModel(ClientConfig.getGameModule(_name),"正在进入游戏……");
            if(currentGame.appLoader)
            {
               currentGame.appLoader.addEventListener(MCLoadEvent.CLOSE,onCloseLoading);
            }
            currentGame.setup();
            currentGame.init(paramObj);
            currentGame.show();
            SoundManager.stopSoundImmediately();
            SoundManager.playGameSound(_name);
         }
         else
         {
            if(currentGame)
            {
               currentGame.appLoader.removeEventListener(MCLoadEvent.CLOSE,onCloseLoading);
               currentGame.destroy();
            }
            currentGame = new AppModel(ClientConfig.getGameModule(_name),"正在进入游戏……");
            currentGame.setup();
            currentGame.init(paramObj);
            currentGame.show();
            SoundManager.stopSoundImmediately();
            SoundManager.playGameSound(_name);
         }
         currentName = _name;
      }
      
      private static function loadSwf() : void
      {
         if(_curDisplayObj)
         {
            DisplayUtil.removeForParent(_curDisplayObj);
         }
         SoundManager.stopSoundImmediately();
         SoundManager.playGameSound(_name);
         _loader = new MCLoader(ClientConfig.getResPath("Games/" + _name + ".swf"),LevelManager.topLevel,1,"正在加载游戏");
         _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadDLL);
         _loader.doLoad();
      }
      
      private static function onLoadDLL(param1:MCLoadEvent) : void
      {
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadDLL);
         _curDisplayObj = param1.getContent();
         LevelManager.showOrRemoveMapLevelandToolslevel(false,true);
         LevelManager.appLevel.addChild(_curDisplayObj);
         LevelManager.closeMouseEvent();
         _curDisplayObj.addEventListener("GAMEOVER",onGameOver);
         _curDisplayObj.addEventListener("GAMELOST",onGameLost);
         _curDisplayObj.addEventListener("GAMEEXIT",onGameExit);
      }
      
      private static function onGameExit(param1:Event) : void
      {
         SoundManager.stopSoundImmediately();
         SoundManager.playSound();
         LevelManager.appLevel.removeChild(_curDisplayObj);
         LevelManager.showOrRemoveMapLevelandToolslevel(true);
         LevelManager.openMouseEvent();
      }
      
      private static function onGameLost(param1:Event) : void
      {
         SoundManager.stopSoundImmediately();
         SoundManager.playSound();
         LevelManager.appLevel.removeChild(_curDisplayObj);
         SocketConnection.send(CommandID.GAME_OVER,0,0);
         lost();
         LevelManager.showOrRemoveMapLevelandToolslevel(true);
         LevelManager.openMouseEvent();
      }
      
      private static function onGameOver(param1:Event) : void
      {
         SoundManager.stopSoundImmediately();
         SoundManager.playSound();
         LevelManager.appLevel.removeChild(_curDisplayObj);
         SocketConnection.send(CommandID.GAME_OVER,100,100);
         win();
         LevelManager.showOrRemoveMapLevelandToolslevel(true);
         LevelManager.openMouseEvent();
      }
      
      private static function onCloseLoading(param1:MCLoadEvent) : void
      {
         if(_isOnline)
         {
            SocketConnection.send(CommandID.GAME_OVER,0,0);
         }
         SoundManager.stopSoundImmediately();
         SoundManager.playSound();
      }
      
      private static function getInstance() : EventDispatcher
      {
         if(_instance == null)
         {
            _instance = new EventDispatcher();
         }
         return _instance;
      }
      
      public static function addEventListener(param1:String, param2:Function, param3:Boolean = false, param4:int = 0, param5:Boolean = false) : void
      {
         getInstance().addEventListener(param1,param2,param3,param4,param5);
      }
      
      public static function removeEventListener(param1:String, param2:Function, param3:Boolean = false) : void
      {
         getInstance().removeEventListener(param1,param2,param3);
      }
      
      public static function dispatchEvent(param1:Event) : void
      {
         getInstance().dispatchEvent(param1);
      }
      
      public static function hasEventListener(param1:String) : Boolean
      {
         return getInstance().hasEventListener(param1);
      }
   }
}
