package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import flash.events.MouseEvent;
   
   public class MoonRabbitController
   {
      
      public static const TASK_ID:uint = 1646;
       
      
      public function MoonRabbitController()
      {
         super();
      }
      
      public static function inits() : void
      {
         TasksManager.accept(TASK_ID,function():void
         {
            currentMap.controlLevel["yuetuMC"].visible = false;
            currentMap.btnLevel["yuetuBtn"].addEventListener(MouseEvent.CLICK,openActivity);
         });
      }
      
      private static function openActivity(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         SocketConnection.send(1022,86060488);
         if(TasksManager.getTaskStatus(TASK_ID) == 3)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("MoonRabbitMainPanel"));
            SocketConnection.send(1022,86060489);
         }
         else
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_YueTu_1"),function():void
            {
               currentMap.controlLevel["yuetuMC"].visible = true;
               currentMap.btnLevel["yuetuBtn"].visible = false;
               KTool.hideMapAllPlayerAndMonster();
               AnimateManager.playMcAnimate(currentMap.controlLevel["yuetuMC"],1,"",function():void
               {
                  TasksManager.complete(TASK_ID,1,function(param1:*):void
                  {
                     KTool.showMapAllPlayerAndMonster();
                     currentMap.btnLevel["yuetuBtn"].visible = true;
                     currentMap.controlLevel["yuetuMC"].visible = false;
                     currentMap.btnLevel["yuetuBtn"].addEventListener(MouseEvent.CLICK,openActivity);
                     ModuleManager.showModule(ClientConfig.getAppModule("MoonRabbitMainPanel"));
                     SocketConnection.send(1022,86060489);
                  });
               });
            },true);
         }
      }
      
      private static function get currentMap() : MapModel
      {
         return MapManager.currentMap;
      }
      
      public static function setup() : void
      {
      }
   }
}
