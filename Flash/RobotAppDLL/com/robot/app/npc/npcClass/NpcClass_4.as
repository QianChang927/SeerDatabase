package com.robot.app.npc.npcClass
{
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class NpcClass_4
   {
       
      
      public function NpcClass_4()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.IRIS,["赫尔卡星宝藏究竟是怎么一回事呢？当我们打开宝藏又会有什么样的事情发生！我相信我们一定会揭开它的面纱……"],["我会和爱丽丝一起努力的！"]);
      }
   }
}
