package com.robot.app.mapProcess
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.taskscollection.Task565;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_55 extends BaseMapProcess
   {
       
      
      public function MapProcess_55()
      {
         super();
      }
      
      override protected function init() : void
      {
         Task565.initTask_1(this);
      }
      
      override public function destroy() : void
      {
         Task565.destory();
         OgreController.isShow = true;
         MainManager.actorModel.visible = true;
      }
   }
}
