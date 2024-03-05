package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1477;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1477
   {
      
      private static const MAP_ID:int = 83;
      
      private static const MAP_LOCAL_ID:int = 10293;
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1477()
      {
         super();
      }
      
      private static function get taskMc() : MovieClip
      {
         return _map.conLevel["task1477mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1477.TASK_ID);
      }
      
      public static function initForMap10293(param1:BaseMapProcess) : void
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
         TasksManager.getProStatusList(TaskController_1477.TASK_ID,function(param1:Array):void
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
         var story:Array = [[TaskStoryPlayer.DIALOG,[NPC.SEER,["作为赛尔，更作为飞船的一份子…我早已将自己的生命献给赛尔号和整个宇宙！"],["我从来没有胆怯过！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["好样的！不愧是赛尔先锋队的优秀士兵，这次的灾难可能是史上最大的，你要做好心理准备哦！"],["人生就是要活的有价值！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1477_1",false]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,[MainManager.actorInfo.formatNick + "，你们有一个艰巨的任务，还记的上次被埋在地下的大地之母吗？希望你们能把她救出来！"],["只有她知道发生了什么事情！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["遵命！我们一定会把大地之母成功拯救出来的，就算遇到上古一族我们也不会退缩的！"],["恩恩，你们放心吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["我已经派人通知战神联盟，相信他们很快就要赶到了。但是一定要小心上古一族，特别是那个怪物！"],["恩恩，放心吧！伙伴们出发！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1477_2",false]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1477.TASK_ID,TaskController_1477.TASK_STAGE_1,function(param1:Boolean):void
            {
               if(param1)
               {
                  SocketConnection.send(1022,84475904 + 1477 * 16 + 1);
                  MapManager.changeLocalMap(MAP_LOCAL_ID);
               }
            });
         };
         storyPlayer.start();
      }
      
      private static function startState_2() : void
      {
         taskMc.gotoAndStop(14);
         taskMc.buttonMode = true;
         taskMc.addEventListener(MouseEvent.CLICK,startState_2Pro);
      }
      
      protected static function startState_2Pro(param1:MouseEvent) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var event:MouseEvent = param1;
         taskMc.removeEventListener(MouseEvent.CLICK,startState_2Pro);
         story = [[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["大家小心为妙，这里可不是闹着玩的，你们快看…那个中央家伙是不是上次攻击我们的怪物！"],["上古一族！！！！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["我们这次的目的是寻找大地之母的下落，在有可能的条件下把她救出来，千万不要惊动上古一族！"],["大家知道了吗？"]]],[TaskStoryPlayer.DIALOG,[NPC.KALULU,["恩恩，小息说的对！这里太可怕了，我们还是快点找大地之母吧！我讨厌这里！"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["伙伴们，这下面是什么啊！怎么会有如此耀眼的光芒呢！"],["会不会是大地之母？"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["对呀！我怎么没有想到…很有可能是被困在这里了！"],["大家让开…让我来！"]]],[TaskStoryPlayer.DIALOG,[NPC.KALULU,["小息…你要小心啊！还不知道下面又会出现什么怪物，你别靠太近！"],["放心吧！不会有事的~"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["…让我再仔细的听听，下面好像有谁在哭泣…但又好像不是！"],["赛小息，到底是什么！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1477_3",true]],[TaskStoryPlayer.DIALOG,[NPC.KALULU,["小息，你听到了什么！大地之母真的在地下吗？"],["是的，而且非常危险！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["下面一定是上古一族的老巢…现在看来想拯救大地之母，真是困难重重！"],["那可怎么办啊！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["真是可恶…战神联盟怎么还没有赶到，就单靠我们几个人的实力，一定不是上古一族的对手！"],["大伙别着急，让我们再想想！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["咦…这是谁？怎么会出现在这里，你们快听…他一直在喊着妈妈！"],["难道是大地之母的儿子？"]]],[TaskStoryPlayer.DIALOG,[NPC.XIAOBEI,["妈妈…我好难受…你在哪里啊！呜呜呜~"],["好可怜的孩子！"]]],[TaskStoryPlayer.DIALOG,[NPC.KALULU,["他一定是来寻找自己的母亲，但是看他这么弱小的身躯，能做些什么呢！"],["要不我们一起想想办法！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.XIAOBEI,["我是来找妈妈的…哥哥，你不要每次都对我这么敌视好吗？我们是亲兄弟，应该相亲相爱！"],["我没有你这样的弟弟！"]]],[TaskStoryPlayer.DIALOG,[NPC.LAOLUNSI,["从小到大妈妈对你一直呵护倍加…我呢！我得到了什么，除了无止尽的修炼！"],["哥哥，不是这样的！"]]],[TaskStoryPlayer.DIALOG,[NPC.LAOLUNSI,["谁管你是不是，你快走…否则我要动手了！"],["这个哥哥看上去太过分了！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]],[TaskStoryPlayer.DIALOG,[NPC.LEIYI,["好了，大家不要闹了！你们难道不知道这里是上古一族的老巢吗？先救大地之母，其他的以后再说！"],["谁有意见吗？"]]],[TaskStoryPlayer.DIALOG,[NPC.GAIYA,["现在这里一切听从我们战神联盟的指示，谁都不准擅作主张，劳伦斯你最好离你的弟弟远点！"],["我会一直盯着你的！"]]],[TaskStoryPlayer.DIALOG,[NPC.KAXIUSI_WHITE,["等把你们妈妈大地之母拯救出来，你自然就会知道她的苦衷了！"],["战神联盟开始行动吧！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1477.TASK_ID,TaskController_1477.TASK_STAGE_2,function(param1:Boolean):void
            {
               if(param1)
               {
                  SocketConnection.send(1022,84475904 + 1477 * 16 + 2);
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
         taskMc.gotoAndStop(6);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,6,"mc6"]],[TaskStoryPlayer.DIALOG,[NPC.LEIYI,["伙伴们，准备好了吗？如果这次不能将大地之母成功救出，那么一旦上古一族彻底复苏那就更加困难了！"],["恩恩，大家一起上！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,7,"mc7"]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["小贝，你别着急，相信战神联盟一定拯救大地之母，你就等着和你的妈妈一起团聚吧！"],["恩恩，谢谢你们！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,8,"mc8"]],[TaskStoryPlayer.DIALOG,[NPC.LEIYI,["大家快点带着大地之母离开这里，上古一族彻底复苏了，你们先走，我们会想办法拖住他们的！"],["什么？这么快！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["不…我们要和你们一起战斗…阻击上古一族是全宇宙的正义之举，谁都不能少！"],["这里太危险了！"]]],[TaskStoryPlayer.DIALOG,[NPC.LAOLUNSI,["妈妈…你终于被拯救出来了，我们快走吧！咱们去个安全点的地方！"],["带上你的弟弟吧！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,9,"mc9"]],[TaskStoryPlayer.DIALOG,[NPC.LEIYI,["动作真快，看来这一战在所难免了，战神联盟准备迎战！"],["雷神…我们准备好了！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1477_4",true]],[TaskStoryPlayer.DIALOG,[NPC.DADIZHIMU,["小贝…小贝！我可爱的儿子啊！！！！"],["小贝的能量消失了…"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1477.TASK_ID,TaskController_1477.TASK_STAGE_3,function(param1:Boolean):void
            {
               if(param1)
               {
                  SocketConnection.send(1022,84475904 + 1477 * 16 + 3);
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
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,10,"mc10"]],[TaskStoryPlayer.DIALOG,[NPC.LAOLUNSI,["妈妈…我…对不起，因为我的缘故，所以弟弟才会这样！"],["这不怪你…"]]],[TaskStoryPlayer.DIALOG,[NPC.DADIZHIMU,["劳伦斯！你们都是我最爱的孩子，只是你们的属性不能共存，所以我才会把你们分开！"],["你弟弟是冰系的，所以容易受到伤害！"]]],[TaskStoryPlayer.DIALOG,[NPC.DADIZHIMU,["所以我对你的要求会非常高，希望你长大后能够保护弟弟，可能是我做母亲表达的不是很好，但是这一切都是我对你们的爱！"],["妈妈…我错了！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,11,"mc11"]],[TaskStoryPlayer.DIALOG,[NPC.DADIZHIMU,["拯救小贝的事情先放一下吧！我们去看看战神联盟的状况，这次它们伤的不轻啊！"],["对了，怎么把他们忘记了！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,12,"mc12"]],[TaskStoryPlayer.DIALOG,[NPC.DADIZHIMU,["这次战神联盟算是尽力了，他们四个一起联手都不是库贝萨的对手，今后我们的任务就更加艰难了！"],["我们还是先送他们回去吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["恩恩，我也去找找博士派特，看看有什么方法可以治愈他们的伤势！"],["那事不宜迟，我们这就走吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["你们先走吧！我还想再调查一下，我稍后就会返回飞船的！"],["好吧！那你自己当心点！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,13,"mc13"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["上古一族…一定有办法可以消灭他们，我这就去招募所有正义的战士！"],["库贝萨将由我击倒！"]]]];
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
         SocketConnection.send(1022,84475904 + 1477 * 16 + 4);
         destroy();
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            var e:MapEvent = param1;
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            ModuleManager.showModule(ClientConfig.getTaskModule("TaskMainTotalComplete"),"正在打开...",function():void
            {
               TasksManager.complete(TaskController_1477.TASK_ID,TaskController_1477.TASK_STAGE_4);
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
