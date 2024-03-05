package com.robot.app.petRoayle.ui
{
   import com.robot.app.petRoayle.PetRoayleInfo;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   import gs.TweenLite;
   
   public class FightInfoMC
   {
      
      private static const LEFT_X:int = -155;
      
      private static const RIGHT_X:int = 64;
      
      private static var _seconds:int = 300;
       
      
      private var _btn:MovieClip;
      
      private var _panel:MovieClip;
      
      private var _items:Sprite;
      
      private var _itemCls:Class;
      
      private var _timer:Timer;
      
      public function FightInfoMC()
      {
         super();
         this._timer = new Timer(1000);
         _seconds = 300;
         this._timer.addEventListener(TimerEvent.TIMER,this.onTimer);
      }
      
      private function onBtnClick(param1:MouseEvent) : void
      {
         if(this._btn["mc"].currentFrame == 1)
         {
            this._btn["mc"].gotoAndStop(2);
            TweenLite.to(this._panel,1,{"x":RIGHT_X});
         }
         else
         {
            this._btn["mc"].gotoAndStop(1);
            TweenLite.to(this._panel,1,{"x":LEFT_X});
         }
      }
      
      private function onTimer(param1:TimerEvent) : void
      {
         --_seconds;
         this.updateTimerTxt();
      }
      
      private function updateTimerTxt() : void
      {
         var _loc1_:int = 0;
         var _loc2_:int = 0;
         if(this._panel)
         {
            _loc1_ = _seconds / 60;
            _loc2_ = _seconds % 60;
            if(_seconds <= 0)
            {
               this._panel["timeTxt"].text = "0:00";
            }
            else
            {
               this._panel["timeTxt"].text = _loc1_ + ":" + (_loc2_ < 10 ? "0" + _loc2_ : _loc2_);
            }
         }
      }
      
      public function initMC(param1:MovieClip, param2:Class) : void
      {
         this._btn = param1["btn"];
         this._btn.buttonMode = true;
         this._btn.addEventListener(MouseEvent.CLICK,this.onBtnClick);
         this._panel = param1["panel"];
         this._items = new Sprite();
         this._items.x = 0;
         this._items.y = 52;
         this._panel.addChild(this._items);
         this._itemCls = param2;
      }
      
      public function restoreMC() : void
      {
         if(this._btn)
         {
            this._btn.removeEventListener(MouseEvent.CLICK,this.onBtnClick);
            this._panel = null;
            this._btn = null;
            this._items = null;
            this._itemCls = null;
         }
      }
      
      public function show(param1:Array, param2:Boolean = false) : void
      {
         var _loc3_:MovieClip = null;
         var _loc5_:PetRoayleInfo = null;
         var _loc4_:int = 0;
         if(this._panel)
         {
            while(this._items.numChildren > 0)
            {
               this._items.removeChildAt(0);
            }
            param1.sortOn("killNum",Array.NUMERIC | Array.DESCENDING);
            for each(_loc5_ in param1)
            {
               _loc3_ = new this._itemCls() as MovieClip;
               _loc3_["nickName"].text = _loc5_.nick;
               _loc3_["killNum"].text = String(_loc5_.killNum);
               _loc3_.y = _loc4_++ * 20;
               this._items.addChild(_loc3_);
            }
         }
         if(param2)
         {
            this._timer.start();
            this.updateTimerTxt();
         }
      }
      
      public function destroy() : void
      {
         this.restoreMC();
         if(this._timer)
         {
            this._timer.stop();
            this._timer.removeEventListener(TimerEvent.TIMER,this.onTimer);
            this._timer;
         }
      }
   }
}
