package com.robot.app2.control
{
   import com.robot.app.panel.MapNamePanel;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class PlanetActiveController
   {
      
      private static var time:CronTimeVo = new CronTimeVo("*","14-16","17-23","10","*","2014");
      
      private static var _panelMc:MovieClip;
       
      
      public function PlanetActiveController()
      {
         super();
      }
      
      public static function setup() : void
      {
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onShowTvTime);
      }
      
      private static function onShowTvTime(param1:SocketEvent) : void
      {
         var e:SocketEvent = param1;
         if(time.checkTimeHit(SystemTimerManager.sysDate) == CronTimeVo.HIT)
         {
            if(_panelMc)
            {
               return;
            }
            ResourceManager.getResource(ClientConfig.getAppRes("PlanetActiveTV"),function(param1:MovieClip):void
            {
               _panelMc = param1;
               MapNamePanel.ChildMc = _panelMc;
               _panelMc.buttonMode = true;
               _panelMc.mouseChildren = false;
               MapNamePanel.autoOpenOrClose(true);
               _panelMc.addEventListener(MouseEvent.CLICK,onGo);
            });
         }
         else
         {
            destoryTvPanel();
         }
      }
      
      private static function destoryTvPanel() : void
      {
         if(Boolean(_panelMc) && Boolean(DisplayUtil.hasParent(_panelMc)))
         {
            SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onShowTvTime);
            _panelMc.removeEventListener(MouseEvent.CLICK,onGo);
            MapNamePanel.autoOpenOrClose(false);
            DisplayUtil.removeForParent(_panelMc);
            _panelMc = null;
         }
      }
      
      private static function onGo(param1:MouseEvent) : void
      {
         StatManager.sendStat2014("星球活动_小罗的试炼","点击小电视",StatManager.RUN_ACT);
         ModuleManager.showModule(ClientConfig.getAppModule("LittleluoTestMainPanel"));
      }
   }
}
