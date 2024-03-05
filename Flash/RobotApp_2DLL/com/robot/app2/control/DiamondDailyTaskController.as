package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import org.taomee.utils.DisplayUtil;
   
   public class DiamondDailyTaskController
   {
      
      private static var _taskStates:Array;
      
      private static var _rewardStates:Array;
      
      private static var _icon:MovieClip;
      
      private static var _showGet:Boolean;
      
      private static const TASK_LENGTH:int = 10;
      
      private static var _tmpArrow:MovieClip;
      
      private static const CRT:int = 46;
      
      private static const curversion:int = 3;
       
      
      public function DiamondDailyTaskController()
      {
         super();
      }
      
      public static function get tmpArrow() : MovieClip
      {
         return _tmpArrow;
      }
      
      public static function set tmpArrow(param1:MovieClip) : void
      {
         if(_tmpArrow)
         {
            DisplayUtil.removeForParent(tmpArrow);
         }
         _tmpArrow = param1;
      }
      
      public static function setup(param1:MovieClip = null) : void
      {
         _icon = param1;
         SocketConnection.removeCmdListener(46181,onNotice);
         SocketConnection.addCmdListener(46181,onNotice);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onCheckMap);
      }
      
      private static function onCheckMap(param1:* = null) : void
      {
      }
      
      public static function update() : void
      {
         setup(_icon);
      }
      
      private static function onNotice(param1:* = null) : void
      {
         setup(_icon);
         showComplete();
         tmpArrow = null;
      }
      
      public static function tryFinish(param1:int, param2:int = 0) : void
      {
         var index:int = param1;
         var id:int = param2;
      }
      
      public static function tryFinishNew(param1:int = 1, param2:int = 1) : void
      {
         var id:int = param1;
         var cversion:int = param2;
         KTool.getMultiValue([15742],function(param1:Array):void
         {
            var arr:Array = param1;
            var rewared:Boolean = KTool.getBit(arr[0],id + 1) > 0;
            if(!rewared && curversion == cversion)
            {
               SocketConnection.sendByQueue(CommandID.DIAMOND_TASK_REWARD_DAILY,[3,1],function(param1:*):void
               {
               });
            }
         });
      }
      
      public static function updateIconState() : void
      {
      }
      
      public static function onClickIcon(param1:MovieClip) : void
      {
         StatManager.sendStat2014("每日钻石任务","点击icon",StatManager.RUN_ACT);
         ModuleManager.showModule(ClientConfig.getAppModule("DiamondTaskNewPanel"));
      }
      
      public static function showComplete() : void
      {
      }
   }
}
