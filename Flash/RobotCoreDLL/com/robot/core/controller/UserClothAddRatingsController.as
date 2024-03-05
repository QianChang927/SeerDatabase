package com.robot.core.controller
{
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.manager.MainManager;
   
   public class UserClothAddRatingsController
   {
       
      
      public function UserClothAddRatingsController()
      {
         super();
      }
      
      public static function getUserClothAdd() : void
      {
         var _loc1_:Array = MainManager.actorInfo.clothes;
         var _loc2_:Array = MainManager.actorInfo.clothIDs;
         ItemXMLInfo.getSpeed(_loc2_);
         MainManager.DefSpeed;
      }
      
      public static function getSpeedStar() : int
      {
         var _loc1_:Array = MainManager.actorInfo.clothIDs;
         var _loc2_:Number = ItemXMLInfo.getSpeed(_loc1_);
         if(_loc2_ >= 0 && _loc2_ <= 4)
         {
            return 1;
         }
         if(_loc2_ > 4 && _loc2_ <= 5)
         {
            return 2;
         }
         if(_loc2_ > 5 && _loc2_ <= 7)
         {
            return 3;
         }
         if(_loc2_ > 7 && _loc2_ <= 7.5)
         {
            return 4;
         }
         if(_loc2_ > 7.5)
         {
            return 5;
         }
         return 0;
      }
      
      public static function getPkAtkStar() : int
      {
         var _loc1_:Array = MainManager.actorInfo.clothIDs;
         var _loc2_:Number = ItemXMLInfo.getPkAtk(_loc1_);
         if(_loc2_ >= 0 && _loc2_ <= 5)
         {
            return 1;
         }
         if(_loc2_ > 5 && _loc2_ <= 50)
         {
            return 2;
         }
         if(_loc2_ > 50 && _loc2_ <= 95)
         {
            return 3;
         }
         if(_loc2_ > 95 && _loc2_ <= 130)
         {
            return 4;
         }
         if(_loc2_ > 130)
         {
            return 5;
         }
         return 0;
      }
      
      public static function getPkHpStar() : int
      {
         var _loc1_:Array = MainManager.actorInfo.clothIDs;
         var _loc2_:Number = ItemXMLInfo.getPkHp(_loc1_);
         if(_loc2_ >= 0 && _loc2_ <= 60)
         {
            return 1;
         }
         if(_loc2_ > 60 && _loc2_ <= 160)
         {
            return 2;
         }
         if(_loc2_ > 160 && _loc2_ <= 260)
         {
            return 3;
         }
         if(_loc2_ > 260 && _loc2_ <= 320)
         {
            return 4;
         }
         if(_loc2_ > 320)
         {
            return 5;
         }
         return 0;
      }
      
      public static function getPkFireRangeStar() : int
      {
         var _loc1_:Array = MainManager.actorInfo.clothIDs;
         var _loc2_:Number = ItemXMLInfo.getPkPkFireRange(_loc1_);
         if(_loc2_ >= 0 && _loc2_ <= 200)
         {
            return 1;
         }
         if(_loc2_ > 200 && _loc2_ <= 300)
         {
            return 2;
         }
         if(_loc2_ > 300 && _loc2_ <= 350)
         {
            return 3;
         }
         if(_loc2_ > 350 && _loc2_ <= 450)
         {
            return 4;
         }
         if(_loc2_ > 450)
         {
            return 5;
         }
         return 0;
      }
   }
}
