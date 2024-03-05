package com.robot.app2.control
{
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import org.taomee.events.SocketEvent;
   
   public class TakeAdayNationalDayGiftsController
   {
      
      private static var ac:ActivityControl;
      
      private static var cron:Array = [new CronTimeVo("*","13-14","*","*","*","*")];
      
      private static var _isLoadShow:Boolean = false;
      
      private static var _widget:MovieClip;
      
      private static var _daiy:int = 0;
      
      private static var _date:Date = new Date(2015,9 - 1,30);
       
      
      public function TakeAdayNationalDayGiftsController()
      {
         super();
      }
      
      public static function setUp() : void
      {
         if(ac == null)
         {
            ac = new ActivityControl(cron);
         }
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onSystemTime);
         _daiy = int(timeAway() / (24 * 60 * 60));
         if(ac.isInActivityTime)
         {
            if(_daiy < 8)
            {
               KTool.getMultiValue([8079],function(param1:Array):void
               {
                  if(BitUtils.getBit(param1[0],_daiy) <= 0)
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("TakeAdayNationalDayGiftsLoginBombBoxPanel"),"正在打开....");
                  }
               });
            }
         }
      }
      
      private static function timeAway() : int
      {
         var _loc1_:Number = Number(SystemTimerManager.time);
         return int((_loc1_ * 1000 - _date.time) * 0.001);
      }
      
      private static function onSystemTime(param1:SocketEvent) : void
      {
         var event:SocketEvent = param1;
         if(ac == null)
         {
            ac = new ActivityControl(cron);
         }
         if(ac.isInActivityTime)
         {
            if(_daiy < 8)
            {
               KTool.getMultiValue([8079],function(param1:Array):void
               {
                  var va:Array = param1;
                  if(BitUtils.getBit(va[0],_daiy) <= 0)
                  {
                     KTool.getBitSet([1000113],function(param1:Array):void
                     {
                        var va:Array = param1;
                        if(va[0] <= 0)
                        {
                           SocketConnection.addCmdListener(4548,function(param1:SocketEvent):void
                           {
                              SocketConnection.removeCmdListener(4548,arguments.callee);
                              ModuleManager.showModule(ClientConfig.getAppModule("TakeAdayNationalDayGiftsLoginBombBoxPanel"),"正在打开....");
                           });
                           SocketConnection.send(4548,1506,1);
                        }
                     });
                  }
               });
            }
         }
      }
   }
}
