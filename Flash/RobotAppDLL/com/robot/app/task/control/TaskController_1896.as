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
   
   public class TaskController_1896
   {
      
      public static const TASK_ID:int = 1896;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      public static const MAP_LOCAL_ID1:int = 10426;
      
      public static const MAP_LOCAL_ID2:int = 10427;
      
      public static const MAP_LOCAL_ID3:int = 10428;
      
      public static const MAP_LOCAL_ID4:int = 10429;
      
      private static var panel:AppModel;
      
      public static var attackIndex:int = 0;
      
      private static var attackMax:int = 5;
      
      private static var bloodSpr:MovieClip;
       
      
      public function TaskController_1896()
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
            taskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,[MainManager.actorInfo.formatNick + "，你来得正好。赛尔号探测到最近一段时间，泰坦星系的能源都有加速枯竭的状态！"],["发生了什么事情？"]);
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
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["创世神兵已经合力将能量注入到永恒之树！永恒之树也重新散发光芒。为什么会能源枯竭呢？"],["这也是我在思考的！"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["索伦森与魔域天王联合筑起了神域结界，能量应该都在向索伦森聚集！"],["那我们该怎么办？"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["船长，想想办法！奥斯卡说因为星系能源濒临枯竭。无间境地的封印即将被解除！"],["是的！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["据说很久以前被封印的魔石精灵也即将复苏！奥斯卡现在正奋力封印被囚禁的梦境之神……"],["事态一发不可收拾啊！"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
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
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["你……你是谁啊？你为什么会从永恒之树里面冒出来？"],["我是创世兵魂！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BINGHUN,["我是创世六神兵的能量汇聚而成的创世兵魂！职责是守护永恒之树能够能量永不枯竭！"],["创世兵魂？"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["哈哈哈！说谎不是好孩子！小家伙，快回家吧！这里太危险了！别耽误我们办正事。"],["哈哈哈！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BINGHUN,["这次你们相信了？"],["相信了！相信了！"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["没想到你能量如此强大！"],["不！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BINGHUN,["泰坦星系能源濒临枯竭！而我的能量也在急速减弱！所以，我需要你们的帮助！"],["我们的帮助？"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["行侠仗义的阿铁打，战无不胜攻无不克，必定是你保护星系的最佳搭档！"],["感谢大家！"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["是啊！一个索伦森就足够厉害了！现在又加上三位神域天王……唉！"],["不试试怎么知道？"]);
         var mod12:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BINGHUN,["神域天王与索伦森联手也是因为听信索伦森持有泰坦石！只要我们找到泰坦石，一切都会结束！"],["泰坦石到底是什么？"]);
         var mod13:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation4"]);
         var mod14:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BINGHUN,["所以我们需要调查清楚索伦森到底有没有泰坦石！只要得到泰坦石，就能缓解星系能源枯竭的情况！"],["我明白了！"]);
         var mod15:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["好吧！让我们一起面对神域天王与索伦森的神域结界吧！"],["感谢大家的帮助！"]);
         var mod16:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["客气啦！没想到小家伙还挺厉害的！你守护永恒之树累不累啊？需不需要搭档呢？我怎么样啊？"],["出发！魔域之巅！"]);
         var mod17:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation5"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13,mod14,mod15,mod16,mod17],function():void
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
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1896_1",true]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod2_1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1",-1]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BINGHUN,["神域天王布下的神域结界来自星系的能量。一定会有办法破除的！"],["让我试试看！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我就不信还有破除不了的结界！"],["（用头部射击，破解神域结界）"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod2_1,mod3,mod4],function():void
         {
            MainManager.selfVisible = true;
            bloodSpr.parent.alpha = 1;
            AimatController.continuous = 5;
            AimatController.addEventListener(AimatEvent.PLAY_END,onPlayEndHandler);
         });
      }
      
      private static function onPlayEndHandler(param1:AimatEvent) : void
      {
         var _loc2_:Rectangle = new Rectangle(43,6,900,346);
         var _loc3_:Boolean = _loc2_.containsPoint(param1.info.endPos);
         if(_loc3_)
         {
            --AimatController.continuous;
            ++attackIndex;
            bloodSpr.gotoAndStop(attackIndex + 1);
            if(attackIndex >= attackMax)
            {
               AimatController.removeEventListener(AimatEvent.PLAY_END,onPlayEndHandler);
               MainManager.selfVisible = false;
               bloodSpr.parent.alpha = 0;
               scene3Last();
            }
         }
      }
      
      private static function scene3Last() : void
      {
         var mod0:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["你以为你们有足够的实力可以破解神域结界？哈哈！乖乖的投降于我，我还可以饶过你们！"],["痴心妄想！"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["我们宁可战斗到底，也从来不会投降！我们一定会破解你的结界，击败你！"],["那我等着你们！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BINGHUN,["索伦森没有泰坦石！现在的神域结界只是索伦森与神域天王的能量。如果索伦森有泰坦石，我们根本没办法攻击他！"],["太棒了！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["我们一定要先于索伦森找到泰坦石！战神联盟，这里就交给你们了！"],["等你们的好消息！"]);
         TaskDiaLogManager.single.playStory([mod0,mod1,mod2,mod3,mod4],function():void
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
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["是奥斯卡！那这个黑影是？"],["快离开这里！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["魔石精灵逃出了无间境地！他们已经联合海盗开始疯狂的开采泰坦石！"],["可恶的海盗！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我们绝对不能眼睁睁看着他们为非作歹！"],["先锋队永不退缩！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BINGHUN,["魔石精灵都出现了！看来，大家都势必要得到泰坦石了"],["不管这些！"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BINGHUN,[MainManager.actorInfo.formatNick + "我们先把海盗打走！不能让他们肆意开采能源！"],["我同意！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["虽然赶走了海盗集团，但是他们一定还会再来的！而且魔石精灵已经出现了。估计前途坎坷啊！"],["没事的！"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,[MainManager.actorInfo.formatNick + "，放心吧！我们赛尔先锋队从不退缩！我们先把情况报告给船长吧！"],["好的！"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1896_2",true]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11],function():void
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
         MapManager.changeMap(974);
      }
   }
}
