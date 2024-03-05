package com.robot.app2.control
{
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.utils.Timer;
   import org.taomee.events.SocketEvent;
   
   public class NationalBeatenRedXiaController
   {
      
      private static var ac1:ActivityControl;
      
      private static var ac2:ActivityControl;
      
      private static var ac3:ActivityControl;
      
      private static var cron1:Array = [new CronTimeVo("0-59","14","5-11","*","*","*")];
      
      private static var cron2:Array = [new CronTimeVo("0-59","18","5-11","*","*","*")];
      
      private static var cron3:Array = [new CronTimeVo("*","*","5-11","*","*","*")];
      
      private static var _map:BaseMapProcess;
      
      private static var _curHp:int = 10;
      
      private static var _gameTime:int = 0;
      
      private static var _panelTime:Timer;
      
      private static var _curAddUpNum:int = 0;
      
      private static var _timeIndex:int = 4;
      
      private static const POS_0:Point = new Point(275,406.15);
      
      private static const POS_1:Point = new Point(650.1,406.3);
      
      private static var _curPos:Point;
      
      private static var _curIndex:int;
      
      private static var _isExplosion:Boolean = false;
       
      
      public function NationalBeatenRedXiaController()
      {
         super();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         LevelManager.iconLevel.visible = false;
         _map = param1;
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onSystemTime);
         _map.conLevel.addEventListener(MouseEvent.CLICK,onClick);
         _panelTime = new Timer(1000);
         _panelTime.addEventListener(TimerEvent.TIMER,onTime);
         _panelTime.start();
         _map.conLevel["mouseMc_" + 0].visible = false;
         _map.conLevel["mouseMc_" + 1].visible = true;
         var _loc2_:int = 0;
         while(_loc2_ < 2)
         {
            _map.conLevel["btn_" + _loc2_].buttonMode = true;
            _map.conLevel["btn_" + _loc2_].addEventListener(MouseEvent.CLICK,onBtnClick);
            _loc2_++;
         }
         update();
      }
      
      private static function onBtnClick(param1:MouseEvent) : void
      {
         _curIndex = param1.currentTarget.name.split("_")[1];
         if(_curIndex == 0)
         {
            _curPos = POS_0;
         }
         else
         {
            _curPos = POS_1;
         }
         if(Point.distance(_curPos,MainManager.actorModel.pos) < 60)
         {
            onExplosion();
         }
         else
         {
            MainManager.actorModel.walkAction(_curPos);
            MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,onWalkEnter);
            MapManager.addEventListener(MapEvent.MAP_MOUSE_DOWN,onMapClick);
         }
      }
      
      private static function onWalkEnter(param1:RobotEvent) : void
      {
         if(Point.distance(_curPos,MainManager.actorModel.pos) < 60)
         {
            MainManager.actorModel.stop();
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onWalkEnter);
            MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,onMapClick);
            onExplosion();
         }
      }
      
      private static function onMapClick(param1:MapEvent) : void
      {
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onWalkEnter);
         MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,onMapClick);
      }
      
      private static function onExplosion() : void
      {
         var arr:Array = null;
         arr = [-1,1];
         _isExplosion = true;
         AnimateManager.playMcAnimate(_map.conLevel["btn_" + _curIndex],1,"mc1",function():void
         {
            AnimateManager.playMcAnimate(_map.conLevel["btn_" + _curIndex],2,"mc2",function():void
            {
               AnimateManager.playMcAnimate(_map.conLevel["btn_" + _curIndex],3,"mc3",function():void
               {
                  if(_map.conLevel["petMc"].scaleX == arr[_curIndex])
                  {
                     AnimateManager.playMcAnimate(_map.conLevel["petMc"],2,"mc2",function():void
                     {
                        --_curHp;
                        update();
                     });
                     _map.conLevel["dialogMc"].mc.textMc.gotoAndStop(int(Math.random() * 2 + 4));
                     _map.conLevel["dialogMc"].mc.gotoAndPlay(2);
                  }
                  else
                  {
                     _map.conLevel["dialogMc"].mc.textMc.gotoAndStop(int(Math.random() * 2 + 6));
                     AnimateManager.playMcAnimate(_map.conLevel as MovieClip,1,"dialogMc",function():void
                     {
                        update();
                     });
                  }
               });
            });
         });
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         switch(evt.target.name)
         {
            case "goMapBtn":
               StatManager.sendStat2014("0205全民暴打红包侠","点击游戏场景前去拆红包","2016运营活动");
               MapManager.changeMapWithCallback(1,function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("NationalBeatenRedXiaMainPanel"),"正在打开....");
               });
         }
      }
      
      private static function onSystemTime(param1:SocketEvent) : void
      {
         var event:SocketEvent = param1;
         if(!isInAcTime())
         {
            Alarm2.show("红包侠马上就要离开啦！下次记得再来暴打红包侠抢红包哦！",function():void
            {
               MapManager.changeMapWithCallback(1,function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("NationalBeatenRedXiaMainPanel"),"正在打开....");
               });
            });
         }
      }
      
      public static function update() : void
      {
         var dailyId:int = 0;
         _map.conLevel["dialogMc"].mc.textMc.gotoAndStop(int(Math.random() * 3 + 1));
         _map.conLevel["dialogMc"].mc.gotoAndPlay(2);
         _isExplosion = false;
         _map.conLevel["btn_0"].gotoAndStop(1);
         _map.conLevel["btn_1"].gotoAndStop(1);
         _map.conLevel["petMc"].gotoAndStop(1);
         if(isMorningTime())
         {
            dailyId = 15887;
         }
         else
         {
            dailyId = 15908;
         }
         KTool.getMultiValue([dailyId],function(param1:Array):void
         {
            _curAddUpNum = param1[0];
            if(_curAddUpNum == 10)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("NationalBeatenRedXiaAlertPanel"),"正在打开....",4);
            }
            _map.conLevel["curAddUpNumTx"].text = String(_curAddUpNum);
         });
         if(isInAcTime())
         {
            if(_curHp == 0)
            {
               if(_curAddUpNum < 10)
               {
                  AnimateManager.playMcAnimate(_map.conLevel["petMc"],3,"mc3",function():void
                  {
                     SocketConnection.addCmdListener(43696,function(param1:SocketEvent):void
                     {
                        SocketConnection.removeCmdListener(43696,arguments.callee);
                        _curHp = 10;
                        update();
                     });
                     SocketConnection.send(43696,1);
                  });
               }
               else
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("NationalBeatenRedXiaAlertPanel"),"正在打开....",4);
               }
            }
         }
         else
         {
            Alarm2.show("红包侠马上就要离开啦！下次记得再来暴打红包侠抢红包哦！",function():void
            {
               MapManager.changeMapWithCallback(1,function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("NationalBeatenRedXiaMainPanel"),"正在打开....");
               });
            });
         }
         if(_curHp > 0)
         {
            _map.conLevel["mcProgress"].gotoAndStop(_curHp * 2);
         }
         else
         {
            _map.conLevel["mcProgress"].gotoAndStop(1);
         }
      }
      
      public static function isInAcTime() : Boolean
      {
         if(ac1 == null)
         {
            ac1 = new ActivityControl(cron1);
         }
         if(ac2 == null)
         {
            ac2 = new ActivityControl(cron2);
         }
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         if(Boolean(ac1.isInActivityTime) || Boolean(ac2.isInActivityTime))
         {
            return true;
         }
         return false;
      }
      
      public static function isInBigAcTime() : Boolean
      {
         if(ac3 == null)
         {
            ac3 = new ActivityControl(cron3);
         }
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         if(ac3.isInActivityTime)
         {
            return true;
         }
         return false;
      }
      
      public static function isMorningTime() : Boolean
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
      
      private static function onTime(param1:TimerEvent) : void
      {
         var _loc2_:Array = null;
         ++_gameTime;
         if(!_isExplosion)
         {
            if(_gameTime > 6)
            {
               _gameTime = 0;
            }
            if(_gameTime == _timeIndex)
            {
               _timeIndex = Math.random() * 4 + 3;
               _timeIndex;
               _gameTime = 0;
               if(_map.conLevel["petMc"].scaleX == 1)
               {
                  _map.conLevel["petMc"].scaleX = -1;
               }
               else
               {
                  _map.conLevel["petMc"].scaleX = 1;
               }
            }
         }
         else if(_map.conLevel["petMc"].currentFrame == 2)
         {
            _loc2_ = [-1,1];
            _map.conLevel["petMc"].scaleX = _loc2_[int(Math.random() * 2)];
         }
         if(_map.conLevel["petMc"].scaleX == 1)
         {
            _map.conLevel["mouseMc_" + 0].visible = false;
            _map.conLevel["mouseMc_" + 1].visible = true;
         }
         else
         {
            _map.conLevel["mouseMc_" + 0].visible = true;
            _map.conLevel["mouseMc_" + 1].visible = false;
         }
      }
      
      public static function destroy() : void
      {
         LevelManager.iconLevel.visible = true;
         if(_panelTime != null)
         {
            _panelTime.removeEventListener(TimerEvent.TIMER,onTime);
            _panelTime = null;
         }
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onSystemTime);
      }
   }
}
