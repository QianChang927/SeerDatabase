package com.robot.core.battleRoyale
{
   import com.robot.core.manager.LevelManager;
   import flash.display.MovieClip;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   import org.taomee.utils.DisplayUtil;
   
   public class SingleKillTip
   {
      
      private static const DES_ARR:Array = ["表现得异常活跃哦！","已经主宰了比赛！","简直是神射手！","太厉害了！","已经无人能档！","可能要超越教官雷蒙了！","连贾斯汀站长都无法比拟！"];
       
      
      private var _mc:MovieClip;
      
      private var _timer:Timer;
      
      public function SingleKillTip(param1:MovieClip)
      {
         super();
         this._mc = param1;
         this._mc.x = 295;
         this._mc.y = 25;
         this._timer = new Timer(2000);
         this._timer.addEventListener(TimerEvent.TIMER,this.onTimer);
      }
      
      private function onTimer(param1:TimerEvent) : void
      {
         DisplayUtil.removeForParent(this._mc);
      }
      
      public function show(param1:String, param2:uint) : void
      {
         this._timer.stop();
         DisplayUtil.removeForParent(this._mc);
         if(param2 >= 9)
         {
            param2 = 9;
         }
         var _loc3_:* = "<font color=\'#ff0000\'>" + param1 + "</font>" + "<font color=\'#00ff00\'>" + DES_ARR[param2 - 3] + "</font>";
         this._mc["txt"].htmlText = _loc3_;
         LevelManager.appLevel.addChild(this._mc);
         this._timer.start();
      }
      
      public function destroy() : void
      {
         this._timer.stop();
         this._timer.removeEventListener(TimerEvent.TIMER,this.onTimer);
         this._timer = null;
      }
   }
}
