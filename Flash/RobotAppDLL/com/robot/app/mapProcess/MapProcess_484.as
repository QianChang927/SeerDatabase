package com.robot.app.mapProcess
{
   import com.robot.app.collectionTimber.CollectionTimberController;
   import com.robot.app.task.control.TaskController_707;
   import com.robot.app.task.control.TaskController_743;
   import com.robot.app.task.control.TaskController_768;
   import com.robot.app.task.taskscollection.Task707;
   import com.robot.app.task.taskscollection.Task743;
   import com.robot.app.task.taskscollection.Task768;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   
   public class MapProcess_484 extends BaseMapProcess
   {
       
      
      public function MapProcess_484()
      {
         super();
      }
      
      private static function npcLuLuClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(615,410),function():void
         {
            NpcDialog.show(NPC.LULU,["我要泡泡，我要抱抱，不要崇拜我，妹妹我只是个传说！"],["璐璐长的真可爱。"]);
         });
      }
      
      override protected function init() : void
      {
         var kxsPP:MovieClip;
         SocketConnection.send(1022,86071040);
         SocketConnection.send(1022,86067372);
         this.topLevel.mouseChildren = this.topLevel.mouseEnabled = false;
         conLevel["luluMC"].buttonMode = true;
         conLevel["luluMC"].addEventListener(MouseEvent.CLICK,npcLuLuClickHandler);
         MapListenerManager.add(conLevel["difute"],function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("KaXiuSiTrainPanel"));
         },"迪符特");
         kxsPP = conLevel["kxsPP"] as MovieClip;
         kxsPP.buttonMode = true;
         kxsPP.addEventListener(MouseEvent.CLICK,this.onOpenKaXiuSiPanel);
         if(TasksManager.getTaskStatus(TaskController_743.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            Task743.initTaskForMap484(this);
            return;
         }
         if(TasksManager.getTaskStatus(TaskController_707.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            Task707.initTaskForMap484(this);
            return;
         }
         if(TasksManager.getTaskStatus(TaskController_768.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            Task768.initTaskForMap484(this);
            return;
         }
      }
      
      private function onOpenKaXiuSiPanel(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SPTKaXiuSiPanel"),"正在打开SPT卡修斯 面板");
      }
      
      override public function destroy() : void
      {
         Task707.destroy();
         Task743.destroy();
         Task768.destroy();
         conLevel["luluMC"].removeEventListener(MouseEvent.CLICK,npcLuLuClickHandler);
         var _loc1_:MovieClip = conLevel["kxsPP"] as MovieClip;
         _loc1_.removeEventListener(MouseEvent.CLICK,this.onOpenKaXiuSiPanel);
         CollectionTimberController.destory();
      }
   }
}
