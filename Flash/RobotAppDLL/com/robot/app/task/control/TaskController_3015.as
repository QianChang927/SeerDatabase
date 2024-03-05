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
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class TaskController_3015
   {
      
      public static const TASK_ID:uint = 3015;
      
      public static const MAP_LOCAL_ID1:int = 10534;
      
      public static const MAP_LOCAL_ID2:int = 10536;
      
      public static const MAP_LOCAL_ID3:int = 10536;
      
      public static const MAP_LOCAL_ID4:int = 10536;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      private static var panel:AppModel;
      
      private static var taskmcs:MovieClip = null;
       
      
      public function TaskController_3015()
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
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "，伊洛维奇被神秘精灵所救，整个宇宙似乎弥漫着一股邪恶的气息，快去探查一番！"],["我立刻就去！（完成主线剧情，奖励翻倍任你选！）","让我先准备一下！"],[function():void
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
         KTool.hideMapAllPlayerAndMonster();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_10534_0"),function(param1:MovieClip):void
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
            mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YELIMEISI_XIE,["这里是什么地方？我为什么会在这里？"],["你醒了，天蛇之子，这里是天蛇星的禁地，也是从来不会对外人提起的地方。"]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENMIZHE,["整个天蛇星自从存在的那一刻起，就已经有了这里，而这里，则是负责举行一种仪式！"],["你到底是谁？！"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YELIMEISI_XIE,["你为什么要救我？难道只是让我知道有这么一个神秘之地存在吗？"],["不，天蛇之子，我是来帮你的！"]);
            mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENMIZHE,["我要给予你击败妖王摩哥斯的力量，趁着现在摩哥斯还没有完全的不可阻挡，这是你唯一的机会！"],["我凭什么相信你，除非你能击败我！"]);
            mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YELIMEISI_XIE,["如果不能击败我，那恐怕你根本没有能力帮我对付那个妖王，他的力量简直超乎我们的想象。"],["是吗.....天蛇之子，让我见识一下你的瞳之神能。"]);
            mod6 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
            mod7 = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_3015_1",true]);
            mod8 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YELIMEISI_XIE,["这种威力的瞳之神能！你究竟是什么人！"],["这个你不用管，我可以给予你这种力量！让你能与摩哥斯抗衡！"]);
            mod9 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENMIZHE,["我早都说过，天蛇禁地是为了举行某种仪式而存在，现在似乎真的到了可以使用它的时候了。"],["快给予我这种力量！"]);
            mod10 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YELIMEISI_XIE,["我需要这种力量，我一定要完成我的使命！我一定要让妖王摩哥斯偿还清他所有的罪孽！"],["天蛇之子，达到这种力量只需要一个条件。"]);
            mod11 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
            mod12 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENMIZHE,["天蛇之子，这里就是为了举行入魔仪式而存在的禁地，你应该庆幸，你是第二个可以拥有这种能力的人！"],["我.......请给我点时间"]);
            mod13 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YELIMEISI_XIE,["让我好好考虑一下这个条件。"],["好，这段时间，你可以随意进出天蛇禁地。"]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13],function():void
            {
               TasksManager.complete(TASK_ID,TASK_STAGE_1,function(param1:Boolean):void
               {
                  var sucess:Boolean = param1;
                  NpcDialog.show(NPC.SHENMIZHE,["我相信你会追求永恒的力量！刚才天象异常，似乎摩哥斯又要去找别人麻烦了！"],["马上过去阻止他！","我稍微准备一下就去！"],[function():void
                  {
                     MapManager.currentMap.controlLevel.removeChild(taskMc);
                     MapManager.changeLocalMap(MAP_LOCAL_ID2);
                  },function():void
                  {
                     var modd1:* = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
                     TaskDiaLogManager.single.playStory([modd1],function():void
                     {
                        taskMc.addEventListener(MouseEvent.CLICK,onClick);
                        CommonUI.addYellowExcal(MapManager.currentMap.controlLevel,644,215);
                        taskmcs = taskMc;
                     });
                  }]);
               });
            });
         });
      }
      
      protected static function onClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         NpcDialog.show(NPC.SHENMIZHE,["我相信你会追求永恒的力量！刚才天象异常，似乎摩哥斯又要去找别人麻烦了！"],["马上过去阻止他！","我稍微准备一下就去！"],[function():void
         {
            MapManager.currentMap.controlLevel.removeChild(taskmcs);
            MapManager.changeLocalMap(MAP_LOCAL_ID2);
            event.currentTarget.removeEventListener(MouseEvent.CLICK,onClick);
         },null]);
      }
      
      public static function pro2() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_10536_0"),function(param1:MovieClip):void
         {
            var mod1:TaskMod;
            var mod2:TaskMod;
            var mod3:TaskMod;
            var mod4:TaskMod;
            var mod5:TaskMod;
            var mod6:TaskMod;
            var mod7:TaskMod;
            var mod8:TaskMod;
            var taskMc:MovieClip = param1;
            MapManager.currentMap.controlLevel.addChild(taskMc);
            mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["我......我一定要获得最强大的力量！保护我的同伴！"],["雷伊，我们永远都是伙伴！你不用如此辛苦。"]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["我们会一直陪在你身边！跟你一起战斗！"],["不！你不会明白这种心情！"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["我们一直在为正义而努力，可是邪恶依然如此强大，没有至强的力量，如何能够粉碎这一切罪恶！"],["雷神，你就这点能耐？"]);
            mod4 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
            mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOGESI_YAOMO,["太可怜了，你们两个一起上都不是我的对手，还要不要站起来再挑战一下？"],["你这个家伙太可恶了！"]);
            mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["混蛋！居然根本不是他的对手！"],["哼，你以为那么好战胜我吗？"]);
            mod7 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOGESI_YAOMO,["我沉睡了上万年才醒来，又吸收了无比强劲的魔力！就凭你们也想击败我？"],["正义必将战胜邪恶！你不要这么嚣张！"]);
            mod8 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8],function():void
            {
               taskmcs = taskMc;
               completeNode2();
            });
         });
      }
      
      public static function pro3() : void
      {
         var mod1:TaskMod;
         var mod2:TaskMod;
         var mod3:TaskMod;
         var mod4:TaskMod;
         KTool.hideMapAllPlayerAndMonster();
         mod1 = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_3015_2",true]);
         mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BAOFENGNV,["缪斯！保护好雷伊！我来对付这个妖王！"],["当心！暴风女！"]);
         mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOGESI_YAOMO,["因为感受到所谓的正义而激发了圣能？很好很好，这是我所需要的。"],["你在说什么？"]);
         mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BAOFENGNV,["有我在，我不许你伤害任何人！"],["这真的是太可笑了，不过…...我现在打算好好吸收下你的能量！"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4],function():void
         {
            completeNode3();
         });
      }
      
      public static function pro4() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_10536_1"),function(param1:MovieClip):void
         {
            var mod1:TaskMod;
            var mod2:TaskMod;
            var mod3:TaskMod;
            var mod4:TaskMod;
            var mod5:TaskMod;
            var mod6:TaskMod;
            var taskMc:MovieClip = param1;
            MapManager.currentMap.controlLevel.addChild(taskMc);
            mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["缪斯….我不要我的伙伴为了我而牺牲，我永远不要。"],["雷伊，我们会永远一起战斗！"]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["你感觉好点了吗？"],["我听到了来自远方无穷无尽的轰鸣声。"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["似乎有一种能量再次召唤我，缪斯，我要和你们一起战斗！"],["雷伊！"]);
            mod4 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
            mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI_EVO,["我发誓，我将永远不会在邪恶面前低头！"],["雷伊！你给我等着！也许不用我出手！魔灵王自然会把你解决！"]);
            mod6 = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_3015_0",true]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6],function():void
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
            MapManager.changeLocalMap(MAP_LOCAL_ID2);
         });
      }
      
      public static function completeNode2() : void
      {
         TasksManager.complete(TASK_ID,TASK_STAGE_2,function(param1:Boolean):void
         {
            pro3();
         });
      }
      
      public static function completeNode3() : void
      {
         TasksManager.complete(TASK_ID,TASK_STAGE_3,function(param1:Boolean):void
         {
            MapManager.currentMap.controlLevel.removeChild(taskmcs);
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
         var obj:Object = {};
         obj["funhandler1"] = function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TaskMainTurnPanel"),"正在打开...",{
               "turnNumber":887,
               "turn":44036
            });
            TasksManager.complete(TASK_ID,TASK_STAGE_4);
            SocketConnection.send(46106,7);
         };
         obj["funhandler2"] = function():void
         {
            MapManager.changeLocalMap(77);
         };
         ModuleManager.showModule(ClientConfig.getTaskModule("TaskMainTotalComplete"),"正在打开...",obj);
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
