package com.robot.app.freshFightLevel
{
   public class FightChoiceController
   {
      
      private static var panel:com.robot.app.freshFightLevel.FightChoicePanel;
       
      
      public function FightChoiceController()
      {
         super();
      }
      
      private static function get getPanel() : com.robot.app.freshFightLevel.FightChoicePanel
      {
         if(!panel)
         {
            panel = new com.robot.app.freshFightLevel.FightChoicePanel();
         }
         return panel;
      }
      
      public static function show() : void
      {
         getPanel.show();
      }
      
      public static function hide() : void
      {
         getPanel.destroy();
      }
   }
}
