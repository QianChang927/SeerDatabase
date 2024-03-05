package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1388;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1388
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1388()
      {
         super();
      }
      
      private static function get taskMc() : MovieClip
      {
         return _map.conLevel["task1388mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1388.TASK_ID);
      }
      
      public static function initForMap68(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1388.TASK_ID,function(param1:Array):void
            {
               if(true == param1[0] && false == param1[1])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  _map.topLevel.visible = false;
                  start_2();
               }
               else if(true == param1[1] && false == param1[2])
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
      
      public static function initForMap57(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1388.TASK_ID,function(param1:Array):void
            {
               if(true == param1[1] && false == param1[2] && Boolean(BufferRecordManager.getState(MainManager.actorInfo,538)))
               {
                  KTool.hideMapAllPlayerAndMonster();
                  _map.topLevel.visible = false;
                  _map.conLevel["spt"].visible = false;
                  start_3End();
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
      
      public static function initForMap67(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1388.TASK_ID,function(param1:Array):void
            {
               if(true == param1[2] && false == param1[3] && Boolean(BufferRecordManager.getState(MainManager.actorInfo,537)))
               {
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
      
      private static function start_2() : void
      {
         var story:Array = [[TaskStoryPlayer.DLG_MOVIE,[taskMc,1,4,false]],[TaskStoryPlayer.DIALOG,[NPC.KALULU,["想不到雷达监测到的流星居然是这么大的一尊佛像，它的来历好蹊跷啊！"],null]],[TaskStoryPlayer.DIALOG,[NPC.ATIEDA,["阿弥陀佛！你慢慢想吧！我要去和米咔玩了！"],null]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,5,8,false]],[TaskStoryPlayer.DIALOG,[NPC.KALULU,["你俩严肃点，既然这里没有什么异常，我们早点回去报告吧！"],null]],[TaskStoryPlayer.DIALOG,[NPC.ATIEDA,["这还没异常？这么大一个佛从天而降！"],null]],[TaskStoryPlayer.DIALOG,[NPC.ZOG,["啊哈！看看这是谁！"],null]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,9,12,false]],[TaskStoryPlayer.DIALOG,[NPC.ATIEDA,["艾利逊！你这个卑鄙小人，竟然对女生下手！有本事放开她，来和我一决高下！"],null]],[TaskStoryPlayer.DIALOG,[NPC.ALLISON,["我没本事！我就是卑鄙小人！我不放！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["放了卡璐璐，要抓你抓我！"],null]],[TaskStoryPlayer.DIALOG,[NPC.ZOG,["嗯，这个建议不错啊！不过我有个更好的建议，你们四个都做我的俘虏！"],null]],[TaskStoryPlayer.DIALOG,[NPC.ALLISON,["不要抵抗哦！万一我们一生气，不小心伤到卡璐璐那就不好了！"],null]],[TaskStoryPlayer.FUL_MOVIE,["task_1388_4",true]]];
         var storyPlayer:TaskStoryPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            TasksManager.complete(TaskController_1388.TASK_ID,TaskController_1388.TASK_STAGE_2,function(param1:Boolean):void
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
         taskMc.gotoAndStop(15);
         taskMc.buttonMode = true;
         taskMc.addEventListener(MouseEvent.CLICK,onOpenPanel);
      }
      
      private static function onOpenPanel(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getTaskModule("TaskInteractive_1388"));
      }
      
      public static function start_3Pro() : void
      {
         var story:Array = [[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["加密通讯的信号被干扰了，是谁干的呢？"],null]],[TaskStoryPlayer.FUL_MOVIE,["task_1388_5",true]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["太阳鸟？圣光火鸟？听起来好厉害的样子，你为什么要干扰我们的通讯呀？难道你和海盗是一伙的？"],null]],[TaskStoryPlayer.DIALOG,[NPC.SHENGGUANGHUONIAO,["我怎么可能和那些欺凌弱小的坏人是一伙的？我还救过蒙塔呢！"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,13,"mc13"]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["原来是你啊，那你是我们的好朋友嘛！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SHENGGUANGHUONIAO,["作为朋友我想警告你们一句：不要轻信陌生人！"],null]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["呵呵，这位朋友，你不想得到灯神的眷顾也就算了，为什么还要说我的坏话呢？话说回来，其实你自己也是个陌生人嘛！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["对呀，兰帕德救了卡璐璐，打跑了海盗，是好人啊！而且它还答应要实现我两个愿望呢！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SHENGGUANGHUONIAO,["哼，不是看在圣光天马的份上，我才懒得多嘴，你好自为之吧！"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,14,"mc14"]]];
         var storyPlayer:TaskStoryPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            BufferRecordManager.setState(MainManager.actorInfo,538,true);
            MapManager.changeMap(57);
         };
         storyPlayer.start();
      }
      
      private static function start_3End() : void
      {
         AnimateManager.playMcAnimate(taskMc,1,"mc1",function():void
         {
            TasksManager.complete(TaskController_1388.TASK_ID,TaskController_1388.TASK_STAGE_3,function(param1:Boolean):void
            {
               if(param1)
               {
                  MapManager.changeMap(68);
               }
            });
         });
      }
      
      private static function start_4() : void
      {
         taskMc.gotoAndStop(15);
         taskMc.buttonMode = true;
         taskMc.addEventListener(MouseEvent.CLICK,onOpenPanel);
      }
      
      public static function start_4Pro() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1388_6"),function():void
         {
            BufferRecordManager.setState(MainManager.actorInfo,537,true);
            KTool.showMapAllPlayerAndMonster();
            _map.topLevel.visible = true;
            destroy();
            MapManager.changeMap(67);
         },false);
      }
      
      private static function start_4End() : void
      {
         TasksManager.complete(TaskController_1388.TASK_ID,TaskController_1388.TASK_STAGE_4,function(param1:Boolean):void
         {
            if(param1)
            {
               destroy();
            }
         });
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            if(68 == MapManager.currentMap.id || 57 == MapManager.currentMap.id)
            {
               taskMc.removeEventListener(MouseEvent.CLICK,onOpenPanel);
            }
            if(68 == MapManager.currentMap.id || 67 == MapManager.currentMap.id || 57 == MapManager.currentMap.id)
            {
               DisplayUtil.removeForParent(taskMc);
            }
            _map = null;
         }
      }
   }
}
