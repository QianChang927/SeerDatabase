package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class TyphoonStarCloudGuideController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _clickNum:int;
      
      private static var _taskId:int;
      
      private static var _currBoss:int;
      
      private static const EID1:int = 6144;
      
      private static const EID3:int = 6145;
      
      private static const BOSS_ID:int = 5521;
      
      private static const FOREVER_WIN_COUNT:int = 2610;
       
      
      public function TyphoonStarCloudGuideController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         _map = param1;
         disableAll();
         _map.conLevel["mcNpc"].addEventListener(MouseEvent.CLICK,onClick);
      }
      
      public static function destroy() : void
      {
         _map.conLevel["mcNpc"].removeEventListener(MouseEvent.CLICK,onClick);
         _map = null;
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var e:MouseEvent = param1;
         var name:String = String(e.target.name);
         if(name.substr(0,9) == "mangkeRed")
         {
            if(_taskId == 2)
            {
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
               {
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                  initTask2_2();
               });
               FightManager.fightNoMapBoss("芒克",BOSS_ID);
            }
         }
         else if(name.substr(0,6) == "mangke")
         {
            if(_taskId == 1)
            {
               NpcDialog.show(NPC.MANG_KE,["芒克！芒克！"]);
            }
         }
         else if(name == "shenmi" && _taskId == 2)
         {
            NpcDialog.show(NPC.SHEN_MI_REN_YUE,["你们先把这些被控制的芒克全部击败，再来询问我吧！"],["好的。"]);
         }
         else if(name == "stele")
         {
            _map.conLevel["mcNpc"]["stele"].visible = false;
            ModuleManager.showAppModule("TyphoonStarCloudGuideCallPanel");
         }
         else if(name.substr(0,5) == "stone")
         {
            index = int(name.replace("stone",""));
            onClickStone(index);
         }
      }
      
      private static function showBoss() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < _currBoss)
         {
            MapManager.currentMap.controlLevel["mcNpc"]["mangkeRed" + _loc1_].visible = false;
            _loc1_++;
         }
      }
      
      public static function doTask1() : void
      {
         _taskId = 1;
         _map.conLevel["mcNpc"]["shenmi"].visible = false;
         if(BitBuffSetClass.getState(22934))
         {
            if(BitBuffSetClass.getState(22935))
            {
               enableStones();
            }
            else
            {
               enableStele(true);
               task1_2();
            }
         }
         else
         {
            task1_1();
         }
      }
      
      private static function task1_1() : void
      {
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["经过一个星期的活动，我们算是在飓风星云的着陆点风语之森初步站稳了脚步，接下来就要向着下一块大陆进发啦！"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["可是我们也只是初步了解了身边的这块森林，对于飓风星云的其他地方完全没有概念呀！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["我听闻在飓风星云流传着一个传说，有一位无所不知的先知，可以为无知的人们解答疑惑。这位先知行走于飓风星云各个角落，但是在风语之森，他留下了固定的召唤方式。"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["这么巧，我们就在风语之森呢！看来可以通过它了解整个飓风星云了！"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["好，我们就在这四周找找看吧，说不定就有什么记号指引我们找到它呢！"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["嗯！"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6],function():void
         {
            BitBuffSetClass.setState(22934,1);
            enableStele(true);
         });
      }
      
      private static function task1_2() : void
      {
         var mod1:TaskMod;
         var mod2:TaskMod;
         var mod3:TaskMod;
         var mod4:TaskMod;
         enableStele(false);
         mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["这块石碑记载的一定就是那位先知的召唤方式了！"]);
         mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["“触摸神之石板，解锁尘封之印”……这“神之石板”是什么？"]);
         mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["你们看那里有几块大石头，可能就是它们！"]);
         mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["好，我们去触摸一下试试！"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4],function():void
         {
            BitBuffSetClass.setState(22935,1);
            enableStones();
         });
      }
      
      private static function task1_3() : void
      {
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["是谁……在召唤我……"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["说出你们的疑惑，我将驱散你们心中的迷雾……咦，是你们？"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["咦？原来是你？"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["哈哈，真是巧了，原来传说中的先知就是你呀。"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["咳！这说来话长了。那么，你们需要我帮助你们什么吗？"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["我们希望您能指引我们接下来的行动方向。我们对飓风星云一无所知，接下来我们该往哪儿走呢？"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["原来如此。你们且听我细说。"],["我们洗耳恭听。"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7],function():void
         {
            KTool.doExchange(EID1);
            ModuleManager.showAppModule("TyphoonStarCloudGuideMainPanel");
         });
      }
      
      private static function disableAll() : void
      {
         _map.conLevel["mcNpc"]["bg"].visible = false;
         _map.conLevel["mcNpc"]["stele"].visible = false;
         var _loc1_:int = 0;
         while(_loc1_ < 3)
         {
            _map.conLevel["mcNpc"]["stone" + _loc1_].visible = false;
            _map.conLevel["mcNpc"]["light" + _loc1_].visible = false;
            _loc1_++;
         }
      }
      
      private static function enableStele(param1:Boolean) : void
      {
         MapManager.currentMap.controlLevel["mcNpc"]["stele"].visible = param1;
      }
      
      private static function enableStones() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < 3)
         {
            MapManager.currentMap.controlLevel["mcNpc"]["stone" + _loc1_].visible = true;
            _loc1_++;
         }
      }
      
      private static function enableMangke() : void
      {
         MapManager.currentMap.controlLevel["mcNpc"].gotoAndStop(2);
      }
      
      private static function onClickStone(param1:int) : void
      {
         var index:int = param1;
         ++_clickNum;
         _map.conLevel["mcNpc"]["stone" + index].visible = false;
         KTool.hideMapAllPlayerAndMonster();
         NpcController.npcVisible = false;
         LevelManager.iconLevel.visible = false;
         MapObjectControl.hideOrShowAllObjects(false);
         MapManager.currentMap.controlLevel["mcNpc"].visible = false;
         ResourceManager.getResource(ClientConfig.getActiveUrl("typhoon_star_cloud_guide_1"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            MapManager.currentMap.controlLevel.addChild(mc);
            if(_clickNum < 3)
            {
               AnimateManager.playMcAnimate(mc,index + 1,"mc" + (index + 1),function():void
               {
                  MapManager.currentMap.controlLevel.removeChild(mc);
                  KTool.showMapAllPlayerAndMonster();
                  NpcController.npcVisible = true;
                  LevelManager.iconLevel.visible = true;
                  MapObjectControl.hideOrShowAllObjects(true);
                  MapManager.currentMap.controlLevel["mcNpc"].visible = true;
                  _map.conLevel["mcNpc"]["bg"].visible = true;
                  _map.conLevel["mcNpc"]["light" + index].visible = true;
               });
            }
            else
            {
               AnimateManager.playMcAnimate(mc,4,"mc4",function():void
               {
                  task1_3();
                  MapManager.currentMap.controlLevel.removeChild(mc);
                  KTool.showMapAllPlayerAndMonster();
                  NpcController.npcVisible = true;
                  LevelManager.iconLevel.visible = true;
                  MapObjectControl.hideOrShowAllObjects(true);
                  MapManager.currentMap.controlLevel["mcNpc"].visible = true;
                  disableAll();
                  _map.conLevel["mcNpc"]["shenmi"].visible = true;
               });
            }
         });
      }
      
      public static function doTask2() : void
      {
         _taskId = 2;
         if(BitBuffSetClass.getState(22936))
         {
            initTask2_2();
         }
         else
         {
            task2_1();
         }
      }
      
      private static function initTask2_2() : void
      {
         KTool.getForeverNum(FOREVER_WIN_COUNT,function(param1:int):void
         {
            _currBoss = param1;
            enableMangke();
            showBoss();
            if(_currBoss == 4)
            {
               task2_2();
            }
         });
      }
      
      private static function task2_1() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         NpcController.npcVisible = false;
         LevelManager.iconLevel.visible = false;
         MapObjectControl.hideOrShowAllObjects(false);
         MapManager.currentMap.controlLevel["mcNpc"].visible = false;
         ResourceManager.getResource(ClientConfig.getActiveUrl("typhoon_star_cloud_guide_2"),function(param1:MovieClip):void
         {
            var mod1:TaskMod;
            var mod2:TaskMod;
            var mod3:TaskMod;
            var mod4:TaskMod;
            var mod5:TaskMod;
            var mod6:TaskMod;
            var mc:MovieClip = param1;
            MapManager.currentMap.controlLevel.addChild(mc);
            mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["原来如此。你们且听我细说。"]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["嗯？有杀气！"]);
            mod3 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,1,"mc1"]);
            mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["看来有人对你们敌意很大呢。他们在这里设下了机关，一旦有人召唤我，就会控制这些芒克攻击召唤者。"]);
            mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["你们召唤的仅仅是我的投影，我是无法使用力量的。如果你们想要问我些什么，还是先把这些芒克解决了吧。"]);
            mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["哼，一定是海盗！赛小息，卡璐璐，我们先把这些芒克全部击败，再来询问这位向导吧！"],["好的。"]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6],function():void
            {
               KTool.showMapAllPlayerAndMonster();
               NpcController.npcVisible = true;
               LevelManager.iconLevel.visible = true;
               MapObjectControl.hideOrShowAllObjects(true);
               MapManager.currentMap.controlLevel["mcNpc"].visible = true;
               MapManager.currentMap.controlLevel.removeChild(mc);
               BitBuffSetClass.setState(22936,1);
               enableMangke();
            });
         });
      }
      
      private static function task2_2() : void
      {
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["呼……搞定了。"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["这些被控制的芒克们还真是难缠呢。"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["怎么感觉自从进入泰坦星域，我们就一直在打芒克呀？"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["你这么一说，好像还真是的……"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4],function():void
         {
            ModuleManager.showAppModule("TyphoonStarCloudGuideMainPanel");
         });
      }
      
      public static function doTask3() : void
      {
         _taskId = 3;
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["哼，这些可恶的海盗，想不到他们比我们先一步登录飓风星云。"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["从他们最近的行动来看，他们一定又在密谋着什么，所以处处隐藏自己，也阻碍着我们在泰坦星域的行动。"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["我感觉这事情没那么简单。他们与我们一样，都是从银河星域到达的这里，在此之前，泰坦一直没有打开过星际之门。"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["可是你们不觉得奇怪吗？明明是同时穿越的星际之门，可是他们的行为明显更加有条有理，安排得当。这也是他们总能在我们之前做下布置的原因。"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["（低语）呵呵……看来又是那几个老家伙……"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["因此，我怀疑，海盗们在进入了泰坦星域之后，得到了本地黑暗势力的帮助！"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["…………"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["你们怎么不说话？"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["哇……哦……！"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["阿铁打居然在做分析耶，而且好像很有道理的样子！"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["……哼！你们也太看不起我了！"]);
         var mod12:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["不过正是因为现在的海盗的强势，我们才更需要得到清晰的指引。先知先生，我们真的非常需要你的帮助！"]);
         var mod13:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["好说。每一位心底善良的人，都会得到我的帮助。你们能够召唤出我来，就证明你们不是邪恶之辈，我会尽力解答你们的疑惑的。"]);
         var mod14:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["谢谢您了！我们最想知道的就是，这片飓风星云是什么样的？"]);
         var mod15:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["飓风星云大概是泰坦星域的所有星云中最靠近星际之门的一片星云，因此你们率先在这里登录了。"]);
         var mod16:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["算上现在的这片风语之森，飓风星云一共有5片大陆。每片大陆都有各自的风景特色，这也是整个泰坦星域中星云的特点。"]);
         var mod17:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["5片大陆分别是：风语之森、坠雷山崖、痛苦沼泽、上古雪峰以及毁灭之海。这些大陆和大陆之间是相连的，你们在通过连接点时可以清楚地感受到大陆环境的变化。"]);
         var mod18:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["哇哇哇！大陆上居然有山有海有森林有沼泽吗？这简直是太震撼了！"]);
         var mod19:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["没错，很快你就会自己看到这种迥异的美景的。靠近风语之森的两片大陆分别是坠雷山崖和痛苦沼泽，你们可以自由选择你们的探索方向。"]);
         var mod20:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["我想去沼泽冒险！"]);
         var mod21:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["我想去山顶看日出！"]);
         var mod22:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["哈哈……你们的愿望都很有诱惑力，但是你们要注意，每一片大陆都有一位守护者，你们可千万不要惹怒了他们。"]);
         var mod23:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["守护者？哦……我们碰到的奥德迪尔应该就是你所说的守护者吧？"]);
         var mod24:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["是的，想不到你们已经碰到过他了。"]);
         var mod25:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["他真的很强大，单打独斗，我不是他的对手！"]);
         var mod26:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["哟，想不到你还会服输？这真是太难得了！"]);
         var mod27:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["你就别嘲笑我了！"]);
         var mod28:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["先知先生，谢谢您告诉了我们这么多！"]);
         var mod29:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["客气了，如果需要帮助，我会尽量帮助你们的。"]);
         var mod30:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["有了您的指引，我们对飓风星云总算是有了初步的了解。这样我们在之后的探险中才能从容不迫。"]);
         var mod31:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["哼，飓风星云的黑暗势力们，从这一刻起，我必定会将你们一一粉碎！尽管放马过来吧！"],["继续探险吧，孩子们！"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13,mod14,mod15,mod16,mod17,mod18,mod19,mod20,mod21,mod22,mod23,mod24,mod25,mod26,mod27,mod28,mod29,mod30,mod31],function():void
         {
            KTool.doExchange(EID3);
            ModuleManager.showAppModule("TyphoonStarCloudGuideMainPanel");
         });
      }
   }
}
