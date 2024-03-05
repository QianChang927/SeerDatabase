package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1476;
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
   
   public class Task1476
   {
      
      private static const MAP_ID:int = 83;
      
      private static const MAP_LOCAL_ID:int = 10291;
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1476()
      {
         super();
      }
      
      private static function get taskMc() : MovieClip
      {
         return _map.conLevel["task1476mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1476.TASK_ID);
      }
      
      public static function initForMap10291(param1:BaseMapProcess) : void
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
         TasksManager.getProStatusList(TaskController_1476.TASK_ID,function(param1:Array):void
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
         var story:Array = [[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["千真万确，赛尔号上的仪器是最先进也是最精准的，每次收集的信息都是百分百正确，我想这次也不会有任何偏差！"],["那有没有派卫兵出去勘察呢？"]]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["这就是最让我感到不安的事情，我们连续派出了三批勘察队，但是目前为止…无一生还！他们是生是死还是一个未知数！"],["什么…三批都没有回来！！！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1476_1",false]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["卫兵！！！将这些残骸全部捡回来，我不能让这些兄弟都漂流在外，他们该回家了！"],["船长…让我去卡兰星系吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["不能让这些卫兵白白牺牲啊！我一定要为他们报仇，其中一定有原因的！"],["冷静点…事情没你想的这么简单！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["如我所料…一定有大事要发生或者已经发生…否则我们的卫兵为何有如此大的损伤，卡兰星系太危险了！"],["船长…求你了让我去吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["这样吧！你通知赛小息他们先去0xff0000米斯特瑞星0xffffff，寻求战神联盟的帮助，我相信他们一定可以帮助我们的！"],["恩恩，我一定会查出真相的！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1476_2",false]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1476.TASK_ID,TaskController_1476.TASK_STAGE_1,function(param1:Boolean):void
            {
               MapManager.changeLocalMap(MAP_LOCAL_ID);
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
         story = [[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,[MainManager.actorInfo.formatNick + "，那股强大的能量就是从这里发出的，我想我们离真相越来越近了！"],["恩恩，一定要查出是什么原因！"]]],[TaskStoryPlayer.DIALOG,[NPC.ATIEDA,["快看…那家伙在干吗？好像在挖什么东西，难道地下有什么东西！！"],["地下…"]]],[TaskStoryPlayer.DIALOG,[NPC.ATIEDA,["哼哼...让我先去问问他，说不定他是海盗集团或者和恶灵兽有关！"],["喂…你小子在干吗！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.LAOLUNSI,["麻烦把你的脚从这片土地上挪开，否则别怪我不客气！"],["什么！好大的口气，这里是你的地盘吗？"]]],[TaskStoryPlayer.DIALOG,[NPC.KALULU,["阿铁打，你快问问他是怎么了，在挖什么呢！"],["恩恩，我这就问！"]]],[TaskStoryPlayer.DIALOG,[NPC.ATIEDA,["喂…你没听见吗？我再问你一遍…你在挖什么…难道是黄金财宝吗？"],["我再重复一次！让开！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.LAOLUNSI,["我说了很多遍了，不要踩在这块土地上，难道你没有听见吗？"],["你是谁？为什么在这里挖东西！"]]],[TaskStoryPlayer.DIALOG,[NPC.LAOLUNSI,["我有一位非常重要的人被埋在了地下，我正准备救她！"],["哦哦，一场误会，你需要帮忙吗？"]]],[TaskStoryPlayer.DIALOG,[NPC.LAOLUNSI,["不需要…我会靠我自己的努力去拯救他，作为她的儿子我有这个实力！"],["什么，被困的是你的妈妈！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.DADIZHIMU,["孩子…远古咒语最终还是应验了，妈妈知道你很能干，但是靠你一个人的力量是无法拯救我的，只有找到0xff0000小贝0xffffff，你们齐力同心才行！"],["虽然我知道你不认这个弟弟！"]]],[TaskStoryPlayer.DIALOG,[NPC.LAOLUNSI,["那家伙和我是前世死敌，有我就没有他，妈妈你就放心吧！我一定可以想办法把你救出来的！"],["听我说…孩子！"]]],[TaskStoryPlayer.DIALOG,[NPC.DADIZHIMU,["孩子你和小贝本是俩兄弟，但是却不能在一起！原因是你们0xff0000属性相克0xffffff，一旦见面其中一个必将会受到生命危险！你要理解啊！"],["什么…我们属性相克！"]]],[TaskStoryPlayer.DIALOG,[NPC.DADIZHIMU,["是的…孩子！你是战斗火双属性的，但是你弟弟却是冰系，生来你就克制他，所以妈妈才会不让你们在一起！"],["弟弟他…"]]],[TaskStoryPlayer.CARTOON,["cartoon/task_1476_1"]],[TaskStoryPlayer.DIALOG,[NPC.LAOLUNSI,["这…就是我和弟弟的宿命吗？我们天生就要分开，而且不是一天两天，这将会是一生一世！"],["弟弟…"]]],[TaskStoryPlayer.DIALOG,[NPC.KALULU,["好感人的一家人…我听着都快哭了！米咔快给我抱抱…呜呜呜~~"],["想不到我们竟然会有这样的命运！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]],[TaskStoryPlayer.DIALOG,[NPC.DADIZHIMU,["孩子…一定要找到你的弟弟…只有你们两个齐心才能把妈妈救出来！记得，千万要找到你弟弟！"],["妈妈…我知道了！"]]],[TaskStoryPlayer.DIALOG,[NPC.LAOLUNSI,["弟弟…你在哪里！！哥哥这么多年来就没珍惜过我们的兄弟情义，我这就来找你！"],["我一定要找到你…弟弟！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,6,"mc6"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1476.TASK_ID,TaskController_1476.TASK_STAGE_2,function(param1:Boolean):void
            {
               startState_3();
            });
         };
         storyPlayer.start();
      }
      
      private static function startState_3() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         taskMc.gotoAndStop(6);
         story = [[TaskStoryPlayer.DIALOG,[NPC.KALULU,["真希望他们兄弟能够团圆…不过我在想他们的妈妈怎么会在地下呢？还有那个远古的咒语是什么！"],["听上去好奇怪啊！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["不管这么多，我们先寻找强大的能量体再说！说不定就和这事有关呢！"],["恩恩，我们分头寻找！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,7,"mc7"]],[TaskStoryPlayer.DIALOG,[NPC.SIJIYA,["哟…你们的嗅觉比我还不错…居然可以找到这里！这样看来你们也一定发现了什么！"],["斯吉亚、杰洛里你们来这里干嘛！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["你们这群家伙一定图谋不轨，快说…你们想干嘛！"],["哈哈哈，不妨告诉你们！"]]],[TaskStoryPlayer.DIALOG,[NPC.SIJIYA,["我们正在寻找上古一族的踪迹，只要上古一族复苏，那么天蛇星盟主就能获得上古一族的力量，然后统治宇宙！"],["做梦…有我们赛尔在，你们休想成功！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,8,"mc8"]],[TaskStoryPlayer.DIALOG,[NPC.SIJIYA,["哟…都到齐了！看来这次的召唤仪式还挺受欢迎的嘛！杰洛里你说是吗？"],["就算来再多的人也是没用的！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["住手…一旦上古一族复苏不要说我们，就算是天蛇星也难道一劫，你们想利用上古一族，小心聪明反被聪明误！"],["少主缪斯你一定是怕了！"]]],[TaskStoryPlayer.DIALOG,[NPC.LEIYI,["伙伴们，在路上少主缪斯已经把所有的事情和我说了，我们一定要阻止上古一族的苏醒，否则宇宙真的就麻烦了！"],["恩恩，大家一起上！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,9,"mc9"]],[TaskStoryPlayer.DIALOG,[NPC.LEIYI,["不好，上古一族一定就在地下…我们要尽快赶上才行，否则真的来不及了！"],["赛小息，你们在上面等我们！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["少主缪斯…雷伊！你们一定要小心啊！下面还有一个伟大的妈妈被囚禁着，你们最好想办法一起把她救上来！"],["妈妈…好吧！我们知道了！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,10,"mc10"]],[TaskStoryPlayer.DIALOG,[NPC.LEIYI,["伙伴们，这是我们第一次进入地下…我们不熟悉地形…大家一定要小心！"],["我们一定要一起返回这里！"]]],[TaskStoryPlayer.DIALOG,[NPC.LEIYI,["一个都不能少，明白吗！"],["遵命！雷神！"]]],[TaskStoryPlayer.DIALOG,[NPC.LEIYI,["好…那我们出发吧！拯救宇宙的命运掌握在我们几个手中，大家准备战斗！"],["出发！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1476.TASK_ID,TaskController_1476.TASK_STAGE_3,function(param1:Boolean):void
            {
               startState_4();
            });
         };
         storyPlayer.start();
      }
      
      private static function startState_4() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         taskMc.gotoAndStop(10);
         story = [[TaskStoryPlayer.FUL_MOVIE,["task_1476_3",true]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["一切都晚了，上古一族的首领库贝萨已经复苏，上古一族即将崛起！"],["上古一族真的有这么可怕吗？"]]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["1000年前，宇宙中的格局分为圣灵系、次元系和上古系，由于上古一族太过凶残，一心想统治宇宙！所以圣灵系和次元系终于联盟了！"],["然后呢！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["最后圣灵系和次元系不惜牺牲自己全族，0xff0000终于将上古一族首领库贝萨封印在宇宙最阴暗也是最寒冷的领域—哀伤之境！0xffffff导致他们0xff0000全族无法进化！0xffffff"],["好厉害啊！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,11,"mc11"]],[TaskStoryPlayer.DIALOG,[NPC.LEIYI,["我也听说过这样的传说，如今上古一族复苏，他们一定会卷土重来，一旦被天蛇星盟主利用，后果真的不敢想象！"],["那我们该怎么办！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["从现在起，全面搜索上古一族的下落，在库贝萨完全苏醒前，消灭他们！"],["那我们去哪里找呢！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["上古一族就像宇宙中的孤魂野鬼，散落在星球最阴暗的地方，不过我想现在他们的首领复苏，他们一定正在赶来的路上！"],["太好了，我们打他个痛快！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,12,"mc12"]],[TaskStoryPlayer.DIALOG,[NPC.LEIYI,["战神联盟听着，各自回到自己的星球，准备好一切，我们这次要出远门了！誓要将上古一族彻底消灭！"],["战神联盟领命！"]]],[TaskStoryPlayer.DIALOG,[NPC.LEIYI,[MainManager.actorInfo.formatNick + "，其他的事情就交给赛尔号了，回去告诉罗杰船长，希望他能在星球外注意海盗的动向，这个时候绝对不能腹背受敌！"],["恩恩，明白！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,13,"mc13"]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,[MainManager.actorInfo.formatNick + "，我们这就返回赛尔号，你可快点回来啊！我们还要计划下一步的方案！"],["恩恩，放心吧！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,14,"mc14"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["上古一族真是害人不浅，不过我发誓，一定要消灭上古一族并且还要帮助" + MainManager.actorInfo.formatNick + "拯救伟大的母亲！"],["我们赛尔是不会屈服的！"]]]];
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
         destroy();
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            var e:MapEvent = param1;
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            ModuleManager.showModule(ClientConfig.getTaskModule("TaskMainTotalComplete"),"正在打开...",function():void
            {
               TasksManager.complete(TaskController_1476.TASK_ID,TaskController_1476.TASK_STAGE_4);
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
