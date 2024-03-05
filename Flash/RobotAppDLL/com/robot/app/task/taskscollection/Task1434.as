package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1434;
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
   
   public class Task1434
   {
      
      private static const MAP_ID:int = 79;
      
      private static const MAP_LOCAL_ID:int = 10285;
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1434()
      {
         super();
      }
      
      private static function get taskMc() : MovieClip
      {
         return _map.conLevel["task1434mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1434.TASK_ID);
      }
      
      public static function initForMap10285(param1:BaseMapProcess) : void
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
         TasksManager.getProStatusList(TaskController_1434.TASK_ID,function(param1:Array):void
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
         var story:Array = [[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["自从你们上次从0xff0000帕索尔星0xffffff回来后，少主缪斯的情绪就开始这样了，我想她一定是想到了天蛇星的过去！"],["真不知道那里发生了什么！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["要不…我去看看少主缪斯吧！这样下去可不行，我们一定要帮助她，这是我们的责任！"],["恩恩，不过千万不要刺激到她！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1434_1",false]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["赛尔小分队，立刻前往帕索尔星支援，一定不能让少主缪斯出事！"],["遵命船长！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["出发吧！伙伴们，不管少主是去寻找先知还是有其他的行动，我们一定要守护她！"],["出发！赛尔先锋队！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1434_2",false]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1434.TASK_ID,TaskController_1434.TASK_STAGE_1,function(param1:Boolean):void
            {
               if(param1)
               {
                  MapManager.changeLocalMap(10285);
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
         story = [[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["缪斯…泽拉斯你们这是干嘛啊！有什么事情好好说，大家都是自己人，千万不要动手哦！"],["泽拉斯，你一定要阻止我吗？"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["少主…天蛇星的灾难已经发生，这些都是天意，你不要再责怪自己了，现在要做的就是如何拯救天蛇星！"],["但是我每天都做噩梦！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["我梦见因为自己的瞳之神能，将整个天蛇星毁了，而且天蛇七魔将也就此解散！"],["其实一切…所有的一切都是…"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,2,3,false]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["什么，少主缪斯的哥哥？难道是天蛇星的内战？再听下去看看，简直太不可思议了！"],["你是谁？为什么你知道这些！"]]],[TaskStoryPlayer.DIALOG,[NPC.LIFUSI,["还没自我介绍一下，在天蛇星成立初期，我就是天蛇星的先知，但是我很早遇见会有这么一天的到来，当时你的父亲不听我的忠告！"],["先知！！难道你就是杰洛里要找的先知？"]]],[TaskStoryPlayer.DIALOG,[NPC.LIFUSI,["这个我也知道，但是我知道这件事情迟早会发生，就像杰洛里就在我们附近一样，躲是躲不过的！"],["不会吧！杰洛里在附近！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,4,5,false]],[TaskStoryPlayer.DIALOG,[NPC.LIFUSI,["鹰眼杰洛里，你的内心充满着仇恨，和你相遇是迟早的事情，奉劝你一句，还是跟随少主缪斯吧！"],["哼…你要我跟随一个罪人？"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["混蛋…你居然说少主是罪人，你到底知不知道把天蛇星搞成现在这样的策划者是谁？"],["他说的很对，泽拉斯！是我的错！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["不…少主！这家伙不知道真相，况且先知已经说了，都是你哥哥一手造成的！"],["我哥哥，这不可能！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1434.TASK_ID,TaskController_1434.TASK_STAGE_2,function(param1:Boolean):void
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
         taskMc.gotoAndStop(5);
         story = [[TaskStoryPlayer.DLG_MOVIE,[taskMc,6,7,false]],[TaskStoryPlayer.DIALOG,[NPC.LIFUSI,["那时你的哥哥已经变了，他的瞳之神能已经到达一定的境界，可以说在天蛇星上没有谁是他的对手，包括你的父亲！"],["还记得当时…"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1434_3",false]],[TaskStoryPlayer.DIALOG,[NPC.LIFUSI,["事情就是这样，我早知道事情会发生，但是我还是无能为力！"],["对不起，少主！我有愧与天蛇星！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["先知你说的是真的吗？是哥哥夺走了天蛇星上的所有生命，为的就是开启他的瞳之超能？"],["是的，少主！千真万确！"]]],[TaskStoryPlayer.DIALOG,[NPC.JIELUOLI,["你们叙旧叙的差不多了吧！这次正好全部到齐了，我就在这里一并解决了你们！"],["赛小息快把少主带走！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,8,10,false]],[TaskStoryPlayer.DIALOG,[NPC.LIFUSI,["少主，别回去了！回去只会让你更伤心，快去寻找天蛇七魔将中的外域使者吧！只有找到他才有可能夺回天蛇星！"],["快走！少主！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,11,"mc11"]],[TaskStoryPlayer.DIALOG,[NPC.LIFUSI,["泽拉斯，当年是我没有好好守卫天蛇星，这次我将功补过，回去告诉少主，我会一直在这里等待她的召唤！"],["恩，我们一起合作吧！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1434_4",true]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["哇…这也太强大了吧！居然还能返老还童？"],["杰洛里还继续吗？"]]],[TaskStoryPlayer.DIALOG,[NPC.JIELUOLI,["太强大了，看来是我低估了这家伙，不能硬拼，还是从长计议！"],["先知，你的命是我的！等着吧！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,12,"mc12"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1434.TASK_ID,TaskController_1434.TASK_STAGE_3,function(param1:Boolean):void
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
         taskMc.gotoAndStop(12);
         story = [[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["先知，你怎么样了，没事吧！"],["呵呵，没事！"]]],[TaskStoryPlayer.DIALOG,[NPC.LIFUSI,["鹰眼杰洛里的实力的确很强，但是他对我先知的实力太低估了！"],["果然是先知啊！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,13,"mc13"]],[TaskStoryPlayer.DIALOG,[NPC.LIFUSI,["泽拉斯，你一定要协助少主缪斯，找到天蛇七魔将中的外域使者，他的特征就是熊猫人！"],["熊猫！！！"]]],[TaskStoryPlayer.DIALOG,[NPC.LIFUSI,["别小看他，他可是天蛇七魔将中最强大也是最可怕的，就连缪斯的哥哥都知道他的实力！"],["真的吗？那我如何找他！"]]],[TaskStoryPlayer.DIALOG,[NPC.LIFUSI,["寻找竹子吧！当你寻找到黄金竹子时，他就会出现！"],["黄金竹子？真的存在吗！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,14,"mc14"]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["看来我要先去前方打探一下，" + MainManager.actorInfo.formatNick + "少主缪斯就交给你了，帮我好好照顾她哦！"],["恩恩，我会的！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["看来我们还是有希望的，熊猫人已经1000年没有出现过了，他是天蛇七魔将中最为神秘的成员！"],["熊猫人，你等着我哦！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,15,"mc15"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["虽然这次没有阻击鹰眼杰洛里，但是我们已经得知天蛇星灾难的起因以及营救办法，这一次冒险也算是值得的！"],["该回去看看缪斯的状况了！"]]]];
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
               TasksManager.complete(TaskController_1434.TASK_ID,TaskController_1434.TASK_STAGE_4);
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
