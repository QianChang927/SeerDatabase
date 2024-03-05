package com.robot.app.protectSys
{
   import com.robot.core.config.UpdateConfig;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.manager.LevelManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.net.URLLoader;
   import flash.utils.Timer;
   import org.taomee.utils.DisplayUtil;
   
   public class MaskScreen
   {
      
      private static var _num:uint;
      
      private static var _ui:MovieClip;
      
      private static var _timer:Timer;
      
      private static var _adTimer:Timer;
      
      private static var _urlloader:URLLoader;
      
      private static var _index:int;
      
      private static var _adArray:Array;
       
      
      public function MaskScreen()
      {
         super();
      }
      
      public static function show(param1:int, param2:uint = 10) : void
      {
         if(ProtectSystem.lock || Boolean(UpdateConfig.banProtect))
         {
            return;
         }
         if(NewSeerTaskController.isNewSeer)
         {
            return;
         }
         _num = param2;
         _ui = new lib_fullScreen_mc();
         (_ui["msgMC"] as MovieClip).gotoAndStop(param1);
         _ui["closeBtn"].addEventListener(MouseEvent.CLICK,oncloseHandle);
         _timer = new Timer(1000,param2);
         _timer.addEventListener(TimerEvent.TIMER,onTimer);
         _timer.addEventListener(TimerEvent.TIMER_COMPLETE,onTimerComp);
         _timer.reset();
         _timer.start();
         LevelManager.topLevel.addChild(_ui);
         BattleStrategyXML.load(_ui);
      }
      
      private static function oncloseHandle(param1:MouseEvent) : void
      {
         onTimerComp(null);
      }
      
      private static function onTimer(param1:TimerEvent) : void
      {
         var _loc2_:int = int(_timer.currentCount / _num * 100);
         (_ui["timeBar"] as MovieClip).gotoAndStop(_loc2_);
      }
      
      private static function onTimerComp(param1:TimerEvent) : void
      {
         if(_timer)
         {
            _timer.stop();
            _timer.removeEventListener(TimerEvent.TIMER,onTimer);
            _timer.removeEventListener(TimerEvent.TIMER_COMPLETE,onTimerComp);
            _timer = null;
         }
         if(_ui)
         {
            _ui["closeBtn"].removeEventListener(MouseEvent.CLICK,oncloseHandle);
            DisplayUtil.removeForParent(_ui);
            _ui = null;
         }
         BattleStrategyXML.unLoad();
      }
   }
}
