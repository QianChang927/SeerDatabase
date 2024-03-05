package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.OgreModel;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.geom.Point;
   import flash.net.SharedObject;
   
   public class XinChunShiKeBiaoController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMC:MovieClip;
      
      private static var _so:SharedObject;
      
      private static var _panelMc:MovieClip;
      
      private static var ogres1:Array = [];
      
      private static var ogres2:Array = [];
      
      private static var BOSS1:Array = [2538,2529,2498,2495];
      
      private static var BOSS2:Array = [2501,2534,2540,2473,2459,2440,2431];
      
      private static var activeTimes1:Array = [new CronTimeVo("0-30","16","13-16","2","*","2015")];
      
      private static var activeTimes2:Array = [new CronTimeVo("31-59","16","13-16","2","*","2015")];
      
      private static var activeTimes3:Array = [new CronTimeVo("0-30","17","13-16","2","*","2015")];
      
      private static var activeTimes4:Array = [new CronTimeVo("31-59","17","13-16","2","*","2015")];
      
      private static var flag1:uint;
      
      private static var flag2:uint;
      
      private static var _randIndex1:uint = 0;
      
      private static var _randIndex2:uint = 0;
      
      private static var _randLocalIndex1:int;
      
      private static var _randLocalIndex2:int;
       
      
      public function XinChunShiKeBiaoController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         KTool.changeMapWithCallBack(90,function():void
         {
            SystemTimerManager.addTickFun(refreshPet);
         });
      }
      
      private static function refreshPet() : void
      {
         var _loc1_:uint = 0;
         var _loc2_:uint = 0;
         var _loc3_:uint = 0;
         var _loc4_:uint = 0;
         var _loc5_:uint = 0;
         var _loc6_:uint = 0;
         if(isActivityTime1())
         {
            _loc1_ = uint(SystemTimerManager.time);
            _loc2_ = _loc1_ / (60 * 60);
            _loc3_ = (_loc1_ - _loc2_ * 60 * 60) / 60;
            _loc1_ = _loc1_ - _loc2_ * 3600 - _loc3_ * 60;
            if(_loc1_ == 0 || _loc1_ == 15 || _loc1_ == 30 || _loc1_ == 45)
            {
               if(flag1 == 0)
               {
                  _randIndex1 = getRandom();
                  _randLocalIndex1 = getRandomLocation();
                  addBoss1();
               }
            }
            else if(_loc1_ == 11 || _loc1_ == 26 || _loc1_ == 41)
            {
               if(flag1 == 1)
               {
                  removeBoss1();
               }
            }
         }
         else if(isActivityTime2())
         {
            _loc5_ = (_loc4_ = uint(SystemTimerManager.time)) / (60 * 60);
            _loc6_ = (_loc4_ - _loc5_ * 60 * 60) / 60;
            if((_loc4_ = _loc4_ - _loc5_ * 3600 - _loc6_ * 60) == 0 || _loc4_ == 15 || _loc4_ == 30 || _loc4_ == 45)
            {
               if(flag2 == 0)
               {
                  _randIndex2 = getRandom2();
                  _randLocalIndex2 = getRandomLocation();
                  addBoss2();
               }
            }
            else if(_loc4_ == 11 || _loc4_ == 26 || _loc4_ == 41)
            {
               if(flag2 == 1)
               {
                  removeBoss2();
               }
            }
         }
         else
         {
            if(flag1 == 1)
            {
               removeBoss1();
            }
            if(flag2 == 1)
            {
               removeBoss2();
            }
         }
      }
      
      private static function addBoss1() : void
      {
         var _loc3_:OgreModel = null;
         ogres1 = [];
         var _loc1_:Array = [new Point(100,380),new Point(350,430),new Point(360,360),new Point(577,295)];
         var _loc2_:int = 0;
         while(_loc2_ < 1)
         {
            _loc3_ = new OgreModel(_loc2_);
            ogres1.push(_loc3_);
            _loc3_.addEventListener(RobotEvent.OGRE_CLICK,onClickBossHandler1);
            _loc3_.show(BOSS1[_randIndex1],_loc1_[_randLocalIndex1]);
            _loc2_++;
         }
         flag1 = 1;
      }
      
      private static function addBoss2() : void
      {
         var _loc3_:OgreModel = null;
         ogres2 = [];
         var _loc1_:Array = [new Point(100,380),new Point(350,430),new Point(360,360),new Point(577,295)];
         var _loc2_:int = 0;
         while(_loc2_ < 1)
         {
            _loc3_ = new OgreModel(_loc2_);
            ogres2.push(_loc3_);
            _loc3_.addEventListener(RobotEvent.OGRE_CLICK,onClickBossHandler2);
            _loc3_.show(BOSS2[_randIndex2],_loc1_[_randLocalIndex1]);
            _loc2_++;
         }
         flag2 = 1;
      }
      
      protected static function onClickBossHandler1(param1:RobotEvent) : void
      {
         var _loc2_:OgreModel = param1.currentTarget as OgreModel;
         var _loc3_:int = BOSS1.indexOf(_loc2_.id);
         if(_loc3_ >= 0)
         {
            FightManager.fightWithBoss("",_loc3_ + 14);
         }
      }
      
      protected static function onClickBossHandler2(param1:RobotEvent) : void
      {
         var _loc2_:OgreModel = param1.currentTarget as OgreModel;
         var _loc3_:int = BOSS2.indexOf(_loc2_.id);
         if(_loc3_ >= 0)
         {
            FightManager.fightWithBoss("",_loc3_ + 18);
         }
      }
      
      private static function removeBoss1() : void
      {
         var _loc1_:int = 0;
         var _loc2_:OgreModel = null;
         if(ogres1)
         {
            _loc1_ = 0;
            while(_loc1_ < ogres1.length)
            {
               _loc2_ = ogres1[_loc1_];
               _loc2_.removeEventListener(RobotEvent.OGRE_CLICK,onClickBossHandler1);
               _loc2_.destroy();
               _loc1_++;
            }
            ogres1.splice(0);
         }
         flag1 = 0;
      }
      
      private static function removeBoss2() : void
      {
         var _loc1_:int = 0;
         var _loc2_:OgreModel = null;
         if(ogres2)
         {
            _loc1_ = 0;
            while(_loc1_ < ogres2.length)
            {
               _loc2_ = ogres2[_loc1_];
               _loc2_.removeEventListener(RobotEvent.OGRE_CLICK,onClickBossHandler2);
               _loc2_.destroy();
               _loc1_++;
            }
            ogres2.splice(0);
         }
         flag2 = 0;
      }
      
      public static function isActivityTime1() : Boolean
      {
         var _loc3_:CronTimeVo = null;
         var _loc1_:CronTimeVo = new CronTimeVo("*","16-17","13-16","2","*","2015");
         var _loc2_:Array = [_loc1_];
         for each(_loc3_ in _loc2_)
         {
            if(_loc3_.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
            {
               return true;
            }
         }
         return false;
      }
      
      public static function isActivityTime2() : Boolean
      {
         var _loc3_:CronTimeVo = null;
         var _loc1_:CronTimeVo = new CronTimeVo("*","16-17","17-26","2","*","2015");
         var _loc2_:Array = [_loc1_];
         for each(_loc3_ in _loc2_)
         {
            if(_loc3_.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
            {
               return true;
            }
         }
         return false;
      }
      
      private static function getRandom() : uint
      {
         var _loc1_:uint = 0;
         var _loc2_:Number = Math.random();
         _loc2_ = Math.ceil(_loc2_ * 100);
         if(_loc2_ <= 31)
         {
            _loc1_ = 0;
         }
         else if(_loc2_ > 31 && _loc2_ <= 64)
         {
            _loc1_ = 1;
         }
         else if(_loc2_ > 64 && _loc2_ <= 95)
         {
            _loc1_ = 2;
         }
         else if(_loc2_ > 95 && _loc2_ <= 100)
         {
            _loc1_ = 3;
         }
         return _loc1_;
      }
      
      private static function getRandom2() : uint
      {
         var _loc1_:uint = 0;
         var _loc2_:Number = Math.random();
         _loc2_ = Math.ceil(_loc2_ * 100);
         if(_loc2_ <= 15)
         {
            _loc1_ = 0;
         }
         else if(_loc2_ > 15 && _loc2_ <= 30)
         {
            _loc1_ = 1;
         }
         else if(_loc2_ > 30 && _loc2_ <= 45)
         {
            _loc1_ = 2;
         }
         else if(_loc2_ > 45 && _loc2_ <= 60)
         {
            _loc1_ = 3;
         }
         else if(_loc2_ > 60 && _loc2_ <= 75)
         {
            _loc1_ = 4;
         }
         else if(_loc2_ > 75 && _loc2_ <= 85)
         {
            _loc1_ = 5;
         }
         else if(_loc2_ > 85 && _loc2_ <= 100)
         {
            _loc1_ = 6;
         }
         return _loc1_;
      }
      
      private static function getRandomLocation() : uint
      {
         return int(Math.random() * 4);
      }
      
      public static function destroy() : void
      {
         _map = null;
         _taskMC = null;
         SystemTimerManager.removeTickFun(refreshPet);
      }
   }
}
