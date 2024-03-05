package com.robot.core.mode.components
{
   import flash.display.InteractiveObject;
   import flash.events.Event;
   import flash.events.IEventDispatcher;
   import flash.events.KeyboardEvent;
   import flash.events.MouseEvent;
   import flash.utils.Dictionary;
   
   public class EventComponent implements IComponent
   {
       
      
      public var eventDic:Dictionary;
      
      private var _index:int;
      
      public function EventComponent()
      {
         super();
         this.eventDic = new Dictionary();
      }
      
      public function addClickEvent(param1:InteractiveObject, param2:Function) : void
      {
         this.addEvent(param1,MouseEvent.CLICK,param2);
      }
      
      public function addMouseOverEvent(param1:InteractiveObject, param2:Function) : void
      {
         this.addEvent(param1,MouseEvent.MOUSE_OVER,param2);
      }
      
      public function addMouseOutEvent(param1:InteractiveObject, param2:Function) : void
      {
         this.addEvent(param1,MouseEvent.MOUSE_OUT,param2);
      }
      
      public function addRollOverEvent(param1:InteractiveObject, param2:Function) : void
      {
         this.addEvent(param1,MouseEvent.ROLL_OVER,param2);
      }
      
      public function addRollOutEvent(param1:InteractiveObject, param2:Function) : void
      {
         this.addEvent(param1,MouseEvent.ROLL_OUT,param2);
      }
      
      public function addFrameEvent(param1:InteractiveObject, param2:Function) : void
      {
         this.addEvent(param1,Event.ENTER_FRAME,param2);
      }
      
      public function addKeyBoardDown(param1:InteractiveObject, param2:Function) : void
      {
         this.addEvent(param1,KeyboardEvent.KEY_DOWN,param2);
      }
      
      public function addKeyBoardUp(param1:InteractiveObject, param2:Function) : void
      {
         this.addEvent(param1,KeyboardEvent.KEY_UP,param2);
      }
      
      public function addMouseUpEvent(param1:InteractiveObject, param2:Function) : void
      {
         this.addEvent(param1,MouseEvent.MOUSE_UP,param2);
      }
      
      public function addTextFieldChangeEvent(param1:InteractiveObject, param2:Function) : void
      {
         this.addEvent(param1,Event.CHANGE,param2);
      }
      
      public function addMouseDownEvent(param1:InteractiveObject, param2:Function) : void
      {
         this.addEvent(param1,MouseEvent.MOUSE_DOWN,param2);
      }
      
      public function addMouseMoveEvent(param1:InteractiveObject, param2:Function) : void
      {
         this.addEvent(param1,MouseEvent.MOUSE_MOVE,param2);
      }
      
      public function addEvent(param1:IEventDispatcher, param2:String, param3:Function) : void
      {
         if(param1.hasEventListener(param2))
         {
            return;
         }
         ++this._index;
         param1.addEventListener(param2,param3);
         var _loc4_:Object = {
            "target":param1,
            "e":param2,
            "f":param3
         };
         this.eventDic[this._index] = _loc4_;
      }
      
      public function removeEvent(param1:IEventDispatcher, param2:String, param3:Function) : void
      {
         var _loc4_:* = undefined;
         if(param1.hasEventListener(param2))
         {
            for(_loc4_ in this.eventDic)
            {
               if(this.eventDic[_loc4_].e == param2 && this.eventDic[_loc4_].target == param1)
               {
                  this.eventDic[_loc4_].target.removeEventListener(this.eventDic[_loc4_].e,this.eventDic[_loc4_].f);
                  delete this.eventDic[_loc4_];
                  break;
               }
            }
         }
      }
      
      public function destroy() : void
      {
         var _loc1_:* = undefined;
         for each(_loc1_ in this.eventDic)
         {
            _loc1_.target.removeEventListener(_loc1_.e,_loc1_.f);
         }
         this.eventDic = null;
      }
   }
}
