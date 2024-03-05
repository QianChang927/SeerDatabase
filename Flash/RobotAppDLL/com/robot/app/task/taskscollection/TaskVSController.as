package com.robot.app.task.taskscollection
{
   import com.robot.core.CommandID;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   
   public class TaskVSController
   {
      
      private static var ACTIVITY_TIME_START:uint;
      
      private static var ACTIVITY_TIME_END:uint;
      
      public static var _map:BaseMapProcess;
      
      public static var icon:MovieClip;
       
      
      public function TaskVSController()
      {
         super();
      }
      
      public static function setup() : void
      {
         var t:uint = 0;
         t = setTimeout(function():void
         {
            clearTimeout(t);
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,checkCurrentState);
            var _loc1_:* = SystemTimerManager.sysDate;
            if(_loc1_.date == 21)
            {
               ACTIVITY_TIME_START = SystemTimerManager.getTimeByDate(2012,9,21,19,0);
               ACTIVITY_TIME_END = SystemTimerManager.getTimeByDate(2012,9,21,20,0);
            }
            else if(_loc1_.date == 22 || _loc1_.date == 23)
            {
               ACTIVITY_TIME_START = SystemTimerManager.getTimeByDate(2012,9,_loc1_.date,13,0);
               ACTIVITY_TIME_END = SystemTimerManager.getTimeByDate(2012,9,_loc1_.date,14,0);
            }
         },2000);
      }
      
      private static function checkCurrentState(param1:SocketEvent) : void
      {
         var _loc2_:Date = SystemTimerManager.sysDate;
         if(_loc2_.time / 1000 <= ACTIVITY_TIME_END)
         {
            if(_loc2_.time / 1000 >= ACTIVITY_TIME_START && _loc2_.time / 1000 <= ACTIVITY_TIME_END)
            {
               initIcon();
            }
         }
         else
         {
            SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,checkCurrentState);
            if(icon)
            {
               icon.visible = false;
            }
         }
      }
      
      private static function initIcon() : void
      {
         if(!icon)
         {
            addIcon();
            setIcon();
         }
         else
         {
            setIcon();
         }
      }
      
      private static function addIcon() : void
      {
         icon = UIManager.getMovieClip("vs_icon");
         icon.x = 584;
         icon.y = 10;
         icon.addEventListener(MouseEvent.CLICK,onIconHandler);
         LevelManager.toolsLevel.addChild(icon);
      }
      
      private static function onIconHandler(param1:MouseEvent) : void
      {
         var _loc2_:Date = SystemTimerManager.sysDate;
         var _loc3_:int = activeState;
         var _loc4_:Array = [86049974,86049975,86049976,86049977,86049978,86049979,86049980,86049981,86049982,86049983,86049984,86049985];
         SocketConnection.send(1022,_loc4_[_loc3_]);
         MapManager.changeMap(457);
      }
      
      private static function setIcon() : void
      {
         var _loc1_:int = activeState;
         var _loc2_:Date = SystemTimerManager.sysDate;
         if(_loc2_.time / 1000 <= ACTIVITY_TIME_END)
         {
            if(_loc1_ == 11 && _loc2_.date == 21)
            {
               icon["info"]["text"].text = "第12轮对战开始，距离12轮可获得阿洛比斯精元和超进化道具！";
            }
            else if(_loc1_ == 11 && (_loc2_.date == 22 || _loc2_.date == 23))
            {
               icon["info"]["text"].text = "第12轮对战开始，本轮可获得月影之石哦！";
            }
            else
            {
               icon["info"]["text"].text = "第" + (_loc1_ + 1) + "轮对战已经开始";
            }
         }
      }
      
      private static function get activeState() : int
      {
         var _loc3_:int = 0;
         var _loc1_:Date = SystemTimerManager.sysDate;
         var _loc2_:int = _loc1_.minutesUTC;
         return int(_loc2_ / 5);
      }
      
      public static function initForFirst(param1:BaseMapProcess) : void
      {
         _map = param1;
      }
      
      public static function firstDestroy() : void
      {
         _map = null;
      }
   }
}
