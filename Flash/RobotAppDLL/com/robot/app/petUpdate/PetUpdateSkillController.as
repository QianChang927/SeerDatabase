package com.robot.app.petUpdate
{
   import com.robot.app.petUpdate.updatePanel.UpdateSkillManager;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.pet.update.PetUpdateSkillInfo;
   import com.robot.core.info.pet.update.UpdateSkillInfo;
   import com.robot.core.manager.PetManager;
   import flash.display.Bitmap;
   import org.taomee.utils.DisplayUtil;
   
   public class PetUpdateSkillController
   {
       
      
      private var _bmp:Bitmap;
      
      private var _infoArray:Array;
      
      public function PetUpdateSkillController()
      {
         this._infoArray = [];
         super();
         FightDispatcher.addEventListener(PetFightEvent.PET_UPDATE_SKILL,this.onPetUpdateSkill);
      }
      
      public function setup(param1:PetUpdateSkillInfo) : void
      {
         this._infoArray = this._infoArray.concat(param1.infoArray);
         if(this._infoArray.length > 0)
         {
            this.show();
         }
         else
         {
            PetManager.upDate();
         }
      }
      
      private function onPetUpdateSkill(param1:PetFightEvent) : void
      {
         this._bmp = param1.dataObj as Bitmap;
         this.loop();
      }
      
      private function loop() : void
      {
         if(this._infoArray.length > 0)
         {
            this.show();
         }
         else
         {
            DisplayUtil.removeForParent(this._bmp);
            this._bmp = null;
            PetManager.upDate();
            FightDispatcher.dispatchEvent(new PetFightEvent(PetFightEvent.BATTLE_OVER));
         }
      }
      
      private function show() : void
      {
         var _loc1_:UpdateSkillInfo = this._infoArray.shift() as UpdateSkillInfo;
         UpdateSkillManager.update(_loc1_,this.loop);
      }
   }
}
