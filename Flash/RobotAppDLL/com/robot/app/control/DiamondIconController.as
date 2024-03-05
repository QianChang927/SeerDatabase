package com.robot.app.control
{
   import com.robot.app.task.petstory.util.KTool;
   import flash.display.MovieClip;
   
   public class DiamondIconController
   {
      
      public static var icon:MovieClip;
       
      
      public function DiamondIconController()
      {
         super();
      }
      
      public static function setup(param1:MovieClip) : void
      {
      }
      
      private static function updateView() : void
      {
         var isGetAll:Boolean = false;
         var bitInt:int = 0;
         isGetAll = true;
         KTool.getMultiValue([6085,6086],function(param1:Array):void
         {
            bitInt = param1[1];
            var _loc2_:int = 0;
            while(_loc2_ < 4)
            {
               if(!KTool.getBit(bitInt,_loc2_ + 1))
               {
                  isGetAll = false;
                  break;
               }
               _loc2_++;
            }
            if(isGetAll)
            {
               icon.gotoAndStop(5);
            }
         });
      }
   }
}
