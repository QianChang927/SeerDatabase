package com.robot.app2.control
{
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.SysTimeEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class PeakJihadLiveJump2017SmallIconControl
   {
      
      private static var ac1:ActivityControl;
      
      private static var cron1:Array = [new CronTimeVo("*","12-17","30","4","*","*"),new CronTimeVo("*","12-17","1","5","*","*")];
      
      private static var ac2:ActivityControl;
      
      private static var cron2:Array = [new CronTimeVo("*","*","30","4","*","*"),new CronTimeVo("*","*","1","5","*","*")];
      
      private static var _curDayIndex:int;
      
      public static var icon:MovieClip;
       
      
      public function PeakJihadLiveJump2017SmallIconControl()
      {
         super();
      }
      
      public static function setUp() : void
      {
         EventManager.addEventListener(SysTimeEvent.RECEIVE_SYSTEM_TIME,onTime);
      }
      
      public static function onTime(param1:SysTimeEvent) : void
      {
         var _loc2_:int = 0;
         if(isInAcTime())
         {
            _loc2_ = int(SystemTimerManager.sysBJDate.minutes);
            if(_loc2_ % 30 == 0)
            {
            }
         }
      }
      
      public static function loaderIcon() : void
      {
         ResourceManager.getResource(ClientConfig.getUiIcon("peakJihadLiveJump2017SmallIcon"),function(param1:MovieClip):void
         {
            var $icon:MovieClip = param1;
            icon = $icon;
            icon.x = 600;
            icon.y = 300;
            icon.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
            {
               switch(param1.target.name)
               {
                  case "closeBtn":
                     destroy();
                     break;
                  case "gotoBtn":
                     navigateToURL(new URLRequest("http://seer.61.com/events/yure/"),"_blank");
                     destroy();
               }
            });
            LevelManager.toolsLevel.addChildAt(icon,0);
         },"peakJihadLiveJump2017SmallIcon");
      }
      
      public static function isInAcTime() : Boolean
      {
         if(ac1 == null)
         {
            ac1 = new ActivityControl(cron1);
         }
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         if(ac1.isInActivityTime)
         {
            return true;
         }
         return false;
      }
      
      public static function isInAcTime2() : Boolean
      {
         if(ac2 == null)
         {
            ac2 = new ActivityControl(cron2);
         }
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         if(ac2.isInActivityTime)
         {
            return true;
         }
         return false;
      }
      
      public static function loginQiangTan() : void
      {
         if(isInAcTime2())
         {
            ModuleManager.showAppModule("PeakJihadLive2017QiangTanPanel");
         }
      }
      
      public static function destroy() : void
      {
         DisplayUtil.removeForParent(icon);
         icon = null;
      }
   }
}
