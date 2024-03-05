package com.robot.app.task.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   
   public class TaskController_3021
   {
      
      public static const TASK_ID:uint = 3021;
      
      public static const MAP_LOCAL_ID1:int = 10548;
      
      public static const MAP_LOCAL_ID2:int = 10548;
      
      public static const MAP_LOCAL_ID3:int = 10549;
      
      public static const MAP_LOCAL_ID4:int = 10549;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      private static var panel:AppModel;
       
      
      public function TaskController_3021()
      {
         super();
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
      
      public static function setup(param1:int, param2:Function = null) : void
      {
         var mapid:int = param1;
         var backfun:Function = param2;
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            if(mapid == MAP_LOCAL_ID1 && !param1[0])
            {
               pro1();
               if(backfun != null)
               {
                  backfun(true);
               }
            }
            else if(mapid == MAP_LOCAL_ID2 && param1[0] && !param1[1])
            {
               pro2();
               if(backfun != null)
               {
                  backfun(true);
               }
            }
            else if(mapid == MAP_LOCAL_ID3 && param1[1] && !param1[2])
            {
               pro3();
               if(backfun != null)
               {
                  backfun(true);
               }
            }
            else if(mapid == MAP_LOCAL_ID4 && param1[2] && !param1[3])
            {
               pro4();
               if(backfun != null)
               {
                  backfun(true);
               }
            }
            else if(backfun != null)
            {
               backfun(false);
            }
         });
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "，我们现在要潜入魔界内部！这次行动异常危险！你一定要保证自身安全！万事小心！"],["我准备好了！（完成7月4日—7月25日所有主线还可以获得成就哦！）","让我先准备一下！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               MainManager.selfVisible = false;
               ToolBarController.showOrHideAllUser(false);
               MapManager.changeLocalMap(MAP_LOCAL_ID1);
            });
         },null]);
      }
      
      public static function startPro() : void
      {
         MainManager.selfVisible = false;
         ToolBarController.showOrHideAllUser(false);
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            if(!param1[0])
            {
               MapManager.changeLocalMap(MAP_LOCAL_ID1);
            }
            else if(!param1[1])
            {
               MapManager.changeLocalMap(MAP_LOCAL_ID2);
            }
            else if(!param1[2])
            {
               MapManager.changeLocalMap(MAP_LOCAL_ID3);
            }
            else if(!param1[3])
            {
               MapManager.changeLocalMap(MAP_LOCAL_ID4);
            }
         });
      }
      
      public static function pro1() : void
      {
         StatManager.sendStat2014("主线—盖世机甲（2014.07.011）","接取“盖世机甲”",StatManager.MAIN_TASK);
         KTool.hideMapAllPlayerAndMonster();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_10548_0"),function(param1:MovieClip):void
         {
            var mod1:TaskMod;
            var mod2:TaskMod;
            var mod3:TaskMod;
            var mod4:TaskMod;
            var mod5:TaskMod;
            var mod6:TaskMod;
            var mod7:TaskMod;
            var mod8:TaskMod;
            var mod9:TaskMod;
            var mod10:TaskMod;
            var mod11:TaskMod;
            var mod12:TaskMod;
            var mod13:TaskMod;
            var taskMc:MovieClip = param1;
            MapManager.currentMap.controlLevel.addChild(taskMc);
            mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["好痛啊。。。好痛！"],["哼哼，真不知道你是怎么闯过禁魔之崖的！"]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.WUJIANMOJIANG,["不过你既然能来到这里，说明你还是有点本事，这么快就倒下啦！哈哈！"],["混蛋！你个邪恶的家伙！"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["赛尔号的大军马上就到！一定会踏平你们这里！"],["从来没有人敢跟我们魔族较量。"]);
            mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.WUJIANMOJIANG,["不妨告诉你，我们魔界的军队已经全部出动，你最好再好好看看外面那道飘渺的曙光。"],["可恶，我，我不能倒在这里。"]);
            mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.WUJIANMOJIANG,["那道曙光真的有些刺眼，可是这有什么关系，因为，黑暗就要淹没一切！！哈哈！！"],["呵呵，是吗？"]);
            mod6 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
            mod7 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DIEN,["我的伙计！好样的！"],["不要大意，那个魔将没有展现真正的实力。"]);
            mod8 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["你是.....？"],["我是迪恩，一个在你们看来失踪了很久的赛尔"]);
            mod9 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["迪恩！！派特博士一直说你是赛尔号上天资最高的赛尔！你怎么会在这里？"],["我负责调查一个事件。"]);
            mod10 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DIEN,["这个事件我已经调查了很久，现在已经了解了大概。"],["到底是什么秘密？"]);
            mod11 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DIEN,["整个魔族力量太强大，我不得不特别小心，小赛尔，你是英勇的！"],["现在发现了什么吗？"]);
            mod12 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DIEN,["魔域里面的邪恶能力不仅可以让死去的魔族精灵重生，更可以让那些魔神们吸收更强大的魔力！你们大概还没有体会到四大魔神的恐怖。。。"],["那要怎么做！"]);
            mod13 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我们需要做些什么！"],["摧毁魔界！"]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13],function():void
            {
               MapManager.currentMap.controlLevel.removeChild(taskMc);
               completeNode1();
            });
         });
      }
      
      public static function pro2() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_10548_1"),function(param1:MovieClip):void
         {
            var mod1:TaskMod;
            var mod2:TaskMod;
            var mod3:TaskMod;
            var mod4:TaskMod;
            var mod5:TaskMod;
            var mod6:TaskMod;
            var mod7:TaskMod;
            var taskMc:MovieClip = param1;
            MapManager.currentMap.controlLevel.addChild(taskMc);
            mod1 = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_3021_1",true]);
            mod2 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.EVIL_LORD,["你激发出的斗志如此炙热，看来我必将除掉你，陌生人。"],["恐怕没那么简单！你不要太高估自己！"]);
            mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DIEN,["你一直感觉自己站在力量的巅峰，却从来不知道整个宇宙中比你强大的精灵何止百倍！"],["很对，能告诉我你的名字吗？"]);
            mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.EVIL_LORD,["我的双手虽然沾满了鲜血，但我从来不杀无名之辈，所以，我需要知道你的名字。"],["我叫迪恩，是赛尔号的船员。"]);
            mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DIEN,["对我来说，名字都是次要的，赛尔号船员，才是我最感到荣耀的称号！萨格罗斯，你先带着小赛尔离开！这里，我需要给自己一个交代。"],["可怕的自信，迪恩，你值得我出手。"]);
            mod7 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.EVIL_LORD,["妖王，去禁魔之崖截住他们，一个活口都不留，让他们都葬身在这里，我要他们的灵魂祭奠整个魔域。"],["遵命撒旦大王！"]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7],function():void
            {
               MapManager.currentMap.controlLevel.removeChild(taskMc);
               completeNode2();
            });
         });
      }
      
      public static function pro3() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_10549_0"),function(param1:MovieClip):void
         {
            var mod1:TaskMod;
            var mod2:TaskMod;
            var mod3:TaskMod;
            var mod4:TaskMod;
            var mod5:TaskMod;
            var mod6:TaskMod;
            var mod7:TaskMod;
            var mod8:TaskMod;
            var mod9:TaskMod;
            var mod10:TaskMod;
            var taskMc:MovieClip = param1;
            MapManager.currentMap.controlLevel.addChild(taskMc);
            mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["怎么办....怎么办....完全不是对手。"],["小东西，不知道得罪魔神大王的下场吗？"]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOGESI_YAOMO,["你那个口出狂言的伙伴，现在估计已经在跪地求饶了！哈哈！"],["胡说八道！迪恩是不会怕魔神的！"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我也不会怕你！你虽贵为妖王！现在却当了魔域之人的走狗！可见你也没什么本事！"],["住口！！你！！！！我...我...我是为了力量才这么做！你懂什么！"]);
            mod4 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
            mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.EVIL_LORD,["很好，我们又见面了。"],["这次，我们会有一场决斗。"]);
            mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA_MECHA,["邪恶魔神，我要看看你真正的实力，是否会和几万年之后一样厉害！"],["你....我知道了"]);
            mod7 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.EVIL_LORD,["你来了，也改变不了什么，这是宿命，就如同我放走了那个叫迪恩的小赛尔一样。"],["看来你没我想象的那么残忍。"]);
            mod8 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA_MECHA,["是不是应该好好决斗一场？"],["看来是这样。"]);
            mod9 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.EVIL_LORD,["我这个人很多疑，什么都不信，但我信命，你知道你的命运是什么吗？"],["我不需要知道，我只知道，今天我们只能有一人站在这里。"]);
            mod10 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.EVIL_LORD,["我来告诉你真正的命运吧，那就是粉碎在我的面前，成为尘埃！"],["这是终将要进行的对决，你们不要插手。"]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10],function():void
            {
               MapManager.currentMap.controlLevel.removeChild(taskMc);
               completeNode3();
            });
         });
      }
      
      public static function pro4() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_10549_1"),function(param1:MovieClip):void
         {
            var mod1:TaskMod;
            var mod2:TaskMod;
            var mod3:TaskMod;
            var mod4:TaskMod;
            var mod5:TaskMod;
            var mod6:TaskMod;
            var mod7:TaskMod;
            var mod8:TaskMod;
            var mod9:TaskMod;
            var mod10:TaskMod;
            var mod11:TaskMod;
            var mod12:TaskMod;
            var mod13:TaskMod;
            var mod14:TaskMod;
            var taskMc:MovieClip = param1;
            MapManager.currentMap.controlLevel.addChild(taskMc);
            mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.EVIL_LORD,["破铜烂铁，也敢妄谈宿命，还不快滚！"],["斗魂战甲！！！你醒醒啊！！"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA_YOUNG,["斗魂战甲！！！！！快醒醒！！！求你了！！不要啊！！！！！！！！！！！！"],["他早该知道，宿命无法被改变，再怎么努力都没用。"]);
            mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA_YOUNG,["我不信！我才不管什么狗屁宿命！我不要！我不要我的伙伴离开我！！！斗魂战甲！你不是答应我！让我再也不要失去伙伴的吗！你居然骗我！"],["盖小亚.........振作一点"]);
            mod5 = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_3021_2",true]);
            mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENGJIAKUANGZHAN,["是友情的力量让我重生，撒旦，你还相信宿命吗？"],[".....虚伪....我依然不屑。"]);
            mod7 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.EVIL_LORD,["不管多少次重生，你都要倒在我面前，看来.....那一刻来临了。"],["对，那一刻来临了。"]);
            mod8 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENGJIAKUANGZHAN,["这一刻，我也相信宿命。"],["邪恶魔神，你退下，这里没有你的事情了。"]);
            mod9 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENMIHEIYING,["这里让我解决，你带摩哥斯离开！这是命令！"],["不，我拒绝。"]);
            mod10 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.EVIL_LORD,["我不走。"],["这才有点邪恶魔神的样子。"]);
            mod11 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENGJIAKUANGZHAN,["正义终将驱散这里的沉沉黑夜，出招吧！"]);
            mod12 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
            mod13 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DADIZHANJIA,["我的老伙计！你太强大了！"],["这场战役才刚刚开始。"]);
            mod14 = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_3021_3",true]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13,mod14],function():void
            {
               MapManager.currentMap.controlLevel.removeChild(taskMc);
               completeNode4();
            });
         });
      }
      
      public static function completeNode1() : void
      {
         TasksManager.complete(TASK_ID,TASK_STAGE_1,function(param1:Boolean):void
         {
            pro2();
         });
      }
      
      public static function completeNode2() : void
      {
         TasksManager.complete(TASK_ID,TASK_STAGE_2,function(param1:Boolean):void
         {
            MapManager.changeLocalMap(MAP_LOCAL_ID3);
         });
      }
      
      public static function completeNode3() : void
      {
         TasksManager.complete(TASK_ID,TASK_STAGE_3,function(param1:Boolean):void
         {
            pro4();
         });
      }
      
      public static function completeNode4() : void
      {
         KTool.showMapAllPlayerAndMonster();
         openTaskMainPanelTotal();
      }
      
      private static function openTaskMainPanelTotal() : void
      {
         var backFun:Function = null;
         backFun = function():void
         {
            var obj:Object;
            TasksManager.complete(TASK_ID,TASK_STAGE_4,function(param1:Boolean):void
            {
               TaskRoadOfDevildom.isAllCompletedOfJuly();
            });
            StatManager.sendStat2014("主线—盖世机甲（2014.07.011）","完成“盖世机甲”",StatManager.MAIN_TASK);
            obj = {};
            obj["funhandler2"] = function():void
            {
               MapManager.changeLocalMap(77);
            };
            ModuleManager.getModule(ClientConfig.getTaskModule("TaskMainTotalComplete"),"").content.init(obj);
         };
         ModuleManager.showModule(ClientConfig.getTaskModule("TaskMainTotalComplete"),"正在打开...",backFun);
      }
      
      public static function destroy() : void
      {
         if(panel)
         {
            panel.destroy();
            panel = null;
         }
      }
   }
}
