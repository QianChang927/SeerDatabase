package com.robot.core.newloader
{
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.ui.loading.Loading;
   import flash.display.DisplayObjectContainer;
   import flash.display.Loader;
   import flash.events.Event;
   import flash.events.IOErrorEvent;
   import flash.events.ProgressEvent;
   import flash.net.URLRequest;
   import flash.net.URLStream;
   import flash.system.ApplicationDomain;
   import flash.system.LoaderContext;
   import flash.utils.ByteArray;
   import org.taomee.debug.DebugTrace;
   
   public class FightdllLoader extends MCLoader
   {
       
      
      private var _stream:URLStream;
      
      public function FightdllLoader(param1:String = "", param2:DisplayObjectContainer = null, param3:int = -1, param4:String = "", param5:Boolean = true, param6:Boolean = false)
      {
         super();
         _url = param1;
         _parentContainer = param2;
         this.autoCloseLoading = param5;
         this._stream = new URLStream();
         this._stream.addEventListener(Event.OPEN,this.openHandler);
         this._stream.addEventListener(Event.COMPLETE,this.onComplete);
         this._stream.addEventListener(ProgressEvent.PROGRESS,this.progressHandler);
         this._stream.addEventListener(IOErrorEvent.IO_ERROR,this.ioErrorHandler);
         _isCurrentApp = param6;
         _loader = new Loader();
         _loader.contentLoaderInfo.addEventListener(Event.COMPLETE,this.initHandler);
         _loader.contentLoaderInfo.addEventListener(IOErrorEvent.IO_ERROR,this.ioErrorHandler);
         this._loadingStyle = param3;
         this._loadingTitle = param4;
         _loadingView = Loading.getLoadingStyle(_loadingStyle,param2,_loadingTitle);
         _loadingView.addEventListener(RobotEvent.CLOSE_LOADING,loadingCloseHandler);
      }
      
      private function ioErrorHandler(param1:IOErrorEvent) : void
      {
         this._stream.removeEventListener(Event.OPEN,this.openHandler);
         this._stream.removeEventListener(Event.COMPLETE,this.onComplete);
         this._stream.removeEventListener(ProgressEvent.PROGRESS,this.progressHandler);
         this._stream.removeEventListener(IOErrorEvent.IO_ERROR,this.ioErrorHandler);
         _loader.contentLoaderInfo.removeEventListener(Event.OPEN,this.openHandler);
         _loader.contentLoaderInfo.removeEventListener(Event.COMPLETE,this.initHandler);
         _loader.contentLoaderInfo.removeEventListener(IOErrorEvent.IO_ERROR,this.ioErrorHandler);
         dispatchEvent(new MCLoadEvent(MCLoadEvent.ERROR,this));
         DebugTrace.show("加载出错！",_url);
      }
      
      override protected function initHandler(param1:Event) : void
      {
         this._stream.removeEventListener(Event.OPEN,this.openHandler);
         this._stream.removeEventListener(Event.COMPLETE,this.onComplete);
         this._stream.removeEventListener(ProgressEvent.PROGRESS,this.progressHandler);
         this._stream.removeEventListener(IOErrorEvent.IO_ERROR,this.ioErrorHandler);
         super.initHandler(param1);
      }
      
      override public function doLoad(param1:String = "") : void
      {
         var _loc2_:LoaderContext = new LoaderContext();
         if(_isCurrentApp)
         {
            _loc2_.applicationDomain = ApplicationDomain.currentDomain;
         }
         if(param1 == "")
         {
            if(_url != "")
            {
               this._stream.load(new URLRequest(_url));
            }
         }
         else
         {
            this._stream.load(new URLRequest(param1));
         }
      }
      
      override public function clear() : void
      {
         try
         {
            this._stream.close();
         }
         catch(e:Error)
         {
         }
         try
         {
            this._stream.removeEventListener(Event.OPEN,this.openHandler);
            this._stream.removeEventListener(Event.COMPLETE,this.onComplete);
            this._stream.removeEventListener(ProgressEvent.PROGRESS,this.progressHandler);
            this._stream.removeEventListener(IOErrorEvent.IO_ERROR,this.ioErrorHandler);
         }
         catch(e:Error)
         {
         }
         super.clear();
      }
      
      private function openHandler(param1:Event) : void
      {
         _loadingView.show();
      }
      
      private function progressHandler(param1:ProgressEvent) : void
      {
         var _loc2_:Number = param1.bytesTotal;
         var _loc3_:Number = param1.bytesLoaded;
         _loadingView.changePercent(_loc2_,_loc3_);
      }
      
      private function onComplete(param1:Event) : void
      {
         var _loc2_:ByteArray = new ByteArray();
         if(!MainManager.isDebug)
         {
            this._stream.readBytes(new ByteArray(),0,7);
         }
         this._stream.readBytes(_loc2_);
         if(!MainManager.isDebug)
         {
            _loc2_.uncompress();
         }
         this._stream.close();
         _loader.loadBytes(_loc2_,new LoaderContext(false,ApplicationDomain.currentDomain));
      }
   }
}
