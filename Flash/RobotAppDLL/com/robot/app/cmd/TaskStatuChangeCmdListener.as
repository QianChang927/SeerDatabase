package com.robot.app.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   
   public class TaskStatuChangeCmdListener extends BaseBean
   {
       
      
      public function TaskStatuChangeCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.TASK_STATU_CHANGE,this.onTaskStatuChange);
         finish();
      }
      
      private function onTaskStatuChange(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:int = int(_loc2_.readUnsignedInt());
         var _loc4_:int = int(_loc2_.readUnsignedInt());
         TasksManager.setTaskStatus(_loc3_,_loc4_);
      }
   }
}
