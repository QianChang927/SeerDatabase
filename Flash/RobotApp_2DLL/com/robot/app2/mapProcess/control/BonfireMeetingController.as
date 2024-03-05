package com.robot.app2.mapProcess.control
{
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.net.SharedObject;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class BonfireMeetingController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMC:MovieClip;
      
      private static var _so:SharedObject;
      
      private static var _panelMc:MovieClip;
      
      private static var dataKey:String = "EnterMap";
       
      
      public function BonfireMeetingController()
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
         if(isActivityTime())
         {
            if(_panelMc)
            {
               return;
            }
            ResourceManager.getResource(ClientConfig.getAppRes("bonfiremeetingActiveTV"),function(param1:MovieClip):void
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
         StatManager.sendStat2014("元旦主题活动","点击小电视",StatManager.RUN_ACT);
         MapManager.changeMap(1050);
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var soType:String = null;
         var dataKey1:String = null;
         var dataKey2:String = null;
         var map:BaseMapProcess = param1;
         _map = map;
         MovieClip(_map.btnLevel["mcFireworks"]).gotoAndStop(MovieClip(_map.btnLevel["mcFireworks"]).totalFrames);
         MovieClip(_map.btnLevel["mcFirecracker"]).addEventListener(MouseEvent.CLICK,onClickFireCracker);
         MovieClip(_map.depthLevel["mcFire"]).addEventListener(MouseEvent.CLICK,onFireCracker);
         MovieClip(_map.depthLevel["mcFire"]).buttonMode = true;
         if(inActivityDate())
         {
            soType = "BonfireMeeting";
            dataKey1 = "TodayFirstEnter";
            dataKey2 = "TimeFirstEnter";
            _so = SOManager.getUserSO(MainManager.actorID + soType);
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_1050_0"),function(param1:MovieClip):void
            {
               _taskMC = param1;
               var _loc2_:String = String(SystemTimerManager.getDateString(SystemTimerManager.sysBJDate));
               if(_so.data[dataKey])
               {
                  if(_so.data[dataKey][dataKey1 + _loc2_])
                  {
                     if(isActivityTime())
                     {
                        if(!_so.data[dataKey][dataKey2 + _loc2_])
                        {
                           playActivityMovie();
                        }
                        else
                        {
                           BonfireMeetingBossController.onUpdate(null);
                        }
                     }
                     return;
                  }
               }
               _so.data[dataKey] = new Object();
               playTodayMovie(dataKey1 + _loc2_);
            });
         }
      }
      
      protected static function onFireCracker(param1:MouseEvent) : void
      {
         clickBonfire();
      }
      
      protected static function onClickFireCracker(param1:MouseEvent) : void
      {
         var _loc2_:DisplayObject = param1.target as DisplayObject;
         _loc2_.visible = false;
         MovieClip(_map.btnLevel["mcFireworks"]).gotoAndPlay(1);
      }
      
      public static function clickBonfire(param1:MouseEvent = null) : void
      {
         if(MapManager.currentMap.id == 1050)
         {
            if(inActivityDate())
            {
               if(isActivityTime())
               {
                  Alarm2.show("元旦闪光精灵大派对已经开始了哦，快去捕捉它们吧！");
               }
               else
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("NewYearBonfireMeetingPanel"));
               }
            }
         }
         else
         {
            MapManager.changeMap(1050);
         }
      }
      
      public static function clickNotice() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("BonfireMeetingMainPanel"));
      }
      
      private static function playTodayMovie(param1:String) : void
      {
         var key:String = param1;
         MapObjectControl.hideOrShowAllObjects(false);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("bonfiremeeting"),function():void
         {
            _map.conLevel.addChild(_taskMC);
            LevelManager.toolsLevel.visible = false;
            LevelManager.iconLevel.visible = false;
            _map.depthLevel.visible = false;
            KTool.showMapAllPlayerAndMonster(false);
            AnimateManager.playMcAnimate(_taskMC,1,"mc",function():void
            {
               _so.data[dataKey][key] = true;
               _so.flush();
               if(isActivityTime())
               {
                  playActivityMovie();
               }
               else
               {
                  _map.depthLevel.visible = true;
                  LevelManager.toolsLevel.visible = true;
                  LevelManager.iconLevel.visible = true;
                  KTool.showMapAllPlayerAndMonster(true);
                  DisplayUtil.removeForParent(_taskMC);
                  MapObjectControl.hideOrShowAllObjects(true);
               }
            });
         });
      }
      
      private static function playActivityMovie() : void
      {
         _map.conLevel.addChild(_taskMC);
         MapObjectControl.hideOrShowAllObjects(false);
         LevelManager.toolsLevel.visible = false;
         LevelManager.iconLevel.visible = false;
         KTool.showMapAllPlayerAndMonster(false);
         _map.depthLevel.visible = false;
         AnimateManager.playMcAnimate(_taskMC,2,"mc",function():void
         {
            MapObjectControl.hideOrShowAllObjects(true);
            LevelManager.toolsLevel.visible = true;
            LevelManager.iconLevel.visible = true;
            _map.depthLevel.visible = true;
            KTool.showMapAllPlayerAndMonster(true);
            DisplayUtil.removeForParent(_taskMC);
            var _loc1_:String = String(SystemTimerManager.getDateString(SystemTimerManager.sysBJDate));
            _so.data[dataKey]["TimeFirstEnter" + _loc1_] = true;
            _so.flush();
            BonfireMeetingBossController.onUpdate(null);
         });
      }
      
      public static function inActivityDate() : Boolean
      {
         var _loc1_:Date = new Date(2014,11,30);
         var _loc2_:Date = new Date(2015,0,9);
         var _loc3_:Number = _loc1_.time / 1000;
         var _loc4_:Number = _loc2_.time / 1000;
         if(SystemTimerManager.time > _loc3_ && SystemTimerManager.time < _loc4_)
         {
            return true;
         }
         return false;
      }
      
      public static function isActivityTime() : Boolean
      {
         var _loc6_:CronTimeVo = null;
         var _loc1_:CronTimeVo = new CronTimeVo("*","14","30-31","12","*","2014");
         var _loc2_:CronTimeVo = new CronTimeVo("*","18","30-31","12","*","2014");
         var _loc3_:CronTimeVo = new CronTimeVo("*","14","1-8","1","*","2015");
         var _loc4_:CronTimeVo = new CronTimeVo("*","18","1-8","1","*","2015");
         var _loc5_:Array = [_loc1_,_loc2_,_loc3_,_loc4_];
         for each(_loc6_ in _loc5_)
         {
            if(_loc6_.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
            {
               return true;
            }
         }
         return false;
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            MovieClip(_map.btnLevel["mcFirecracker"]).removeEventListener(MouseEvent.CLICK,onClickFireCracker);
         }
         _map = null;
         _taskMC = null;
      }
   }
}
