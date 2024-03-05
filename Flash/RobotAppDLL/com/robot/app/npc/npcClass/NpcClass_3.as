package com.robot.app.npc.npcClass
{
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class NpcClass_3
   {
       
      
      public function NpcClass_3()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.DOCTOR,["赛尔号的冒险之旅让我了解到更多精灵！精灵可是我们的伙伴！咦？我的祝福词偏题了？#7"],["哇哦！我希望能发现更多精灵伙伴！"]);
      }
   }
}
