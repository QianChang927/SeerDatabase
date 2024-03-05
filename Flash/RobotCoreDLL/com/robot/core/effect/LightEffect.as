package com.robot.core.effect
{
   import com.oaxoa.fx.Lightning;
   import com.oaxoa.fx.LightningFadeType;
   import com.robot.core.manager.LevelManager;
   import flash.display.BlendMode;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.events.TimerEvent;
   import flash.filters.GlowFilter;
   import flash.geom.Point;
   import flash.utils.Timer;
   import org.taomee.utils.DisplayUtil;
   
   public class LightEffect extends EventDispatcher
   {
      
      public static const LIGHT_OVER:String = "lightOver";
       
      
      private var timer:Timer;
      
      private var ll:Lightning;
      
      public function LightEffect()
      {
         super();
         this.timer = new Timer(1500,1);
         this.timer.addEventListener(TimerEvent.TIMER,this.onTimer);
      }
      
      public function show(param1:Point, param2:Point, param3:Boolean = true, param4:uint = 16777215, param5:uint = 16777215, param6:Number = 1.8) : Sprite
      {
         var _loc8_:Number = NaN;
         this.ll = new Lightning(param4,2);
         this.ll.blendMode = BlendMode.ADD;
         this.ll.childrenDetachedEnd = false;
         this.ll.childrenLifeSpanMin = 0.1;
         this.ll.childrenLifeSpanMax = 2;
         this.ll.childrenMaxCount = 3;
         this.ll.childrenMaxCountDecay = 0.5;
         this.ll.steps = 350;
         this.ll.wavelength = 0.36;
         this.ll.amplitude = 0.76;
         if(param3)
         {
            _loc8_ = Point.distance(param1,param2);
            this.ll.maxLength = _loc8_ * (2 / 3);
            this.ll.maxLengthVary = _loc8_ * (1.5 / 3);
         }
         this.ll.startX = param1.x;
         this.ll.startY = param1.y;
         this.ll.endX = param2.x;
         this.ll.endY = param2.y;
         this.ll.alphaFadeType = LightningFadeType.GENERATION;
         var _loc7_:GlowFilter;
         (_loc7_ = new GlowFilter(param5)).strength = param6;
         _loc7_.quality = 3;
         _loc7_.blurX = _loc7_.blurY = 10;
         this.ll.filters = [_loc7_];
         LevelManager.mapLevel.addChild(this.ll);
         this.ll.childrenProbability = 0.3;
         this.ll.addEventListener(Event.ENTER_FRAME,this.onEnter);
         this.timer.start();
         return this.ll;
      }
      
      private function onTimer(param1:TimerEvent) : void
      {
         this.timer.stop();
         this.timer.removeEventListener(TimerEvent.TIMER,this.onTimer);
         this.timer = null;
         this.ll.kill();
         this.ll.removeEventListener(Event.ENTER_FRAME,this.onEnter);
         DisplayUtil.removeForParent(this.ll);
         this.ll = null;
         dispatchEvent(new Event(LIGHT_OVER));
      }
      
      private function onEnter(param1:Event) : void
      {
         this.ll.update();
      }
   }
}
