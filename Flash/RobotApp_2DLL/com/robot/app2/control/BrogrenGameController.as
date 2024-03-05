package com.robot.app2.control
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class BrogrenGameController
   {
      
      private static var _loader:MCLoader;
      
      private static var _game:Sprite;
      
      public static var times:uint;
       
      
      public function BrogrenGameController()
      {
         super();
      }
      
      public static function startGame() : void
      {
         _loader = new MCLoader(ClientConfig.getGameSwfPath("FindYangYangGame"));
         _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _loader.doLoad();
      }
      
      private static function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _game = param1.getContent() as Sprite;
         LevelManager.showOrRemoveMapLevelandToolslevel(false);
         LevelManager.appLevel.addChild(_game);
         SocketConnection.send(CommandID.BROGREN_GAME,1,0,0,0);
         _game.addEventListener("seer_little_game_over",onCloseGame);
      }
      
      private static function onCloseGame(param1:Event) : void
      {
         var bananerNum:int = 0;
         var appleNum:int = 0;
         var breadNum:int = 0;
         var e:Event = param1;
         var data:ByteArray = new ByteArray();
         var obj:Object = e["data"];
         bananerNum = int(obj["bananer"]);
         appleNum = int(obj["apple"]);
         breadNum = int(obj["bread"]);
         SocketConnection.sendWithCallback(CommandID.BROGREN_GAME,function(param1:SocketEvent):void
         {
            LevelManager.stage.frameRate = 24;
            if(_game != null)
            {
               LevelManager.showOrRemoveMapLevelandToolslevel(true);
               DisplayUtil.removeForParent(_game);
               _game = null;
               _loader.loader.unloadAndStop();
               _loader = null;
            }
            ModuleManager.showModule(ClientConfig.getAppModule("BrogrenThirdPartnerDevelopPanel"),"",{
               "bananer":bananerNum,
               "apple":appleNum,
               "bread":breadNum
            });
         },2,bananerNum,appleNum,breadNum);
      }
   }
}
