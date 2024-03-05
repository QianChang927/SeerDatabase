package com.robot.app.petRoayle
{
   import com.robot.core.manager.MainManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.mode.SpriteModel;
   import com.robot.core.mode.spriteModelAdditive.PeopleBloodBar;
   import flash.events.MouseEvent;
   
   public class RoaylePeopleModelWrapper
   {
       
      
      private var _model:BasePeoleModel;
      
      public function RoaylePeopleModelWrapper(param1:BasePeoleModel)
      {
         super();
         this._model = param1;
      }
      
      public function get model() : BasePeoleModel
      {
         return this._model;
      }
      
      public function set model(param1:BasePeoleModel) : void
      {
         this._model = param1;
      }
      
      private function disablePetModel() : void
      {
         if(this._model.pet)
         {
            this._model.pet.addEventListener(MouseEvent.CLICK,this.onPetClick,false,1);
         }
      }
      
      private function onPetClick(param1:MouseEvent) : void
      {
         param1.stopImmediatePropagation();
      }
      
      public function get userID() : uint
      {
         if(Boolean(this._model) && Boolean(this._model.info))
         {
            return this._model.info.userID;
         }
         return 0;
      }
      
      public function showPetBloodBar(param1:uint, param2:uint) : void
      {
         var _loc3_:SpriteModel = this._model.pet;
         if(this._model == MainManager.actorModel)
         {
            _loc3_.bloodBar.colorType = PeopleBloodBar.RED;
         }
         else
         {
            _loc3_.bloodBar.colorType = PeopleBloodBar.BLUE;
         }
         _loc3_.bloodBar.setHp(param1,param2,0,10);
         this.disablePetModel();
      }
      
      public function setInteractiveAction() : void
      {
         this._model.interactiveAction = new RoyaleInteractiveAction(this._model);
      }
      
      public function destroy() : void
      {
         if(this._model.pet)
         {
            this._model.pet.removeEventListener(MouseEvent.CLICK,this.onPetClick,false);
            this._model.pet.bloodBar.destroy();
         }
      }
   }
}
