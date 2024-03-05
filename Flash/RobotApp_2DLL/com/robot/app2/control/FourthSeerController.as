package com.robot.app2.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.behavior.ChatBehavior;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.text.TextField;
   
   public class FourthSeerController
   {
      
      public static var fourthSeerTalkFlag:Boolean;
      
      private static var _curNum:uint;
      
      private static var addSpeed:uint;
      
      private static var addSpeedList:Array = [0,1111,740,555,590,30,0];
      
      private static const INCOMING:uint = 0;
      
      private static const PAST:uint = 5;
      
      private static const ACTIVE1:uint = 1;
      
      private static const ACTIVE2:uint = 2;
      
      private static const ACTIVE3:uint = 3;
      
      private static const ACTIVE4:uint = 4;
      
      private static const ENDGAME:uint = 6;
      
      private static var time1:CronTimeVo = new CronTimeVo("0-15","14","8","6","*","2013");
      
      private static var time2:CronTimeVo = new CronTimeVo("15-59","14","8","6","*","2013");
      
      private static var time3:CronTimeVo = new CronTimeVo("*","15","8","6","*","2013");
      
      private static var time4_1:CronTimeVo = new CronTimeVo("*","16-17","8","6","*","2013");
      
      private static var time4_2:CronTimeVo = new CronTimeVo("0-20","18","8","6","*","2013");
      
      private static var sayHelloTime:Date = new Date(2013,5,8,14,0,0);
      
      private static var pastTime:Date = new Date(2013,5,13,15,0,0);
      
      private static var achTime:CronTimeVo = new CronTimeVo("*","14","8-13","6","*","2013");
       
      
      public function FourthSeerController()
      {
         super();
      }
      
      public static function get curNum() : uint
      {
         return _curNum;
      }
      
      public static function setup() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            setStartNum();
            SystemTimerManager.addTickFun(gameStart);
         });
      }
      
      public static function checkSayHelloTime() : Boolean
      {
         if(SystemTimerManager.sysBJDate > sayHelloTime && SystemTimerManager.sysBJDate < pastTime)
         {
            return true;
         }
         return false;
      }
      
      private static function setStartNum() : void
      {
         switch(activeStatus)
         {
            case INCOMING:
               _curNum = 0;
               break;
            case PAST:
               _curNum = 10000000 + (30 + uint(6 * Math.random())) * (SystemTimerManager.time - SystemTimerManager.getTimeByDate(2013,6,8,18,20,0));
               break;
            case ACTIVE1:
               _curNum = (1100 + uint(20 * Math.random())) * (SystemTimerManager.time - SystemTimerManager.getTimeByDate(2013,6,8,14,0,0));
               break;
            case ACTIVE2:
               _curNum = 1000000 + (730 + uint(20 * Math.random())) * (SystemTimerManager.time - SystemTimerManager.getTimeByDate(2013,6,8,14,15,0));
               break;
            case ACTIVE3:
               _curNum = 3000000 + (540 + uint(35 * Math.random())) * (SystemTimerManager.time - SystemTimerManager.getTimeByDate(2013,6,8,15,0,0));
               break;
            case ACTIVE4:
               _curNum = 5000000 + (570 + uint(40 * Math.random())) * (SystemTimerManager.time - SystemTimerManager.getTimeByDate(2013,6,8,16,0,0));
               break;
            default:
               _curNum = 25332508;
         }
      }
      
      public static function setCountDown(param1:TextField) : void
      {
         var _loc2_:int = SystemTimerManager.getTimeByDate(2013,6,8,14,0,0) - SystemTimerManager.time;
         if(_loc2_ < 0)
         {
            _loc2_ = 0;
         }
         param1.text = SystemTimerManager.getTimeClockString(_loc2_);
      }
      
      public static function getGiftPlayerNum() : uint
      {
         var _loc1_:String = _curNum.toString();
         var _loc2_:String = _loc1_.substr(0,_loc1_.length - 2);
         return uint(_loc2_.concat(4));
      }
      
      public static function getUgiftPlayerNum() : uint
      {
         var _loc3_:String = null;
         var _loc1_:String = _curNum.toString();
         var _loc2_:uint = uint(_loc1_.slice(-1));
         if(_loc2_ == 4)
         {
            _loc3_ = _loc1_.substr(0,_loc1_.length - 2);
            return uint(_loc3_.concat(0));
         }
         return _curNum;
      }
      
      private static function gameStart() : void
      {
         updateAddSpeed();
         updateCurNum();
      }
      
      private static function updateAddSpeed() : void
      {
         addSpeed = addSpeedList[activeStatus];
      }
      
      private static function updateCurNum() : void
      {
         var _loc2_:uint = 0;
         var _loc1_:uint = uint(addSpeed / 3 * Math.random());
         if(Math.random() > 0.5)
         {
            _loc2_ = addSpeed + _loc1_;
         }
         else
         {
            _loc2_ = uint(addSpeed - _loc1_);
         }
         _curNum += _loc2_;
      }
      
      public static function endHello(param1:String) : void
      {
         var mc:MovieClip = null;
         var ss:String = param1;
         fourthSeerTalkFlag = true;
         MainManager.actorModel.execBehavior(new ChatBehavior(ss));
         if(MapManager.currentMap.id == 90)
         {
            mc = MapManager.currentMap.controlLevel["FourthSeerBtn"];
            AnimateManager.playMcAnimate(mc,2,"mc1",function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("adown/FourthSeerGiftPanel"));
               mc.gotoAndStop(1);
            });
         }
      }
      
      public static function getAchieveTime() : Boolean
      {
         return achTime.isActive(SystemTimerManager.sysBJDate);
      }
      
      private static function get activeStatus() : uint
      {
         if(time1.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.INCOMING)
         {
            return INCOMING;
         }
         if(time4_2.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.PAST)
         {
            if(SystemTimerManager.sysBJDate > pastTime)
            {
               return ENDGAME;
            }
            return PAST;
         }
         if(time1.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
         {
            return ACTIVE1;
         }
         if(time2.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
         {
            return ACTIVE2;
         }
         if(time3.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
         {
            return ACTIVE3;
         }
         if(time4_1.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT || time4_2.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
         {
            return ACTIVE4;
         }
         return PAST;
      }
   }
}
