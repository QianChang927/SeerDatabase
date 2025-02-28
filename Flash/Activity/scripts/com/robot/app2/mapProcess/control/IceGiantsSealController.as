package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.net.SharedObject;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class IceGiantsSealController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _leftTime:uint;
       
      
      public function IceGiantsSealController()
      {
         super();
      }
      
      private static function get taskMc() : MovieClip
      {
         return _map.conLevel["taskmc2"];
      }
      
      public static function refTime() : void
      {
         SocketConnection.addCmdListener(46015,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(46015,arguments.callee);
            _leftTime = (param1.data as ByteArray).readUnsignedInt();
            if(_leftTime > 0)
            {
               SystemTimerManager.addTickFun(onTimer);
            }
         });
         SocketConnection.send(46015);
      }
      
      private static function onTimer() : void
      {
         --_leftTime;
         if(_leftTime == 0)
         {
            SystemTimerManager.removeTickFun(onTimer);
         }
      }
      
      private static function onClickBtn(param1:MouseEvent) : void
      {
         var i:uint = 0;
         var min:uint = 0;
         var sec:uint = 0;
         var e:MouseEvent = param1;
         i = uint(e.currentTarget.name.slice(-1));
         if(_leftTime > 0)
         {
            min = uint(_leftTime / 60);
            sec = uint(_leftTime % 60);
            Alarm.show(KTool.formatString("还有{0}分{1}秒才能收集冰川之能",min,sec));
         }
         else
         {
            _map.conLevel["b" + i]["seerBtn"].visible = true;
            AnimateManager.playMcAnimate(_map.conLevel["b" + i]["seerBtn"],1,"",function():void
            {
               SocketConnection.addCmdListener(46013,function(param1:SocketEvent):void
               {
                  _map.conLevel["b" + i]["seerBtn"].visible = false;
                  SocketConnection.send(1022,86061629);
                  SocketConnection.removeCmdListener(46013,arguments.callee);
                  refTime();
               });
               SocketConnection.send(46013);
            });
         }
      }
      
      public static function setup(param1:BaseMapProcess) : void
      {
         _map = param1;
         var _loc2_:SharedObject = SOManager.getUserSO(SOManager.LOCALMSG);
         var _loc3_:uint = 0;
         while(_loc3_ < 3)
         {
            param1.conLevel["b" + _loc3_].addEventListener(MouseEvent.CLICK,onClickBtn);
            if(_loc2_.data["IceGiantsSealToken"] != undefined)
            {
               param1.conLevel["b" + _loc3_].visible = true;
               param1.conLevel["b" + _loc3_].buttonMode = true;
               param1.conLevel["b" + _loc3_]["seerBtn"].visible = false;
            }
            _loc3_++;
         }
         refTime();
      }
      
      public static function start() : void
      {
         /*
          * Decompilation error
          * Timeout (1 minute) was reached
          * Instruction count: 48
          */
         throw new flash.errors.IllegalOperationError("Not decompiled due to timeout");
      }
      
      public static function destroy() : void
      {
         var _loc1_:uint = 0;
         while(_loc1_ < 3)
         {
            _map.conLevel["b" + _loc1_].removeEventListener(MouseEvent.CLICK,onClickBtn);
            _loc1_++;
         }
         _map = null;
         SystemTimerManager.removeTickFun(onTimer);
      }
   }
}
