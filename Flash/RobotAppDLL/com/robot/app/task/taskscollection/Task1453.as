package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1453;
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
   
   public class Task1453
   {
      
      private static const MAP_ID:int = 81;
      
      private static const MAP_LOCAL_ID:int = 10289;
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1453()
      {
         super();
      }
      
      private static function get taskMc() : MovieClip
      {
         return _map.conLevel["task1453mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1453.TASK_ID);
      }
      
      public static function initForMap10289(param1:BaseMapProcess) : void
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
         TasksManager.getProStatusList(TaskController_1453.TASK_ID,function(param1:Array):void
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
         var story:Array = [[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["恩恩，的确是强，不过现在麻烦的事情又来了，少主缪斯好像已经下定决心，她知道自己该怎么做了！"],["真的吗？难道是要重返天蛇星了？"]]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["不…经过上次和天蛇星少主的谈话，我不难发现她内心的自责，解铃还须系铃人…她决定用自己的行动去感化杰洛里他们。"],["什么…感化？这有用吗？"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1453_1",false]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["我不能再回避这个问题了，既然是我将天蛇星毁于一旦，那么我就该面对它，天蛇七魔将也应该再次回到我的身边！"],["可是，他们已经背叛你了啊！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["不…这不是背叛…这是无奈，我一定要去感化他们，如果没有他们的帮助，凭我一己之力是无法拯救天蛇星的！"],["少主你…"]]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["说的也对，现在事情已经发展到现在这个地步了，只有勇敢的面对，去解决！少主缪斯，赛尔号永远支持你！"],["那我们先和熊猫战将汇合吧！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1453_2",false]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1453.TASK_ID,TaskController_1453.TASK_STAGE_1,function(param1:Boolean):void
            {
               if(param1)
               {
                  MapManager.changeLocalMap(MAP_LOCAL_ID);
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
         story = [[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["泽拉斯你怎么带我来这里，不是说去找熊猫战将吗？"],["少主，熊猫战将在这里等候多时了！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["那我们赶快走吧！我不想让熊猫战将久等，回想起来已经很久没有相聚了！"],["赛尔，跟上！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,2,3,false]],[TaskStoryPlayer.DIALOG,[NPC.XIONGMAO,["少主，我来晚了！天蛇星的沦陷我也应该负有一定的责任！"],["快起来吧！熊猫战将！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["过往发生的一切可能都是天意，如果真是这样，我愿意接受惩罚！"],["不…少主，你只是被你的哥哥利用而已！"]]],[TaskStoryPlayer.DIALOG,[NPC.XIONGMAO,["我相信除了杰洛里，天蛇星还会陆续派出难对付的对手，目前来说我和泽拉斯的任务就是保护你！"],["还有我…你们别把我忘了！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,4,6,false]],[TaskStoryPlayer.DIALOG,[NPC.XIONGMAO,["好问题，这里是雪龙领主的巢穴，只有找到雪龙领主，我们才有可能前往天蛇星！"],["雪龙领主？"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["据说只有雪龙领主才知道天蛇星的具体位置，因为天蛇星每天都在变化，具体的位置连我们都不知道在哪里！"],["这也是我们目前唯一的希望！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["看来这些就是雪龙领主的龙蛋，大家千万小心啊！雪龙妈妈一定就在附近！"],["恩恩…小心为妙！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,7,"mc7"]],[TaskStoryPlayer.DIALOG,[NPC.XIONGMAO,["鹰眼，你到现在还执迷不悟？有我和泽拉斯在，你休想伤害她！"],null]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["大家住手，不要再用武力了！杰洛里，回到我们身边吧！你不应该这样！"],["少废话，想我背叛主人！没门！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["可恶…少主叫你回来是看得起你…你别太嚣张了！"],["缪斯，你成全我吧！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,8,9,false]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["鹰眼杰洛里，难道你忘记天蛇七魔将是为正义而存在的吗？为什么你要误入歧途！！为什么！"],["再见了…少主！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1453_3",true]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1453.TASK_ID,TaskController_1453.TASK_STAGE_2,function(param1:Boolean):void
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
         taskMc.gotoAndStop(9);
         story = [[TaskStoryPlayer.DIALOG,[NPC.XIONGMAO,["鹰眼，我不会放过你的…你居然如此丧心病狂！泽拉斯你好好的照顾少主！"],["可恶，我也要加入！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["不…你们这样只会让仇恨加深，我哥哥利用的就是这点，让你们互相残杀，最后得益的只会是别人！"],["杰洛里回来吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.JIELUOLI,["少主…可是我…已经无法回头了！请饶恕我的无知，今天无论如何都要完成我的计划…"],["鹰眼,你下的了手吗？"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,10,"mc10"]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["不好…难道是雪龙领主回来了？是谁在攻击鹰眼杰洛里呢？"],["还有另一个人！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["一定是他…0xff0000天生的伪装者—斯吉雅0xffffff，天蛇七魔将第五号人物！小心，他可能就在我们附近！"],["哈哈哈…果然是瞳之神能啊！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,11,"mc11"]],[TaskStoryPlayer.DIALOG,[NPC.JIELUOLI,["斯吉雅…你怎么来了，是谁派你来的！"],["这个你没必要知道！"]]],[TaskStoryPlayer.DIALOG,[NPC.JIELUOLI,["斯吉雅…你怎么来了，是谁派你来的！"],["这个你没必要知道！"]]],[TaskStoryPlayer.DIALOG,[NPC.SIJIYA,["既然你选择了叛变天蛇星如今的盟主，那么可就别怪我不念当前情了！"],["不好，杰洛里有危险！"]]],[TaskStoryPlayer.DIALOG,[NPC.SIJIYA,["我不会亲自动手的，既然你们来寻找雪龙领主的，那么就让它来解决你们！"],["你想干嘛？"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,12,"mc12"]],[TaskStoryPlayer.DIALOG,[NPC.XIONGMAO,["泽拉斯我看你还是带着少主离开这里吧！雪龙领主不是这么容易对付的！"],["我们走了你怎么办！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["熊猫战将…泽拉斯…我不会再丢下你们了，让我们一起战斗吧！"],["少主…领命！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,13,"mc13"]],[TaskStoryPlayer.DIALOG,[NPC.XUELONG,["你们竟敢趁我不在擅自闯入这里，还击碎我的龙蛋，不可饶恕！！"],["雪龙领主，你先听我们解释！"]]],[TaskStoryPlayer.DIALOG,[NPC.XUELONG,["解释什么，我看到的就是事实，我要你们补偿给我！"],["雪龙领主的实力强的惊人！"]]],[TaskStoryPlayer.DIALOG,[NPC.XIONGMAO,["有一个办法，如果谁能成为0xff0000雪龙领主的主人0xffffff，不过想要站在雪龙领主背上可不是一般的困难！"],["让我来试试！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1453.TASK_ID,TaskController_1453.TASK_STAGE_3,function(param1:Boolean):void
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
         taskMc.gotoAndStop(13);
         story = [[TaskStoryPlayer.FUL_MOVIE,["task_1453_4",true]],[TaskStoryPlayer.DIALOG,[NPC.XIONGMAO,["哇…太不可思议了！少主竟然征服了雪龙领主，这真的都是天意！"],["好棒哦！少主！"]]],[TaskStoryPlayer.DIALOG,[NPC.XUELONG,["想不到我寻找多时的主人竟然会是你，但是你为什么要击碎我的龙蛋呢？"],["不是我们干的！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["干这件事的另有其人，相信他很快就会再出现的！"],["我一定要他偿还！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,14,"mc14"]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["雪龙领主，只有你才知道如何前往天蛇星，你面前的正是天蛇星少主缪斯！"],["天蛇星少主？"]]],[TaskStoryPlayer.DIALOG,[NPC.XUELONG,["能作为天蛇星少主的坐骑，是我莫大的荣幸！天蛇星沦陷，如果少主何时想重返天蛇星，雪龙领主一定效劳！"],["太好了！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,15,16,false]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["杰洛里被斯吉雅带走，我们一定要继续追查下去！" + MainManager.actorInfo.formatNick + "，你先回赛尔号汇报吧！"],["一有消息我们会马上联系你的！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,17,"mc17"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["有了雪龙领主的帮助，我们离天蛇星更近了，但是那个天蛇星第五号斯吉雅会把杰洛里怎么样呢！"],["杰洛里…你要挺住啊！"]]]];
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
               TasksManager.complete(TaskController_1453.TASK_ID,TaskController_1453.TASK_STAGE_4);
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
