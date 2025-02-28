package com.robot.app.mapProcess.control
{
   import com.robot.app.control.BroadcastController;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.BroadcastInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class GivingFunlandCoinController
   {
      
      public static var _map:BaseMapProcess;
      
      private static const ACTIVITY_TIME_START_SHOW:uint = SystemTimerManager.getTimeByDate(2014,1,30,0,0);
      
      private static const ACTIVITY_TIME_START:uint = SystemTimerManager.getTimeByDate(2014,1,30,12,55);
      
      private static const ACTIVITY_TIME_END:uint = SystemTimerManager.getTimeByDate(2014,1,30,15,30);
      
      private static var _taskLis:Array = [1580,1581,1582];
       
      
      public function GivingFunlandCoinController()
      {
         super();
      }
      
      public static function setup() : void
      {
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onTimer);
      }
      
      private static function onTimer(param1:SocketEvent) : void
      {
         var _loc3_:BroadcastInfo = null;
         var _loc2_:Date = SystemTimerManager.sysBJDate;
         if(_loc2_.month == 11 && _loc2_.date == 2)
         {
            if(_loc2_.hoursUTC == 4 && _loc2_.minutesUTC == 55 || _loc2_.minutesUTC == 0 && _loc2_.hoursUTC == 6 || _loc2_.minutesUTC == 0 && _loc2_.hoursUTC == 7)
            {
               _loc3_ = new BroadcastInfo();
               _loc3_.isLocal = true;
               _loc3_.map = 324;
               _loc3_.txt = "乐园代币大放送已经开始啦，每人都能获得五十万乐园代币，立刻前往超NO空间领取吧！";
               BroadcastController.addBroadcast(_loc3_);
            }
         }
         else if(_loc2_.time / 1000 > ACTIVITY_TIME_END)
         {
            SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onTimer);
         }
      }
      
      public static function start(param1:BaseMapProcess) : void
      {
         _map = param1;
         var _loc2_:Date = SystemTimerManager.sysBJDate;
         if(_loc2_.time / 1000 < ACTIVITY_TIME_END && _loc2_.time / 1000 > ACTIVITY_TIME_START_SHOW)
         {
            _map.depthLevel["giveCoinsWb"].visible = true;
            _map.depthLevel["giveCoinsBtn"].visible = true;
            _map.depthLevel["giveCoinsBtn"].addEventListener(MouseEvent.CLICK,onGiveCoinsClick);
            ToolTipManager.add(_map.depthLevel["giveCoinsBtn"],"乐园代币领取装置");
            ToolTipManager.add(_map.depthLevel["giveCoinsWb"],"乐园代币大放送");
            _map.depthLevel["giveCoinsWb"].buttonMode = true;
            _map.depthLevel["giveCoinsWb"].addEventListener(MouseEvent.CLICK,onGiveCoinsWbClick);
            _map.depthLevel["giveCoinsWb"].txtName.text = "乐园代币派发员";
            initGiveCoinsTask();
         }
         else
         {
            DisplayUtil.removeForParent(_map.depthLevel["giveCoinsWb"]);
            DisplayUtil.removeForParent(_map.depthLevel["giveCoinsBtn"]);
         }
         setup();
      }
      
      private static function initGiveCoinsTask() : void
      {
         var _loc1_:uint = 0;
         while(_loc1_ < 3)
         {
            if(TasksManager.getTaskStatus(_taskLis[_loc1_]) == TasksManager.UN_ACCEPT)
            {
               TasksManager.accept(_taskLis[_loc1_]);
            }
            _loc1_++;
         }
      }
      
      private static function onGiveCoinsWbClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var date:Date = SystemTimerManager.sysBJDate;
         SocketConnection.send(1022,86059661);
         if(date.time / 1000 < ACTIVITY_TIME_START)
         {
            NpcDialog.show(NPC.SEER_DAIBI_PAIFA,["你好，" + MainManager.actorInfo.formatNick + "！2014年1月30日12:55起，每个整点就能在我这里领取乐园代币（每人总共500），记得一定要来哦！"],["嗯嗯，我一定准时参加!"]);
         }
         else if(date.time / 1000 >= ACTIVITY_TIME_START && date.time / 1000 <= ACTIVITY_TIME_END)
         {
            NpcDialog.show(NPC.SEER_DAIBI_PAIFA,["你好，" + MainManager.actorInfo.formatNick + "！现在是乐园代币大放送时间！赶紧领取吧！"],["立刻领取！","到处逛逛！"],[function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("GivingFunlandCoinsPanel"),"正在打开面板....");
            }]);
         }
         else
         {
            NpcDialog.show(NPC.SEER_DAIBI_PAIFA,["你好，小赛尔！乐园代币大放送时间已经结束！"],["我知道了！"]);
         }
      }
      
      private static function onGiveCoinsClick(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86059660);
         ModuleManager.showModule(ClientConfig.getAppModule("GivingFunlandCoinsPanel"),"正在打开面板....");
      }
   }
}
