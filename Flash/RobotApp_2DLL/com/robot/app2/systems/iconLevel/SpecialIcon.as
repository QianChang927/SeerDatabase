package com.robot.app2.systems.iconLevel
{
   import flash.display.MovieClip;
   
   public class SpecialIcon
   {
       
      
      public var priority:int;
      
      public var view:MovieClip;
      
      public function SpecialIcon(param1:int, param2:MovieClip)
      {
         super();
         this.priority = param1;
         this.view = param2;
      }
   }
}
