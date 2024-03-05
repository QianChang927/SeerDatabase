package com.robot.core.mode
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.loading.loadingstyle.ILoadingStyle;
   import flash.display.Sprite;
   import flash.events.DataEvent;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import org.taomee.module.IModule;
   
   public class AppModel extends EventDispatcher
   {
      
      private static const SHOW:int = 1;
      
      private static const HIDE:int = 2;
       
      
      private var _state:int;
      
      private var _isLoading:Boolean = false;
      
      private var _url:String;
      
      private var _title:String;
      
      private var _mode:IModule;
      
      private var _data:Object;
      
      private var _event:EventDispatcher;
      
      private var _loader:MCLoader;
      
      private var _loadingView:ILoadingStyle;
      
      public function AppModel(param1:String, param2:String)
      {
         super();
         this._url = param1;
         this._title = param2;
      }
      
      public function get appLoader() : MCLoader
      {
         return this._loader;
      }
      
      public function get url() : String
      {
         return this._url;
      }
      
      public function get sharedEvents() : EventDispatcher
      {
         return this._event;
      }
      
      public function set loadingView(param1:ILoadingStyle) : void
      {
         this._loadingView = param1;
      }
      
      public function get content() : IModule
      {
         return this._mode;
      }
      
      public function setup(param1:uint = 1) : void
      {
         if(this._mode)
         {
            return;
         }
         if(this._isLoading)
         {
            return;
         }
         this._isLoading = true;
         this._loader = new MCLoader(this._url,LevelManager.appLevel,param1,this._title,false);
         if(this._loadingView)
         {
            this._loader.loadingView = this._loadingView;
            this._loadingView.setTitle(this._title);
         }
         this._loader.addEventListener(MCLoadEvent.SUCCESS,this.onLoad);
         this._loader.addEventListener(MCLoadEvent.CLOSE,this.onClose);
         this._loader.addEventListener(MCLoadEvent.ERROR,this.onError);
         this._loader.doLoad();
         this._event = this._loader.sharedEvents;
      }
      
      public function init(param1:Object = null, param2:uint = 1) : void
      {
         this._data = param1;
         if(this._mode)
         {
            this._mode.init(param1);
         }
         this.setup(param2);
      }
      
      public function show() : void
      {
         this._state = SHOW;
         if(this._mode)
         {
            this._mode.show();
         }
         this.setup();
      }
      
      public function hide() : void
      {
         this._state = HIDE;
         if(this._mode)
         {
            this._mode.hide();
         }
      }
      
      public function get hasParent() : Boolean
      {
         if(this._mode)
         {
            return (this._mode as Sprite).parent == null ? false : true;
         }
         return false;
      }
      
      public function destroy() : void
      {
         ModuleManager.remove(this._url);
         if(this._loader)
         {
            this._loader.removeEventListener(MCLoadEvent.SUCCESS,this.onLoad);
            this._loader.removeEventListener(MCLoadEvent.CLOSE,this.onClose);
            this._loader.removeEventListener(MCLoadEvent.ERROR,this.onError);
            this._loader.clear();
            this._loader = null;
         }
         if(this._mode)
         {
            this._mode.destroy();
            this._mode = null;
         }
         this._data = null;
         this._event = null;
      }
      
      private function onLoad(param1:MCLoadEvent) : void
      {
         var _loc2_:String = null;
         var _loc3_:String = null;
         var _loc4_:String = null;
         if(!this._mode && param1.getContent() is BaseModule)
         {
            this._mode = param1.getContent() as IModule;
            if(this._data != null)
            {
               this._mode.init(this._data);
            }
            _loc2_ = (this._mode as BaseModule).resUrl;
            if(!_loc2_ || _loc2_ == "")
            {
               _loc2_ = (_loc4_ = String(this._url.split("?")[0].replace("module/com/robot/module/app/",""))).replace(".swf","");
            }
            _loc3_ = _loc2_;
            if(_loc2_.indexOf(ClientConfig.resURL) == -1)
            {
               _loc3_ = ClientConfig.getAppResource(_loc2_);
            }
            this._loader.doLoad(_loc3_);
         }
         else if(Boolean(this._mode) && this._mode is BaseModule)
         {
            (this._mode as BaseModule).initResource(param1);
            this.clearLoader();
            this._mode.setup();
            if(this._state == SHOW)
            {
               this._mode.show();
               ModuleManager.dispatchEvent(new DataEvent(ModuleManager.MODEL_SHOW,false,false,this.url));
            }
            dispatchEvent(new Event(Event.COMPLETE));
            ModuleManager.dispatchEvent(new DataEvent(ModuleManager.MODEL_LOADED,false,false,this.url));
         }
         else
         {
            this._mode = param1.getContent() as IModule;
            this.clearLoader();
            this._mode.setup();
            if(this._data != null)
            {
               this._mode.init(this._data);
            }
            if(this._state == SHOW)
            {
               this._mode.show();
               ModuleManager.dispatchEvent(new DataEvent(ModuleManager.MODEL_SHOW,false,false,this.url));
            }
            dispatchEvent(new Event(Event.COMPLETE));
            ModuleManager.dispatchEvent(new DataEvent(ModuleManager.MODEL_LOADED,false,false,this.url));
         }
      }
      
      private function onClose(param1:MCLoadEvent) : void
      {
         this._isLoading = false;
         this.destroy();
         dispatchEvent(new Event(Event.CLOSE));
      }
      
      private function clearLoader() : void
      {
         this._loader.removeEventListener(MCLoadEvent.SUCCESS,this.onLoad);
         this._loader.removeEventListener(MCLoadEvent.CLOSE,this.onClose);
         this._loader.removeEventListener(MCLoadEvent.ERROR,this.onError);
         this._isLoading = false;
         this._loader.clear();
      }
      
      private function onError(param1:MCLoadEvent) : void
      {
         this.onClose(param1);
         if(MainManager.isDebug)
         {
            Alarm.show("面板" + this.url + "不存在");
         }
      }
   }
}
