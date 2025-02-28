package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class OpenStargateController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _energy:MovieClip;
      
      private static var _alarmMc:MovieClip;
      
      private static var _todayHaveGet:int;
      
      private static var pass:int;
      
      private static const startDate:Date = new Date(2015,9,9);
      
      private static const nextWeekDate:Date = new Date(2015,9,16);
      
      private static const pointArr:Array = [[420,256],[631,172],[168,186],[154,147],[679,355],[258,265],[164,363],[30,270],[738,426],[556,358],[341,326],[490,263],[280,412]];
       
      
      public function OpenStargateController()
      {
         super();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         if(SystemTimerManager.sysBJDate.time < startDate.time || SystemTimerManager.sysBJDate.time >= nextWeekDate.time)
         {
            return;
         }
         _map = param1;
         _energy = MapManager.currentMap.libManager.getMovieClip("energyMc");
         _alarmMc = MapManager.currentMap.libManager.getMovieClip("alarmMc");
         _map.topLevel.addChild(_alarmMc);
         _energy.buttonMode = true;
         _alarmMc.x = 379.85;
         _alarmMc.y = 102.15;
         _alarmMc.addEventListener(MouseEvent.CLICK,onGo);
         _energy.addEventListener(MouseEvent.CLICK,onGet);
         upData();
      }
      
      private static function randomEnergyPos() : void
      {
         var rand:int;
         if(_todayHaveGet >= 100)
         {
            return;
         }
         rand = Math.floor(Math.random() * pointArr.length);
         _energy.x = pointArr[rand][0];
         _energy.y = pointArr[rand][1];
         _map.topLevel.addChild(_energy);
         AnimateManager.playMcAnimate(_energy,2,"mc",function():void
         {
            _energy.gotoAndStop(1);
         });
      }
      
      private static function onGo(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "close":
               _alarmMc.visible = false;
               break;
            case "goBtn":
               ModuleManager.showAppModule("OpenStargatePanel");
         }
      }
      
      public static function openAlarm() : void
      {
         if(_alarmMc.visible == false)
         {
            _alarmMc.visible = true;
         }
      }
      
      private static function onGet(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(_todayHaveGet >= 100)
         {
            Alarm2.show("今日获得的能量已经达到上限，明天再来吧！");
            return;
         }
         _energy.mouseChildren = _energy.mouseEnabled = false;
         SocketConnection.sendWithCallback(47235,function(param1:SocketEvent):void
         {
            var curgetNum:int = 0;
            var anmiteIndex:uint = 0;
            var e:SocketEvent = param1;
            curgetNum = _todayHaveGet;
            upData(function():void
            {
               if(_todayHaveGet == curgetNum + 5)
               {
                  anmiteIndex = 3;
               }
               else
               {
                  anmiteIndex = 4;
               }
               AnimateManager.playMcAnimate(_energy,anmiteIndex,"mc",function():void
               {
                  DisplayUtil.removeForParent(_energy);
               });
            });
            _energy.mouseChildren = _energy.mouseEnabled = true;
         },2,1);
      }
      
      private static function upData(param1:Function = null) : void
      {
         var fun:Function = param1;
         KTool.getMultiValue([2535,12337],function(param1:Array):void
         {
            _todayHaveGet = param1[1];
            if(_alarmMc)
            {
               _alarmMc.numTxt.text = "" + _todayHaveGet + "/100";
            }
            pass = SystemTimerManager.time - param1[0] > 0 ? int(SystemTimerManager.time - param1[0]) : 0;
            if(pass >= 2)
            {
               randomEnergyPos();
            }
            else
            {
               SystemTimerManager.addTickFun(onCountDown);
            }
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      private static function onCountDown() : void
      {
         ++pass;
         if(pass >= 2)
         {
            randomEnergyPos();
            SystemTimerManager.removeTickFun(onCountDown);
         }
      }
      
      public static function destroy() : void
      {
         SystemTimerManager.removeTickFun(onCountDown);
         if(_map)
         {
            _map = null;
         }
         if(_energy)
         {
            DisplayUtil.removeForParent(_energy);
            _energy.removeEventListener(MouseEvent.CLICK,onGet);
            _energy = null;
         }
         if(_alarmMc)
         {
            _alarmMc.removeEventListener(MouseEvent.CLICK,onGo);
            DisplayUtil.removeForParent(_alarmMc);
            _alarmMc = null;
         }
      }
   }
}
