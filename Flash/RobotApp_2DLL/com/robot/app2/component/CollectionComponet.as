package com.robot.app2.component
{
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.mode.components.IComponent;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   import org.taomee.utils.DisplayUtil;
   
   public class CollectionComponet implements IComponent
   {
       
      
      private var _collectMc:MovieClip;
      
      private var _timer:Timer;
      
      private var _parent:DisplayObjectContainer;
      
      private var _isWalkLock:Boolean;
      
      private var _mcName:String;
      
      private var _callBack:Function;
      
      private var _clickHandle:Function;
      
      private var _collectTime:Number;
      
      private var _countDownTime:Number;
      
      private var _index:int;
      
      private var _collectionNum:int;
      
      private var _collectEnable:Boolean;
      
      private var _walkUnable:Boolean;
      
      private var _cancelBack:Function;
      
      public function CollectionComponet(param1:DisplayObjectContainer, param2:Number, param3:int, param4:Function = null, param5:Function = null, param6:String = "mc_", param7:Boolean = true, param8:Function = null)
      {
         super();
         this._parent = param1;
         this._collectTime = param2;
         this._callBack = param4;
         this._mcName = param6;
         this.isWalkLock = param7;
         this._collectionNum = param3;
         this._clickHandle = param5;
         this._cancelBack = param8;
         this._collectMc = UIManager.getMovieClip("collectMc");
         var _loc9_:int = 1;
         while(_loc9_ <= param3)
         {
            if(this._parent[this._mcName + _loc9_] is MovieClip)
            {
               this._parent[this._mcName + _loc9_].mouseChildren = false;
               this._parent[this._mcName + _loc9_].buttonMode = true;
            }
            this._parent[this._mcName + _loc9_].addEventListener(MouseEvent.CLICK,this.onClickHandle);
            _loc9_++;
         }
         this._timer = new Timer(this._collectTime / 10,10);
         this._timer.addEventListener(TimerEvent.TIMER,this.onTimer);
         this._timer.addEventListener(TimerEvent.TIMER_COMPLETE,this.onTimeOver);
         MapManager.addEventListener(MapEvent.MAP_DESTROY,this.onMapHandle);
      }
      
      private function onMapHandle(param1:MapEvent) : void
      {
         this.destroy();
      }
      
      private function onTimeOver(param1:TimerEvent) : void
      {
         this._collectMc.progressBar.gotoAndStop(100);
         this._collectMc.statusMc.gotoAndStop(2);
         SystemTimerManager.addTickFun(this.onTick);
         this._timer.reset();
         if(this.walkUnable)
         {
            MainManager.actorModel.walkEnabled = true;
         }
         if(this._callBack != null)
         {
            this._callBack(this._index);
         }
      }
      
      private function onTick() : void
      {
         SystemTimerManager.removeTickFun(this.onTick);
         DisplayUtil.removeForParent(this._collectMc);
         this.collectEnable = true;
      }
      
      private function onTimer(param1:TimerEvent) : void
      {
         this._countDownTime -= this._collectTime / 10;
         this.updateCD();
         this._collectMc.progressBar.gotoAndStop(this._collectMc.progressBar.currentFrame + 10);
      }
      
      private function updateCD() : void
      {
         if(this._countDownTime <= 0)
         {
            this._collectMc.timeTxt.text = "00:00";
            return;
         }
         var _loc1_:int = (this._countDownTime / 1000 + 1) % 60;
         var _loc2_:int = (this._countDownTime / 1000 + 1) % 3600 / 60;
         this._collectMc.timeTxt.text = this.wrapTime(_loc2_) + ":" + this.wrapTime(_loc1_);
      }
      
      private function wrapTime(param1:int) : String
      {
         if(param1 < 10)
         {
            return "0" + param1;
         }
         return param1.toString();
      }
      
      private function onClickHandle(param1:MouseEvent) : void
      {
         this._index = int(param1.currentTarget.name.replace(this._mcName,""));
         if(this._clickHandle != null)
         {
            this._clickHandle(param1);
         }
         else
         {
            this.start();
         }
      }
      
      public function start() : void
      {
         var _loc1_:MovieClip = null;
         var _loc2_:SimpleButton = null;
         if(this._timer == null)
         {
            this._timer = new Timer(this._collectTime / 10,10);
            this._timer.addEventListener(TimerEvent.TIMER,this.onTimer);
            this._timer.addEventListener(TimerEvent.TIMER_COMPLETE,this.onTimeOver);
         }
         this._collectMc.statusMc.gotoAndStop(1);
         this._collectMc.progressBar.gotoAndStop(1);
         if(this._parent[this._mcName + this._index] is MovieClip)
         {
            _loc1_ = this._parent[this._mcName + this._index] as MovieClip;
            this._collectMc.x = _loc1_.width / 2;
            this._collectMc.y = -30;
            _loc1_.addChild(this._collectMc);
         }
         else if(this._parent[this._mcName + this._index] is SimpleButton)
         {
            _loc2_ = this._parent[this._mcName + this._index] as SimpleButton;
            this._collectMc.x = _loc2_.x;
            this._collectMc.y = _loc2_.y - _loc2_.height / 2 - 30;
            this._parent.addChild(this._collectMc);
         }
         this._countDownTime = this._collectTime;
         this._collectMc.timeTxt.text = "00:00";
         this._timer.start();
         this.collectEnable = false;
         if(this.walkUnable)
         {
            MainManager.actorModel.walkEnabled = false;
         }
      }
      
      public function cancle() : void
      {
         this._timer.reset();
         SystemTimerManager.removeTickFun(this.onTick);
         DisplayUtil.removeForParent(this._collectMc);
      }
      
      protected function onWalk(param1:RobotEvent) : void
      {
         this.collectEnable = true;
         this._timer.reset();
         DisplayUtil.removeForParent(this._collectMc);
         this._index = 0;
         if(this._cancelBack != null)
         {
            this._cancelBack(this._index);
         }
      }
      
      public function set collectEnable(param1:Boolean) : void
      {
         this._collectEnable = param1;
         if(this._parent == null)
         {
            return;
         }
         var _loc2_:int = 1;
         while(_loc2_ <= this._collectionNum)
         {
            this._parent[this._mcName + _loc2_].mouseEnabled = param1;
            _loc2_++;
         }
      }
      
      public function get collectEnable() : Boolean
      {
         return this._collectEnable;
      }
      
      public function set isWalkLock(param1:Boolean) : void
      {
         if(param1)
         {
            MainManager.actorModel.sprite.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalk);
         }
         else
         {
            MainManager.actorModel.sprite.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalk);
         }
         this._isWalkLock = param1;
      }
      
      public function get isWalkLock() : Boolean
      {
         return this._isWalkLock;
      }
      
      public function set walkUnable(param1:Boolean) : void
      {
         this._walkUnable = param1;
      }
      
      public function get walkUnable() : Boolean
      {
         return this._walkUnable;
      }
      
      public function destroy() : void
      {
         var _loc1_:int = 0;
         if(this._timer != null)
         {
            this._timer.stop();
            this._timer.removeEventListener(TimerEvent.TIMER,this.onTimer);
            this._timer.removeEventListener(TimerEvent.TIMER_COMPLETE,this.onTimeOver);
            this._timer = null;
         }
         if(this._parent != null)
         {
            _loc1_ = 1;
            while(_loc1_ <= this._collectionNum)
            {
               this._parent[this._mcName + _loc1_].removeEventListener(MouseEvent.CLICK,this.onClickHandle);
               _loc1_++;
            }
            this._parent = null;
         }
         MainManager.actorModel.sprite.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalk);
         MapManager.removeEventListener(MapEvent.MAP_DESTROY,this.onMapHandle);
         DisplayUtil.removeForParent(this._collectMc);
         this._collectMc = null;
         if(this._callBack != null)
         {
            this._callBack = null;
         }
         if(this._clickHandle != null)
         {
            this._clickHandle = null;
         }
         if(this._cancelBack != null)
         {
            this._cancelBack = null;
         }
      }
   }
}
