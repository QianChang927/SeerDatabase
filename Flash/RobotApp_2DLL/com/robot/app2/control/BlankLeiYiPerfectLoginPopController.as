package com.robot.app2.control
{
   import com.robot.app2.component.TimeCountdownComponent;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import org.taomee.manager.ResourceManager;
   
   public class BlankLeiYiPerfectLoginPopController
   {
      
      public static var TIME_VO_AM:Array = [new CronTimeVo("*","13-14","*","*","*","*")];
      
      public static var TIME_VO_PM:Array = [new CronTimeVo("*","18-19","*","*","*","*")];
      
      private static var _ui:MovieClip;
      
      private static var popAM:Boolean = false;
      
      private static var popPM:Boolean = false;
       
      
      public function BlankLeiYiPerfectLoginPopController()
      {
         super();
      }
      
      public static function checkActivity() : void
      {
         if(Boolean(SystemTimerManager.isActive(TIME_VO_AM)) && !popAM)
         {
            popAM = true;
            popPM = false;
            showPopUp();
         }
         else if(Boolean(SystemTimerManager.isActive(TIME_VO_PM)) && !popPM)
         {
            popPM = true;
            showPopUp();
            popAM = false;
         }
         setTimeout(checkActivity,60 * 1000);
      }
      
      private static function showPopUp() : void
      {
         if(_ui == null)
         {
            ResourceManager.getResource(ClientConfig.getAppResource("2016/1125/BlankLeiYiPerfectLoginPopPanel"),function(param1:MovieClip):void
            {
               _ui = param1;
               _ui.x = 548;
               _ui.y = 560;
               LevelManager.topLevel.addChild(_ui);
               TweenLite.to(_ui,2,{"y":305.75});
               _ui.addEventListener(MouseEvent.CLICK,onClick);
               var _loc2_:Date = SystemTimerManager.sysDate;
               var _loc3_:TimeCountdownComponent = new TimeCountdownComponent(_ui["txt_1"],3);
               _loc3_.initialSeconds = (_loc2_.hours >= 18 ? 19 - _loc2_.hours : 14 - _loc2_.hours) * 3600 + 3600 - _loc2_.minutes * 60 - _loc2_.seconds;
               _loc3_.start(hide);
            });
         }
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "jump_1":
               hide();
               ModuleManager.showAppModule("BlankLeiYiPerfectMainPanel");
               break;
            case "close":
               hide();
         }
      }
      
      private static function hide() : void
      {
         if(_ui != null)
         {
            _ui.removeEventListener(MouseEvent.CLICK,onClick);
            LevelManager.topLevel.removeChild(_ui);
            _ui = null;
         }
      }
   }
}
