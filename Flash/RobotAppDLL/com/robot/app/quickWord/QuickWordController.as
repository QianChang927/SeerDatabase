package com.robot.app.quickWord
{
   public class QuickWordController
   {
      
      private static var _quickWord:com.robot.app.quickWord.QuickWord;
       
      
      public function QuickWordController()
      {
         super();
      }
      
      public static function get quickWord() : com.robot.app.quickWord.QuickWord
      {
         if(_quickWord == null)
         {
            _quickWord = new com.robot.app.quickWord.QuickWord();
         }
         return _quickWord;
      }
      
      public static function show() : void
      {
         quickWord.show();
      }
   }
}
