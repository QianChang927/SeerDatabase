package com.robot.app.npc.npcClass
{
   import com.robot.app.mapProcess.active.SpecialPetActive;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class NpcClass_108
   {
       
      
      public function NpcClass_108()
      {
         super();
      }
      
      public static function start() : void
      {
         if(SpecialPetActive._gaiya)
         {
            NpcDialog.show(NPC.GAIYA,["我会向世界证明！谁才是真正的战神！"],["与盖亚对战！","哇哦哦！盖亚最牛！"],[function():void
            {
               SpecialPetActive.fightWithGaiya();
            }]);
         }
         else
         {
            NpcDialog.show(NPC.GAIYA,["我会向世界证明！谁才是真正的战神！"],["哇哦哦！盖亚最牛！"]);
         }
      }
   }
}
