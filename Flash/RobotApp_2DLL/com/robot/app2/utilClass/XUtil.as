package com.robot.app2.utilClass
{
   import flash.display.DisplayObject;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.filters.ColorMatrixFilter;
   
   public class XUtil
   {
      
      private static const RED:Number = 0.3086;
      
      private static const GREEN:Number = 0.6094;
      
      private static const BLUE:Number = 0.082;
       
      
      public function XUtil()
      {
         super();
      }
      
      public static function clamp(param1:Number, param2:Number, param3:Number) : Number
      {
         return Math.min(Math.max(param1,param2),param3);
      }
      
      public static function cancelDisplayObjFilter(param1:DisplayObject) : void
      {
         if(param1)
         {
            param1.filters = null;
         }
      }
      
      public static function setDisplayObjGrayscale(param1:DisplayObject) : void
      {
         if(param1)
         {
            param1.filters = [setGrayscale()];
         }
      }
      
      public static function setGrayscale() : ColorMatrixFilter
      {
         return new ColorMatrixFilter([RED,GREEN,BLUE,0,0,RED,GREEN,BLUE,0,0,RED,GREEN,BLUE,0,0,0,0,0,1,0]);
      }
      
      private static function cleanValue(param1:Number, param2:Number) : Number
      {
         return Math.min(param2,Math.max(-param2,param1));
      }
      
      public static function setSaturation(param1:Number) : ColorMatrixFilter
      {
         param1 = cleanValue(param1,100);
         if(param1 == 0 || isNaN(param1))
         {
            return null;
         }
         var _loc2_:Number = 1 + (param1 > 0 ? 3 * param1 / 100 : param1 / 100);
         return new ColorMatrixFilter([RED * (1 - _loc2_) + _loc2_,GREEN * (1 - _loc2_),BLUE * (1 - _loc2_),0,0,RED * (1 - _loc2_),GREEN * (1 - _loc2_) + _loc2_,BLUE * (1 - _loc2_),0,0,RED * (1 - _loc2_),GREEN * (1 - _loc2_),BLUE * (1 - _loc2_) + _loc2_,0,0,0,0,0,1,0,0,0,0,0,1]);
      }
      
      public static function enableButton(param1:SimpleButton, param2:Boolean) : void
      {
         param1.filters = param2 ? null : [setSaturation(-100)];
         param1.mouseEnabled = param2;
         param1.enabled = param2;
      }
      
      public static function enableInteractiveObject(param1:Sprite, param2:Boolean) : void
      {
         param1.mouseEnabled = param2;
         param1.mouseChildren = param2;
      }
   }
}
