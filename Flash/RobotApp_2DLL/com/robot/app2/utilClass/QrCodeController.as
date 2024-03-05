package com.robot.app2.utilClass
{
   import com.robot.core.config.ClientConfig;
   import flash.display.Bitmap;
   import flash.display.Loader;
   import flash.events.Event;
   import flash.net.URLRequest;
   
   public class QrCodeController
   {
      
      private static var _gen:Object;
      
      private static var _queue:Array = [];
      
      private static var _isLoading:Boolean = false;
       
      
      public function QrCodeController()
      {
         super();
      }
      
      public static function generate(param1:String, param2:int, param3:Function) : void
      {
         _queue.push({
            "str":param1,
            "size":param2,
            "func":param3
         });
         if(_gen)
         {
            taskDispatch();
         }
         else
         {
            taskInit();
         }
      }
      
      private static function taskInit() : void
      {
         var loader:Loader = null;
         var onOver:Function = null;
         onOver = function(param1:Event):void
         {
            _gen = loader.content;
            _isLoading = false;
            taskDispatch();
         };
         if(_isLoading)
         {
            return;
         }
         loader = new Loader();
         loader.contentLoaderInfo.addEventListener(Event.COMPLETE,onOver);
         _isLoading = true;
         loader.load(new URLRequest(ClientConfig.getAppResource("update/external/QrGenerator")));
      }
      
      private static function taskDispatch() : void
      {
         if(_queue.length > 0)
         {
            taskHandle(_queue[0]);
            _queue.shift();
            taskDispatch();
         }
      }
      
      private static function taskHandle(param1:Object) : void
      {
         var _loc2_:Bitmap = _gen.generate(param1.str,param1.size);
         if(null != param1.func)
         {
            param1.func(_loc2_);
         }
      }
   }
}
