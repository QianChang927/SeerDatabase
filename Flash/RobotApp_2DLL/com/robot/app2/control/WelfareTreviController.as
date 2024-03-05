package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.SystemTimerManager;
   import flash.display.MovieClip;
   import flash.utils.clearInterval;
   import flash.utils.setInterval;
   
   public class WelfareTreviController
   {
      
      private static var _intervalID:uint;
      
      private static var _icon:MovieClip;
       
      
      public function WelfareTreviController()
      {
         super();
      }
      
      public static function initIcon(param1:MovieClip) : void
      {
         _icon = param1;
         _intervalID = setInterval(getChanceNum,60000 * 2);
         getChanceNum();
      }
      
      public static function getChanceNum() : void
      {
         KTool.getMultiValue([15106,5205,5206],function(param1:Array):void
         {
            var _loc2_:int = 3 - int(param1[0]);
            var _loc3_:int = 10 * 60 - (SystemTimerManager.sysBJDate.time / 1000 - param1[1]);
            if(_loc3_ < 0 && Boolean(param1[2]))
            {
               _icon.gotoAndStop(2);
            }
            else if(_loc2_ <= 0)
            {
               clearInterval(_intervalID);
               _icon.gotoAndStop(1);
            }
            else
            {
               _icon.gotoAndStop(1);
            }
         });
      }
   }
}
