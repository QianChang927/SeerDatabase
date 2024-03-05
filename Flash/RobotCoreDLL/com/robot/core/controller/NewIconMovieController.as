package com.robot.core.controller
{
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import flash.display.Loader;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.net.SharedObject;
   import flash.net.URLRequest;
   import flash.system.ApplicationDomain;
   
   public class NewIconMovieController
   {
      
      private static var _instance:com.robot.core.controller.NewIconMovieController;
       
      
      private var guideMovie:MovieClip;
      
      private var mcload:Loader;
      
      private var _domain:ApplicationDomain;
      
      private var checked:Boolean = false;
      
      public function NewIconMovieController()
      {
         super();
      }
      
      public static function getinstance() : com.robot.core.controller.NewIconMovieController
      {
         if(_instance == null)
         {
            _instance = new com.robot.core.controller.NewIconMovieController();
         }
         return _instance;
      }
      
      public function addEvent() : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,this.onSwitchMap);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,this.onSwitchMap);
      }
      
      private function onSwitchMap(param1:MapEvent) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,this.onSwitchMap);
         if(MapManager.currentMap.id != 11661 && MapManager.currentMap.id != MainManager.actorInfo.userID)
         {
            this.showGuideMovie(2);
         }
      }
      
      public function showGuideMovie(param1:int) : void
      {
         if(BitBuffSetClass.getState(24101))
         {
            return;
         }
         var _loc2_:SharedObject = _loc2_ = SOManager.getUserSO(SOManager.ACTIVITY);
         var _loc3_:String = "NewIconMovie_" + SystemTimerManager.getDateString(ClientConfig.versonTimeDate);
         if(_loc2_.data[_loc3_] == undefined)
         {
            this.loadsourece();
            _loc2_.data[_loc3_] = true;
            _loc2_.flush();
         }
         if(param1 == 1)
         {
            StatManager.sendStat2014("新版主界面引导","新手阶段玩家触发【主界面icon引导】","新主界面icon");
         }
         else if(param1 == 2)
         {
            StatManager.sendStat2014("新版主界面引导","回流阶段玩家触发【主界面icon引导】","新主界面icon");
         }
         else
         {
            StatManager.sendStat2014("新版主界面引导","活跃玩家触发【主界面icon引导】","新主界面icon");
         }
      }
      
      private function loadsourece() : void
      {
         this.mcload = new Loader();
         this.mcload.contentLoaderInfo.addEventListener(Event.COMPLETE,this.onLoad);
         this.mcload.load(new URLRequest(ClientConfig.getAppResource("update/iconPanel/movie")));
      }
      
      private function onLoad(param1:Event) : void
      {
         this.mcload.contentLoaderInfo.removeEventListener(Event.COMPLETE,this.onLoad);
         this._domain = this.mcload.contentLoaderInfo.applicationDomain;
         this.guideMovie = this.getSymbolFromLib("guideMovie");
         if(this.guideMovie)
         {
            LevelManager.stage.addChild(this.guideMovie);
            this.guideMovie.gotoAndStop(1);
            this.guideMovie.addEventListener(MouseEvent.CLICK,this.guideMovieFrameHandle);
         }
      }
      
      public function getSymbolFromLib(param1:String) : *
      {
         var _loc2_:Object = null;
         var _loc3_:Class = this._domain.getDefinition(param1) as Class;
         if(_loc3_)
         {
            _loc2_ = new _loc3_();
         }
         return _loc2_;
      }
      
      private function hideGuideMovie() : void
      {
         if(this.guideMovie)
         {
            this.guideMovie.removeEventListener(MouseEvent.CLICK,this.guideMovieFrameHandle);
            if(this.guideMovie["checkBtn"])
            {
               this.guideMovie["checkBtn"].removeEventListener(MouseEvent.CLICK,this.checkClickHandle);
            }
            if(this.guideMovie.parent)
            {
               this.guideMovie.parent.removeChild(this.guideMovie);
            }
            this.guideMovie = null;
         }
         if(this.checked)
         {
            StatManager.sendStat2014("新版主界面引导","玩家选中【不再提醒】","新主界面icon");
            BitBuffSetClass.setState(24101,1);
         }
         this.mcload = null;
         this._domain = null;
      }
      
      private function checkClickHandle(param1:MouseEvent) : void
      {
         param1.stopImmediatePropagation();
         this.checked = !this.checked;
         this.guideMovie["check"].gotoAndStop(this.checked ? 2 : 1);
      }
      
      private function guideMovieFrameHandle(param1:MouseEvent) : void
      {
         var _loc2_:int = this.guideMovie.currentFrame;
         var _loc3_:int = this.guideMovie.totalFrames;
         _loc2_++;
         this.guideMovie.gotoAndStop(_loc2_);
         if(this.guideMovie.currentFrame == _loc3_)
         {
            if(this.guideMovie["checkBtn"])
            {
               this.guideMovie["check"].gotoAndStop(1);
               this.guideMovie["checkBtn"].addEventListener(MouseEvent.CLICK,this.checkClickHandle);
            }
         }
         if(_loc2_ > _loc3_)
         {
            this.hideGuideMovie();
         }
      }
   }
}
