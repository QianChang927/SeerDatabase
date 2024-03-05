package com.robot.app.control
{
   import com.robot.core.manager.SOManager;
   import flash.display.MovieClip;
   import flash.net.SharedObject;
   
   public class SGZSYRController
   {
      
      public static var icon:MovieClip;
       
      
      public function SGZSYRController()
      {
         super();
      }
      
      public static function setup(param1:MovieClip) : void
      {
         icon = param1;
         var _loc2_:SharedObject = SOManager.getUserSO("sgzsspNum");
      }
   }
}
