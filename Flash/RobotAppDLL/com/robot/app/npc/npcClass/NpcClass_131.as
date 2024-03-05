package com.robot.app.npc.npcClass
{
   import flash.utils.getDefinitionByName;
   
   public class NpcClass_131
   {
       
      
      public function NpcClass_131()
      {
         super();
      }
      
      public static function start() : void
      {
         getDefinitionByName("com.robot.app2.control.PeakJihadController").onEquipmentClick4();
      }
   }
}
