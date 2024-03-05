package com.robot.app2.control
{
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   
   public class WinterEquipController
   {
       
      
      public function WinterEquipController()
      {
         super();
      }
      
      public static function checkSuit(param1:Array) : Boolean
      {
         var _loc3_:int = 0;
         var _loc2_:Boolean = true;
         _loc3_ = 0;
         while(_loc3_ < param1.length)
         {
            if(MainManager.actorInfo.clothes.indexOf(param1[_loc3_]) >= 0)
            {
               return true;
            }
            if(ItemManager.getClothInfo(param1[_loc3_]) != null)
            {
               return true;
            }
            _loc3_++;
         }
         return false;
      }
   }
}
