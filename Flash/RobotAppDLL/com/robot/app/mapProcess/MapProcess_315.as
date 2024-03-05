package com.robot.app.mapProcess
{
   import com.robot.app.task.control.TaskController_1867;
   import com.robot.app.task.control.TaskController_739;
   import com.robot.app.task.taskscollection.Task739;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   
   public class MapProcess_315 extends BaseMapProcess
   {
       
      
      private var _animationContainer:MovieClip;
      
      public function MapProcess_315()
      {
         super();
      }
      
      override protected function init() : void
      {
         SocketConnection.send(1022,86053217);
         var _loc1_:uint = uint(TasksManager.getTaskStatus(TaskController_739.TASK_ID));
         Task739.initTaskForMap315(this);
         this._animationContainer = conLevel["spt" + String(TaskController_1867.SPT_TASK_ID)] as MovieClip;
         this.hideAnimationContainerAllChildren();
         if(_loc1_ != TasksManager.ALR_ACCEPT)
         {
            _loc1_ = uint(TasksManager.getTaskStatus(TaskController_1867.TASK_ID));
            TaskController_1867.init(this);
            if(_loc1_ == TasksManager.UN_ACCEPT)
            {
               TaskController_1867.start();
            }
            else if(_loc1_ == TasksManager.ALR_ACCEPT)
            {
               TaskController_1867.startPro();
            }
            else
            {
               TaskController_1867.staticScene();
            }
         }
      }
      
      override public function destroy() : void
      {
         this.hideAnimationContainerAllChildren();
         Task739.destroy();
         super.destroy();
      }
      
      public function hideAnimationContainerAllChildren() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < this._animationContainer.numChildren)
         {
            this._animationContainer.getChildAt(_loc1_).visible = false;
            MovieClip(this._animationContainer.getChildAt(_loc1_)).gotoAndStop(1);
            _loc1_++;
         }
      }
   }
}
