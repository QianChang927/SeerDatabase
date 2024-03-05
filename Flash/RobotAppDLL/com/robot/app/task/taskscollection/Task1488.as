package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1488;
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
   import org.taomee.utils.DisplayUtil;
   
   public class Task1488
   {
      
      private static const MAP_ID:int = 88;
      
      private static const MAP_LOCAL_ID:int = 10295;
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1488()
      {
         super();
      }
      
      private static function get taskMc() : MovieClip
      {
         return _map.conLevel["task1488mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1488.TASK_ID);
      }
      
      public static function initForMap10295(param1:BaseMapProcess) : void
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
         TasksManager.getProStatusList(TaskController_1488.TASK_ID,function(param1:Array):void
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
         var story:Array = [[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["千万不要轻视海盗集团的存在，现在我们可谓是腹背受敌，形势对我们十分不利！"],["船长，让我们去迎战吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["让我再好好计划一下，首先我们不能让上古魔尊—库贝萨找到谱尼以及星灵王…其次对于海盗的突袭我们也要奋力而战！"],["这可怎么抉择啊！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1488_1",false]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["看上去卡兰星系已经沦陷，上古一族的侵略可谓势不可挡啊！战神联盟的连连退败，相信已经没有谁能阻止它们了！"],["船长，让我去试试吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["趁现在上古一族正在入侵其他星球，让我再去一次米斯特瑞星，我们也该用用海盗的伎俩了，偷袭上古魔尊，一定会成功的！"],["不行…这样太危险了！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["但是这可是我们唯一的希望啊！难道就眼睁睁的看着上古一族和海盗集团将整个宇宙弄的天翻地覆吗？"],["报告船长，我们收到海盗的音频！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1488_2",false]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["看来是一定要殊死奋战了！通知赛尔号上所有的成员，准备迎战！"],["船长，你就让我去吧！时间不多了！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["哎…好吧！那你就和赛小息他们一起去吧！不过你们千万注意安全，一旦海盗集团发现你们的踪迹一定会来对付你们！"],["遵命船长！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1488.TASK_ID,TaskController_1488.TASK_STAGE_1,function(param1:Boolean):void
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
         var storyPlayer:TaskStoryPlayer = null;
         var story:Array = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["伙伴们，我们这次可是要做敢死队了，记得我们的任务吗？趁上古一族入侵其他星球的时候，让我们一举歼灭上古一族！"],["别忘记海盗也在寻找上古魔尊！"]]],[TaskStoryPlayer.DIALOG,[NPC.ATIEDA,["如果这个时候出现海盗，我们可就完了！"],["阿铁打，你个乌鸦嘴！"]]],[TaskStoryPlayer.DIALOG,[NPC.ATIEDA,["呸呸呸…都是我不好，这个时候怎么提到海盗了！大家看，这些家伙都在往地下走！"],["看来下面一定有什么玄机！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.ATIEDA,["不好被它们发现了，一定不能让它们把门关上，让我先上！"],["阿铁打你小心啊！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.KALULU,["阿铁打，你没事吧！这些家伙简直太可恶了…"],["我没事啦！又让他们跑了！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["看来想要彻底剿灭上古一族，还是很有难度的！现在这些家伙一定在地下欢呼雀跃着！"],["我们绝不能放弃！"]]],[TaskStoryPlayer.DIALOG,[NPC.ATIEDA,["我真想现在就将这片大地劈开，将这些上古一族全部消灭，难道我们真的阻止不了上古一族的崛起吗？"],["会有办法的！"]]],[TaskStoryPlayer.DIALOG,[NPC.SIJIYA,["哈哈哈…你们还跟的挺紧的嘛！你们死了这条心吧！我是不会让你们破坏天蛇星盟主的计划！"],["伪装者…怎么又是你！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["斯吉亚，我们不会退缩的，鹿死谁手还不好说哦！"],["呵呵，那就来尝试一下我的恐怖吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.ATIEDA,["大家注意，这家伙会隐身更会伪装，我们可要睁大眼睛自己观察了！"],["大家小心！"]]],[TaskStoryPlayer.DIALOG,[NPC.KALULU,["我们一定不会输的，赛尔号还在等着我们支援呢！伙伴们，我们速战速决！"],["恩恩，大家一起上！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,6,"mc6"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["大家没事吧！可恶的家伙，看我的！"],["等等，我们还没有倒下呢！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,7,"mc7"]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["别走…还没有结束呢！我们再来过！"],["解决你们有辱我的名声！"]]],[TaskStoryPlayer.DIALOG,[NPC.SIJIYA,["哼哼…夺去你们的性命对我来说简直是易如反掌，我的目标是少主缪斯！"],["你不会成功的！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,8,"mc8"]],[TaskStoryPlayer.DIALOG,[NPC.SIJIYA,["少主缪斯，我和你的对决很快就会到来，我一定会把你带回天蛇星的，你就等着吧！很快我们就会再见的！"],["斯吉亚，我等你！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,9,"mc9"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1488.TASK_ID,TaskController_1488.TASK_STAGE_2,function(param1:Boolean):void
            {
               SocketConnection.send(1022,84499584);
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
         var storyPlayer:TaskStoryPlayer = null;
         var story:Array = [[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["少主缪斯，你怎么来了，赛尔号和海盗的交战怎么样了！"],["一切还算顺利，你们别担心！"]]],[TaskStoryPlayer.DIALOG,[NPC.KALULU,["真的吗？你没有骗我们吧！据说这次海盗集团派了数量超过我们一般的舰船，赛尔号真的没事吗？"],["当然，因为…"]]],[TaskStoryPlayer.CARTOON,["cartoon/task_1488_1"]],[TaskStoryPlayer.DIALOG,[NPC.KALULU,["四大神兽都来了，这真是天都帮我们啊！这下我们可就放心了，接下来就要想办法到那扇门里面去！"],["上古一族就在门的背后！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["恩恩，我这就帮你们把门砸开，你们往后退一点！"],["靠你了，缪斯！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["我绝不会允许自己的伙伴收到伤害，斯吉亚…哥哥，你们等着我的回归吧！"],["看我的！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,10,"mc10"]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["这下机会来了，说不定我们这次就可以彻底消灭上古一族！"],["恩恩，我也这么觉得！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,11,"mc11"]],[TaskStoryPlayer.DIALOG,[NPC.BITEDAREN,["好久不见啊！朋友们，哈哈哈！"],["谁会是海盗的朋友！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZOG,["能和比特大人做朋友那该是多么光荣啊！你们这群无知的赛尔，居然敢如此顶撞比特大人！"],["不想活了吗？"]]],[TaskStoryPlayer.DIALOG,[NPC.BITEDAREN,["没关系，既然不能作为朋友，那么就一定是敌人，对待敌人唯一的待遇就是消灭他们！"],["这里交给你们了！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,12,"mc12"]],[TaskStoryPlayer.DIALOG,[NPC.ZOG,["哈哈哈，这可是我们最新研制的新型武器，要不你们来试试他的威力吧！"],["先锋队长，干掉你面前的敌人！"]]],[TaskStoryPlayer.DIALOG,[NPC.NEW_ALLISON,["你们就慢慢享受吧！海盗出品，必属精品…"],["白痴，你说的太多了！"]]],[TaskStoryPlayer.DIALOG,[NPC.KAIPUTE,["目标已经锁定，准备攻击…"],["这家伙看上去就很厉害的样子！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1488_3",true]],[TaskStoryPlayer.DIALOG,[NPC.AODESI,["这家伙看上去一定是被海盗洗脑，并且一定进行过其他的改造！"],["改造？？？"]]],[TaskStoryPlayer.DIALOG,[NPC.AODESI,["没错，因为我就是从海盗集团成功脱逃出来的，不幸的是队长已经被海盗所控制，而我却不是！"],["那可怎么办啊！"]]],[TaskStoryPlayer.DIALOG,[NPC.AODESI,["没有其他办法，除非有谁能解除海盗集团的程序，我相信只有一个人可以办到！"],["那就是合金赛伯斯特！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1488.TASK_ID,TaskController_1488.TASK_STAGE_3,function(param1:Boolean):void
            {
               SocketConnection.send(1022,84499584);
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
         var storyPlayer:TaskStoryPlayer = null;
         var story:Array = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,13,"mc13"]],[TaskStoryPlayer.DIALOG,[NPC.JINCHI_TUOLUKE,["刚刚这里是否发生过战斗，我们跟着这股强大的能量找到这里！"],["X战队…合金赛伯斯特，你快看看先锋队长吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.AODESI,["X战队，我总算是亲眼目睹了，果然都是具有最强实力的团队！看来先锋队长只能交给你们了！"],["放心吧！我们会照顾他的！"]]],[TaskStoryPlayer.DIALOG,[NPC.AODESI,[MainManager.actorInfo.formatNick + "我会在这里一直监视着上古一族，你们就放心吧！如果想和我切磋的话，记得认清我的能量球！"],["好的，没问题！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,14,"mc14"]],[TaskStoryPlayer.DIALOG,[NPC.HEJIN_SAIBOSITE,["先锋队长就交给我们了，相信我的能力一定可以让他成为X战队的一员！"],["太棒了，那拜托了！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,15,"mc15"]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,[MainManager.actorInfo.formatNick + "相信少主缪斯一定在下面剿灭上古一族，我们先赶回赛尔号，等等你记得和少主缪斯一起回来哦！"],["恩恩，没问题，我会在这里等她的！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,16,"mc16"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["少主缪斯，你可一定要在下面好好给上古一族一个下马威啊！消灭上古一族就看你的了！"],["加油，少主缪斯！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            endTask();
         };
         storyPlayer.start();
      }
      
      private static function endTask() : void
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
               TasksManager.complete(TaskController_1488.TASK_ID,TaskController_1488.TASK_STAGE_4);
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
