package com.robot.module.app.petBag.subModule.petList.secondBag
{
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.PetManager;
   import com.robot.module.app.petBag.DataKeys;
   import com.robot.module.app.petBag.subModule.petList.PetListItemBaseView;
   import flash.display.MovieClip;
   import flash.geom.Point;
   
   public class SecondBagPetItemView extends PetListItemBaseView
   {
       
      
      public function SecondBagPetItemView(index:int)
      {
         super(index,new Point(274.55,510.2),85);
         initUi("secondPetBagItem");
         onFocusPetChange();
         buttonMode = true;
         _headWidth = 82.05;
         this.update();
         moduleData.listenTo(DataKeys.SECOND_BAG_PETS,this.update);
         if(!this.isUnlock && this.petInfo != null)
         {
            PetManager.bagToInStorage(this.petInfo.catchTime);
         }
      }
      
      override public function startSwap() : void
      {
         moduleData.stopListening(DataKeys.SECOND_BAG_PETS,this.update);
      }
      
      override public function endSwap() : void
      {
         moduleData.listenTo(DataKeys.SECOND_BAG_PETS,this.update);
         this.update();
      }
      
      override public function update() : void
      {
         var unlockLevel:int = 0;
         super.update();
         var leveTip:MovieClip = _ui["vipMc"];
         leveTip.visible = !this.isUnlock;
         if(!this.isUnlock)
         {
            unlockLevel = int(PetManager.SECOND_BAG_UNLOCK_LEVELS[_index]);
            leveTip["vipLevelMc"].gotoAndStop(unlockLevel);
         }
      }
      
      public function get isUnlock() : Boolean
      {
         return this._index + 1 <= PetManager.secondBagTotalLength;
      }
      
      override public function get petInfo() : PetInfo
      {
         return moduleData.getData(DataKeys.SECOND_BAG_PETS)[_index];
      }
   }
}
