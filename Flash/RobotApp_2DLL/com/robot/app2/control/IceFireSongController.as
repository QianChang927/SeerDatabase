package com.robot.app2.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alert;
   
   public class IceFireSongController
   {
      
      private static var _region:uint;
       
      
      public function IceFireSongController()
      {
         super();
      }
      
      public static function openPanel() : void
      {
         SocketConnection.send(1022,86057460);
         if(BufferRecordManager.getState(MainManager.actorInfo,633))
         {
            ModuleManager.showModule(ClientConfig.getAppModule("IceFireSongMainPanel"));
         }
         else
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active_20130510_3"),function():void
            {
               BufferRecordManager.setState(MainManager.actorInfo,633,true);
               ModuleManager.showModule(ClientConfig.getAppModule("IceFireSongMainPanel"));
            });
         }
      }
      
      public static function fightWithBrothers(param1:uint) : void
      {
         MainManager.isFighting = true;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         SocketConnection.send(41129,param1);
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         MainManager.isFighting = false;
         info = e.dataObj as FightOverInfo;
         if(info.winnerID != MainManager.actorID)
         {
            Alert.show("胜败乃兵家常事，冰火两兄弟实力强劲，是否立即通过快捷方式征服他们成为你的精灵？",function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("IceFireSongQuickGetPanel"));
            });
         }
      }
   }
}
