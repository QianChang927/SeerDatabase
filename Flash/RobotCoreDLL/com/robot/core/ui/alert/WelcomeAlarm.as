package com.robot.core.ui.alert
{
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UIManager;
   import flash.display.Bitmap;
   import flash.display.MovieClip;
   import flash.events.TimerEvent;
   import flash.text.TextField;
   import flash.utils.Timer;
   import gs.TweenLite;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class WelcomeAlarm
   {
      
      private static var _alarm:com.robot.core.ui.alert.WelcomeAlarm;
       
      
      private var _panel:MovieClip;
      
      private var _timer:Timer;
      
      public function WelcomeAlarm()
      {
         super();
         this._panel = UIManager.getMovieClip("ui_Room_Alarm");
         this._panel.mouseEnabled = false;
         this._panel.mouseChildren = false;
         this._timer = new Timer(2000,1);
         this._timer.addEventListener(TimerEvent.TIMER_COMPLETE,this.onTimer);
      }
      
      public static function show(param1:String) : void
      {
         _alarm = new com.robot.core.ui.alert.WelcomeAlarm();
         _alarm.show(param1);
      }
      
      private function show(param1:String) : void
      {
         this._timer.start();
         this._panel["txt"].text = param1;
         this.textToBitmap(this._panel["txt"]);
         MainManager.getStage().addChild(this._panel);
         DisplayUtil.align(this._panel,null,AlignType.MIDDLE_CENTER);
         this._panel.y -= 100;
      }
      
      private function textToBitmap(param1:TextField) : void
      {
         var _loc2_:Bitmap = null;
         _loc2_ = DisplayUtil.copyDisplayAsBmp(param1);
         _loc2_.x = param1.x + _loc2_.x;
         _loc2_.y = param1.y + _loc2_.y;
         param1.parent.addChild(_loc2_);
         DisplayUtil.removeForParent(param1);
      }
      
      private function onTimer(param1:TimerEvent) : void
      {
         var e:TimerEvent = param1;
         this._timer.reset();
         this._timer.removeEventListener(TimerEvent.TIMER_COMPLETE,this.onTimer);
         TweenLite.to(this._panel,2,{
            "alpha":0,
            "onComplete":function():void
            {
               DisplayUtil.removeForParent(_panel);
               _panel = null;
               _timer = null;
            }
         });
      }
   }
}
