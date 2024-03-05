package com.robot.core.controller
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.newloader.SeerUrlLoader;
   import org.taomee.ds.HashMap;
   
   public class JsonLoadControl
   {
      
      private static var _loadPromises:HashMap = new HashMap();
       
      
      public function JsonLoadControl()
      {
         super();
      }
      
      public static function loadConfig(param1:String) : Promise
      {
         var deferred:Deferred = null;
         var loader:SeerUrlLoader = null;
         var url:String = param1;
         var loadPromise:Promise = _loadPromises.getValue(url);
         if(loadPromise == null)
         {
            deferred = new Deferred();
            _loadPromises.add(url,deferred.promise);
            loadPromise = deferred.promise;
            loader = new SeerUrlLoader("加载配置文件",-1,false);
            loader.doLoad(ClientConfig.getAppResource(url,".json"),function(param1:*):void
            {
               param1 = JSON.parse(param1);
               deferred.resolve(param1);
               _loadPromises.remove(url);
            });
         }
         return loadPromise;
      }
      
      public static function getValues(param1:String, param2:String = "values") : Promise
      {
         var url:String = param1;
         var types:String = param2;
         return loadConfig(url).then(function(param1:*):Promise
         {
            var _loc3_:* = undefined;
            var _loc4_:* = undefined;
            var _loc5_:* = undefined;
            var _loc6_:* = undefined;
            var _loc7_:* = undefined;
            var _loc8_:* = undefined;
            var _loc2_:* = param1[types];
            if(null != _loc2_)
            {
               _loc3_ = new HashMap();
               _loc4_ = 0;
               while(_loc4_ < _loc2_.length)
               {
                  _loc6_ = (_loc5_ = _loc2_[_loc4_])["name"];
                  _loc7_ = _loc5_["type"];
                  _loc8_ = _loc5_["value"];
                  _loc3_.add(_loc6_,_loc8_);
                  _loc4_++;
               }
            }
            return Deferred.resolve(_loc3_);
         });
      }
   }
}
