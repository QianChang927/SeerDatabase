package com.robot.app2.control
{
   import com.robot.core.info.pet.PetShowInfo;
   import com.robot.core.manager.MainManager;
   
   public class RenaultAllGetController
   {
      
      private static var _isFlollow:Boolean;
       
      
      public function RenaultAllGetController()
      {
         super();
      }
      
      public static function petFollow(param1:uint) : void
      {
         var _loc2_:PetShowInfo = new PetShowInfo();
         _loc2_.petID = param1;
         MainManager.actorModel.showPet(_loc2_);
         _isFlollow = true;
      }
      
      public static function get isFlollow() : Boolean
      {
         return _isFlollow;
      }
      
      public static function set isFlollow(param1:Boolean) : void
      {
         _isFlollow = param1;
      }
   }
}
