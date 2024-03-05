package com.robot.app.mapProcess
{
   import com.robot.app.task.control.TaskController_789;
   import com.robot.app.task.taskscollection.Task687;
   import com.robot.app.task.taskscollection.Task695;
   import com.robot.app.task.taskscollection.Task789;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_506 extends BaseMapProcess
   {
      
      private static var isOpen:Boolean;
       
      
      private var gamePanel:MovieClip;
      
      public function MapProcess_506()
      {
         super();
      }
      
      override protected function init() : void
      {
         isOpen = false;
         this.topLevel.mouseChildren = this.topLevel.mouseEnabled = false;
         this.initForAllTask();
         Task687.initTaskForMap506(this);
         Task695.initTaskForMap506(this);
         Task789.initTaskForMap506(this);
      }
      
      override public function destroy() : void
      {
         this.destroyForAllTask();
         Task687.destroy();
         Task695.destroy();
         Task789.destroy();
      }
      
      private function initForAllTask() : void
      {
      }
      
      private function destroyForAllTask() : void
      {
         if(this.gamePanel)
         {
            this.closeHandler();
         }
      }
      
      private function closeHandler(param1:MouseEvent = null) : void
      {
         this.gamePanel.visible = false;
         this.gamePanel.destroy();
         this.gamePanel.removeEventListener("success",this.successHandler);
         this.gamePanel["closeBTN"].removeEventListener(MouseEvent.CLICK,this.closeHandler);
         ToolTipManager.remove(this.gamePanel["starMC"]);
         this.gamePanel = null;
         this.topLevel.mouseChildren = this.topLevel.mouseEnabled = false;
      }
      
      private function successHandler(param1:Event) : void
      {
         var evt:Event = param1;
         isOpen = true;
         Alarm.show("石门已打开！",function():void
         {
            closeHandler();
            gotoDoor();
         });
         TasksManager.getProStatusList(TaskController_789.TASK_ID,function(param1:Array):void
         {
            if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
            {
               TasksManager.complete(789,2);
            }
         });
      }
      
      public function gotoDoor() : void
      {
         if(isOpen)
         {
            MapManager.changeMap(357);
            return;
         }
         if(this.gamePanel == null)
         {
            conLevel["kaxiusiMC"].gotoAndStop(1);
            this.gamePanel = this.topLevel["gamePanel"];
            this.gamePanel.addEventListener("success",this.successHandler);
            this.gamePanel["closeBTN"].addEventListener(MouseEvent.CLICK,this.closeHandler);
            this.gamePanel.init();
            this.gamePanel.visible = true;
            ToolTipManager.add(this.gamePanel["starMC"],"点击拖动碎片，放入形状相符的凹槽。");
            this.topLevel.mouseChildren = this.topLevel.mouseEnabled = true;
         }
      }
   }
}
