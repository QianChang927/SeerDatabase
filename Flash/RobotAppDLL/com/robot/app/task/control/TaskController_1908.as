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
   
   public class TaskController_1908
   {
      
      public static const TASK_ID:int = 1908;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      public static const MAP_LOCAL_ID1:int = 10430;
      
      public static const MAP_LOCAL_ID2:int = 10431;
      
      public static const MAP_LOCAL_ID3:int = 10432;
      
      public static const MAP_LOCAL_ID4:int = 10433;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1908()
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
            taskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,[MainManager.actorInfo.formatNick + "，你来得正好。赛尔号刚刚接到奥斯卡传来的消息。提醒赛尔号要小心血手幽灵的攻击！"],["血手幽灵？"]);
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
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["他是谁？为什么要攻击赛尔号？"],["强大的无间精灵！"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["根据派特博士的研究，由于无间境地的封印松动，具有巨大邪恶能量的无间精灵出现，而血手幽灵就是第一个！"],["那我们该怎么办？"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["船长，我们曾经听创世神兵说泰坦星系的能源都依靠着泰坦石，如果我们找到泰坦石，那是不是可以缓解能源枯竭的情况？ "],["是的！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["既然这样，事不宜迟。先锋队，你们立即与兵魂汇合。寻找泰坦石，势必要缓解泰坦星系的能源危机！ "],["保证完成任务！"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1908_1",true]);
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
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["米咔，这个时候你就不要捣乱了！我们在想办法呢！ "],["等等！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["米咔是不是知道些什么呢？大家想想，我们是不是见到过泰坦石？ "],["我们见过？"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["开什么玩笑，泰坦石头是泰坦星系的能源，我们怎么会……我记起来了！我们见过！ "],["真的吗？"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BINGHUN,["大家别泄气！我们不妨试一试，说不定真的能够找到呢！ "],["对！我们不能放弃！"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["既然风暴之神曾经拥有过泰坦石，那么一定会有一些线索的！只要我们不放弃，就一定能够找到的！ "],["说得对！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["行侠仗义的阿铁打，战无不胜，攻无不克。区区泰坦石，绝对不在话下！走吧，我们立即出发！ "],["可是我们去哪里找？"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["哎……这个嘛……那个……小家伙。你说我们该去哪里找？ "],["你说谁是小家伙！"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10],function():void
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
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MODIXISI,["我希望你能够明白，我们在这里的目的是什么？泰坦石！泰坦石！一切都是因为泰坦石！ "],["是因为你的自私！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALUONASI,["当初如果不是你为了想要霸占星系的泰坦石，现在的一切都不会发生！ "],["够了！"]);
         var mod3_1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MODIXISI,["如果你不想成为索伦森的傀儡，那么就请你闭嘴，乖乖地听我的安排！ "],["一切都该结束了！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASIDI,["毁灭之神，什么时候你开始为了星系的能源，变得这样斤斤计较？ "],["放肆！"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1908_2",true]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALUONASI,["莫迪西斯啊，你竟然把血手召唤出来！你知道你这是在一步步走向灭亡！ "],["我知道！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MODIXISI,["那又怎么样？我得不到的，索伦森也别想得到！至于血手，哼！一定会和创世兵魂两败俱伤的！ "],["好可怕的毁灭之神！"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod3_1,mod4,mod5,mod6,mod7,mod8],function():void
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
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["不对！莫西家族的成员呢？他们不是一直生活在创世广场吗？ "],["对啊！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["难怪我觉得好像少了什么！莫西家族的成员去哪里了？ "],["快看！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["血手？好厉害啊！是敌是友？ "],["当然是朋友！"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASIDI,[MainManager.actorInfo.formatNick + "我等你们好久了！我们会变成朋友的，只要你们乖乖的离开这里！ "],["不可能！"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BINGHUN,[MainManager.actorInfo.formatNick + "不要相信他！血手是坏人，你为什么会出现在这里？ "],["因为要解决你们！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASIDI,["走？还没有谁能够从我的手掌中逃脱！"],["让我来！"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,[MainManager.actorInfo.formatNick + "，你们快走！梦想成为英雄的阿铁打必将战斗到底！你们快走！ "],["快去找贾斯汀站长！"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation4"]);
         var mod12:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1908_3",true]);
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
         MapManager.changeMap(971);
      }
   }
}
