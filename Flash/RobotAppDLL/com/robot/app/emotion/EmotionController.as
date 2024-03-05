package com.robot.app.emotion
{
   public class EmotionController
   {
      
      private static var _e:com.robot.app.emotion.EmotionPanel;
       
      
      public function EmotionController()
      {
         super();
      }
      
      public static function get panel() : com.robot.app.emotion.EmotionPanel
      {
         if(_e == null)
         {
            _e = new com.robot.app.emotion.EmotionPanel();
         }
         return _e;
      }
      
      public static function show() : void
      {
         panel.show();
      }
      
      public static function hide() : void
      {
         panel.hide();
      }
   }
}
