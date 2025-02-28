package com.robot.app.mapProcess
{
   import com.robot.app.task.control.TaskController_1867;
   import com.robot.app.task.control.TaskController_739;
   import com.robot.app.task.taskscollection.Task739;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_315 extends BaseMapProcess
   {
       
      
      private var _animationContainer:MovieClip;
      
      private var _map:MapProcess_315;
      
      public function MapProcess_315()
      {
         super();
      }
      
      override protected function init() : void
      {
         this._map = this;
         SocketConnection.send(1022,86053217);
         this.hideAnimationContainerAllChildren();
         getDefinitionByName("com.robot.app2.mapProcess.control.ACallThatSpansThousandsOfYearsController").initMap315(this);
         getDefinitionByName("com.robot.app2.mapProcess.control.ACallThatSpansThousandsOfYearsController").updateData().then(function(param1:Array):void
         {
            var _loc3_:uint = 0;
            var _loc2_:int = int(getDefinitionByName("com.robot.app.task.petstory.util.KTool").subByte(param1[0],0,8));
            if(_loc2_ == 0 || _loc2_ == 10)
            {
               _loc3_ = uint(TasksManager.getTaskStatus(TaskController_739.TASK_ID));
               Task739.initTaskForMap315(_map);
               _animationContainer = conLevel["spt" + String(TaskController_1867.SPT_TASK_ID)] as MovieClip;
               if(_loc3_ != TasksManager.ALR_ACCEPT)
               {
                  _loc3_ = uint(TasksManager.getTaskStatus(TaskController_1867.TASK_ID));
                  TaskController_1867.init(_map);
                  if(_loc3_ == TasksManager.UN_ACCEPT)
                  {
                     TaskController_1867.start();
                  }
                  else if(_loc3_ == TasksManager.ALR_ACCEPT)
                  {
                     TaskController_1867.startPro();
                  }
                  else
                  {
                     TaskController_1867.staticScene();
                  }
               }
            }
         });
      }
      
      override public function destroy() : void
      {
         this.hideAnimationContainerAllChildren();
         Task739.destroy();
         getDefinitionByName("com.robot.app2.mapProcess.control.ACallThatSpansThousandsOfYearsController").destroyMap315();
         this._map = null;
         super.destroy();
      }
      
      public function hideAnimationContainerAllChildren() : void
      {
         var _loc1_:int = 0;
         if(this._animationContainer != null)
         {
            _loc1_ = 0;
            while(_loc1_ < this._animationContainer.numChildren)
            {
               this._animationContainer.getChildAt(_loc1_).visible = false;
               MovieClip(this._animationContainer.getChildAt(_loc1_)).gotoAndStop(1);
               _loc1_++;
            }
         }
      }
   }
}
