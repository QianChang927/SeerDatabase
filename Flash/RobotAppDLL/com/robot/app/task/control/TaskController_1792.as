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
   
   public class TaskController_1792
   {
      
      public static const TASK_ID:uint = 1792;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      public static const MAP_LOCAL_ID1:int = 10357;
      
      public static const MAP_LOCAL_ID2:int = 10358;
      
      public static const MAP_LOCAL_ID3:int = 10359;
      
      private static var _map:BaseMapProcess;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1792()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "，索伦森准备把圣翼之灵带往哪里，他真正的目标似乎并不是我们……"],["船长，我们快去阻止他！","不关我们的事吧……"],[function():void
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
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["索伦森的背后一定有一个惊人的秘密，战神联盟和玛法里奥正在追查这件事情，快去帮助他们！"],["放心吧船长，等着我们的好消息！"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["我预感一个震撼宇宙的大事件即将发生，赛尔号的新使命即将来临！"],["船长，我们不惧挑战！"]);
         TaskDiaLogManager.single.playStory([mod1,mod2],function():void
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
