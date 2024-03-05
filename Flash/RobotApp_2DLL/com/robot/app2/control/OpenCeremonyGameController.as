package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class OpenCeremonyGameController
   {
      
      private static var _loader:MCLoader;
      
      private static var _game:Sprite;
      
      public static var times:uint;
       
      
      public function OpenCeremonyGameController()
      {
         super();
      }
      
      public static function startGame() : void
      {
         _loader = new MCLoader(ClientConfig.getGameSwfPath("openCeremonyGame"));
         _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _loader.doLoad();
      }
      
      private static function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _game = param1.getContent() as Sprite;
         LevelManager.showOrRemoveMapLevelandToolslevel(false);
         LevelManager.appLevel.addChild(_game);
         SocketConnection.send(45563,1,0);
         _game.addEventListener("seer_little_game_over",onCloseGame);
      }
      
      private static function onCloseGame(param1:Event) : void
      {
         var num:int = 0;
         var e:Event = param1;
         var data:ByteArray = new ByteArray();
         var obj:Object = e["data"];
         num = int(obj["beanNum"]);
         ItemManager.delayItemDialog();
         SocketConnection.sendWithCallback(45563,function(param1:SocketEvent):void
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
            ModuleManager.showModule(ClientConfig.getAppModule("OpenCeremonyGamePanel"),"",{"beanNum":num});
         },2,num);
      }
   }
}
