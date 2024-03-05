package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.net.SharedObject;
   import flash.utils.ByteArray;
   import flash.utils.Timer;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class LabourAController
   {
      
      private static var _ui:MovieClip;
      
      public static var _boxType:uint = 5;
      
      private static var dt:Date;
      
      private static var timer:Timer;
      
      private static var utime:uint;
       
      
      public function LabourAController()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc1_:Date = new Date(2016,3,29);
         var _loc2_:Date = new Date(2016,4,6);
         if(SystemTimerManager.sysBJDate.time > _loc1_.time && SystemTimerManager.sysBJDate.time < _loc2_.time)
         {
            loadTimer();
            loadMap();
         }
      }
      
      public static function loadMap() : void
      {
         var _mapArr:Array = null;
         var boxArr:Array = null;
         var clk:Function = null;
         var clkk:Function = null;
         clk = function(param1:MouseEvent):void
         {
            var evt:MouseEvent = param1;
            if(SystemTimerManager.sysBJDate.minutes < 6)
            {
               Alert.show("精灵们正守护着礼盒，你需要立刻开始战斗吗？",function():void
               {
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
                  {
                     var e:PetFightEvent = param1;
                     FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                     if(e.dataObj.winnerID == MainManager.actorInfo.userID)
                     {
                        NpcDialog.show(1,["哇！你找到了" + boxArr[_boxType - 1] + "礼盒！据说飞船其他舱室还有更好的礼盒哦！你是再去找找呢还是去开启礼盒呢？"],["开启礼盒","继续寻找"],[function():void
                        {
                           MapManager.changeMap(1);
                           ModuleManager.showAppModule("LabourAMainPanel");
                        },function():void
                        {
                           MapManager.changeMap(1);
                           ModuleManager.showAppModule("LabourAFindPanel");
                        }]);
                     }
                  });
                  SocketConnection.sendByQueue(41129,[6967],function():void
                  {
                  });
               });
            }
            else
            {
               Alarm.show("你慢了一步，礼盒已经被人抢走了。");
               MapManager.currentMap.controlLevel.removeChild(evt.target as DisplayObject);
            }
         };
         clkk = function(param1:MouseEvent):void
         {
            Alarm.show("你今天可以领取的礼盒已经达到上限，无法再领取。");
         };
         _mapArr = [1129,101,107,332,5,8];
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function():void
         {
            var _box:MovieClip = null;
            var mp:MapModel = null;
            if(_mapArr.indexOf(MapManager.currentMap.id) != -1 && SystemTimerManager.sysBJDate.minutes < 6)
            {
               mp = MapManager.currentMap;
               SocketConnection.sendByQueue(43172,[3,0],function(param1:SocketEvent):void
               {
                  var e:SocketEvent = param1;
                  var bytearr:ByteArray = e.data as ByteArray;
                  _boxType = bytearr.readUnsignedInt();
                  if(_boxType < 5)
                  {
                     ResourceManager.getResource(ClientConfig.getAppResource("2016/0429/LabourGift" + _boxType),function(param1:MovieClip):void
                     {
                        _box = param1;
                        mp.controlLevel.addChild(_box);
                        _box.x = 500;
                        _box.y = 350;
                        _box.scaleX = 0.3;
                        _box.scaleY = 0.3;
                        MapListenerManager.add(_box,clk);
                     });
                  }
                  else
                  {
                     ResourceManager.getResource(ClientConfig.getAppResource("2016/0429/LabourGift1"),function(param1:MovieClip):void
                     {
                        _box = param1;
                        mp.controlLevel.addChild(_box);
                        _box.x = 500;
                        _box.y = 350;
                        _box.scaleX = 0.3;
                        _box.scaleY = 0.3;
                        MapListenerManager.add(_box,clkk);
                     });
                  }
               });
            }
         });
         boxArr = ["普通","优质","精美","豪华"];
      }
      
      public static function loadTimer() : void
      {
         var onTimer:Function = null;
         onTimer = function(param1:TimerEvent):void
         {
            var _loc2_:SharedObject = _loc2_ = SOManager.getUserSO(SOManager.ACTIVITY);
            if(!_loc2_.data["LabourA_" + SystemTimerManager.getDateString(SystemTimerManager.sysBJDate) + SystemTimerManager.sysBJDate.hours.toString()])
            {
               if(SystemTimerManager.sysBJDate.minutes < 10)
               {
                  loadUI();
               }
            }
         };
         timer = new Timer(10000);
         timer.addEventListener(TimerEvent.TIMER,onTimer);
         timer.start();
      }
      
      public static function loadUI() : void
      {
         var onClick:Function = null;
         var onRemove:Function = null;
         onClick = function(param1:MouseEvent):void
         {
            switch(param1.target.name)
            {
               case "go":
                  onRemove(null);
                  ModuleManager.showAppModule("LabourAFindPanel");
                  break;
               case "close":
                  onRemove(null);
            }
         };
         onRemove = function(param1:Event = null):void
         {
            clearTimeout(utime);
            _ui.removeEventListener(MouseEvent.CLICK,onClick);
            DisplayUtil.removeForParent(_ui);
         };
         var so:SharedObject = so = SOManager.getUserSO(SOManager.ACTIVITY);
         so.data["LabourA_" + SystemTimerManager.getDateString(SystemTimerManager.sysBJDate) + SystemTimerManager.sysBJDate.hours.toString()] = true;
         so.flush();
         ResourceManager.getResource(ClientConfig.getAppResource("2016/0429/LabourAPopup"),function(param1:MovieClip):void
         {
            _ui = param1;
            LevelManager.appLevel.addChild(_ui);
            _ui.x = 0;
            _ui.y = 0;
            _ui.addEventListener(MouseEvent.CLICK,onClick);
            utime = setTimeout(onRemove,1000 * 60);
         });
      }
   }
}
