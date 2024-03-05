package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.iconLevel.IconController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import flash.display.MovieClip;
   
   public class NewAndReturnIconController
   {
      
      private static const FOREVER_USER_TYPE:uint = 4257;
      
      private static const TIPS:Array = ["并肩战斗","勇气嘉奖","无畏嘉奖"];
       
      
      public function NewAndReturnIconController()
      {
         super();
      }
      
      public static function initIcon(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         KTool.getForeverNum(FOREVER_USER_TYPE,function(param1:uint):void
         {
            icon.gotoAndStop(param1 + 1);
            IconController.changeIconTips("new_and_return_icon",TIPS[param1]);
         });
      }
      
      public static function onClickIcon(param1:MovieClip) : void
      {
         switch(param1.currentFrame)
         {
            case 1:
               ModuleManager.showModule(ClientConfig.getAppModule("NewAndReturnActiveUserPanel"));
               break;
            case 2:
               ModuleManager.showModule(ClientConfig.getAppModule("NewAndReturnNewUserPanel1"));
               break;
            case 3:
               ModuleManager.showModule(ClientConfig.getAppModule("NewAndReturnOldUserPanel"));
         }
      }
   }
}
