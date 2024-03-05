package com.robot.app.sptStar
{
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.PetManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   
   public class GaiyaTrainController
   {
      
      public static var info:PetInfo;
       
      
      public function GaiyaTrainController()
      {
         super();
      }
      
      public static function check() : Boolean
      {
         if(PetManager.length == 0)
         {
            Alarm.show("你的背包中没有精灵哦！");
            return false;
         }
         info = PetManager.getPetInfo(PetManager.defaultTime);
         if(info)
         {
            if(info.id != 261 && info.id != 1845)
            {
               NpcDialog.show(NPC.SEER,["哎呀！快把盖亚设为对战的首选精灵，再来进行盖亚极限修行哦！"],["我现在就把盖亚设为首选精灵！"]);
               return false;
            }
            return true;
         }
         return false;
      }
      
      public static function checkForTrain() : Boolean
      {
         if(PetManager.length == 0)
         {
            Alarm.show("你的背包中没有精灵哦！");
            return false;
         }
         info = PetManager.getPetInfo(PetManager.defaultTime);
         if(info)
         {
            if(info.id != 261 && info.id != 1845)
            {
               NpcDialog.show(NPC.LAOKE_LEIDE,["想依靠别人的力量？！弱者！"],["准备好了吗？让盖亚出战吧！"]);
               return false;
            }
            return true;
         }
         return false;
      }
   }
}
