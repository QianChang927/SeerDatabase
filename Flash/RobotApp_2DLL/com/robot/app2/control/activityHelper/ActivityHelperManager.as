package com.robot.app2.control.activityHelper
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.newloader.SeerUrlLoader;
   import flash.utils.getDefinitionByName;
   import org.taomee.ds.HashMap;
   
   public class ActivityHelperManager
   {
      
      private static var _helps:HashMap = new HashMap();
      
      private static var _loadPromises:HashMap = new HashMap();
      
      private static var RE_LOAD_CONFIG:Boolean = true;
      
      {
         RE_LOAD_CONFIG = false;
      }
      
      public function ActivityHelperManager()
      {
         super();
      }
      
      public static function getHelper(param1:String) : Promise
      {
         var url:String = param1;
         var obj:IActivityHelper = _helps.getValue(url);
         if(Boolean(obj) && !RE_LOAD_CONFIG)
         {
            return Deferred.resolve(obj);
         }
         return loadConfig(url).then(function(param1:*):Promise
         {
            var _loc2_:* = param1["class"];
            if(!_loc2_)
            {
               _loc2_ = "com.robot.app2.control.activityHelper.helps.SimpleHelper";
            }
            var _loc3_:* = getDefinitionByName(_loc2_);
            var _loc4_:* = new _loc3_(param1);
            _helps.add(url,_loc4_);
            return Deferred.resolve(_loc4_);
         });
      }
      
      private static function loadConfig(param1:String) : Promise
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
   }
}
