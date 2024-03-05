package com.robot.app2.control
{
   import com.robot.app2.systems.iconLevel.IconController;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import org.taomee.events.SocketEvent;
   
   public class NewSeerVouchersController
   {
      
      public static var havePlayAnimate:Boolean = false;
       
      
      public function NewSeerVouchersController()
      {
         super();
      }
      
      public static function showIcon(param1:MovieClip) : void
      {
         if(SystemTimerManager.sysDate.fullYear < 2000)
         {
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,checkIcon);
         }
         else
         {
            checkIcon(null);
         }
      }
      
      private static function checkIcon(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,checkIcon);
         if(isActive)
         {
            IconController.showIcon("NewSeerVoucher_Icon");
         }
         else
         {
            IconController.hideIcon("NewSeerVoucher_Icon");
         }
      }
      
      public static function get isActive() : Boolean
      {
         var _loc1_:int = int(SystemTimerManager.getTimeByDate(2014,9,26,0));
         var _loc2_:int = int(MainManager.actorInfo.regTime);
         var _loc3_:int = 60 * 24 * 3600;
         var _loc4_:int = int(SystemTimerManager.time);
         if(_loc2_ >= _loc1_ && _loc4_ <= _loc2_ + _loc3_)
         {
            return true;
         }
         return false;
      }
      
      public static function get discountDayLeft() : int
      {
         var _loc1_:int = int(MainManager.actorInfo.regTime);
         var _loc2_:int = 60 * 24 * 3600;
         var _loc3_:int = int(SystemTimerManager.time);
         var _loc4_:int;
         if((_loc4_ = _loc2_ - (_loc3_ - _loc1_)) < 0)
         {
            return 0;
         }
         return Math.ceil(_loc4_ / (24 * 3600));
      }
      
      public static function onClickIcon(param1:MovieClip) : void
      {
         SocketConnection.send(1022,86069321);
         ModuleManager.showModule(ClientConfig.getAppModule("NewSeerPlanNationalDayMainPanel"));
      }
   }
}
