package com.robot.app2.control.activityHelper.actions
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.PlayTask;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.manager.MainManager;
   
   public class PlayTalksAction extends BaseAction
   {
       
      
      private var playTask:PlayTask;
      
      public function PlayTalksAction(param1:*)
      {
         super(param1);
      }
      
      override public function doAction(param1:* = null) : Promise
      {
         var deferred:Deferred = null;
         var temp:Array = null;
         var taskMod:TaskMod = null;
         var args:* = param1;
         deferred = new Deferred();
         var storyArr:Array = new Array();
         var shownewDialogPath:Boolean = _data["path"] != null && _data["path"] == 1;
         var i:int = 1;
         while(i <= _data["value"].length)
         {
            temp = _data["value"][i - 1];
            if(temp[1] is String)
            {
               temp[1] = temp[1].replace("$nick$",MainManager.actorInfo.nick);
            }
            taskMod = new TaskMod(TaskDiaLogManager.DIALOG,temp[0],[temp[1]],temp[2] != null && temp[2] != "" ? (temp[2] is Array ? temp[2] : [temp[2]]) : null);
            taskMod.isNewDialog_1 = true;
            if(shownewDialogPath)
            {
               taskMod.isNewDialog_1 = false;
               taskMod.useNewHeadPath = true;
            }
            storyArr.push(taskMod);
            i++;
         }
         this.playTask = new PlayTask();
         this.playTask.addStory(storyArr);
         this.playTask.playStory(function():void
         {
            deferred.resolve(null);
         });
         return deferred.promise;
      }
   }
}
