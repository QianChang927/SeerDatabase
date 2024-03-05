package com.robot.core.ui.loading.loadingstyle
{
   import com.robot.core.config.UpdateConfig;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.events.TimerEvent;
   import flash.geom.Rectangle;
   import flash.text.TextField;
   import flash.utils.Timer;
   
   public class TitlePercentLoading extends TitleOnlyLoading implements ILoadingStyle
   {
      
      private static const KEY:String = "titlePercentLoading";
       
      
      protected var percentText:TextField;
      
      protected var percentBar:MovieClip;
      
      private var _rect:Rectangle;
      
      private var _barWidth:Number;
      
      private var _tipTxt:TextField;
      
      private var _timer:Timer;
      
      private var _tips:Array;
      
      private var _perTxtX:Number;
      
      private var _perTxtY:Number;
      
      public function TitlePercentLoading(param1:DisplayObjectContainer, param2:String = "Loading...", param3:Boolean = true)
      {
         super(param1,param2,param3);
         this.percentText = loadingMC["perNum"];
         this.percentText.text = "0%";
         this._perTxtX = this.percentText.x;
         this._perTxtY = this.percentText.y;
         this._tipTxt = loadingMC["tip_txt"];
         this.percentBar = loadingMC["loadingBar"];
         this._barWidth = this.percentBar.width;
         this.percentBar.gotoAndStop(1);
         this._tips = this.getTips();
         if(this._tips.length > 0)
         {
            this.onChangeTip(null);
            this._timer = new Timer(2000);
            this._timer.addEventListener(TimerEvent.TIMER,this.onChangeTip);
            this._timer.start();
         }
      }
      
      protected function getTips() : Array
      {
         return UpdateConfig.loadingArray.concat();
      }
      
      private function onChangeTip(param1:TimerEvent) : void
      {
         if(this._tips)
         {
            this._tipTxt.text = this._tips[int(Math.random() * this._tips.length)];
         }
      }
      
      override public function changePercent(param1:Number, param2:Number) : void
      {
         super.changePercent(param1,param2);
         this.percentText.text = percent + "%";
         this.percentBar.gotoAndStop(int(percent));
      }
      
      override public function destroy() : void
      {
         this.percentText = null;
         this.percentBar = null;
         this._tipTxt = null;
         if(this._timer)
         {
            this._timer.stop();
            this._timer.removeEventListener(TimerEvent.TIMER,this.onChangeTip);
            this._timer = null;
         }
         super.destroy();
      }
      
      override protected function getKey() : String
      {
         return KEY;
      }
   }
}
