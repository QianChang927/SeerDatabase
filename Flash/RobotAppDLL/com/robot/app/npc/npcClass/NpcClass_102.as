package com.robot.app.npc.npcClass
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class NpcClass_102
   {
       
      
      public function NpcClass_102()
      {
         super();
      }
      
      public static function start() : void
      {
         SocketConnection.send(1022,86054372);
         NpcDialog.show(NPC.ROCKY,["哈哈哈！火星港乐园生意兴隆，罗开陈列室隆重开张！欢迎来到罗开陈列室，这里的神宠必将帮你成为赛尔号史册上的一代传说！有疑问尽管咨询我吧！"],["我没有钻石能玩什么？","领取50面额米米卡红包","等会再来"],[function():void
         {
            NpcDialog.show(NPC.SEER,["不用担心！没有钻石同样能参与乐园项目！比如精灵扭蛋机、幸运九宫格等。另外即将替代乐园代币和大家见面的0xff0000免费新惊喜0xFFFFFF，也敬请期待哟！"],["知道了"],[function():void
            {
            }]);
         },function():void
         {
            SocketConnection.send(1022,86054373);
            ModuleManager.showModule(ClientConfig.getAppModule("RedPacketPanel"));
         }]);
      }
   }
}
