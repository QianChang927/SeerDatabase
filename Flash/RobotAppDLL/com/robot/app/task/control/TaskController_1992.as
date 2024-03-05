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
   
   public class TaskController_1992
   {
      
      public static const TASK_ID:uint = 1992;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      public static const MAP_LOCAL_ID1:int = 10500;
      
      public static const MAP_LOCAL_ID2:int = 10501;
      
      public static const MAP_LOCAL_ID3:int = 10502;
      
      public static const MAP_LOCAL_ID4:int = 10503;
      
      private static var _map:BaseMapProcess;
      
      private static var _panel:AppModel;
       
      
      public function TaskController_1992()
      {
         super();
      }
      
      public static function start() : void
      {
         var dialogArr:Array = [MainManager.actorInfo.formatNick + "，魔灵王派奥罗纳尔去抢夺永恒石！我们必须阻止他们的强盗行为！卡修斯一定会超进化为大地之神的！快去和先锋队一起，去看看发生了什么事！"];
         var questionArr:Array = ["我立刻就去！（奖励十万经验券，上等体力药剂，泰坦之灵）","让我先准备一下！"];
         var handlerArr:Array = [function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               startPro();
            });
         }];
         NpcDialog.show(NPC.SHIPER,dialogArr,questionArr,handlerArr);
      }
      
      public static function startPro() : void
      {
         MainManager.selfVisible = false;
         ToolBarController.showOrHideAllUser(false);
         MapManager.changeLocalMap(MAP_LOCAL_ID1);
      }
      
      public static function showPanel() : void
      {
         if(_panel == null)
         {
            _panel = new AppModel(ClientConfig.getTaskModule("TaskPanel_" + TASK_ID),"正在打开任务信息");
            _panel.setup();
         }
         _panel.show();
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
               _loc1_["funhandler2"] = continueTasksHandler;
               ModuleManager.getModule(ClientConfig.getTaskModule("TaskMainTotalComplete"),"").content.init(_loc1_);
            });
         });
         MapManager.changeMap(4);
      }
      
      private static function continueTasksHandler() : void
      {
         MapManager.changeMap(974);
      }
   }
}
