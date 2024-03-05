package com.robot.app.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.AppModel;
   
   public class SpriteFusionController
   {
      
      private static var _panel:AppModel;
       
      
      public function SpriteFusionController()
      {
         super();
      }
      
      public static function show() : void
      {
         var showPanel:Function = function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("SpriteFusionPanel"));
         };
         if(BufferRecordManager.getState(MainManager.actorInfo,299))
         {
            showPanel();
         }
         else
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("SpriteFusionGuideMC"),function():void
            {
               BufferRecordManager.setState(MainManager.actorInfo,299,true,function():void
               {
                  showPanel();
               });
            });
         }
      }
   }
}
