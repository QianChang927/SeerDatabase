package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1420;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1420
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1420()
      {
         super();
      }
      
      private static function get taskMc() : MovieClip
      {
         return _map.conLevel["task1420mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1420.TASK_ID);
      }
      
      public static function initForMap10267(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState != TasksManager.ALR_ACCEPT)
         {
            destroy();
            return;
         }
         TasksManager.getProStatusList(TaskController_1420.TASK_ID,function(param1:Array):void
         {
            if(Boolean(param1[0]) && !param1[1])
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
      
      public static function initForMap74(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState != TasksManager.ALR_ACCEPT)
         {
            destroy();
            return;
         }
         TasksManager.getProStatusList(TaskController_1420.TASK_ID,function(param1:Array):void
         {
            if(Boolean(param1[1]) && !param1[2])
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
         var storyPlayer:TaskStoryPlayer = null;
         var story:Array = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,2,6,false]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["咦，连雷伊和盖亚也在找那个神秘的红色精灵？"],null]],[TaskStoryPlayer.DIALOG,[NPC.LEIYI,["不错，我想找它是因为——"],null]],[TaskStoryPlayer.DIALOG,[NPC.GAIYA,["我要和它一决高下！它的实力非同一般，我一直想和它比试一下，只不过前一段时间一直在专心对付恶灵兽!"],null]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["喂喂喂，这我就不能装作不知道了，对不起，我家主人高贵无比，我恐怕不能容许你私自选她做挑战的对象！"],null]],[TaskStoryPlayer.FUL_MOVIE,["task_1420_4",true]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,7,14,false]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["有雷伊和盖亚一起去，就是龙潭虎穴也不怕了！"],null]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["如果你们是帮忙找人的，那当然是欢迎万分，可我警告你们，别冒犯我家主人哦！"],null]],[TaskStoryPlayer.DIALOG,[NPC.GAIYA,["好的好的，知道啦！（到时候谁管你！）"],null]],[TaskStoryPlayer.DIALOG,[NPC.MUMU,["各位，站稳了，目标，帕索尔星，走起！"],null]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,15,15,true]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1420.TASK_ID,TaskController_1420.TASK_STAGE_2,function(param1:Boolean):void
            {
               if(param1)
               {
                  MapManager.changeMap(74);
               }
            });
         };
         storyPlayer.start();
      }
      
      private static function start_3() : void
      {
         var storyPlayer:TaskStoryPlayer = null;
         var story:Array = [[TaskStoryPlayer.DLG_MOVIE,[taskMc,1,2,false]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["啧啧啧啧，原来你还知道自己是千古的罪人，那你还逃避什么呢？接受正义的制裁，把你的生命交给我吧！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SHENMIJINGLING_XIAOWU,["如果死亡可以赎罪，我不会抵抗！可是我的罪孽太深重，而且，我还没有找到它……我听说谜域里存在着无限的可能，我必须去看一下！"],null]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["不行！0xff0000那位大人0xffffff已经给我下了最后的命令，我可不想变成一盏熄灭的油灯，你还是受死吧！"],null]],[TaskStoryPlayer.DIALOG,[NPC.ZOG,["灯神大人，和它废什么话，咱们直接上去拿下！"],null]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,3,6,false]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["兰帕德，你越是急着对主人不利，越说明这事情背后有蹊跷！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["兰帕德！这位——额，不知道叫什么名字的，这位是我们的朋友！我们是不会允许你欺负它的！"],null]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["不允许？小铁皮，就凭你？"],null]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,7,9,false]],[TaskStoryPlayer.DIALOG,[NPC.LANPADE,["赛尔号、战神联盟，你们真的要趟这趟浑水？要是得罪了0xff0000那位大人0xffffff，唤醒了0xff0000大蛇之怒0xffffff可是要后悔莫及的！"],null]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["……就算是他，也不会不经审判就下格杀令吧？"],null]],[TaskStoryPlayer.DLG_MOVIE,[taskMc,10,12,false]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["各位，天蛇星的家事，就不劳各位费心了！"],null]],[TaskStoryPlayer.DIALOG,[NPC.GAIYA,["那可由不得你，不和我好好打一架别想打发我！我早就看这个什么灯神更不顺眼！等我灭了他再和你切磋好了！"],null]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["……"],null]],[TaskStoryPlayer.DIALOG,[NPC.LEIYI,["兰帕德口中0xff0000那个大人0xffffff，真的有这么难对付么？"],null]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["大蛇之怒，天蛇七魔将之首——有一点兰帕德说的没错，你们最好不要牵扯进来！"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,13,"mc13"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1420.TASK_ID,TaskController_1420.TASK_STAGE_3,function(param1:Boolean):void
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
         story = [[TaskStoryPlayer.DIALOG,[NPC.ALLISON,["头儿，刚才是你在说话吗？"],null]],[TaskStoryPlayer.DIALOG,[NPC.ZOG,["没，没呀……好像，好像是那个石像说的……"],null]],[TaskStoryPlayer.FUL_MOVIE,["task_1420_5",false]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,14,"mc14"]],[TaskStoryPlayer.DIALOG,[NPC.DAMENGTE,["呵呵，我不保证谜域之中有你想要寻找的东西，不过，如果坚持要来的话！那就来吧！"],null]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["少主，不可！"],null]],[TaskStoryPlayer.FUL_MOVIE,["task_1420_6",true]]];
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
         TasksManager.complete(TaskController_1420.TASK_ID,TaskController_1420.TASK_STAGE_4,function(param1:Boolean):void
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
            if(10267 == MapManager.currentMap.id || 74 == MapManager.currentMap.id)
            {
               DisplayUtil.removeForParent(taskMc);
            }
            _map = null;
         }
      }
   }
}
