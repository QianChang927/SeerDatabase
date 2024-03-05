package com.robot.core.pet
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.mode.ActionSpriteModel;
   import com.robot.core.ui.DialogBox;
   import com.robot.core.utils.Direction;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.Timer;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   import org.taomee.utils.MovieClipUtil;
   
   public class WalkPetModel extends ActionSpriteModel
   {
      
      private static const MAX:uint = 5;
       
      
      private var _petMc:MovieClip;
      
      private var _clickPoint:Point;
      
      private var _petID:uint;
      
      private var _pointArr:Array;
      
      private var _curtPointCnt:uint = 0;
      
      private var _timer:Timer;
      
      private var _delayTm:uint;
      
      public function WalkPetModel()
      {
         super();
         allowAimatState = false;
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
      
      public function show(param1:uint, param2:Array) : void
      {
         this._petID = param1;
         this._pointArr = param2;
         MapManager.currentMap.depthLevel.addChild(this);
         this.buttonMode = true;
         this.addEvent();
         if(this._petMc)
         {
            return;
         }
         ResourceManager.getResource(ClientConfig.getPetSwfPath(param1),this.onLoad,"pet");
      }
      
      public function hide() : void
      {
         DisplayUtil.removeForParent(this);
      }
      
      public function startWalk() : void
      {
         var _loc1_:MovieClip = null;
         if(this._petMc)
         {
            _loc1_ = this._petMc.getChildAt(0) as MovieClip;
            if(_loc1_)
            {
               if(_loc1_.currentFrame == 1)
               {
                  _loc1_.gotoAndPlay(2);
               }
            }
            this.addEvent();
            this.walkNextPoint();
         }
      }
      
      public function stopWalk() : void
      {
         if(this._petMc)
         {
            this.showEmotion();
            this.direction = Direction.DOWN;
            this.removeEvent();
            stop();
            MovieClipUtil.childStop(this._petMc,1);
         }
      }
      
      override public function destroy() : void
      {
         ResourceManager.cancel(ClientConfig.getPetSwfPath(this._petID),this.onLoad);
         super.destroy();
         this.hide();
         removeEventListener(MouseEvent.CLICK,this.onClick);
         this.removeEvent();
         if(this._petMc)
         {
            this._petMc = null;
         }
      }
      
      private function addEvent() : void
      {
         addEventListener(RobotEvent.WALK_END,this.onWalkEnd);
         addEventListener(MouseEvent.CLICK,this.onClick);
      }
      
      private function removeEvent() : void
      {
         removeEventListener(RobotEvent.WALK_END,this.onWalkEnd);
         clearTimeout(this._delayTm);
      }
      
      private function onLoad(param1:DisplayObject) : void
      {
         this._petMc = param1 as MovieClip;
         this.direction = Direction.RIGHT;
         this.addChild(this._petMc);
         this._petMc.scaleX = 2;
         this._petMc.scaleY = 2;
         this.pos = this._pointArr[Math.floor(Math.random() * this._pointArr.length)];
         this.walkNextPoint();
      }
      
      private function onWalkEnd(param1:RobotEvent) : void
      {
         if(this._petMc)
         {
            this.stopWalk();
            this._delayTm = setTimeout(this.startWalk,3000);
         }
      }
      
      private function walkNextPoint() : void
      {
         var _loc1_:Point = this._pointArr[Math.floor(Math.random() * this._pointArr.length)];
         while(_loc1_.x == this.pos.x || _loc1_.y == this.pos.y)
         {
            _loc1_ = this._pointArr[Math.floor(Math.random() * this._pointArr.length)];
         }
         _walk.execute_point(this,_loc1_,false);
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         this._clickPoint = this._petMc.localToGlobal(new Point(this._petMc.x,this._petMc.y));
         MainManager.actorModel.walkAction(this._clickPoint);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onPeopleEnterFrame);
      }
      
      private function showEmotion() : void
      {
         var _loc1_:DialogBox = new DialogBox();
         _loc1_.boxBgMC.visible = false;
         _loc1_.boxArrowMC.visible = false;
         _loc1_.show("#1",18,-22,this._petMc);
         _loc1_.scaleX = 0.4;
         _loc1_.scaleY = 0.4;
      }
      
      private function onPeopleEnterFrame(param1:Event) : void
      {
         var evt:Event = param1;
         var pp:Point = MainManager.actorModel.sprite.localToGlobal(new Point());
         if(Point.distance(pp,this._clickPoint) < 30)
         {
            MainManager.actorModel.skeleton.stop();
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onPeopleEnterFrame);
            EventManager.dispatchEvent(new Event(PetWalkController.WALK_PET_CLICK));
            EventManager.addEventListener(PetWalkController.PET_WALK,function(param1:Event):void
            {
               EventManager.removeEventListener(PetWalkController.PET_WALK,arguments.callee);
               startWalk();
            });
            this.stopWalk();
         }
      }
   }
}
