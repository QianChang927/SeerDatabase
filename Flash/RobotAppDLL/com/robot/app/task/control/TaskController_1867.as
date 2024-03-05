package com.robot.app.task.control
{
   import com.robot.app.mapProcess.MapProcess_315;
   import com.robot.app.spt.FightBossController;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.FightStartInfo;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class TaskController_1867
   {
      
      public static const TASK_ID:int = 1867;
      
      public static const SPT_TASK_ID:int = 368;
      
      public static const PET_ID:int = 2023;
      
      public static const MAP_ID:int = 315;
      
      private static var _map:BaseMapProcess;
       
      
      public function TaskController_1867()
      {
         super();
      }
      
      public static function start() : void
      {
         TasksManager.accept(TASK_ID,function():void
         {
            startPro();
         });
      }
      
      public static function startPro() : void
      {
         var mod1:TaskMod;
         var mod1_1:TaskMod;
         var mod2:TaskMod;
         var mod3:TaskMod;
         var mod4:TaskMod;
         var mod5:TaskMod;
         var mod6:TaskMod;
         MainManager.selfVisible = false;
         ToolBarController.showOrHideAllUser(false);
         mod1 = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["spt" + String(SPT_TASK_ID)],"animation2"]);
         mod1_1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["spt" + String(SPT_TASK_ID)],"animation3"]);
         mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAERMA,["系统重新启动中...定位系统重新启动中....."],["这是?"]);
         mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAERMA,["拜伦号机械核心处理器X-10A正在获取系统设定资料....."],["难道是拜伦号的机械核心？"]);
         mod4 = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["spt" + String(SPT_TASK_ID)],"animation3"]);
         mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["哎呀！别生气别生气！我不是这个意思！我的意思是你看起来是好古老的机器！"],["正在获取目标资料......"]);
         mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAERMA,["目标物种类型定位中......新型赛尔机器人......目标是否敌对判定中......"],["你未必想打一架啊？"]);
         TaskDiaLogManager.single.playStory([mod1,mod1_1,mod2,mod3,mod4,mod5,mod6],function():void
         {
            NpcDialog.show(NPC.KAERMA,["目标类型：敌对  自动防御系统启动中......"],["打就打，怕你不成！","让我再准备一下！"],[function():void
            {
               TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
               {
                  staticScene();
                  FightDispatcher.addEventListener(PetFightEvent.START_FIGHT,fightStartHandler,false,0,true);
                  FightBossController.fightBoss("卡尔玛",2);
               });
            },function():void
            {
               TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
               {
                  staticScene();
               });
            }]);
         });
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         _map = param1;
      }
      
      public static function completed(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.KAERMA,["目标类型：敌对  自动防御系统启动中......"],["打就打，怕你不成！","让我再准备一下！"],[function():void
         {
            FightDispatcher.addEventListener(PetFightEvent.START_FIGHT,fightStartHandler,false,0,true);
            FightBossController.fightBoss("卡尔玛",2);
         },function():void
         {
         }]);
      }
      
      public static function staticScene() : void
      {
         MapProcess_315(_map).hideAnimationContainerAllChildren();
         MainManager.selfVisible = true;
         ToolBarController.showOrHideAllUser(true);
         var _loc1_:DisplayObjectContainer = MapManager.currentMap.controlLevel["spt" + String(SPT_TASK_ID)] as DisplayObjectContainer;
         var _loc2_:MovieClip = _loc1_["animation1"] as MovieClip;
         _loc2_.play();
         _loc2_.visible = true;
         _loc2_.buttonMode = true;
         _loc2_.addEventListener(MouseEvent.CLICK,completed,false,0,true);
      }
      
      public static function fightOverHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_CLOSE,fightOverHandler);
         var _loc2_:FightOverInfo = param1.dataObj.data as FightOverInfo;
         if(MapManager.currentMap.id == MAP_ID)
         {
            if(_loc2_.winnerID == MainManager.actorInfo.userID)
            {
               whenFightWin();
            }
            else
            {
               whenFightFail();
            }
         }
      }
      
      public static function fightStartHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.START_FIGHT,fightStartHandler);
         var _loc2_:FightStartInfo = param1.dataObj as FightStartInfo;
         if(_loc2_.otherInfo.petID == PET_ID)
         {
            FightDispatcher.addEventListener(PetFightEvent.FIGHT_CLOSE,fightOverHandler,false,0,true);
         }
      }
      
      private static function whenFightFail() : void
      {
         NpcDialog.show(NPC.KAERMA,["防御系统运作正常，消灭一切敌对目标...拜伦号是无可阻挡的！"],["我要继续挑战你！","让我再准备一下！"],[function():void
         {
            FightDispatcher.addEventListener(PetFightEvent.START_FIGHT,fightStartHandler,false,0,true);
            FightBossController.fightBoss("卡尔玛",2);
         },function():void
         {
         }]);
      }
      
      private static function whenFightWin() : void
      {
         NpcDialog.show(NPC.KAERMA,["警告！警告！自动防御系统崩溃......系统无法正常运作......系统自动关..."],["真是惊险啊！差点就被消灭了！"]);
      }
      
      public static function destoryFightDispatcher() : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_CLOSE,fightOverHandler);
      }
   }
}
