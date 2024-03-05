package com.robot.app.homeToolBarPanel
{
   import flash.events.Event;
   import flash.events.EventDispatcher;
   
   public class HomeToolBarContoller
   {
      
      public static const PANEL_FIGHT:String = "fight";
      
      public static const PANEL_FRIEND:String = "friend";
      
      public static const PANEL_PLANT:String = "plant";
      
      public static const PANEL_SEED:String = "seed";
      
      private static var _panel:com.robot.app.homeToolBarPanel.HomeToolBarPanel;
      
      private static var _instance:EventDispatcher;
       
      
      public function HomeToolBarContoller()
      {
         super();
      }
      
      public static function show(param1:String, param2:String, param3:Boolean = false) : void
      {
         if(_panel == null)
         {
            _panel = new com.robot.app.homeToolBarPanel.HomeToolBarPanel();
         }
         _panel.show(param1,param2,param3);
      }
      
      public static function hide() : void
      {
         if(_panel != null)
         {
            _panel.hide();
         }
      }
      
      public static function destroy() : void
      {
         if(_panel != null)
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
      
      public static function willTrigger(param1:String) : Boolean
      {
         return getInstance().willTrigger(param1);
      }
   }
}
