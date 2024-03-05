package com.robot.app2.control.activityHelper
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.app2.control.activityHelper.helps.SimpleHelper;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.mode.BaseModule;
   import flash.display.MovieClip;
   import flash.events.Event;
   import org.taomee.manager.EventManager;
   
   public class ActivityModel extends BaseModule
   {
       
      
      protected var _activityHelper:SimpleHelper;
      
      protected var _configUrl:String;
      
      public function ActivityModel()
      {
         super();
      }
      
      override public function show() : void
      {
         var url:String;
         var showFun:Function = super.show;
         LevelManager.closeAllMouseEvent();
         url = String(ClientConfig.getAppResource(this._configUrl,".json"));
         ActivityHelperManager.getHelper(this._configUrl).then(function(param1:SimpleHelper):Promise
         {
            _activityHelper = param1;
            eventCom.addClickEvent(_ui,onPanelClick);
            return refreshPanel(false);
         }).then(showFun).then(this.updatePanel).always(function():void
         {
            LevelManager.openMouseEvent();
            EventManager.dispatchEvent(new Event("openPanel_openMouseEvent"));
         });
      }
      
      protected function refresh() : Promise
      {
         return this.refreshPanel(true);
      }
      
      protected function refreshPanel(param1:Boolean = true) : Promise
      {
         var update:Boolean = param1;
         closeEvent();
         if(_ui == null)
         {
            return Deferred.resolve(null);
         }
         return this._activityHelper.update().then(function():void
         {
            if(_ui == null)
            {
               return;
            }
            if(update)
            {
               updatePanel();
            }
         }).always(openEvent);
      }
      
      protected function updatePanel() : void
      {
      }
      
      protected function onPanelClick(param1:*) : void
      {
      }
      
      protected function set configUrl(param1:String) : void
      {
         this._configUrl = param1;
      }
      
      protected function getValue(param1:String) : *
      {
         return this._activityHelper.getValue(param1);
      }
      
      protected function doAction(param1:String, param2:* = null) : Promise
      {
         return this._activityHelper.doAction(param1,param2);
      }
      
      protected function get _mainUI() : MovieClip
      {
         return _ui;
      }
      
      override public function destroy() : void
      {
         this._activityHelper = null;
         super.destroy();
      }
   }
}
