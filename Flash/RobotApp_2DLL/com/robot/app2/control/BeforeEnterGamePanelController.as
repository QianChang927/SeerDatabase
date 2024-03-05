package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import flash.events.DataEvent;
   
   public class BeforeEnterGamePanelController
   {
      
      private static var _data:Array = [];
      
      private static var _switchMapCount:int = 0;
      
      public static const TYPE_MODULE:String = "module";
      
      public static const TYPE_FUN:String = "fun";
       
      
      public function BeforeEnterGamePanelController()
      {
         super();
      }
      
      public static function setup() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap);
      }
      
      private static function onSwitchMap(param1:MapEvent) : void
      {
         ++_switchMapCount;
         if(_switchMapCount >= 2)
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap);
            clear();
         }
         else
         {
            next();
         }
      }
      
      public static function next() : void
      {
         var obj:Object = null;
         var moduleString:String = null;
         var onClosePanel:Function = null;
         if(_data.length > 0)
         {
            obj = _data.shift();
            if(obj.type == TYPE_MODULE)
            {
               onClosePanel = function(param1:DataEvent):void
               {
                  var _loc2_:String = param1.data;
                  if(_loc2_ == moduleString)
                  {
                     ModuleManager.removeListener(ModuleManager.MODEL_CLOSE,onClosePanel);
                     next();
                  }
               };
               moduleString = String(ClientConfig.getAppModule(obj.param));
               ModuleManager.showModule(moduleString,"",next);
               ModuleManager.addEventListener(ModuleManager.MODEL_CLOSE,onClosePanel);
            }
            else if(obj.type == TYPE_FUN)
            {
               obj.param();
            }
         }
      }
      
      public static function clear() : void
      {
         _data = null;
      }
   }
}
