package com.robot.app.petUpdate.updatePanel
{
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.pet.update.PetUpdateSkillInfo;
   import com.robot.core.info.pet.update.UpdatePropInfo;
   import com.robot.core.info.pet.update.UpdateSkillInfo;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import flash.events.Event;
   import org.taomee.ds.HashMap;
   
   public class LevelUpAndNewSkillController
   {
      
      private static var c:com.robot.app.petUpdate.updatePanel.LevelUpAndNewSkillController;
      
      private static var panel:com.robot.app.petUpdate.updatePanel.LevelUpAndNewSkillPanel = new com.robot.app.petUpdate.updatePanel.LevelUpAndNewSkillPanel();
       
      
      private var dataHash:HashMap;
      
      private var crtPet:int;
      
      public var noshow:Boolean = false;
      
      private var skillArray:Array;
      
      public function LevelUpAndNewSkillController()
      {
         this.dataHash = new HashMap();
         this.skillArray = [];
         super();
         panel.addEventListener(com.robot.app.petUpdate.updatePanel.LevelUpAndNewSkillPanel.CLOSE_PANEL,this.onCheckPanel);
      }
      
      public static function get instance() : com.robot.app.petUpdate.updatePanel.LevelUpAndNewSkillController
      {
         if(!c)
         {
            c = new com.robot.app.petUpdate.updatePanel.LevelUpAndNewSkillController();
         }
         return c;
      }
      
      public function showLvUp(param1:UpdatePropInfo, param2:PetInfo, param3:Function) : void
      {
         if(this.noshow || Boolean(NewSeerTaskController.isNewSeer))
         {
            return;
         }
         var _loc4_:PetInfo = PetManager.getPetInfo(param1.catchTime);
         ModuleManager.showAppModule("PetSkillPanel",_loc4_);
      }
      
      public function showAddSkill(param1:PetUpdateSkillInfo) : Boolean
      {
         var _loc2_:int = int((param1.infoArray[0] as UpdateSkillInfo).petCatchTime);
         if(Boolean(this.dataHash.containsKey(_loc2_)) || this.crtPet == _loc2_)
         {
            this.skillArray = this.skillArray.concat(param1.infoArray);
            this.checkSkillArray();
            return true;
         }
         return false;
      }
      
      private function showPanel() : void
      {
         if(!panel.isShow)
         {
            this.crtPet = this.dataHash.getKeys()[0];
            panel.show(this.dataHash.getValue(this.crtPet));
            this.dataHash.remove(this.crtPet);
            this.checkSkillArray();
         }
      }
      
      public function closePanel() : void
      {
         if(Boolean(panel) && panel.isShow)
         {
            panel.closePanel();
         }
      }
      
      private function checkSkillArray() : void
      {
         var _loc2_:UpdateSkillInfo = null;
         var _loc1_:int = 0;
         while(_loc1_ < this.skillArray.length)
         {
            _loc2_ = this.skillArray[_loc1_];
            if(this.crtPet == _loc2_.petCatchTime)
            {
               panel.showNewSkill(_loc2_.activeSkills,_loc2_.unactiveSkills);
               this.skillArray.splice(_loc1_,1);
               _loc1_--;
            }
            _loc1_++;
         }
      }
      
      private function onCheckPanel(param1:Event) : void
      {
         this.crtPet = 0;
         if(this.dataHash.getKeys().length > 0)
         {
            this.showPanel();
         }
         else
         {
            PetManager.upDate();
         }
      }
   }
}
