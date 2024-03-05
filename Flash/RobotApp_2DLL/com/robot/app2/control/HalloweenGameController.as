package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class HalloweenGameController
   {
      
      private static var _loader:MCLoader;
      
      private static var _game:Sprite;
      
      private static var _index:int;
      
      private static var _alarmMc:MovieClip;
      
      private static var _result:Array;
       
      
      public function HalloweenGameController()
      {
         super();
      }
      
      public static function startGame() : void
      {
         _loader = new MCLoader(ClientConfig.getGameSwfPath("FiveMagicHouseTreasureGame"));
         _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _loader.doLoad();
      }
      
      private static function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         var e:MCLoadEvent = param1;
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         SocketConnection.sendWithCallback(47242,function():void
         {
            _game = e.getContent() as Sprite;
            LevelManager.stage.focus = _game;
            LevelManager.showOrRemoveMapLevelandToolslevel(false);
            LevelManager.removeContentLevel();
            LevelManager.gameLevel.addChild(_game);
            _game.addEventListener("mini_game_over",onOver);
            _game.addEventListener("MiniGameClose",onCloseGame);
            _game.addEventListener("game_over",onCloseGame);
            _game.addEventListener("mini_game_step_finish",onSucess);
         },1,[1,1,1,1]);
      }
      
      private static function onSucess(param1:*) : void
      {
         var _loc2_:Array = param1.extra as Array;
         _result = _loc2_;
         _game["pauseGame"]();
         showAlarm(1);
      }
      
      private static function onCloseGame(param1:*) : void
      {
         var _loc2_:Array = param1.extra as Array;
         _result = _loc2_;
         _game["pauseGame"]();
         showAlarm(2);
      }
      
      private static function onOver(param1:*) : void
      {
         var _loc2_:Array = param1.extra as Array;
         _result = _loc2_;
         _game["pauseGame"]();
         showAlarm(3);
      }
      
      private static function removeEvents() : void
      {
         if(_game)
         {
            _game.removeEventListener("mini_game_over",onOver);
            _game.removeEventListener("MiniGameClose",onCloseGame);
            _game.removeEventListener("game_over",onCloseGame);
            LevelManager.stage.frameRate = 24;
            LevelManager.showOrRemoveMapLevelandToolslevel(true);
            LevelManager.addLevel();
            DisplayUtil.removeForParent(_game);
            _game = null;
            _loader.loader.unloadAndStop();
            _loader = null;
         }
      }
      
      public static function loadStartAlarm() : void
      {
         ResourceManager.getResource(ClientConfig.getAppRes("HalloweenMainPetAlarmPanel"),function(param1:MovieClip):void
         {
            _alarmMc = param1;
            _alarmMc.addEventListener(MouseEvent.CLICK,onClick);
            showAlarm(4);
         },"alarmHalloweenUI");
      }
      
      private static function showAlarm(param1:uint) : void
      {
         _alarmMc.gotoAndStop(param1);
         switch(param1)
         {
            case 1:
               KTool.showScore(_alarmMc.jifenMc,_result[0] * 300 + _result[1] * 100 + _result[2] * 50);
               break;
            case 3:
               KTool.showScore(_alarmMc.jifenMc,_result[0] * 300 + _result[1] * 100 + _result[2] * 50);
               KTool.showScore(_alarmMc.numMc,27 - _result[0] - _result[1] - _result[2]);
         }
         LevelManager.gameLevel.addChild(_alarmMc);
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "close":
            case "overBtn":
               SocketConnection.sendWithCallback(47242,function():void
               {
                  exitGame();
               },2,_result);
               break;
            case "startBtn":
               StatManager.sendStat2014("1030万圣节主题活动","点击开始游戏",StatManager.RUN_ACT_2015);
               DisplayUtil.removeForParent(_alarmMc);
               if(BitBuffSetClass.getState(22927) == 0)
               {
                  BitBuffSetClass.setState(22927,1);
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("HalloweenGameFullMovie"),function():void
                  {
                     startGame();
                  });
                  return;
               }
               startGame();
               break;
            case "cancalBtn":
               DisplayUtil.removeForParent(_alarmMc);
               LevelManager.stage.focus = _game;
               _game["continueGame"]();
               break;
            case "buyBtn":
               KTool.buyProductByCallback(245618,1,function():void
               {
                  KTool.doExchange(6958,function():void
                  {
                     DisplayUtil.removeForParent(_alarmMc);
                     LevelManager.stage.focus = _game;
                     _game["restart"]();
                  });
               },_alarmMc);
         }
      }
      
      private static function exitGame() : void
      {
         removeEvents();
         DisplayUtil.removeForParent(_alarmMc);
         _alarmMc.removeEventListener(MouseEvent.CLICK,onClick);
         _alarmMc = null;
         ModuleManager.showAppModule("HalloweenMainPetPanel");
      }
   }
}
