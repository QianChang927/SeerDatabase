package com.robot.app2.utilClass
{
   import com.robot.app.task.petstory.util.EventListenerManager;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import org.taomee.ds.HashSet;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.module.IModule;
   import org.taomee.utils.DisplayUtil;
   
   public class AbstractModule extends Sprite implements IModule
   {
       
      
      private var _tipObjs:HashSet;
      
      protected var _eventListenerManager:EventListenerManager;
      
      protected var _mainUI:MovieClip;
      
      protected var _isRmoveScene:Boolean = false;
      
      public function AbstractModule()
      {
         super();
         this._eventListenerManager = new EventListenerManager();
      }
      
      protected function addMoudleEvent(param1:*, param2:String, param3:Function) : void
      {
         this._eventListenerManager.addEventListener(param1,param2,param3);
      }
      
      protected function removeMoudleEvent(param1:*, param2:String = null, param3:Function = null) : void
      {
         this._eventListenerManager.removeEventListener(param1,param2,param3);
      }
      
      public function setup() : void
      {
         throw new Error("need override");
      }
      
      public function init(param1:Object = null) : void
      {
      }
      
      protected function refreshView() : void
      {
      }
      
      public function show() : void
      {
         LevelManager.appLevel.addChild(this._mainUI);
         if(null != this._mainUI["close_btn"])
         {
            this.addMoudleEvent(this._mainUI["close_btn"],MouseEvent.CLICK,this.onClose);
         }
         if(this._isRmoveScene)
         {
            LevelManager.showOrRemoveMapLevelandToolslevel(false,true);
         }
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,this.onMapChange);
         this.layout();
         this.refreshView();
      }
      
      private function onMapChange(param1:*) : void
      {
         this.hide();
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,this.onMapChange);
      }
      
      protected function onClose(param1:*) : void
      {
         this.hide();
      }
      
      public function hide() : void
      {
         if(this._isRmoveScene)
         {
            LevelManager.showOrRemoveMapLevelandToolslevel(true);
         }
         DisplayUtil.removeForParent(this._mainUI);
         ModuleManager.destroyForInstance(this);
      }
      
      public function destroy() : void
      {
         if(this._eventListenerManager)
         {
            this._eventListenerManager.clear();
            this._eventListenerManager = null;
         }
         this.clearTips();
         DisplayUtil.removeForParent(this._mainUI);
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,this.onMapChange);
         this._mainUI = null;
      }
      
      public function addModuleTip(param1:InteractiveObject, param2:String) : void
      {
         ToolTipManager.add(param1,param2);
         if(null == this._tipObjs)
         {
            this._tipObjs = new HashSet();
         }
         this._tipObjs.add(param1);
      }
      
      protected function clearTips() : void
      {
         var _loc2_:InteractiveObject = null;
         if(this._tipObjs == null)
         {
            return;
         }
         var _loc1_:Array = this._tipObjs.toArray();
         for each(_loc2_ in _loc1_)
         {
            ToolTipManager.remove(_loc2_);
            this._tipObjs.remove(_loc2_);
         }
         this._tipObjs.clear();
         this._tipObjs = null;
      }
      
      protected function closeEvent() : void
      {
         if(this._mainUI != null)
         {
            this._mainUI.mouseChildren = this._mainUI.mouseEnabled = false;
         }
      }
      
      protected function openEvent() : void
      {
         if(this._mainUI != null)
         {
            this._mainUI.mouseChildren = this._mainUI.mouseEnabled = true;
         }
      }
      
      protected function layout() : void
      {
         this._mainUI.x = (LevelManager.stage.stageWidth - this._mainUI.width) / 2;
         this._mainUI.y = (LevelManager.stage.stageHeight - this._mainUI.height) / 2;
      }
   }
}
