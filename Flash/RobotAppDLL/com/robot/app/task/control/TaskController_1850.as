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
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1850
   {
      
      public static const TASK_ID:uint = 1850;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      public static const MAP_LOCAL_ID1:int = 10392;
      
      public static const MAP_LOCAL_ID2:int = 10393;
      
      public static const MAP_LOCAL_ID3:int = 10394;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1850()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "，创世神兵中拥有超强防御力的圣盾之灵罗慕洛已经现身。创世神兵距离回到第六星系又进了一步！"],["真是太棒啦！"],[function():void
         {
            TasksManager.accept(TASK_ID,onAcceptHandler);
         }]);
      }
      
      public static function startPro() : void
      {
         NpcDialog.show(NPC.SHIPER,["但是索伦森吸取了五大星系的能量，想必现在实力大增！对于创世神兵肯定不会善罢甘休，我担心现在暗黑战神联盟已经前去寻找他们了。"],["我们快去阻止他！"],[function():void
         {
            NpcDialog.show(NPC.SHIPER,["去吧，我们不能允许索伦森在五大星系内任意妄为。维护宇宙的和平是我们赛尔的天职！"],["那我们快去看看吧船长！"],[function():void
            {
               TasksManager.complete(TASK_ID,TASK_STAGE_1,function(param1:Boolean):void
               {
                  MapManager.changeLocalMap(MAP_LOCAL_ID1);
               });
            }]);
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
      
      public static function complete2() : void
      {
         TasksManager.complete(TASK_ID,TASK_STAGE_2,function(param1:Boolean):void
         {
            MapManager.changeLocalMap(10393);
         });
      }
      
      public static function complete3() : void
      {
         TasksManager.complete(TASK_ID,TASK_STAGE_3,function(param1:Boolean):void
         {
            MapManager.changeLocalMap(10394);
         });
      }
      
      public static function complete4() : void
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
         MapManager.changeMap(953);
      }
      
      private static function onAcceptHandler(param1:Boolean) : void
      {
         if(!param1)
         {
            return;
         }
         MainManager.selfVisible = false;
         ToolBarController.showOrHideAllUser(false);
         startPro();
      }
   }
}
