package com.robot.app2.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CronTimeVo;
   import flash.events.MouseEvent;
   
   public class LedaRedPacketRainControl
   {
      
      private static var _openTime:String = "11:00-15:00、18:00-22:00";
      
      private static var cron1:Array = [new CronTimeVo("*","15-15","*","*","*","*"),new CronTimeVo("*","20-20","*","*","*","*")];
      
      private static var cron2:Array = [new CronTimeVo("*","11-11","*","*","*","*"),new CronTimeVo("*","20-20","*","*","*","*")];
      
      private static var acTest:ActivityControl;
      
      private static var _proNum:int = 0;
      
      private static var _curNum:int;
      
      private static var _isInTime:Boolean;
      
      private static var _doNum:int;
      
      public static var mapsIdArr:Array = [];
      
      public static var dayMapInfoArr:Array = [];
      
      private static var _map:MapModel;
       
      
      public function LedaRedPacketRainControl()
      {
         super();
      }
      
      public static function setup() : void
      {
         _map = MapManager.currentMap;
         var j:int = 0;
         while(j < 10)
         {
            _map.depthLevel["mc_" + j].visible = false;
            j++;
         }
      }
      
      private static function onTimer() : void
      {
         if(getCurNum() != _curNum)
         {
            _curNum = getCurNum();
            update();
         }
         if(_isInTime != getIsInTime())
         {
            if(!getIsInTime() && _doNum < 10)
            {
               Alarm2.show("这轮流星雨已经结束了！群星之愿化为星尘回归了星空的怀抱，下轮流星雨时间请关注「星与月的约定」活动面板或「全服播报」！");
            }
            _isInTime = getIsInTime();
            update();
         }
      }
      
      private static function initView() : void
      {
         _map = MapManager.currentMap;
         var _loc1_:int = 0;
         while(_loc1_ < 10)
         {
            _map.depthLevel["mc_" + _loc1_].addEventListener(MouseEvent.CLICK,onItemClick);
            _map.depthLevel["mc_" + _loc1_].buttonMode = true;
            _map.depthLevel["mc_" + _loc1_].visible = false;
            _loc1_++;
         }
      }
      
      private static function onItemClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var index:int = int(event.currentTarget.name.split("_")[1]);
         BonusController.addDelay(3733);
         KTool.socketSendCallBack(41900,function():void
         {
            KTool.getMultiValue([124038],function(param1:Array):void
            {
               if(KTool.subByte(param1[0],0,8) > _proNum && _proNum <= 84)
               {
                  ModuleManager.showAppModule("LedaRedPacketRainWishAlertPanel");
               }
               else
               {
                  BonusController.showDelayBonus(3733);
                  showAlert();
               }
               update();
            });
         },[20,11 + index]);
      }
      
      private static function showAlert() : void
      {
         if(_doNum == 9)
         {
            Alarm2.show("当前场景中「祈愿的星光」已拾取完毕！下轮流星雨时间请关注「星与月的约定」活动面板或「全服播报」！");
         }
      }
      
      private static function update() : void
      {
         KTool.getMultiValue([203084,203085,203086,203087,124038],function(param1:Array):void
         {
            var daily:int = 0;
            var timeIndex:int = 0;
            var mapIndexs:Array = null;
            var curMapIndex:int = 0;
            var mapId:int = 0;
            var j:int = 0;
            var k:int = 0;
            var arrIndex:int = 0;
            var n:int = 0;
            var va:Array = param1;
            if(getIsInTime())
            {
               _proNum = KTool.subByte(va[4],0,8);
               daily = ActivityTimeControl.getNumberDay(326);
               daily = daily >= 14 ? 14 : daily;
               timeIndex = getTimeIndex();
               mapIndexs = dayMapInfoArr[daily - 1].mapsIndexArr;
               curMapIndex = int(mapIndexs[getCurNum() - 1 + timeIndex * 4]);
               mapId = int(mapsIdArr[curMapIndex - 1].mapId);
               timeIndex = getTimeIndex();
               if(BitUtils.getBit(va[getCurNum() - 1],16 * timeIndex + 15) == 0 && _map.id == mapId)
               {
                  KTool.socketSendCallBack(41900,function():void
                  {
                  },[20,getCurNum()]);
               }
               j = 0;
               while(j < 10)
               {
                  _map.depthLevel["mc_" + j].visible = false;
                  j++;
               }
               if(_map.id == mapId)
               {
                  _doNum = 0;
                  k = 0;
                  while(k < 10)
                  {
                     arrIndex = getCurNum() - 1;
                     if(BitUtils.getBit(va[arrIndex],k + 16 * timeIndex) > 0)
                     {
                        _map.depthLevel["mc_" + k].visible = false;
                        ++_doNum;
                     }
                     else
                     {
                        _map.depthLevel["mc_" + k].visible = true;
                     }
                     k++;
                  }
               }
            }
            else
            {
               n = 0;
               while(n < 10)
               {
                  _map.depthLevel["mc_" + n].visible = false;
                  n++;
               }
            }
         });
      }
      
      public static function destroy() : void
      {
         NpcDialog.hide();
         SystemTimerManager.removeTickFun(onTimer);
      }
      
      public static function getIsInTime() : Boolean
      {
         var _loc1_:Array = null;
         if(SystemTimerManager.sysBJDate.date == 28)
         {
            _loc1_ = cron1;
         }
         else
         {
            _loc1_ = cron2;
         }
         if(acTest == null)
         {
            acTest = new ActivityControl(_loc1_);
         }
         if(acTest.isInActivityTime)
         {
            return true;
         }
         return false;
      }
      
      public static function getTimeIndex() : int
      {
         if(!getIsInTime())
         {
            return -1;
         }
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         if(SystemTimerManager.sysBJDate.date != 28)
         {
            if(_loc1_.hours == 11)
            {
               return 0;
            }
            return 1;
         }
         if(_loc1_.hours == 15)
         {
            return 0;
         }
         return 1;
      }
      
      public static function getCurNum() : int
      {
         if(!getIsInTime())
         {
            return 0;
         }
         return int(SystemTimerManager.sysBJDate.minutes / 15) + 1;
      }
      
      public static function getSurplusOpenTime() : int
      {
         var _loc3_:Date = null;
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         var _loc2_:int = 0;
         if(SystemTimerManager.sysBJDate.date != 28)
         {
            if(_loc1_.hours < 11)
            {
               _loc3_ = new Date(_loc1_.fullYear,_loc1_.month,_loc1_.date,11,0,0);
               _loc2_ = (_loc3_.time - SystemTimerManager.sysBJDate.time) / 1000;
            }
            else if(_loc1_.hours > 11 && _loc1_.hours < 20)
            {
               _loc3_ = new Date(_loc1_.fullYear,_loc1_.month,_loc1_.date,20,0,0);
               _loc2_ = (_loc3_.time - SystemTimerManager.sysBJDate.time) / 1000;
            }
            else
            {
               _loc3_ = new Date(_loc1_.fullYear,_loc1_.month,_loc1_.date + 1,11,0,0);
               _loc2_ = (_loc3_.time - SystemTimerManager.sysBJDate.time) / 1000;
            }
         }
         else if(_loc1_.hours < 15)
         {
            _loc3_ = new Date(_loc1_.fullYear,_loc1_.month,_loc1_.date,15,0,0);
            _loc2_ = (_loc3_.time - SystemTimerManager.sysBJDate.time) / 1000;
         }
         else if(_loc1_.hours > 11 && _loc1_.hours < 20)
         {
            _loc3_ = new Date(_loc1_.fullYear,_loc1_.month,_loc1_.date,20,0,0);
            _loc2_ = (_loc3_.time - SystemTimerManager.sysBJDate.time) / 1000;
         }
         else
         {
            _loc3_ = new Date(_loc1_.fullYear,_loc1_.month,_loc1_.date + 1,15,0,0);
            _loc2_ = (_loc3_.time - SystemTimerManager.sysBJDate.time) / 1000;
         }
         return _loc2_;
      }
   }
}
