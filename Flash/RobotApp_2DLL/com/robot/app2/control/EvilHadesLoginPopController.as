package com.robot.app2.control
{
   import com.robot.app2.component.TimeCountdownComponent;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class EvilHadesLoginPopController
   {
      
      public static var TIME_VO:Array = [new CronTimeVo("*","13-14","*","*","*","*"),new CronTimeVo("*","18-19","*","*","*","*")];
      
      private static var _ui:MovieClip;
      
      private static var showIndex:int = 0;
      
      private static var lastSI:int = 0;
       
      
      public function EvilHadesLoginPopController()
      {
         super();
      }
      
      public static function checkActivity() : void
      {
         if(showIndex > 3)
         {
            return;
         }
         if(SystemTimerManager.isActive(TIME_VO))
         {
            checkPopUp();
         }
         setTimeout(checkActivity,60 * 1000);
      }
      
      private static function checkPopUp() : void
      {
         SocketConnection.sendWithCallback(45684,function(param1:SocketEvent):void
         {
            var _loc2_:int = (param1.data as ByteArray).readInt();
            showIndex = [30,70,100].indexOf(_loc2_) + 2;
            if(showIndex != lastSI)
            {
               hide();
               lastSI = showIndex;
               showPopUp();
            }
         },8,0);
      }
      
      private static function showPopUp() : void
      {
         ResourceManager.getResource(ClientConfig.getAppResource("2016/0902/EvilHadesLoginPopPanel"),function(param1:MovieClip):void
         {
            _ui = param1;
            _ui.x = 548;
            _ui.y = 560;
            LevelManager.topLevel.addChild(_ui);
            TweenLite.to(_ui,2,{"y":305.75});
            _ui.addEventListener(MouseEvent.CLICK,onClick);
            if(showIndex == 1)
            {
               _ui.gotoAndStop(1);
            }
            else
            {
               _ui.gotoAndStop(2);
               _ui["mc"].gotoAndStop(showIndex - 1);
            }
            var _loc2_:Date = SystemTimerManager.sysDate;
            var _loc3_:TimeCountdownComponent = new TimeCountdownComponent(_ui["txt_1"],3);
            _loc3_.initialSeconds = (_loc2_.hours > 15 ? 20 - _loc2_.hours : 15 - _loc2_.hours) * 3600 - _loc2_.minutes * 60 - _loc2_.seconds;
            _loc3_.start(hide);
         });
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "jump_1":
               hide();
               StatManager.sendStat2014("0902邪冥兽皇全民送","点击小弹窗【前往领取】按钮","2016运营活动");
               ModuleManager.showAppModule("EvilHadesFightSpritePanel");
               break;
            case "jump_2":
               hide();
               StatManager.sendStat2014("0902邪冥兽皇全民送","点击小弹窗【立即前往】按钮","2016运营活动");
               ModuleManager.showAppModule("EvilHadesFightSpritePanel");
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
