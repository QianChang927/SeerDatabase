package com.robot.app.npc.npcClass
{
   import com.robot.app.control.BigEventController;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class NpcClass_114
   {
       
      
      public function NpcClass_114()
      {
         super();
      }
      
      public static function start() : void
      {
         showDialogue();
      }
      
      public static function showDialogue() : void
      {
         NpcDialog.show(NPC.NEWS_MAN,["我是飞船主播纽斯，想知道最近宇宙中都发生哪些大事吗？那你可一定要问我哦！我身边的宇宙大事件可以告诉你想知道的！"],["立刻查看宇宙大事件！"],[function():void
         {
            BigEventController.goMain();
         }]);
      }
   }
}
