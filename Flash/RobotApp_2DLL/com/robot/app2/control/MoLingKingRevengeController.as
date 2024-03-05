package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class MoLingKingRevengeController
   {
      
      public static const TASK_ID:uint = 1999;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      private static var _map:BaseMapProcess;
       
      
      public function MoLingKingRevengeController()
      {
         super();
      }
      
      public static function clickNpc() : void
      {
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.COMPLETE)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("DevilBigThreePanel"));
            return;
         }
         Alarm.show("你还没有领任务！",function():void
         {
            MapManager.changeMap(996);
         });
      }
      
      public static function initForMap1999(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _map.conLevel["maiersi"].visible = false;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            startPro();
         }
         else if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(param1[0] == 0)
               {
                  startPro();
               }
               else if(param1[0] == 1 && param1[1] == 0)
               {
                  startStep1();
               }
               else if(param1[1] == 1 && param1[2] == 0)
               {
                  startStep2();
               }
            });
         }
         else
         {
            taskComplete();
         }
      }
      
      public static function startPro() : void
      {
         TasksManager.accept(TASK_ID,function(param1:Boolean):void
         {
            var mod1:TaskMod;
            var sucess:Boolean = param1;
            KTool.hideMapAllPlayerAndMonster();
            mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
            TaskDiaLogManager.single.playStory([mod1],function():void
            {
               taskMc.buttonMode = true;
               MapListenerManager.add(taskMc,function(param1:Event):void
               {
                  var e:Event = param1;
                  var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASASI,["哼哼…这个世界应该由我们魔界掌控！魔灵王和索伦森想掌控我，没这么容易，苏醒吧！魔界三巨头！"],["什么！！魔界？？？"]);
                  var mod3:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
                  var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["不好…看来他才是索伦森的幕后黑手，我一定要把这个消息带回赛尔号！"],["绝对不能被他们发现！"]);
                  var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我要抓紧时间想办法离开这里，否则就来不及了！"],["小鬼，你以为我不知道你的存在吗！"]);
                  var mod6:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
                  var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASASI,["哼哼…不知死活的小鬼！告诉我…你为什么会在这里？是谁派你来的！"],["我不会告诉你的！"]);
                  var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASASI,["真是不到黄河心不死啊！那就让你尝尝魔界的力量！"],["来吧！我不会怕你的！"]);
                  var mod9:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
                  TaskDiaLogManager.single.playStory([mod2,mod3,mod4,mod5,mod6,mod7,mod8],function():void
                  {
                     TasksManager.complete(TASK_ID,TASK_STAGE_1,function(param1:Boolean):void
                     {
                        if(param1)
                        {
                           startStep1();
                        }
                     });
                  });
               });
            });
         });
      }
      
      public static function startStep1() : void
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
         KTool.hideMapAllPlayerAndMonster();
         mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIERSI,[MainManager.actorInfo.formatNick + "终于找到你了，你没事吧！"],["迈尔斯，你来的太及时了！"]);
         mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIERSI,["这家伙是谁，看来不好惹的样子，不论怎么样，只要伤害我的朋友，我迈尔斯绝对不会放过你！"],["不知天高地厚的家伙！"]);
         mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASASI,["我是来自魔界的复仇王子阿萨斯，今后你们的世界将由我来掌管！"],["什么！魔界！！！"]);
         mod4 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,5,"mc5"]);
         mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIERSI,[MainManager.actorInfo.formatNick + "快走，这里就交给我吧！你一定要把这个消息告诉其他人，魔界入侵了！"],["不…我不能留你一个人在这里！！！"]);
         mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIERSI,["快走我的朋友，如果你和我一起留下来，我们很可能都会没命的！"],["但是你一个人怎么对抗他们呢！"]);
         mod7 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIERSI,["别忘记，我可是圣灵系的，圣灵系是这么容易被击败的吗？！"],["可是…"]);
         mod8 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,6,"mc6"]);
         mod9 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASASI,["哼哼…战皇你果然已经坐不住了…好吧！这家伙就交给你了！别让我失望哦！"],["放心吧！主人！"]);
         mod10 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.WARKING,["对面的小子，你以为在我战皇面前，你能有胜算吗？"],["没较量过怎么知道！"]);
         mod11 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.WARKING,["哼哼…你会为你刚说的话后悔的！让我们先来一场热身赛吧！"],["来吧！战皇！"]);
         mod12 = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1999_1",true]);
         mod13 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.WARKING,["哼哼…迈尔斯有点意思，你果然没有辜负圣灵系的称号，马马虎虎还能算个对手！"],["马马虎虎？"]);
         mod14 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIERSI,["可恶的家伙！既然这样，那就让你尝尝我迈尔斯的愤怒吧！你们从哪里来回哪里去！"],["加油啊！迈尔斯！"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13,mod14],function():void
         {
            TasksManager.complete(TASK_ID,TASK_STAGE_2,function(param1:Boolean):void
            {
               startStep2();
            });
         });
      }
      
      public static function startStep2() : void
      {
         var mod1:TaskMod;
         var mod2:TaskMod;
         var mod3:TaskMod;
         var mod4:TaskMod;
         var mod5:TaskMod;
         var mod6:TaskMod;
         KTool.hideMapAllPlayerAndMonster();
         mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,7,"mc7"]);
         mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASASI,["战皇，难道你手下留情了？我给你的时间不多了，最好别让我失望！"],["主人，我一定会亲手干掉它的！"]);
         mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASASI,["很好…我在魔界等待你的好消息！别枉费我给你魔界三巨头的名誉！斗皇、影皇，我们走！"],["遵命！主人！"]);
         mod4 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,8,"mc8"]);
         mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIERSI,["战皇，让我们来个了断吧！"],["别急，在这里对你不公平！"]);
         mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.WARKING,["跟我来吧！让我们去创世广场一决高下！"],["乐意奉陪！"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6],function():void
         {
            showDialog();
         });
      }
      
      private static function showDialog() : void
      {
         TasksManager.complete(TASK_ID,TASK_STAGE_3,function():void
         {
            var dialogArr:Array = [MainManager.actorInfo.formatNick + "我作为圣灵系的代表，这次和战皇的对抗一定要分出高下，快来创世广场找我吧！我需要你的帮助！"];
            var questionArr:Array = ["我这就去！","让我准备一下！"];
            var handlerArr:Array = [function():void
            {
               MapManager.changeMap(966);
            }];
            NpcDialog.show(NPC.MAIERSI,dialogArr,questionArr,handlerArr);
            showAndHideNPC();
            taskComplete();
         });
      }
      
      private static function showAndHideNPC() : void
      {
         _map.conLevel["maiersi"].visible = true;
         _map.conLevel["maiersi"].buttonMode = true;
         DisplayUtil.removeForParent(_map.conLevel["aniMc"]);
         KTool.showMapAllPlayerAndMonster();
      }
      
      private static function taskComplete() : void
      {
         showAndHideNPC();
         _map.conLevel["maiersi"].addEventListener(MouseEvent.CLICK,function():void
         {
            showDialog();
         });
      }
      
      public static function get taskMc() : MovieClip
      {
         return _map.conLevel["aniMc"];
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
