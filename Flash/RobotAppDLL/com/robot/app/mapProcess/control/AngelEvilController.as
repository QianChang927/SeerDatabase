package com.robot.app.mapProcess.control
{
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.manager.PetManager;
   
   public class AngelEvilController
   {
      
      private static var _allHave:Boolean;
       
      
      public function AngelEvilController()
      {
         super();
      }
      
      public static function bagState() : void
      {
         initBagPet(PetManager.getBagMap().concat());
      }
      
      private static function initBagPet(param1:Array) : void
      {
         var _loc3_:Boolean = false;
         var _loc4_:Boolean = false;
         var _loc6_:PetListInfo = null;
         var _loc2_:Array = param1;
         var _loc5_:uint = 0;
         while(_loc5_ < _loc2_.length)
         {
            if((_loc6_ = _loc2_[_loc5_] as PetListInfo).id == 1287 || _loc6_.id == 1288)
            {
               _loc4_ = true;
            }
            if(_loc6_.id == 1289 || _loc6_.id == 1290)
            {
               _loc3_ = true;
            }
            _loc5_++;
         }
         if(_loc4_ && _loc3_)
         {
            _allHave = true;
         }
      }
      
      public static function get allHave() : Boolean
      {
         bagState();
         return _allHave;
      }
   }
}
