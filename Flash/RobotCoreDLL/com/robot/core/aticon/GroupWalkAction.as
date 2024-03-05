package com.robot.core.aticon
{
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.UserManager;
   import com.robot.core.mode.BasePeoleModel;
   import flash.events.Event;
   import flash.geom.Point;
   import org.taomee.debug.DebugTrace;
   
   public class GroupWalkAction extends WalkAction
   {
      
      private static const MAX:Number = 60;
       
      
      private var _fronter:BasePeoleModel;
      
      private var _mine:BasePeoleModel;
      
      public function GroupWalkAction(param1:uint, param2:BasePeoleModel)
      {
         super();
         this._fronter = UserManager.getUserModel(param1) as BasePeoleModel;
         this._mine = param2;
         if(Boolean(this._fronter) && Boolean(this._mine))
         {
            this.addEvent();
         }
         else
         {
            this.removeEvent();
            DebugTrace.show("找不到队友");
         }
      }
      
      private function addEvent() : void
      {
         if(Boolean(this._fronter.sprite) && Boolean(this._mine.sprite))
         {
            this._mine.sprite.addEventListener(RobotEvent.WALK_START,this.onWalkStart);
            this._mine.sprite.addEventListener(RobotEvent.WALK_END,this.onWalkOver);
            this._mine.sprite.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkEnterFrame);
            this._fronter.sprite.addEventListener(RobotEvent.WALK_START,this.onPeopleWalkStart);
            if(this._fronter.walk.isPlaying)
            {
               this._fronter.sprite.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onPeopleWalkEnter);
            }
         }
      }
      
      private function removeEvent() : void
      {
         if(this._mine)
         {
            this._mine.sprite.removeEventListener(RobotEvent.WALK_START,this.onWalkStart);
            this._mine.sprite.removeEventListener(RobotEvent.WALK_END,this.onWalkOver);
            this._mine.sprite.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkEnterFrame);
         }
         if(this._fronter)
         {
            this._fronter.sprite.removeEventListener(RobotEvent.WALK_START,this.onPeopleWalkStart);
            this._fronter.sprite.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onPeopleWalkEnter);
         }
      }
      
      private function onWalkStart(param1:Event) : void
      {
      }
      
      private function onWalkEnterFrame(param1:Event) : void
      {
         if(Boolean(this._mine) && Boolean(this._fronter))
         {
            if(Point.distance(this._mine.pos,this._fronter.pos) < MAX)
            {
               this.removeEvent();
               this._mine.walk.stop();
            }
         }
      }
      
      private function onWalkOver(param1:Event) : void
      {
         if(this._mine)
         {
            this.removeEvent();
            this._mine.walk.stop();
         }
      }
      
      private function onPeopleWalkStart(param1:Event) : void
      {
         this._fronter.sprite.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onPeopleWalkEnter);
      }
      
      private function onPeopleWalkEnter(param1:Event) : void
      {
         var _loc2_:Array = null;
         if(this._mine)
         {
            if(Point.distance(this._mine.pos,this._fronter.pos) > MAX)
            {
               if(Point.distance(this._mine.pos,this._fronter.walk.endP) > Point.distance(this._fronter.pos,this._fronter.walk.endP))
               {
                  _loc2_ = this._fronter.walk.remData;
                  _loc2_.unshift(this._fronter.pos);
                  _loc2_.unshift(this._mine.pos);
                  this._mine.walk.execute(this._mine,_loc2_,false);
                  this._fronter.sprite.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onPeopleWalkEnter);
               }
            }
         }
      }
      
      override public function destroy() : void
      {
         super.destroy();
         this.removeEvent();
      }
   }
}
