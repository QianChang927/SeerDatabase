package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1462;
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
   
   public class Task1462
   {
      
      private static const MAP_ID:int = 82;
      
      private static const MAP_LOCAL_ID:int = 10290;
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1462()
      {
         super();
      }
      
      private static function get taskMc() : MovieClip
      {
         return _map.conLevel["task1462mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1462.TASK_ID);
      }
      
      public static function initForMap10290(param1:BaseMapProcess) : void
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
         TasksManager.getProStatusList(TaskController_1462.TASK_ID,function(param1:Array):void
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
         var story:Array = [[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["恐怕这次是真的，为了调查这件事情，天蛇星少主缪斯和泽拉斯已经出发，据我们的探测恶灵兽这次苏醒的地点是卡兰星系！"],["什么，居然跑到卡兰星系了！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["我已经命令赛小息他们通知战神联盟的成员，现在你赶快去卡兰星系和缪斯她们汇合吧！我担心事情比我想象要严重！"],["恩恩，我这就去！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1462_1",false]],[TaskStoryPlayer.DIALOG,[NPC.WEIBING_1,["船长，发现了天蛇星少主和泽拉斯的踪迹，同时我们还发现了一颗新星球，根据资料显示它的0xff0000名字叫—米斯特瑞星0xffffff！"],["什么，新星球！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["新星球无缘无故的出现，一定有事发生！" + MainManager.actorInfo.formatNick + "赶快动身吧！说不定少主缪斯和泽拉斯需要你的帮助！"],["恩恩，明白了！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["可恶的恶灵兽，就算你再苏醒100次，我也会将你送入你该去的地方！"],["看我的吧！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1462_2",false]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1462.TASK_ID,TaskController_1462.TASK_STAGE_1,function(param1:Boolean):void
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
         story = [[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["那个黑影…好熟悉！难道是…"],["这不可能！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["竟然遇上了，那么看上去是逃不掉了！少主，看清楚吧！这就是天蛇星盟主，你的哥哥！"],["为什么…为什么要让我们现在就相遇！"]]],[TaskStoryPlayer.DIALOG,[NPC.HEIYING_MIUSI_GE,["哼哼...愚蠢的妹妹，没想到我们会在这里相遇，看来这一切都是天意啊！"],["你们这是在干什么！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,2,3,false]],[TaskStoryPlayer.DIALOG,[NPC.SIJIYA,["泽拉斯，识相的就速速拜倒在盟主面前，说不定你的忏悔可以改变自己的命运！"],["不可能，天蛇星只有一个盟主！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["你们无恶不作，为了获得强大的星际力量，竟然…竟然连自己的伙伴都不放过，你们不可饶恕！"],["泽拉斯，你可别忘了你的能力是谁赋予你的！"]]],[TaskStoryPlayer.DIALOG,[NPC.HEIYING_MIUSI_GE,["杰洛里、斯吉亚…我不想有人破坏我的计划，给我干掉他！"],["遵命！盟主！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["泽拉斯，坚持住啊！我和少主这就来救你！"],["少主缪斯，咱们一起上吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["我最不能容忍的事情就是伤害我至亲的伙伴，即使是自己最亲的家人，我都不会饶恕！"],["快放开我的朋友！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,5,6,false]],[TaskStoryPlayer.DIALOG,[NPC.HEIYING_MIUSI_GE,["哈哈哈…缪斯你的内心还是太脆弱了，这样你是没办法复仇的！看来你是阻止不了我了，恶灵兽的能量我先带走了！"],["少主，时间不多了，不能让他带走恶灵能量！"]]],[TaskStoryPlayer.DIALOG,[NPC.HEIYING_MIUSI_GE,["你们觉得阻止得了我吗？杰洛里、斯吉亚这里就交给你们了，知道该怎么做吗？"],["哼哼…好久没有运动了！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,7,"mc7"]],[TaskStoryPlayer.DIALOG,[NPC.SIJIYA,["太好了，我很早就想领教一下瞳之神能的威力，缪斯你准备好了吗？"],["可恶的家伙！"]]],[TaskStoryPlayer.DIALOG,[NPC.SIJIYA,["鹰眼杰洛里，难得和你一起合作，你可要尽力哦！可别拖了我的后腿！"],["斯吉亚，你这家伙！"]]],[TaskStoryPlayer.DIALOG,[NPC.JIELUOLI,["少主对不起了，你就成全我吧！如果有来生，我一定会做个好伙伴…好部下，一生跟随你！"],["接招吧！少主！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,8,9,false]],[TaskStoryPlayer.DIALOG,[NPC.JIELUOLI,["不好…斯吉亚！战神联盟马上就要现身了，这下局势可要大逆转了！"],["战神联盟…我可不怕他们！"]]],[TaskStoryPlayer.DIALOG,[NPC.SIJIYA,["杰洛里…你可别忘了，我可是会隐忍术的！你还是担心自己吧！"],["你这家伙居然只关心自己！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,10,"mc10"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1462.TASK_ID,TaskController_1462.TASK_STAGE_2,function(param1:Boolean):void
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
         taskMc.gotoAndStop(10);
         story = [[TaskStoryPlayer.DIALOG,[NPC.LEIYI,["喂…对面的！现在你们还想动手吗？你可要知道我们不是一般的对手！"],["战神联盟…你们来的太及时了！"]]],[TaskStoryPlayer.DIALOG,[NPC.GAIYA,["关键时刻还是要看我盖亚的…大伙也去一旁休息吧！10秒之内我一定让他们享受比泽拉斯100倍的痛苦！"],["战神果然霸气啊！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,[MainManager.actorInfo.formatNick + "，你们先把泽拉斯带走吧！看上去他撑不了多久了…"],["恩…伙伴们，我们先把泽拉斯带走！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,11,"mc11"]],[TaskStoryPlayer.DIALOG,[NPC.GAIYA,["喂…红衣服的…你到底怎么说，需要我们的帮助吗？还是说你一个人就足够了！"],["这里是天蛇星的家事，不需要你们插手！"]]],[TaskStoryPlayer.DIALOG,[NPC.GAIYA,["哼…看上去好倔强的样子，你一个人真的可以吗？我看还是让我战神来帮你吧！"],["盖亚…你就随她吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["跟你说了，不需要你们的帮助，没听懂吗！走开！！！"],["哇！果然比盖亚还要霸气！（卡修斯暗语）"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,12,"mc12"]],[TaskStoryPlayer.DIALOG,[NPC.SIJIYA,["打就打，磨叽什么！我是不会退缩的，即使你们再多的人，我也会在不知不觉中干掉你们！"],["别着急…会开始的！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["鹰眼杰洛里…我再问你最后一遍，你到底是留在我的身边还是一意孤行继续错下去！"],["杰洛里，你自己想想清楚吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.SIJIYA,["杰洛里…如果你敢过去，我现在就让你和泽拉斯一样！你该知道背叛盟主的后果是什么！即使你侥幸的活着，你也会被我们不断的追杀！"],["少主…我！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,13,"mc13"]],[TaskStoryPlayer.DIALOG,[NPC.SIJIYA,["哈哈哈…果然是天蛇七魔将中最狡猾最有心计的杰洛里！好样的，你的所作所为我一定会如实禀报盟主的！"],["等着嘉奖吧！杰洛里！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["鹰眼…你这个卑鄙小人，少主缪斯不计前嫌如此的感化你，你却不知悔改还变本加厉！像你这样的人不可饶恕！"],["你踩到我们的底线了！（战神联盟异口同声）"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,14,"mc14"]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["既然这样，那我也就没有什么后顾之忧了，我缪斯就要在这里清理门户！"],["我缪斯可不会手软了！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1462.TASK_ID,TaskController_1462.TASK_STAGE_3,function(param1:Boolean):void
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
         taskMc.gotoAndStop(14);
         story = [[TaskStoryPlayer.FUL_MOVIE,["task_1462_3",true]],[TaskStoryPlayer.DIALOG,[NPC.LEIYI,["缪斯…你这样下去不是办法…不如加入我们战神联盟吧！我们可都是正义的使者，维护宇宙和平是我们的职责！"],["加入你们！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["我为什么要加入你们，我是天蛇星的少主…我不会加入任何组织，包括你们！"],["缪斯…你也太嚣张了吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.GAIYA,["气死我了，你别忘了！如果刚刚不是我们出手相救，你能对付得了他们吗？"],["你们不出手我一样可以！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,15,16]],[TaskStoryPlayer.DIALOG,[NPC.GAIYA,["你这家伙居然敢挑衅我…看我不好好教训你！"],["等等…盖亚！"]]],[TaskStoryPlayer.DIALOG,[NPC.LEIYI,["少主缪斯…我是有诚意的想你加入战神联盟，既然你有自己的想法…没关系…但是告诉我如何才能让你加入！"],["除非！！！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["除非能证明你们的实力在我之上…那么我也许还会考虑一下！"],["好…一言为定！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,17,18]],[TaskStoryPlayer.DIALOG,[NPC.LEIYI,["为了和你成为伙伴和战友…也为了能够帮助你重返天蛇星…我们四个正式向你发起挑战！"],["希望到时你能实现你的诺言！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["缪斯加入战神联盟…对哦！这个办法好，看来这次战神联盟是来真的了！"],["加油啊！战神联盟！"]]],[TaskStoryPlayer.DIALOG,[NPC.GAIYA,["让你知道我们的厉害…没有谁可以和战神联盟抗衡，邪恶势力不能…你也不能！"],["那就来试试吧！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,19,"mc19"]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["我还有很多事要做，时间有限…你们最好是速战速决！"],["这下精彩了！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["战神联盟挑战天蛇星少主缪斯…我一定要把这个消息告诉飞船上的所有小赛尔！"],["这可是劲爆消息啊！"]]]];
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
               TasksManager.complete(TaskController_1462.TASK_ID,TaskController_1462.TASK_STAGE_4);
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
