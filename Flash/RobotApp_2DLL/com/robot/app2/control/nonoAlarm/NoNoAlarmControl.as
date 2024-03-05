package com.robot.app2.control.nonoAlarm
{
   import com.robot.app.task.petstory.util.BtnClick;
   import com.robot.app2.control.nonoAlarm.alarms.AbstractRegistrationActivitityAlarm;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.SeerUrlLoader;
   import com.robot.core.utils.CronTimeVo;
   import com.robot.core.zip.PreloadZipXMLController;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   import flash.utils.clearTimeout;
   import flash.utils.getDefinitionByName;
   import flash.utils.setTimeout;
   import org.taomee.debug.DebugTrace;
   import org.taomee.ds.HashSet;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class NoNoAlarmControl
   {
      
      private static var _list:HashSet;
      
      private static var _registrationActivitityAlarmList:HashSet;
      
      private static var _timer:Timer;
      
      private static var _timerAlarmList:Array;
      
      private static var configXml:XML;
      
      private static var _lastShowTime:Date;
      
      private static var _icon:MovieClip;
      
      public static var noShowAgain:Boolean;
       
      
      public function NoNoAlarmControl()
      {
         super();
      }
      
      public static function setUp() : void
      {
         var t:uint = 0;
         _list = new HashSet();
         _registrationActivitityAlarmList = new HashSet();
         _timerAlarmList = [];
         _timer = new Timer(1000 * 50);
         _timer.addEventListener(TimerEvent.TIMER,onTimer);
         initTimeAlarm();
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
         t = setTimeout(function():void
         {
            clearTimeout(t);
            onTimer(null);
         },5000);
      }
      
      public static function initIcon(param1:MovieClip) : void
      {
         _icon = param1;
         _icon.buttonMode = true;
         _icon.gotoAndStop(1);
         _icon.addEventListener(MouseEvent.CLICK,clickIcon);
         ToolTipManager.add(_icon,"小闹钟");
      }
      
      public static function clickIcon(param1:MouseEvent) : void
      {
         MainManager.actorModel.hideClockAlarm();
         ModuleManager.showModule(ClientConfig.getAppModule("NonoAlarmPanel"));
         SocketConnection.send(1022,86064466);
      }
      
      private static function onMapChange(param1:*) : void
      {
         _timer.start();
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
      }
      
      private static function onTimer(param1:Event) : void
      {
         var _loc2_:AlarmItem = null;
         for each(_loc2_ in _timerAlarmList)
         {
            _loc2_.checkStatu();
         }
      }
      
      private static function initTimeAlarm() : void
      {
         var xmlList:XMLList;
         var xml:XML = null;
         var loader:SeerUrlLoader = null;
         var alarmClass:* = undefined;
         var alarm:AlarmItem = null;
         var time:String = null;
         var cTimes:Array = null;
         var i:int = 0;
         var args:Array = null;
         var cronTime:CronTimeVo = null;
         if(configXml == null)
         {
            loader = new SeerUrlLoader("加载场景配置文件");
            PreloadZipXMLController.getXML("nono_alarm.xml",function(param1:*):void
            {
               configXml = new XML(param1);
               initTimeAlarm();
            });
            return;
         }
         xmlList = configXml.elements("alarm");
         for each(xml in xmlList)
         {
            alarmClass = getDefinitionByName(String(xml.@cls));
            alarm = new alarmClass();
            alarm.name = String(xml.@name);
            alarm.iconUrl = String(xml.@iconId);
            alarm.petId = int(xml.@petId);
            alarm.key = String(xml.@key);
            alarm.btnClcik = new BtnClick();
            alarm.btnClcik.type = String(xml.@type);
            alarm.btnClcik.content = xml.toString();
            alarm.xml = xml;
            time = String(xml.@time);
            if(Boolean(time) && time != "")
            {
               cTimes = time.split(",");
               i = 0;
               while(i < cTimes.length)
               {
                  args = (cTimes[i] as String).split(" ");
                  cronTime = new CronTimeVo(args[0],args[1],args[2],args[3],args[4],args[5]);
                  cTimes[i] = cronTime;
                  i++;
               }
               alarm.cTimes = cTimes;
            }
            _timerAlarmList.push(alarm);
         }
      }
      
      public static function addAlarm(param1:AlarmItem) : void
      {
         if(param1 is AbstractRegistrationActivitityAlarm)
         {
            _registrationActivitityAlarmList.add(param1);
         }
         else if(!_list.contains(param1))
         {
            _list.add(param1);
            DebugTrace.show("-------" + param1.name + "-----被加到闹钟中");
            showClock();
            param1.addTime = new Date();
         }
      }
      
      private static function showClock() : void
      {
         var _loc1_:Date = new Date();
         if(_lastShowTime == null || _loc1_.getTime() - _lastShowTime.getTime() >= 1000 * 10)
         {
            MainManager.actorModel.showClockAlarm();
            _lastShowTime = _loc1_;
         }
      }
      
      public static function removeAlarm(param1:AlarmItem) : void
      {
         if(param1 is AbstractRegistrationActivitityAlarm)
         {
            _registrationActivitityAlarmList.remove(param1);
         }
         else if(_list.contains(param1))
         {
            DebugTrace.show("-------" + param1.name + "-----被移除");
            _list.remove(param1);
         }
         if(getAlarmList().length == 0)
         {
            MainManager.actorModel.hideClockAlarm();
         }
      }
      
      public static function sorFun(param1:AlarmItem, param2:AlarmItem) : int
      {
         if(param1.statu == AlarmItem.STATU_2)
         {
            return -1;
         }
         if(param1.addTime.time > param2.addTime.time)
         {
            return 1;
         }
         return 0;
      }
      
      public static function getAlarmList() : Array
      {
         var _loc1_:Array = _list.toArray();
         if(_loc1_)
         {
            _loc1_.sortOn("addTime",Array.NUMERIC);
         }
         else
         {
            _loc1_ = [];
         }
         return _loc1_;
      }
      
      public static function getAlarmByKey(param1:String) : AlarmItem
      {
         var _loc2_:AlarmItem = null;
         for each(_loc2_ in _timerAlarmList)
         {
            if(_loc2_.key == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      public static function playEenterAlarmIconMvUrl(param1:Function = null) : void
      {
         var fun:Function = param1;
         ResourceManager.getResource(ClientConfig.getAppRes("enterAlarmIconMv"),function(param1:MovieClip):void
         {
            var mv:MovieClip = param1;
            LevelManager.stage.addChild(mv);
            mv.x = 480;
            mv.y = 280;
            AnimateManager.playMcAnimate(mv,0,"",function():void
            {
               DisplayUtil.removeForParent(mv);
               if(null != fun)
               {
                  fun();
               }
            });
         });
      }
      
      public static function get registrationActivitityAlarmList() : Array
      {
         return _registrationActivitityAlarmList.toArray();
      }
   }
}
