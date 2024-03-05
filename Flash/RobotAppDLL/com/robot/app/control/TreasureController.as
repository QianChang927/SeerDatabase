package com.robot.app.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.UserInfoManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class TreasureController
   {
      
      public static var index:uint;
      
      private static var remain:int;
      
      public static var fun:Function;
      
      public static var icon:MovieClip;
      
      private static var _active:Boolean;
      
      private static var freezingTime:uint;
      
      private static var flag:uint;
      
      private static var loginTime:uint;
      
      public static var timeLevel:Array = [5,10,20,30,45,60];
      
      private static var totalOnlineTime:uint;
       
      
      public function TreasureController()
      {
         super();
      }
      
      public static function set active(param1:Boolean) : void
      {
         _active = param1;
         if(icon)
         {
            if(_active)
            {
               icon.gotoAndStop(2);
            }
            else
            {
               icon.gotoAndStop(1);
            }
         }
      }
      
      public static function get active() : Boolean
      {
         return _active;
      }
      
      public static function setup(param1:MovieClip) : void
      {
         if(icon == null)
         {
            icon = param1;
            icon.buttonMode = true;
            icon.gotoAndStop(1);
         }
         refresh();
      }
      
      private static function onIconHandler(param1:MouseEvent) : void
      {
         StatManager.sendStat2014("主界面icon","赛尔在线送好礼","主界面icon");
         ModuleManager.showModule(ClientConfig.getAppModule("SeerOnlineSendGiftPanel"),"正在加载....");
      }
      
      private static function afterPlayGo() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SeerOnlineSendGiftPanel"),"正在加载....");
      }
      
      private static function onTimer() : void
      {
         if(remain > 0)
         {
            --remain;
         }
         else
         {
            active = true;
            refresh();
         }
         if(fun != null)
         {
            fun();
         }
         showTime(remain);
      }
      
      private static function showTime(param1:uint) : void
      {
         var _loc2_:String = String(uint(param1 / 60));
         while(_loc2_.length < 2)
         {
            _loc2_ = "0" + _loc2_;
         }
         var _loc3_:String = String(param1 % 60);
         while(_loc3_.length < 2)
         {
            _loc3_ = "0" + _loc3_;
         }
         icon["txt"].text = _loc2_ + ":" + _loc3_;
      }
      
      public static function getGift() : void
      {
      }
      
      public static function refresh(param1:Function = null) : void
      {
         var callback:Function = param1;
         TreasureController.active = false;
         KTool.getMultiValue([13045,15296,13046,13047,13048,13049,13050,13051,12462],function(param1:Array):void
         {
            if(callback != null)
            {
               callback(param1);
            }
            flag = param1[1];
            loginTime = param1[8];
            checkState();
         });
      }
      
      public static function setFreeingTime(param1:Function) : void
      {
         var callback:Function = param1;
         SocketConnection.sendWithCallback(CommandID.CLIENT_SET_USER_INFO,function(param1:SocketEvent):void
         {
            refresh(callback);
         },16013,0);
      }
      
      private static function checkState() : void
      {
         UserInfoManager.upDateSimpleInfo(MainManager.actorInfo,function():void
         {
            var _loc1_:Boolean = false;
            var _loc2_:Boolean = true;
            var _loc3_:uint = loginTime + SystemTimerManager.time - MainManager.actorInfo.loginTime;
            var _loc4_:uint = 0;
            var _loc5_:int = 0;
            while(_loc5_ < 6)
            {
               _loc4_ = timeLevel[_loc5_] * 60;
               if(_loc3_ < _loc4_)
               {
                  remain = _loc4_ - _loc3_;
                  SystemTimerManager.addTickFun(onTimer);
                  break;
               }
               _loc5_++;
            }
            icon.gotoAndStop(1);
            var _loc6_:int = 0;
            while(_loc6_ < _loc5_)
            {
               if(KTool.getBit(flag,_loc6_ + 1) == 0)
               {
                  icon.gotoAndStop(2);
                  break;
               }
               _loc6_++;
            }
            if(_loc3_ >= timeLevel[5] * 60)
            {
               icon["txt"].text = "00:00";
               SystemTimerManager.removeTickFun(onTimer);
               return;
            }
         });
      }
      
      private static function onGetHandler(param1:SocketEvent) : void
      {
         active = false;
         ++MainManager.actorInfo.dailyResArr[80];
         index = MainManager.actorInfo.dailyResArr[80];
         SocketConnection.removeCmdListener(CommandID.GET_TREASURE_GIFT,onGetHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         remain = _loc2_.readUnsignedInt();
      }
   }
}
