package com.robot.app.task.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_3009
   {
      
      public static const TASK_ID:uint = 3009;
      
      public static const MAP_LOCAL_ID1:int = 10528;
      
      public static const MAP_LOCAL_ID2:int = 10528;
      
      public static const MAP_LOCAL_ID3:int = 987;
      
      public static const MAP_LOCAL_ID4:int = 987;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      private static var panel:AppModel;
       
      
      public function TaskController_3009()
      {
         super();
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
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "，伊洛维奇竟然是缪斯的哥哥！太不可思议了！快去和先锋队一起，去看看发生了什么事！"],["我立刻就去！（完成主线剧情，奖励翻倍哦！）","让我先准备一下！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               MainManager.selfVisible = false;
               ToolBarController.showOrHideAllUser(false);
               MapManager.changeLocalMap(MAP_LOCAL_ID1);
            });
         },null]);
      }
      
      public static function startPro() : void
      {
         MainManager.selfVisible = false;
         ToolBarController.showOrHideAllUser(false);
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            if(!param1[0])
            {
               MapManager.changeLocalMap(MAP_LOCAL_ID1);
            }
            else if(!param1[1])
            {
               MapManager.changeLocalMap(MAP_LOCAL_ID2);
            }
            else if(!param1[2])
            {
               MapManager.changeLocalMap(MAP_LOCAL_ID3);
            }
            else if(!param1[3])
            {
               MapManager.changeLocalMap(MAP_LOCAL_ID4);
            }
         });
      }
      
      public static function completeNode1(param1:Function) : void
      {
         var fun:Function = param1;
         TasksManager.complete(TASK_ID,TASK_STAGE_1,function(param1:Boolean):void
         {
            fun();
         });
      }
      
      public static function completeNode2() : void
      {
         TasksManager.complete(TASK_ID,TASK_STAGE_2,function(param1:Boolean):void
         {
            MapManager.changeLocalMap(MAP_LOCAL_ID3);
         });
      }
      
      public static function completeNode3(param1:Function) : void
      {
         var fun:Function = param1;
         TasksManager.complete(TASK_ID,TASK_STAGE_3,function(param1:Boolean):void
         {
            fun();
         });
      }
      
      public static function completeNode4() : void
      {
         KTool.showMapAllPlayerAndMonster();
         openTaskMainPanelTotal();
      }
      
      private static function openTaskMainPanelTotal() : void
      {
         var obj:Object = {};
         obj["funhandler1"] = function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TaskMainTurnPanel"),"正在打开...",{
               "turnNumber":881,
               "turn":44031
            });
            TasksManager.complete(TASK_ID,TASK_STAGE_4);
         };
         obj["funhandler2"] = function():void
         {
            MapManager.changeLocalMap(77);
         };
         ModuleManager.showModule(ClientConfig.getTaskModule("TaskMainTotalComplete"),"正在打开...",obj);
      }
      
      public static function destroy() : void
      {
         if(panel)
         {
            panel.destroy();
            panel = null;
         }
      }
   }
}
