package com.robot.app.magicPassword
{
   public class MagicPasswordController
   {
      
      private static var magicPanel:com.robot.app.magicPassword.MagicPasswordPanel;
       
      
      public function MagicPasswordController()
      {
         super();
      }
      
      public static function get getPanel() : com.robot.app.magicPassword.MagicPasswordPanel
      {
         if(!magicPanel)
         {
            magicPanel = new com.robot.app.magicPassword.MagicPasswordPanel();
         }
         return magicPanel;
      }
      
      public static function show() : void
      {
         getPanel.show();
      }
   }
}
