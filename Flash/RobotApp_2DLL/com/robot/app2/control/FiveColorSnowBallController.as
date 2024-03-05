package com.robot.app2.control
{
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.PetManager;
   
   public class FiveColorSnowBallController
   {
      
      private static var _instance:com.robot.app2.control.FiveColorSnowBallController;
       
      
      private var petIdList:Array;
      
      public function FiveColorSnowBallController(param1:PrivateClass)
      {
         this.petIdList = [[1020,1021],[1032,1033],[1034,1035],[1036,1037],[1038,1039],[1040,1041]];
         super();
      }
      
      public static function getInstance() : com.robot.app2.control.FiveColorSnowBallController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app2.control.FiveColorSnowBallController(new PrivateClass());
         }
         return _instance;
      }
      
      public function isFollow() : Boolean
      {
         var _loc4_:PetInfo = null;
         var _loc6_:uint = 0;
         var _loc1_:Array = [false,false,false,false,false];
         var _loc2_:Boolean = false;
         var _loc3_:Array = PetManager.infos;
         var _loc5_:uint = 0;
         while(_loc5_ < _loc3_.length)
         {
            _loc4_ = _loc3_[_loc5_];
            _loc6_ = 0;
            while(_loc6_ < this.petIdList.length)
            {
               if((this.petIdList[_loc6_] as Array).indexOf(_loc4_.id) != -1)
               {
                  _loc1_[_loc6_] = true;
               }
               _loc6_++;
            }
            _loc5_++;
         }
         if(_loc1_.indexOf(false) == -1)
         {
            _loc2_ = true;
         }
         else
         {
            _loc2_ = false;
         }
         return _loc2_;
      }
   }
}

class PrivateClass
{
    
   
   public function PrivateClass()
   {
      super();
   }
}
