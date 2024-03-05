package com.robot.app2.control
{
   import com.robot.app.mapProcess.control.ColorfulPrivilegeWishController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.task.MiningCountInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.TimerEvent;
   import flash.utils.ByteArray;
   import flash.utils.Timer;
   import org.taomee.events.SocketEvent;
   
   public class NonoVipController
   {
      
      private static var _icon:MovieClip;
      
      public static var isTargetUser:Boolean;
      
      private static var _count:uint = 0;
      
      private static var _moneyTimer:Timer;
      
      private static var _moneyremain:uint;
      
      private static var _timeMc:MovieClip;
      
      private static var _frames:Array;
      
      private static var _mcArray:Array;
      
      private static var _isGetDailyGift:Boolean;
       
      
      public function NonoVipController()
      {
         super();
      }
      
      public static function setup(param1:MovieClip) : void
      {
         _icon = param1;
         _icon.name = "NonoVipIcon";
         ref();
         checkIsFirstVipUser();
      }
      
      public static function checkIsFirstVipUser() : void
      {
         ItemManager.upDateCollection(1400315,function():void
         {
            if(ItemManager.getNumByID(1400315) > 0)
            {
               isTargetUser = true;
            }
            else if(!MainManager.actorInfo.vip)
            {
               isTargetUser = true;
            }
         });
      }
      
      public static function onClickIcon(param1:MovieClip = null) : void
      {
         SocketConnection.send(1022,86064911);
         ModuleManager.showModule(ClientConfig.getAppModule("SeerVipAwardPanel"));
      }
      
      public static function setupIsSign(param1:MovieClip) : void
      {
         var d:Date;
         var year:int;
         var month:int;
         var date:int;
         var day:int;
         var d1:Date;
         var d2:Date;
         var isSign:Boolean = false;
         var firstDay:uint = 0;
         var totalDay:uint = 0;
         var mc:MovieClip = param1;
         mc.gotoAndStop(1);
         d = SystemTimerManager.sysDate;
         year = d.fullYear;
         month = d.month;
         date = d.date;
         day = d.day;
         d1 = new Date(year,month,1);
         firstDay = d1.day;
         d2 = new Date(year,month + 1,0);
         totalDay = d2.date;
         SocketConnection.addCmdListener(9298,function(param1:SocketEvent):void
         {
            var _loc7_:int = 0;
            SocketConnection.removeCmdListener(9298,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            var _loc4_:int = int(_loc3_.readUnsignedInt());
            var _loc5_:uint = _loc3_.readUnsignedInt();
            var _loc6_:int = 0;
            while(_loc6_ < totalDay)
            {
               if(KTool.getBit(_loc4_,_loc6_ + 1))
               {
                  _loc7_ = _loc6_ + firstDay + 1;
                  if(_loc6_ + 1 == SystemTimerManager.sysDate.date)
                  {
                     isSign = true;
                     mc.gotoAndStop(2);
                  }
               }
               _loc6_++;
            }
         });
         SocketConnection.send(9298);
      }
      
      private static function setState(param1:uint, param2:uint) : void
      {
         var count:uint = param1;
         var frame:uint = param2;
         KTool.getFrameMc(_mcArray[count],frame,"",function():void
         {
            var _loc1_:Date = null;
            var _loc2_:uint = 0;
            var _loc3_:uint = 0;
            var _loc4_:uint = 0;
            if(frame == 2)
            {
               _loc1_ = SystemTimerManager.sysBJDate;
               _loc2_ = _loc1_.month + 1;
               if(_loc2_ == 12 && _loc1_.fullYear == 2013)
               {
                  _loc3_ = uint(SystemTimerManager.getTimeByDate(2014,1,1,0));
               }
               else if(_loc1_.fullYear == 2014)
               {
                  _loc3_ = uint(SystemTimerManager.getTimeByDate(2014,_loc2_ + 1,1,0));
               }
               else
               {
                  _loc3_ = uint(SystemTimerManager.getTimeByDate(2013,_loc2_ + 1,1,0));
               }
               if(count == 0)
               {
                  if(_loc1_.day >= 5)
                  {
                     _loc4_ = 12 - _loc1_.day;
                  }
                  else
                  {
                     _loc4_ = 5 - _loc1_.day;
                  }
               }
               else
               {
                  _loc4_ = (_loc3_ - SystemTimerManager.time) / (24 * 3600);
               }
               KTool.showScore(_mcArray[count]["num"],_loc4_);
            }
         });
         _mcArray[count].mouseChildren = _mcArray[count].mouseEnabled = frame == 2 ? false : true;
      }
      
      private static function onMoneyTimer(param1:TimerEvent) : void
      {
         if(_moneyremain > 0)
         {
            --_moneyremain;
         }
         if(_moneyremain <= 0)
         {
            if(_timeMc)
            {
               _timeMc.gotoAndStop(1);
            }
         }
         setArtNum(_timeMc,int(_moneyremain / 60),int(_moneyremain % 60));
      }
      
      private static function setArtNum(param1:MovieClip, param2:uint, param3:uint) : void
      {
         if(Boolean(param1) && Boolean(param1["txt"]))
         {
            param1["txt"].text = SystemTimerManager.getTimeClockString(_moneyremain);
         }
      }
      
      public static function setupTimerMc(param1:MovieClip) : void
      {
         var mc:MovieClip = param1;
         _timeMc = mc;
         _moneyTimer = new Timer(1000);
         _moneyTimer.addEventListener(TimerEvent.TIMER,onMoneyTimer);
         SocketConnection.addCmdListener(CommandID.TREASURE_SUPERNONO_GET_TIME,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.TREASURE_SUPERNONO_GET_TIME,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            var _loc4_:uint = _loc3_.readUnsignedInt();
            _moneyremain = _loc3_.readUnsignedInt();
            if(_moneyremain <= 0)
            {
               if(_timeMc)
               {
                  _timeMc.gotoAndStop(1);
               }
            }
            else
            {
               _timeMc.gotoAndStop(2);
            }
            if(_loc4_ == 0)
            {
               _moneyTimer.start();
            }
            else if(_loc4_ != 1)
            {
               if(_loc4_ == 2)
               {
                  _moneyTimer.start();
               }
            }
            setArtNum(_timeMc,0,0);
         });
         SocketConnection.send(CommandID.TREASURE_SUPERNONO_GET_TIME);
      }
      
      public static function destroyTimeMc() : void
      {
         if(_moneyTimer)
         {
            _moneyTimer.stop();
            _moneyTimer.removeEventListener(TimerEvent.TIMER,onMoneyTimer);
            _moneyTimer = null;
         }
         _timeMc = null;
      }
      
      public static function onData(param1:SocketEvent) : void
      {
         var oreCountInfo:MiningCountInfo;
         var cnt:uint;
         var frame:uint = 0;
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.TALK_COUNT,onData);
         oreCountInfo = e.data as MiningCountInfo;
         cnt = uint(oreCountInfo.miningCount);
         if(_count < 2)
         {
            frame = cnt > 0 ? 2 : 1;
            _frames.push(frame);
            _mcArray.forEach(function(param1:*, param2:uint, param3:Array):void
            {
               param1.gotoAndStop(frame);
            });
            ++_count;
            SocketConnection.addCmdListener(CommandID.TALK_COUNT,onData);
            SocketConnection.send(CommandID.TALK_COUNT,param2);
         }
         else
         {
            setState(0,_frames[0]);
            setState(1,_frames[1]);
         }
      }
      
      public static function setupIsGetGift(param1:Array) : void
      {
         var mcArray:Array = param1;
         _count = 0;
         _frames = [];
         _mcArray = mcArray;
         _mcArray.forEach(function(param1:*, param2:uint, param3:Array):void
         {
            param1.gotoAndStop(1);
         });
         SocketConnection.addCmdListener(CommandID.TALK_COUNT,onData);
         SocketConnection.send(CommandID.TALK_COUNT,param);
      }
      
      private static function get param2() : uint
      {
         if(!MainManager.actorInfo.isVip && ColorfulPrivilegeWishController._status == 2)
         {
            return 2111;
         }
         if(MainManager.actorInfo.isVip)
         {
            return 2110 + MainManager.actorInfo.vipLevel;
         }
         return 1501;
      }
      
      private static function get param() : uint
      {
         if(!MainManager.actorInfo.isVip && ColorfulPrivilegeWishController._status == 2)
         {
            return 2021;
         }
         if(MainManager.actorInfo.isVip)
         {
            return 2020 + MainManager.actorInfo.vipLevel;
         }
         return 1004;
      }
      
      public static function set isGetDailyGift(param1:Boolean) : void
      {
         _isGetDailyGift = param1;
         _icon.gotoAndStop(_isGetDailyGift ? 1 : 2);
      }
      
      public static function get isGetDailyGift() : Boolean
      {
         return _isGetDailyGift;
      }
      
      private static function ref() : void
      {
         SocketConnection.sendWithCallback(2707,function(param1:SocketEvent):void
         {
            _isGetDailyGift = (param1.data as ByteArray).readUnsignedInt() > 0 ? true : false;
            _icon.gotoAndStop(_isGetDailyGift ? 1 : 2);
         },14030);
      }
   }
}
