package com.robot.app.cmd
{
   import com.robot.app.panel.NewSeerGuidePanel;
   import com.robot.core.CommandID;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.task.novice.NoviceFinishInfo;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.Utils;
   
   public class TaskCmdListener extends BaseBean
   {
       
      
      public function TaskCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.COMPLETE_TASK,this.onComplete);
         SocketConnection.addCmdListener(CommandID.COMPLETE_DAILY_TASK,this.onComplete);
         finish();
      }
      
      private function onComplete(param1:SocketEvent) : void
      {
         var _loc4_:Class = null;
         var _loc2_:NoviceFinishInfo = param1.data as NoviceFinishInfo;
         TasksManager.setTaskStatus(_loc2_.taskID,TasksManager.COMPLETE);
         EventManager.dispatchEvent(new DynamicEvent(RobotEvent.DAILY_TASK_COMPLETE,_loc2_.taskID));
         var _loc3_:Class = Utils.getClass(TasksManager.getClassPath(_loc2_.taskID.toString()));
         if(_loc3_)
         {
            new _loc3_(_loc2_);
         }
         else if(_loc4_ = Utils.getClass(TasksManager.CLASS_PATH + ".TaskClass"))
         {
            new _loc4_(_loc2_);
         }
         if(_loc2_.taskID != 1157)
         {
            NewSeerGuidePanel.update();
         }
      }
   }
}
