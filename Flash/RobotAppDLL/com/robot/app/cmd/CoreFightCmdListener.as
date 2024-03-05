package com.robot.app.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.manager.MainManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.TextFormatUtil;
   import flash.utils.ByteArray;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   
   public class CoreFightCmdListener extends BaseBean
   {
      
      public static var _type:uint;
      
      private static var _oldPet:uint;
      
      private static var _newPet:uint;
      
      private static var _exp:uint;
       
      
      public function CoreFightCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.CORE_FIGHT_NOTICE,this.onNotice);
         SocketConnection.addCmdListener(CommandID.CORE_FIGHT_GET_EXP,this.onGetExp);
         finish();
      }
      
      private function onNotice(param1:SocketEvent) : void
      {
         var e:SocketEvent = param1;
         var by:ByteArray = e.data as ByteArray;
         _type = by.readUnsignedInt();
         _oldPet = by.readUnsignedInt();
         _newPet = by.readUnsignedInt();
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
         {
            var e:PetFightEvent = param1;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("coreFight_" + _oldPet + "_" + _newPet),function():void
            {
               switch(_newPet)
               {
                  case 3:
                     NpcDialog.show(NPC.BUBUHUA,[MainManager.actorInfo.formatNick + "，你真是一个英勇的赛尔。不要气馁，我会一直在你身边帮助你的！"],["让我们一起战斗吧！"],[startFight]);
                     break;
                  case 6:
                     NpcDialog.show(NPC.BALUSI,[MainManager.actorInfo.formatNick + "，你真是一个英勇的赛尔。不要气馁，我会一直在你身边帮助你的！"],["让我们一起战斗吧！"],[startFight]);
                     break;
                  case 9:
                     NpcDialog.show(NPC.LIEYANXINGXING,[MainManager.actorInfo.formatNick + "，你真是一个英勇的赛尔。不要气馁，我会一直在你身边帮助你的！"],["让我们一起战斗吧！"],[startFight]);
                     break;
                  case 2544:
                     NpcDialog.show(NPC.LEIYI,["速度才是最强的武器！"],["有了雷伊的帮助，我一定能赢！"],[startFight]);
                     break;
                  case 2545:
                     NpcDialog.show(NPC.GAIYA,["我会让你知道，谁才是真正的战斗大师！"],["有了盖亚的帮助，我一定能赢！"],[startFight]);
                     break;
                  case 2546:
                     NpcDialog.show(NPC.KAXIUSI_WHITE,["来吧！我们并肩作战！"],["有了卡修斯的帮助，我的一定能赢！"],[startFight]);
                     break;
                  case 2547:
                     NpcDialog.show(NPC.BULAIKE_NEW,["我会用智慧面对所有的挑战！"],["有了布莱克的帮助，我一定能赢！"],[startFight]);
               }
            });
         });
      }
      
      private function startFight() : void
      {
         PetFightModel.type = PetFightModel.CORE_FIGHT;
         SocketConnection.send(CommandID.CORE_FIGHT_START_FIGHT);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
         {
            PetFightModel.type = 0;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            switch(_newPet)
            {
               case 2544:
                  NpcDialog.show(NPC.LEIYI,["现在的你，已经势不可挡了！"],["我会努力的！"],[overFight]);
                  break;
               case 2545:
                  NpcDialog.show(NPC.GAIYA,["你一定能够成为超级战士，我看到了你的潜力！"],["我会努力的！"],[overFight]);
                  break;
               case 2546:
                  NpcDialog.show(NPC.KAXIUSI_WHITE,["你拥有一颗善良勇敢的心，我感受到了正义的力量！"],["我会努力的！"],[overFight]);
                  break;
               case 2547:
                  NpcDialog.show(NPC.BULAIKE_NEW,["记住，想要成功，必须学会以智取胜！"],["我会努力的！"],[overFight]);
            }
         });
      }
      
      private function overFight() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("coreFight_" + _newPet + "_" + _oldPet),function():void
         {
            _type = 0;
            _oldPet = 0;
            _newPet = 0;
            if(_exp > 0)
            {
               Alarm.show("恭喜你，得到了" + TextFormatUtil.getRedTxt(_exp.toString()) + "点积累经验！");
            }
         });
      }
      
      private function onGetExp(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _exp = _loc2_.readUnsignedInt();
      }
   }
}
