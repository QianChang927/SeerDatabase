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
   
   public class TaskController_1887
   {
      
      public static const TASK_ID:int = 1887;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      public static const MAP_LOCAL_ID1:int = 10416;
      
      public static const MAP_LOCAL_ID2:int = 10417;
      
      public static const MAP_LOCAL_ID3:int = 10418;
      
      public static const MAP_LOCAL_ID4:int = 10419;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1887()
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
            taskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,[MainManager.actorInfo.formatNick + "，根据赛尔号的数据显示，泰坦星系的各星球都出现了能量波动！"],["会有什么事情发生？"]);
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
         scene1();
      }
      
      public static function scene1() : void
      {
         var mod0:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation0"]);
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["可是创世神兵已经全部聚齐！泰坦星系的所有阴谋应该都会结束了！"],["没有那么简单！"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["自从索伦森回到泰坦星系，吸收了巨大的能量。如今的魔君实力大增，一定会和神域天王争斗的！"],["那我们该怎么办？"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["赛尔先锋队，立即出发！联络战神联盟，将索伦森的下一步计划调查清楚！"],["收到！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["赛尔先锋队保证完成任务！"],["立即出发！"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1887_0",true]);
         TaskDiaLogManager.single.playStory([mod0,mod1,mod2,mod3,mod4,mod5,mod6],function():void
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
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["善良的阿洛纳斯，没想到你的下场竟然是被同伴封印在这里！真是可悲啊！"],["我劝你离开这里！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALUONASI,["毁灭之神是不会放过你的！你的宿命就是被毁灭之神摧毁！"],["那就来吧！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["我还真是想念这位老朋友呢！看看现在是谁会被摧毁！"],["放肆！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ARUIBOSI,["就凭你？先过了我这关再说吧！"],["尽管来啊！"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALUONASI,["我等待这一刻太久了！在无间境地的日子，我每天都在想着这一天的到来！"],["这一天不会来的！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ARUIBOSI,["放弃吧！你根本不可能做到！你要知道毁灭之神的强大！"],["是啊，那么强大！"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["但是，如果我告诉他，我知道真正的泰坦石在哪里，他还会在我面前强大吗？"],["泰坦石？"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALUONASI,["真正的泰坦石？那我们曾经在魔灵星得到的是什么？"],["那些不过是复制品！"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var mod12:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["一见面就打，似乎不是应有的待客之道吧！想要知道真正的泰坦石的下落，就要听我的安排！"],["哼！你要怎么样？"]);
         var mod13:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["跟我去一个地方！让一切的阴谋都真相大白！"],["好啊！"]);
         var mod14:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation4"]);
         var mod15:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["可恶！竟然被他们给逃走了！他们会去哪里？"],["创世神兵？"]);
         var mod16:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["阿洛纳斯让我们去寻找创世神兵？或许他们会有一些线索！"],["时间紧迫！"]);
         var mod17:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIUSI_WHITE,["我和盖亚们立即前去寻找创世神兵！神域天王就拜托给雷伊和布莱克啦！"],["好的，分头行动！"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13,mod14,mod15,mod16,mod17],function():void
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
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIER,["各位放心！神域天王没有来这里！只是……"],["只是什么？"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIER,["只是永恒之树的能源即将枯竭，泰坦星系没有能源的支持，就会消失在宇宙中。"],["怎么会这样？"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["泰坦星系不是六大星系中能源最丰富的星系吗？为什么会能源枯竭？"],["泰坦石消失了！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIER,["神域天王与索伦森的争斗也是因为泰坦石！泰坦石蕴含着巨大的能量，但是现在已经所剩无几了!"],["那该怎么办？"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["他……他们这是？把自己的能量注入了永恒之树？"],["太厉害了！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["没想到创世神兵为了星系，做出了如此巨大的牺牲！我们一定要一直帮助他们！"],["是的！"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["我们必须阻止索伦森与神域天王联手！不然泰坦星系就被他们控制了！"],["立即出发！"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9],function():void
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
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1887_1",true]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["泰坦星系，唯我独尊！"],["谨遵主人吩咐！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MODIXISI,["痴人说梦！我不会放过你的！"],["哈哈！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["你最好乖乖的配合我！否则，阿瑞波斯与阿洛纳斯这一对难兄难弟，可就再也走不出这里！"],["可恶！"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MODIXISI,["你最好遵守诺言，事成之后把泰坦石交给我，否则我不会放过你！"],["好好的听命于我吧！"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["强大的战神联盟也束手无策了啊！哈哈！"],["可恶！"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BULAIKE_NEW,["这里有三大神域天王设置的能量屏障，我们根本无法穿透！"],["一定会有办法的！"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["我们不能让他们继续危害星系的能源！我们要尽快解决他们！"],["有道理！"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var mod12:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["不要冲动！一定会有办法击破他们的屏障的！"],["我们该怎么办？"]);
         var mod13:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["创世神兵为了泰坦星系的能源，已经做出了巨大的牺牲！我们不能允许这些坏蛋继续为害星系！"],["不！创世神兵还存在！"]);
         var mod14:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALUONASI,["创世神兵合体一定会爆发更为强大的力量！不要放弃！"],["可恶！"]);
         var mod15:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation4"]);
         var mod16:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1887_2",true]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13,mod14,mod15,mod16],function():void
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
         MapManager.changeMap(967);
      }
   }
}
