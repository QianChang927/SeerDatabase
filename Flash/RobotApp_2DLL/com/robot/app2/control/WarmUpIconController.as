package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import flash.display.MovieClip;
   
   public class WarmUpIconController
   {
      
      private static var _icon:MovieClip;
       
      
      public function WarmUpIconController()
      {
         super();
      }
      
      public static function onWarmUpIcon(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         if(icon != null)
         {
            _icon = icon;
         }
         KTool.getMultiValue([15599],function(param1:Array):void
         {
            if(_icon != null)
            {
               if(param1[0] > 0)
               {
                  _icon.flag.visible = false;
               }
               else
               {
                  _icon.flag.visible = true;
               }
            }
         });
      }
   }
}
