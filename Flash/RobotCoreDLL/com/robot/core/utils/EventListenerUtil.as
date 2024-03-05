package com.robot.core.utils
{
   import flash.events.IEventDispatcher;
   
   public class EventListenerUtil
   {
       
      
      private var mListenerList:Vector.<EventModel>;
      
      public function EventListenerUtil()
      {
         this.mListenerList = new Vector.<EventModel>();
         super();
      }
      
      public function addEventListener(param1:IEventDispatcher, param2:String, param3:Function) : void
      {
         var _loc4_:EventModel = null;
         if(param1 && param3 && param2 && param2.length > 0)
         {
            _loc4_ = new EventModel(param1,param2,param3);
            param1.addEventListener(param2,param3);
            this.mListenerList.push(_loc4_);
         }
      }
      
      public function removeEventListener(param1:IEventDispatcher, param2:String, param3:Function) : void
      {
         var _loc5_:EventModel = null;
         var _loc4_:int = int(this.mListenerList.length - 1);
         while(_loc4_ >= 0)
         {
            if(_loc5_ = this.mListenerList[_loc4_])
            {
               if(_loc5_.target == param1 && _loc5_.eventType == param2 && _loc5_.listener == param3)
               {
                  if(_loc5_.target)
                  {
                     _loc5_.target.removeEventListener(_loc5_.eventType,_loc5_.listener);
                     this.mListenerList.splice(_loc4_,1);
                  }
               }
            }
            _loc4_--;
         }
      }
      
      public function removeTargetAllEventListener(param1:IEventDispatcher) : void
      {
         var _loc3_:EventModel = null;
         var _loc2_:int = int(this.mListenerList.length - 1);
         while(_loc2_ >= 0)
         {
            _loc3_ = this.mListenerList[_loc2_];
            if(_loc3_)
            {
               if(_loc3_.target == param1)
               {
                  if(_loc3_.target)
                  {
                     _loc3_.target.removeEventListener(_loc3_.eventType,_loc3_.listener);
                  }
                  this.mListenerList.splice(_loc2_,1);
               }
            }
            _loc2_--;
         }
      }
      
      public function removeAllEventListener() : void
      {
         var _loc1_:EventModel = null;
         var _loc2_:IEventDispatcher = null;
         var _loc3_:String = null;
         var _loc4_:Function = null;
         if(this.mListenerList == null)
         {
            return;
         }
         while(this.mListenerList.length > 0)
         {
            _loc1_ = this.mListenerList.shift();
            if(_loc1_)
            {
               _loc2_ = _loc1_.target;
               _loc3_ = _loc1_.eventType;
               _loc4_ = _loc1_.listener;
               _loc2_.removeEventListener(_loc3_,_loc4_);
               _loc1_.dispose();
               _loc1_ = null;
            }
         }
      }
      
      public function dispose() : void
      {
         this.removeAllEventListener();
         this.mListenerList = null;
      }
   }
}

import flash.events.IEventDispatcher;

class EventModel
{
    
   
   public var target:IEventDispatcher;
   
   public var eventType:String;
   
   public var listener:Function;
   
   public function EventModel(param1:IEventDispatcher, param2:String, param3:Function)
   {
      super();
      this.target = param1;
      this.eventType = param2;
      this.listener = param3;
   }
   
   public function dispose() : void
   {
      this.target = null;
      this.eventType = null;
      this.listener = null;
   }
}
