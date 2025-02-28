package com.robot.app.mapProcess.active
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.utils.Timer;
   import flash.utils.clearInterval;
   import flash.utils.setInterval;
   import org.taomee.debug.DebugTrace;
   import org.taomee.utils.DisplayUtil;
   
   public class BlinkYiYiActive extends PetActive
   {
       
      
      private var _showTm:uint = 14;
      
      private var _cntDownTimer:Timer;
      
      private var _intervalTimer:Timer;
      
      private var _showTimer:Timer;
      
      private var _curtTime:uint;
      
      private var _intervalTm:uint = 600000;
      
      private var _appearTm:uint = 30000;
      
      private var _showPtList:Array;
      
      private var _showItID:uint;
      
      private var _pet:MovieClip;
      
      public function BlinkYiYiActive()
      {
         this._showPtList = [new Point(80,103),new Point(110,160),new Point(26,180),new Point(130,115)];
         super();
      }
      
      public function setup(param1:uint) : void
      {
         var _loc2_:Date = new Date();
         _loc2_.setTime(param1 * 1000);
         var _loc3_:uint = _loc2_.getHours();
         if(_loc3_ == this._showTm)
         {
            this.show();
            if(_loc2_.getMinutes() % 10 == 0)
            {
               this.showPet();
            }
         }
         else
         {
            this.destroy();
         }
         if(!this._cntDownTimer)
         {
            this._cntDownTimer = new Timer(60 * 1000);
         }
         this._cntDownTimer.addEventListener(TimerEvent.TIMER,this.onCntDnTimer);
         this._cntDownTimer.start();
      }
      
      override public function show() : void
      {
         if(this._intervalTimer == null)
         {
            this._intervalTimer = new Timer(this._intervalTm);
            this._intervalTimer.addEventListener(TimerEvent.TIMER,this.onShowInterval);
            this._intervalTimer.start();
         }
         if(!this._pet)
         {
            this._pet = MapManager.currentMap.libManager.getMovieClip("UI_blinkYiyi");
         }
      }
      
      override public function hide() : void
      {
         if(this._showItID)
         {
            clearInterval(this._showItID);
         }
         if(this._pet)
         {
            this._pet.buttonMode = false;
            this._pet.removeEventListener(MouseEvent.CLICK,this.onYiyiClick);
            DisplayUtil.removeForParent(this._pet);
         }
         AimatController.removeEventListener(AimatEvent.PLAY_END,this.onAimat);
      }
      
      override public function destroy() : void
      {
         this.hide();
         if(this._cntDownTimer)
         {
            this._cntDownTimer.stop();
            this._cntDownTimer.removeEventListener(TimerEvent.TIMER,this.onCntDnTimer);
            this._cntDownTimer = null;
         }
         if(this._intervalTimer)
         {
            this._intervalTimer.stop();
            this._intervalTimer.removeEventListener(TimerEvent.TIMER,this.onShowInterval);
            this._intervalTimer = null;
         }
         if(this._showTimer)
         {
            this._showTimer.stop();
            this._showTimer.removeEventListener(TimerEvent.TIMER,this.onShowComplete);
            this._showTimer = null;
         }
         clearInterval(this._showItID);
      }
      
      private function onCntDnTimer(param1:TimerEvent) : void
      {
         var evt:TimerEvent = param1;
         var cnt:uint = uint(this._cntDownTimer.currentCount);
         if(cnt % 5 == 0)
         {
            SystemTimerManager.getSysTime(function(param1:uint):void
            {
               _curtTime = param1;
               setup(_curtTime);
            });
         }
      }
      
      private function onShowInterval(param1:TimerEvent) : void
      {
         this.showPet();
      }
      
      private function showPet() : void
      {
         if(this._showTimer == null)
         {
            this._showTimer = new Timer(this._appearTm,1);
         }
         this._showTimer.addEventListener(TimerEvent.TIMER_COMPLETE,this.onShowComplete);
         this._showTimer.reset();
         this._showTimer.start();
         if(this._showItID)
         {
            clearInterval(this._showItID);
         }
         this._showItID = setInterval(this.setPointPet,5 * 1000);
      }
      
      private function onShowComplete(param1:TimerEvent) : void
      {
         this.hide();
         DebugTrace.show("----闪光依依消失啦-----");
      }
      
      private function setPointPet() : void
      {
         var _loc1_:Point = null;
         if(this._pet)
         {
            if(Boolean(MapManager.currentMap) && MapManager.currentMap.id == 12)
            {
               MapManager.currentMap.depthLevel.addChild(this._pet);
               _loc1_ = this._showPtList[Math.floor(Math.random() * this._showPtList.length)];
               this._pet.x = _loc1_.x;
               this._pet.y = _loc1_.y;
               this._pet.gotoAndPlay(2);
               AimatController.addEventListener(AimatEvent.PLAY_END,this.onAimat);
               DebugTrace.show("----闪光依依出现啦-----位置：<" + _loc1_.x + "," + _loc1_.y + ">");
            }
         }
      }
      
      private function onAimat(param1:AimatEvent) : void
      {
         var _loc2_:AimatInfo = param1.info;
         if(_loc2_.userID == MainManager.actorID)
         {
            if(this._pet.hitTestPoint(_loc2_.endPos.x,_loc2_.endPos.y))
            {
               AimatController.removeEventListener(AimatEvent.PLAY_END,this.onAimat);
               clearInterval(this._showItID);
               this._pet.gotoAndStop(45);
               this._pet.buttonMode = true;
               this._pet.addEventListener(MouseEvent.CLICK,this.onYiyiClick);
            }
         }
      }
      
      private function onYiyiClick(param1:MouseEvent) : void
      {
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalk);
         MapManager.addEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapDown);
         MainManager.actorModel.walkAction(new Point(this._pet.x,this._pet.y));
      }
      
      private function onWalk(param1:Event) : void
      {
         if(Math.abs(Point.distance(new Point(this._pet.x,this._pet.y),MainManager.actorModel.pos)) < 30)
         {
            this.onMapDown(null);
            MainManager.actorModel.stop();
            if(MapManager.currentMap.id == 12)
            {
               FightManager.fightWithBoss("闪光依依",2);
            }
         }
      }
      
      private function onMapDown(param1:MapEvent) : void
      {
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalk);
         MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapDown);
      }
   }
}
