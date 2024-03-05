package com.robot.app.mapProcess.control
{
   import com.robot.core.CommandID;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alert;
   import org.taomee.events.SocketEvent;
   
   public class KhoriumBoxController
   {
      
      private static const TASK_ID:uint = 966;
       
      
      public function KhoriumBoxController()
      {
         super();
      }
      
      public static function setup() : void
      {
         if(TasksManager.getTaskStatus(TASK_ID) != TasksManager.COMPLETE)
         {
            SocketConnection.addCmdListener(CommandID.KHORIUM_GUIDE,showGuide);
         }
      }
      
      private static function showGuide(param1:SocketEvent) : void
      {
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.KHORIUM_GUIDE,showGuide);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function():void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            Alert.show("你获得了1个氪金宝箱，赶紧前往瞭望露台开锁吧！有机会获得钻石道具噢！确认现在就去吗？",function():void
            {
               TasksManager.accept(TASK_ID,function():void
               {
                  TasksManager.complete(TASK_ID,0,function():void
                  {
                     MapManager.changeMap(103);
                  });
               });
            },function():void
            {
               TasksManager.accept(TASK_ID,function():void
               {
                  TasksManager.complete(TASK_ID,0,function():void
                  {
                  });
               });
            });
         });
      }
   }
}
