package com.robot.app.newspaper
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.SaveUserInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   
   public class NewsPaperController
   {
      
      public static var currentPage:uint = 1;
      
      public static var currentVersion:uint;
      
      public static var icon:MovieClip;
      
      private static var index:uint;
      
      public static var isHistoryNews:Boolean;
      
      private static var newTip:MovieClip;
       
      
      public function NewsPaperController()
      {
         super();
      }
      
      public static function setup(param1:MovieClip) : void
      {
         icon = param1;
      }
      
      public static function showNewsPanel(param1:MovieClip = null) : void
      {
         if(index == 0)
         {
            SocketConnection.send(CommandID.TIMENEWS_ICON_CONTROLLER);
         }
         SaveUserInfo.saveNewsSO();
         ModuleManager.showModule(ClientConfig.getAppModule("TimeNew2015Panel"),"正在打开航行日志...",{"version":ClientConfig.newsVersion});
      }
      
      private static function getIsNew() : Boolean
      {
         var _loc1_:Object = SaveUserInfo.getNewsVersion();
         if(_loc1_ && _loc1_.id == MainManager.actorInfo.userID && _loc1_.version == ClientConfig.newsVersion)
         {
            return false;
         }
         return true;
      }
   }
}
