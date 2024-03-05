package com.robot.core.manager
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ModulesToRemoveXMLInfo;
   import com.robot.core.mode.AppModel;
   import flash.events.DataEvent;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.utils.getQualifiedClassName;
   import org.taomee.ds.HashMap;
   
   public class ModuleManager
   {
      
      private static var _map:HashMap = new HashMap();
      
      private static var app:AppModel;
      
      public static const MODEL_OPEN:String = "model_open";
      
      public static const MODEL_CLOSE:String = "model_close";
      
      public static const MODEL_LOADED:String = "model_loaded";
      
      public static const MODEL_SHOW:String = "model_show";
      
      private static var openApps:Array = [];
      
      private static var _eventDispatcher:EventDispatcher = new EventDispatcher();
       
      
      public function ModuleManager()
      {
         super();
      }
      
      public static function get currentApp() : AppModel
      {
         return app;
      }
      
      public static function get moduleNum() : int
      {
         return _map.length;
      }
      
      public static function getModule(param1:String, param2:String = "") : AppModel
      {
         app = _map.getValue(param1);
         if(app)
         {
            return app;
         }
         app = new AppModel(param1,param2);
         app.setup();
         _map.add(param1,app);
         return app;
      }
      
      public static function turnModule(param1:String, param2:String = "", param3:Object = null) : void
      {
         app = _map.getValue(param1);
         if(app)
         {
            if(app.hasParent)
            {
               app.hide();
            }
            else
            {
               if(param3 != null)
               {
                  app.init(param3);
               }
               app.show();
            }
            return;
         }
         app = new AppModel(param1,param2);
         _map.add(param1,app);
         app.setup();
         if(param3 != null)
         {
            app.init(param3);
         }
         app.show();
      }
      
      public static function showModule(param1:String, param2:String = "正在打开...", param3:Object = null, param4:int = 1) : void
      {
         var _loc5_:String = (_loc5_ = param1.replace("module/com/robot/module/","")).slice(0,_loc5_.indexOf("."));
         if(ModulesToRemoveXMLInfo.checkIsModuleToRemove(_loc5_) || _loc5_.indexOf("VipTipPushPanel") != -1)
         {
            return;
         }
         if(!MapManager.isInMap)
         {
            return;
         }
         openApps.push({
            "url":param1,
            "title":param2,
            "data":param3,
            "loadingType":param4
         });
         if(openApps.length > 3)
         {
            openApps.shift();
         }
         _eventDispatcher.dispatchEvent(new DataEvent(MODEL_OPEN,false,false,param1));
         app = _map.getValue(param1);
         if(app)
         {
            if(param3 != null)
            {
               app.init(param3,param4);
            }
            app.show();
            ModuleManager.dispatchEvent(new DataEvent(ModuleManager.MODEL_SHOW,false,false,param1));
            return;
         }
         app = new AppModel(param1,param2);
         _map.add(param1,app);
         app.setup(param4);
         if(param3 != null)
         {
            app.init(param3);
         }
         app.show();
      }
      
      public static function showAppModule(param1:String, param2:Object = null, param3:int = 1) : void
      {
         showModule(ClientConfig.getAppModule(param1),"",param2,param3);
      }
      
      public static function showPrevModule() : void
      {
         var _loc1_:Object = null;
         if(openApps.length > 1)
         {
            _loc1_ = openApps.splice(openApps.length - 2,1)[0];
            showModule(_loc1_.url,_loc1_.title,_loc1_.data,_loc1_.loadingType);
         }
      }
      
      public static function hideModule(param1:String) : void
      {
         app = _map.getValue(param1);
         if(app)
         {
            app.hide();
         }
      }
      
      public static function hideAllModule() : void
      {
         _map.eachValue(function(param1:AppModel):void
         {
            param1.hide();
         });
      }
      
      public static function hasModule(param1:String) : Boolean
      {
         return _map.containsKey(param1);
      }
      
      public static function remove(param1:String) : void
      {
         _map.remove(param1);
      }
      
      public static function destroy(param1:String) : void
      {
         app = _map.remove(param1);
         if(app)
         {
            app.destroy();
            app = null;
         }
         _eventDispatcher.dispatchEvent(new DataEvent(MODEL_CLOSE,false,false,param1));
      }
      
      public static function destroyForInstance(param1:Object) : void
      {
         var _loc4_:int = 0;
         var _loc5_:int = 0;
         var _loc6_:int = 0;
         var _loc2_:String = getQualifiedClassName(param1);
         var _loc3_:uint = _loc2_.split(".").length - 1;
         if(_loc3_ == 4)
         {
            _loc5_ = 0;
            while(_loc5_ < _loc2_.length)
            {
               if(_loc2_.charAt(_loc5_) == ".")
               {
                  _loc6_++;
               }
               if(_loc6_ == 3)
               {
                  _loc4_ = _loc5_;
                  break;
               }
               _loc5_++;
            }
         }
         else
         {
            _loc4_ = _loc2_.lastIndexOf(".");
         }
         _loc2_ = _loc2_.substr(_loc4_ + 1);
         _loc2_ = _loc2_.split("::").join("/");
         if(_loc3_ == 4)
         {
            _loc2_ = _loc2_.split(".").join("/");
         }
         _loc2_ = ClientConfig.getModule(_loc2_);
         destroy(_loc2_);
      }
      
      public static function destroyAll() : void
      {
         _map.eachValue(function(param1:AppModel):void
         {
            try
            {
               param1.destroy();
            }
            catch(e:Error)
            {
            }
         });
         _map.clear();
      }
      
      public static function addEventListener(param1:String, param2:Function, param3:Boolean = false, param4:int = 0, param5:Boolean = false) : void
      {
         _eventDispatcher.addEventListener(param1,param2,param3,param4,param5);
      }
      
      public static function removeEventListener(param1:String, param2:String, param3:Function, param4:Boolean = false) : void
      {
         _eventDispatcher.removeEventListener(param1 + "_" + param2,param3,param4);
      }
      
      public static function removeListener(param1:String, param2:Function, param3:Boolean = false) : void
      {
         _eventDispatcher.removeEventListener(param1,param2,param3);
      }
      
      public static function dispatchEvent(param1:Event) : void
      {
         if(_eventDispatcher.hasEventListener(param1.type))
         {
            _eventDispatcher.dispatchEvent(param1);
         }
      }
      
      public static function hasEventListener(param1:String, param2:String) : Boolean
      {
         return _eventDispatcher.hasEventListener(param1 + "_" + param2);
      }
   }
}
