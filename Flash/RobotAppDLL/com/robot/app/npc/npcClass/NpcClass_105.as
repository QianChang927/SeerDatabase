package com.robot.app.npc.npcClass
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class NpcClass_105
   {
       
      
      public function NpcClass_105()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.WULIGULA,["你参加过精灵探索计划吗？听说探索完毕可以获得赛尔豆、等级提升、学习力调配等奖励！赶快试试吧！"],["立刻参与！","嗯，我知道了！"],[function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("PetExploreMainPanel"),"正在打开精灵探索计划....");
         }]);
      }
   }
}
