package com.robot.core.utils
{
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import org.taomee.module.IModule;
   import org.taomee.utils.DisplayUtil;
   
   public class JPanel extends Sprite implements IModule
   {
       
      
      protected var _container:MovieClip;
      
      protected var _data:Object;
      
      public function JPanel()
      {
         super();
      }
      
      public function addEvents() : void
      {
         if(this._container["closeBtn"])
         {
            (this._container["closeBtn"] as SimpleButton).addEventListener(MouseEvent.CLICK,this.onCloseHandler);
         }
      }
      
      public function removeEvents() : void
      {
         if(this._container["closeBtn"])
         {
            (this._container["closeBtn"] as SimpleButton).removeEventListener(MouseEvent.CLICK,this.onCloseHandler);
         }
      }
      
      protected function onCloseHandler(param1:MouseEvent) : void
      {
         this.hide();
      }
      
      public function setup() : void
      {
      }
      
      public function init(param1:Object = null) : void
      {
         if(!param1)
         {
            this._data = param1;
         }
      }
      
      public function show() : void
      {
         LevelManager.showOrRemoveMapLevelandToolslevel(false,true);
         LevelManager.appLevel.addChild(this._container);
         LevelManager.closeMouseEvent();
         this.addEvents();
      }
      
      public function hide() : void
      {
         LevelManager.showOrRemoveMapLevelandToolslevel(true);
         DisplayUtil.removeForParent(this._container);
         ModuleManager.destroyForInstance(this);
         LevelManager.openMouseEvent();
      }
      
      public function destroy() : void
      {
         this.removeEvents();
         this._container = null;
      }
   }
}
