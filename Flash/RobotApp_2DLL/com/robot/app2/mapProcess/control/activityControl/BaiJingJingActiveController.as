package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TaskIconManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class BaiJingJingActiveController
   {
      
      private static const HUAJUANJUAN_TASK:int = 1888;
      
      private static const TAIBAI_TASK:int = 1903;
      
      private static const BABE_TASK:int = 1911;
      
      private static var _map:BaseMapProcess;
      
      private static var _mapIdArr:Array = [60,690,326,314];
      
      public static var icon:MovieClip;
      
      private static var _showType:int = 0;
       
      
      public function BaiJingJingActiveController()
      {
         super();
      }
      
      public static function set showType(param1:int) : void
      {
         _showType = param1;
         if(!_showType)
         {
            icon.visible = true;
         }
         else
         {
            icon.visible = false;
         }
      }
      
      public static function get showType() : int
      {
         return _showType;
      }
      
      public static function setup() : void
      {
         icon = UIManager.getMovieClip("BaiJingJing_icon");
         icon.buttonMode = true;
         icon.addEventListener(MouseEvent.CLICK,onClickIcon);
         TaskIconManager.addIcon(icon,TaskIconManager.LEFT_SIDE,5);
         ToolTipManager.add(icon,"领取圣婴大王");
         icon.gotoAndStop(1);
         SocketConnection.sendWithCallback(CommandID.COMMAND_46075,function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:int = _loc2_.readByte();
            showType = _loc3_;
            if(!_loc3_)
            {
               icon.visible = true;
            }
            else
            {
               icon.visible = false;
            }
         },22401);
      }
      
      private static function onClickIcon(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("QiBingPanel"));
      }
      
      public static function goMapHandler(param1:String) : void
      {
         var _loc2_:String = param1.replace(/go/gi,"");
         var _loc3_:int = int(_loc2_);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,_onChangeMap);
         MapManager.changeMap(_mapIdArr[_loc3_ - 1]);
         var _loc4_:Array = [86066938,86066939,86066940,86066941];
         SocketConnection.send(1022,_loc4_[_loc3_ - 1]);
      }
      
      private static function _onChangeMap(param1:MapEvent) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,_onChangeMap);
         if(param1.mapModel.id == 60)
         {
            CommonUI.addYellowArrow(param1.mapModel.topLevel,700,120,-120);
         }
         else if(param1.mapModel.id == 690)
         {
            CommonUI.addYellowArrow(param1.mapModel.topLevel,310,150,-60);
         }
      }
      
      public static function onEquip() : void
      {
         if(TasksManager.getTaskStatus(HUAJUANJUAN_TASK) == TasksManager.COMPLETE)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("HuaJuanJuanPanel"));
         }
         else if(MapManager.currentMap.id == 77)
         {
            startHuaJuaJuanPreTask();
         }
         else
         {
            MapManager.changeMap(77);
         }
      }
      
      public static function onTaiBaiNpc() : void
      {
         if(TasksManager.getTaskStatus(TAIBAI_TASK) == TasksManager.COMPLETE)
         {
            NpcDialog.show(NPC.XINGTAIBAI,["哎呀！老头子好像丢东西了！衣冠不整真的好难为情，谁能帮老头子找到…"],["好萌的小老头，我来帮你","我还有事，还是先撤吧"],[function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("TaiBaiMainPanel"));
            },null]);
         }
         else
         {
            startTaibaiPreTask();
         }
      }
      
      public static function onBabeNpc() : void
      {
         if(TasksManager.getTaskStatus(BABE_TASK) == TasksManager.COMPLETE)
         {
            NpcDialog.show(NPC.NUHUOSHENGYING,["本大王要把这里全部拆光！帮我的主人——恶灵兽大人，一雪前耻！"],["小小年纪火气这么大，让我好好教训教训你。","小孩子不要打打杀杀的嘛。"],[function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("SaintBabeMainPanel"));
            },null]);
         }
         else
         {
            startBabeTask();
         }
      }
      
      public static function fight() : void
      {
         SocketConnection.sendWithCallback(CommandID.XIYOU_TAIBAI_SET_CATCH,function(param1:SocketEvent):void
         {
            FightManager.fightWithBoss("星星",8);
         });
      }
      
      private static function startBabeTask() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_77_saint_babe"),function(param1:MovieClip):void
         {
            var story:Array;
            var taskMc:MovieClip = null;
            var storyPlayer:TaskStoryPlayer = null;
            var mc:MovieClip = param1;
            taskMc = mc;
            MapManager.currentMap.controlLevel.addChild(taskMc);
            KTool.hideMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(false);
            story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.XINGTAIBAI,["很好，老头子我很满意。现在，报数！"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.TANGNITAILUO,["嘻嘻，你们在玩什么呀？这里有披萨吃吗？"],null]],[TaskStoryPlayer.DIALOG,[NPC.XINGTAIBAI,["披萨？哎，现在的年轻精灵，就知道吃。我们大王快来了，它最见不得比自己萌的精灵了，你还是快点离开吧。"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.TANGNITAILUO,["哈哈哈哈！什么大王，连站都站不稳！啊哈哈哈哈太好笑了！"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.TANGNITAILUO,["别吃我！我，我叫唐尼泰罗，我有3个很讨厌的哥哥，我的武器是长棍，我最爱吃披萨和蛋卷冰淇淋，我最喜欢看的电视节目是……"],null]],[TaskStoryPlayer.DIALOG,[NPC.XINGTAIBAI,["我们对你的兴趣爱好没兴趣……你可以走了，我们还有大事要做。"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]],[TaskStoryPlayer.DIALOG,[NPC.NUHUOSHENGYING,["恶灵兽大人？哦！我们是要帮助恶灵兽大人占领赛尔号的！"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,6,"mc6"]],[TaskStoryPlayer.DIALOG,[NPC.NUHUOSHENGYING,["臭老头，你负责把赛尔号的照明全部破坏！蜘蛛精，你负责咬伤所有赛尔！小白，呃…你负责吃光所有赛尔号的小精灵！"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,7,"mc7"]],[TaskStoryPlayer.DIALOG,[NPC.NUHUOSHENGYING,["你个吃货，你怎么还在这里？不要打扰本大王，快消失。"],null]],[TaskStoryPlayer.DIALOG,[NPC.TANGNITAILUO,["可是，我3个哥哥让我等在这里，我不能离开的。等他们带着披萨来，我请你吃披萨呀。"],null]],[TaskStoryPlayer.DIALOG,[NPC.NUHUOSHENGYING,["披萨？好吃吗？…….那，那你不能打扰我，也不许跟我的手下说你给我吃披萨了。"],["没问题~你要干什么呀？"]]],[TaskStoryPlayer.DIALOG,[NPC.NUHUOSHENGYING,["我圣婴大王，要把这里全部拆光！帮我的主人——恶灵兽大人，一雪前耻！你离我远点儿，小心贱你一身火。"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,8,"mc8"]],[TaskStoryPlayer.DIALOG,[NPC.NUHUOSHENGYING,["那个赛尔，对，就是说你。知道你已经偷偷看了很久了，有本事就来挑战我吧。"],null]]];
            storyPlayer = new TaskStoryPlayer();
            storyPlayer.addStory(story);
            storyPlayer.storyEndCallback = function():void
            {
               storyPlayer.destory();
               KTool.showMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(true);
               DisplayUtil.removeForParent(taskMc);
               taskMc = null;
               ModuleManager.showModule(ClientConfig.getAppModule("SaintBabeMainPanel"));
               TasksManager.accept(BABE_TASK,function(param1:Boolean):void
               {
                  var b1:Boolean = param1;
                  TasksManager.complete(BABE_TASK,0,function(param1:Boolean):void
                  {
                  });
               });
            };
            storyPlayer.start();
         });
      }
      
      private static function startHuaJuaJuanPreTask() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_77_huajuanjuan"),function(param1:MovieClip):void
         {
            var story:Array;
            var taskMc:MovieClip = null;
            var storyPlayer:TaskStoryPlayer = null;
            var mc:MovieClip = param1;
            taskMc = mc;
            MapManager.currentMap.controlLevel.addChild(taskMc);
            KTool.hideMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(false);
            story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.HUAJUANJUAN,["我不是小花，请叫我老大。"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.HUAJUANJUAN,["它们俩算什么老大，除了恶灵兽那只大猫，其他我都不放在眼里。我花卷卷才是你的老大。"],null]],[TaskStoryPlayer.DIALOG,[NPC.BAIJINGJING,["这已经是你第1023次在公开场合说伟大的恶灵兽大人是猫了！你不要连累我好不好……"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.BAIJINGJING,["喊那么大声谁不会。想要成为嘻游天团的老大，就必须得到我们所有成员的认可。我是没意见，我只要吃饱就好了。"],null]],[TaskStoryPlayer.DIALOG,[NPC.BAIJINGJING,["它们俩呢？它们俩那么凶，会揍扁你的。"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.HUAJUANJUAN,["霸王龙？哼，我决定了，我要打败它，扬名立万！等它们俩来赛尔号，知道我在这里的名气，就会让心服口服！"],null]],[TaskStoryPlayer.DIALOG,[NPC.BAIJINGJING,["你冷静点，它好像很厉害啊。老大它们下个星期就会赶到赛尔号了，你能在这之前打败霸王龙吗？"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]],[TaskStoryPlayer.DIALOG,[NPC.BAIJINGJING,["咦？" + MainManager.actorInfo.formatNick + "，你也在这里啊。你能帮小花挑战霸王龙吗？它是我最好的朋友，我可不想看它挨揍……"],["好吧，让我看看我能帮忙做什么吧"]]]];
            storyPlayer = new TaskStoryPlayer();
            storyPlayer.addStory(story);
            storyPlayer.storyEndCallback = function():void
            {
               storyPlayer.destory();
               KTool.showMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(true);
               DisplayUtil.removeForParent(taskMc);
               taskMc = null;
               ModuleManager.showModule(ClientConfig.getAppModule("HuaJuanJuanPanel"));
               TasksManager.accept(HUAJUANJUAN_TASK,function(param1:Boolean):void
               {
                  var b1:Boolean = param1;
                  TasksManager.complete(HUAJUANJUAN_TASK,0,function(param1:Boolean):void
                  {
                  });
               });
            };
            storyPlayer.start();
         });
      }
      
      private static function startTaibaiPreTask() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_77_taibai"),function(param1:MovieClip):void
         {
            var story:Array;
            var taskMc:MovieClip = null;
            var storyPlayer:TaskStoryPlayer = null;
            var mc:MovieClip = param1;
            taskMc = mc;
            MapManager.currentMap.controlLevel.addChild(taskMc);
            KTool.hideMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(false);
            story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.BAIJINGJING,["小花…小花，你别躲着我了，让我看看吧，是不是伤得很严重啊。呆老头来了，它也在找你呢。"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.HUAJUANJUAN,["小白，连你也嘲笑我……那老白和老大肯定要笑掉牙了…呜呜呜…我哪里知道那只霸王龙这么厉害……"],null]],[TaskStoryPlayer.DIALOG,[NPC.BAIJINGJING,["这已经是你第1023次在公开场合说伟大的恶灵兽大人是猫了！你不要连累我好不好……"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.XINGTAIBAI,["全宇宙都传遍了，说你不自量力单挑霸王龙，被揍得只剩下三条腿了。你们这些孩子，就是不稳重。"],null]],[TaskStoryPlayer.DIALOG,[NPC.HUAJUANJUAN,["哼，是兄弟就一起去帮我揍它！替我雪耻！"],["（妹子，措辞有点不对啊）"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.XINGTAIBAI,["这样吧，老头子我去教育教育那头霸王龙。遇到小孩子胡闹，怎么可以下这么狠的手呢？"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]],[TaskStoryPlayer.DIALOG,[NPC.XINGTAIBAI,["哎呀！老头子好像丢东西了！我先把东西找齐了再去找霸王龙算账，衣冠不整，不礼貌啊。"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,6,"mc6"]],[TaskStoryPlayer.DIALOG,[NPC.BAIJINGJING,["…我们一起帮老头子找找吧，它这糊里糊涂的样子，不知道要找到什么时候呢。小花，走吧。"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,7,"mc7"]]];
            storyPlayer = new TaskStoryPlayer();
            storyPlayer.addStory(story);
            storyPlayer.storyEndCallback = function():void
            {
               storyPlayer.destory();
               KTool.showMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(true);
               DisplayUtil.removeForParent(taskMc);
               taskMc = null;
               ModuleManager.showModule(ClientConfig.getAppModule("TaiBaiMainPanel"));
               TasksManager.accept(TAIBAI_TASK,function(param1:Boolean):void
               {
                  var b1:Boolean = param1;
                  TasksManager.complete(TAIBAI_TASK,0,function(param1:Boolean):void
                  {
                  });
               });
            };
            storyPlayer.start();
         });
      }
      
      public static function taskHandler() : void
      {
         NpcDialog.show(NPC.SEER,["你是谁？来抢我的暗影能量吗？我才不会告诉你怎样才能得到我这么可爱这么萌的精灵呢~"],["白晶晶，乖，跟我回赛尔号吧~（查看任务进度）","我不喜欢这个不礼貌的小家伙"],[function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("BaiJingJingPanel"));
         },function():void
         {
         }]);
      }
   }
}
