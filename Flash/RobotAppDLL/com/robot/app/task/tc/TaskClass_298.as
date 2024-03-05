package com.robot.app.task.tc
{
   import com.robot.core.info.task.novice.NoviceFinishInfo;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.ItemInBagAlert;
   
   public class TaskClass_298
   {
       
      
      public function TaskClass_298(param1:NoviceFinishInfo)
      {
         var i:NoviceFinishInfo = param1;
         super();
         ItemInBagAlert.show(400658,"一个谱尼真身的裂片已放入了你的储存箱。",function():void
         {
            if(TasksManager.getTaskStatus(517) == TasksManager.UN_ACCEPT)
            {
               TasksManager.accept(517,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     TasksManager.setTaskStatus(517,TasksManager.ALR_ACCEPT);
                     TasksManager.complete(517,0);
                  }
                  else
                  {
                     Alarm.show("接受任务失败，请稍后再试！");
                  }
               });
            }
         });
      }
   }
}
