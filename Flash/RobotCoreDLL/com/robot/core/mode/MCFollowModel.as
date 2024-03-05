package com.robot.core.mode
{
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MapManager;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.geom.Point;
   import flash.geom.Rectangle;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MCFollowModel extends com.robot.core.mode.ActionSpriteModel
   {
       
      
      private var _people:com.robot.core.mode.ActionSpriteModel;
      
      private var _url:String;
      
      private var _mc:MovieClip;
      
      private var _dis:uint;
      
      private var _height:uint;
      
      private var _currentIndex:int;
      
      public function MCFollowModel(param1:com.robot.core.mode.ActionSpriteModel)
      {
         super();
         this._people = param1;
      }
      
      override public function set direction(param1:String) : void
      {
      }
      
      public function show(param1:String, param2:uint, param3:uint = 5, param4:Boolean = false) : void
      {
         this._url = param1;
         this._dis = param2;
         _speed = param3;
         x = this._people.x + 60;
         y = this._people.y + 5;
         MapManager.currentMap.depthLevel.addChild(this);
         ResourceManager.getResource(this._url,this.onLoad,"mc");
         this.addEvent();
         if(param4)
         {
            buttonMode = true;
            mouseEnabled = true;
            mouseChildren = true;
         }
         else
         {
            buttonMode = false;
            mouseEnabled = false;
            mouseChildren = false;
         }
      }
      
      public function set currentIndex(param1:int) : void
      {
         this._currentIndex = param1;
         if(this._mc)
         {
            this._mc.gotoAndStop(this._currentIndex);
         }
      }
      
      private function onLoad(param1:DisplayObject) : void
      {
         if(this._people == null)
         {
            return;
         }
         this._mc = param1 as MovieClip;
         this._mc.gotoAndStop(this._currentIndex == 0 ? 1 : this._currentIndex);
         addChild(this._mc);
         this._height = this._mc.height;
      }
      
      public function get mcHeight() : uint
      {
         return this._height;
      }
      
      override public function get hitRect() : Rectangle
      {
         _hitRect.x = x - width / 2;
         _hitRect.y = y - height;
         _hitRect.width = width;
         _hitRect.height = height;
         return _hitRect;
      }
      
      private function addEvent() : void
      {
         addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkEnterFrame);
         this._people.addEventListener(RobotEvent.WALK_START,this.onPeopleWalkStart);
         if(this._people.walk.isPlaying)
         {
            this._people.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onPeopleWalkEnter);
         }
      }
      
      private function removeEvent() : void
      {
         removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkEnterFrame);
         this._people.removeEventListener(RobotEvent.WALK_START,this.onPeopleWalkStart);
         this._people.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onPeopleWalkEnter);
         this._people.removeEventListener(RobotEvent.WALK_END,this.onPeopleWalkEnd);
      }
      
      private function onWalkEnterFrame(param1:Event) : void
      {
         if(Point.distance(pos,_walk.endP) < this._dis)
         {
            stop();
         }
      }
      
      private function onPeopleWalkStart(param1:Event) : void
      {
         this._people.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onPeopleWalkEnter);
         this._people.addEventListener(RobotEvent.WALK_END,this.onPeopleWalkEnd);
      }
      
      private function onPeopleWalkEnter(param1:Event) : void
      {
         this.petWalk(false);
      }
      
      private function onPeopleWalkEnd(param1:Event) : void
      {
         this.petWalk(true);
         this._people.removeEventListener(RobotEvent.WALK_END,this.onPeopleWalkEnd);
      }
      
      private function petWalk(param1:Boolean = false) : void
      {
         var _loc2_:Array = null;
         if(this._mc)
         {
            if(Point.distance(pos,this._people.pos) > this._dis)
            {
               _loc2_ = this._people.walk.remData;
               _loc2_.unshift(this._people.pos);
               _loc2_.unshift(pos);
               if(param1)
               {
                  this.walkAction(this._people.pos);
               }
               else
               {
                  this.walkAction(_loc2_);
               }
               this._people.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onPeopleWalkEnter);
            }
         }
      }
      
      override public function destroy() : void
      {
         ResourceManager.cancel(this._url,this.onLoad);
         super.destroy();
         this.hide();
         this._people = null;
         if(this._mc)
         {
            this._mc = null;
         }
      }
      
      public function walkAction(param1:Object) : void
      {
         if(this._people == null)
         {
            return;
         }
         _walk.execute(this,param1,false);
      }
      
      public function hide() : void
      {
         this.removeEvent();
         DisplayUtil.removeForParent(this);
      }
   }
}
