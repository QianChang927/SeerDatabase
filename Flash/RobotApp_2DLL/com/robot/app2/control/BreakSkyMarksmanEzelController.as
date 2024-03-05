package com.robot.app2.control
{
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.InformInfo;
   import com.robot.core.manager.MessageManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class BreakSkyMarksmanEzelController
   {
       
      
      public function BreakSkyMarksmanEzelController()
      {
         super();
      }
      
      public static function setup() : void
      {
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onSysTimeGot);
      }
      
      private static function onSysTimeGot(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onSysTimeGot);
         SocketConnection.addCmdListener(CommandID.LOGIN_CHECK_GET_STATUS,onMibiBackCheck);
         SocketConnection.send(CommandID.LOGIN_CHECK_GET_STATUS,533);
      }
      
      private static function onMibiBackCheck(param1:SocketEvent) : void
      {
         var _loc3_:InformInfo = null;
         SocketConnection.removeCmdListener(CommandID.LOGIN_CHECK_GET_STATUS,onMibiBackCheck);
         var _loc2_:uint = (param1.data as ByteArray).readUnsignedInt();
         if(_loc2_ == 1)
         {
            _loc3_ = new InformInfo();
            _loc3_.type = CommandID.BREAKSKY_EZEL_VIEW_INFORM;
            MessageManager.addInformInfo(_loc3_);
         }
      }
      
      public static function initForMap() : void
      {
         if(BitBuffSetClass.getState(22420) == 0)
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active_20130621_5"),function():void
            {
               CartoonManager.play(ClientConfig.getFullMovie("cartoon/breakSkyMarksmanEzel_1"),function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active_20130621_6"),function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("breakSkyMarksmanFullWord"),function():void
                     {
                        SocketConnection.send(1022,86058725);
                        BitBuffSetClass.setState(22420,1);
                        ModuleManager.showModule(ClientConfig.getAppModule("BreakSkyMarksmanEzelMainPanel"));
                     },false);
                  });
               });
            });
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("BreakSkyMarksmanEzelMainPanel"));
         }
      }
   }
}
