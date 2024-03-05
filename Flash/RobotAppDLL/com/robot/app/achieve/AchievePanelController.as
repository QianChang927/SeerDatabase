package com.robot.app.achieve
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.manager.ModuleManager;
   
   public class AchievePanelController
   {
      
      public static var infoList:Array = [];
      
      public static var openList:Array = [];
       
      
      public function AchievePanelController()
      {
         super();
      }
      
      public static function showNew() : void
      {
         if(NewSeerTaskController.isNewSeer)
         {
            return;
         }
         ModuleManager.showModule(ClientConfig.getAppModule("AchievePanel_2013"),"正在打开...");
      }
      
      public static function getObjectByBranchID(param1:uint) : Object
      {
         var _loc2_:Object = null;
         for each(_loc2_ in infoList)
         {
            if(_loc2_["branchID"] == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
   }
}
