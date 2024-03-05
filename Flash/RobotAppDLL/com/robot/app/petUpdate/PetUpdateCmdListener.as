package com.robot.app.petUpdate
{
   import com.robot.app.petUpdate.updatePanel.LevelUpAndNewSkillController;
   import com.robot.core.CommandID;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.pet.update.PetUpdatePropInfo;
   import com.robot.core.info.pet.update.PetUpdateSkillInfo;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   
   public class PetUpdateCmdListener extends BaseBean
   {
      
      public static var IN_EXP_PANEL:Boolean = false;
       
      
      private var petUpdatePropCon:com.robot.app.petUpdate.PetUpdatePropController;
      
      private var petUpdataeSkillCon:com.robot.app.petUpdate.PetUpdateSkillController;
      
      public function PetUpdateCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         this.petUpdatePropCon = new com.robot.app.petUpdate.PetUpdatePropController();
         this.petUpdataeSkillCon = new com.robot.app.petUpdate.PetUpdateSkillController();
         SocketConnection.addCmdListener(CommandID.NOTE_UPDATE_PROP,this.onUpdateProp);
         SocketConnection.addCmdListener(CommandID.NOTE_UPDATE_SKILL,this.onUpdateSkill);
         finish();
      }
      
      private function onUpdateProp(param1:SocketEvent) : void
      {
         var _loc2_:PetUpdatePropInfo = param1.data as PetUpdatePropInfo;
         this.petUpdatePropCon.setup(_loc2_);
         PetManager.dispatchEvent(new PetFightEvent(PetFightEvent.PET_UPDATE_INFORM));
      }
      
      private function onUpdateSkill(param1:SocketEvent) : void
      {
         var _loc2_:PetUpdateSkillInfo = param1.data as PetUpdateSkillInfo;
         if(!LevelUpAndNewSkillController.instance.showAddSkill(_loc2_))
         {
            this.petUpdataeSkillCon.setup(_loc2_);
         }
      }
   }
}
