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
   
   public class TaskController_1801
   {
      
      public static const TASK_ID:uint = 1801;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      public static const MAP_LOCAL_ID1:int = 10363;
      
      public static const MAP_LOCAL_ID2:int = 10364;
      
      public static const MAP_LOCAL_ID3:int = 10365;
      
      private static var _map:BaseMapProcess;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1801()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "，贾斯汀站长出外调查第六星系这么久怎么还没有回来，真是让人担心啊……"],["船长，还有我们保卫太空站！","不关我们的事吧……"],[function():void
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
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["虽然贾斯汀站长英勇善战，这次的危机我总有些担心，为什么还没有消息传送回来？"],["船长再耐心等等吧！"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["船长，卫兵报告盖亚来到太空站了，说不定带来了贾斯汀站长的消息！"],["哦？那太好了！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["战神联盟一定和贾斯汀站长在一起，快听听盖亚怎么说的！"],["他已经来了。"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.CARTOON,0,null,null,["cartoon/task_1801_1"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4],function():void
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
