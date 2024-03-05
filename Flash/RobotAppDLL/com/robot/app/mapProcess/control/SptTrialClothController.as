package com.robot.app.mapProcess.control
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class SptTrialClothController
   {
      
      private static var _map:BaseMapProcess;
      
      public static var bossName:String;
      
      private static var _isWin:Boolean;
       
      
      public function SptTrialClothController()
      {
         super();
      }
      
      public static function setup(param1:BaseMapProcess) : void
      {
         _map = param1;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFinishFight);
         (_map.conLevel["SptTrialCloth"] as MovieClip).buttonMode = true;
         (_map.conLevel["SptTrialCloth"] as MovieClip).addEventListener(MouseEvent.CLICK,onClothClick);
         ToolTipManager.add(_map.conLevel["SptTrialCloth"],"Spt试炼装-极寒幽魂");
      }
      
      private static function onFinishFight(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         var info:Object = e.dataObj as FightOverInfo;
         if(bossName == "阿克希亚")
         {
            if(info.winnerID != MainManager.actorID)
            {
               _isWin = false;
               SocketConnection.addCmdListener(CommandID.ITEM_LIST,onItemCountHandler);
               SocketConnection.send(CommandID.ITEM_LIST,1300093,1300093,2);
            }
            else
            {
               _isWin = true;
               SocketConnection.addCmdListener(CommandID.MONEY_CHECK_REMAIN,function(param1:SocketEvent):void
               {
                  SocketConnection.removeCmdListener(CommandID.MONEY_CHECK_REMAIN,arguments.callee);
                  var _loc3_:Number = (param1.data as ByteArray).readUnsignedInt() / 100;
                  if(_loc3_ >= 5)
                  {
                     SocketConnection.addCmdListener(CommandID.ITEM_LIST,onItemCountHandler);
                     SocketConnection.send(CommandID.ITEM_LIST,1300093,1300093,2);
                  }
               });
               SocketConnection.send(CommandID.MONEY_CHECK_REMAIN);
            }
         }
      }
      
      private static function onItemCountHandler(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var typeCount:uint;
         var event:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.ITEM_LIST,onItemCountHandler);
         data = event.data as ByteArray;
         typeCount = data.readUnsignedInt();
         if(typeCount == 0)
         {
            if(_isWin)
            {
               NpcDialog.show(NPC.AKXY,["干得不错，年轻人！看到我身旁这套极寒幽魂吗？只要收集齐全部Spt试炼装，你将会有意想不到惊喜！"],["恩恩！我要买！"],[function():void
               {
                  bossName = "";
                  ModuleManager.showModule(ClientConfig.getAppModule("SptTrialCloth_AkxyPanel"),"正在打开……");
               }]);
            }
            else
            {
               NpcDialog.show(NPC.AKXY,["别灰心，年轻人！看到我身边这套极寒幽魂吗？穿上整套装备再向我挑战，你的胜率将大幅提升！"],["真的吗？我要买！"],[function():void
               {
                  bossName = "";
                  ModuleManager.showModule(ClientConfig.getAppModule("SptTrialCloth_AkxyPanel"),"正在打开……");
               }]);
            }
         }
      }
      
      private static function onClothClick(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,84807168);
         ModuleManager.showModule(ClientConfig.getAppModule("SptTrialCloth_AkxyPanel"),"正在打开……");
      }
      
      public static function destroy() : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFinishFight);
         (_map.conLevel["SptTrialCloth"] as MovieClip).removeEventListener(MouseEvent.CLICK,onClothClick);
         ToolTipManager.remove(_map.conLevel["SptTrialCloth"]);
      }
   }
}
