package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.component.CollectionComponet;
   import com.robot.app2.component.TimeCountdownComponent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   
   public class RaySoulBattleArmorController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _collectComp:CollectionComponet;
      
      private static var _countDownComp:TimeCountdownComponent;
      
      private static var _collectNum:int;
      
      private static var _crystalNum:int;
      
      private static var _time:uint = 0;
       
      
      public function RaySoulBattleArmorController()
      {
         super();
      }
      
      public static function destroy() : void
      {
         _collectComp.destroy();
         _collectComp = null;
         if(_countDownComp != null)
         {
            _countDownComp.destroy();
            _countDownComp = null;
         }
         _map = null;
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         KTool.getMultiValue([2770],function(param1:Array):void
         {
            _collectComp = new CollectionComponet(_map.depthLevel,3000,5,colletHandle,clickHandle);
            _time = param1[0];
            _collectNum = 0;
            if(SystemTimerManager.time - _time < 60 && _time != 0)
            {
               _collectNum = 5;
               showCountDown();
            }
            else
            {
               _map.topLevel.visible = false;
            }
            var _loc2_:int = 1;
            while(_loc2_ < 6)
            {
               CommonUI.addYellowArrow(_map.depthLevel["mc_" + _loc2_],19,-10);
               _loc2_++;
            }
         });
      }
      
      private static function clickHandle(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         StatManager.sendStat2014("0325雷魂战甲 能源危机","在场景中点击采集能源结晶","2016运营活动");
         ItemManager.updateAndGetItemsNum([1708721],function(param1:Array):void
         {
            var i:int = 0;
            var a:Array = param1;
            _crystalNum = a[0];
            if(_collectNum < 5)
            {
               i = int(e.target.name.replace("mc_",""));
               CommonUI.removeYellowArrow(_map.depthLevel["mc_" + i]);
               _collectComp.walkUnable = true;
               _collectComp.start();
            }
            else if(_crystalNum < 10)
            {
               Alarm.show("能源结晶被采集完了，请等待1分钟，结晶重新生成之后再开始采集！");
            }
            else
            {
               Alarm.show("已采集足够的能源结晶，快去帮助雷小伊激活雷魂战甲！",function():void
               {
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     ModuleManager.showAppModule("RaySoulBattleArmorPanel");
                  });
               });
            }
         });
      }
      
      private static function colletHandle(param1:int) : void
      {
         var i:int = param1;
         _collectComp.collectEnable = false;
         SocketConnection.sendByQueue(47282,[4,0],function(param1:SocketEvent):void
         {
            var e:SocketEvent = param1;
            KTool.getMultiValue([2770],function(param1:Array):void
            {
               _collectComp.collectEnable = true;
               _time = param1[0];
               CommonUI.addYellowArrow(_map.depthLevel["mc_" + i],19,-10);
               if(SystemTimerManager.time - _time < 60 && _time != 0)
               {
                  _collectNum = 5;
                  showCountDown();
               }
            });
         });
      }
      
      private static function showCountDown() : void
      {
         _map.topLevel.visible = true;
         if(_countDownComp == null)
         {
            _countDownComp = new TimeCountdownComponent(_map.topLevel["timeText"]);
         }
         var _loc1_:int = 60 - SystemTimerManager.time + _time;
         _countDownComp.initialSeconds = _loc1_ > 60 ? 60 : _loc1_;
         _countDownComp.start(hideCountDown);
      }
      
      private static function hideCountDown() : void
      {
         _map.topLevel.visible = false;
         _collectNum = 0;
         _countDownComp.stop();
      }
   }
}
