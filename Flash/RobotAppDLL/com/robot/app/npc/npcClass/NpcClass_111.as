package com.robot.app.npc.npcClass
{
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class NpcClass_111
   {
       
      
      public function NpcClass_111()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.ALEILEI,["每天最幸福的时刻就是吃饭的时候！哇哈哈。"],["嗯多吃点。"]);
      }
   }
}
