package com.robot.app.task.petstory.app
{
   import com.robot.core.manager.MapManager;
   import com.robot.core.mode.OgreModel;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.utils.Timer;
   import org.taomee.utils.MathUtil;
   
   public class WalkOgreModel extends OgreModel
   {
       
      
      public var isAuto:Boolean = false;
      
      private var _dialogsList:Array;
      
      private var _timer:Timer;
      
      public var isSpeak:Boolean = true;
      
      public function WalkOgreModel(param1:uint, param2:Array = null)
      {
         super(param1);
         this.buttonMode = true;
         this._dialogsList = param2;
         this._timer = new Timer(this.getRandomNum());
         this._timer.addEventListener(TimerEvent.TIMER,this.onTimer);
      }
      
      override protected function onAutoWalk() : void
      {
         if(this.isAuto)
         {
            if(!MapManager.isInMap)
            {
               return;
            }
            if(_walk)
            {
               _walk.execute(this,new Point(_autoRect.x + _autoRect.width * Math.random(),_autoRect.y + _autoRect.height * Math.random()),false);
            }
            if(this._dialogsList)
            {
               this._timer.start();
            }
         }
      }
      
      override public function showBox(param1:String, param2:Number = 0, param3:Function = null) : void
      {
         if(this.isSpeak)
         {
            super.showBox(param1,param2,param3);
         }
      }
      
      private function onTimer(param1:TimerEvent) : void
      {
         this.showBox(this._dialogsList[int(Math.random() * this._dialogsList.length)]);
         this._timer.delay = this.getRandomNum();
      }
      
      private function getRandomNum() : uint
      {
         return uint(MathUtil.clamp(Math.random() * 15,4,15) * 1000);
      }
      
      public function walk2Point(param1:Point) : void
      {
         _walk.execute(this,param1,false);
      }
      
      override public function destroy() : void
      {
         super.destroy();
         if(this._timer)
         {
            this._timer.stop();
            this._timer.removeEventListener(TimerEvent.TIMER,this.onTimer);
            this._timer = null;
         }
         this._dialogsList = null;
      }
   }
}
