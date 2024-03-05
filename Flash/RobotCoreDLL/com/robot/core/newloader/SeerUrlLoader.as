package com.robot.core.newloader
{
   import com.robot.core.event.RobotEvent;
   import com.robot.core.ui.loading.Loading;
   import com.robot.core.ui.loading.loadingstyle.ILoadingStyle;
   import flash.events.Event;
   import flash.events.IOErrorEvent;
   import flash.events.ProgressEvent;
   import flash.net.URLLoader;
   import flash.net.URLRequest;
   import org.taomee.debug.DebugTrace;
   
   public class SeerUrlLoader
   {
      
      private static var _dataDictionary:Object = {};
       
      
      private var _loadingView:ILoadingStyle;
      
      private var _loader:URLLoader;
      
      private var _callBack:Function;
      
      private var _url:String;
      
      private var _cache:Boolean;
      
      public function SeerUrlLoader(param1:String = "", param2:int = -1, param3:Boolean = true)
      {
         super();
         this._cache = param3;
         this._loader = new URLLoader();
         this._loadingView = Loading.getLoadingStyle(param2,null,param1,false);
         this._loadingView.addEventListener(RobotEvent.CLOSE_LOADING,this.loadingCloseHandler);
      }
      
      public function doLoad(param1:String, param2:Function) : void
      {
         this._callBack = param2;
         this._url = param1;
         if(_dataDictionary[param1] != null)
         {
            this._callBack(_dataDictionary[param1]);
            this.clear();
            return;
         }
         this._loader.load(new URLRequest(param1));
         this._loader.addEventListener(Event.OPEN,this.openHandler);
         this._loader.addEventListener(Event.COMPLETE,this.initHandler);
         this._loader.addEventListener(IOErrorEvent.IO_ERROR,this.errorHandler);
         this._loader.addEventListener(ProgressEvent.PROGRESS,this.progressHandler);
      }
      
      private function errorHandler(param1:IOErrorEvent) : void
      {
         this.removeEvent();
         this.clear();
         DebugTrace.show("加载出错！");
      }
      
      private function removeEvent() : void
      {
         this._callBack = null;
         if(this._loader)
         {
            this._loader.removeEventListener(Event.OPEN,this.openHandler);
            this._loader.removeEventListener(Event.COMPLETE,this.initHandler);
            this._loader.removeEventListener(IOErrorEvent.IO_ERROR,this.errorHandler);
            this._loader.removeEventListener(ProgressEvent.PROGRESS,this.progressHandler);
         }
      }
      
      private function initHandler(param1:Event) : void
      {
         this._loadingView.close();
         var _loc2_:* = this._loader.data;
         if(this._cache)
         {
            _dataDictionary[this._url] = _loc2_;
         }
         if(null != this._callBack)
         {
            this._callBack(_loc2_);
         }
      }
      
      private function openHandler(param1:Event) : void
      {
         this._loadingView.show();
      }
      
      private function progressHandler(param1:ProgressEvent) : void
      {
         var _loc2_:Number = param1.bytesTotal;
         var _loc3_:Number = param1.bytesLoaded;
         this._loadingView.changePercent(_loc2_,_loc3_);
      }
      
      private function loadingCloseHandler(param1:RobotEvent) : void
      {
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
         this.removeEvent();
         if(this._loadingView)
         {
            this._loadingView.destroy();
            this._loadingView.removeEventListener(RobotEvent.CLOSE_LOADING,this.loadingCloseHandler);
            this._loadingView = null;
         }
         this._loader = null;
      }
      
      public function get loader() : URLLoader
      {
         return this._loader;
      }
   }
}
