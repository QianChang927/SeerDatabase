package com.robot.app.control
{
   import com.robot.core.manager.LevelManager;
   import flash.display.Bitmap;
   import flash.display.DisplayObject;
   import flash.geom.Point;
   import gs.TweenLite;
   import org.taomee.utils.DisplayUtil;
   
   public class PanelHideEffectController
   {
       
      
      public function PanelHideEffectController()
      {
         super();
      }
      
      public static function setup(param1:DisplayObject, param2:Point) : void
      {
         var bitmap:Bitmap = null;
         var scale:Number = NaN;
         var smallWidth:Number = NaN;
         var smallHeight:Number = NaN;
         var ui:DisplayObject = param1;
         var pos:Point = param2;
         bitmap = DisplayUtil.copyDisplayAsBmp(ui,false);
         bitmap.x = ui.x + bitmap.x;
         bitmap.y = ui.y + bitmap.y;
         LevelManager.appLevel.addChild(bitmap);
         if(bitmap.width > bitmap.height)
         {
            scale = 50 / bitmap.width;
         }
         else
         {
            scale = 50 / bitmap.height;
         }
         smallWidth = bitmap.width * scale;
         smallHeight = bitmap.height * scale;
         TweenLite.to(bitmap,0.6,{
            "alpha":0.6,
            "x":pos.x - smallWidth / 2,
            "y":pos.y - smallHeight / 2,
            "scaleX":scale,
            "scaleY":scale,
            "onComplete":function():void
            {
               DisplayUtil.removeForParent(bitmap);
            }
         });
      }
   }
}
