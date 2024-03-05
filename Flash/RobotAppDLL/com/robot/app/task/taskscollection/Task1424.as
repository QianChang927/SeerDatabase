package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1424;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1424
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1424()
      {
         super();
      }
      
      private static function get taskMc() : MovieClip
      {
         return _map.conLevel["task1424mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1424.TASK_ID);
      }
      
      public static function initForMap75(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState != TasksManager.ALR_ACCEPT)
         {
            destroy();
            return;
         }
         TasksManager.getProStatusList(TaskController_1424.TASK_ID,function(param1:Array):void
         {
            if(Boolean(param1[0]) && !param1[1])
            {
               KTool.hideMapAllPlayerAndMonster();
               _map.topLevel.visible = false;
               start_2();
            }
            else if(Boolean(param1[1]) && !param1[2])
            {
               KTool.hideMapAllPlayerAndMonster();
               _map.topLevel.visible = false;
               start_3();
            }
            else if(Boolean(param1[2]) && !param1[3])
            {
               KTool.hideMapAllPlayerAndMonster();
               _map.topLevel.visible = false;
               start_4();
            }
            else
            {
               destroy();
            }
         });
      }
      
      private static function start_2() : void
      {
         taskMc.gotoAndStop(1);
         taskMc.buttonMode = true;
         taskMc.addEventListener(MouseEvent.CLICK,start_2Pro);
      }
      
      private static function start_2Pro(param1:MouseEvent) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var e:MouseEvent = param1;
         taskMc.removeEventListener(MouseEvent.CLICK,start_2Pro);
         story = [[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["泽拉斯，是这里吗？你确定少主缪斯就是在这里消失踪迹的吗？"],["恩恩，就是这里！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["肯定就是这里，我亲眼看到少主进入这个领域，可是我已经感觉到她的能量已经微乎其微了，想必一定是遇到什么事情了！"],["那我们先在附近找找吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["你们要小心，这里可是有名的风暴谷，据说这里经常会发生巨型风暴，很难有谁能够很轻松的通过这里！"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["少主一定就在附近，我们快找找吧！少主…少主…"],["大家还是小心一点！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["想必那个破灯兰帕德一定不会就这么罢休的，说不定这就是他的陷阱！"],["大家千万不走的太远！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,4,5,false]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["上次的计划就是因为你的出现才宣告失败，这次没这么走运，这里就是你的藏身之地，绝望吧！"],["兰帕德，你清醒点吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["你口中的那位大人只是在利用你而已，它最希望天蛇七魔将互相残杀，这才是它的最终目的！"],["不可能，你别蛊惑我！"]]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["那位大人说过，只要我这次完成任务，我就是天蛇七魔将的最高领导者，包括你在内也必须听从我的指示！"],["你还是太天真了！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,6,7,false]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["伙伴们，兰帕德由我对付，你们快去找找少主的下落吧！靠你们了！"],["恩恩，队长你们去吧！我留下！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["好吧！" + MainManager.actorInfo.formatNick + "，我们保持联络，你们一定要等我们回来啊！"],["放心吧！队长！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,8,9,false]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["好了，兰帕德！现在我们可以新帐旧账来个了结，想想当初我们天蛇七魔将是如何走到一起的，如今却是各自为战！"],["哼哼，这就是命运！"]]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["现在的天蛇七魔将已经不比当年了，而我也没有当年那种愚蠢的想法了，让我们在这里分出高下吧！"],["看来也只有这样了！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1424.TASK_ID,TaskController_1424.TASK_STAGE_2,function(param1:Boolean):void
            {
               if(param1)
               {
                  start_3();
               }
            });
         };
         storyPlayer.start();
      }
      
      private static function start_3() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         taskMc.gotoAndStop(9);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,10,"mc10"]],[TaskStoryPlayer.DIALOG,[NPC.BAOFENGNV,["哪来的打斗声，在风暴谷所有的东西都由我来支配！都给我退下！"],["哇，好厉害的能量！"]]],[TaskStoryPlayer.DIALOG,[NPC.BAOFENGNV,["你们是谁，为何闯入我的领地！风暴谷从来都不欢迎来客，你们还是走吧！"],["好犀利的欢迎仪式！"]]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["我是来自天蛇星的灯神兰帕德，不要阻碍我办事，哪来的就回哪去吧！否则小心我把你收到神灯中，让你永不翻身！"],["兰帕德，你不是她的对手！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,11,14,false]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["什么！你居然可以控制巨型风暴的数量！！不好，这样下去我一定会失败，不过就算这样我也要拉个垫背的！"],["泽拉斯，别以为你会幸免！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1424_4",true]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["实力太惊人了！这样的级别绝对可以加入0xff0000X战队0xffffff啊！"],["快去看看泽拉斯怎么了！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,15,16,false]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["坚持住啊！泽拉斯，我们说好一起帮你寻找少主的，我们还答应罗杰船长大家都会平平安安回去呢！"],["你不能倒下啊！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["我…我恐怕已经坚持不住了，这风暴的能量实在是太大了，告诉少主天蛇星发生巨变，天蛇星需要她！"],["恩恩，我知道！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,17,18,false]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["少主！！你终于来了！我…找你找的好辛苦啊！"],["恩恩，我都知道！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1424.TASK_ID,TaskController_1424.TASK_STAGE_3,function(param1:Boolean):void
            {
               if(param1)
               {
                  start_4();
               }
            });
         };
         storyPlayer.start();
      }
      
      private static function start_4() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         taskMc.gotoAndStop(18);
         story = [[TaskStoryPlayer.DLG_MOVIE,[taskMc,19,20,false]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["赛小息，麻烦你们先将泽拉斯带回赛尔号，这里由我来解决吧！"],["我不会让我的手下白白受伤的！"]]],[TaskStoryPlayer.DIALOG,[NPC.KALULU,["看上去泽拉斯伤的不轻，我们还是先送他回去吧！"],[MainManager.actorInfo.nick + "，你一个人行吗？"]]],[TaskStoryPlayer.DIALOG,[NPC.BAOFENGNV,["这里的人越来越多了，看来是该清理一下了，你们一个都不准走！"],["不好，暴风女又要爆发了！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,21,22,false]],[TaskStoryPlayer.DIALOG,[NPC.SEER,[MainManager.actorInfo.formatNick + "，一定要把少主带回来啊！我们在飞船等你们！"],["恩恩，收到，我一定会完成任务的！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,23,"mc23"]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["少主，我们又见面了，这次我一定要把你的生命献给那位大人，啊哈哈哈！"],["在没知道真相前，我的生命还不是你的！"]]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["暴风女的实力我已经领教过了，这次一定要在关键时刻将少主搞定，否则我的地位可就不保了！"],["天蛇七魔将的首领一定是我！"]]],[TaskStoryPlayer.DIALOG,[NPC.BAOFENGNV,["来尝尝我暴风女的强烈风暴吧！"],["小心啊！少主！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1424_5",true]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["力量太恐怖了，看来还是先避一下吧！少主，咱们后会有期！"],["少主太厉害了！"]]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["别得意，天蛇七魔将已经陆续抵达这里，少主你要做好心理准备啊！曾经的部下，现在的唯一任务就是要干掉你！"],["哼，来吧！我知道迟早要还的！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,24,"mc24"]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["多谢你" + MainManager.actorInfo.formatNick + "，我想我应该去看看泽拉斯怎么样了！"],["恩恩，去吧！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,25,"mc25"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["可是…暴风女怎么办！太可惜了，难道就这么算了吗？"],["要不我想想办法！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,26,27,false]],[TaskStoryPlayer.DIALOG,[NPC.TUONUKE,["终于找到了，能量就是从这里发出的，可是我们还是来晚了！"],["哇，X战队！！你们怎么来了！"]]],[TaskStoryPlayer.DIALOG,[NPC.TUONUKE,["暴风女是我们招募的第四位成员，她具有召唤风暴的特殊能力，在我们这个队伍中，她能起到决定性的作用！"],["但是她现在..."]]],[TaskStoryPlayer.DIALOG,[NPC.HEJIN_SAIBOSITE,["等等，也许会有办法！金翅托鲁克，交给我吧！如果可以的话，我会将暴风女治愈并且提升到另一个高度上！"],["真的可以吗？"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,28,29,false]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["太好了，这次暴风女就有救了！我还是先回赛尔号和大家汇合一下吧！"],["少主你背后究竟还有多少秘密呢？"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1424_6",false]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            ModuleManager.showModule(ClientConfig.getTaskModule("TaskMainTotalComplete"),"正在打开...",function():void
            {
               start_4End();
            });
         };
         storyPlayer.start();
      }
      
      private static function start_4End() : void
      {
         TasksManager.complete(TaskController_1424.TASK_ID,TaskController_1424.TASK_STAGE_4,function(param1:Boolean):void
         {
            if(param1)
            {
               KTool.showMapAllPlayerAndMonster();
               _map.topLevel.visible = true;
               destroy();
            }
         });
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            if(75 == MapManager.currentMap.id)
            {
               DisplayUtil.removeForParent(taskMc);
            }
            _map = null;
         }
      }
   }
}
