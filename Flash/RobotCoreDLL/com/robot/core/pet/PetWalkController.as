package com.robot.core.pet
{
   public class PetWalkController
   {
      
      public static const WALK_PET_CLICK:String = "walk_pet_click";
      
      public static const PET_WALK:String = "pet_walk";
      
      public static const PET_STOP:String = "pet_stop";
      
      public static var model:com.robot.core.pet.WalkPetModel;
       
      
      public function PetWalkController()
      {
         super();
      }
      
      public static function showWalkPet(param1:uint, param2:Array) : void
      {
         model = new com.robot.core.pet.WalkPetModel();
         model.show(param1,param2);
      }
      
      public static function hideWalkPet() : void
      {
         if(model)
         {
            model.destroy();
         }
      }
      
      public static function walkPetStop() : void
      {
         if(model)
         {
            model.stopWalk();
         }
      }
   }
}
