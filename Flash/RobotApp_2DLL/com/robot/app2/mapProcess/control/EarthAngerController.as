package com.robot.app2.mapProcess.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   
   public class EarthAngerController
   {
      
      private static const PRE_TASK_ID:int = 1559;
      
      public static var isDialogOn:Boolean = false;
       
      
      public function EarthAngerController()
      {
         super();
      }
      
      public static function initEquip() : void
      {
         checkPreTask();
      }
      
      private static function checkPreTask() : void
      {
         if(isTaskDone)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("earthAnger/EarthAngerMainPanel"));
         }
         else
         {
            startPreTask(function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("earthAnger/EarthAngerMainPanel"));
            });
         }
      }
      
      private static function completePreTask(param1:Function = null) : void
      {
         var cb:Function = param1;
         TasksManager.accept(PRE_TASK_ID,function():void
         {
            TasksManager.complete(PRE_TASK_ID,0,function():void
            {
               if(null != cb)
               {
                  cb();
               }
            });
         });
      }
      
      public static function startPreTask(param1:Function = null) : void
      {
         var cb:Function = param1;
         CartoonManager.play(ClientConfig.getFullMovie("cartoon/earth_anger_cartoon"),function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("earth_anger_full"),function():void
            {
               if(isTaskDone)
               {
                  if(null != cb)
                  {
                     cb();
                  }
               }
               else
               {
                  completePreTask(cb);
               }
            },true);
         });
      }
      
      private static function get isTaskDone() : Boolean
      {
         return TasksManager.getTaskStatus(PRE_TASK_ID) == TasksManager.COMPLETE;
      }
   }
}
