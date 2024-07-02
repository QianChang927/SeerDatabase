package com.robot.module.app.petBag.subModule.petList.firstBag
{
   import com.robot.core.controller.PetPropAddController;
   import com.robot.core.event.PetEvent;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.TasksManager;
   import com.robot.module.app.petBag.DataKeys;
   import com.robot.module.app.petBag.subModule.petList.PetListItemBaseView;
   import flash.geom.Point;
   
   public class FirstBagPetItemView extends PetListItemBaseView
   {
       
      
      public function FirstBagPetItemView(index:int)
      {
         super(index,new Point(223.45,420.75),94.6);
         initUi("firstPetBagItem");
         _ui.firstTip.visible = index == 0;
         _headWidth = 98.75;
         this.update();
         moduleData.listenTo(DataKeys.FIRST_BAG_PETS,this.update);
      }
      
      override public function startSwap() : void
      {
         moduleData.stopListening(DataKeys.FIRST_BAG_PETS,this.update);
      }
      
      override public function endSwap() : void
      {
         moduleData.listenTo(DataKeys.FIRST_BAG_PETS,this.update);
         this.update();
      }
      
      override public function get petInfo() : PetInfo
      {
         return moduleData.getData(DataKeys.FIRST_BAG_PETS)[_index];
      }
      
      protected function updatePet(e:PetEvent) : void
      {
         this.update();
      }
      
      override public function update() : void
      {
         super.update();
         if(this.petInfo == null)
         {
            _ui["bar"].visible = false;
            _ui["bloodText"].visible = false;
            _ui["bar"].gotoAndStop(1);
            return;
         }
         var displayHp:uint = this.petInfo.hp > 0 ? uint(this.petInfo.hp + PetPropAddController.getAllAddList(this.petInfo)[5]) : uint(this.petInfo.hp);
         var displayMaxHp:uint = this.petInfo.maxHp + PetPropAddController.getAllAddList(this.petInfo)[5];
         if(this.petInfo.id == 70 && TasksManager.getTaskStatus(1241) == TasksManager.COMPLETE)
         {
            displayMaxHp += 20;
            if(displayHp > 0)
            {
               displayHp += 20;
            }
         }
         displayHp = uint(this.petInfo.base_curHp);
         displayMaxHp = uint(this.petInfo.base_hp_total);
         _ui["bloodText"].visible = true;
         _ui["bloodText"].text = displayHp + "/" + displayMaxHp;
         var frame:int = displayHp / displayMaxHp * 100;
         _ui["bar"].gotoAndStop(frame);
         _ui["bar"].visible = true;
      }
      
      override public function destory() : void
      {
         super.destory();
      }
   }
}
