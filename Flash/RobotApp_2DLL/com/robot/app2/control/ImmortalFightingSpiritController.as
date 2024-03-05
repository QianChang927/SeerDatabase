package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class ImmortalFightingSpiritController
   {
      
      public static const TASK_ID:uint = 3001;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      private static var _map:BaseMapProcess;
       
      
      public function ImmortalFightingSpiritController()
      {
         super();
      }
      
      public static function clickNpc() : void
      {
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.COMPLETE)
         {
            taskComplete();
            return;
         }
         Alarm.show("你还没有领任务！",function():void
         {
            MapManager.changeMap(10513);
         });
      }
      
      public static function initForMap3001(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
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
                  var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASASI,["斗皇、影皇！！魔界之门就靠你们守护了，在魔界军团到来之前，你们务必坚守这里！"],["遵命！主人！"]);
                  var mod3:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
                  var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENMIHEIYING,["斗皇为什么你如此紧张，难道你还记得上次的约定？"],["是的，就是上次的约定！"]);
                  var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DOUHUANG,["你千万不要小看战神盖亚，我在魔界就有听说他的名号，据说到现在战神盖亚都不曾败过！"],["没有败过？这不可能！"]);
                  var mod6:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
                  var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA_EVO,["斗皇，终于找到你了，想不到你们堂堂魔界三巨头居然也会藏起来？难道你忘记我们的约定了吗？！"],["果然还是找过来了！"]);
                  var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DOUHUANG,["我斗皇向来说到做到！战神盖亚，我知道你从未战败过，所以今天就由我斗皇来打破你的不败金身！"],["斗皇…你尽然敢挑衅我！"]);
                  var mod9:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
                  var mod10:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DOUHUANG,["哼哼…你的不灭斗气不过如此，想要战胜我就这点斗气是不够的，你还太嫩了点，在我面前没有谁能够站着离开这里！"],["什么！可恶的家伙！"]);
                  var mod11:TaskMod = new TaskMod(TaskDiaLogManager.CARTOON,0,null,null,["cartoon/cartoon_3001"]);
                  TaskDiaLogManager.single.playStory([mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11],function():void
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
         KTool.hideMapAllPlayerAndMonster();
         mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA_EVO,["斗皇就让我们来一次真正的对抗吧！今天在这里只能有一个站着，到底是你斗皇还是我战神盖亚，我们用实力来说话！"],["我等这一刻很久了！"]);
         mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI_EVO,["等等战神…战神联盟是一个整体，你还是让我们一起参战吧！"],["雷神，你是在小看我吗？"]);
         mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIUSI_SUPER,["是啊！这样的话胜算会大一点，我们不能让你独自去冒险！"],["放弃吧！战神就是战神，不需要我们的帮助！"]);
         mod4 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,5,"mc5"]);
         mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA_EVO,["好久没有遇到这样的对手了，我的全身的斗气都已经沸腾起来，今天就让我们大战到底吧！"],["看来战神盖亚的狂暴模式被点燃了！"]);
         mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BULAIKE_NEW,["大家注意，别只关注斗皇，你们看哪个影皇正在监视着我们！"],["可恶的家伙！"]);
         mod7 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI_EVO,["大家小心点，魔界的力量非同小可，一定要想办法帮助战神盖亚才行！"],["大家一起上！"]);
         mod8 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,6,"mc6"]);
         mod9 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["看来战神联盟是要一起参加战斗了，我也不能闲着，等待机会我也要给斗皇致命一击！"],["战神盖亚，你不是一个人在战斗！"]);
         mod10 = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_3001_1",true]);
         mod11 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENMIHEIYING,["斗皇，看来你的麻烦来了！这小子不是那么容易战胜的！"],["放心，管好你自己吧！"]);
         mod12 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DOUHUANG,["战神盖亚，你和我的决斗就在这里，有本事就来我的斗之殿吧！"],["我会在里面等你的！"]);
         mod13 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,7,"mc7"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13],function():void
         {
            TasksManager.complete(TASK_ID,TASK_STAGE_2,function(param1:Boolean):void
            {
               if(param1)
               {
                  startStep2();
               }
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
         mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BULAIKE_NEW,["大地之神，快把雷神送走吧！这里交给我来处理，影皇的目标是我！"],["你一个人行吗？"]);
         mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BULAIKE_NEW,["放心吧！虽然我没有你们这样的超能力，但是我有的是智慧，快走！"],["布莱克，你可一定要回来找我们！"]);
         mod3 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,8,"mc8"]);
         mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENMIHEIYING,["怎么样！布莱克，有胆量参观一下我的影之殿吧！"],["一定是个骗局！"]);
         mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENMIHEIYING,["哼哼…还记得你的父亲吗？难道你不想见到他！"],["什么！！我的父亲不是已经…"]);
         mod6 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,9,"mc9"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6],function():void
         {
            TasksManager.complete(TASK_ID,TASK_STAGE_3,function():void
            {
               showAndHideNPC();
               ModuleManager.showModule(ClientConfig.getAppModule("DevilBigThreePanel"));
            });
         });
      }
      
      private static function showAndHideNPC() : void
      {
         DisplayUtil.removeForParent(_map.conLevel["aniMc"]);
         _map.conLevel["doudian"].buttonMode = true;
         KTool.showMapAllPlayerAndMonster();
      }
      
      private static function taskComplete() : void
      {
         showAndHideNPC();
         _map.conLevel["doudian"].addEventListener(MouseEvent.CLICK,function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("DevilBigThreePanel"));
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
