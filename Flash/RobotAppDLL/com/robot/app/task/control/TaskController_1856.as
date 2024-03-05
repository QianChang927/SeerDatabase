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
   
   public class TaskController_1856
   {
      
      public static const TASK_ID:int = 1856;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      public static const MAP_LOCAL_ID1:int = 10395;
      
      public static const MAP_LOCAL_ID2:int = 10396;
      
      public static const MAP_LOCAL_ID3:int = 10397;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1856()
      {
         super();
      }
      
      public static function start() : void
      {
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,[MainManager.actorInfo.formatNick + "，据说创世神将奥斯卡前往魔君秘境追捕索伦森。只是可惜，圣翼之灵达芙妮遭人暗算。创世神兵陷入困境，不知还能否进入第六星系！"],["船长，不要气馁！"]);
         TaskDiaLogManager.single.playStory([mod1],function():void
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
         miniScene1();
      }
      
      public static function miniScene1() : void
      {
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["嗯！赛尔号成员必须全力以赴，维护宇宙的平衡。既然奥斯卡势必要带走索伦森接受万世囚禁，那么索伦森的末日也到了！我们快去协助奥斯卡！"],["我们这就去！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["去吧！但是千万要切记第六星系的恩怨非比寻常。传说中的神域四天王更是居心叵测。勇敢地赛尔们，一路小心！"],["放心吧，船长！我们保证完成任务！"]);
         TaskDiaLogManager.single.playStory([mod2,mod3],function():void
         {
            TasksManager.complete(TASK_ID,TASK_STAGE_1,function():void
            {
               goMiniScene2();
            });
         });
      }
      
      public static function goMiniScene2() : void
      {
         MapManager.changeLocalMap(10395);
      }
      
      public static function miniScene2() : void
      {
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod1_1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HUANGJINTIANMA,["达芙妮？不！你不是达芙妮！你到底是何人？为了要引我们来到这里！"],["果然是黄金天马！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DAFUNI,["天马一族的皇者的确名不虚传！我并不是达芙妮，而找到达芙妮也并不困难"],["你是说？"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DAFUNI,["既然是创世神兵，自然需要回到自己初始的原本状态！稍安勿躁，达芙妮很安全！"],["你到底是谁？为何同样有第六星系的能量？"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod5_1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALUONASI,["天马前辈高抬了！什么四天王，不过是第六星系神域守护者之一罢了！只可惜……第六星系现在变成了这个样子。"],["第六星系到底发生了什么？"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HUANGJINTIANMA,["为什么你们接二连三的离开第六星系？还有大批的精灵却不能返回第六个星系？达芙妮是不是被赫尔墨斯陷害的？"],["天马前辈，稍安勿躁。"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HUANGJINTIANMA,["不能稍安勿躁了！现在整个星系都被你们搞的乱七八糟！索伦森为何会出现在这里？泽尼森的幻化之术是你教的的吧？"],["孽徒！"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALUONASI,["小徒生性顽劣，得罪之处望请见谅！只是，这一切现在都还不到时机！待时机成熟之后，您一切都会明白！至于，达芙妮……"],["世上再没有达芙妮！"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var mod10_1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation4"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HUANGJINTIANMA,["我曾经与创世之神是至交好友！如今我眼睁睁的看着你在我面前残忍的陷害达芙妮，你说我要不要管！"],["天马前辈，您还是静养吧！"]);
         var mod12:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALUONASI,["达芙妮现在很安全！不过第六星系的事情，你最好还是不要插手！不希望我们有一天变成了决斗的对手。"],["别那么多废话！"]);
         var mod13:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation4"]);
         var mod13_1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation5"]);
         var mod14:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HUANGJINTIANMA,["哼！赫尔墨斯，难以想象你居然也是神域四天王！记住，多行不义必自毙！"],["哈哈哈！"]);
         var mod15:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HEERMOSI,["创世之神也说过这句话！不过后来他就在世上彻底的消失了！挫骨扬灰你懂吗？哈哈哈！"],["你们竟然？"]);
         var mod16:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HEERMOSI,["不是我们！跟我们没有任何关系！好啦，你喜欢和阿洛纳斯叙旧就请继续，我的目标是戈麦斯！记住我跟你说的——不！要！插！手！"],["等等！"]);
         var mod17:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation5"]);
         TaskDiaLogManager.single.playStory([mod1,mod1_1,mod2,mod3,mod4,mod5,mod5_1,mod6,mod7,mod8,mod9,mod10,mod10_1,mod11,mod12,mod13,mod13_1,mod14,mod15,mod16,mod17],function():void
         {
            TasksManager.complete(TASK_ID,TASK_STAGE_2,function():void
            {
               goMiniScene3();
            });
         });
      }
      
      public static function goMiniScene3() : void
      {
         MapManager.changeLocalMap(10396);
      }
      
      public static function miniScene3() : void
      {
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod1_1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["主人，发生了什么事情？"],["一场梦而已！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["对！是一场梦！哈哈哈……可那就是我残存的记忆！！！漫天的大火焚烧而过，生机勃勃顺便化作一片荒芜！哈哈哈！！！"],["主人！那是什么记忆？"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["一切都过去了！不过，现在似乎他们要卷土重来，把我们逼到绝境！"],["是诺伊尔！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod5_1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["既然奥斯卡喜欢打！那我们就跟他们打个痛快！达芙妮现在已经不存在了，想必戈麦斯此时已经方寸大乱！"],["是的，就让他们乱！"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GELAIAO,["就让我来吧。让我送戈麦斯去找达芙妮！他应该会很感激我吧！哈哈哈！"],["一切小心！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["记住！我们的目的只是拖延，让我用最后的时间完成我的任务，结束之后我甘愿跟奥斯卡回去！一切小心！你们不能再受伤了！"],["主人……"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         TaskDiaLogManager.single.playStory([mod1,mod1_1,mod2,mod3,mod4,mod5,mod5_1,mod6,mod7,mod8,mod9],function():void
         {
            TasksManager.complete(TASK_ID,TASK_STAGE_3,function():void
            {
               goMiniScene4();
            });
         });
      }
      
      public static function goMiniScene4() : void
      {
         MapManager.changeLocalMap(10397);
      }
      
      public static function miniScene4() : void
      {
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GEMAISI,["就在这里！就在这里达芙妮遭到暗算！我一定要为达芙妮讨回公道！我不能让她白白的牺牲！"],["切莫心急，会被敌人利用！"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["我们不能自乱阵脚！现在需要我们从长计议。索伦森对我早有防范，我们贸然进击可能会遭到伏击！"],["可是……"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LUOMULUO,["奥斯卡所说有道理，弗罗多与诺伊尔之前的对战，已经为索伦森敲响了警钟，这次他必定有所防范！"],["一派胡言！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod4_1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HEERMOSI,["替创世之神铲除背叛者！第六星系从来不欢迎他们这种胆小怕事的家伙！"],["我们从来没有背叛。"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1856_0",true]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.FULUODUO,["赫尔墨斯，你为什么要这样？戈麦斯，挺住！你不会有事的！"],["谢谢你！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["赫尔墨斯，你为何要对戈麦斯痛下毒手？你到底想做什么？"],["第六星系不能出背叛者！"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HEERMOSI,["更不能允许创世神兵的背叛！我们的目的就是解决索伦森，为创世之神报仇！你们遮遮掩掩明显就是在背叛！"],["听我们解释！"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HEERMOSI,["不必多言！达芙妮的离去，我同样悲伤至极。但是我们必须振作，认清自己的使命！索伦森的末日已经来临，我们不能再等了！"],["可是……！"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod12:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HEERMOSI,["哈哈哈！既然索伦森愿意帮我解决，那就继续让你做这个可怜的替罪羊吧！圣剑之灵，你再不出现，你的伙伴可都要一个个的离开这个世界了！"],["哈哈哈哈！"]);
         var mod13:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1856_1",true]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod4_1,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13],function():void
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
         MapManager.changeMap(949);
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
   }
}
