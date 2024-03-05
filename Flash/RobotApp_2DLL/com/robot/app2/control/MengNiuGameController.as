package com.robot.app2.control
{
   import com.robot.core.SoundManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.net.SharedObject;
   import org.taomee.utils.DisplayUtil;
   
   public class MengNiuGameController
   {
      
      private static var loader:MCLoader;
      
      private static var _game1:Sprite;
       
      
      public function MengNiuGameController()
      {
         super();
      }
      
      public static function setup() : void
      {
         loader = new MCLoader(ClientConfig.getGameSwfPath("mengniuGame1/bin/menu"));
         loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         loader.doLoad();
      }
      
      private static function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _game1 = param1.getContent() as Sprite;
         LevelManager.showOrRemoveMapLevelandToolslevel(false);
         SoundManager.stopSound();
         LevelManager.appLevel.addChild(_game1);
         _game1.addEventListener("game_close",onGame1Close);
         _game1.addEventListener("game_lottery",onGameLottery);
         _game1.addEventListener("have_a_game",onGame);
         SocketConnection.send(1022,86064502);
      }
      
      private static function onGame1Close(param1:Event) : void
      {
         destroyGame1();
      }
      
      private static function onGameLottery(param1:Event) : void
      {
         var _loc5_:SharedObject = null;
         SocketConnection.send(1022,86064503);
         var _loc2_:SharedObject = SharedObject.getLocal("has_a_mengniu_game");
         var _loc3_:Date = new Date();
         var _loc4_:String = _loc3_.month.toString() + _loc3_.date.toString();
         if(_loc2_.data["adDaily"] != _loc4_)
         {
            Alarm.show("今天还没有玩任何游戏哦！");
         }
         else if((_loc5_ = SharedObject.getLocal("has_lottery")).data["adDaily"] != _loc4_)
         {
            destroyGame1();
            ModuleManager.showModule(ClientConfig.getAppModule("MengniuLotteryADPanel"));
         }
         else
         {
            Alarm.show("今天已经抽奖了哦！明天再来吧！");
         }
      }
      
      private static function onGame(param1:Event) : void
      {
         var _loc2_:SharedObject = SharedObject.getLocal("has_a_mengniu_game");
         var _loc3_:Date = new Date();
         var _loc4_:String = _loc3_.month.toString() + _loc3_.date.toString();
         if(_loc2_.data["adDaily"] != _loc4_)
         {
            _loc2_.data["adDaily"] = _loc4_;
            _loc2_.flush();
         }
      }
      
      public static function destroyGame1() : void
      {
         LevelManager.stage.frameRate = 24;
         if(_game1 != null)
         {
            _game1.removeEventListener("game_close",onGame1Close);
            _game1.removeEventListener("game_lottery",onGameLottery);
            _game1.removeEventListener("have_a_game",onGame);
            LevelManager.showOrRemoveMapLevelandToolslevel(true);
            DisplayUtil.removeForParent(_game1);
            _game1 = null;
            loader = null;
            SoundManager.playSound();
         }
      }
   }
}
