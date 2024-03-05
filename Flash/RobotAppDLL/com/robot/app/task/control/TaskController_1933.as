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
   
   public class TaskController_1933
   {
      
      public static const TASK_ID:int = 1933;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      public static const MAP_LOCAL_ID1:int = 10444;
      
      public static const MAP_LOCAL_ID2:int = 10445;
      
      public static const MAP_LOCAL_ID3:int = 10446;
      
      public static const MAP_LOCAL_ID4:int = 10447;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1933()
      {
         super();
      }
      
      public static function start() : void
      {
         var list:Array = null;
         var taskMod:TaskMod = null;
         var mod0:TaskMod = null;
         if(TasksManager.getTaskStatus(TASK_ID) != TasksManager.ALR_ACCEPT)
         {
            list = [];
            if(MapManager.currentMap.id == MAP_LOCAL_ID1)
            {
               mod0 = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation0"]);
               list.push(mod0);
            }
            taskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,[MainManager.actorInfo.formatNick + "，请你与赛尔先锋队一同前往泰坦星系，完成这项任务！"],["是什么任务？"]);
            list.push(taskMod);
            TaskDiaLogManager.single.playStory(list,function():void
            {
               TasksManager.accept(TASK_ID,function():void
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  startPro();
               });
            });
         }
         else
         {
            MainManager.selfVisible = false;
            ToolBarController.showOrHideAllUser(false);
            startPro();
         }
      }
      
      public static function startPro() : void
      {
         if(MapManager.currentMap.id != MAP_LOCAL_ID1)
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onChangeMapHandler);
            MapManager.changeLocalMap(MAP_LOCAL_ID1);
         }
         else
         {
            scene1();
         }
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
      
      private static function onChangeMapHandler(param1:*) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onChangeMapHandler);
      }
      
      public static function scene1() : void
      {
         var mod0:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["在我们探索星系的时候，我们发现飞船接近泰坦星系的时候，能量流失特别严重！"],["为什么会这样？"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["根据派特博士的研究，泰坦星系中一定隐藏着某种物质可以吸收能量！而星系能源的危机也是因为这种物质！"],["那我们该怎么办？"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["同时大家一定要留意能源的储存情况！尽快勘测到泰坦石的聚集地，彻底缓解星系的能源危机！"],["是的！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我们准备与创世兵魂再次寻找泰坦石！上次的泰坦石不足以解决星系的能源需求短缺的情况！"],["好的！"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["那这次大家务必完成任务！前往不能再让邪恶实力的阴谋得逞！近期海盗势力蠢蠢欲动，接下来又是一场大战！"],["放心吧！船长！"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1933_0",true]);
         TaskDiaLogManager.single.playStory([mod0,mod1,mod2,mod3,mod4,mod5,mod6,mod7],function():void
         {
            TasksManager.complete(TASK_ID,TASK_STAGE_1,function():void
            {
               goScene2();
            });
         });
      }
      
      public static function goScene2() : void
      {
         MapManager.changeLocalMap(MAP_LOCAL_ID2);
      }
      
      public static function scene2() : void
      {
         var mod0:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["如果这样，那我们找到再多的能量都会流失掉的！"],["是的！"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHUANGSIBINGHUN,["我们千辛万苦找到的泰坦石，能量还没有聚集到永恒之树里，就已经流失的差不多了！"],["这可不行！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["这难道就是船长说的那个莫名的物质？看来我们必须加快节奏，找到能量聚集的源头！"],["不要紧张！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["就是嘛！多亏了" + MainManager.actorInfo.formatNick + "救出我们，最终才能离开风暴山涧！"],["风暴山涧？"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHUANGSIBINGHUN,["我们忽略了风暴山涧！说不定……"],["说得对！"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["上次因为大家被绑架了，所以我们被解救之后，直接离开了风暴山涧，并没有在风暴山涧寻找泰坦石！"],["可是我们去哪里找？"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["唉！不可能啦！索伦森去过的地方必定是寸草不生！怎么可能还会有泰坦石嘛！不要异想天开啦！"],["不，我们要试一下！"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         TaskDiaLogManager.single.playStory([mod0,mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9],function():void
         {
            TasksManager.complete(TASK_ID,TASK_STAGE_2,function():void
            {
               goScene3();
            });
         });
      }
      
      public static function goScene3() : void
      {
         MapManager.changeLocalMap(MAP_LOCAL_ID3);
      }
      
      public static function scene3() : void
      {
         var mod0:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHUANGSIBINGHUN,["大家小心！刚才有精灵在这里出现过！"],["你怎么知道！"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["这里很空旷啊！估计有精灵也早已经被凶残的索伦森赶尽杀绝了!"],["不对！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我的的确确我们刚进入风暴山涧的时候，大地有一阵的晃动！"],["你们是谁？"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TEMENGLE,["你为什么认识我？你是……创世兵魂？"],["果然是特蒙勒！"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHUANGSIBINGHUN,["你不是被囚禁在无间境地吗？为什么会出现在这里？"],["无间境地？"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["无间境地到底是什么地方啊？为什么你们总是说无间境地？貌似奥斯卡就在那里？"],["是囚禁精灵的地方！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHUANGSIBINGHUN,["特蒙勒，你为什么会出现在这里？难道你也偷偷的跑出来？"],["不是的！"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TEMENGLE,["很久之前，是风暴之神大人与奥斯卡达成协议！让我在这里看守风暴山涧的精灵！"],["是阿洛纳斯？"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TEMENGLE,["是的！他说如果有一天星系的能源出现危机，让我把泰坦石交给有缘人。可是……泰坦石被索伦森抢走了！"],["又是索伦森！"]);
         var mod12:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHUANGSIBINGHUN,["没想到我们还是来晚了一步！索伦森拿到泰坦石一定会变得更加强大！看来又要迎来一场恶战！"],["索伦森放在了魔窟之门！"]);
         var mod13:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TEMENGLE,["我偷偷的跟踪索伦森，结果发现他把他收集的所有能源全部放在了魔窟之门！只要我们打开魔窟之门，一切就回真想大白！"],["立即出发！"]);
         TaskDiaLogManager.single.playStory([mod0,mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13],function():void
         {
            TasksManager.complete(TASK_ID,TASK_STAGE_3,function():void
            {
               goScene4();
            });
         });
      }
      
      public static function goScene4() : void
      {
         MapManager.changeLocalMap(MAP_LOCAL_ID4);
      }
      
      public static function scene4() : void
      {
         var mod0:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TEMENGLE,["科塔娜？没想到你也离开了无间境地！很高兴见到你啊！"],["哼！"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KETANA,["不要假惺惺的！当初就是你害得我们被创世之神封印，关在了无间境地！"],["怎么会是我呢！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TEMENGLE,["是因为我们作恶多端，所以就应该接受创世之神的惩罚！你当初不是说已经悔过了吗？"],["别听他乱说！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1933_1",true]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASIDI,["没想到特蒙勒得到创世兵魂的能量，便瞬间爆发！"],["我们走！"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KETANA,["他们想要打开魔窟之门！索伦森应该比我们更紧张！交给他们吧！"],["走！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TEMENGLE,["科塔娜，不要受血手的迷惑啊！我们曾经承诺不再做坏事情的！"],["小心！"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TEMENGLE,["就是他！就是他拿走了泰坦石！创世兵魂，小心！他现在的实力不可低估！"],["没事的！"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,[MainManager.actorInfo.formatNick + "，你们不是想要泰坦石嘛！那就来拿吧！用你们的实力证明你们可以得到！"],["可恶！"]);
         var mod12:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我们先把情况汇报给船长！索伦森使用激将法，我们不能中计！一定会有最好的办法的！"],["好的！"]);
         var mod13:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1933_2",true]);
         TaskDiaLogManager.single.playStory([mod0,mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13],function():void
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
         MapManager.changeMap(979);
      }
   }
}
