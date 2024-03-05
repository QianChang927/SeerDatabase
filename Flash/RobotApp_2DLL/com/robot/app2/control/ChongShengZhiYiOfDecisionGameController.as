package com.robot.app2.control
{
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class ChongShengZhiYiOfDecisionGameController
   {
      
      private static var loader:MCLoader;
      
      public static var game:Sprite;
       
      
      public function ChongShengZhiYiOfDecisionGameController()
      {
         super();
      }
      
      public static function startGame() : void
      {
         loader = new MCLoader(ClientConfig.getGameSwfPath("ChongShengZhiYiOfDecisionGame"));
         loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         loader.doLoad();
      }
      
      private static function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         game = param1.getContent() as Sprite;
         LevelManager.showOrRemoveMapLevelandToolslevel(false,true);
         LevelManager.appLevel.addChild(game);
         game.addEventListener(MouseEvent.CLICK,onClick);
         game.addEventListener("okay_1",onGameWin);
         game.addEventListener("okay_2",onGameFail);
         game.addEventListener("close_btn",onGameClose);
         game.addEventListener("start_btn",onGameStart);
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var _loc2_:int = 0;
         switch(param1.target.name)
         {
            case "close_btn":
               ModuleManager.showAppModule("ChongShengZhiYiOfDecisionS1Panel",0);
               destroyGame();
               break;
            case "start_btn":
               SocketConnection.send(41388,1,5);
               break;
            case "okay_1":
               StatManager.sendStat2014("0918重生之翼的决断","探查成功","2020运营活动");
               SocketConnection.send(41388,1,6);
               _loc2_ = Math.ceil(Math.random() * 9);
               if(_loc2_ <= 3)
               {
                  if(BitBuffSetClass.getState(24039) == 0)
                  {
                     BitBuffSetClass.setState(24039,1);
                     ModuleManager.showAppModule("ChongShengZhiYiOfDecisionS1Panel",1);
                     destroyGame();
                  }
                  else if(BitBuffSetClass.getState(24040) == 0)
                  {
                     BitBuffSetClass.setState(24040,1);
                     ModuleManager.showAppModule("ChongShengZhiYiOfDecisionS1Panel",2);
                     destroyGame();
                  }
                  else if(BitBuffSetClass.getState(24041) == 0)
                  {
                     BitBuffSetClass.setState(24041,1);
                     ModuleManager.showAppModule("ChongShengZhiYiOfDecisionS1Panel",3);
                     destroyGame();
                  }
                  else
                  {
                     ModuleManager.showAppModule("ChongShengZhiYiOfDecisionS1Panel",0);
                     destroyGame();
                  }
               }
               else
               {
                  ModuleManager.showAppModule("ChongShengZhiYiOfDecisionS1Panel",0);
                  destroyGame();
               }
               break;
            case "okay_2":
               StatManager.sendStat2014("0918重生之翼的决断","探查失败","2020运营活动");
               SocketConnection.send(41388,1,7);
               ModuleManager.showAppModule("ChongShengZhiYiOfDecisionS1Panel",0);
               destroyGame();
         }
      }
      
      private static function onGameWin(param1:*) : void
      {
      }
      
      private static function onGameFail(param1:*) : void
      {
      }
      
      private static function onGameStart(param1:*) : void
      {
         SocketConnection.send(41388,1,5);
         StatManager.sendStat2014("0918重生之翼的决断","进行探查","2020运营活动");
      }
      
      private static function onGameClose(param1:*) : void
      {
         ModuleManager.showAppModule("ChongShengZhiYiOfDecisionS1Panel",0);
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
