package com.robot.app.npc.npcClass
{
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class NpcClass_7
   {
       
      
      public function NpcClass_7()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SHUKE,["茜茜一直问我造这个，造那个累吗！其实能够看到赛尔们快乐，对苏克来说一切也都变得不重要了！"],["苏克好棒！苏克加油！"]);
      }
   }
}
