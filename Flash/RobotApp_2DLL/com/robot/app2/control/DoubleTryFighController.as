package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.SystemTimerManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.net.SharedObject;
   import org.taomee.manager.ResourceManager;
   
   public class DoubleTryFighController
   {
      
      private static var panel:MovieClip;
       
      
      public function DoubleTryFighController()
      {
         super();
      }
      
      public static function init() : void
      {
         var so:SharedObject = null;
         var date:Date = SystemTimerManager.sysBJDate;
         if(date.getFullYear() == 2015 && date.month == 6 && date.date <= 4 && date.hours >= 12)
         {
            so = SOManager.getUserSO(SOManager.ACTIVITY);
            if(so.data["DoubleTryFight" + SystemTimerManager.getDateString(SystemTimerManager.sysBJDate)] == undefined)
            {
               so.data["DoubleTryFight" + SystemTimerManager.getDateString(SystemTimerManager.sysBJDate)] = true;
               SOManager.flush(so);
               ResourceManager.getResource(ClientConfig.getAppRes("double_try_fight"),function(param1:MovieClip):void
               {
                  panel = param1;
                  LevelManager.iconLevel.addChild(panel);
                  panel.addEventListener(MouseEvent.CLICK,onClickHandler);
               });
            }
         }
      }
      
      private static function onClickHandler(param1:MouseEvent) : void
      {
         if(param1.target.name == "goMapBtn")
         {
            destroy();
            MapManager.changeMap(102);
         }
         else if(param1.target.name == "btnClose")
         {
            destroy();
         }
      }
      
      private static function destroy() : void
      {
         if(panel)
         {
            if(panel.parent)
            {
               panel.parent.removeChild(panel);
            }
            panel.removeEventListener(MouseEvent.CLICK,onClickHandler);
            panel = null;
         }
      }
   }
}
