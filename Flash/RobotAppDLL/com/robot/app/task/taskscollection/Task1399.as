package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1399;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1399
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1399()
      {
         super();
      }
      
      private static function get taskMc() : MovieClip
      {
         return _map.conLevel["task1399mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1399.TASK_ID);
      }
      
      public static function initForMap810(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1399.TASK_ID,function(param1:Array):void
            {
               if(true == param1[0] && false == param1[1])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  _map.topLevel.visible = false;
                  start_2();
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
      
      public static function initForMap69(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1399.TASK_ID,function(param1:Array):void
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
         var story:Array = [[TaskStoryPlayer.DLG_MOVIE,[taskMc,1,8,false]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["咦，你们在干嘛呢，做游戏吗？"],null]],[TaskStoryPlayer.DIALOG,[NPC.MUMU,["唔唔！（救命！）唔唔唔！（救救我！）唔唔！（救命！）"],null]],[TaskStoryPlayer.DIALOG,[NPC.ATIEDA,["哈哈，木木你说什么呢？"],null]],[TaskStoryPlayer.DIALOG,[NPC.YINJIAO,["木木说它要去和恶灵兽单挑，我们没办法，只好把它绑起来了！"],null]],[TaskStoryPlayer.DIALOG,[NPC.MUMU,["唔唔！（骗人！）唔唔！（骗人！）唔唔唔唔唔！（两个大骗子！）"],null]],[TaskStoryPlayer.DIALOG,[NPC.KALULU,["那怎么行！那只好把木木绑在这里了！我们快去帮麒麟吧！"],null]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,9,10,true]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1399.TASK_ID,TaskController_1399.TASK_STAGE_2,function(param1:Boolean):void
            {
               if(param1)
               {
                  MapManager.changeMap(69);
               }
            });
         };
         storyPlayer.start();
      }
      
      private static function start_3() : void
      {
         var storyPlayer:TaskStoryPlayer = null;
         var story:Array = [[TaskStoryPlayer.DLG_MOVIE,[taskMc,1,4,false]],[TaskStoryPlayer.DIALOG,[NPC.ELINGSHOU_NORMOL,["逃？哈哈哈哈！谁说我要逃！被你封印千年的耻辱，被这些小虫们屡屡阻挠的怒火！今天，我要一笔笔和你们算！"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["不好！麒麟似乎有点处于下风啊！"],null]],[TaskStoryPlayer.DIALOG,[NPC.YINJIAO,["主人加油啊！ "],null]],[TaskStoryPlayer.DIALOG,[NPC.JINJIAO,["主人的力量还没有完全恢复！"],null]],[TaskStoryPlayer.DIALOG,[NPC.ELINGSHOU_NORMOL,["哈哈哈！麒麟！你的本事就这么点了吗？我记得你以前要强的多嘛！"],null]],[TaskStoryPlayer.DIALOG,[NPC.QILIN_NORMOL,["恶灵兽！休要嚣张！"],null]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,6,9,false]],[TaskStoryPlayer.DIALOG,[NPC.ELINGSHOU_NORMOL,["哈哈哈！想不到吧！麒麟！我早防着你这一手呢！"],null]],[TaskStoryPlayer.DIALOG,[NPC.LEIYI,["战神联盟！击碎封印！"],null]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,10,13,false]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1399.TASK_ID,TaskController_1399.TASK_STAGE_3,function(param1:Boolean):void
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
         taskMc.gotoAndStop(13);
         story = [[TaskStoryPlayer.FUL_MOVIE,["task_1399_1",true]],[TaskStoryPlayer.DIALOG,[NPC.QILIN_NORMOL,["可恶！谁让你们自作主张的！站起来！你们是我麒麟的护卫！怎可倒下！"],null]],[TaskStoryPlayer.DIALOG,[NPC.QILIN_NORMOL,["我以神兽之名命令你们！不可以有事！"],null]],[TaskStoryPlayer.FUL_MOVIE,["task_1399_2",true]],[TaskStoryPlayer.FUL_MOVIE,["task_1399_3_0",true]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            start_4Pro();
         };
         storyPlayer.start();
      }
      
      private static function start_4Pro() : void
      {
         var storyPlayer:TaskStoryPlayer = null;
         var story:Array = [[TaskStoryPlayer.FUL_MOVIE,["task_1399_3",false]],[TaskStoryPlayer.DIALOG,[NPC.ELINGSHOU_NORMOL,["这下大事不妙！"],null]],[TaskStoryPlayer.DIALOG,[NPC.QILIN_NORMOL,["吼！"],null]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,14,15,false]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            DisplayUtil.removeForParent(taskMc);
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1399_4"),function():void
            {
               ModuleManager.showModule(ClientConfig.getTaskModule("TaskMainTotalComplete"),"正在打开...",function():void
               {
                  start_4End();
               });
            },false);
         };
         storyPlayer.start();
      }
      
      public static function start_4End() : void
      {
         TasksManager.complete(TaskController_1399.TASK_ID,TaskController_1399.TASK_STAGE_4,function(param1:Boolean):void
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
            if(810 == MapManager.currentMap.id || 69 == MapManager.currentMap.id)
            {
               DisplayUtil.removeForParent(taskMc);
            }
            _map = null;
         }
      }
   }
}
