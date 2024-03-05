package com.robot.app.npc.npcClass
{
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class NpcClass_127
   {
       
      
      public function NpcClass_127()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.CROW,["太空站全新功勋体系已经开放了！完成每日和每周的功勋任务可以获得大量功勋点数！赶快看看功勋点数能够兑换的丰富奖励吧！"],["好！我要看看功勋任务和功勋奖励！","我先去获得足够的功勋点再来！"],[function():void
         {
            ModuleManager.showAppModule("MeritSystemOnlineMianPanel");
         }]);
      }
   }
}
