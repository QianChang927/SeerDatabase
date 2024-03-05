package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1447;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1447
   {
      
      private static const MAP_ID:int = 80;
      
      private static const MAP_LOCAL_ID:int = 10286;
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1447()
      {
         super();
      }
      
      private static function get taskMc() : MovieClip
      {
         return _map.conLevel["task1447mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1447.TASK_ID);
      }
      
      public static function initForMap10286(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(!_map)
         {
            return;
         }
         if(taskState != TasksManager.ALR_ACCEPT)
         {
            destroy();
            return;
         }
         TasksManager.getProStatusList(TaskController_1447.TASK_ID,function(param1:Array):void
         {
            if(Boolean(param1[0]) && !param1[1])
            {
               KTool.hideMapAllPlayerAndMonster();
               _map.topLevel.visible = false;
               startState_2();
            }
            else if(Boolean(param1[1]) && !param1[2])
            {
               KTool.hideMapAllPlayerAndMonster();
               _map.topLevel.visible = false;
               startState_3();
            }
            else if(Boolean(param1[2]) && !param1[3])
            {
               KTool.hideMapAllPlayerAndMonster();
               _map.topLevel.visible = false;
               startState_4();
            }
            else
            {
               destroy();
            }
         });
      }
      
      public static function startState_1() : void
      {
         var storyPlayer:TaskStoryPlayer = null;
         var story:Array = [[TaskStoryPlayer.DIALOG,[NPC.SEER,["记得上次先知里弗斯说过，想要拯救天蛇星的危机，唯一的机会就是找到熊猫战将，还说他是天蛇七魔将中最为神秘的成员！"],["恩恩，和派特博士说的一样！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["我这里有一份关于熊猫战将的资料，这可是派特博士费了好大的精力整理出来的！"],["真的吗？快给我看看吧！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1447_1",false]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["哇…好强的对手啊！幸好熊猫战将不像兰帕德和杰洛里一样误入歧途，我们一定要尽快找到他，这样少主缪斯就又多了一位帮手！"],["恩恩，那你立刻去找赛小息他们吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["少主缪斯…我会想办法把她留在飞船上的，你们安心的去寻找隐秘的熊猫战将吧！"],["一定要完成任务！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["放心吧！船长，这次我们一定会圆满完成任务的！因为这是我们唯一的希望。"],["熊猫战将，你究竟在帕索尔星的何处啊？"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1447_2",false]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1447.TASK_ID,TaskController_1447.TASK_STAGE_1,function(param1:Boolean):void
            {
               if(param1)
               {
                  MapManager.changeLocalMap(10286);
               }
            });
         };
         storyPlayer.start();
      }
      
      private static function startState_2() : void
      {
         taskMc.gotoAndStop(1);
         taskMc.buttonMode = true;
         taskMc.addEventListener(MouseEvent.CLICK,startState_2Pro);
      }
      
      protected static function startState_2Pro(param1:MouseEvent) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var event:MouseEvent = param1;
         taskMc.removeEventListener(MouseEvent.CLICK,startState_2Pro);
         story = [[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,[MainManager.actorInfo.formatNick + "你怎么才来，我们已经发现了熊猫战将了，你看他好像就在那里！"],["真的吗？"]]],[TaskStoryPlayer.DIALOG,[NPC.KALULU,["但是很奇怪，为什么他一直在拔那根竹子呢？看上去不像是熊猫战将啊！"],["我们还是再观察一下吧！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,2,3,false]],[TaskStoryPlayer.DIALOG,[NPC.ATIEDA,["哎呀…时间来不及了，先去问问吧！我们要比杰洛里快一步才行！"],["走！！拜访熊猫战将去！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,4,5,false]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["请问上座的是天蛇七魔将的熊猫战将吗？我们需要你的支援，希望你能帮助我们！"],["咳咳咳…你们知道这是什么地方吗？"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["嗯嗯…看这里的环境，如果猜得没错的话，一定是您的修炼场！"],["哈哈，算你们有眼光！"]]],[TaskStoryPlayer.DIALOG,[NPC.LABUER,["既然你们知道这里是我修炼的地方，那么如果需要我帮助的话，你们就必须接受考验！"],["没问题，我们什么都愿意！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,6,"mc6"]],[TaskStoryPlayer.DIALOG,[NPC.LABUER,["你们的考验就是拔出中央的竹棍，你可别小看它哦！只有能拔出竹棍才说明你们和我有缘，那我也就愿意帮助你们！"],["这么简单，没问题！"]]],[TaskStoryPlayer.DIALOG,[NPC.LABUER,["哼哼…千万不要太过自信，等等你就会知道没这么简单了！"],["我都拔不出来，你们行吗？（心里暗语）"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,7,"mc7"]],[TaskStoryPlayer.DIALOG,[NPC.LABUER,["算了，算了！你们是不会成功的，看来你们的路途到此结束了！我还是再等等有缘人吧！"],["等等，我们还没有放弃呢！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,8,"mc8"]],[TaskStoryPlayer.DIALOG,[NPC.LABUER,["什么…你们居然拔动了竹棍，继续啊！就差一点点了！"],["大家有没有发现什么…"]]],[TaskStoryPlayer.DIALOG,[NPC.LABUER,["别管这么多，这里可是我的领域，你们就差一点就成功了！难道不想我帮助你们了吗？"],["我感觉一股很熟悉的能量！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,9,10,false]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["伙伴们，你们这样太冒险了，要知道在这里你们随时可能成为鹰眼杰洛里的目标！"],["泽拉斯，我们找到熊猫战将了！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["真的吗？在哪里，我也好久没见他了！"],["你看，宝座上的就是熊猫战将！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,11,12,false]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1447.TASK_ID,TaskController_1447.TASK_STAGE_2,function(param1:Boolean):void
            {
               if(param1)
               {
                  startState_3();
               }
            });
         };
         storyPlayer.start();
      }
      
      private static function startState_3() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         taskMc.gotoAndStop(12);
         story = [[TaskStoryPlayer.DIALOG,[NPC.LABUER,["怎么…你敢对身为熊猫战将的我产生质疑吗？"],["不不不…时间太久了，我的记忆有点…"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["可能由于太久没有见面的关系，熊猫战将平时也不在天蛇星，只有天蛇星遇到危险的时刻，他才会现身，但是…"],["这和我想象的也差太多了吧！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,13,14,false]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["泽拉斯，来不及了！我们还是先拔出那根竹棍再说吧！熊猫战将说只要我们能拔出竹棍，他就愿意帮助少主缪斯！"],["真的吗？那就赶快吧！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,15,"mc15"]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["不好，鹰眼杰洛里又来了，看来上次的遭遇我明显略显下风，不过这次幸好有熊猫战将在！"],["鹰眼杰洛里，你真是阴魂不散啊！"]]],[TaskStoryPlayer.DIALOG,[NPC.JIELUOLI,["废话少说…泽拉斯我对你没有任何兴趣，我这次的目标是熊猫战将，只要干掉他，你们就威胁不到天蛇星的“那位大人”了！"],["你以为凭一己之力可以做到吗？"]]],[TaskStoryPlayer.DIALOG,[NPC.JIELUOLI,["哼哼…那就再次抵御我的进攻吧！我说过不会让你们顺利走出这片竹林的！"],["接受我的洗礼吧！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,16,17,false]],[TaskStoryPlayer.DIALOG,[NPC.LABUER,["我的妈呀！这么强大，我可打不过，我还是先闪了，你们谁要当熊猫战将就谁当吧！我反正不想了…"],["什么！！你居然冒充熊猫战将！"]]],[TaskStoryPlayer.DIALOG,[NPC.JIELUOLI,["既然这样，你也走不了！冒充熊猫战将的罪名可比他们严重许多！！"],["不不不…我不是故意的，英雄饶命吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["笨蛋，你觉得他会原谅你吗？想办法快走吧！"],["哈哈哈…太晚了！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,18,"mc18"]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,19,"mc19"]],[TaskStoryPlayer.DIALOG,[NPC.JIELUOLI,["当我射出这最后一箭，你们就会在这片竹林中长眠，目睹这一切也算是我给你们的福利！"],["再见了…愚蠢的对手们！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1447_3",true]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1447.TASK_ID,TaskController_1447.TASK_STAGE_3,function(param1:Boolean):void
            {
               if(param1)
               {
                  startState_4();
               }
            });
         };
         storyPlayer.start();
      }
      
      private static function startState_4() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         taskMc.gotoAndStop(19);
         story = [[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["熊猫战将，你终于出现了！我们找你找的好辛苦啊！天蛇星发生巨变，希望你能和我一起帮助少主缪斯重返天蛇星！"],["恩，事情的经过先知已经告诉我了！"]]],[TaskStoryPlayer.DIALOG,[NPC.XIONGMAO,["既然少主缪斯需要我的帮助，况且天蛇星已经沦陷，我们身为天蛇七魔将就应该挺身而出！"],["没你想的这么简单！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["你也看到了，现在的天蛇七魔将已经四分五裂，这都是少主缪斯的哥哥所为，说不定陆续还会有对手抵达这里！"],["我就知道他不简单！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,20,21,false]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["熊猫战将，稍后我会带少主缪斯来你这里，她将会亲自接见你，你们已经好久没有见面了！"],["恩恩，有劳了！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,22,"mc22"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["熊猫战将，你实在是太强大了，我能和你学习功夫吗？"],["可以啊！不过不是现在！"]]],[TaskStoryPlayer.DIALOG,[NPC.XIONGMAO,["等我随少主缪斯将天蛇星成功解救出来后，我会亲自教你！"],["说话算数哦！"]]],[TaskStoryPlayer.DIALOG,[NPC.XIONGMAO,["天蛇七魔将一向言出必行，缪斯的哥哥…你的阴谋是不会得逞的，我很期待我们的再次见面！"],["天蛇星的未来属于我们！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,23,"mc23"]],[TaskStoryPlayer.DIALOG,[NPC.XIONGMAO,["以后还是小心为妙，在这里可不能儿戏，我想你也没地方可以去，就留在这里为我守卫这片竹林！"],["真的可以！"]]],[TaskStoryPlayer.DIALOG,[NPC.XIONGMAO,["真的可以啊！正好我也好有个伴嘛！啊哈哈哈！"],["果然是一代宗师啊！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,24,"mc24"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["看来我该去修炼一下了，否则就跟不上熊猫战将和泽拉斯的步伐了！"],["修炼再次开始！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            startState_4End();
         };
         storyPlayer.start();
      }
      
      private static function startState_4End() : void
      {
         KTool.showMapAllPlayerAndMonster();
         _map.topLevel.visible = true;
         destroy();
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            var e:MapEvent = param1;
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            ModuleManager.showModule(ClientConfig.getTaskModule("TaskMainTotalComplete"),"正在打开...",function():void
            {
               TasksManager.complete(TaskController_1447.TASK_ID,TaskController_1447.TASK_STAGE_4);
            });
         });
         MapManager.changeMap(MAP_ID);
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            if(MAP_LOCAL_ID == MapManager.currentMap.id)
            {
               DisplayUtil.removeForParent(taskMc);
            }
            _map = null;
         }
      }
   }
}
