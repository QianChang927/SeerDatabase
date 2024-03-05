package com.robot.app.npc.npcClass
{
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class NpcClass_2
   {
       
      
      public function NpcClass_2()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.CICI,["茜茜能在赛尔号真的很快乐！#8我也希望所有的船员们也能在这里找到快乐！"],["希望茜茜能够创造出更多创意机械铠甲！"]);
      }
   }
}
