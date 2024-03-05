package com.robot.app2.component
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.mode.components.IComponent;
   import flash.display.MovieClip;
   import flash.events.Event;
   
   public class McSkipDrawComponet implements IComponent
   {
       
      
      private var _parent:MovieClip;
      
      private var _mcCount:uint;
      
      private var _callBack:Function;
      
      private var _isChoice:Boolean;
      
      private var _mcName:String;
      
      private var _delay:int;
      
      private var _index:int;
      
      private var _showArr:Array;
      
      private var _giftMark:int;
      
      private var tween:Boolean = false;
      
      private var _bitValue:uint;
      
      private var _choiceFrame:uint;
      
      public function McSkipDrawComponet(param1:MovieClip, param2:uint, param3:Function, param4:Boolean = false, param5:String = "mc_", param6:int = 2)
      {
         super();
         this._parent = param1;
         this._mcCount = param2;
         this._callBack = param3;
         this._isChoice = param4;
         this._mcName = param5;
         this._showArr = [];
         this._choiceFrame = param6;
         var _loc7_:int = 0;
         while(_loc7_ < this._mcCount)
         {
            this._parent[this._mcName + _loc7_].gotoAndStop(1);
            _loc7_++;
         }
      }
      
      private static function openMouseEnabled() : void
      {
         LevelManager.openMouseEvent();
         LevelManager.appLevel.mouseEnabled = true;
         LevelManager.appLevel.mouseChildren = true;
      }
      
      private static function closeMouseEnabled() : void
      {
         LevelManager.closeMouseEvent();
         LevelManager.appLevel.mouseEnabled = false;
         LevelManager.appLevel.mouseChildren = false;
      }
      
      public function set showArr(param1:Array) : void
      {
         this._showArr = param1;
      }
      
      public function start(param1:int, param2:uint = 0) : void
      {
         this._giftMark = param1;
         this._bitValue = param2;
         this.initSkipArr();
         this.showAnimte();
         closeMouseEnabled();
      }
      
      private function initSkipArr() : void
      {
         if(this._showArr.length > 0)
         {
            return;
         }
         var _loc1_:int = 0;
         while(_loc1_ < this._mcCount)
         {
            if(KTool.getBit(this._bitValue,_loc1_ + 1) == 0)
            {
               this._showArr.push(this._parent[this._mcName + _loc1_]);
            }
            else if(this._isChoice)
            {
               this._parent[this._mcName + _loc1_].gotoAndStop(this._choiceFrame);
            }
            else
            {
               this._parent[this._mcName + _loc1_].gotoAndStop(1);
            }
            _loc1_++;
         }
      }
      
      private function showAnimte() : void
      {
         this._parent.addEventListener(Event.ENTER_FRAME,this.onFrame);
         this._delay = 0;
         this._index = -1;
      }
      
      private function onFrame(param1:Event) : void
      {
         ++this._delay;
         if(this._delay % 3 == 0)
         {
            if(this._index != -1)
            {
               this._showArr[this._index].gotoAndStop(1);
            }
            ++this._index;
            if(this._index == this._showArr.length)
            {
               this._index = 0;
               this.tween = true;
            }
            this._showArr[this._index].gotoAndStop(2);
            if(this._parent[this._mcName + this._giftMark] == this._showArr[this._index] && this.tween)
            {
               this._parent.removeEventListener(Event.ENTER_FRAME,this.onFrame);
               this.tween = false;
               this._showArr.length = 0;
               openMouseEnabled();
               if(this._callBack != null)
               {
                  this._callBack();
               }
            }
         }
      }
      
      public function destroy() : void
      {
         this._showArr.length = 0;
         this._parent = null;
         this._callBack = null;
      }
   }
}
