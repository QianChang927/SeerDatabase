package com.robot.app.npc.npcClass
{
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class NpcClass_110
   {
       
      
      public function NpcClass_110()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.XIAOLV,["我天生就很苗条，所以我可以肆无忌惮的大吃大喝，哈哈哈！"],["嗯，有好吃的记得给我点……"]);
      }
   }
}
