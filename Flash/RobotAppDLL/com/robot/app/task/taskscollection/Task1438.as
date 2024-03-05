package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1438;
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
   
   public class Task1438
   {
      
      private static const MAP_ID:int = 78;
      
      private static const MAP_LOCAL_ID:int = 10281;
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1438()
      {
         super();
      }
      
      private static function get taskMc() : MovieClip
      {
         return _map.conLevel["task1438mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1438.TASK_ID);
      }
      
      public static function initForMap10281(param1:BaseMapProcess) : void
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
         TasksManager.getProStatusList(TaskController_1438.TASK_ID,function(param1:Array):void
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
         var story:Array = [[TaskStoryPlayer.DIALOG,[NPC.SHIPER,[MainManager.actorInfo.formatNick + "你终于来了，上次的任务完成的不错，在大家的努力下天蛇星少主缪斯终于有所好转了，特此你要记上一功！"],["呵呵，这是每个赛尔应该做的！","船长，下次我会更出色的！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["非常好！不过我还得知一个坏消息，那就是天蛇星的又一个对手已经抵达，这样一来少主缪斯非常不利啊！"],["恩恩，就是那个黑影神秘人！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["上次我们已经领教过他的实力了，最厉害的就是他的那把神弓，在没有任何武器的情况下居然还能射出能量，简直太神奇了！"],["恩，听你这么一说，的确非常强！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1438_1",false]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["0xff0000鹰眼—杰洛里0xffffff已经现身，这可是不祥之兆，这次他来的目的相信应该是替代灯神兰帕德，而我们的局势开始不利了！"],["不怕，有我们赛尔先锋队在！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["泽拉斯，让我们再次联手吧！趁现在灯神和鹰眼还没有相聚，我们去杀他个措手不及！"],["赛小息，好主意！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["看来是该时候通知贾斯汀了，赛尔先锋队这次任务非常危险，你们有信心完成吗？"],["有！！再大的困难都不在话下！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["好，果然是赛尔号飞船上受过专业的战士，那就出发吧！去完成你们的壮举！"],["鹰眼杰洛里，我们又该见面了！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1438_2",false]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1438.TASK_ID,TaskController_1438.TASK_STAGE_1,function(param1:Boolean):void
            {
               if(param1)
               {
                  MapManager.changeLocalMap(10281);
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
         story = [[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["刚刚那朵会飞的云彩果然神奇，一转眼我们已经从山的那头到对面了，这里看上去都是竹子，好幽静啊！"],["不要大意，这里太安静了！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["太安静的地方就越可能发生大事，我太了解鹰眼杰洛里了，他在天蛇七魔将中可是有了名的暗杀者，你们要留意竹子的后面！"],["竹子的后面？"]]],[TaskStoryPlayer.DIALOG,[NPC.ATIEDA,["泽拉斯，我发现你真的很“愚人”哦！你看看这里，漫山遍野的竹林，竹子后面是什么？那不还是竹子嘛！"],["不行我用斩月双刀试给你看看！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,2,4,false]],[TaskStoryPlayer.DIALOG,[NPC.KALULU,["哇…阿铁打，你的刀法比之前有所进步，但是谁叫你擅作主张了，上次吃的亏你忘记了吗？屁股是不是不疼了？"],["额…别提糗事行不行啊！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["好了，好了！大家都别争了，鹰眼杰洛里的行踪和能力泽拉斯最清楚，我们还是听从泽拉斯的指挥吧！"],["谁再敢乱来，我就踢他出先锋队！"]]],[TaskStoryPlayer.DIALOG,[NPC.ATIEDA,["真是可气，我也是想帮到大家，为什么受伤的都是我，为什么总是我的不对！"],["呜呜呜…谁有我可怜…"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,5,6,false]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["看来一定要迅速通过这里，否则我们就像是猎物一样被关注着，鹰眼杰洛里，我知道一定是你！"],["伙伴们，快速通过这里！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,7,8,false]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["我感到有种能量正在慢慢变强，大家小心了，特别留意你们的头顶，说不定会有什么东西正在瞄准我们！"],["恩恩，大家注意了！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,9,10,false]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["鹰眼，你这个卑鄙的家伙，竟然放冷箭，差点就伤害了米咔，我一定要亲手击败你！"],["哼哼哼…先找到我再说吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["伙伴们，你们快到我身边来，我会保护你们的！"],["恩恩，明白了！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,11,"mc11"]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,12,"mc12"]],[TaskStoryPlayer.DIALOG,[NPC.JIELUOLI,["你以为这样就能抵御我的能量箭吗？那你也未必太小看我了，在竹林中尝尝箭雨突袭破的滋味吧！"],["不好，这下可麻烦了！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1438_3",true]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1438.TASK_ID,TaskController_1438.TASK_STAGE_2,function(param1:Boolean):void
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
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,13,"mc13"]],[TaskStoryPlayer.DIALOG,[NPC.JIELUOLI,["一群废物，快点告诉我少主缪斯的下落，省的受皮肉之苦！"],["我…我是绝对不会说的！"]]],[TaskStoryPlayer.DIALOG,[NPC.JIELUOLI,["那好“愚人”泽拉斯，那我就赐你天蛇七魔将中最高的理解，让你爽快的离开这个世界！"],["再见了，“愚人”泽拉斯"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,14,15,false]],[TaskStoryPlayer.DIALOG,[NPC.JIELUOLI,["灯神…你恐怕还不知道天蛇星“那位大人”的最新指令吧！你认为你如何去面对他呢？干脆就在这里自我了断吧！"],["不用你管，我有我的办法！"]]],[TaskStoryPlayer.DIALOG,[NPC.JIELUOLI,["恩…你的办法就是不停的逃亡吧！计划都被你搞砸了，还不知悔改，我没去找你，你却自己送上门了，那么你就和泽拉斯一起去吧！"],["你想干掉我？"]]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["不可能，你说的话不可信，“大人”是不会这么对我的！"],["真是太天真了！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,16,"mc16"]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,17,"mc17"]],[TaskStoryPlayer.DIALOG,[NPC.JIELUOLI,["如果你认为在这里你可以战胜我的话，那你就来吧！你可别忘了，在这里你还有另一个对手！！！"],["什么，我怎么把泽拉斯给忘了！"]]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["这样一来，就会变成二对一的局面了，让我再想想，要不还是先撤吧！"],["别想逃，你逃不出我鹰眼的视线！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,18,"mc18"]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,19,"mc19"]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["那我就赌一把，再说我也是天蛇七魔将之一，没理由会害怕你们的！"],["兰帕德内心（实在打不过就跑呗~~）"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["兰帕德，咱们不是说好一起对付鹰眼的嘛！你不会忘记了吧！放心我一定会帮助你的！"],["泽拉斯，你这家伙！"]]],[TaskStoryPlayer.DIALOG,[NPC.JIELUOLI,["哟…原来你还有自己的计划嘛！不错，那就一起解决你们，接招哦！"],["兰帕德，这招是你教我的！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1438_4",true]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            taskMc.gotoAndStop(20);
            TasksManager.complete(TaskController_1438.TASK_ID,TaskController_1438.TASK_STAGE_3,function(param1:Boolean):void
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
         taskMc.gotoAndStop(20);
         story = [[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["好强大的力量，接下来就是我和鹰眼之间的较量了，我一定要全神贯注才行！"],["泽拉斯你要小心啊！"]]],[TaskStoryPlayer.DIALOG,[NPC.JIELUOLI,["泽拉斯，现在还不是我和你之间的较量，留着你的命耐心的等待吧！"],["什么，那你想怎样！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["灯神兰帕德被这家伙轻易的击败，他现在不和我对决，难道还有其他的目的？"],["太可怕了！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,21,"mc21"]],[TaskStoryPlayer.DIALOG,[NPC.JIELUOLI,["这次我来的目的不仅仅是惩罚兰帕德，更重要的是在少主缪斯找到先知前找到他！"],["什么…少主寻找先知！"]]],[TaskStoryPlayer.DIALOG,[NPC.JIELUOLI,["少主缪斯在天蛇星所犯下的错误，一定让他很难受吧！少主只有找到先知才能回到过去，阻止这些事情的发生！"],["什么，想改变历史？"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["不可能，这不是少主的过错，都是你…你们这些家伙！你们把之前少主对你们的恩情都忘的一干二净了！"],["我泽拉斯一定会阻止你们的！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,22,"mc22"]],[TaskStoryPlayer.DIALOG,[NPC.JIELUOLI,["想阻止我，你还太嫩了！我鹰眼从来就没有失败过，好好留意身边的环境吧！说不定我就在你身后！"],["哈哈哈，我们还会再见的！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,23,24,false]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["放开我…这家伙一定是去找先知了，如果真的被他找到，少主唯一的希望都没有了，那么这辈子她将永远活在内疚中！"],["还有会其他办法的！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["泽拉斯你这样冒冒失失去追赶鹰眼，一定会中了他的埋伏…这样的情况以前我们一直发生的！"],["听我的，还是先回飞船吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["看来有必要和少主缪斯谈一下，一定要知己知彼，否则我们是不可能战胜对手的！还有天蛇七魔将从来都未全部到齐…."],["难道这次会有这样的事情发生！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,25,"mc25"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["接下来帕索尔星的探险一定会更加激烈的，真不知先知是何许人也，其实我更关心天蛇七魔将都是哪些角色！"],["下次任务一定会更精彩的！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1438_5",false]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            ModuleManager.showModule(ClientConfig.getTaskModule("TaskMainTotalComplete"),"正在打开...",function():void
            {
               startState_4End();
            });
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
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            TasksManager.complete(TaskController_1438.TASK_ID,TaskController_1438.TASK_STAGE_4);
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
