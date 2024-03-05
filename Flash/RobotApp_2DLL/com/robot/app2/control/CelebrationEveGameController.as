package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class CelebrationEveGameController
   {
      
      private static var loader:MCLoader;
      
      public static var game:Sprite;
      
      private static var _IsGame:Boolean;
       
      
      public function CelebrationEveGameController()
      {
         super();
      }
      
      public static function startGame() : void
      {
         _IsGame = false;
         loader = new MCLoader(ClientConfig.getGameSwfPath("CelebrationEveGame"));
         loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         loader.doLoad();
      }
      
      private static function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         game = param1.getContent() as Sprite;
         game["close_btn"].visible = true;
         LevelManager.showOrRemoveMapLevelandToolslevel(false,true);
         LevelManager.appLevel.addChild(game);
         game.addEventListener(MouseEvent.CLICK,onClick);
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var _loc2_:int = 0;
         switch(param1.target.name)
         {
            case "close_btn":
               ModuleManager.showAppModule("JiHuoJiGuanHeMainPanel");
               destroyGame();
               break;
            case "start_btn":
               game["close_btn"].visible = false;
               break;
            case "restart_btn":
               _loc2_ = int(game["temp_txt"].text);
               SocketConnection.send(41950,8,_loc2_);
               ModuleManager.showAppModule("JiHuoJiGuanHeMainPanel");
               destroyGame();
         }
      }
      
      public static function destroyGame() : void
      {
         LevelManager.stage.frameRate = 24;
         if(game != null)
         {
            LevelManager.showOrRemoveMapLevelandToolslevel(true);
            DisplayUtil.removeForParent(game);
            game = null;
            loader = null;
         }
      }
   }
}
