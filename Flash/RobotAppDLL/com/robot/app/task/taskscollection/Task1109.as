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
   
   public class Task1109
   {
      
      public static const TASK_ID:int = 1109;
       
      
      public function Task1109()
      {
         super();
      }
      
      public static function initForMap733(param1:BaseMapProcess) : void
      {
         var btn:SimpleButton = null;
         var onShow:Function = null;
         var b:BaseMapProcess = param1;
         onShow = function(param1:MouseEvent):void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("triones/TrionesThirdPanel"),"正在打开禄存面板....");
         };
         var mc:MovieClip = b.conLevel["mainMC"];
         btn = b.conLevel["btn_3"];
         btn.addEventListener(MouseEvent.CLICK,onShow);
         ToolTipManager.add(btn,"禄存封印");
         MapManager.addEventListener(MapEvent.MAP_DESTROY,function():void
         {
            MapManager.removeEventListener(MapEvent.MAP_DESTROY,arguments.callee);
            btn.removeEventListener(MouseEvent.CLICK,onShow);
            ToolTipManager.remove(btn);
         });
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.COMPLETE)
         {
            mc.gotoAndStop(13);
         }
      }
   }
}
