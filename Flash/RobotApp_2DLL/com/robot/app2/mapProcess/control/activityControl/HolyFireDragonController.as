package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PanelRecallManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alert;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class HolyFireDragonController
   {
      
      private static var _bossName:String;
       
      
      public function HolyFireDragonController()
      {
         super();
      }
      
      public static function fightWithGuardPet(param1:String, param2:int) : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         _bossName = param1;
         FightManager.fightNoMapBoss(param1,param2);
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         info = e.dataObj as FightOverInfo;
         if(info.winnerID != MainManager.actorID)
         {
            if(_bossName == "圣者炎龙")
            {
               Alert.show("圣者炎龙就在眼前，却很遗憾的落败了，是否通过钻石途径收集圣灵石，领取圣者炎龙？",function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("HolyFireDragonReceivePanel"));
               },function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("HolyFireDragonMainPanel"));
               });
            }
            else
            {
               Alert.show("很遗憾，你没能通过守护兽的挑战，是否购买圣者遗物套装，永久跳过挑战守护兽？",function():void
               {
                  PanelRecallManager.SpringRescue_Recall = false;
                  ModuleManager.showModule(ClientConfig.getAppModule("HolyFireDragonClothSellPanel"));
               },function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("HolyFireDragonMainPanel"));
               });
            }
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("HolyFireDragonMainPanel"));
         }
      }
      
      public static function getLeftTime(param1:Function) : void
      {
         var fun:Function = param1;
         SocketConnection.addCmdListener(CommandID.HOLYFIREDRAGON_GET_LEFTTIME,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.HOLYFIREDRAGON_GET_LEFTTIME,arguments.callee);
            var _loc3_:uint = (param1.data as ByteArray).readUnsignedInt();
            if(fun != null)
            {
               fun(_loc3_);
            }
         });
         SocketConnection.send(CommandID.HOLYFIREDRAGON_GET_LEFTTIME);
      }
   }
}
