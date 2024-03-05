package com.robot.app.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.manager.LevelManager;
   import flash.display.Loader;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.IOErrorEvent;
   import flash.events.MouseEvent;
   import flash.events.TextEvent;
   import flash.external.ExternalInterface;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import flash.system.ApplicationDomain;
   
   public class OnlineServiceController
   {
      
      private static var _isOpen:Boolean = false;
      
      private static var _mcloader:Loader;
      
      private static var _parentMc:MovieClip;
       
      
      public function OnlineServiceController()
      {
         super();
      }
      
      public static function show() : void
      {
         if(NewSeerTaskController.isNewSeer)
         {
            return;
         }
         if(_isOpen)
         {
            return;
         }
         _isOpen = true;
         if(_parentMc == null)
         {
            _mcloader = new Loader();
            _mcloader.contentLoaderInfo.addEventListener(Event.COMPLETE,onLoadSuccess);
            _mcloader.contentLoaderInfo.addEventListener(IOErrorEvent.IO_ERROR,onLoaderError);
            _mcloader.load(new URLRequest(ClientConfig.getResPath("login/parent.swf")));
         }
         else
         {
            _parentMc["close"].addEventListener(MouseEvent.CLICK,onCloseParentMcHandler);
            _parentMc.url1.addEventListener(TextEvent.LINK,onTxtLink1);
            LevelManager.appLevel.addChild(_parentMc);
         }
      }
      
      private static function onLoadSuccess(param1:Event) : void
      {
         _mcloader.contentLoaderInfo.removeEventListener(Event.COMPLETE,onLoadSuccess);
         _mcloader.contentLoaderInfo.removeEventListener(IOErrorEvent.IO_ERROR,onLoaderError);
         var _loc2_:ApplicationDomain = _mcloader.contentLoaderInfo.applicationDomain;
         var _loc3_:Class = _loc2_.getDefinition("ui") as Class;
         _parentMc = new _loc3_();
         _parentMc["close"].addEventListener(MouseEvent.CLICK,onCloseParentMcHandler);
         _parentMc.url1.htmlText = "<u><font color=\'#ffff00\'><a href=\'event:typetext\'>http://kf.61.com/</a></font></u>";
         _parentMc.url1.addEventListener(TextEvent.LINK,onTxtLink1);
         LevelManager.appLevel.addChild(_parentMc);
      }
      
      private static function onTxtLink1(param1:TextEvent) : void
      {
         navigateToURL(new URLRequest("http://kf.61.com/"),"_blank");
      }
      
      private static function onCloseParentMcHandler(param1:MouseEvent) : void
      {
         destroy();
      }
      
      private static function onLoaderError(param1:IOErrorEvent) : void
      {
         _mcloader.contentLoaderInfo.removeEventListener(Event.COMPLETE,onLoadSuccess);
         _mcloader.contentLoaderInfo.removeEventListener(IOErrorEvent.IO_ERROR,onLoaderError);
      }
      
      public static function destroy() : void
      {
         _isOpen = false;
         if(_parentMc)
         {
            _parentMc["close"].removeEventListener(MouseEvent.CLICK,onCloseParentMcHandler);
            _parentMc.url1.removeEventListener(TextEvent.LINK,onTxtLink1);
            if(_parentMc.parent)
            {
               _parentMc.parent.removeChild(_parentMc);
            }
         }
      }
      
      public static function closeOnlineService() : void
      {
         destroy();
         if(ExternalInterface.available)
         {
            _isOpen = false;
         }
      }
   }
}
