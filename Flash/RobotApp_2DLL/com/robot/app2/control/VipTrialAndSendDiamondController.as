package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class VipTrialAndSendDiamondController
   {
      
      private static const MAP_ID:int = 1130;
      
      private static const BIT_BUF_WISH_SUCCESS:int = 19352;
       
      
      public function VipTrialAndSendDiamondController()
      {
         super();
      }
      
      public static function showLoginAd() : void
      {
         var _loc1_:Date = new Date(2015,9,23);
         var _loc2_:Date = new Date(2015,9,30);
         var _loc3_:Date = SystemTimerManager.sysBJDate;
         if(_loc3_.time > _loc1_.time && _loc3_.time < _loc2_.time)
         {
            if(MainManager.actorInfo.isVip)
            {
               ModuleManager.showAppModule("OpenVipSendDiamondAdPanel");
            }
            else
            {
               ModuleManager.showAppModule("VipTrialForFreeAdPanel");
            }
         }
      }
      
      public static function updateVip() : void
      {
         if(SocketConnection.hasCmdListener(CommandID.VIP_CO))
         {
            return;
         }
         SocketConnection.addCmdListener(CommandID.VIP_CO,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.VIP_CO,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            _loc3_.position = 8;
            var _loc4_:int = int(_loc3_.readUnsignedInt());
            MainManager.actorInfo.vip = _loc4_;
         });
      }
      
      public static function showMainPanel() : void
      {
         var openPanel:Function = function():void
         {
            KTool.getBitSet([BIT_BUF_WISH_SUCCESS],function(param1:Array):void
            {
               if(Boolean(MainManager.actorInfo.isVip) || param1[0] > 0)
               {
                  ModuleManager.showAppModule("OpenVipSendDiamondPanel");
               }
               else
               {
                  ModuleManager.showAppModule("VipTrialForFreePanel");
               }
            });
         };
         ModuleManager.showAppModule("OpenVipSendDiamondPanel");
      }
   }
}
