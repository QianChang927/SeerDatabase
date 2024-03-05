package com.robot.app2.control
{
   public class TheChefsSecretRecipeControl
   {
      
      public static var _rawStateData:int = 0;
      
      public static var _mainIndex:int = 1;
       
      
      public function TheChefsSecretRecipeControl()
      {
         super();
      }
      
      public static function set rawStateData(param1:int) : *
      {
         _rawStateData = param1;
      }
      
      public static function get rawStateData() : int
      {
         return _rawStateData;
      }
      
      public static function set mainIndex(param1:int) : *
      {
         _mainIndex = param1;
      }
      
      public static function get mainIndex() : int
      {
         return _mainIndex;
      }
   }
}
