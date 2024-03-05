package com.robot.app.task.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   
   public class TaskController_1952
   {
      
      public static const TASK_ID:uint = 1952;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      public static const MAP_LOCAL_ID1:int = 10453;
      
      public static const MAP_LOCAL_ID2:int = 10454;
      
      public static const MAP_LOCAL_ID3:int = 10455;
      
      public static const MAP_LOCAL_ID4:int = 10456;
      
      private static var _map:BaseMapProcess;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1952()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "赛尔先锋队冲锋陷阵，收集到了泰坦石的能量。但是貌似这股能量非比寻常。勇敢地赛尔们，快去看看发生了什么事！"],["船长，我们去看看吧！（奖励十万经验券，乐园代币，上等体力药剂）","让我先准备一下！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               MainManager.selfVisible = false;
               ToolBarController.showOrHideAllUser(false);
               startPro();
            });
         }]);
      }
      
      public static function startPro() : void
      {
         MapManager.changeLocalMap(MAP_LOCAL_ID1);
      }
      
      public static function showPanel() : void
      {
         if(panel == null)
         {
            panel = new AppModel(ClientConfig.getTaskModule("TaskPanel_" + TASK_ID),"正在打开任务信息");
            panel.setup();
         }
         panel.show();
      }
      
      public static function completeNode1() : void
      {
         TasksManager.complete(TASK_ID,TASK_STAGE_1,function(param1:Boolean):void
         {
            MapManager.changeLocalMap(MAP_LOCAL_ID2);
         });
      }
      
      public static function completeNode2() : void
      {
         TasksManager.complete(TASK_ID,TASK_STAGE_2,function(param1:Boolean):void
         {
            MapManager.changeLocalMap(MAP_LOCAL_ID3);
         });
      }
      
      public static function completeNode3() : void
      {
         TasksManager.complete(TASK_ID,TASK_STAGE_3,function(param1:Boolean):void
         {
            MapManager.changeLocalMap(MAP_LOCAL_ID4);
         });
      }
      
      public static function completeNode4() : void
      {
         KTool.showMapAllPlayerAndMonster();
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            var e:MapEvent = param1;
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            ModuleManager.showModule(ClientConfig.getTaskModule("TaskMainTotalComplete"),"正在打开...",function():void
            {
               TasksManager.complete(TASK_ID,TASK_STAGE_4);
               var _loc1_:Object = {};
               _loc1_["funhandler2"] = continuTasksHandler;
               ModuleManager.getModule(ClientConfig.getTaskModule("TaskMainTotalComplete"),"").content.init(_loc1_);
            });
         });
         MapManager.changeMap(4);
      }
      
      private static function continuTasksHandler() : void
      {
         MapManager.changeMap(809);
      }
      
      private static function get taskMc() : MovieClip
      {
         if(_map == null)
         {
            return null;
         }
         return _map.conLevel["taskMc"];
      }
   }
}
