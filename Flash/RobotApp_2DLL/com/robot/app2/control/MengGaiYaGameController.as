package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.LittleGameEvent;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import flash.display.Sprite;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class MengGaiYaGameController
   {
      
      private static var _loader:MCLoader;
      
      private static var _game:Sprite;
      
      public static var times:uint;
       
      
      public function MengGaiYaGameController()
      {
         super();
      }
      
      public static function startGame() : void
      {
         KTool.getMultiValue([14127],function(param1:Array):void
         {
            times = param1[0];
            _loader = new MCLoader(ClientConfig.getGameSwfPath("MengGaiYaGame"));
            _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
            _loader.doLoad();
         });
      }
      
      private static function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _game = param1.getContent() as Sprite;
         LevelManager.showOrRemoveMapLevelandToolslevel(false);
         LevelManager.appLevel.addChild(_game);
         SocketConnection.send(5001,1);
         _game.addEventListener(LittleGameEvent.GAME_OVER,onCloseGame);
      }
      
      private static function onCloseGame(param1:LittleGameEvent) : void
      {
         var i:int = 0;
         var e:LittleGameEvent = param1;
         var data:ByteArray = new ByteArray();
         var obj:Object = e.data;
         var scores:Array = [];
         i = 0;
         while(i < 4)
         {
            data.writeShort(obj["score"][i]);
            i++;
         }
         SocketConnection.sendWithCallback(CommandID.GAME_OVER,function(param1:SocketEvent):void
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
            ModuleManager.showModule(ClientConfig.getAppModule("MengGaiYaPanel"));
         },data);
      }
   }
}
