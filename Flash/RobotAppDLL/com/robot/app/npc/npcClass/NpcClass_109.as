package com.robot.app.npc.npcClass
{
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class NpcClass_109
   {
       
      
      public function NpcClass_109()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.DANDI,["传承守护推特星的星球秘密是部落领袖的最高使命！"],["我顶你！"]);
      }
   }
}
