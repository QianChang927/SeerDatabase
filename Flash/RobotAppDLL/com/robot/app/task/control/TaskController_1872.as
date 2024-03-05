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
   
   public class TaskController_1872
   {
      
      public static const TASK_ID:int = 1872;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      public static const MAP_LOCAL_ID1:int = 10407;
      
      public static const MAP_LOCAL_ID2:int = 10408;
      
      public static const MAP_LOCAL_ID3:int = 10409;
      
      public static const MAP_LOCAL_ID4:int = 10410;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1872()
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
            taskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,[MainManager.actorInfo.formatNick + "，你来得正好！先锋队与赛尔号失去了联络！现在生死未卜！"],["啊？怎么会这样！"]);
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
            goScene1();
         }
      }
      
      private static function onChangeMapHandler(param1:*) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onChangeMapHandler);
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
         scene1();
      }
      
      public static function scene1() : void
      {
         var mod0:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation0"]);
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["最后一次接收到赛小息传回来的信号是在一个陌生的星系！"],["他们进到第六星系？"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["我想应该是的！但是之后却再也没办法联系到赛小息他们！"],["难道……"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,[MainManager.actorInfo.formatNick + "，前路凶险莫测！与赛尔号要时刻保持联络！保证万无一失！"],["放心吧，站长！"]);
         TaskDiaLogManager.single.playStory([mod0,mod1,mod2,mod3,mod4],function():void
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
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GEMAISI,["休伊特在这里与赫尔墨斯决战！生死未卜！"],["赛尔先锋队也消失了！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GEMAISI,[MainManager.actorInfo.formatNick + "，现在找到他们的唯一的办法，就是进入第六星系查明真实情况！"],["可是怎么进去？"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GEMAISI,["第六星系布下了星云结界，一定要用特殊的办法才能进入！"],["让我再试试！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["可恶的神域天王！没想到，我居然被骗了这么多年！"],["什么？"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["我一直以为神域天王代表着正义，但他们居然在外面为非作歹！成为了魔头！"],["魔头？"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GEMAISI,["一直阻止我们进入第六星系的竟然是神域天王？"],["知道的太晚了！"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["他……他消失了！"],["刻不容缓！"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,[MainManager.actorInfo.formatNick + "，我们立即前往第六星系，寻找休伊特与赛尔先锋队！神域天王出现，我们时间不多了！"],["好！"]);
         var mod12:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["不管前面到底有多么艰难的挑战，我都不会退缩！"],["一起加油！"]);
         var mod13:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GEMAISI,["希望罗慕洛与弗罗多一切平安！休伊特，坚持住，我一定会救你的！"],["走吧！"]);
         var mod14:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation4"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13,mod14],function():void
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
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["不……不好意思啊！你说这里是哪里？"],["魔灵之城！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIER,["我是魔灵之城的守卫——卡希尔！你们是谁？从哪来的？"],["不要急！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我是" + MainManager.actorInfo.formatNick + "，来自赛尔号！这是圣弓之灵戈麦斯！我们来寻找赛尔先锋队还有休伊特！"],["创世神兵？"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIER,["我们这里一直有你们的传说！据说你们是创世之神的武器幻化而成！实力超群！"],["赶走他们！"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GEMAISI,["赫尔墨斯！你到底把休伊特带去哪里？"],["哼！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HEERMOSI,["可恶的休伊特！估计他已经坠入万丈深渊！还有那多管闲事的赛尔先锋队！"],["你胡说！"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["赛小息他们一定没事情的！你这个大魔头！今天绝对不会再被你欺骗！"],["就凭你们？"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10],function():void
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
         var mod0:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation0"]);
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["居然躲在这里！赫尔墨斯，你的末日到了！"],["卡希尔！"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HEERMOSI,["击败他们！把他们赶走！这里不允许任何人进来！"],["遵命！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIER,["你们这些坏人，我要你们离开这里！！！"],["卡希尔！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1872_1",true]);
         var mod4_1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["奥斯卡把赫尔墨斯封印了？"],["放了主人！"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIER,["放了主人！否则别怪我不客气！"],["清醒点！"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["不要被赫尔墨斯迷惑！你就是创世神兵苦苦寻找到的圣甲之灵！"],["圣甲之灵？"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIER,["赫尔墨斯封印我的记忆，让我一度迷失心智！感谢奥斯卡帮我恢复能量！"],["太棒啦！"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["奥斯卡，你帮了我们大忙！"],["不客气！"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["赛尔先锋队和休伊特，需要你们继续寻找！前途坎坷，一路保重！"],["你要离开吗？"]);
         var mod12:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["是的。赫尔墨斯被我用封印锁住！我会把他关押在“无间境地”，永世不得离开！"],["你以为结束了吗？"]);
         var mod13:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod14:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GEMAISI,["接下来就靠我们自己了！" + MainManager.actorInfo.formatNick + "我们一起加油！寻找先锋队与休伊特"],["好的！"]);
         var mod15:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["戈麦斯、卡希尔，" + MainManager.actorInfo.formatNick + "愿意与你们一路同行，击败邪恶势力，寻找先锋队与休伊特！"],["英勇的赛尔！"]);
         var mod16:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1872_2",true]);
         TaskDiaLogManager.single.playStory([mod0,mod1,mod2,mod3,mod4,mod4_1,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13,mod14,mod15,mod16],function():void
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
         MapManager.changeMap(961);
      }
   }
}
