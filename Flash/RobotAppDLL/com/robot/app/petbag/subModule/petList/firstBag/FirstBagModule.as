package com.robot.module.app.petBag.subModule.petList.firstBag
{
   import com.robot.core.manager.PetManager;
   import com.robot.core.module.SubModuleController;
   import com.robot.module.app.petBag.PetBagSubModule;
   import flash.events.MouseEvent;
   
   public class FirstBagModule extends PetBagSubModule
   {
       
      
      private var _subModuleController:SubModuleController;
      
      public function FirstBagModule()
      {
         super();
         initUi("firstPetBag");
         this.initList();
         this._eventCom.addEvent(this,MouseEvent.ROLL_OVER,this.onRolloOver);
         this._eventCom.addEvent(this,MouseEvent.ROLL_OUT,this.onRolloOut);
      }
      
      protected function initList() : void
      {
         var petItemview:FirstBagPetItemView = null;
         this._subModuleController = new SubModuleController(this);
         for(var i:int = 0; i < PetManager.FIRST_BAG_MAX; i++)
         {
            petItemview = new FirstBagPetItemView(i);
            this._subModuleController.addSubModule("pet_" + i,petItemview);
         }
      }
      
      public function get iconList() : Array
      {
         return this._subModuleController.subModules;
      }
      
      private function onRolloOver(e:* = null) : void
      {
         for(var i:int = 0; i < this.iconList.length; i++)
         {
         }
      }
      
      private function onRolloOut(e:* = null) : void
      {
         for(var i:int = 0; i < this.iconList.length; i++)
         {
         }
      }
      
      override public function destory() : void
      {
         this._subModuleController.destory();
         this._subModuleController = null;
         super.destory();
      }
   }
}
