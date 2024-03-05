package com.robot.app.task.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import org.taomee.utils.DisplayUtil;
   
   public class TaskController_3032
   {
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      public static const MAP_LOCAL_ID1:int = 10561;
      
      public static const MAP_LOCAL_ID2:int = 10562;
      
      public static const MAP_LOCAL_ID3:int = 10563;
      
      public static const MAP_LOCAL_ID4:int = 10564;
      
      public static const TASK_PANEL_NAME:String = "TaskPanel_3032";
      
      private static var _map:BaseMapProcess;
      
      private static var _panel:AppModel;
       
      
      public function TaskController_3032()
      {
         super();
      }
      
      public static function start() : void
      {
         var dialogArr:Array = [MainManager.actorInfo.formatNick + "据可靠消息！圣剑出鞘！那股光芒就在庞贝古城！立刻去探查！"];
         var questionArr:Array = ["现在出发！（完成7月4日—7月25日主线还可以获得成就哦！）","让我先准备一下！"];
         var handlerArr:Array = [function():void
         {
            TasksManager.accept(TaskRoadOfDevildom.TASK_ID_EVIL_JUMPDOWN,startPro);
         }];
         NpcDialog.show(NPC.SHIPER,dialogArr,questionArr,handlerArr);
      }
      
      public static function startPro(param1:Boolean = false) : void
      {
         MainManager.selfVisible = false;
         ToolBarController.showOrHideAllUser(false);
         MapManager.changeLocalMap(MAP_LOCAL_ID1);
      }
      
      public static function showPanel() : void
      {
         if(_panel == null)
         {
            _panel = new AppModel(ClientConfig.getTaskModule(TASK_PANEL_NAME),"正在打开任务信息");
            _panel.setup();
         }
         _panel.show();
      }
      
      public static function completeNode1() : void
      {
         TasksManager.complete(TaskRoadOfDevildom.TASK_ID_EVIL_JUMPDOWN,TASK_STAGE_1,function(param1:Boolean):void
         {
            MapManager.changeLocalMap(MAP_LOCAL_ID2);
         });
      }
      
      public static function completeNode2() : void
      {
         TasksManager.complete(TaskRoadOfDevildom.TASK_ID_EVIL_JUMPDOWN,TASK_STAGE_2,function(param1:Boolean):void
         {
            MapManager.changeLocalMap(MAP_LOCAL_ID3);
         });
      }
      
      public static function completeNode3() : void
      {
         TasksManager.complete(TaskRoadOfDevildom.TASK_ID_EVIL_JUMPDOWN,TASK_STAGE_3,function(param1:Boolean):void
         {
            MapManager.changeLocalMap(MAP_LOCAL_ID4);
         });
      }
      
      public static function completeNode4() : void
      {
         DisplayUtil.removeForParent(MapManager.currentMap.controlLevel["animationContainer"]);
         KTool.showMapAllPlayerAndMonster();
         ModuleManager.showModule(ClientConfig.getTaskModule("TaskMainTotalComplete"),"正在打开...",function():void
         {
            var obj:Object;
            TasksManager.complete(TaskRoadOfDevildom.TASK_ID_EVIL_JUMPDOWN,TASK_STAGE_4,function(param1:Boolean):void
            {
               TaskRoadOfDevildom.isAllCompletedOfJuly();
            });
            obj = {};
            obj["funhandler2"] = continueTasksHandler;
            ModuleManager.getModule(ClientConfig.getTaskModule("TaskMainTotalComplete"),"").content.init(obj);
         });
      }
      
      private static function continueTasksHandler() : void
      {
         MapManager.changeMap(77);
      }
   }
}
