package com.robot.app2.control
{
   import com.robot.app.games.GameStorageManager;
   import com.robot.core.CommandID;
   import com.robot.core.SoundManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import flash.display.Sprite;
   import flash.utils.ByteArray;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   
   public class ThruAeroliteGameController
   {
      
      private static var gameID:uint;
       
      
      public function ThruAeroliteGameController()
      {
         super();
      }
      
      public static function setup(param1:uint = 1) : void
      {
         gameID = param1;
         var _loc2_:MCLoader = new MCLoader(ClientConfig.getResPath("Games/ThruAeroliteGame.swf"),LevelManager.appLevel,1,"正在进入磁力光束枪台....");
         _loc2_.addEventListener(MCLoadEvent.SUCCESS,onLoadGameMovie);
         _loc2_.doLoad();
      }
      
      private static function onLoadGameMovie(param1:MCLoadEvent) : void
      {
         var content:Sprite;
         var mcloader:MCLoader = null;
         var falseGame:Function = null;
         var passGame:Function = null;
         var event:MCLoadEvent = param1;
         falseGame = function(param1:DynamicEvent):void
         {
            mcloader.sharedEvents.removeEventListener("False_ThruAeroGame",arguments.callee);
            mcloader.sharedEvents.removeEventListener("Pass_ThruAeroGame",passGame);
            var _loc3_:uint = 0;
            switch(uint(param1.paramObject))
            {
               case 1:
                  _loc3_ = 40;
                  break;
               case 2:
                  _loc3_ = 80;
            }
            SocketConnection.send(CommandID.GAME_OVER,_loc3_,_loc3_);
            SoundManager.playSound();
         };
         passGame = function(param1:DynamicEvent):void
         {
            mcloader.sharedEvents.removeEventListener("False_ThruAeroGame",falseGame);
            mcloader.sharedEvents.removeEventListener("Pass_ThruAeroGame",arguments.callee);
            SocketConnection.send(CommandID.GAME_OVER,100,100);
            SoundManager.playSound();
         };
         event.currentTarget.removeEventListener(MCLoadEvent.SUCCESS,onLoadGameMovie);
         GameStorageManager.freshLastGame(41004);
         content = event.getContent() as Sprite;
         MainManager.getStage().addChild(content);
         content.x -= 5;
         content.y -= 5;
         SocketConnection.addCmdListener(CommandID.JOIN_GAME,onBeginGame);
         SocketConnection.send(CommandID.JOIN_GAME,gameID);
         SoundManager.stopSound();
         mcloader = event.currentTarget as MCLoader;
         mcloader.sharedEvents.addEventListener("False_ThruAeroGame",falseGame);
         mcloader.sharedEvents.addEventListener("Pass_ThruAeroGame",passGame);
      }
      
      private static function onBeginGame(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.JOIN_GAME,onBeginGame);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
      }
   }
}
