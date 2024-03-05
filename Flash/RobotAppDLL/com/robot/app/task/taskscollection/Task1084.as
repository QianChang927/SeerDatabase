package com.robot.app.task.taskscollection
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class Task1084
   {
      
      public static const TASK_ID:int = 1084;
       
      
      public function Task1084()
      {
         super();
      }
      
      public static function initForMap733(param1:BaseMapProcess) : void
      {
         var btn2:SimpleButton = null;
         var onShow:Function = null;
         var b:BaseMapProcess = param1;
         onShow = function(param1:MouseEvent):void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("triones/TrionesSecondPanel"),"正在打开巨门面板....");
         };
         var mc:MovieClip = b.conLevel["mainMC"];
         btn2 = b.conLevel["btn_2"];
         btn2.addEventListener(MouseEvent.CLICK,onShow);
         ToolTipManager.add(btn2,"巨门封印");
         MapManager.addEventListener(MapEvent.MAP_DESTROY,function():void
         {
            MapManager.removeEventListener(MapEvent.MAP_DESTROY,arguments.callee);
            btn2.removeEventListener(MouseEvent.CLICK,onShow);
            ToolTipManager.remove(btn2);
         });
         if(TasksManager.getTaskStatus(1071) == TasksManager.COMPLETE)
         {
            if(TasksManager.getTaskStatus(1087) == TasksManager.COMPLETE)
            {
               mc.gotoAndStop(9);
            }
         }
      }
   }
}
