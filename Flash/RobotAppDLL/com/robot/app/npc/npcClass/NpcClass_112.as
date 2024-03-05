package com.robot.app.npc.npcClass
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class NpcClass_112
   {
       
      
      public function NpcClass_112()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.RUIERSI,["我所做的一切没必要向任何人解释！"],["瑞尔斯，我要挑战你！","我……我只不过是来看风景的...."],[function():void
         {
            FightManager.fightWithBoss("瑞尔斯",1);
         }]);
      }
   }
}
