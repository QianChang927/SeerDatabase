package com.robot.app2.control
{
   import com.robot.app2.component.TimeCountdownComponent;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import gs.TweenLite;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class JiLuoDeComPanelControl
   {
      
      private static var _ui:MovieClip;
       
      
      public function JiLuoDeComPanelControl()
      {
         super();
      }
      
      public static function setup() : void
      {
         SystemTimerManager.addTickFun(timerHandler);
      }
      
      private static function timerHandler() : void
      {
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         if((_loc1_.hours == 13 || _loc1_.hours == 15 || _loc1_.hours == 19) && _loc1_.minutes == 0 && _loc1_.seconds == 0)
         {
            showTipPanel();
         }
      }
      
      private static function showTipPanel() : void
      {
         ResourceManager.getResource(ClientConfig.getAppResource("2016/1021/JiLuoDeComTipPanel"),function(param1:MovieClip):void
         {
            var syTime:Date;
            var _leftTime:int;
            var timeCom:TimeCountdownComponent = null;
            var mc:MovieClip = param1;
            _ui = mc;
            LevelManager.appLevel.addChildAt(_ui,0);
            _ui.x = 550;
            _ui.y = 560;
            TweenLite.to(_ui,2,{"y":360});
            _ui.addEventListener(MouseEvent.CLICK,ClickHandler);
            syTime = SystemTimerManager.sysBJDate;
            _leftTime = 3600 - syTime.minutes * 60 - syTime.seconds;
            timeCom = new TimeCountdownComponent(_ui["txt_time"],2);
            timeCom.initialSeconds = _leftTime;
            timeCom.start(function():void
            {
               timeCom.destroy();
               hide();
            });
         });
      }
      
      private static function ClickHandler(param1:MouseEvent) : void
      {
         if(param1.target.name == "close")
         {
            hide();
         }
         else
         {
            hide();
            ModuleManager.showAppModule("JiLuoDeComMainPanel",mapId);
         }
      }
      
      public static function isActivity() : Boolean
      {
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         return _loc1_.hours == 13 || _loc1_.hours == 15 || _loc1_.hours == 19;
      }
      
      public static function get mapId() : int
      {
         var _loc1_:int = 1;
         var _loc2_:Date = SystemTimerManager.sysBJDate;
         if(_loc2_.hours <= 14)
         {
            _loc1_ = 1;
         }
         else if(_loc2_.hours <= 18)
         {
            _loc1_ = 2;
         }
         else
         {
            _loc1_ = 3;
         }
         return _loc1_;
      }
      
      private static function hide() : void
      {
         if(_ui)
         {
            _ui.removeEventListener(MouseEvent.CLICK,ClickHandler);
            if(_ui.parent)
            {
               DisplayUtil.removeForParent(_ui);
            }
            _ui = null;
         }
      }
   }
}
