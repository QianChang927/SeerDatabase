package com.robot.core.skeleton.special
{
   import com.robot.core.CommandID;
   import com.robot.core.manager.MainManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.skeleton.EmptySkeletonStrategy;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   
   public class SpecialSkeletonController
   {
      
      public static const TRANSFORM_START:String = "transform_open";
       
      
      private var _timer:Timer;
      
      private var _id:uint;
      
      private var _duration:uint;
      
      private var _isNet:Boolean;
      
      private var _people:BasePeoleModel;
      
      private var _instance:EventDispatcher;
      
      public function SpecialSkeletonController(param1:uint, param2:uint, param3:Boolean, param4:BasePeoleModel)
      {
         super();
         this._id = param1;
         this._duration = param2;
         this._isNet = param3;
         this._people = param4;
         this.addEventListener(TRANSFORM_START,this.onTransformStart);
      }
      
      public function get isNet() : Boolean
      {
         return this._isNet;
      }
      
      public function transform() : void
      {
         this._people.skeleton = new SpecialSkeleton(this._id,this);
      }
      
      private function onTransformStart(param1:Event) : void
      {
         this._people.clearOldSkeleton();
         this._people.addChild(this._people.clickMc);
         if(this._duration == 0)
         {
            return;
         }
         this._timer = new Timer(this._duration);
         this._timer.addEventListener(TimerEvent.TIMER,this.onTimer);
         this._timer.start();
      }
      
      private function onTimer(param1:TimerEvent) : void
      {
         if(this._isNet && this._people.info.userID == MainManager.actorID)
         {
            SocketConnection.send(CommandID.CHANGE_BODY_TO_PET,0);
         }
         else
         {
            this.destory(true);
         }
      }
      
      public function destory(param1:Boolean = false) : void
      {
         var _loc2_:uint = 0;
         if(this._timer)
         {
            this._timer.reset();
            this._timer.removeEventListener(TimerEvent.TIMER,this.onTimer);
            this._timer = null;
         }
         if(this._people)
         {
            _loc2_ = this._people.info.userID;
            this._people.skeleton = new EmptySkeletonStrategy();
            this._people.clearOldSkeleton();
            this._people.addChild(this._people.clickMc);
            this._people = null;
         }
         this.removeEventListener(TRANSFORM_START,this.onTransformStart);
         if((this._id == 201401 || this._id == 201402) && _loc2_ == MainManager.actorID && param1)
         {
            SocketConnection.send(CommandID.SNOW_BALL_HIT,2,0);
         }
         if(this._id == 201403 && _loc2_ == MainManager.actorID && param1)
         {
            SocketConnection.send(45531,8);
         }
      }
      
      private function getInstance() : EventDispatcher
      {
         if(this._instance == null)
         {
            this._instance = new EventDispatcher();
         }
         return this._instance;
      }
      
      public function addEventListener(param1:String, param2:Function, param3:Boolean = false, param4:int = 0, param5:Boolean = false) : void
      {
         this.getInstance().addEventListener(param1,param2,param3,param4,param5);
      }
      
      public function removeEventListener(param1:String, param2:Function, param3:Boolean = false) : void
      {
         this.getInstance().removeEventListener(param1,param2,param3);
      }
      
      public function dispatchEvent(param1:Event) : void
      {
         if(this.hasEventListener(param1.type))
         {
            this.getInstance().dispatchEvent(param1);
         }
      }
      
      public function hasEventListener(param1:String) : Boolean
      {
         return this.getInstance().hasEventListener(param1);
      }
      
      public function willTrigger(param1:String) : Boolean
      {
         return this.getInstance().willTrigger(param1);
      }
   }
}
