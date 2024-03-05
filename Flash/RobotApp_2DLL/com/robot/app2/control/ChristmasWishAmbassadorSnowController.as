package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   
   public class ChristmasWishAmbassadorSnowController
   {
       
      
      public function ChristmasWishAmbassadorSnowController()
      {
         super();
      }
      
      public static function setUp() : void
      {
         KTool.getMultiValue([2664],function(param1:Array):void
         {
            if(param1[0] == 7)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("ChristmasWishAmbassadorSnowRegistrationPanel"),"正在打开....");
            }
            else
            {
               ModuleManager.showModule(ClientConfig.getAppModule("ChristmasWishAmbassadorSnowMainPanel"),"正在打开....");
            }
         });
      }
   }
}
