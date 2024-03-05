package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.iconLevel.IconController;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TaskIconManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class VipController201408
   {
      
      public static var vip:uint;
      
      public static var vipStartTime:uint;
      
      public static var vipEndTime:uint;
      
      public static var _icon:MovieClip;
      
      public static var isFirstVip:uint;
      
      public static var petClassList:Array = [834,690,652,920];
      
      public static var _icon1:MovieClip;
       
      
      public function VipController201408()
      {
         super();
      }
      
      public static function setup() : void
      {
         SocketConnection.addCmdListener(CommandID.VIP_CO,updateVip);
         checkPush();
      }
      
      public static function updateVip(param1:SocketEvent) : void
      {
         checkPush();
      }
      
      public static function checkIconReturn(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         KTool.getForeverNum(4246,function(param1:uint):void
         {
            var value:uint = param1;
            KTool.getBitSet([9412],function(param1:Array):void
            {
               var _loc2_:Date = null;
               if(value == 0 || param1[0] == 1)
               {
                  IconController.hideIcon("return_vip_icon");
               }
               else if(MainManager.actorInfo.viped == 1 && !MainManager.actorInfo.isVip)
               {
                  _loc2_ = new Date(vipEndTime * 1000 + 86400 * 30 * 1000);
                  if(_loc2_.time >= SystemTimerManager.sysBJDate.time)
                  {
                     IconController.hideIcon("return_vip_icon");
                  }
               }
               else
               {
                  IconController.hideIcon("return_vip_icon");
               }
            });
         });
      }
      
      public static function checkIconVip(param1:MovieClip) : void
      {
         _icon = param1;
         checkFirstVip();
      }
      
      public static function checkFirstVip(param1:Function = null) : void
      {
         var func:Function = param1;
         KTool.getBitSet([304,303],function(param1:Array):void
         {
            var list1:Array = param1;
            checkVip(function():void
            {
               var _loc1_:Date = null;
               var _loc2_:Date = null;
               if(list1[0] == 1 && list1[1] == 0)
               {
                  _loc1_ = new Date(vipStartTime * 1000);
                  _loc2_ = new Date(2016,8 - 1,12);
                  if(vip == 1 && _loc1_.time > _loc2_.time)
                  {
                     isFirstVip = 1;
                  }
                  else if(MainManager.actorInfo.viped == 0 && MainManager.actorInfo.vip == 0)
                  {
                     IconController.showIcon("first_vip_icon");
                  }
                  else
                  {
                     IconController.hideIcon("first_vip_icon");
                  }
               }
               else
               {
                  IconController.hideIcon("first_vip_icon");
               }
               if(func != null)
               {
                  func();
               }
            });
         });
      }
      
      public static function checkTime() : void
      {
         if(SystemTimerManager.hasUpdate)
         {
            checkPush();
         }
         else
         {
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onCheckTime);
         }
      }
      
      private static function onCheckTime(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckTime);
         checkPush();
      }
      
      public static function checkPush() : void
      {
         checkVip(function():void
         {
            var _loc1_:Date = new Date(SystemTimerManager.sysBJDate.time + 60 * 60 * 24 * 14 * 1000);
            var _loc2_:Date = new Date(vipStartTime * 1000 + 60 * 60 * 24 * 90 * 1000);
            var _loc3_:Date = new Date(SystemTimerManager.sysBJDate.time + 60 * 60 * 24 * 7 * 1000);
            var _loc4_:Date = new Date(vipEndTime * 1000 + 60 * 60 * 24 * 14 * 1000);
            if(Boolean(MainManager.actorInfo.isVip) && _loc1_.time > vipEndTime * 1000)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("VipDeadlinePanel"),"",1);
            }
            else if(!MainManager.actorInfo.isVip && _loc4_.time > SystemTimerManager.sysBJDate.time)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("VipDeadlinePanel"),"",2);
            }
         });
      }
      
      public static function checkVip(param1:Function = null) : void
      {
         var fun:Function = param1;
         SocketConnection.sendByQueue(CommandID.VIP_INFO,[],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            vip = _loc2_.readUnsignedInt();
            vipStartTime = _loc2_.readUnsignedInt();
            vipEndTime = _loc2_.readUnsignedInt();
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      public static function getVipLeftDay() : uint
      {
         var _loc1_:Date = new Date(vipEndTime * 1000);
         _loc1_.hours = 0;
         _loc1_.minutes = 0;
         _loc1_.seconds = 0;
         _loc1_.milliseconds = 0;
         var _loc2_:Date = new Date(SystemTimerManager.sysBJDate.fullYear,SystemTimerManager.sysBJDate.month,SystemTimerManager.sysBJDate.date);
         if(_loc1_.time < _loc2_.time)
         {
            return 0;
         }
         return uint(uint((_loc1_.time - _loc2_.time) / 1000 / 3600 / 24) + 1);
      }
      
      public static function clickIconReturn(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("BackVipPanel201409"));
      }
      
      public static function clickIconVip(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("FirstVipPanel201408"));
      }
      
      public static function checkIcon1(param1:MovieClip) : void
      {
         _icon1 = param1;
         if(SystemTimerManager.hasUpdate)
         {
            setIcon();
         }
         else
         {
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onCheckTime1);
         }
      }
      
      private static function onCheckTime1(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckTime1);
         setIcon();
      }
      
      private static function setIcon() : void
      {
         var date:Date = new Date(2014,8,5);
         var date1:Date = new Date(MainManager.actorInfo.regTime * 1000);
         var date2:Date = new Date(MainManager.actorInfo.regTime * 1000 + 30 * 24 * 3600 * 1000);
         if(date1.time > date.time && date2.time > SystemTimerManager.sysBJDate.time)
         {
            SocketConnection.sendByQueue(CommandID.GET_FOREVER_VALUE,[3501],function(param1:SocketEvent):void
            {
               var _loc2_:ByteArray = param1.data as ByteArray;
               var _loc3_:uint = _loc2_.readUnsignedByte();
               var _loc4_:uint = _loc2_.readUnsignedByte();
               var _loc5_:uint = _loc2_.readUnsignedByte();
               var _loc6_:uint = _loc2_.readUnsignedByte();
               if(_loc3_ * _loc4_ * _loc5_ * _loc6_ == 1)
               {
                  checkIcon3();
               }
               else
               {
                  _icon1.gotoAndStop(1);
               }
            });
         }
         else
         {
            checkIcon3();
         }
      }
      
      private static function checkIcon3() : void
      {
         KTool.getMultiValue([5500,5502,1016],function(param1:Array):void
         {
            if(param1[1] == 0 && param1[2] == 0)
            {
               _icon1.gotoAndStop(2);
            }
            else
            {
               TaskIconManager.delIcon(_icon1);
            }
         });
      }
      
      public static function onClickIcon1(param1:MovieClip) : void
      {
         if(param1.currentFrame == 1)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("FirstDiamondPanel201409"));
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("DiamondExchangePackagePanel"));
         }
      }
      
      public static function onClickIconMarketDemandForSb(param1:MovieClip) : void
      {
         navigateToURL(new URLRequest(" http://as.61.com/events/aslr/?tad=innermedia.seer.free.seericon"),"_blank");
      }
   }
}
