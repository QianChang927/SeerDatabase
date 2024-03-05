package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.net.SharedObject;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class TimedTaskController
   {
      
      private static var _ui:MovieClip;
      
      private static var utime:uint;
      
      private static var aid:int = 1;
       
      
      public function TimedTaskController()
      {
         super();
      }
      
      public static function setup() : void
      {
         SystemTimerManager.addTickFun(timer);
      }
      
      private static function timer() : void
      {
         var _loc2_:SharedObject = null;
         var _loc3_:SharedObject = null;
         var _loc4_:SharedObject = null;
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         if(_loc1_.hours == 10 && _loc1_.minutes >= 55)
         {
            _loc2_ = SOManager.getUserSO(SOManager.ACTIVITY);
            if(_loc2_.data["TIMEDTASK_1_" + SystemTimerManager.getDateString(SystemTimerManager.sysBJDate)])
            {
               return;
            }
            aid = 1;
            loadUI();
         }
         else if(_loc1_.hours == 16 && _loc1_.minutes >= 55)
         {
            _loc3_ = SOManager.getUserSO(SOManager.ACTIVITY);
            if(_loc3_.data["TIMEDTASK_2_" + SystemTimerManager.getDateString(SystemTimerManager.sysBJDate)])
            {
               return;
            }
            aid = 2;
            loadUI();
         }
         else if(_loc1_.hours == 17 && _loc1_.minutes >= 55)
         {
            if((_loc4_ = SOManager.getUserSO(SOManager.ACTIVITY)).data["TIMEDTASK_3_" + SystemTimerManager.getDateString(SystemTimerManager.sysBJDate)])
            {
               return;
            }
            aid = 3;
            loadUI();
         }
      }
      
      public static function loadUI() : void
      {
         var so:SharedObject;
         if(_ui)
         {
            onRemove();
         }
         so = SOManager.getUserSO(SOManager.ACTIVITY);
         so.data["TIMEDTASK_" + aid + "_" + SystemTimerManager.getDateString(SystemTimerManager.sysBJDate)] = true;
         so.flush();
         ResourceManager.getResource(ClientConfig.getAppResource("2016/0819/timednotice"),function(param1:MovieClip):void
         {
            _ui = param1;
            _ui.gotoAndStop(aid);
            LevelManager.appLevel.addChild(_ui);
            _ui.x = 584.95;
            _ui.y = 325.7;
            _ui.addEventListener(MouseEvent.CLICK,onClick);
            utime = setTimeout(onRemove,1000 * 60);
         });
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "go":
               StatManager.sendStat2014("0819夏令营更新","点击预告面板前往参与","2016星际夏令营");
               onRemove(null);
               MapManager.changeMapWithCallback(1202,function():void
               {
                  ModuleManager.showAppModule("TimedNoticePanel");
               });
               break;
            case "close":
               onRemove(null);
         }
      }
      
      private static function onRemove(param1:Event = null) : void
      {
         clearTimeout(utime);
         _ui.removeEventListener(MouseEvent.CLICK,onClick);
         if(_ui.parent)
         {
            DisplayUtil.removeForParent(_ui);
         }
      }
   }
}
