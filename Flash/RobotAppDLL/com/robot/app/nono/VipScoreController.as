package com.robot.app.nono
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import org.taomee.events.SocketEvent;
   
   public class VipScoreController
   {
      
      public static var playAnimate:Boolean;
      
      public static var playFrame:uint;
       
      
      public function VipScoreController()
      {
         super();
      }
      
      public static function showAnimation(param1:uint) : void
      {
         playAnimate = true;
         playFrame = param1;
         ModuleManager.showModule(ClientConfig.getAppModule("NonoVipPanel"),"正在载入...",0);
      }
      
      public static function getDailyScore() : void
      {
         SocketConnection.addCmdListener(CommandID.VIP_SCORE_GET,onGetScore);
         SocketConnection.send(CommandID.VIP_SCORE_GET);
      }
      
      private static function onGetScore(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.VIP_SCORE_GET,onGetScore);
         ++MainManager.actorInfo.vipScore;
         MainManager.actorInfo.dailyResArr[244] = 1;
         showAnimation(1);
      }
      
      public static function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.VIP_SCORE_GET,onGetScore);
      }
   }
}
