package com.robot.app2.control
{
   import com.robot.core.CommandID;
   import com.robot.core.info.InformInfo;
   import com.robot.core.manager.MessageManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CronTimeVo;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.BitUtil;
   
   public class VipCancerClothRewardController
   {
       
      
      public function VipCancerClothRewardController()
      {
         super();
      }
      
      public static function setup() : void
      {
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,arguments.callee);
            setup2();
         });
      }
      
      private static function setup1() : void
      {
         if(new CronTimeVo("*","*","22","8","*","2013").checkTimeHit(SystemTimerManager.sysDate) == CronTimeVo.INCOMING)
         {
            SocketConnection.addCmdListener(CommandID.LOGIN_CHECK_GET_STATUS,function(param1:SocketEvent):void
            {
               var _loc5_:Boolean = false;
               var _loc7_:Boolean = false;
               var _loc8_:InformInfo = null;
               SocketConnection.removeCmdListener(CommandID.LOGIN_CHECK_GET_STATUS,arguments.callee);
               var _loc3_:ByteArray = param1.data as ByteArray;
               var _loc4_:uint = _loc3_.readUnsignedInt();
               var _loc6_:uint = 4;
               while(_loc6_ < 8)
               {
                  if(_loc7_ = Boolean(BitUtil.getBit(_loc4_,_loc6_)))
                  {
                     _loc5_ = true;
                     break;
                  }
                  _loc6_++;
               }
               if(_loc5_)
               {
                  (_loc8_ = new InformInfo()).type = 661;
                  MessageManager.addInformInfo(_loc8_);
               }
            });
            SocketConnection.send(CommandID.LOGIN_CHECK_GET_STATUS,661);
         }
      }
      
      private static function setup2() : void
      {
         if(new CronTimeVo("*","*","27","9","*","2013").checkTimeHit(SystemTimerManager.sysDate) == CronTimeVo.INCOMING)
         {
            SocketConnection.addCmdListener(CommandID.LOGIN_CHECK_GET_STATUS,function(param1:SocketEvent):void
            {
               var _loc5_:Boolean = false;
               var _loc7_:Boolean = false;
               var _loc8_:InformInfo = null;
               SocketConnection.removeCmdListener(CommandID.LOGIN_CHECK_GET_STATUS,arguments.callee);
               var _loc3_:ByteArray = param1.data as ByteArray;
               var _loc4_:uint = _loc3_.readUnsignedInt();
               var _loc6_:uint = 4;
               while(_loc6_ < 8)
               {
                  if(_loc7_ = Boolean(BitUtil.getBit(_loc4_,_loc6_)))
                  {
                     _loc5_ = true;
                     break;
                  }
                  _loc6_++;
               }
               if(_loc5_)
               {
                  (_loc8_ = new InformInfo()).type = 5020;
                  MessageManager.addInformInfo(_loc8_);
               }
            });
            SocketConnection.send(CommandID.LOGIN_CHECK_GET_STATUS,5020);
         }
      }
   }
}
