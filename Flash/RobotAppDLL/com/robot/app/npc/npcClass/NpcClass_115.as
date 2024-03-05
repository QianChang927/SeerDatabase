package com.robot.app.npc.npcClass
{
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class NpcClass_115
   {
       
      
      public function NpcClass_115()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.TE_RUI,["欢迎来到精灵学院，在这里你的精灵会得到最好的照顾！你可以在辅导员那边给精灵报名上课，也可以在训练室中为精灵训练学习力！"],["我知道啦！"]);
      }
   }
}
