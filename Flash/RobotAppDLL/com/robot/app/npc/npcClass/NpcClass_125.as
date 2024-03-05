package com.robot.app.npc.npcClass
{
   import flash.utils.getDefinitionByName;
   
   public class NpcClass_125
   {
       
      
      public function NpcClass_125()
      {
         super();
      }
      
      public static function start() : void
      {
         getDefinitionByName("com.robot.app2.mapProcess.control.EarlSerraController").clickEquip2();
      }
   }
}
