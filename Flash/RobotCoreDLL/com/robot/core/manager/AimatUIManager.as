package com.robot.core.manager
{
   import com.robot.core.config.ClientConfig;
   import flash.display.Loader;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.media.Sound;
   import flash.net.URLRequest;
   import org.taomee.ds.HashMap;
   import org.taomee.utils.Utils;
   
   public class AimatUIManager
   {
      
      private static var _hash:HashMap = new HashMap();
      
      private static var _loading:Boolean = false;
      
      private static var _info:Array = [];
      
      private static var _currentInfo:AimatUiInfo;
       
      
      public function AimatUIManager()
      {
         super();
      }
      
      public static function load(param1:uint, param2:Function) : void
      {
         var _loc3_:AimatUiInfo = null;
         if(_hash.containsKey(param1))
         {
            param2();
         }
         else
         {
            _loc3_ = new AimatUiInfo(param1,param2);
            _info.push(_loc3_);
            startLoader();
         }
      }
      
      private static function startLoader() : void
      {
         if(_info.length <= 0)
         {
            return;
         }
         if(_loading)
         {
            return;
         }
         _loading = true;
         _currentInfo = _info.shift();
         _currentInfo.loader = new Loader();
         _currentInfo.loader.contentLoaderInfo.addEventListener(Event.COMPLETE,onComplete);
         _currentInfo.loader.load(new URLRequest(ClientConfig.getResPath("aimat/" + _currentInfo.id + ".swf")));
      }
      
      private static function onComplete(param1:Event) : void
      {
         _currentInfo.loader.contentLoaderInfo.removeEventListener(Event.COMPLETE,arguments.callee);
         _hash.add(_currentInfo.id,_currentInfo.loader);
         _currentInfo.fun();
         _currentInfo = null;
         _loading = false;
         startLoader();
      }
      
      public static function getSound(param1:uint, param2:String) : Sound
      {
         var _loc3_:Loader = _hash.getValue(param1);
         return Utils.getSoundFromLoader(param2,_loc3_);
      }
      
      public static function getMovieClip(param1:uint, param2:String) : MovieClip
      {
         var _loc3_:Loader = _hash.getValue(param1);
         return Utils.getMovieClipFromLoader(param2,_loc3_);
      }
   }
}

import flash.display.Loader;

class AimatUiInfo
{
    
   
   public var id:uint;
   
   public var fun:Function;
   
   public var loader:Loader;
   
   public function AimatUiInfo(param1:uint, param2:Function)
   {
      super();
      this.id = param1;
      this.fun = param2;
   }
}
