package com.robot.app.mapProcess.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   
   public class MakeBeltController
   {
       
      
      public function MakeBeltController()
      {
         super();
      }
      
      public static function setup() : void
      {
         SocketConnection.send(1022,86052640);
         if(!BufferRecordManager.getState(MainManager.actorInfo,463))
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("make_belt"),function():void
            {
               BufferRecordManager.setState(MainManager.actorInfo,463,true);
               ModuleManager.showModule(ClientConfig.getAppModule("makeBelt/MakeBeltPanel"));
            },false);
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("makeBelt/MakeBeltPanel"));
         }
      }
   }
}
