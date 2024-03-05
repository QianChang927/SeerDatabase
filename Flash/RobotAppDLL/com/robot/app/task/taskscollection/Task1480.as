package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1480;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1480
   {
      
      private static const MAP_ID:int = 87;
      
      private static const MAP_LOCAL_ID:int = 10294;
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1480()
      {
         super();
      }
      
      private static function get taskMc() : MovieClip
      {
         return _map.conLevel["task1480mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1480.TASK_ID);
      }
      
      public static function initForMap10294(param1:BaseMapProcess) : void
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
         TasksManager.getProStatusList(TaskController_1480.TASK_ID,function(param1:Array):void
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
         var story:Array = [[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["我们不能再让战神联盟出战了，我已经命令派特博士加快研制一种特殊的药剂，希望能在短时间内治愈他们的伤势！"],["看来…战神联盟这次伤的不轻啊！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["真是可怕的对手，看来我们要想想其他的办法了，一旦让上古一族开始繁殖,后果将会不堪设想！"],["船长，让我和少主缪斯组成突击队吧！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1480_1",false]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["少主缪斯，现在的情况十分危急，自从战神联盟溃败后，我们已经很难再找到和他们一样强大的伙伴去阻止上古一族了！"],["船长你的意思是！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["罗杰船长，你的意思我明白，你是想我们去阻击上古一族吧！"],["恩恩，不知你们是否愿意！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["船长，就让我们来吧！之前你们也帮了我不少，也该是我们出手的时候了！"],["赛小息…我们出发吧！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1480_2",false]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1480.TASK_ID,TaskController_1480.TASK_STAGE_1,function(param1:Boolean):void
            {
               SocketConnection.send(1022,84499584);
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
         story = [[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["伙伴们，我们又回到这里了！这次可没有战神联盟做我们的后盾了，大家一定要互相照应啊！"],["恩恩，大家注意！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.KALULU,["你们快看啊！下面的都是什么啊！感觉像精灵一样，而且还这么大，难道是…"],["没错，一定是上古一族！"]]],[TaskStoryPlayer.DIALOG,[NPC.ATIEDA,["记得船长说过，上古一族的库贝萨一旦复苏，他们就会开始繁殖和进化，一旦形成规模，那么杀伤力可不是一般的！"],["所以我们要在这里剿灭它们！"]]],[TaskStoryPlayer.DIALOG,[NPC.ATIEDA,["你们都别动，看样子只能用我的斩月双刀了，让我将这些可恶的上古精灵蛋劈个粉碎吧！"],["斩月双刀…去吧！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.ATIEDA,["可恶…这些精灵居然如此坚硬，连我的斩月双刀都砍不动，看来只能动真格的了！我要派出精灵搭档加格，一定要粉碎他们！"],["等等…阿铁打！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["你们看，那个巨大的石壁…其实他不是别人，正是上古一族的首领库贝萨的脊背！"],["什么…真的吗？"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["这么紧要的关头，少主怎么会骗你们呢！还有你们看这些精灵蛋，相信再过不久这些上古一族就要成功进化了！"],["现在我们该怎么办！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["看来只能用我的大蛇之牙了，誓要将上古一族在这里剿灭！"],["等等…泽拉斯！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["不好…上古一族开始繁殖了，我们不能再等下去了，我要向邪恶挑战！"],["觉醒吧！大蛇之牙！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,6,"mc6"]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["又是你们两个，这次你们又想干嘛！想在这里和我们一决高下吗？"],["哼哼，你们太看得起自己了！"]]],[TaskStoryPlayer.DIALOG,[NPC.SIJIYA,["接下来的一幕一定是你们不想看到的，但是没有办法！啊哈哈哈，这就是命运！"],["恭请盟主！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["什么…天蛇星盟主怎么会来到这里！难道是为了上古一族，如果他们联手的话，敌我悬殊就太大了！"],["哈哈…好好看着吧！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1480.TASK_ID,TaskController_1480.TASK_STAGE_2,function(param1:Boolean):void
            {
               SocketConnection.send(1022,84499585);
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
         taskMc.gotoAndStop(7);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,7,"mc7"]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["哥哥…你来到这里一定有什么目的，难道你想帮助上古一族吗？你要知道他们可不是一般的精灵！"],["哼哼…好好看着吧！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,8,"mc8"]],[TaskStoryPlayer.DIALOG,[NPC.HEIYING_MIUSI_GE,["库贝萨…还记的那次的圣战吗？是谁把你害成这样，你复仇的时刻已经到了，去展现上古一族的实力吧！"],["小子…是你复苏了我吗？"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["他们…他们简直太可怕了，居然是天蛇星盟主复苏了上古一族，幕后黑手原来就是你！"],["小息，别冲动！"]]],[TaskStoryPlayer.DIALOG,[NPC.KUBEISA,["当然记得…0xff0000圣灵系的谱尼…还有次元系的星灵王0xffffff！我一定要干掉你们，为上古一族献祭！"],["库贝萨…这就去吧！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,9,"mc9"]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["什么…少主缪斯和泽拉斯也不是他们对手，这可怎么办！还有谁能阻止它们呢！"],["看来这次我们是回不去了！"]]],[TaskStoryPlayer.DIALOG,[NPC.KUBEISA,["没人能阻止上古一族的崛起，更没有人能阻止我库贝萨，整个宇宙都是属于我的！我要一洗雪耻！"],["这里就交给你们了！"]]],[TaskStoryPlayer.DIALOG,[NPC.HEIYING_MIUSI_GE,["斯吉亚…杰洛里！干掉他们，我不想有谁阻止我的计划，你们听明白了吗？"],["遵命！盟主！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,10,"mc10"]],[TaskStoryPlayer.DIALOG,[NPC.SIJIYA,["太好了，咱们旧账新账一起算一下吧！这可是千载难逢的好机会，鹰眼杰洛里，你可别手软哦！"],["放心吧！我一定会尽力的！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["伙伴们，该我们上场了，守护少主缪斯和泽拉斯，我们义无反顾！"],["大家有信心吗？"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["哼哼…对付叛徒我最拿手了，让你们也尝尝我们赛尔先锋队的愤怒吧！"],["废话少说…来吧！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1480_3",true]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1480.TASK_ID,TaskController_1480.TASK_STAGE_3,function(param1:Boolean):void
            {
               SocketConnection.send(1022,84499586);
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
         taskMc.gotoAndStop(10);
         story = [[TaskStoryPlayer.DIALOG,[NPC.SIJIYA,["好强的对手…这次算你们走运！杰洛里，咱们走！"],["别跑啊！你们！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,11,"mc11"]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["多谢你的帮助，请问你是？？？"],["宇宙超级警察！"]]],[TaskStoryPlayer.DIALOG,[NPC.BIANFUXIA,["我就是维护宇宙和平…一生的志愿就是将海盗集团全部绳之于法的宇宙超级警察布鲁斯！"],["哇…简直太酷了！"]]],[TaskStoryPlayer.CARTOON,["cartoon/task_1480_1"]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["布鲁斯，你好棒啊！我们可以成为朋友吗？"],["当然可以！"]]],[TaskStoryPlayer.DIALOG,[NPC.BIANFUXIA,["好了，我不和你们多说了，我还要去追赶上古一族呢！他们也是我这次来的目标！"],["小心啊！" + NPC.BIANFUXIA + "！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,12,"mc12"]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["这次也算是剿灭了一部分上古一族，不过我想它们一定还散落在宇宙各处！"],["我们先把缪斯和泽拉斯带回去！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["赛尔，早点回来哦！我们在飞船上等你！"],["恩恩，放心吧！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,13,"mc13"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["不好…谱尼和星灵王有危险，我这就去告诉他们！"],["不能让库贝萨得逞！"]]]];
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
         SocketConnection.send(1022,84499587);
         destroy();
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            var e:MapEvent = param1;
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            ModuleManager.showModule(ClientConfig.getTaskModule("TaskMainTotalComplete"),"正在打开...",function():void
            {
               TasksManager.complete(TaskController_1480.TASK_ID,TaskController_1480.TASK_STAGE_4);
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
