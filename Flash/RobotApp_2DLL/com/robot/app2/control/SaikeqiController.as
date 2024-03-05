package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alert;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class SaikeqiController
   {
      
      private static const CommainId:int = 43019;
      
      public static var iText:int = 0;
      
      public static var valueText:int = 0;
       
      
      public function SaikeqiController()
      {
         super();
      }
      
      public static function addFightRewardsListenner() : void
      {
         SocketConnection.addCmdListener(CommainId,onRewardListenner);
      }
      
      public static function onRewardListenner(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommainId,onRewardListenner);
         var _loc2_:ByteArray = param1.data as ByteArray;
         iText = valueText = 0;
         if(_loc2_)
         {
            _loc2_.position = 0;
            iText = _loc2_.readUnsignedInt();
            valueText = _loc2_.readUnsignedInt();
         }
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         if(iText == 1 && Boolean(valueText))
         {
            Alert.show("恭喜你完成了本次特训，赛克齐的等级增加 <font color=\'#ff0000\'>" + valueText.toString() + "</font> ，是否继续进行特训？",function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("SaikeqiTrainingPanel"));
            });
         }
         else if(iText == 2 && Boolean(valueText))
         {
            Alert.show("恭喜你完成了本次特训，赛克齐的个体值增加 <font color=\'#ff0000\'>" + valueText.toString() + "</font> ，是否继续进行特训？",function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("SaikeqiTrainingPanel"));
            });
         }
         else if(iText == 3 && Boolean(valueText))
         {
            Alert.show("恭喜你完成了本次特训，赛克齐的学习力增加 <font color=\'#ff0000\'>" + valueText.toString() + "</font> ，是否继续进行特训？",function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("SaikeqiTrainingPanel"));
            });
         }
      }
   }
}
