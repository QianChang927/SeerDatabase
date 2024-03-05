package com.robot.core.mode
{
   import com.robot.core.event.MoveEvent;
   import com.robot.core.mode.spriteModelAdditive.ISpriteModelAdditive;
   import com.robot.core.mode.spriteModelAdditive.PeopleBloodBar;
   import com.robot.core.mode.spriteModelAdditive.SpriteFreeze;
   import com.robot.core.utils.Direction;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.geom.Point;
   import flash.geom.Rectangle;
   import org.taomee.manager.DepthManager;
   import org.taomee.utils.DisplayUtil;
   
   public class SpriteModel extends Sprite implements ISprite
   {
       
      
      protected var _direction:String;
      
      protected var _pos:Point;
      
      protected var _centerPoint:Point;
      
      protected var _hitRect:Rectangle;
      
      private var additiveList:Array;
      
      private var _bloodBar:PeopleBloodBar;
      
      public function SpriteModel()
      {
         this._direction = Direction.DOWN;
         this._pos = new Point();
         this._centerPoint = new Point();
         this._hitRect = new Rectangle();
         this.additiveList = [];
         super();
         addEventListener(Event.ADDED_TO_STAGE,this.onAddedToStage);
      }
      
      public function set pos(param1:Point) : void
      {
         this._pos.x = param1.x;
         this._pos.y = param1.y;
         this.x = param1.x;
         this.y = param1.y;
      }
      
      public function get pos() : Point
      {
         this._pos.x = x;
         this._pos.y = y;
         return this._pos;
      }
      
      override public function set x(param1:Number) : void
      {
         super.x = param1;
         this._pos.x = param1;
         dispatchEvent(new MoveEvent(MoveEvent.MOVE,this.pos));
      }
      
      override public function set y(param1:Number) : void
      {
         super.y = param1;
         this._pos.y = param1;
         dispatchEvent(new MoveEvent(MoveEvent.MOVE,this.pos));
      }
      
      public function get sprite() : Sprite
      {
         return this;
      }
      
      public function set direction(param1:String) : void
      {
         if(param1 == null || param1 == "")
         {
            return;
         }
         this._direction = param1;
      }
      
      public function get direction() : String
      {
         return this._direction;
      }
      
      public function get centerPoint() : Point
      {
         this._centerPoint.x = x;
         this._centerPoint.y = y;
         return this._centerPoint;
      }
      
      public function get hitRect() : Rectangle
      {
         this._hitRect.x = x;
         this._hitRect.y = y;
         this._hitRect.width = width;
         this._hitRect.height = height;
         return this._hitRect;
      }
      
      public function set additive(param1:Array) : void
      {
         var _loc2_:ISpriteModelAdditive = null;
         this.removeAllAditive();
         this.additiveList = param1.slice();
         for each(_loc2_ in this.additiveList)
         {
            _loc2_.model = this;
            _loc2_.init();
            _loc2_.show();
         }
      }
      
      public function showAllAdditive() : void
      {
         var _loc1_:ISpriteModelAdditive = null;
         for each(_loc1_ in this.additiveList)
         {
            _loc1_.show();
         }
      }
      
      public function hideAllAdditive() : void
      {
         var _loc1_:ISpriteModelAdditive = null;
         for each(_loc1_ in this.additiveList)
         {
            _loc1_.hide();
         }
      }
      
      public function appendAdditive(param1:ISpriteModelAdditive) : void
      {
         this.additiveList.push(param1);
         param1.init();
      }
      
      public function removeAdditive(param1:ISpriteModelAdditive) : void
      {
         var _loc2_:int = this.additiveList.indexOf(param1);
         if(_loc2_ != -1)
         {
            param1.destroy();
            this.additiveList.splice(_loc2_,1);
         }
      }
      
      public function removeAllAditive(param1:Boolean = false) : void
      {
         var _loc2_:ISpriteModelAdditive = null;
         for each(_loc2_ in this.additiveList)
         {
            if(!param1)
            {
               if(!(_loc2_ is SpriteFreeze))
               {
                  _loc2_.destroy();
               }
            }
            else
            {
               _loc2_.destroy();
            }
         }
         this.additiveList = [];
      }
      
      public function addPos(param1:Point) : void
      {
         this._pos = this._pos.add(param1);
         this.x = this._pos.x;
         this.y = this._pos.y;
      }
      
      public function subtractPos(param1:Point) : void
      {
         this._pos = this._pos.subtract(param1);
         this.x = this._pos.x;
         this.y = this._pos.y;
      }
      
      public function destroy() : void
      {
         this.removeAllAditive();
         removeEventListener(Event.ADDED_TO_STAGE,this.onAddedToStage);
         this.removeBloodBar();
      }
      
      public function removeBloodBar() : void
      {
         if(this._bloodBar)
         {
            DisplayUtil.removeForParent(this._bloodBar);
            this._bloodBar.destroy();
            this._bloodBar = null;
         }
      }
      
      public function get bloodBar() : PeopleBloodBar
      {
         if(this._bloodBar == null)
         {
            this._bloodBar = new PeopleBloodBar();
            this._bloodBar.model = this;
            this._bloodBar.y = 30;
            addChild(this._bloodBar);
         }
         return this._bloodBar;
      }
      
      private function onAddedToStage(param1:Event) : void
      {
         removeEventListener(Event.ADDED_TO_STAGE,this.onAddedToStage);
         DepthManager.swapDepth(this,y);
      }
   }
}
