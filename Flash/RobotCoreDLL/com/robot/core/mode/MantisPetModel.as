package com.robot.core.mode
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.utils.Direction;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.geom.Rectangle;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   import org.taomee.utils.MovieClipUtil;
   
   public class MantisPetModel extends com.robot.core.mode.ActionSpriteModel
   {
      
      public static const MAX:int = 60;
       
      
      private var _people:com.robot.core.mode.ActionSpriteModel;
      
      private var _petMc:MovieClip;
      
      private var _crtDir:String;
      
      private var _startTime:uint;
      
      private var _endTime:uint;
      
      public function MantisPetModel()
      {
         super();
         buttonMode = true;
         _speed = 3;
         this._people = MainManager.actorModel;
         this.show();
      }
      
      private function onSwitch(param1:Event) : void
      {
         this.show();
      }
      
      override public function set direction(param1:String) : void
      {
         if(param1 == null || param1 == "")
         {
            return;
         }
         if(this._petMc)
         {
            this._crtDir = param1;
            if(param1 == Direction.LEFT || param1 == Direction.LEFT_DOWN || param1 == Direction.LEFT_UP)
            {
               this._petMc["mc"].scaleX = 1;
            }
            else
            {
               this._petMc["mc"].scaleX = -1;
            }
         }
      }
      
      public function setDialogVisible(param1:Boolean) : void
      {
         if(this._petMc)
         {
            this._petMc["dialog"].play();
            this._petMc["dialog"].visible = param1;
         }
      }
      
      override public function get centerPoint() : Point
      {
         _centerPoint.x = x;
         _centerPoint.y = y - 10;
         return _centerPoint;
      }
      
      override public function get hitRect() : Rectangle
      {
         _hitRect.x = x - width / 2;
         _hitRect.y = y - height;
         _hitRect.width = width;
         _hitRect.height = height;
         return _hitRect;
      }
      
      public function show() : void
      {
         x = this._people.x + 40;
         y = this._people.y + 5;
         if(Boolean(MapManager.currentMap) && Boolean(MapManager.currentMap.depthLevel))
         {
            MapManager.currentMap.depthLevel.addChild(this);
         }
         if(!this._petMc)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("petMantis"),this.onLoad,"pet");
         }
      }
      
      private function onLoad(param1:DisplayObject) : void
      {
         this._petMc = param1 as MovieClip;
         this.initPet();
      }
      
      private function initPet() : void
      {
         if(this._people == null)
         {
            return;
         }
         this.direction = this._people.direction;
         if(this._petMc)
         {
            this._petMc.gotoAndStop(1);
            MovieClipUtil.childStop(this._petMc,1);
            addChild(this._petMc);
         }
         if(_walk.isPlaying)
         {
            this.onWalkStart(null);
         }
         this.addEvent();
         this.show();
      }
      
      public function hide() : void
      {
         this.removeEvent();
         if(this._petMc)
         {
            DisplayUtil.removeForParent(this._petMc);
            this._petMc = null;
         }
         ResourceManager.cancelURL(ClientConfig.getMapAnimate("petMantis"));
         DisplayUtil.removeForParent(this);
      }
      
      public function walkAction(param1:Object) : void
      {
         if(this._people == null)
         {
            return;
         }
         _walk.execute(this,param1,false);
      }
      
      override public function destroy() : void
      {
         super.destroy();
         this.hide();
         this._people = null;
         this._petMc = null;
      }
      
      private function addEvent() : void
      {
         addEventListener(MouseEvent.CLICK,this.onPetClickHandler);
         addEventListener(RobotEvent.WALK_START,this.onWalkStart);
         addEventListener(RobotEvent.WALK_END,this.onWalkOver);
         addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkEnterFrame);
         if(this._people.walk.isPlaying)
         {
            this._people.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onPeopleWalkEnter);
         }
         this._people.addEventListener(RobotEvent.WALK_START,this.onPeopleWalkStart);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,this.onSwitch);
      }
      
      private function removeEvent() : void
      {
         removeEventListener(MouseEvent.CLICK,this.onPetClickHandler);
         removeEventListener(RobotEvent.WALK_START,this.onWalkStart);
         removeEventListener(RobotEvent.WALK_END,this.onWalkOver);
         removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkEnterFrame);
         this._people.removeEventListener(RobotEvent.WALK_START,this.onPeopleWalkStart);
         this._people.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onPeopleWalkEnter);
         this._people.removeEventListener(RobotEvent.WALK_END,this.onPeopleWalkEnd);
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,this.onSwitch);
      }
      
      private function onWalkStart(param1:Event) : void
      {
         if(this._petMc)
         {
            this._petMc.gotoAndStop(2);
         }
      }
      
      private function onWalkEnterFrame(param1:Event) : void
      {
         if(Point.distance(pos,_walk.endP) < MAX)
         {
            stop();
         }
      }
      
      private function onWalkOver(param1:Event) : void
      {
         if(this._petMc)
         {
            this._petMc.gotoAndStop(1);
            if(this._crtDir == Direction.LEFT || this._crtDir == Direction.LEFT_DOWN || this._crtDir == Direction.LEFT_UP)
            {
               this._petMc["mc"].scaleX = 1;
            }
            else
            {
               this._petMc["mc"].scaleX = -1;
            }
         }
      }
      
      private function onPetClickHandler(param1:MouseEvent) : void
      {
         StatManager.sendStat2014("小螳螂输出","点击身边跟随萨罗德冒泡的",StatManager.RUN_ACT);
         ModuleManager.showModule(ClientConfig.getAppModule("MantisFindPanel"));
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
         if(Point.distance(pos,this._people.pos) > MAX)
         {
            if(Point.distance(pos,this._people.walk.endP) > Point.distance(this._people.pos,this._people.walk.endP))
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
      
      public function get petMc() : MovieClip
      {
         return this._petMc;
      }
   }
}
