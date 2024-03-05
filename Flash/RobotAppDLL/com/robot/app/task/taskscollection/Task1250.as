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
   
   public class Task1250
   {
      
      public static const TASK_ID:int = 1250;
       
      
      public function Task1250()
      {
         super();
      }
      
      public static function initForMap733(param1:BaseMapProcess) : void
      {
         var onShow:Function = null;
         var b:BaseMapProcess = param1;
         onShow = function(param1:MouseEvent):void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("triones/TrionesSixthPanel"),"正在打开武曲面板....");
         };
         var mc:MovieClip = b.conLevel["mainMC"];
         var btn:SimpleButton = b.conLevel["btn_6"];
         MapListenerManager.add(btn,onShow,"武曲封印");
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.COMPLETE)
         {
            mc.gotoAndStop(25);
         }
      }
   }
}
