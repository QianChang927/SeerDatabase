package com.robot.app.npc.npcClass
{
   import flash.utils.getDefinitionByName;
   
   public class NpcClass_124
   {
       
      
      public function NpcClass_124()
      {
         super();
      }
      
      public static function start() : void
      {
         getDefinitionByName("com.robot.app2.mapProcess.control.EarlSerraController").clickEquip1();
      }
   }
}
