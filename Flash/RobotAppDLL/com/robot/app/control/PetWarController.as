package com.robot.app.control
{
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.utils.TextFormatUtil;
   import flash.utils.ByteArray;
   import flash.utils.getDefinitionByName;
   import org.taomee.events.SocketEvent;
   
   public class PetWarController
   {
      
      private static var _hasInit:Boolean = false;
      
      private static var _exp:uint;
      
      private static var _num:uint;
      
      public static const CURRENT_ITEM:int = 1703765;
       
      
      public function PetWarController()
      {
         super();
      }
      
      public static function start() : void
      {
         if(PetManager.getBagMap().length < 3)
         {
            Alarm.show("你需要带上3只以上的精灵才能参加精灵大乱斗哦！");
            return;
         }
         if(_hasInit == false)
         {
            _hasInit = true;
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onClickHandler);
            SocketConnection.addCmdListener(CommandID.START_PET_WAR,onStartHandler);
            SocketConnection.addCmdListener(CommandID.PET_WAR_EXP_NOTICE,onExpHandler);
            SocketConnection.addCmdListener(CommandID.INVITE_FIGHT_CANCEL,onCancelFight);
            SocketConnection.addCmdListener(CommandID.PETWAR_END_FIGHT,onFightEnd);
         }
         SocketConnection.send(CommandID.START_PET_WAR);
      }
      
      private static function onStartHandler(param1:SocketEvent) : void
      {
         var _loc3_:* = undefined;
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         if(_loc2_.readUnsignedInt() == 0)
         {
            PetFightModel.mode = PetFightModel.MULTI_MODE;
            PetFightModel.type = PetFightModel.PET_MELEE;
            _loc3_ = getDefinitionByName("com.robot.app.panel.FightMatchingPanel");
            _loc3_.show(closeDouFight);
         }
         else
         {
            PetFightModel.mode = PetFightModel.MULTI_MODE;
            PetFightModel.type = PetFightModel.PET_MELEE_FIGHT_BOSS;
         }
      }
      
      private static function onClickHandler(param1:PetFightEvent) : void
      {
         if(_num != 0 && PetFightModel.type == PetFightModel.PET_MELEE_FIGHT_BOSS)
         {
            ItemInBagAlert.show(CURRENT_ITEM,_num.toString() + "个" + ItemXMLInfo.getName(CURRENT_ITEM) + "已经放入你的背包中！");
            _num = 0;
         }
         if(PetFightModel.type == PetFightModel.PET_MELEE)
         {
            Alarm.show("祝贺你得到了 " + TextFormatUtil.getRedTxt(_exp.toString()) + " 点积累经验！");
         }
         destroy();
         ++MainManager.actorInfo.dailyResArr[26];
      }
      
      private static function onExpHandler(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _exp = _loc2_.readUnsignedInt();
      }
      
      private static function onFightEnd(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _num = _loc2_.readUnsignedInt();
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
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onClickHandler);
         SocketConnection.removeCmdListener(CommandID.PET_WAR_EXP_NOTICE,onExpHandler);
         SocketConnection.removeCmdListener(CommandID.START_PET_WAR,onStartHandler);
         SocketConnection.removeCmdListener(CommandID.INVITE_FIGHT_CANCEL,onCancelFight);
         SocketConnection.removeCmdListener(CommandID.PETWAR_END_FIGHT,onFightEnd);
      }
   }
}
