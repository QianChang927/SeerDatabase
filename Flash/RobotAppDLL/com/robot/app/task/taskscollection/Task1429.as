package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1429;
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
   
   public class Task1429
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1429()
      {
         super();
      }
      
      private static function get taskMc() : MovieClip
      {
         return _map.conLevel["task1429mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1429.TASK_ID);
      }
      
      public static function initForMap10268(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState != TasksManager.ALR_ACCEPT)
         {
            destroy();
            return;
         }
         TasksManager.getProStatusList(TaskController_1429.TASK_ID,function(param1:Array):void
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
         story = [[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["伙伴们，终于到了，就是这里—0xff0000浮空山脊0xffffff。你们看到对面的大山吗？在那里就会有神奇的果实！"],["那我们赶快去吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["没你们想的这么简单，想要过去谈何容易，别看这里现在如此安静，等会可怕的风暴就会来了！"],["管不了这么多了，让我去试试！"]]],[TaskStoryPlayer.DIALOG,[NPC.KALULU,["阿铁达，千万别鲁莽，说不定泽拉斯说的是真的！还是先观察一下吧！"],["哼哼，你们也太胆小了！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,2,4,false]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["这样太冒险了，说不定等会强大的风暴就要来了！"],["别担心，泽拉斯！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,5,6,false]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["大家准备好！一定要接住他们，否则会摔的很惨的！"],["恩恩，我们这就准备！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,7,8,false]],[TaskStoryPlayer.DIALOG,[NPC.KALULU,["都是你！阿铁打，如果不是你鲁莽，怎么会这样呢？真是活该！"],["我都这样了就别说我了嘛！"]]],[TaskStoryPlayer.DIALOG,[NPC.ATIEDA,["呜呜呜…别责怪我了，最多以后都听你的就是了！"],["哼，早知如此，何必当初呢！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["好了啦！卡璐璐，你也别怪阿铁打了，他也是想快点找到神奇的果实，拯救天蛇公主缪斯嘛！"],["算了算了！看在公主的面子上！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,9,"mc9"]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["米咔，你是怎么了！你是说对面，难道你有发现了什么？"],["米咔…米咔！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["如果没错的话，我想米咔一定发现了什么，你们看那里！神奇果实！！！"],["真的吗？"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,10,"mc10"]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["快看，就是那些！神奇的果实，只有它们可以拯救公主缪斯的现状，可是我们怎么过去呢！"],["放心吧！一定会有办法的！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1429.TASK_ID,TaskController_1429.TASK_STAGE_2,function(param1:Boolean):void
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
         taskMc.gotoAndStop(10);
         story = [[TaskStoryPlayer.DLG_MOVIE,[taskMc,11,12,false]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["你们也太不注意了，怎么每次行动都被我遇上呢？你们刚刚说什么？想去对面寻找神奇的果实？"],["破灯，这和你有什么关系！"]]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["别这么激动嘛！咦…你们的公主呢？她怎么没来难道是胆小躲起来了，还是她受伤了？"],["别胡说，公主好的很！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["兰帕德，既然咱们又一次相聚在同一个地点，那么我就代表公主清理门户吧！"],["泽拉斯，你想挑战我？"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,13,14,false]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["什么！是你…你怎么也投靠兰帕德了？你忘记当初是谁拯救你的生命吗？"],["那都是过去式了！"]]],[TaskStoryPlayer.DIALOG,[NPC.JIELUOLI_HEIYING,["俗话说识时务者为俊杰，我看你也老老实实的投靠“那位大人”吧！按照你现在的实力，你想对付我们两大巨头？！"],["我是不会退缩的！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["不好，看来那家伙又是天蛇星来的叛徒，一定是来寻找天蛇星公主缪斯的！"],["天蛇星沦陷是真的！"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,15,18,false]],[TaskStoryPlayer.DIALOG,[NPC.KALULU,["泽拉斯，你一定要战胜它们，船长还有公主在等着你回去呢？难道你忘记承诺船长的话了吗？"],["但愿我还能活着看到你们!"]]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,19,20,false]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["让你看看什么才是天蛇七魔将中最强的存在，就算是你们联手，恐怕也抵御不住我的獠牙攻击吧！"],["那就试试你的猫爪吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.JIELUOLI_HEIYING,["兰帕德，静静的看着我的实力吧！什么才叫强大！"],["来吧！杰洛里！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1429_3",true]],[TaskStoryPlayer.DIALOG,[NPC.JIELUOLI_HEIYING,["泽拉斯，果然宝刀不老啊！这是给你的见面礼，想要和我对抗，就来帕索尔星最深处找我吧！0xff0000你会很想知道你们一族的消息！0xffffff"],["什么！这家伙！"]]],[TaskStoryPlayer.DIALOG,[NPC.JIELUOLI_HEIYING,["兰帕德，这里就交给你吧！别忘了“大人的交代”你如果再失败，我的弓箭可就要招待你了哦！啊哈哈哈！"],["我不会失败的！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,21,"mc21"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1429.TASK_ID,TaskController_1429.TASK_STAGE_3,function(param1:Boolean):void
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
         taskMc.gotoAndStop(21);
         story = [[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["兰帕德，今天就让我代表公主缪斯清除你这个叛徒吧！"],["哼哼，你太天真了！"]]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["如果想挑战我的话，就大胆的过来吧！别告诉我你害怕那些巨型风暴哦！"],["卑鄙，居然利用自然的力量！"]]],[TaskStoryPlayer.DIALOG,[NPC.ATIEDA,["泽拉斯，千万别过去啊！那些风暴真的很强大，说不定会有生命危险的！"],["伙伴们，这是我的义务啊！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,22,"mc22"]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["太不可思议了，风暴女！你…你不是已经只剩一点能量了吗？怎么可能再次复活！"],["哈哈，这就是我合金赛伯斯特的本领！"]]],[TaskStoryPlayer.DIALOG,[NPC.BAOFENGNV,["泽拉斯，让我们一起联手吧！我可是X战队的新成员，暴风女0xff0000斯蒂亚0xffffff在此！谁敢和大自然抗衡？"],["那我就再灭你一次！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1429_4",true]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["太棒了，我们胜利了，终于把兰帕德击败了，暴风女万岁！"],["快去拿神奇的果实，来不及了！"]]],[TaskStoryPlayer.DIALOG,[NPC.TUONUKE,["你们放心吧！这件事让我来完成。"],["太好了！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,23,"mc23"]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,[MainManager.actorInfo.formatNick + "，快利用这里的远古泉水，将这些神奇的果实一起调和一下！"],["恩恩，我这就去！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            ModuleManager.showModule(ClientConfig.getTaskModule("TaskInteractive_1429"),"正在打开...",function():void
            {
               start_4Pro();
            });
         };
         storyPlayer.start();
      }
      
      private static function start_4Pro() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         taskMc.gotoAndStop(23);
         story = [[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["太好了，我们终于成功了，赶快回赛尔号吧！公主终于有救了！"],["恩恩，我们这就回去！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,[MainManager.actorInfo.formatNick + "，这里就交给你了，我们飞船见！"],["放心吧！队长有我呢！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,24,"mc24"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["天蛇星缪斯终于得救了，我一定要这些把消息告诉每一个人！"],["公主万岁！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1429_5",false]]];
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
         KTool.showMapAllPlayerAndMonster();
         _map.topLevel.visible = true;
         destroy();
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            TasksManager.complete(TaskController_1429.TASK_ID,TaskController_1429.TASK_STAGE_4);
         });
         MapManager.changeMap(76);
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            if(10268 == MapManager.currentMap.id)
            {
               DisplayUtil.removeForParent(taskMc);
            }
            _map = null;
         }
      }
   }
}
