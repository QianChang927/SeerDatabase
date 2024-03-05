package com.robot.app.task.taskscollection
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   
   public class Task1295
   {
      
      public static const TASK_ID:int = 1295;
       
      
      public function Task1295()
      {
         super();
      }
      
      public static function initForMap733(param1:BaseMapProcess) : void
      {
         var onShow:Function = null;
         var b:BaseMapProcess = param1;
         onShow = function(param1:MouseEvent):void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("triones/TrionesSeventhPanel"),"正在打开破军面板....");
         };
         var mc:MovieClip = b.conLevel["mainMC"];
         var btn:SimpleButton = b.conLevel["btn_7"];
         MapListenerManager.add(btn,onShow,"破军封印");
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.COMPLETE)
         {
            mc.gotoAndStop(29);
         }
      }
   }
}
