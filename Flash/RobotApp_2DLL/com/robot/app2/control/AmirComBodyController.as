package com.robot.app2.control
{
   import com.robot.app2.component.TimeCountdownComponent;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import gs.TweenLite;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class AmirComBodyController
   {
      
      private static var _ui:MovieClip;
      
      private static var showIndex:int = 0;
      
      private static var lastSI:int = 0;
      
      private static var tcdC:TimeCountdownComponent;
      
      public static var TIME_VO:Array = [new CronTimeVo("*","13-14","*","*","*","*"),new CronTimeVo("*","18-19","*","*","*","*")];
      
      private static var startDay:Date = new Date(2016,9,28);
      
      private static var endDay:Date = new Date(2016,10,4);
       
      
      public function AmirComBodyController()
      {
         super();
      }
      
      public static function addMsg() : void
      {
         if(SystemTimerManager.sysBJDate.time > startDay.time && SystemTimerManager.sysBJDate.time < endDay.time)
         {
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,checkActivity);
         }
      }
      
      public static function checkActivity(param1:SocketEvent) : void
      {
         if(showIndex > 3)
         {
            SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,checkActivity);
            hide();
            return;
         }
         if(SystemTimerManager.isActive(TIME_VO))
         {
            checkPopUp();
         }
      }
      
      private static function checkPopUp() : void
      {
         var progress:int = 0;
         SocketConnection.sendWithCallback(43210,function(param1:SocketEvent):void
         {
            var _loc2_:int = (param1.data as ByteArray).readInt();
            if(_loc2_ < 30)
            {
               showIndex = 1;
            }
            else if(_loc2_ < 70)
            {
               showIndex = 2;
            }
            else if(_loc2_ < 100)
            {
               showIndex = 3;
            }
            else
            {
               showIndex = 4;
            }
            if(showIndex != lastSI)
            {
               hide();
               lastSI = showIndex;
               showPopUp();
            }
         },9,0);
      }
      
      private static function showPopUp() : void
      {
         if(_ui == null)
         {
            ResourceManager.getResource(ClientConfig.getAppResource("2016/1028/DohertyTipUI"),function(param1:MovieClip):void
            {
               _ui = param1;
               _ui.addEventListener(MouseEvent.CLICK,onClick);
               initPop();
            });
         }
         else
         {
            initPop();
         }
      }
      
      public static function getLeftTime() : int
      {
         var _loc1_:int = 0;
         var _loc3_:Date = null;
         var _loc4_:int = 0;
         var _loc2_:Date = SystemTimerManager.sysDate;
         if(SystemTimerManager.isActive(TIME_VO))
         {
            _loc1_ = (_loc2_.hours > 15 ? 20 - _loc2_.hours : 15 - _loc2_.hours) * 3600 - _loc2_.minutes * 60 - _loc2_.seconds;
         }
         else
         {
            _loc3_ = new Date(_loc2_.fullYear,_loc2_.month,_loc2_.date,_loc2_.hours > 14 && _loc2_.hours < 18 ? 18 : 13);
            _loc4_ = _loc3_.time / 1000;
            if(_loc2_.hours >= 20)
            {
               _loc4_ += 24 * 3600;
            }
            _loc1_ = _loc4_ - SystemTimerManager.time;
         }
         return _loc1_;
      }
      
      private static function initPop() : void
      {
         _ui.x = 632;
         _ui.y = 560;
         LevelManager.appLevel.addChildAt(_ui,0);
         TweenLite.to(_ui,2,{"y":342});
         if(showIndex == 1)
         {
            _ui.gotoAndStop(2);
         }
         else
         {
            _ui.gotoAndStop(1);
            _ui["boxMc"].gotoAndStop(showIndex - 1);
         }
         var _loc1_:Date = SystemTimerManager.sysDate;
         tcdC = new TimeCountdownComponent(_ui["timeTxt"],3);
         tcdC.initialSeconds = getLeftTime();
         tcdC.start(hide);
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "goBtn":
               hide();
               ModuleManager.showAppModule("DohertyMainPanel");
               break;
            case "close":
               hide();
         }
      }
      
      private static function hide() : void
      {
         if(tcdC)
         {
            tcdC.destroy();
         }
         if(_ui != null)
         {
            _ui.removeEventListener(MouseEvent.CLICK,onClick);
            DisplayUtil.removeForParent(_ui);
            _ui = null;
         }
      }
   }
}
