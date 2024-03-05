package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import flash.display.MovieClip;
   import org.taomee.events.DynamicEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class WishTreeIconController
   {
      
      public static var _icon:MovieClip;
      
      private static var getTime:int;
      
      private static var kinds:int;
      
      private static var _curWish:uint = 0;
      
      private static var _getTime:int;
      
      private static var _lastWishTime:uint = 0;
      
      private static var isCDtime:Boolean;
      
      private static var _count:uint;
      
      private static var _foreverNum:Array = [12231,105025,105026,12232,2300];
      
      private static var _endDates:Array = [2015,2,27,0,0,0];
      
      public static var isInTick:Boolean;
       
      
      public function WishTreeIconController()
      {
         super();
      }
      
      public static function setup(param1:MovieClip) : void
      {
         _icon = param1;
         _icon.buttonMode = true;
         _icon.gotoAndStop(1);
         _icon.txt_time.visible = false;
         checkStatuse();
      }
      
      public static function get Wish_CD_List() : Array
      {
         return [15,15,20,15,15,10];
      }
      
      public static function checkStatuse() : void
      {
         KTool.getMultiValue(_foreverNum,function(param1:Array):void
         {
            var _loc2_:uint = uint(param1[0]);
            _count = 0;
            var _loc3_:uint = (MainManager.actorInfo.onlineTime - MainManager.actorInfo.logintimeThisTime) / 60;
            if(_loc3_ >= 120)
            {
               _count = 10;
            }
            else if(_loc3_ >= 90)
            {
               _count = 7;
            }
            else if(_loc3_ >= 60)
            {
               _count = 5;
            }
            else if(_loc3_ >= 30)
            {
               _count = 3;
            }
            else if(_loc3_ >= 15)
            {
               _count = 2;
            }
            else if(_loc3_ >= 5)
            {
               _count = 1;
            }
            if(_icon)
            {
               if(_count - _loc2_ > 0)
               {
                  _icon.gotoAndStop(2);
               }
               else
               {
                  _icon.gotoAndStop(1);
                  _icon.txt_time.visible = false;
               }
            }
         });
      }
      
      private static function dataGetHandler() : void
      {
         if(_getTime > 0)
         {
            isCDtime = true;
            countDownTimerHandler();
         }
         else
         {
            isCDtime = false;
            SystemTimerManager.removeTickFun(dataGetHandler);
            _getTime = 0;
            _icon.gotoAndStop(2);
         }
      }
      
      private static function countDownTimerHandler() : void
      {
         var _loc1_:String = String(SystemTimerManager.getTimeClockString(_getTime));
         var _loc2_:Array = _loc1_.split(":");
         var _loc3_:Array = _loc2_[1].split("");
         var _loc4_:Array = _loc2_[2].split("");
         setTime(parseInt(_loc3_[0]),parseInt(_loc3_[1]),parseInt(_loc4_[0]),parseInt(_loc4_[1]));
         --_getTime;
      }
      
      private static function setTime(param1:int, param2:int, param3:int, param4:int) : void
      {
         _icon.txt_time.text = param1 + "" + param2 + ":" + param3 + "" + param4;
      }
      
      private static function wishStartHandler(param1:DynamicEvent) : void
      {
         var _loc2_:Object = param1.paramObject;
         getTime = _loc2_["kind1"];
         kinds = _loc2_["kind2"];
         enabledTickCount(getTime,kinds);
      }
      
      private static function enabledTickCount(param1:int, param2:int) : void
      {
         if(!_icon || !DisplayUtil.hasParent(_icon))
         {
            return;
         }
         if(param1 == 0 && param2 == 0)
         {
            _icon.gotoAndStop(1);
            _icon.txt_time.visible = false;
         }
         var _loc3_:uint = Number(Wish_CD_List[_curWish - 1]);
         var _loc4_:uint;
         if((_loc4_ = _lastWishTime + _loc3_ * 60 - SystemTimerManager.time) > 0 && param2 != 0)
         {
            SystemTimerManager.addTickFun(tickCountHandler);
            _icon.gotoAndStop(1);
            _icon.txt_time.visible = true;
         }
         else if(_loc4_ <= 0 && param2 != 0)
         {
            _icon.gotoAndStop(2);
            SystemTimerManager.removeTickFun(tickCountHandler);
         }
      }
      
      private static function tickCountHandler() : void
      {
         var _loc1_:uint = Number(Wish_CD_List[_curWish - 1]);
         getTime = _lastWishTime + _loc1_ * 60 - SystemTimerManager.time;
         if(getTime > 0)
         {
            _icon.txt_time.text = SystemTimerManager.getTimeClockString(getTime).split(":")[1] + ":" + SystemTimerManager.getTimeClockString(getTime).split(":")[2];
            _icon.gotoAndStop(1);
            --getTime;
         }
         else
         {
            enabledTickCount(getTime,kinds);
         }
      }
      
      public static function onClickIcon(param1:MovieClip = null) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("StarWishDriftBottlenNewMainPanel"));
      }
      
      private static function afterPlayGo() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("StarWishDriftBottlenNewMainPanel"));
      }
   }
}
