package com.robot.app.control
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   
   public class NewSemesterLoginGiftController
   {
      
      public static var isBackSeer:Boolean;
       
      
      public function NewSemesterLoginGiftController()
      {
         super();
      }
      
      public static function setup() : void
      {
         if(NewSeerTaskController.isNewSeer)
         {
            return;
         }
         SocketConnection.addCmdListener(CommandID.SEER_BROTHER_CHECK,onCheckSeerBrother);
         SocketConnection.send(CommandID.SEER_BROTHER_CHECK,0);
      }
      
      private static function onCheckSeerBrother(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.SEER_BROTHER_CHECK,onCheckSeerBrother);
         var _loc2_:ByteArray = param1.data as ByteArray;
         isBackSeer = Boolean(_loc2_.readUnsignedInt());
         if(isBackSeer)
         {
            return;
         }
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,showGiftPanel);
      }
      
      private static function showGiftPanel(param1:MapEvent) : void
      {
         var t:uint = 0;
         var e:MapEvent = param1;
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,showGiftPanel);
         if(TasksManager.getTaskStatus(478) == TasksManager.COMPLETE)
         {
            return;
         }
         t = setTimeout(function():void
         {
            clearTimeout(t);
            TasksManager.accept(478,function():void
            {
               TasksManager.complete(478,0,null);
               ModuleManager.showModule(ClientConfig.getAppModule("NewSemesterLoginGift"),"正在加载...");
            });
         },2000);
      }
   }
}
