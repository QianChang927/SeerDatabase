package com.robot.core.pet
{
   import com.robot.core.manager.UIManager;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.geom.Point;
   
   public class PetGenderIconManager
   {
       
      
      public function PetGenderIconManager()
      {
         super();
      }
      
      public static function addIcon(param1:DisplayObjectContainer, param2:Point, param3:uint) : void
      {
         var _loc5_:MovieClip = null;
         var _loc4_:MovieClip = UIManager.getMovieClip("PetGenderIcon");
         if(param1)
         {
            if(_loc5_ = param1.getChildByName("PetGenderIcon") as MovieClip)
            {
               param1.removeChild(_loc5_);
            }
            param1.addChild(_loc4_);
            _loc4_.x = param2.x;
            _loc4_.y = param2.y;
            _loc4_.gotoAndStop(param3 + 1);
            _loc4_.name = "PetGenderIcon";
         }
      }
      
      public static function hideIcon(param1:DisplayObjectContainer) : void
      {
         var _loc2_:MovieClip = null;
         if(param1)
         {
            _loc2_ = param1.getChildByName("PetGenderIcon") as MovieClip;
            if(_loc2_)
            {
               param1.removeChild(_loc2_);
            }
         }
      }
   }
}
