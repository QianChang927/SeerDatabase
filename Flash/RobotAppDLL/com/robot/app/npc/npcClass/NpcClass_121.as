package com.robot.app.npc.npcClass
{
   import com.robot.core.CommandID;
   import com.robot.core.manager.MainManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import org.taomee.events.SocketEvent;
   
   public class NpcClass_121
   {
       
      
      public function NpcClass_121()
      {
         super();
      }
      
      public static function start() : void
      {
         if(MainManager.actorInfo.topStatus11 == 1)
         {
            NpcDialog.show(NPC.LEINUO_GENERAL,["巅峰之战是验证实力和意志的舞台，相信你也感受到了！期待你在第十二赛季中有突出的表现！收下你的奖励，向着更高更远的目标前进！"],["是！将军！我一定会加油的！"],[function():void
            {
               SocketConnection.sendWithCallback(CommandID.TOPFIGHT_GET_AWARD,function(param1:SocketEvent):void
               {
                  MainManager.actorInfo.topStatus11 = 0;
               },11);
            }]);
         }
         else if(MainManager.actorInfo.topStatus11 == 2)
         {
            NpcDialog.show(NPC.LEINUO_GENERAL,["在巅峰之战第十一赛季中，你的表现和实力让所有的赛尔为之折服！你就是真正的巅峰赛尔，拿走属于你的奖励吧！这是荣耀和实力的象征！希望你能在新的赛季中取得更大的突破！"],["是！将军！我一定会加油的！"],[function():void
            {
               SocketConnection.sendWithCallback(CommandID.TOPFIGHT_GET_AWARD,function(param1:SocketEvent):void
               {
                  MainManager.actorInfo.topStatus11 = 0;
               },11);
            }]);
         }
         else
         {
            NpcDialog.show(NPC.LEINUO_GENERAL,["你好，我是雷诺。现由我负责巅峰之战的一切事宜。暑期全国联赛已经结束，全新第十二赛季火热进行中！"],["我现在就要投入战斗！","我要了解新的巅峰圣战精彩内容！","原来你就是雷诺将军，久仰久仰！"],[function():void
            {
               NpcDialog.show(NPC.LEINUO_GENERAL,["你可以选择0xff0000右边的传送装置0xffffff进行积分赛或者积分赛（突破模式），也可以选择0xff0000两边的小电视0xffffff进行练习赛或者练习赛（突破模式）。"],["我明白了！将军！"]);
            },function():void
            {
            }]);
         }
      }
   }
}
