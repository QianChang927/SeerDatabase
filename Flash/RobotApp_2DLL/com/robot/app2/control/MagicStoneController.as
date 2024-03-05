package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class MagicStoneController
   {
       
      
      public function MagicStoneController()
      {
         super();
      }
      
      public static function setup() : void
      {
         KTool.getMultiValue([10449,10450],function(param1:Array):void
         {
            var values:Array = param1;
            var time:uint = SystemTimerManager.sysBJDate.time / 1000;
            if(values[0] < 5 && values[1] <= time)
            {
               SocketConnection.send(CommandID.GET_MAGIC_STONE);
               NpcDialog.show(NPC.KALULU,["你知道“魔石之砂”吗？送给你0xff00005颗魔石之砂0xffffff，去兑换奖励吧！每30分钟可领取一次哦！而真正的神秘，还躲在赛尔号大电影中等着大家来揭晓。"],["我要领取神秘礼物！","我不关心"],[function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("MagicStoneExchangePanel"));
               }]);
            }
            else if(values[0] < 5 && values[1] > time)
            {
               NpcDialog.show(NPC.KALULU,["你知道“魔石之砂”吗？送给你0xff00005颗魔石之砂0xffffff，去兑换奖励吧！每30分钟可领取一次哦！而真正的神秘，还躲在赛尔号大电影中等着大家来揭晓。"],["我要领取神秘礼物！","我不关心"],[function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("MagicStoneExchangePanel"));
               }]);
            }
            else if(values[0] >= 5)
            {
               NpcDialog.show(NPC.KALULU,["每天每位勇敢的赛尔都能领取0xff00005次0xffffff哦！明天再来0xff0000放映厅0xffffff找我0xff0000卡璐璐0xffffff吧！还有更丰厚的奖励等待我们呢！"],["我明天一定会再来的！"],[function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("MagicStoneExchangePanel"));
               }]);
            }
         });
      }
   }
}
