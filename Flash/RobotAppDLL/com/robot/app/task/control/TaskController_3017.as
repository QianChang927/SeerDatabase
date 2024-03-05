package com.robot.app.task.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class TaskController_3017
   {
      
      public static const TASK_ID:uint = 3017;
      
      public static const MAP_LOCAL_ID1:int = 10538;
      
      public static const MAP_LOCAL_ID2:int = 10538;
      
      public static const MAP_LOCAL_ID3:int = 10622;
      
      public static const MAP_LOCAL_ID4:int = 10622;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      private static var panel:AppModel;
       
      
      public function TaskController_3017()
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
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "，暗夜城正在进行一场激烈的决斗，宇宙中恐怕将有一场大的灾难发生！我命令你立刻前往调查！"],["我立刻就去！（完成主线剧情，奖励翻倍任你选！）","让我先准备一下！"],[function():void
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
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_10538_0"),function(param1:MovieClip):void
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
            var taskMc:MovieClip = param1;
            MapManager.currentMap.controlLevel.addChild(taskMc);
            mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOGESI_YAOMO,["厉害！厉害！我很久没有遇到这么强的对手了！"],["真不愧是妖王。"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANJINYANMOWANG,["你的力量果然非同寻常！但我一定要击败你！我绝不能让你找到耶里梅斯！"],["那恐怕你的力量还是阻拦不了我的。"]);
            mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOGESI_YAOMO,["虽然你现在确实有给我对抗一下的能力，但也只能是一下，一切试图阻拦我征服宇宙的做法，都是妄想！"],["那我偏要粉碎你的美梦！"]);
            mod5 = new TaskMod(TaskDiaLogManager.CARTOON,0,null,null,["cartoon/task_3017_cartoon"]);
            mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANJINYANMOWANG,["不愧是妖王，不过你不要得意，耶里梅斯一定会战胜你！"],["到时候恐怕失败的是他才对。"]);
            mod7 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOGESI_YAOMO,["我不杀你，不是因为我仁慈，只是最终我要让你死心塌地的臣服于我！"],["你等着！自古邪不胜正！我一定要亲手把你撕碎！"]);
            mod8 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
            mod9 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DARK_MIUSI,["怎么样？现在可以相信我了吗？"],["果然是魔灵王的力量......"]);
            mod10 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOGESI_YAOMO,["姑且相信你们，但你最好不要骗我，否则我除掉你简直如同捏死一只蚂蚁。"],["请妖王放心，耶里梅斯对于整个魔界都是威胁！"]);
            mod11 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DARK_MIUSI,["耶里梅斯必须从这个宇宙消失，现在妖王是整个宇宙最强大的精灵！哪怕为了我自己，我也必须帮助妖王你。"],["那我们现在就出发！"]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11],function():void
            {
               MapManager.currentMap.controlLevel.removeChild(taskMc);
               completeNode1();
            });
         });
      }
      
      public static function pro2() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_10538_1"),function(param1:MovieClip):void
         {
            var mod1:TaskMod;
            var mod2:TaskMod;
            var taskMc:MovieClip = param1;
            MapManager.currentMap.controlLevel.addChild(taskMc);
            mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HOLY_KAIPUTE,["都不许走！看我正义之力的愤怒！"],["现在就撤！"]);
            TaskDiaLogManager.single.playStory([mod1,mod2],function():void
            {
               MapManager.currentMap.controlLevel.removeChild(taskMc);
               completeNode2();
            });
         });
      }
      
      public static function pro3() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_1005_0"),function(param1:MovieClip):void
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
            var taskMc:MovieClip = param1;
            MapManager.currentMap.controlLevel.addChild(taskMc);
            mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YELIMEISI_XIE,["啊啊啊啊啊！！为什么我内心越来越愧疚！谁来帮帮我！"],["伊洛维奇，我来帮你。"]);
            mod2 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YELIMEISI_XIE,["帮我？我的痛苦你根本不懂！快滚！不要逼我杀了你！"],["我是来找你战胜妖王摩哥斯，重回暗夜城！"]);
            mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DARK_MIUSI,["暗夜城本来就是你义父阿萨斯的！我不忍心看阿萨斯王子就这样含恨而去！"],["你....认识义父？"]);
            mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YELIMEISI_XIE,["就算你认识我义父，暗夜城的事情也不用你来帮忙！我最后下一遍逐客令！否则我会让你魂飞魄散！"],["看来必须要让他清醒一点！"]);
            mod6 = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_3017_1",true]);
            mod7 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
            mod8 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DARK_MIUSI,["我是谁并不重要，伊洛维奇，力量在你心里，你必将战胜妖王摩哥斯。"],["力量......在我心里，可是我除了痛苦什么都没有。"]);
            mod9 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YELIMEISI_XIE,["我活着的目的，只有一个—完成义父的使命！而这个使命！绝不允许任何人插手！妖王摩哥斯只能葬身在我的手上！"]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9],function():void
            {
               MapManager.currentMap.controlLevel.removeChild(taskMc);
               completeNode3();
            });
         });
      }
      
      public static function pro4() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_1005_1"),function(param1:MovieClip):void
         {
            var mod1:TaskMod;
            var mod2:TaskMod;
            var mod3:TaskMod;
            var mod4:TaskMod;
            var mod5:TaskMod;
            var mod6:TaskMod;
            var mod7:TaskMod;
            var taskMc:MovieClip = param1;
            var backFun:Function = function():void
            {
               var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YELIMEISI_XIE,["我想我心中已经有了答案！"],["伊洛维奇，你到底会如何选择？"]);
               var mod10:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_3017_3",true]);
               TaskDiaLogManager.single.playStory([mod9,mod10],function():void
               {
                  MapManager.currentMap.controlLevel.removeChild(taskMc);
                  completeNode4();
               });
            };
            MapManager.currentMap.controlLevel.addChild(taskMc);
            mod1 = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_3017_2",true]);
            mod2 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOLINGKING,["仇恨也是一种力量，伊洛维奇，我知道你恨我，但其实我丝毫不会去阻碍你什么。"],["一派胡言！你一直在利用你身边的每一个人！"]);
            mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YELIMEISI_XIE,["我根本不信你的鬼话，你所谓的力量，就是魔！出卖自己的灵魂！"],["果然，你被那些所谓的正义蒙蔽了双眼。"]);
            mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOLINGKING,["如果正义能帮助你，那为什么你不依赖你的伙伴们打败妖王，为什么耶里梅斯现在过的比你幸福？而你每天要这样自责？"],["不要说了！给我闭嘴！"]);
            mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOLINGKING,["什么是生存，生存需要力量，而力量，就在你仇恨的内心，跪着前行，只会让你永远得不到自己想要的一切！"],["你......好吧。"]);
            mod7 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DARK_MIUSI,["伊洛维奇，你自己好好想想吧。"],["......"]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7],function():void
            {
               NpcDialog.show(NPC.YELIMEISI_XIE,["到了是要下定决心的时候了！"],["入魔吧！伊洛维奇！","不要相信魔灵王的话！"],[function():void
               {
                  SocketConnection.send(CommandID.ACTIVEACHIEVE,86);
                  SocketConnection.sendWithCallback(48028,function(param1:SocketEvent):void
                  {
                  },1);
                  backFun();
               },function():void
               {
                  SocketConnection.send(CommandID.ACTIVEACHIEVE,86);
                  SocketConnection.sendWithCallback(48028,function(param1:SocketEvent):void
                  {
                  },2);
                  backFun();
               }]);
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
         var obj:Object = {};
         obj["funhandler1"] = function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TaskMainTurnPanel"),"正在打开...",{
               "turnNumber":6097,
               "turn":42095
            });
            TasksManager.complete(TASK_ID,TASK_STAGE_4);
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
