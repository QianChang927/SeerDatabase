package com.robot.app.npc.npcClass
{
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class NpcClass_107
   {
       
      
      public function NpcClass_107()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.NADUO,["噜啦啦，噜啦啦，我想当爸爸！"],["…………祝你成功"]);
      }
   }
}
