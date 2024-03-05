package com.robot.app.npc.npcClass
{
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.utils.getDefinitionByName;
   
   public class NpcClass_101
   {
       
      
      public function NpcClass_101()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.JUSTIN,["我是贾斯汀站长，有什么需要我帮忙的吗？"],["我想了解太空站。"," 没什么事情。"],[function():void
         {
            getDefinitionByName("com.robot.app2.control.BraveChallengeController").taskStart();
         }]);
      }
   }
}
