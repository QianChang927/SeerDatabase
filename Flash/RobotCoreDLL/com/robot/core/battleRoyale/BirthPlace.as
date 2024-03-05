package com.robot.core.battleRoyale
{
   import com.robot.core.mode.BasePeoleModel;
   import flash.display.MovieClip;
   import flash.events.Event;
   
   public class BirthPlace
   {
       
      
      private var _mc:MovieClip;
      
      private var _body:BasePeoleModel;
      
      private var _isUse:Boolean;
      
      public function BirthPlace(param1:MovieClip)
      {
         super();
         this._mc = param1;
         this._isUse = false;
      }
      
      private static function unBody(param1:BasePeoleModel) : void
      {
         param1.mouseEnabled = false;
         param1.mouseChildren = false;
         BattleFightManager.stopBodyMove(param1);
      }
      
      private static function enBody(param1:BasePeoleModel) : void
      {
         param1.mouseEnabled = true;
         param1.mouseChildren = true;
         BattleFightManager.startBodyMove(param1);
      }
      
      public function inUse(param1:BasePeoleModel) : void
      {
         this._body = param1;
         this._body.x = this._mc.x;
         this._body.y = this._mc.y;
         this._isUse = true;
         unBody(this._body);
      }
      
      public function get isUse() : Boolean
      {
         return this._isUse;
      }
      
      public function birth(param1:Function = null) : void
      {
         var func:Function = param1;
         if(this._isUse)
         {
            this._mc.addEventListener(Event.ENTER_FRAME,function():void
            {
               if(_mc.totalFrames == _mc.currentFrame)
               {
                  _mc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                  _mc.gotoAndStop(1);
                  _isUse = false;
                  enBody(_body);
                  if(func != null)
                  {
                     func();
                  }
               }
            });
            this._mc.gotoAndPlay(2);
         }
      }
      
      public function get body() : BasePeoleModel
      {
         return this._body;
      }
   }
}
