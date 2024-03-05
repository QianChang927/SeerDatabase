package com.robot.app.protectSys
{
   import com.robot.app.panel.MapNamePanel;
   import com.robot.core.CommandID;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.KeyboardEvent;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class ProtectSystem
   {
      
      private static var _ui:MovieClip;
      
      private static var _total:int;
      
      private static var _leftTime:int;
      
      private static var _onlineTime:int;
      
      public static var lock:Boolean = false;
       
      
      public function ProtectSystem()
      {
         super();
      }
      
      public static function get onlineTime() : int
      {
         return _onlineTime;
      }
      
      public static function start(param1:MovieClip) : void
      {
         _ui = param1;
         _ui["maskMc"].addEventListener(MouseEvent.MOUSE_MOVE,onMouseOver);
         _ui["maskMc"].addEventListener(MouseEvent.MOUSE_OUT,onMouseOut);
         MainManager.getStage().addEventListener(MouseEvent.CLICK,onStageClick);
         MainManager.getStage().addEventListener(MouseEvent.MOUSE_MOVE,onStageClick);
         MainManager.getStage().addEventListener(KeyboardEvent.KEY_DOWN,onStageClick);
         BatteryDormantController.init(beforeEnterDormant,afterLeaveDormant);
         _total = MainManager.actorInfo.timeLimit;
         _leftTime = _total - MainManager.actorInfo.timeToday;
         if(_leftTime < 0)
         {
            _leftTime = 0;
         }
         updateToolbar();
         SystemTimerManager.addTickFun(setOnlineTime);
         SocketConnection.addCmdListener(CommandID.SYNC_TIME,onSyncTime);
      }
      
      private static function onStageClick(param1:*) : void
      {
         BatteryDormantController.resetCountdown();
      }
      
      private static function beforeEnterDormant() : void
      {
         SystemTimerManager.removeTickFun(setOnlineTime);
      }
      
      private static function afterLeaveDormant() : void
      {
         SystemTimerManager.addTickFun(setOnlineTime);
      }
      
      private static function onMouseOver(param1:MouseEvent) : void
      {
         var _loc2_:int = 0;
         if(SystemTimerManager.sysDate.getDay() >= 1 && SystemTimerManager.sysDate.getDay() <= 4)
         {
            _loc2_ = Math.ceil(_leftTime / 60) - 120;
            if(_loc2_ < 0)
            {
               _loc2_ = 0;
            }
            ToolTipManager.add(_ui["maskMc"],"剩余电池经验加成时间：" + _loc2_ + "分钟\r当前经验倍数：" + MapNamePanel.currentExp + "倍\r当前学习力倍数：" + MapNamePanel.currentLearn + "倍");
         }
         else
         {
            ToolTipManager.add(_ui["maskMc"],"剩余电池经验加成时间：" + Math.ceil(_leftTime / 60) + "分钟\r当前经验倍数：" + MapNamePanel.currentExp + "倍\r当前学习力倍数：" + MapNamePanel.currentLearn + "倍");
         }
      }
      
      private static function onMouseOut(param1:MouseEvent) : void
      {
         ToolTipManager.remove(_ui["maskMc"]);
      }
      
      private static function setOnlineTime() : void
      {
         if(_leftTime > 0)
         {
            --_leftTime;
            if(_leftTime == 0)
            {
               Alarm.show("精灵包电量耗尽，所有精灵进入休眠状态！明天电量就可以恢复，你就可以继续训练精灵了！");
            }
            if(_leftTime % 60 == 0)
            {
               updateToolbar();
            }
         }
         ++_onlineTime;
         if(_onlineTime == 2700 || _onlineTime == 5400 || _onlineTime == 8100 || _onlineTime == 10800)
         {
            MaskScreen.show(1);
         }
         else if(_onlineTime == 14400)
         {
            MaskScreen.show(2);
         }
         else if(_onlineTime == 18000)
         {
            MaskScreen.show(3);
         }
      }
      
      private static function onSyncTime(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _leftTime = _total - _loc2_.readUnsignedInt();
         if(_leftTime < 0)
         {
            _leftTime = 0;
         }
      }
      
      private static function updateToolbar() : void
      {
         var _loc1_:String = twoString(Math.floor(_leftTime / 3600).toString());
         var _loc2_:String = twoString((Math.floor(_leftTime / 60) % 60).toString());
         _ui["timeTxt"].text = _loc1_ + ":" + _loc2_;
         var _loc3_:int = Math.ceil(4 * (_leftTime / _total));
         _loc3_ = _loc3_ > 4 ? 4 : _loc3_;
         var _loc4_:uint = 0;
         while(_loc4_ < 4)
         {
            _ui["bar_" + _loc4_].visible = false;
            _loc4_++;
         }
         var _loc5_:uint = 0;
         while(_loc5_ < _loc3_)
         {
            _ui["bar_" + _loc5_].visible = true;
            _loc5_++;
         }
      }
      
      private static function twoString(param1:String) : String
      {
         while(param1.length < 2)
         {
            param1 = "0" + param1;
         }
         return param1;
      }
      
      public static function showPluginPanel() : void
      {
         MaskScreen.show(4);
      }
      
      public static function getDoubleExpTime() : int
      {
         var _loc1_:int = 0;
         if(SystemTimerManager.sysDate.getDay() >= 1 && SystemTimerManager.sysDate.getDay() <= 4)
         {
            _loc1_ = _leftTime - 120 * 60;
            if(_loc1_ < 0)
            {
               _loc1_ = 0;
            }
            return _loc1_;
         }
         return _leftTime;
      }
      
      public static function getBatteryTimeLeft() : int
      {
         return _leftTime;
      }
   }
}
