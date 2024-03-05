package com.robot.app.im
{
   import com.robot.app.team.TeamController;
   import com.robot.core.manager.ChatManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.ui.alert.Alarm;
   
   public class TeamChatController
   {
      
      private static var _panel:AppModel;
      
      public static var isOpen:Boolean = false;
       
      
      public function TeamChatController()
      {
         super();
      }
      
      public static function show() : void
      {
         if(_panel == null)
         {
            if(MainManager.actorInfo.teamInfo.id < 50000)
            {
               Alarm.show("战队不存在!");
               return;
            }
         }
         ChatManager.getinstance().showChatPanelToTab(3);
         isOpen = true;
         TeamController.hideInfoTip();
      }
   }
}
