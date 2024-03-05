package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.BitUtil;
   
   public class WanMagicRevereMengMusePreheatController
   {
      
      private static var _icon:MovieClip;
      
      public static var num:uint;
      
      private static var _surplusTime:int;
      
      private static var _panelTime:Timer;
      
      private static var _requireTimeArr:Array = [0,30,60,90];
      
      private static var _completeNum:int = 0;
      
      private static var _todayOnLineTime:int;
       
      
      public function WanMagicRevereMengMusePreheatController()
      {
         super();
      }
      
      public static function setup(param1:MovieClip) : void
      {
         _icon = param1;
         _panelTime = new Timer(1000);
         _panelTime.addEventListener(TimerEvent.TIMER,onPanelTime);
         _icon.addEventListener(MouseEvent.CLICK,onClickIcon);
         ToolTipManager.add(_icon,"万魔天尊，萌缪斯预热");
         updata();
      }
      
      public static function updata() : void
      {
         SocketConnection.addCmdListener(CommandID.WAN_MAGIC_REVERE_MENGMUSE,function(param1:SocketEvent):void
         {
            var e:SocketEvent = param1;
            SocketConnection.removeCmdListener(CommandID.WAN_MAGIC_REVERE_MENGMUSE,arguments.callee);
            KTool.getMultiValue([10537],function(param1:Array):void
            {
               var va:Array = param1;
               _todayOnLineTime = va[0];
               KTool.getMultiValue([10536],function(param1:Array):void
               {
                  _completeNum = 0;
                  var _loc2_:int = 0;
                  while(_loc2_ < 4)
                  {
                     if(BitUtil.getBit(param1[0],_loc2_) > 0)
                     {
                        ++_completeNum;
                     }
                     _loc2_++;
                  }
                  _surplusTime = _requireTimeArr[_completeNum] * 60 - _todayOnLineTime;
                  updataTime();
               });
            });
         });
         SocketConnection.send(CommandID.WAN_MAGIC_REVERE_MENGMUSE,4);
      }
      
      public static function updataTime() : void
      {
         if(_surplusTime <= 0)
         {
            if(_completeNum == 4)
            {
               _icon.getMc.visible = false;
            }
            _icon["txt"].text = SystemTimerManager.getTimeClockString(0,false);
            _icon["txt"].visible = false;
            _panelTime.stop();
         }
         else
         {
            _icon["txt"].text = SystemTimerManager.getTimeClockString(_surplusTime,false);
            _icon["txt"].visible = true;
            _panelTime.start();
         }
      }
      
      public static function onPanelTime(param1:TimerEvent) : void
      {
         --_surplusTime;
         if(_surplusTime <= 1)
         {
            _icon["txt"].text = SystemTimerManager.getTimeClockString(0,false);
            _icon.getMc.visible = true;
         }
         else
         {
            _icon["txt"].text = SystemTimerManager.getTimeClockString(_surplusTime,false);
            _icon.getMc.visible = false;
         }
         if(_surplusTime == 65 * 60 || _surplusTime == 35 * 60 || _surplusTime == 5 * 60)
         {
            updata();
         }
      }
      
      public static function onClickIcon(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("WanMagicRevereMengMusePreheatPanel"));
      }
   }
}
