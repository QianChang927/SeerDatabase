package com.robot.core.manager
{
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.info.pet.PetListInfo;
   
   public class HolyPetManager
   {
      
      public static const HOLY_PET_CLASS:Array = [652,690,834,920];
       
      
      public function HolyPetManager()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc3_:PetListInfo = null;
         var _loc1_:Array = PetManager.getBagMap();
         var _loc2_:int = 0;
         while(_loc2_ < _loc1_.length)
         {
            _loc3_ = _loc1_[_loc2_];
            if(HOLY_PET_CLASS.indexOf(PetXMLInfo.getPetClass(_loc3_.id)) != -1)
            {
               if(!MainManager.actorInfo.isVip)
               {
                  PetManager.bagToInStorage(_loc3_.catchTime);
               }
            }
            _loc2_++;
         }
      }
   }
}
