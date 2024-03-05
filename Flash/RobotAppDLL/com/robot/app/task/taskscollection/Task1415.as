package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1415;
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
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1415
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1415()
      {
         super();
      }
      
      private static function get taskMc() : MovieClip
      {
         return _map.conLevel["task1415mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1415.TASK_ID);
      }
      
      public static function initForMap10265(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState != TasksManager.ALR_ACCEPT)
         {
            destroy();
            return;
         }
         TasksManager.getProStatusList(TaskController_1415.TASK_ID,function(param1:Array):void
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
            else
            {
               destroy();
            }
         });
      }
      
      public static function initForMap10266(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState != TasksManager.ALR_ACCEPT)
         {
            destroy();
            return;
         }
         TasksManager.getProStatusList(TaskController_1415.TASK_ID,function(param1:Array):void
         {
            if(Boolean(param1[2]) && !param1[3])
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
      
      public static function initForMap809(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState != TasksManager.ALR_ACCEPT)
         {
            destroy();
            return;
         }
         TasksManager.getProStatusList(TaskController_1415.TASK_ID,function(param1:Array):void
         {
            if(Boolean(param1[3]) && !param1[4])
            {
               KTool.hideMapAllPlayerAndMonster();
               _map.topLevel.visible = false;
               start_5();
            }
            else
            {
               destroy();
            }
         });
      }
      
      private static function start_2() : void
      {
         var storyPlayer:TaskStoryPlayer = null;
         var story:Array = [[TaskStoryPlayer.DLG_MOVIE,[taskMc,1,5,false]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,6,11,false]],[TaskStoryPlayer.DIALOG,[NPC.MUMU,["你们怎么才来！急死我了！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["啊！你已经知道我们会来的吗？"],null]],[TaskStoryPlayer.DIALOG,[NPC.MUMU,["当然，我可是大祭司！我知道你们会从未来赶回来的！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["大祭司，我们一定要救金角和银角！我们快去阻止它们牺牲吧！"],null]],[TaskStoryPlayer.DIALOG,[NPC.MUMU,["不要着急，我们还要等一个人！"],null]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,12,17,false]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["我乃大蛇之光！被大蛇的眼光盯上的猎物是无法逃脱的！"],null]],[TaskStoryPlayer.DIALOG,[NPC.ATIEDA,["可恶，还伪装我们的朋友！你为什么要追杀它呀！"],null]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["我和她的恩怨是一个很长的故事了，在我解决了她以后，我可以慢慢给你们讲！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["它是我们的朋友！我们是不会让你伤害它的！"],null]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["勇气可嘉，不过恕我直言，你们这几个加起来，也不是我的对手哦！"],null]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1415.TASK_ID,TaskController_1415.TASK_STAGE_2,function(param1:Boolean):void
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
         taskMc.gotoAndStop(17);
         story = [[TaskStoryPlayer.FUL_MOVIE,["task_1415_2",true]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["真不愧是最聪明的魔将，“愚人”泽拉斯，没想到你这么快就跟来了！不过，你真的决定要阻挡我？"],null]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["怎么，大家都是“天蛇七魔将”，难道你就这么怕我？"],null]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["你可要知道追杀她是“哪位大人”的意思！"],null]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["守卫王室，这是我的荣耀和责任！生死不改，就算是神的意思我也会以大蛇之牙锐利相对！"],null]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["那可真遗憾了，看来我们必须一战了！也好，我一直想知道大蛇之光和大蛇之牙，到底谁更强一点！"],null]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["等我撕掉你那张虚伪的笑脸，你的疑惑就可以得到完美的解答了！"],null]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,18,19,false]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1415.TASK_ID,TaskController_1415.TASK_STAGE_3,function(param1:Boolean):void
            {
               if(param1)
               {
                  MapManager.changeLocalMap(10266);
               }
            });
         };
         storyPlayer.start();
      }
      
      private static function start_4() : void
      {
         taskMc.gotoAndStop(1);
         taskMc.buttonMode = true;
         taskMc.addEventListener(MouseEvent.CLICK,start_4Pro);
      }
      
      private static function start_4Pro(param1:MouseEvent) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var e:MouseEvent = param1;
         taskMc.removeEventListener(MouseEvent.CLICK,start_4Pro);
         story = [[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["赶上了！麒麟正和恶灵兽战斗呢！咦，过去的我们不在，我还想去和过去的我打个招呼呢！"],null]],[TaskStoryPlayer.DIALOG,[NPC.MUMU,["历史改变了，因为你们提前解救了我，所以过去的你们现在还没赶过来！抓紧时间吧！"],null]],[TaskStoryPlayer.FUL_MOVIE,["task_1415_3",true]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1415.TASK_ID,TaskController_1415.TASK_STAGE_4,function(param1:Boolean):void
            {
               if(param1)
               {
                  MapManager.changeMap(809);
               }
            });
         };
         storyPlayer.start();
      }
      
      private static function start_5() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1415_4"),function():void
         {
            ModuleManager.showModule(ClientConfig.getTaskModule("TaskMainTotalComplete"),"正在打开...",function():void
            {
               start_5End();
            });
         },true);
      }
      
      private static function start_5End() : void
      {
         TasksManager.complete(TaskController_1415.TASK_ID,TaskController_1415.TASK_STAGE_5,function(param1:Boolean):void
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
            if(10265 == MapManager.currentMap.id || 10266 == MapManager.currentMap.id || 809 == MapManager.currentMap.id)
            {
               DisplayUtil.removeForParent(taskMc);
            }
            _map = null;
         }
      }
   }
}
