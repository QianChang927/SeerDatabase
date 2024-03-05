package com.robot.app2.systems.mapObject.viewClass
{
   import com.robot.app2.control.EvilHadesLoginPopController;
   import com.robot.app2.systems.mapObject.MapObject;
   import com.robot.core.manager.SystemTimerManager;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   
   public class EvilHadesBtn extends MapObject
   {
       
      
      private var _mc:MovieClip;
      
      private var timeOutValue:int = 0;
      
      public function EvilHadesBtn(param1:String, param2:Number, param3:Number, param4:String = "", param5:Number = 1, param6:Boolean = false)
      {
         super(param1,param2,param3,param4,param5,param6);
      }
      
      override protected function onMouseOver(param1:Event) : void
      {
         if(this._mc)
         {
            this._mc.gotoAndStop(2);
         }
      }
      
      override protected function onMouseOut(param1:Event) : void
      {
         if(this._mc)
         {
            this._mc.gotoAndStop(1);
         }
      }
      
      override protected function onLoadView(param1:MovieClip) : void
      {
         this.addChild(param1);
         this._mc = param1;
         this.checkPlayAni();
      }
      
      private function checkPlayAni() : void
      {
         this._mc.gotoAndStop(1);
         if(SystemTimerManager.isActive(EvilHadesLoginPopController.TIME_VO))
         {
            if(this._mc.currentFrame == 1)
            {
               this._mc["mc"].play();
            }
         }
         else if(this._mc.currentFrame == 1)
         {
            this._mc.gotoAndStop(2);
         }
         this.timeOutValue = setTimeout(this.checkPlayAni,60 * 1000);
      }
      
      override public function destory() : void
      {
         clearTimeout(this.timeOutValue);
         super.destory();
      }
   }
}
