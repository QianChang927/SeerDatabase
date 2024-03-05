package com.robot.core.newloader
{
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.ui.loading.Loading;
   import com.robot.core.ui.loading.loadingstyle.ILoadingStyle;
   import flash.display.DisplayObjectContainer;
   import flash.display.Loader;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.events.IOErrorEvent;
   import flash.events.ProgressEvent;
   import flash.net.URLRequest;
   import flash.system.ApplicationDomain;
   import flash.system.LoaderContext;
   import org.taomee.debug.DebugTrace;
   
   public class MCLoader extends EventDispatcher
   {
       
      
      protected var _loadingView:ILoadingStyle;
      
      protected var autoCloseLoading:Boolean;
      
      protected var _parentContainer:DisplayObjectContainer;
      
      protected var _url:String;
      
      protected var _loader:Loader;
      
      protected var _isCurrentApp:Boolean;
      
      protected var _loadingStyle:int;
      
      protected var _loadingTitle:String;
      
      public function MCLoader(param1:String = "", param2:DisplayObjectContainer = null, param3:int = -1, param4:String = "", param5:Boolean = true, param6:Boolean = false)
      {
         super();
         this._isCurrentApp = param6;
         this._url = param1;
         this._parentContainer = param2;
         this.autoCloseLoading = param5;
         this._loader = new Loader();
         this._loader.contentLoaderInfo.addEventListener(Event.OPEN,this.openHandler);
         this._loader.contentLoaderInfo.addEventListener(Event.COMPLETE,this.initHandler);
         this._loader.contentLoaderInfo.addEventListener(IOErrorEvent.IO_ERROR,this.errorHandler);
         this._loader.contentLoaderInfo.addEventListener(ProgressEvent.PROGRESS,this.progressHandler);
         this._loadingStyle = param3;
         this._loadingTitle = param4;
         this._loadingView = Loading.getLoadingStyle(this._loadingStyle,param2,this._loadingTitle);
         this._loadingView.addEventListener(RobotEvent.CLOSE_LOADING,this.loadingCloseHandler);
      }
      
      public function setIsShowClose(param1:Boolean) : void
      {
         this._loadingView.setIsShowCloseBtn(param1);
      }
      
      public function get sharedEvents() : EventDispatcher
      {
         return this._loader.contentLoaderInfo.sharedEvents;
      }
      
      public function set loadingView(param1:ILoadingStyle) : void
      {
         this._loadingView.removeEventListener(RobotEvent.CLOSE_LOADING,this.loadingCloseHandler);
         this._loadingView.destroy();
         this._loadingView = param1;
         this._loadingView.addEventListener(RobotEvent.CLOSE_LOADING,this.loadingCloseHandler);
      }
      
      public function doLoad(param1:String = "") : void
      {
         var _loc2_:LoaderContext = new LoaderContext();
         if(this._isCurrentApp)
         {
            _loc2_.applicationDomain = ApplicationDomain.currentDomain;
         }
         if(param1 == "")
         {
            if(this._url != "")
            {
               this._loader.load(new URLRequest(this._url),_loc2_);
            }
         }
         else
         {
            this._loader.contentLoaderInfo.addEventListener(Event.OPEN,this.openHandler);
            this._loader.contentLoaderInfo.addEventListener(Event.COMPLETE,this.initHandler);
            this._loader.contentLoaderInfo.addEventListener(IOErrorEvent.IO_ERROR,this.errorHandler);
            this._loader.contentLoaderInfo.addEventListener(ProgressEvent.PROGRESS,this.progressHandler);
            this._loader.load(new URLRequest(param1),_loc2_);
         }
      }
      
      private function openHandler(param1:Event) : void
      {
         this._loadingView.show();
      }
      
      protected function initHandler(param1:Event) : void
      {
         this._loader.contentLoaderInfo.removeEventListener(Event.OPEN,this.openHandler);
         this._loader.contentLoaderInfo.removeEventListener(Event.COMPLETE,this.initHandler);
         this._loader.contentLoaderInfo.removeEventListener(IOErrorEvent.IO_ERROR,this.errorHandler);
         this._loader.contentLoaderInfo.removeEventListener(ProgressEvent.PROGRESS,this.progressHandler);
         if(this.autoCloseLoading)
         {
            this._loadingView.close();
         }
         dispatchEvent(new MCLoadEvent(MCLoadEvent.SUCCESS,this));
      }
      
      protected function errorHandler(param1:IOErrorEvent) : void
      {
         this._loader.contentLoaderInfo.removeEventListener(Event.OPEN,this.openHandler);
         this._loader.contentLoaderInfo.removeEventListener(Event.COMPLETE,this.initHandler);
         this._loader.contentLoaderInfo.removeEventListener(IOErrorEvent.IO_ERROR,this.errorHandler);
         this._loader.contentLoaderInfo.removeEventListener(ProgressEvent.PROGRESS,this.progressHandler);
         dispatchEvent(new MCLoadEvent(MCLoadEvent.ERROR,this));
         DebugTrace.show("加载出错！",this._url);
      }
      
      private function progressHandler(param1:ProgressEvent) : void
      {
         var _loc2_:Number = param1.bytesTotal;
         var _loc3_:Number = param1.bytesLoaded;
         this._loadingView.changePercent(_loc2_,_loc3_);
      }
      
      public function closeLoading() : void
      {
         if(this._loadingView)
         {
            this._loadingView.close();
         }
      }
      
      protected function loadingCloseHandler(param1:RobotEvent) : void
      {
         dispatchEvent(new MCLoadEvent(MCLoadEvent.CLOSE,this));
         this.clear();
      }
      
      public function clear() : void
      {
         try
         {
            this._loader.close();
         }
         catch(e:Error)
         {
         }
         try
         {
            this._loader.contentLoaderInfo.removeEventListener(Event.OPEN,this.openHandler);
            this._loader.contentLoaderInfo.removeEventListener(Event.COMPLETE,this.initHandler);
            this._loader.contentLoaderInfo.removeEventListener(IOErrorEvent.IO_ERROR,this.errorHandler);
            this._loader.contentLoaderInfo.removeEventListener(ProgressEvent.PROGRESS,this.progressHandler);
         }
         catch(e:Error)
         {
         }
         if(this._loadingView)
         {
            this._loadingView.destroy();
            this._loadingView.removeEventListener(RobotEvent.CLOSE_LOADING,this.loadingCloseHandler);
            this._loadingView = null;
         }
         this._parentContainer = null;
         this._loader = null;
      }
      
      public function getLoadingStyle() : ILoadingStyle
      {
         return this._loadingView;
      }
      
      public function get loader() : Loader
      {
         return this._loader;
      }
      
      public function set parentMC(param1:DisplayObjectContainer) : void
      {
         this._parentContainer = param1;
      }
      
      public function get parentMC() : DisplayObjectContainer
      {
         return this._parentContainer;
      }
   }
}
