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
   
   public class TaskController_1917
   {
      
      public static const TASK_ID:int = 1917;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      public static const MAP_LOCAL_ID1:int = 10439;
      
      public static const MAP_LOCAL_ID2:int = 10440;
      
      public static const MAP_LOCAL_ID3:int = 10441;
      
      public static const MAP_LOCAL_ID4:int = 10442;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1917()
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
            taskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["是的！想要成为最勇敢的赛尔，就要不惧艰险！勇往直前！" + MainManager.actorInfo.formatNick + "，这次的任务，你完成的十分出色！让我刮目相看！"],["谢谢船长！"]);
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
         var mod0:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["还是要感谢战神联盟成员以及谱尼最后的救援！否则，我们也凶多吉少！还好，一切都结束了！"],["情况不容乐观！"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["根据前方赛尔飞船发来的消息，泰坦星系的能源已经濒临预警点！永恒之树极速枯萎！"],["怎么会这样？"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["是的，船长！赛尔先锋队要学会勇往直前，不惧艰险！我们这次一定保证胜利完成任务！"],["好吧！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["泰坦征途必定充满坎坷险阻。你们一定要注意安全！赛尔们，为了探寻宇宙的新能源，加油！"],["保证完成任务！"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1917_0",true]);
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
         var mod0:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHUANGSIBINGHUN,["创世六神兵的能量聚集，才使得我出现！我肩负着维持泰坦星系能源的重任。可是……"],["别泄气！"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我们先锋队奉赛尔号飞船罗杰船长之命，来这里帮助你！就一定会有办法的！"],["谢谢你们！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHUANGSIBINGHUN,["这一路走来，感谢大家的帮助！" + MainManager.actorInfo.formatNick + "，特别要感谢你上次救了我们！"],["别泄气！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["喂，你什么时候这么懂礼貌了！还会说谢谢了！大家好朋友嘛！不用客气了！"],["是啊！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["可是我们现在去哪里呢？"],["风暴山涧！"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["我们只在风暴之神那里见到过泰坦石！现在不用去风暴山涧，我们还能去哪里？"],["恐惧之境！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHUANGSIBINGHUN,["恐惧之境是恐惧之神阿瑞波斯修炼的地方。据说凶残至极。大家务必小心！"],["放心吧！"]);
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
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YILANDI,["主人！主人！我们回来了！"],["是伊兰迪！"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["太棒啦！我们终于一起回到魔灵广场了！这里曾经就是我们的家园！"],["就是这里吗？"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.NUOYIER,["就是这里吗？为什么看着这么荒凉！"],["一切都会好起来！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASIDI,["魔君！没想到你还能够回来这里！"],["血手？"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["没想到莫迪西斯竟然背着我将你们两个都召唤出来！怎么样，还要对我的家族进行残忍的迫害吗？"],["都过去了！"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASIDI,["你现在也只能将神域天王控制一时，控制不了一世。不如我们合作，赶走赛尔号，消灭神域天王。你我共同享泰坦星系！"],["哈哈哈！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASIDI,["那我们就合作咯！神域天王那里交给你了！至于——赛尔号！我定要他们支离破碎！"],["凶残的血手！"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["这么久了，你的本性一直没有改变！曾经就是莫迪西斯封印的你！如今竟然还会把你召唤出来！难以想象！"],["他不过是利用我！"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASIDI,["闲话少说！魔君，以前的恩怨到此结束，如今我们就是朋友了！赛尔先锋队，你们的灾难来了！"],["等你的好消息！"]);
         var mod12:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation4"]);
         TaskDiaLogManager.single.playStory([mod0,mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12],function():void
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
         var mod0:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHUANGSIBINGHUN,["时光之轮！没想到还保留着索伦森和阿瑞波斯对战时的样子！我感到了时光之轮的能量！所以……这里有泰坦石！"],["太棒啦！"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["真是踏破铁鞋无觅处！终于让我们找到了！泰坦星系有救了！"],["可是我们怎么拿到！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHUANGSIBINGHUN,["让我来吧！我肩负着维持泰坦星系能量的重任！我一定可以拿到泰坦石！"],["小心啊！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KETANA,["只要你们放弃泰坦石，我们可以放你们走！"],["痴人说梦！"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["我们是宇宙中最勇敢的赛尔！使命就是勘探新能源！你们让我们放弃，把能源让给你们为非作歹？休想！"],["好远大的理想！"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASIDI,["别说我没有给你们机会！既然你们这么执着，那我就让你们知道执着的代价！"],["大家小心！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1917_1",true]);
         var mod8_1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["太棒啦！太棒啦！创世兵魂，你太棒啦！我们胜利啦！"],["他们逃跑了！"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,[MainManager.actorInfo.formatNick + "，快去看看创世兵魂有没有事情！ 我们快抓紧时间，拿到泰坦石"],["没事！"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHUANGSIBINGHUN,["大家小心，血手随时都可能回来！我们立刻取到泰坦石！"],["好的！"]);
         var mod12:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var mod13:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHUANGSIBINGHUN,["因为刚才血手的出现，泰坦石流失了大量的能量！目前也只能短暂的缓解星系的能源枯竭！"],["太可惜了！"]);
         var mod14:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["不过没关系，我们先锋队永不退缩！我们继续勘测新的泰坦石！一定会彻底解决能源枯竭的！"],["是的！"]);
         var mod15:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我想索伦森和阿斯狄一定不会善罢甘休的！我们先把情况汇报给罗杰船长！看下一步我们该怎么办？"],["好的！"]);
         var mod16:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1917_2",true]);
         TaskDiaLogManager.single.playStory([mod0,mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod8_1,mod9,mod10,mod11,mod12,mod13,mod14,mod15,mod16],function():void
         {
            KTool.showMapAllPlayerAndMonster();
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               var e:MapEvent = param1;
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               ModuleManager.showModule(ClientConfig.getTaskModule("TaskMainTotalComplete20140207"),"正在打开...",function():void
               {
                  TasksManager.complete(TASK_ID,TASK_STAGE_4);
                  var _loc1_:Object = {};
                  _loc1_["funhandler2"] = continuTasksHandler;
                  ModuleManager.getModule(ClientConfig.getTaskModule("TaskMainTotalComplete20140207"),"").content.init(_loc1_);
               });
            });
            MapManager.changeMap(4);
         });
      }
      
      private static function continuTasksHandler() : void
      {
         MapManager.changeMap(969);
      }
   }
}
