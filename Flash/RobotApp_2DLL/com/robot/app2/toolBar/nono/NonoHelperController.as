package com.robot.app2.toolBar.nono
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.NewSeerController2016;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.Timer;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class NonoHelperController
   {
      
      public static var icon:MovieClip;
      
      private static var _timer:Timer;
      
      private static var _isTanType:int;
      
      private static var _isTanOk:Boolean;
      
      public static var canAccept:Boolean = true;
       
      
      public function NonoHelperController()
      {
         super();
      }
      
      public static function start(param1:MovieClip) : void
      {
         var mc:MovieClip = param1;
         icon = mc;
         icon.buttonMode = true;
         icon.cacheAsBitmap = true;
         icon.addEventListener(MouseEvent.CLICK,onClickIcon);
         checkTask();
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            if(!NewSeerTaskController.isNewSeer)
            {
               icon.visible = MapManager.currentMap.id <= 50000;
            }
         });
      }
      
      public static function checkTask() : void
      {
         KTool.getMultiValue([11516,20021,30005],function(param1:Array):void
         {
            if(SystemTimerManager.sysBJDate.fullYear >= 2019)
            {
               if(param1[0] * param1[1] * param1[2] == 0)
               {
                  icon.gotoAndStop(2);
               }
               else
               {
                  icon.gotoAndStop(1);
               }
            }
            else
            {
               icon.gotoAndStop(3);
            }
         });
      }
      
      private static function onClickIcon(param1:MouseEvent) : void
      {
         if(NewSeerController2016.playvipMovie)
         {
            EventManager.dispatchEvent(new Event(NewSeerController2016.PLAYVIPMOVIE_EVENT));
            return;
         }
         if(NewSeerTaskController.isNewSeer)
         {
            return;
         }
         StatManager.sendStat2014("工具条按钮点击","赛尔号vip");
         ModuleManager.showModule(ClientConfig.getAppModule("NewVIPEquityPanel"));
      }
      
      public static function hide() : void
      {
         icon.removeEventListener(MouseEvent.CLICK,onClickIcon);
         ToolTipManager.remove(icon);
         DisplayUtil.removeForParent(icon);
      }
   }
}
