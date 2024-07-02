package com.robot.module.app.petBag.subModule.petList.secondBag
{
   import com.robot.core.manager.PetManager;
   import com.robot.core.module.SubModuleController;
   import com.robot.module.app.petBag.PetBagSubModule;
   
   public class SecondBagModule extends PetBagSubModule
   {
       
      
      private var _subModuleController:SubModuleController;
      
      public function SecondBagModule()
      {
         super();
         initUi("secondPetBag");
         this.initList();
      }
      
      protected function initList() : void
      {
         var petItemview:SecondBagPetItemView = null;
         this._subModuleController = new SubModuleController(this);
         for(var i:int = 0; i < PetManager.SECOND_BAG_MAX; i++)
         {
            petItemview = new SecondBagPetItemView(i);
            this._subModuleController.addSubModule("pet_" + i,petItemview);
         }
      }
      
      public function get iconList() : Array
      {
         return this._subModuleController.subModules;
      }
      
      override public function destory() : void
      {
         this._subModuleController.destory();
         this._subModuleController = null;
         super.destory();
      }
   }
}
