package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import org.taomee.manager.ResourceManager;
   
   public class MoreGiftMinuteAwardPopController
   {
      
      public static var TIME_VO:Array = [new CronTimeVo("0-30","15","1-5","10","*","2016")];
      
      private static var _ui:MovieClip;
      
      private static var curMin:int = 0;
      
      private static var curDay:int = 0;
       
      
      public function MoreGiftMinuteAwardPopController()
      {
         super();
      }
      
      public static function checkActivity() : void
      {
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         if(_loc1_.hours > 15 || _loc1_.hours == 15 && _loc1_.minutes == 30 && _loc1_.seconds > 19)
         {
            return;
         }
         if(SystemTimerManager.isActive(TIME_VO))
         {
            checkPopUp();
         }
         setTimeout(checkActivity,20 * 1000);
      }
      
      private static function checkPopUp() : void
      {
         var curMinute:int = int(SystemTimerManager.sysBJDate.minutes);
         var index:int = [0,1,2,5,6,7,10,11,12,15,16,17,30,31].indexOf(curMinute);
         curMin = int(index / 3);
         if(index == -1)
         {
            curMin = -1;
         }
         curDay = [1,2,3,4,5].indexOf(SystemTimerManager.sysBJDate.date);
         KTool.getMultiValue([18084],function(param1:Array):void
         {
            if(curMin >= 4)
            {
               showPopUp();
            }
            else if(curMin >= 0)
            {
               if(KTool.getBit(param1[0],curMin + 1) == 0)
               {
                  showPopUp();
               }
            }
            else
            {
               hide();
            }
         });
      }
      
      private static function showPopUp() : void
      {
         if(_ui)
         {
            return;
         }
         ResourceManager.getResource(ClientConfig.getAppResource("2016/0930/MoreGiftLoginPopPanel"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            _ui = mc;
            _ui.x = 548;
            _ui.y = 560;
            LevelManager.topLevel.addChild(_ui);
            TweenLite.to(_ui,2,{"y":305.75});
            _ui.addEventListener(MouseEvent.CLICK,onClick);
            if(curMin >= 4)
            {
               _ui.gotoAndStop(2);
               _ui.addEventListener(Event.FRAME_CONSTRUCTED,function(param1:Event):void
               {
                  param1.currentTarget.removeEventListener(Event.FRAME_CONSTRUCTED,arguments.callee);
                  _ui["mc"].gotoAndStop(curDay + 1);
               });
            }
            else
            {
               _ui.gotoAndStop(1);
               _ui.addEventListener(Event.FRAME_CONSTRUCTED,function(param1:Event):void
               {
                  param1.currentTarget.removeEventListener(Event.FRAME_CONSTRUCTED,arguments.callee);
                  _ui["mc"].gotoAndStop(curDay * 4 + curMin + 1);
               });
            }
         });
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "award":
               hide();
               SocketConnection.sendWithCallback(42306,function():void
               {
                  if(curMin < 3)
                  {
                     Alarm.show("下档奖励将会在15：" + ["05","10","15"][curMin] + "时刻开启！记得要来哦！");
                  }
               },curMin + 1,0);
               break;
            case "jump_1":
               hide();
               KTool.changeMapWithCallBack(11363 + curDay,function():void
               {
               });
               break;
            case "close":
               hide();
         }
      }
      
      private static function hide() : void
      {
         if(_ui != null)
         {
            _ui.removeEventListener(MouseEvent.CLICK,onClick);
            LevelManager.topLevel.removeChild(_ui);
            _ui = null;
         }
      }
   }
}
