package com.robot.app.extFun
{
   import com.robot.core.manager.LevelManager;
   import com.robot.core.mode.IExtFun;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.ui.Mouse;
   
   public class ExtFun_21 implements IExtFun
   {
       
      
      private var _ui:MovieClip;
      
      private var _isStart:Boolean;
      
      public function ExtFun_21()
      {
         super();
      }
      
      public function setup(param1:Sprite, param2:Object) : void
      {
         this._ui = param1 as MovieClip;
         this._ui.mouseChildren = false;
         this._ui.addEventListener(MouseEvent.MOUSE_OVER,this.onOver);
         this._ui.addEventListener(MouseEvent.MOUSE_OUT,this.onOut);
         this._ui.addEventListener(MouseEvent.MOUSE_MOVE,this.onMove);
         this._ui.addEventListener(MouseEvent.CLICK,this.onClick);
         this._isStart = false;
         this._ui.gotoAndStop(1);
         var _loc3_:uint = 0;
         while(_loc3_ < 6)
         {
            this._ui["mc_" + _loc3_].visible = false;
            _loc3_++;
         }
         Mouse.show();
         this._ui["brick"].gotoAndStop(1);
         this._ui["brick"].visible = false;
      }
      
      private function onOver(param1:MouseEvent) : void
      {
         if(this._isStart)
         {
            Mouse.hide();
            this._ui["brick"].visible = true;
         }
      }
      
      private function onOut(param1:MouseEvent) : void
      {
         if(this._isStart)
         {
            Mouse.show();
            this._ui["brick"].visible = false;
         }
      }
      
      private function onMove(param1:MouseEvent) : void
      {
         if(this._isStart)
         {
            this._ui["brick"].x = this._ui.mouseX;
            this._ui["brick"].y = this._ui.mouseY;
         }
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         var _loc2_:uint = 0;
         var _loc3_:uint = 0;
         if(this._isStart)
         {
            this._ui["brick"].gotoAndPlay(2);
            _loc2_ = 0;
            while(_loc2_ < 6)
            {
               if(this._ui["mc_" + _loc2_].hitTestPoint(LevelManager.stage.mouseX,LevelManager.stage.mouseY,true))
               {
                  if(this._ui["mc_" + _loc2_].currentFrame == 1)
                  {
                     this._ui["mc_" + _loc2_].gotoAndPlay(2);
                     return;
                  }
               }
               _loc2_++;
            }
         }
         else
         {
            this._isStart = true;
            this._ui.gotoAndStop(2);
            _loc3_ = 0;
            while(_loc3_ < 6)
            {
               this._ui["mc_" + _loc3_].visible = true;
               _loc3_++;
            }
            Mouse.hide();
            this._ui["brick"].visible = true;
            this.onMove(null);
         }
      }
      
      public function destory() : void
      {
         Mouse.show();
         this._ui.removeEventListener(MouseEvent.MOUSE_OVER,this.onOver);
         this._ui.removeEventListener(MouseEvent.MOUSE_OUT,this.onOut);
         this._ui.removeEventListener(MouseEvent.MOUSE_MOVE,this.onMove);
         this._ui.removeEventListener(MouseEvent.CLICK,this.onClick);
         this._ui = null;
      }
   }
}
