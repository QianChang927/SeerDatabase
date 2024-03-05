package com.robot.app.control
{
   import com.robot.core.CommandID;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.utils.ByteArray;
   import flash.utils.getDefinitionByName;
   import org.taomee.events.SocketEvent;
   
   public class FantasyPetWarController
   {
      
      private static var _hasInit:Boolean = false;
       
      
      public function FantasyPetWarController()
      {
         super();
      }
      
      public static function start() : void
      {
         var _loc1_:Array = PetManager.getBagMap();
         var _loc2_:uint = 0;
         var _loc3_:uint = 0;
         while(_loc3_ < _loc1_.length)
         {
            if((_loc1_[_loc3_] as PetListInfo).level == 100)
            {
               _loc2_++;
            }
            _loc3_++;
         }
         if(_loc2_ < 3)
         {
            Alarm.show("你需要带上至少3只100级的精灵才能参加梦幻精灵大乱斗哦！");
            return;
         }
         if(_hasInit == false)
         {
            _hasInit = true;
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onOver);
            SocketConnection.addCmdListener(CommandID.FANTASY_PETWAR_OVER,onFightOver);
            SocketConnection.addCmdListener(CommandID.FANTASY_PETWAR_START_WAR,onStartHandler);
            SocketConnection.addCmdListener(CommandID.INVITE_FIGHT_CANCEL,onCancelFight);
         }
         SocketConnection.send(CommandID.FANTASY_PETWAR_START_WAR);
      }
      
      private static function onStartHandler(param1:SocketEvent) : void
      {
         PetFightModel.mode = PetFightModel.MULTI_MODE;
         PetFightModel.type = PetFightModel.FANTASY_PET_MELEE;
         var _loc2_:* = getDefinitionByName("com.robot.app.panel.FightMatchingPanel");
         _loc2_.show(closeDouFight);
      }
      
      private static function onOver(param1:PetFightEvent) : void
      {
         destroy();
      }
      
      private static function onFightOver(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         Alarm.show("恭喜你获得了" + _loc4_ + "点梦幻点数和" + _loc3_ + "个赛尔豆！");
         destroy();
      }
      
      private static function closeDouFight() : void
      {
         SocketConnection.send(CommandID.INVITE_FIGHT_CANCEL);
      }
      
      private static function onCancelFight(param1:SocketEvent) : void
      {
         destroy();
      }
      
      private static function destroy() : void
      {
         PetFightModel.mode = PetFightModel.MULTI_MODE;
         PetFightModel.type = 0;
         _hasInit = false;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onOver);
         SocketConnection.removeCmdListener(CommandID.FANTASY_PETWAR_OVER,onFightOver);
         SocketConnection.removeCmdListener(CommandID.FANTASY_PETWAR_START_WAR,onStartHandler);
         SocketConnection.removeCmdListener(CommandID.INVITE_FIGHT_CANCEL,onCancelFight);
      }
   }
}
