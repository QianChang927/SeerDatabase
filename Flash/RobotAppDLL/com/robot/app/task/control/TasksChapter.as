package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.ITask;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.MapProcessConfig;
   
   public class TasksChapter
   {
       
      
      public var id:int;
      
      public var name:String;
      
      public var tasks:Array;
      
      public function TasksChapter()
      {
         this.tasks = [];
         super();
      }
      
      public function get currentTask() : ITask
      {
         var _loc1_:ITask = null;
         var _loc2_:ITask = null;
         for each(_loc2_ in this.tasks)
         {
            if(TasksManager.getTaskStatus(_loc2_.id) != TasksManager.COMPLETE)
            {
               if(_loc1_ == null)
               {
                  _loc1_ = _loc2_;
               }
               else if(_loc2_.priority < _loc1_.priority)
               {
                  _loc1_ = _loc2_;
               }
            }
         }
         return _loc1_;
      }
      
      public function process() : void
      {
         var _loc2_:ITask = null;
         var _loc1_:ITask = this.currentTask;
         for each(_loc2_ in this.tasks)
         {
            if(_loc2_ != _loc1_)
            {
               _loc2_.hideInMap(MapProcessConfig.currentProcessInstance);
            }
            else
            {
               _loc1_.initForMap(MapProcessConfig.currentProcessInstance);
            }
         }
      }
   }
}
