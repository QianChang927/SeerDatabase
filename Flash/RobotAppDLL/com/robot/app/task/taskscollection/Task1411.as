package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1411;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1411
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1411()
      {
         super();
      }
      
      private static function get taskMc() : MovieClip
      {
         return _map.conLevel["task1411mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1411.TASK_ID);
      }
      
      public static function initForMap70(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1411.TASK_ID,function(param1:Array):void
            {
               if(true == param1[0] && false == param1[1])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  _map.topLevel.visible = false;
                  start_2();
               }
               else if(true == param1[2] && false == param1[3] && Boolean(BufferRecordManager.getState(MainManager.actorInfo,574)))
               {
                  KTool.hideMapAllPlayerAndMonster();
                  _map.topLevel.visible = false;
                  start_4End();
               }
               else
               {
                  destroy();
               }
            });
         }
         else
         {
            destroy();
         }
      }
      
      public static function initForMap72(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1411.TASK_ID,function(param1:Array):void
            {
               if(true == param1[1] && false == param1[2])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  _map.topLevel.visible = false;
                  start_3();
               }
               else if(true == param1[2] && false == param1[3])
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
         else
         {
            destroy();
         }
      }
      
      private static function start_2() : void
      {
         var storyPlayer:TaskStoryPlayer = null;
         var story:Array = [[TaskStoryPlayer.DLG_MOVIE,[taskMc,1,2,false]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["Hi！我们来啦！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SHENMIJINGLING_XIAOWU,["……看来你们已经下定决心了，如果你们已经准备好信任我这个陌生人了，那就跟随我进入穿越时空的隧道吧！"],null]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,3,7,false]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["疑人不用，用人不疑！我相信你，就算你是坏人，为了我的朋友，我也要赌这一把！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SHENMIJINGLING_XIAOWU,["……为了，朋友么……跟我来吧！记得念口令！"],null]],[TaskStoryPlayer.FUL_MOVIE,["task_1411_2",true]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1411.TASK_ID,TaskController_1411.TASK_STAGE_2,function(param1:Boolean):void
            {
               if(param1)
               {
                  MapManager.changeMap(72);
               }
            });
         };
         storyPlayer.start();
      }
      
      private static function start_3() : void
      {
         var storyPlayer:TaskStoryPlayer = null;
         var story:Array = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,2,8,false]],[TaskStoryPlayer.DIALOG,[NPC.KALULU,["喂！你俩还闹！金角和银角还等着我们去拯救呢！"],null]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,9,11,false]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["哇，这是哪里？！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SHENMIJINGLING_XIAOWU,["这里是时空之间，时间静止的地方，连接着古今和未来！简单的说，这里可以去往任何一个时间，任何一个地方！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["哇！这么神奇！不过，这里和金角银角有什么关系吗？"],null]],[TaskStoryPlayer.DIALOG,[NPC.SHENMIJINGLING_XIAOWU,["只要你们回到过去，及时的阻止金角、银角牺牲就可以拯救它们！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["妙啊！"],null]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,12,17,false]],[TaskStoryPlayer.DIALOG,[NPC.SHENMIJINGLING_XIAOWU,["既然你们心意已决，那我就成人之美吧——"],null]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,18,22,false]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["赛小息，我可是救过卡璐璐的哦，我是你们的朋友。"],null]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["对，对呀，它是朋友啊！我们一起去救金角和银角吧！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SHENMIJINGLING_XIAOWU,["绝对不行！如果让它跟来，不但金角银角救不了！连麒麟和恶灵兽大战的结果也会改变！"],null]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["你口口声声说我是坏人，你自己却连脸都不敢让别人看到！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SHENMIJINGLING_XIAOWU,["我……"],null]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,23,25,false]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,26,"mc26"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1411.TASK_ID,TaskController_1411.TASK_STAGE_3,function(param1:Boolean):void
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
         taskMc.gotoAndStop(26);
         story = [[TaskStoryPlayer.FUL_MOVIE,["task_1411_3",true]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["佐格？艾利逊！兰帕德你怎么会和海盗认识的？原来你真的是坏人！"],null]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["这两个成事不足败事有余的蠢货，眼看我就取得赛尔的信任了，都给你们破坏了！"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,27,"mc27"]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["本来我是真心的想帮助你们阻止金角和银角的呢！因为那样我的盟友恶灵兽就可以打败麒麟了！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["可恶！你竟然利用我们拯救金角和银角的心情！"],null]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["呵呵呵，索性说个明白吧！上次在天佛山，我帮你们对付海盗救出卡璐璐也是我和恶灵兽商量好的！"],null]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,28,33,false]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["好啦！既然你们不想得到灯神的眷顾，那么我们索性痛快一点！我就在这时空之间，把你们都消灭掉！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["哼，我们不怕你！"],null]],[TaskStoryPlayer.FUL_MOVIE,["task_1411_4",true]],[TaskStoryPlayer.FUL_MOVIE,["task_1411_5",false]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            DisplayUtil.removeForParent(taskMc);
            ModuleManager.showModule(ClientConfig.getTaskModule("TaskMainTotalComplete"),"正在打开...",function():void
            {
               BufferRecordManager.setState(MainManager.actorInfo,574,true);
               MapManager.changeMap(70);
            });
         };
         storyPlayer.start();
      }
      
      private static function start_4End() : void
      {
         TasksManager.complete(TaskController_1411.TASK_ID,TaskController_1411.TASK_STAGE_4,function(param1:Boolean):void
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
            if(70 == MapManager.currentMap.id || 72 == MapManager.currentMap.id)
            {
               DisplayUtil.removeForParent(taskMc);
            }
            _map = null;
         }
      }
   }
}
