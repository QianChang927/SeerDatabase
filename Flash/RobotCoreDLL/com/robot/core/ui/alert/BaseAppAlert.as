package com.robot.core.ui.alert
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Shape;
   import flash.events.MouseEvent;
   import org.taomee.debug.DebugTrace;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class BaseAppAlert
   {
       
      
      protected var _panel:MovieClip;
      
      private var _bgShape:Shape;
      
      private var _resName:String;
      
      private var _dragEnable:Boolean;
      
      private var _needBgBoard:Boolean;
      
      private var _content:String;
      
      public function BaseAppAlert(param1:String, param2:Boolean = true, param3:Boolean = false)
      {
         super();
         this._resName = param1;
         this._dragEnable = param2;
         this._needBgBoard = param3;
      }
      
      protected function setup(param1:String = "") : void
      {
         var content:String = param1;
         this._content = content;
         if(this._panel == null)
         {
            ResourceManager.getResource(ClientConfig.getResPath("alertPanel/" + this._resName + ".swf"),function(param1:DisplayObject):void
            {
               _panel = param1 as MovieClip;
               initial();
            },"alert");
         }
         else
         {
            this.initial();
         }
      }
      
      private function initial() : void
      {
         LevelManager.closeMouseEvent();
         if(this._needBgBoard)
         {
            this._bgShape = new Shape();
            this._bgShape.graphics.beginFill(0,0.7);
            this._bgShape.graphics.drawRect(0,0,LevelManager.stage.width,LevelManager.stage.height);
            this._bgShape.graphics.endFill();
            this._bgShape.x = 0;
            this._bgShape.y = 0;
            MainManager.getStage().addChild(this._bgShape);
         }
         MainManager.getStage().addChild(this._panel);
         this._panel.x = int(LevelManager.stage.width - this._panel.width) / 2;
         this._panel.y = int(LevelManager.stage.height - this._panel.height) / 2;
         if(this._dragEnable)
         {
            this._panel.addEventListener(MouseEvent.MOUSE_DOWN,this.onMouseDown);
            this._panel.addEventListener(MouseEvent.MOUSE_UP,this.onMouseUp);
         }
         this.addContent();
         this.addEvent();
      }
      
      private function onMouseDown(param1:MouseEvent) : void
      {
         this._panel.startDrag();
      }
      
      private function onMouseUp(param1:MouseEvent) : void
      {
         this._panel.stopDrag();
      }
      
      protected function addContent() : void
      {
         if(this._panel)
         {
            if(this._panel["txt"])
            {
               this._panel["txt"].htmlText = this._content;
            }
            else
            {
               DebugTrace.show("Error:请检查你的提示框文本元件命名是否为“txt”，或在你的继承类中改写BaseAppAlert基类方法addContent！");
            }
         }
      }
      
      protected function addEvent() : void
      {
      }
      
      protected function removeEvent() : void
      {
      }
      
      public function destroy() : void
      {
         this._panel.removeEventListener(MouseEvent.MOUSE_DOWN,this.onMouseDown);
         this._panel.removeEventListener(MouseEvent.MOUSE_UP,this.onMouseUp);
         this.removeEvent();
         LevelManager.openMouseEvent();
         DisplayUtil.removeForParent(this._bgShape);
         DisplayUtil.removeForParent(this._panel);
         this._bgShape = null;
         this._panel = null;
      }
   }
}
