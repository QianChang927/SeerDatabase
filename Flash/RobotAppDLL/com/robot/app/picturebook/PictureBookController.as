package com.robot.app.picturebook
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   
   public class PictureBookController
   {
       
      
      public function PictureBookController()
      {
         super();
      }
      
      public static function show(param1:Array = null) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SeerNewBook1120MainPanel"),"正在打开精灵图鉴");
      }
   }
}
