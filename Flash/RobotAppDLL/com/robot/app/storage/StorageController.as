package com.robot.app.storage
{
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import org.taomee.utils.DisplayUtil;
   
   public class StorageController
   {
      
      private static var _panel:com.robot.app.storage.StoragePanel;
      
      public static var isTab3:Boolean;
      
      private static var _instance:EventDispatcher;
       
      
      public function StorageController()
      {
         super();
      }
      
      public static function get panel() : com.robot.app.storage.StoragePanel
      {
         if(_panel == null)
         {
            _panel = new com.robot.app.storage.StoragePanel();
         }
         return _panel;
      }
      
      public static function get isTween() : Boolean
      {
         return panel.isTween;
      }
      
      public static function show() : void
      {
         if(DisplayUtil.hasParent(panel))
         {
            panel.hide();
         }
         else
         {
            panel.show();
         }
      }
      
      public static function hide() : void
      {
         if(_panel == null)
         {
            return;
         }
         if(DisplayUtil.hasParent(panel))
         {
            panel.hide();
         }
      }
      
      public static function destroy() : void
      {
         if(_panel)
         {
            _panel.destroy();
            _panel = null;
         }
      }
      
      private static function getInstance() : EventDispatcher
      {
         if(_instance == null)
         {
            _instance = new EventDispatcher();
         }
         return _instance;
      }
      
      public static function addEventListener(param1:String, param2:Function, param3:Boolean = false, param4:int = 0, param5:Boolean = false) : void
      {
         getInstance().addEventListener(param1,param2,param3,param4,param5);
      }
      
      public static function removeEventListener(param1:String, param2:Function, param3:Boolean = false) : void
      {
         getInstance().removeEventListener(param1,param2,param3);
      }
      
      public static function dispatchEvent(param1:Event) : void
      {
         if(hasEventListener(param1.type))
         {
            getInstance().dispatchEvent(param1);
         }
      }
      
      public static function hasEventListener(param1:String) : Boolean
      {
         return getInstance().hasEventListener(param1);
      }
   }
}
