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
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.geom.Rectangle;
   
   public class TaskController_1916
   {
      
      public static const TASK_ID:int = 1916;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      public static const MAP_LOCAL_ID1:int = 10435;
      
      public static const MAP_LOCAL_ID2:int = 10436;
      
      public static const MAP_LOCAL_ID3:int = 10437;
      
      public static const MAP_LOCAL_ID4:int = 10438;
      
      private static var panel:AppModel;
      
      private static var attackMax:int = 4;
      
      public static var attackIndex:int = 0;
      
      public static var beShooter:Array;
       
      
      public function TaskController_1916()
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
               mod0 = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
               list.push(mod0);
            }
            taskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,[MainManager.actorInfo.formatNick + "，到底发生了什么事情？为什么始终没办法与赛尔先锋队取得联系！"],["对不起！"]);
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
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我们太大意了！赛小息他们……他们在创世广场被捕了！就是那个血手，可怕的血手——阿斯狄！"],["原来是他！"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,[MainManager.actorInfo.formatNick + "，立即寻求战神联盟的帮助！我现在与贾斯汀站长商量营救策略！"],["是！保证完成任务！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1916_1",true]);
         TaskDiaLogManager.single.playStory([mod0,mod1,mod2,mod3,mod4],function():void
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
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ARUIBOSI,["莫迪西斯！我们为什么要加固神域结界？你要知道我们这样只会帮助索伦森得到更充足的时间恢复能量"],["也是给我们争取时间！"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MODIXISI,["我们的神域结界不仅外人无法进来，里面的人也出不去！"],["要囚禁索伦森？"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALUONASI,["这样，如果索伦森没有泰坦石，那么这些日子恢复的能量也是微乎其微的。"],["真是聪明！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MODIXISI,["风暴之神果然名不虚传啊！这样我们就可以随便操纵外面的情况了！当然，仅靠血手—阿斯狄是不够的！"],["难道……"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MODIXISI,["绝情女——科塔娜！别来无恙！"],["还好！"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KETANA,["没想的你居然将我召唤出无间境地！看来，奥斯卡饶不了你的！"],["他自身难保！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MODIXISI,["无间境地那么多满是仇恨的精灵，他已经无暇顾及到这里了！召唤你出来是有任务交给你！"],["任务？"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MODIXISI,["单纯依靠阿斯狄，是不可能完成任务的！我希望有你的帮助！"],["好啊！"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MODIXISI,["总比待在这里，等待着索伦森爆发那天，让我们灰飞烟灭的好！"],["你害怕了？"]);
         var mod12:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["传说中的毁灭之神居然也有害怕的一天！哈哈哈！你以为你们的结界可以束缚住我？"],["什么？"]);
         var mod13:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation4"]);
         TaskDiaLogManager.single.playStory([mod0,mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13],function():void
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
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASIDI,["哇！我想是谁？这不是诅咒之子——卡修斯嘛！可惜，你的能量不稳定啊！"],["击败你足够了！"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIUSI_WHITE,["你把赛小息抓到哪里了？请你快放了他们！这样，以往的恩怨一笔勾销！"],["可真是天真啊！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASIDI,["小孩子，回去看守自己的怀特星吧！外面太危险了，你这么单纯，你师父知道吗？"],["可恶！"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我一定要救出赛小息！他们是我的队友，是我最好的伙伴！"],["那就用实力来说话！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["盖亚，你来得太及时了！快帮我们救出赛小息啊！"],["战神的确强大！"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASIDI,["不过想要救赛小息，恐怕不可能了！你们不可能找到他们！"],["可恶！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["你们这群为非作歹、唯恐天下不乱的精灵，我要让你们在这个世界上消失！"],["那要看你的实力了！"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["可恶！被他们给跑了!"],["米咔米咔！"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["对！我们先去救赛小息他们吧！"],["我知道我知道！"]);
         var mod12:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOXI,["就在创世广场旁边的风暴山涧！阿斯狄把他们绑架到那里了！你们快去吧！"],["立即出发！"]);
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
         beShooter = [false,false,false,false];
         var mod0:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,[MainManager.actorInfo.formatNick + "为什么会这样？"],["让我试一试"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我想可能需要我们赛尔号的射击才能解除封印吧！"],["（点击射击，解除封印）"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE_STATIC_VIEW,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         TaskDiaLogManager.single.playStory([mod0,mod1,mod2,mod3],function():void
         {
            MainManager.selfVisible = true;
            AimatController.continuous = 4;
            AimatController.addEventListener(AimatEvent.PLAY_END,onPlayEndHandler);
         });
      }
      
      private static function onPlayEndHandler(param1:AimatEvent) : void
      {
         var _loc7_:Boolean = false;
         var _loc2_:Rectangle = new Rectangle(242,291,69,78);
         var _loc3_:Rectangle = new Rectangle(317,261,61,70);
         var _loc4_:Rectangle = new Rectangle(591,284,80,72);
         var _loc5_:Rectangle = new Rectangle(658,353,80,78);
         var _loc6_:DisplayObjectContainer = MapManager.currentMap.controlLevel["animationContainer"]["animation2"] as DisplayObjectContainer;
         if(beShooter[0] == false && _loc2_.containsPoint(param1.info.endPos))
         {
            beShooter[0] = true;
            MovieClip(_loc6_["actor1"]).gotoAndPlay(2);
            --AimatController.continuous;
            ++attackIndex;
         }
         else if(beShooter[1] == false && _loc3_.containsPoint(param1.info.endPos))
         {
            beShooter[1] = true;
            MovieClip(_loc6_["actor2"]).gotoAndPlay(2);
            --AimatController.continuous;
            ++attackIndex;
         }
         else if(beShooter[2] == false && _loc4_.containsPoint(param1.info.endPos))
         {
            beShooter[2] = true;
            MovieClip(_loc6_["actor3"]).gotoAndPlay(2);
            --AimatController.continuous;
            ++attackIndex;
         }
         else if(beShooter[3] == false && _loc5_.containsPoint(param1.info.endPos))
         {
            beShooter[3] = true;
            MovieClip(_loc6_["actor4"]).gotoAndPlay(2);
            --AimatController.continuous;
            ++attackIndex;
         }
         for each(_loc7_ in beShooter)
         {
            if(!_loc7_)
            {
               return;
            }
         }
         AimatController.removeEventListener(AimatEvent.PLAY_END,onPlayEndHandler);
         MainManager.selfVisible = false;
         scene4Last();
      }
      
      private static function scene4Last() : void
      {
         var mod0:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["没想到幕后黑手是你！快放了赛小息他们！不然我们不客气了！"],["好大的口气！"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["我可不是什么幕后黑手，我对你们这些铁皮人不感兴趣！不过，我倒是很期待你所谓的不客气是什么？"],["可恶！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["没想到你居然敢从魔域之巅出来。既然出来了，那今天就是你的末日！"],["就凭你们？"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1916_2",true]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation5"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["太棒啦！感谢谱尼出手相助，索伦森必定受到了重创！赛小息，我来救你们了！"],["大家平安就好！"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.PUNI,["受赛尔号罗杰船长的委托，来此与大家对抗敌人！也算是顺利完成任务。创世兵魂，好久不见！"],["好久不见！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHUANGSIBINGHUN,["感谢你将圣光之气注入创世圣剑，才得以击败索伦森！可是，如果圣光之气的能量被索伦森吸收，后果不堪设想！"],["那怎么办？"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我们快回到赛尔号飞船，把现在的情况汇报给罗杰船长吧！"],["加油吧！勇敢的赛尔！"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_1916_3",true]);
         TaskDiaLogManager.single.playStory([mod0,mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10],function():void
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
         MapManager.changeMap(71);
      }
   }
}
