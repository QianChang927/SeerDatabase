package com.robot.app.task.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
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
   
   public class TaskController_1826
   {
      
      public static const TASK_ID:uint = 1826;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      public static const MAP_LOCAL_ID1:int = 10376;
      
      public static const MAP_LOCAL_ID2:int = 10377;
      
      public static const MAP_LOCAL_ID3:int = 10378;
      
      private static var _map:BaseMapProcess;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1826()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "，三位创世神兵正在联手寻找重返第六星系的办法，圣戒之灵拥有着超凡的能力，似乎可以找到办法……"],["船长，我们快去帮助他！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               MainManager.selfVisible = false;
               ToolBarController.showOrHideAllUser(false);
               startPro();
            });
         }]);
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
      
      public static function startPro() : void
      {
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["圣戒之灵正在召唤天马一族的皇者——黄金天马，黄金天马的能力说不定能破解迷宫的阻碍！"],["黄金天马？！"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["黄金天马是天马一族的最强者吗？为什么之前都没有见过？"],["这是只在传说中出现过的精灵。"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["黄金天马比圣光天马的年代更为久远，可以说是天马一族最纯正的血脉，我也很想见识一下他的英姿呢！"],["那我们快去看看吧船长！"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3],function():void
         {
            TasksManager.complete(TASK_ID,TASK_STAGE_1,function(param1:Boolean):void
            {
               MapManager.changeLocalMap(MAP_LOCAL_ID1);
            });
         });
      }
      
      public static function completeNode2() : void
      {
         TasksManager.complete(TASK_ID,TASK_STAGE_2,function(param1:Boolean):void
         {
            MapManager.changeLocalMap(MAP_LOCAL_ID2);
         });
      }
      
      public static function completeNode3() : void
      {
         TasksManager.complete(TASK_ID,TASK_STAGE_3,function(param1:Boolean):void
         {
            MapManager.changeLocalMap(MAP_LOCAL_ID3);
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
            });
         });
         MapManager.changeMap(4);
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
