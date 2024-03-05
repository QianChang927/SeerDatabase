package com.robot.app.mapProcess
{
   import com.robot.app.control.FreeHaYeKeController;
   import com.robot.app.task.taskscollection.Task561;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.ActorModel;
   import com.robot.core.net.SocketConnection;
   
   public class MapProcess_461 extends BaseMapProcess
   {
       
      
      private var model:ActorModel;
      
      public function MapProcess_461()
      {
         super();
      }
      
      override protected function init() : void
      {
         Task561.initTask_461(this);
         ToolBarController.showOrHideAllUser(false);
         FreeHaYeKeController.getInstance().start();
         SocketConnection.send(1022,86061850);
      }
      
      override public function destroy() : void
      {
         ToolBarController.showOrHideAllUser(true);
         Task561.destory();
      }
   }
}
