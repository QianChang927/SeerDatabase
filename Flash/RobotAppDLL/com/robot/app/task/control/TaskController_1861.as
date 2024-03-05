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
   
   public class TaskController_1861
   {
      
      public static const TASK_ID:int = 1861;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      public static const MAP_LOCAL_ID1:int = 10400;
      
      public static const MAP_LOCAL_ID2:int = 10401;
      
      public static const MAP_LOCAL_ID3:int = 10402;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1861()
      {
         super();
      }
      
      public static function start() : void
      {
         var taskMod:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,[MainManager.actorInfo.formatNick + "，奥斯卡与索伦森的终极一战即将展开。快去帮助创世神兵，我们不能再损失自己的盟友了！"],["船长，放心吧！"]);
         TaskDiaLogManager.single.playStory([taskMod],function():void
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
         scene1();
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
      
      public static function scene1() : void
      {
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["记住，赫尔墨斯阴险毒辣，我们必须时刻防备。最近终于收到战神联盟发来的信号！似乎他们也遇到了麻烦！"],["怎么回事？"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["具体的还不是很清楚，我们会尽快搜寻战神联盟的踪迹！你们先去保护创世神兵。协助奥斯卡抓捕索伦森！"],["放心吧，船长！我们保证完成任务！"]);
         TaskDiaLogManager.single.playStory([mod1,mod2],function():void
         {
            TasksManager.complete(TASK_ID,TASK_STAGE_1,function():void
            {
               goScene2();
            });
         });
      }
      
      public static function goScene2() : void
      {
         MapManager.changeLocalMap(MAP_LOCAL_ID1);
      }
      
      public static function scene2() : void
      {
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod1_1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["过不了多久，奥斯卡就来了！我想，这次……走不掉了！"],["我不会离开主人！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["我知道主人让我们拦截创世神兵，是让我们离开这里，以免遭受奥斯卡的伤害！主人想独自面对奥斯卡的攻击！"],["奥斯卡乃创世之神将！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["当初创世之神的毕生能量除了化作创世神兵外，其余全部注入奥斯卡体内！他的实力非你我可以抵挡！你还是离开吧！"],["离开？太晚了！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod5_1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GEMAISI,["你作恶多端！我们早就该为星系除害！创世之神的恩怨就在今天了结吧！"],["我作恶多端？"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["你失去了达芙妮就说我作恶多端？那这些恶怪让我失去了我的亲人、我的朋友，还有我的一切，这到底算不算作恶多端？"],["一派胡言！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["我只奉命将你带回去，接受万世的囚禁。至于其他的，你去跟神域天王说吧！"],["奥斯卡也不过一介莽夫！"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["创世之神的得力战将，勇猛无敌震惊第六星系的奥斯卡，如今却沦为神域四恶的打手！你的无知可真是可笑！"],["放肆！休要多言！"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var mod10_1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation4"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1861_0",true]);
         var mod12:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["赫尔墨斯！不要以为你是梦境之神，你就可以为所欲为！你知道在做什么吗？"],["有什么大惊小怪的！"]);
         var mod13:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HEERMOSI,["你觉得如果你把索伦森解决了，神域天王还会留着你吗？我是在帮你，好自为之吧！"],["难道……"]);
         var mod14:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HEERMOSI,["没有那么多难道……你说呢，戈麦斯？哈哈哈！送你去见达芙妮吧！创世神兵……呵，可笑之极！"],["不要！"]);
         var mod15:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation4"]);
         var mod16:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HEERMOSI,["可恶！休伊特！竟然还敢出现！"],["是圣剑之灵！"]);
         var mod17:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALUONASI,["不错！创世神兵马上就要集齐了！赫尔墨斯，我劝你还是放弃吧！善恶有报，终究会来的！"],["闭嘴，你这个瞎子！"]);
         var mod18:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HEERMOSI,["你什么都不懂！如果让他们回到第六星系，你有没有想过我们的结局！"],["我们与他们并无恩怨！"]);
         var mod19:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["够了！不管怎么样，索伦森我一定要带回第六星系！我只忠于创世之神！下次你最好不要再插手，否则，你可能永远回不去了！"],["可……可恶！"]);
         TaskDiaLogManager.single.playStory([mod1,mod1_1,mod2,mod3,mod4,mod5,mod5_1,mod6,mod7,mod8,mod9,mod10,mod10_1,mod11,mod12,mod13,mod14,mod15,mod16,mod17,mod18,mod19],function():void
         {
            TasksManager.complete(TASK_ID,TASK_STAGE_2,function():void
            {
               goScene3();
            });
         });
      }
      
      public static function goScene3() : void
      {
         MapManager.changeLocalMap(MAP_LOCAL_ID2);
      }
      
      public static function scene3() : void
      {
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod1_1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIUYITE,["达芙妮的事情我已经知道了！所以我们更需要振作！你安心养伤。在这里能够感受到第六星系的能量。这样能够快速的治愈你的伤！"],["赫尔墨斯为什么……"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GEMAISI,["他为什么要这样？难道达芙妮真是被他暗算的？那现在弗罗多和罗慕洛岂不是很危险！"],["放心吧！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIUYITE,["罗慕洛拥有强大的盾，赫尔墨斯想要正面攻击，基本不可能！况且现在阿洛纳斯在他身边，他不敢乱来！"],["是谁？"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod5_1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["赛尔先锋队，你们怎么在这里？"],["我们跟随创世神兵而来！"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["这是我们战神联盟成员——雷伊、盖亚、缪斯公主！这是创世神兵的圣剑之灵休伊特、圣弓之灵戈麦斯！"],["戈麦斯，我认识！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["我们这段时间发现五大星系出现了很奇怪的现象。所有的能量开始出现互相转换、相互抵消的情况！而这里，就是能量消失的尽头！"],["这是什么地方？"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIUYITE,["这里是离第六星系最近的地方——星云边际！"],["快看！"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var mod10_1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation4"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIUYITE,["我们前途未卜！待戈麦斯痊愈，还需要集齐创世神兵的力量，回到第六星系。现在还要面对赫尔墨斯的追击……唉！"],["我喜欢有实力的朋友！"]);
         var mod12:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["放心吧！有需要的地方，尽管喊我盖亚帮忙！我们战神联盟一定会拔刀相助的！"],["感激不尽！"]);
         var mod13:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation4"]);
         TaskDiaLogManager.single.playStory([mod1,mod1_1,mod2,mod3,mod4,mod5,mod5_1,mod6,mod7,mod8,mod9,mod10,mod10_1,mod11,mod12,mod13],function():void
         {
            TasksManager.complete(TASK_ID,TASK_STAGE_3,function():void
            {
               goScene4();
            });
         });
      }
      
      public static function goScene4() : void
      {
         MapManager.changeLocalMap(MAP_LOCAL_ID3);
      }
      
      public static function scene4() : void
      {
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod1_1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["主人现在怎么办？"],["先安心养伤！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["赫尔墨斯真是帮了我大忙！待创世神兵打开第六星系，我们到时候再一举冲回去！"],["真是太棒了！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["反倒是这里雄伟庄严，处处透露着王者的气息。不像是一般的地方啊！艾辛格，要小心！"],["终于通过了天空之城的试炼！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TUONUKE,["你是谁？为什么你有如此强大的能量！"],["竟然连魔君都不认识！"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["主人，看来这个所谓的“托鲁克一族的精英”实力的确非凡！不如让我们来掌控这里？"],["哈哈哈！正有此意！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1861_2",true]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1861_1",true]);
         TaskDiaLogManager.single.playStory([mod1,mod1_1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9],function():void
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
         MapManager.changeMap(770);
      }
   }
}
