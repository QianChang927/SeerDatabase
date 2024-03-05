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
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   
   public class TaskController_1866
   {
      
      public static const TASK_ID:int = 1866;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      public static const MAP_LOCAL_ID1:int = 10403;
      
      public static const MAP_LOCAL_ID2:int = 10404;
      
      public static const MAP_LOCAL_ID3:int = 10405;
      
      public static const MAP_LOCAL_ID4:int = 10406;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1866()
      {
         super();
      }
      
      public static function start() : void
      {
         var taskMod:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,[MainManager.actorInfo.formatNick + "你表现得很好！只可惜还是让索伦森逃走了！"],["最可恶的就是赫尔墨斯！"]);
         var taskMod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["嗯！我们都看错了赫尔墨斯！没想到他城府如此之深！不知道戈麦斯能否挺过这一关！"],["船长，快看！"]);
         TaskDiaLogManager.single.playStory([taskMod,taskMod1],function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               MainManager.selfVisible = false;
               ToolBarController.showOrHideAllUser(false);
               startPro();
            });
         });
      }
      
      public static function startPro() : void
      {
         goScene1();
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
      
      public static function goScene1() : void
      {
         MapManager.changeLocalMap(10403);
      }
      
      public static function scene1() : void
      {
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1866_1",true]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["赛尔号紧急待命！先锋队，立即出发，前去支援！"],["是，船长！保证完成任务！"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3],function():void
         {
            TasksManager.complete(TASK_ID,TASK_STAGE_1,function():void
            {
               goScene2();
            });
         });
      }
      
      public static function goScene2() : void
      {
         MapManager.changeLocalMap(10404);
      }
      
      public static function scene2() : void
      {
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HEERMOSI,["上次让你跑掉了！这次，没这么走运了！"],["可恶！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIUYITE,["赫尔墨斯，我劝你最好回头！否则可要兵戎相见！"],["哦？"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HEERMOSI,["好大的口气！你以为你们会是我的对手吗？"],["戈麦斯，你快离开！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIUYITE,["让传说的梦境之神见识一下圣剑之灵的厉害！"],["放马过来！"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIUYITE,["戈麦斯！振作起来！带领创世神兵寻找圣甲之灵！快走！"],["休伊特！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HEERMOSI,["圣甲之灵你们不可能找到！况且，你们根本不可能离开这里！"],["快走！"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIUYIER,["拼尽了全身力气，终于击退了赫尔墨斯的攻击！"],["你……你变成了……"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIUYIER,["没关系！赫尔墨斯一定受了重伤！这段时间内，创世神兵是安全的！"],["那你怎么办？"]);
         var mod12:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIUYIER,["第六星系的神域天王根本不想要我们回去！该怎么办？唉，我也不知道！"],["振作起来！"]);
         var mod13:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["有我们赛尔先锋队在，一切都会好起来！休伊尔，你一定会变成强大的圣剑之灵！"],["还有我！"]);
         var mod14:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation4"]);
         var mod15:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIUYIER,["我们是创世之神的武器幻化而成！我拼尽能量，全部抵消了赫尔墨斯的攻击！"],["没有盖亚做不到的事情！"]);
         var mod16:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["有我在！别管什么第六星系！我一定会让你变成比之前更强大的圣剑之灵！"],["战神威武！"]);
         var mod17:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["赛尔先锋队也会帮助你们的！创世神兵一定会如愿重返第六星系！"],["感激不尽！"]);
         var mod18:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation5"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13,mod14,mod15,mod16,mod17,mod18],function():void
         {
            TasksManager.complete(TASK_ID,TASK_STAGE_2,function():void
            {
               goScene3();
            });
         });
      }
      
      public static function goScene3() : void
      {
         MapManager.changeLocalMap(10405);
      }
      
      public static function scene3() : void
      {
         var mod0:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALUONASI,["各位不必惊慌！是我！泰坦星系风暴者——阿洛纳斯！"],["风暴天王！"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["风暴天王，你终于来啦！休伊特受伤啦！能量消失了，变成了休伊尔……"],["放心吧！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALUONASI,["我现在带他回去！想要快速恢复能量需要回到自己的星系！"],["真的吗？"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["太棒啦！休伊尔，你一定会变得比原先更加强大！"],["我跟你一起去！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALUONASI,["各位实力非凡，不如一同前往泰坦星系！"],["太棒了！"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["等等！我们千方百计都无法进入的第六星系，为什么你可以随便带我们进去！"],["各位莫慌！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALUONASI,["带你们进入泰坦星系是犯忌之事！但更希望你们早点了解真相！"],["一起走吧！"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         TaskDiaLogManager.single.playStory([mod0,mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9],function():void
         {
            TasksManager.complete(TASK_ID,TASK_STAGE_3,function():void
            {
               goScene4();
            });
         });
      }
      
      public static function goScene4() : void
      {
         MapManager.changeLocalMap(10406);
      }
      
      public static function scene4() : void
      {
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["这是什么地方？"],["泰坦星系—创世广场！"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALUONASI,["最危险的地方就是最安全的地方！你们有我风暴保护，他们不会发现！"],["哇！好厉害！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["阿洛纳斯！真是又帅又强！"],["过奖了！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALUONASI,["战神见过它？这是泰坦石！汇集了星系能量！是创世之神的遗物！"],["泰坦石？"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["我看不像是什么好东西！你要用来做什么？"],["帮助休伊尔？"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["别说那么多了！最厉害的阿洛纳斯一定会帮助休伊尔变得更加强大！"],["好的"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["不好！中计啦！"],["不会的！"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["阿洛纳斯也受伤了！一定是发生了什么事情！"],["怎么会这样！"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALUONASI,["怎么会这样？难道？"],["哈哈哈！"]);
         var mod12:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var mod13:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1866_2",true]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13],function():void
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
         });
      }
      
      private static function continuTasksHandler() : void
      {
         MapManager.changeMap(966);
      }
   }
}
