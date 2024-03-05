package com.robot.app.npc.npcClass
{
   import flash.utils.getDefinitionByName;
   
   public class NpcClass_116
   {
       
      
      public function NpcClass_116()
      {
         super();
      }
      
      public static function start() : void
      {
         getDefinitionByName("com.robot.app2.control.MagicStoneController").setup();
      }
   }
}
