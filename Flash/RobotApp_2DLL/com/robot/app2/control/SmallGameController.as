package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.ui.loading.Loading;
   import flash.display.Sprite;
   import org.taomee.utils.DisplayUtil;
   
   public class SmallGameController
   {
      
      private static var _instance:com.robot.app2.control.SmallGameController;
       
      
      private var _loader:MCLoader;
      
      private var _game:Sprite;
      
      private var _initArgs:Object;
      
      private var _finishFun:Function;
      
      public function SmallGameController()
      {
         super();
      }
      
      public static function getInstance() : com.robot.app2.control.SmallGameController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app2.control.SmallGameController();
         }
         return _instance;
      }
      
      private static function sendStat(param1:String, param2:String) : void
      {
         StatManager.sendStat2014(param1,param2);
      }
      
      public function startGame(param1:String, param2:Object, param3:Function) : void
      {
         this._initArgs = param2;
         this._finishFun = param3;
         this._loader = new MCLoader(ClientConfig.getGameSwfPath(param1),null,Loading.TITLE_AND_PERCENT);
         this._loader.addEventListener(MCLoadEvent.SUCCESS,this.onLoadSWFComplete);
         this._loader.doLoad();
      }
      
      private function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         this._loader.removeEventListener(MCLoadEvent.SUCCESS,this.onLoadSWFComplete);
         this._game = param1.getContent() as Sprite;
         LevelManager.stage.focus = this._game;
         LevelManager.showOrRemoveMapLevelandToolslevel(false,true);
         LevelManager.appLevel.addChild(this._game);
         this._initArgs.sendStatFun = sendStat;
         this._game["init"](this._initArgs);
         this._game.addEventListener("MiniGameClose",this.onCloseGame);
      }
      
      private function onCloseGame(param1:*) : void
      {
         var _loc2_:Array = param1.extra as Array;
         this.removeEvents();
         this._finishFun(_loc2_);
      }
      
      public function removeEvents() : void
      {
         if(this._game)
         {
            this._game.removeEventListener("MiniGameClose",this.onCloseGame);
            LevelManager.stage.frameRate = 24;
            LevelManager.showOrRemoveMapLevelandToolslevel(true);
            LevelManager.addLevel();
            DisplayUtil.removeForParent(this._game);
            this._game = null;
            this._loader.loader.unloadAndStop();
            this._loader = null;
         }
      }
   }
}
