package com.robot.app.npc.npcClass
{
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class NpcClass_113
   {
       
      
      public function NpcClass_113()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SAIXIAOXI,["想不到恶灵兽竟然还有三巨头这样强大的手下！我一定要早点找到救世主，阻止恶灵兽！"],["加油啊赛小息！"]);
      }
   }
}
