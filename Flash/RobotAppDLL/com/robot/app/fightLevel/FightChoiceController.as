package com.robot.app.fightLevel
{
   public class FightChoiceController
   {
      
      private static var panel:com.robot.app.fightLevel.FightChoicePanel;
       
      
      public function FightChoiceController()
      {
         super();
      }
      
      private static function get getPanel() : com.robot.app.fightLevel.FightChoicePanel
      {
         if(!panel)
         {
            panel = new com.robot.app.fightLevel.FightChoicePanel();
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
