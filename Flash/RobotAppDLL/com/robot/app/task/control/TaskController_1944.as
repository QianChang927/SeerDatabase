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
   
   public class TaskController_1944
   {
      
      public static const TASK_ID:int = 1944;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      public static const MAP_LOCAL_ID1:int = 10448;
      
      public static const MAP_LOCAL_ID2:int = 10449;
      
      public static const MAP_LOCAL_ID3:int = 10450;
      
      public static const MAP_LOCAL_ID4:int = 10451;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1944()
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
            taskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,[MainManager.actorInfo.formatNick + "，你来得正好。据先锋队发回来的报告，你们这趟征途发现了神秘的魔窟之门？"],["是的！船长！"]);
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
      }
      
      public static function scene1() : void
      {
         var mod0:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation0"]);
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我们遇到了风暴山涧的精灵守护者特蒙勒，他说索伦森将泰坦石放在了魔窟之门里！"],["这就奇怪了！"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["根据飞船探测的结果显示，根本不存在所谓的魔窟之门！所以我们才会一直以为能量的聚集地就是魔灵广场！"],["怎么会这样？"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["船长，既然创世兵魂向赛尔飞船发来了求救信号，想必一定是有什么重大发现！"],["是的！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["但是从目前的形势来看，泰坦星系比以往的任何一个星系都要更加凶险！如果再次派出先锋队出发……"],["没事的！"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["既然我们发现了神秘的泰坦星系，所有问题都要调查清楚！这才是赛尔号每一位成员应该做的！"],["是的！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["出发吧！勇敢的赛尔先锋队！等你们的好消息！" + MainManager.actorInfo.formatNick + "一路上你们要互相帮助！早日顺利完成任务！"],["放心吧，船长！"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1944_0",true]);
         TaskDiaLogManager.single.playStory([mod0,mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9],function():void
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
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["发生了什么事情？少主，你为什么会与创世兵魂对站？"],["他就是创世兵魂？"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["向来没有谁能够阻挡我，而他偏偏阻挡我进入恐惧之境的时光之轮！"],["时光之轮是不能够随便进入的！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHUANGSIBINGHUN,["天蛇星少主！我希望你能够明白，恐惧之境的时光之轮记录着世间所有的事情！如果贸然进入会时空错乱的！"],["可是这是哥哥留下来的唯一线索！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHUANGSIBINGHUN,["缪斯少主口口声声的说，这是她哥哥留下来的最后的线索。硬闯时光之轮，我觉察到异样，才赶到这里阻止的！"],["哥哥？线索？"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["难道是耶里梅斯？天蛇星盟主离开前留下的线索，指示的是这里？"],["是的！天蛇星需要哥哥回来"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["我千辛万苦寻找哥哥，根据各种线索的指引终于找到了这里！现在天蛇星能源被不明物质吸收，已经开始大量流失！"],["我与缪斯一样！"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIUSI_WHITE,["天蛇星能源流失的情况与怀特星的能量异动很像！所以这次我与缪斯一起来到泰坦星系调查！"],["原来是这样！"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHUANGSIBINGHUN,["没想到情况竟然变得这么复杂！但是时光之轮不能硬闯。我们需要调查清楚到底发生了什么？"],["少主稍安勿躁！"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11],function():void
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
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["哈哈！绝情女科塔娜，你果然在这里！希望你不要在打泰坦石的主意！"],["就凭你们！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KETANA,["你们有什么资格要求我？泰坦石就被索伦森放在魔窟之门里！只要我打开魔窟之门，得到泰坦石，你们就回统统被我打败！"],["可笑！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHUANGSIBINGHUN,["你以为索伦森会乖乖地等你打开魔窟之门？科塔娜，清醒点！别被阿斯狄迷惑！"],["小心！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1944_1",true]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["好惊险！卡修斯，你怎么样？"],["没事！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIUSI_WHITE,["只是……为什么我体内的能量感觉在向外膨胀扩散一样！"],["你不会有事的！"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["多亏了你的出现，才击败了索伦森。不然我们要遭殃了！不过可惜，最后还是让他逃走了！"],["啊啊啊！"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIUSI_WHITE,["事不宜迟！大家快进入魔窟之门！我的能量在不断的向外膨胀扩散！我感觉要爆炸一样！"],["坚持住！"]);
         var mod12:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHUANGSIBINGHUN,["如果我没有猜错，应该是刚才的两股能量。它们在你体内巨大的冲击激发了你潜在能力！"],["那就是—超进化？"]);
         var mod13:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["太棒啦！没想到卡修斯终于开始突破自己，走上了封神之路！卡修斯，你太棒啦！"],["希望如此！"]);
         var mod14:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIUSI_WHITE,["大家快进入魔窟之门！不能让索伦森有机会卷土重来！"],["走吧！开启魔窟之门的秘密！"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13,mod14],function():void
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
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASIDI,["没想到你们真的可以进来！但是你们才刚刚进入魔窟之门！接下来的选择就没那么简单了！"],["可恶的血手！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHUANGSIBINGHUN,["大家小心！阿斯狄说得对，接下来的选择没那么简单了！大家看这里的三扇门！"],["不管这么多！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["我们不能让阿斯狄得到泰坦石！为了正义而战，史上最勇敢的赛尔—阿铁打，奋起吧！"],["阿铁打，小心啊！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASIDI,["想走好了，不用打了！泰坦石已经消失了！都是因为你们这些铁皮人！"],["可恶！"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["还好我收集到了泰坦石的能量！" + MainManager.actorInfo.formatNick + "我们快回去把情况报告给船长！"],["想走？没那么容易！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["我最讨厌妨碍我的人！ 这次你们休想离开这里！"],["我离开！"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASIDI,["既然泰坦石被毁了！我就不妨碍你了！我离开这里！哈哈哈！"],["可恶！"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["哼！真以为自己收集到泰坦石的能量？哈哈哈！乖乖的投降吧！"],["到底发生了什么？"]);
         var mod12:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1944_2",true]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12],function():void
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
         MapManager.changeMap(19);
      }
   }
}
