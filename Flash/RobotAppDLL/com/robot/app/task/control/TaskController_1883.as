package com.robot.app.task.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import flash.geom.Rectangle;
   
   public class TaskController_1883
   {
      
      public static const TASK_ID:int = 1883;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      public static const MAP_LOCAL_ID1:int = 10411;
      
      public static const MAP_LOCAL_ID2:int = 10412;
      
      public static const MAP_LOCAL_ID3:int = 10413;
      
      public static const MAP_LOCAL_ID4:int = 10414;
      
      private static var panel:AppModel;
      
      public static var attackIndex:int = 0;
      
      private static var attackMax:int = 5;
      
      private static var bloodSpr:MovieClip;
       
      
      public function TaskController_1883()
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
            taskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,[MainManager.actorInfo.formatNick + "，你来得正好！赛尔号已经与先锋队取得联系了！他们正在返回的途中！"],["真是太棒啦！"]);
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
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我们找到了圣甲之灵卡希尔，奥斯卡带赫尔墨斯进入了无间境地接受囚禁！但可怕的是索伦森回到了第六星系！"],["嗯！不错！"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,[MainManager.actorInfo.formatNick + "，你出色的完成了一项艰巨的任务！但是索伦森一定不会善罢甘休！"],["这也是我担心的地方！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["快看！赛尔先锋队回来了！"],["先锋队报到！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["船长！我们进入了第六星系，帮助休伊特恢复了能量！可是……"],["可是什么？"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["可是我们中计了！休伊特在恢复能量之后就被魔化了！完全不受自己控制！"],["太不可思议了！"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["途中有战神盖亚一路相随，我们才能够脱离险境！"],["回来了就好！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["之后我们帮助莫西家族逃离了海盗的侵扰！但在返程途中，盖亚接收到卡修斯的求救信号，前去救援！"],["卡修斯的求救？"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
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
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIUSI_WHITE,["你到底是谁？为什么要来这里？"],["击碎战神联盟！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIUYITE,["只要把你们一个个的击溃，我们就能够做宇宙的霸主！"],["痴心妄想！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIUSI_WHITE,["不要忘记，战神联盟五位可不会轻易就被你击败！"],["可惜了！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIUYITE,["估计现在盖亚已经永远的沉睡在创世广场了！而接下来就该消灭你了。之后布莱克、缪斯、雷伊！哈哈！"],["痴人说梦！"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIUSI_WHITE,["看来今天必定要与你们一战了！"],["可以直接认输！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.FUSITE,["快点认输，然后听从我们的安排，可以免去皮肉之苦！"],["认输？"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIUSI_WHITE,["哈哈！没做之前，我从来不会认输！"],["还真是倔强！"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIUSI_WHITE,["你们针对的是我，别伤害这里的精灵。"],["别啰嗦！"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1883_1",true]);
         var mod12:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var mod13:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["哼！得到了泰坦星系的能量，你们以为还是我的对手？诺森德！爆发吧！"],["是！主人"]);
         var mod14:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["把这些碍眼的家伙都解决掉！记住，我不想下次再见到他们！"],["放心吧！"]);
         var mod15:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation4"]);
         var mod16:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["可恶！为什么索伦森的能量变得如此强大！还凭空出现了这个暗夜使徒！"],["难以想象！"]);
         var mod17:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIUSI_WHITE,["还好你及时赶到！否则凭我现在一个人的实力……"],["相信自己！"]);
         var mod18:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["过不了多久，你一定可以突破自己！变得更加强大！战神联盟，永不言败！"],["我一定会的！"]);
         var mod19:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIUSI_WHITE,["但是我们必须尽快让创世神兵聚齐。不能让休伊特继续魔化下去！怀特星的能量已经不稳定了，怕是有什么事情要发生！"],["太可怕了！"]);
         var mod20:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["而且索伦森回到第六星系之后，实力大增！想要战胜他，越来越难了！"],["我就不信！"]);
         var mod21:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["还没有我盖亚不能战胜的对手！先锋队，跟我一起前往第六星系！看看他们到底耍什么花样！卡修斯，等我们的好消息！"],["出发，泰坦星系！"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13,mod14,mod15,mod16,mod17,mod18,mod19,mod20,mod21],function():void
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
         attackIndex = 0;
         bloodSpr = MapManager.currentMap.controlLevel["blood1"]["perMC"] as MovieClip;
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["不好！休伊特周围的黑色能量越来越浓了！怎么办？"],["你们终究还是要输！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIUYITE,["把你们的能量统统都收集到我这里！我可以饶过你们！"],["清醒点！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GEMAISI,["休伊特！我们是创世神兵！我们是队友！"],["创世神兵？"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GEMAISI,["这是什么情况？"],["能量在消失！"]);
         var mod6_1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALUONASI,[MainManager.actorInfo.formatNick + "，我被毁灭之神监禁，现在只能用幻化之术出现在你们面前。你快击碎休伊特周围的封印！"],["（用头部射击，破解封印）"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3",-1]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod6_1,mod7],function():void
         {
            MainManager.selfVisible = true;
            bloodSpr.parent.alpha = 1;
            AimatController.continuous = 5;
            AimatController.addEventListener(AimatEvent.PLAY_END,onPlayEndHandler);
         });
      }
      
      private static function onPlayEndHandler(param1:AimatEvent) : void
      {
         var e:AimatEvent = param1;
         var rect:Rectangle = new Rectangle(770,316,165,180);
         var bool:Boolean = rect.containsPoint(e.info.endPos);
         if(bool)
         {
            --AimatController.continuous;
            ++attackIndex;
            bloodSpr.gotoAndStop(attackIndex + 1);
            if(attackIndex >= attackMax)
            {
               AimatController.removeEventListener(AimatEvent.PLAY_END,onPlayEndHandler);
               TasksManager.complete(TASK_ID,TASK_STAGE_3,function():void
               {
                  MainManager.selfVisible = false;
                  goScene4();
               });
            }
         }
      }
      
      public static function goScene4() : void
      {
         MapManager.changeLocalMap(MAP_LOCAL_ID4);
      }
      
      public static function scene4() : void
      {
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALUONASI,["索伦森回到第六星系，实力不容小觑！"],["我们该怎么办？"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIUYITE,["第六星系的争斗源源不断，如今神域天王是我们的敌人，索伦森也是我们的敌人……我们到底该怎么办？"],["不要怕！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALUONASI,["记住，我们坚信去做每一件事情，不是因为做了会有效果！而是坚信这样做，是对的！"],["嗯！我们明白了！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALUONASI,["让我帮助你们最后一次！"],["什么？"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["是……是达芙妮？阿洛纳斯呢？他去哪里了？"],["他走了！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DAFUNI,["阿洛纳斯用自己的能力重塑了我！而自己能量耗尽，只能接受神域天王的监禁！"],["阿洛纳斯！"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["没想到风暴之神竟然会为了创世神兵而拼尽全力的帮助！"],["我们不能让阿洛纳斯失望！"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIUYITE,["记住！我们是创世神兵，我们的使命就是保护泰坦星系！达芙妮归来，创世神兵聚首！"],["太棒啦！"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var mod12:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["接下来是我和神域天王的恩怨，你们不要插手！赫尔墨斯必须由我来解决！哈哈！"],["你到底要做什么？"]);
         var mod13:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIUYITE,["创世神兵已经集齐！你最好放弃你的阴谋！"],["好大的口气！"]);
         var mod14:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["回到泰坦星系，你以为你们还是我的对手？哈哈哈！"],["不试试看怎么知道！"]);
         var mod15:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation4"]);
         var mod16:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1883_2",true]);
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
         MapManager.changeMap(968);
      }
   }
}
