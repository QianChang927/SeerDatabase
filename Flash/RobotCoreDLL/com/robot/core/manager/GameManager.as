package com.robot.core.manager
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.TextFormatUtil;
   import com.robot.core.utils.UserState;
   import flash.display.DisplayObject;
   import flash.events.Event;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class GameManager
   {
      
      public static const GAME_OVER:String = "game_over";
      
      private static var _gameeName:String;
      
      private static var _isApp:Boolean;
      
      private static var _loader:MCLoader;
      
      private static var _curDisplayObj:DisplayObject;
      
      private static var _gamePanel:AppModel;
      
      private static var _leiB:Boolean = false;
      
      private static var _per:uint;
       
      
      public function GameManager()
      {
         super();
      }
      
      public static function showGameNoNet(param1:String) : void
      {
         _gameeName = param1;
         MapManager.destroy();
         MainManager.actorState = UserState.GAME;
         loadSwf();
      }
      
      public static function addLeiYiGame() : void
      {
         if(!_leiB)
         {
            _leiB = true;
            SocketConnection.addCmdListener(CommandID.LEIYI_GAME_HP,leiyiHpHandler);
         }
      }
      
      public static function showGame(param1:Boolean, param2:String, param3:uint = 1) : void
      {
         _isApp = param1;
         _gameeName = param2;
         SocketConnection.addCmdListener(CommandID.JOIN_GAME,onJoinGame);
         SocketConnection.send(CommandID.JOIN_GAME,param3);
      }
      
      private static function onJoinGame(param1:SocketEvent) : void
      {
         LevelManager.hideMapLevel();
         SocketConnection.removeCmdListener(CommandID.JOIN_GAME,onJoinGame);
         if(_isApp)
         {
            loadPanel();
         }
         else
         {
            loadSwf();
         }
      }
      
      private static function loadPanel() : void
      {
         _gamePanel = new AppModel(ClientConfig.getGameModule(_gameeName),"正在加载游戏");
         _gamePanel.setup();
         _gamePanel.show();
         _gamePanel.addEventListener(GAME_OVER,onGameOver0);
      }
      
      private static function onGameOver0(param1:Event) : void
      {
         _gamePanel.removeEventListener(GAME_OVER,onGameOver0);
         LevelManager.showMapLevel();
         SocketConnection.send(CommandID.GAME_OVER,_per,_per);
      }
      
      private static function loadSwf() : void
      {
         _loader = new MCLoader(ClientConfig.getResPath("Games/" + _gameeName + ".swf"),LevelManager.topLevel,1,"正在加载游戏");
         _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadDLL);
         _loader.doLoad();
      }
      
      private static function leiyiHpHandler(param1:SocketEvent) : void
      {
         _leiB = false;
         SocketConnection.removeCmdListener(CommandID.LEIYI_GAME_HP,leiyiHpHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:int = _loc2_.readInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         var _loc5_:uint = _loc2_.readUnsignedInt();
         switch(_loc4_)
         {
            case 1:
               if(_loc5_ >= 1)
               {
                  Alarm.show("恭喜你！特训成功！" + TextFormatUtil.getRedTxt("通过这次锻炼，雷伊的体力上限提升了" + String(_loc5_) + "点！"),null,false,false,false,LevelManager.topLevel);
               }
               break;
            case 2:
               if(_loc5_ >= 1)
               {
                  Alarm.show("恭喜你！特训成功！" + TextFormatUtil.getRedTxt("通过这次锻炼，雷伊的防御上限提升了" + String(_loc5_) + "点！"),null,false,false,false,LevelManager.topLevel);
               }
               break;
            case 3:
               if(_loc5_ >= 1)
               {
                  Alarm.show("恭喜你！特训成功！" + TextFormatUtil.getRedTxt("通过这次锻炼，雷伊的特防上限提升了" + String(_loc5_) + "点！"),null,false,false,false,LevelManager.topLevel);
               }
               break;
            case 4:
               if(_loc5_ >= 1)
               {
                  Alarm.show("恭喜你！特训成功！" + TextFormatUtil.getRedTxt("通过这次锻炼，雷伊的攻击上限提升了" + String(_loc5_) + "点！"),null,false,false,false,LevelManager.topLevel);
               }
               break;
            case 5:
               if(_loc5_ >= 1)
               {
                  Alarm.show("恭喜你！特训成功！" + TextFormatUtil.getRedTxt("通过这次锻炼，雷伊的特攻上限提升了" + String(_loc5_) + "点！"),null,false,false,false,LevelManager.topLevel);
               }
               break;
            case 6:
               if(_loc5_ >= 1)
               {
                  Alarm.show("恭喜你！特训成功！" + TextFormatUtil.getRedTxt("通过这次锻炼，雷伊的速度上限提升了" + String(_loc5_) + "点！"),null,false,false,false,LevelManager.topLevel);
               }
         }
         ModuleManager.showAppModule("LeiYiGamePanel");
      }
      
      private static function onLoadDLL(param1:MCLoadEvent) : void
      {
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadDLL);
         LevelManager.topLevel.addChild(param1.getContent());
         param1.getContent().addEventListener(GAME_OVER,onGameOver);
         _curDisplayObj = param1.getContent();
      }
      
      public static function setgamePer(param1:uint) : void
      {
         _per = param1;
      }
      
      private static function onGameOver(param1:Event) : void
      {
         LevelManager.showMapLevel();
         LevelManager.topLevel.removeChild(_curDisplayObj);
         MapManager.refMap();
         SocketConnection.send(CommandID.GAME_OVER,_per,_per);
      }
   }
}
