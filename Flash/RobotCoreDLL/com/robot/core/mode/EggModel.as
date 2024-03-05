package com.robot.core.mode
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.DialogBox;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.geom.Rectangle;
   import flash.utils.clearInterval;
   import flash.utils.setInterval;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   import org.taomee.utils.MovieClipUtil;
   
   public class EggModel extends com.robot.core.mode.ActionSpriteModel
   {
      
      public static const MAX:int = 40;
       
      
      private var _people:com.robot.core.mode.ActionSpriteModel;
      
      private var _petId:uint;
      
      private var _petMc:MovieClip;
      
      private var timeoutId:int;
      
      private var _startTime:uint;
      
      private var _endTime:uint;
      
      public function EggModel(param1:com.robot.core.mode.ActionSpriteModel)
      {
         super();
         buttonMode = true;
         _speed = 3;
         this._people = param1;
      }
      
      override public function set direction(param1:String) : void
      {
         if(param1 == null || param1 == "")
         {
            return;
         }
         if(this._petMc)
         {
            this._petMc.gotoAndStop(param1);
         }
      }
      
      override public function get centerPoint() : Point
      {
         _centerPoint.x = x;
         _centerPoint.y = y - 10;
         return _centerPoint;
      }
      
      public function showFace(param1:String) : void
      {
         var _loc2_:DialogBox = null;
         if(this._petMc)
         {
            _loc2_ = new DialogBox();
            _loc2_.boxBgMC.visible = false;
            _loc2_.boxArrowMC.visible = false;
            _loc2_.show(param1,18,-24,this._petMc);
         }
      }
      
      override public function get hitRect() : Rectangle
      {
         _hitRect.x = x - width / 2;
         _hitRect.y = y - height;
         _hitRect.width = width;
         _hitRect.height = height;
         return _hitRect;
      }
      
      public function show(param1:int) : void
      {
         if(param1 == -1)
         {
            return;
         }
         if(this._people == null)
         {
            return;
         }
         this._petId = param1;
         this.hide();
         x = this._people.x + 40;
         y = this._people.y + 5;
         if(Boolean(MapManager.currentMap) && Boolean(MapManager.currentMap.depthLevel))
         {
            MapManager.currentMap.depthLevel.addChild(this);
         }
         ResourceManager.getResource(ClientConfig.getResPath("appRes/2023/0526/egg_" + this._petId + ".swf"),this.onLoad,"pet");
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
            MovieClipUtil.childStop(this._petMc,1);
            addChild(this._petMc);
         }
         if(_walk.isPlaying)
         {
            this.onWalkStart(null);
         }
         this.addEvent();
      }
      
      public function showGiftIcon(param1:Boolean) : void
      {
         var boo:Boolean = param1;
         if(boo)
         {
            this.timeoutId = setInterval(function():void
            {
               showBox("$27");
            },2000);
         }
         else
         {
            clearInterval(this.timeoutId);
            this.hideBox();
         }
      }
      
      private function hideBox() : void
      {
         if(_dialogBox)
         {
            _dialogBox.destroy();
            _dialogBox = null;
         }
      }
      
      override public function showBox(param1:String, param2:Number = 0, param3:Function = null) : void
      {
         this.hideBox();
         _dialogBox = new DialogBox();
         _dialogBox.name = "dialogBox";
         _dialogBox.show(param1,0,-height + param2,this,param3);
      }
      
      public function hide() : void
      {
         clearInterval(this.timeoutId);
         this.removeEvent();
         if(this._petMc)
         {
            DisplayUtil.removeForParent(this._petMc);
            this._petMc = null;
         }
         if(this._petId != 0)
         {
            ResourceManager.cancelURL(ClientConfig.getResPath("appRes/2023/0526/egg_" + this._petId + ".swf"));
         }
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
      }
      
      private function onWalkStart(param1:Event) : void
      {
         var _loc2_:MovieClip = null;
         if(this._petMc)
         {
            _loc2_ = this._petMc.getChildAt(0) as MovieClip;
            if(_loc2_)
            {
               if(_loc2_.currentFrame == 1)
               {
                  _loc2_.gotoAndPlay(2);
               }
            }
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
            MovieClipUtil.childStop(this._petMc,1);
         }
      }
      
      private function onPetClickHandler(param1:MouseEvent) : void
      {
         ModuleManager.showAppModule("DragonEggActivitySubPanel");
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
