package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import flash.display.Sprite;
   import flash.events.Event;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class AnHeiLisaController
   {
      
      private static var _loader:MCLoader;
      
      private static var _game:Sprite;
      
      private static var _index:int;
       
      
      public function AnHeiLisaController()
      {
         super();
      }
      
      public static function startGame() : void
      {
         _loader = new MCLoader(ClientConfig.getGameSwfPath("paopao2"));
         _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _loader.doLoad();
      }
      
      private static function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         var e:MCLoadEvent = param1;
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         SocketConnection.sendWithCallback(43567,function():void
         {
            _game = e.getContent() as Sprite;
            LevelManager.showOrRemoveMapLevelandToolslevel(false);
            LevelManager.appLevel.addChild(_game);
            _game["gamePanel"].addEventListener("game_completed",onCloseGame);
         },1,0,0,0);
      }
      
      private static function onCloseGame(param1:*) : void
      {
         var anlvPowerNum:uint;
         var seerdouNum:uint;
         var taitanNum:uint;
         var anlvPower:uint;
         var seerdou:uint;
         var taitan:uint;
         var e:* = param1;
         var nums:Array = e.data.data as Array;
         var result:Array = [0,0,0,0,0];
         result[0] = nums[0];
         result[1] = nums[1];
         result[2] = nums[2];
         result[3] = nums[4];
         result[4] = nums[3];
         _game["gamePanel"].removeEventListener("game_completed",onCloseGame);
         LevelManager.stage.frameRate = 24;
         LevelManager.showOrRemoveMapLevelandToolslevel(true);
         DisplayUtil.removeForParent(_game);
         _game = null;
         _loader.loader.unloadAndStop();
         _loader = null;
         anlvPowerNum = result[4] / 3;
         seerdouNum = result[2] / 3;
         taitanNum = result[3] / 3;
         anlvPower = anlvPowerNum >= 15 ? 15 : anlvPowerNum;
         seerdou = seerdouNum >= 30 ? 6000 : uint(seerdouNum * 200);
         taitan = taitanNum >= 10 ? 200 : uint(taitanNum * 20);
         SocketConnection.sendWithCallback(43567,function(param1:SocketEvent):void
         {
            EventManager.dispatchEvent(new Event("LISA_GAME_COMPLETE"));
         },2,anlvPower,seerdou,taitan);
      }
   }
}
