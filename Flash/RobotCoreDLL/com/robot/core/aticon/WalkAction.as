package com.robot.core.aticon
{
   import com.robot.core.CommandID;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.mode.IActionSprite;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.Direction;
   import flash.events.Event;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import org.taomee.algo.AStar;
   import org.taomee.manager.DepthManager;
   import org.taomee.utils.GeomUtil;
   
   public class WalkAction implements IWalk
   {
      
      private static var _shared_walk_frame_event:RobotEvent = new RobotEvent(RobotEvent.WALK_ENTER_FRAME);
       
      
      private var _isPlaying:Boolean = false;
      
      protected var _obj:IActionSprite;
      
      private var _path:Array;
      
      private var _length:int;
      
      private var _currentCount:uint = 0;
      
      private var _nextNum:uint;
      
      private var _disPos:Point;
      
      private var _curPos:Point;
      
      private var _nextP:Point;
      
      private var _endP:Point;
      
      private var _speed:Number;
      
      private var _count:int;
      
      public function WalkAction()
      {
         super();
      }
      
      public function init() : void
      {
         this._isPlaying = false;
         this._path = null;
         this._length = 0;
         this._currentCount = 0;
         this._curPos = null;
         this._nextP = null;
         this._endP = null;
         this._nextNum = 0;
         this._count = 0;
      }
      
      public function get isPlaying() : Boolean
      {
         return this._isPlaying;
      }
      
      public function execute(param1:IActionSprite, param2:Object, param3:Boolean = true) : void
      {
         if(param2 is Point)
         {
            this.execute_point(param1,param2 as Point,param3);
         }
         else if(param2 is Array)
         {
            this.execute_array(param1,param2 as Array);
         }
      }
      
      public function execute_point(param1:IActionSprite, param2:Point, param3:Boolean = true) : void
      {
         var _loc5_:ByteArray = null;
         var _loc4_:Array;
         if(_loc4_ = AStar.find(param1.pos,param2))
         {
            this.init();
            this._obj = param1;
            this._path = _loc4_;
            this._length = this._path.length;
            this._endP = param2;
            if(this._length > 1)
            {
               this._path[0] = this._obj.pos;
               this.play();
               if(param3)
               {
                  (_loc5_ = new ByteArray()).writeObject(this._path);
                  SocketConnection.send(CommandID.PEOPLE_WALK,0,param2.x,param2.y,_loc5_.length,_loc5_);
               }
            }
         }
      }
      
      public function execute_array(param1:IActionSprite, param2:Array) : void
      {
         var _loc4_:Object = null;
         this.init();
         this._obj = param1;
         this._path = [];
         this._length = param2.length;
         var _loc3_:int = 0;
         while(_loc3_ < this._length)
         {
            _loc4_ = param2[_loc3_];
            this._path.push(new Point(_loc4_.x,_loc4_.y));
            _loc3_++;
         }
         this._endP = this._path[this._length - 1];
         this.play();
      }
      
      public function play() : void
      {
         this._isPlaying = true;
         this.nextFun();
         this._obj.sprite.addEventListener(Event.ENTER_FRAME,this.loop);
         this._obj.sprite.dispatchEvent(new RobotEvent(RobotEvent.WALK_START));
      }
      
      public function stop() : void
      {
         this._isPlaying = false;
         if(this._obj)
         {
            this._obj.sprite.removeEventListener(Event.ENTER_FRAME,this.loop);
            this._obj.sprite.dispatchEvent(new RobotEvent(RobotEvent.WALK_END));
         }
      }
      
      public function destroy() : void
      {
         this.stop();
         this._obj = null;
         this.init();
      }
      
      public function get remData() : Array
      {
         return this._path.slice(this._currentCount);
      }
      
      public function get endP() : Point
      {
         return this._endP;
      }
      
      private function loop(param1:Event) : void
      {
         if(!this._isPlaying)
         {
            return;
         }
         this._obj.pos = this._curPos;
         if(Point.distance(this._curPos,this._nextP) <= this._speed / 2)
         {
            if(this._nextNum >= this._length - 1)
            {
               if(this._obj.sprite.parent)
               {
                  DepthManager.swapDepth(this._obj.sprite,this._obj.sprite.y);
               }
               this.stop();
               return;
            }
            this.nextFun();
         }
         this._curPos = this._curPos.add(this._disPos);
         this.setDepth();
         this._obj.sprite.dispatchEvent(_shared_walk_frame_event);
      }
      
      private function setDepth() : void
      {
         if(this._count % 4 == 0)
         {
            if(this._obj)
            {
               if(this._obj.sprite.parent)
               {
                  DepthManager.swapDepth(this._obj.sprite,this._obj.sprite.y);
               }
            }
         }
         ++this._count;
      }
      
      private function nextFun() : void
      {
         var _loc1_:Point = null;
         this._speed = this._obj.speed;
         this._curPos = this._path[this._currentCount];
         this._nextNum = this._currentCount + 1;
         if(this._nextNum >= this._path.length)
         {
            return;
         }
         this._nextP = this._path[this._nextNum];
         var _loc2_:int = this._currentCount + 2;
         if(_loc2_ < this._length)
         {
            _loc1_ = this._path[_loc2_];
            if(Direction.getStr(this._curPos,_loc1_) != this._obj.direction)
            {
               this._obj.direction = Direction.getStr(this._curPos,this._nextP);
            }
         }
         else
         {
            this._obj.direction = Direction.getStr(this._curPos,this._nextP);
         }
         this._disPos = GeomUtil.angleSpeed(this._nextP,this._curPos);
         this._disPos.x *= this._speed;
         this._disPos.y *= this._speed;
         ++this._currentCount;
      }
   }
}
