package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.app.task.taskUtils.taskDialog.DialogUtil;
   import com.robot.app.task.taskUtils.taskDialog.TaskQuneProcessor;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.DisplayObject;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   import flash.utils.ByteArray;
   import org.taomee.utils.DisplayUtil;
   
   public class DoomTicketsPart2Activity
   {
      
      public static const WUJIKEXUN_TASKID:int = 1316;
      
      public static const TREE_TASKID:int = 1317;
      
      private static const TREE_RULE_ARR:Array = [50,100,150,200,300];
      
      private static var _hasOwnS:Boolean;
      
      private static var _treeLevel:int;
       
      
      public function DoomTicketsPart2Activity()
      {
         super();
      }
      
      public static function setUp() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function():void
         {
            if([735,60,731].indexOf(MapManager.currentMap.id) != -1)
            {
               if(MapManager.currentMap.depthLevel["justin_jian"] != null)
               {
                  MapListenerManager.add(MapManager.currentMap.depthLevel["justin_jian"],function(param1:*):void
                  {
                     MapManager.changeMap(806);
                  },"返回奇袭战舰");
               }
            }
            if(MapManager.currentMap.id == 806)
            {
               initMap806();
            }
         });
      }
      
      public static function initMap806() : void
      {
         changeMapTypeMC();
         MapListenerManager.add(weibinSpecial as InteractiveObject,onWeiBinSpecialClick,"末日船票第二弹");
         MapListenerManager.add(tree as InteractiveObject,onTreeClick,"绝对闪圣诞树");
         MapListenerManager.add(weiBin as InteractiveObject,onWeiBinClick);
         MapListenerManager.add(giftBtn as InteractiveObject,onGiftBtnClick,"圣诞小人雪啦啦");
         MapListenerManager.add(jiangjiang as InteractiveObject,function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TreeShowPanel"));
         },"绝对闪圣诞树");
         MapListenerManager.add(exchangeBtn as InteractiveObject,function(param1:*):void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("DoomTicketReceivePanel"));
         },"船票领取点");
         mapMv.gotoAndStop(mapMv.totalFrames);
         if(hasOpenBarricade)
         {
            DisplayUtil.removeForParent(weiBin);
            DisplayUtil.removeForParent(door);
            changeMapTypeMC();
         }
         jiangjiang.visible = hasFinisnTreePre;
         updateTreeLevel(function():void
         {
            tree.gotoAndStop(getTreeLevel() + 1);
         });
         mapMv.gotoAndStop(mapMv.totalFrames);
         treeMv.gotoAndStop(treeMv.totalFrames);
         MapListenerManager.add(wujuBtn as InteractiveObject,onwujiBtnClick,"末日船票第二弹");
         xuelalaFather.visible = hasFinisnXuelalaPre;
         if(!hasOpenBarricade)
         {
            ToolBarController.showOrHideAllUser(false);
         }
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function():void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            ToolBarController.showOrHideAllUser(true);
         });
         MapListenerManager.add(xuelalaFather,function(param1:*):void
         {
            AnimateManager.playMcAnimate(mapMv,9,"mc9");
         });
      }
      
      private static function onwujiBtnClick(param1:*) : void
      {
         if(hasFinishWujiPreTask)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("WujikexunPanel"));
         }
         else
         {
            playtask1Pre();
         }
      }
      
      private static function onGiftBtnClick(param1:*) : void
      {
         if(hasFinisnXuelalaPre)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("XuelalaPanel"));
         }
         else
         {
            playXuelalaPre();
         }
      }
      
      private static function onWeiBinSpecialClick(param1:*) : void
      {
         var e:* = param1;
         if(hasFinishWujiPreTask)
         {
            hasOwnTicketS(function(param1:Boolean):void
            {
               var dArr:Array = null;
               var own:Boolean = param1;
               if(own)
               {
                  ItemManager.upDateCollection(1200448,function():void
                  {
                     var num:int = 0;
                     var dArr_1:Array = null;
                     var dArr_2:Array = null;
                     num = int(ItemManager.getNumByID(1200448));
                     if(num != 0)
                     {
                        dArr_1 = [[NPC.WEIBIN_SPECIAL,["0xff0000" + MainManager.actorInfo.formatNick + "，0xFFFFFF你的表现真是太出色了。请继续搜寻那些马虎的小赛尔丢失的螺丝钉。你现在有0xff0000" + num + "0xFFFFFF个马虎螺丝钉，我愿意用0xff0000" + num + "0xFFFFFF个闪闪枞树枝跟你交换。"],["哇，太好了~","我暂时不想换。"]]];
                        DialogUtil.playDilogs(dArr_1,[function():void
                        {
                           SocketConnection.send(CommandID.SUPRISE_WARSHIP_LANDINGSCREW_EXCHANGE_BRANCH,num);
                        }]);
                     }
                     else
                     {
                        dArr_2 = [[NPC.WEIBIN_SPECIAL,["0xff0000" + MainManager.actorInfo.formatNick + "，0xFFFFFF，你的表现真是太出色了。请继续搜寻那些马虎的小赛尔丢失的螺丝钉。多余的马虎螺丝钉，可以到我这里来换成闪闪枞树枝，那边的圣诞树等着你去装饰呢。 "],["哇，太好了，我这就去装饰圣诞树。"]]];
                        DialogUtil.playDilogs(dArr_2,null);
                     }
                  });
               }
               else
               {
                  dArr = [[NPC.WEIBIN_SPECIAL,[MainManager.actorInfo.formatNick + "，将赛尔遗漏在星球上的东西找回来，这是对你全新的考验，希望你早日拿到0xff0000S级船票0xFFFFFF，穿上这套象征顶级荣誉的0xff0000奇袭套装0xFFFFFF。"],["嗯，不辱使命！"]]];
                  DialogUtil.playDilogs(dArr,null);
               }
            });
         }
         else
         {
            playtask1Pre();
         }
      }
      
      private static function onWeiBinClick(param1:*) : void
      {
         var e:* = param1;
         if(!hasOwnTictet)
         {
            ItemManager.getCollection(function():void
            {
               var dArr:Array = null;
               if(hasOwnTictet)
               {
                  openRoad();
               }
               else
               {
                  dArr = [[NPC.SEER,["船票？我还没有船票呢…罗杰船长好像说，今天才开始发放船票啊。天呐！难道我来晚了？"],null],[NPC.WEIBING_1,["看来，又一位赛尔找到这里了~ 嗨0xff0000，" + MainManager.actorInfo.formatNick + "0xFFFFFF，欢迎进入奇袭战舰。不用着急，快点击我边上的0xff0000船票领取点0xFFFFFF，领取你的专属船票。"],["哈哈太好啦~"]]];
                  weiBin.visible = false;
                  MainManager.selfVisible = false;
                  AnimateManager.playMcAnimate(mapMv,1,"mc1",function():void
                  {
                     DialogUtil.playDilogs(dArr,[function():void
                     {
                        MainManager.selfVisible = true;
                        mapMv.gotoAndStop(mapMv.totalFrames);
                        weiBin.visible = true;
                     }]);
                  });
               }
            });
         }
         else
         {
            openRoad();
         }
      }
      
      private static function openRoad() : void
      {
         DisplayUtil.removeForParent(weiBin);
         AnimateManager.playMcAnimate(mapMv,2,"mc2",function():void
         {
            mapMv.gotoAndStop(mapMv.totalFrames);
            DisplayUtil.removeForParent(door);
            changeMapTypeMC();
            BufferRecordManager.setState(MainManager.actorInfo,492,true);
         });
      }
      
      public static function onFightOver(param1:PetFightEvent) : void
      {
         var dARR1:Array = null;
         var dARR:Array = null;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         if((e.dataObj as FightOverInfo).winnerID == MainManager.actorID)
         {
            dARR1 = [[NPC.SEER,["哈哈怎么样啊"],["让你一次"]]];
            DialogUtil.playDilogs(dARR1,[function():void
            {
               xuelala.visible = false;
               AnimateManager.playMcAnimate(mapMv,8,"mc8",function():void
               {
                  mapMv.gotoAndStop(mapMv.totalFrames);
                  xuelala.visible = true;
                  Alarm.show("获得一个雪啦啦礼盒");
               });
            }]);
         }
         else
         {
            dARR = [[NPC.XUELALA,["好歹我也是纳斯琪大人的手下吧。要挑战我？拜托你重视这件事情好不好？带上一只我瞧得上的精灵再来吧。  "],["……气焰太嚣张，一点都不可爱，哼。"]]];
            DialogUtil.playDilogs(dARR,null);
         }
      }
      
      private static function onTreeClick(param1:*) : void
      {
         var e:* = param1;
         if(hasFinisnTreePre)
         {
            ItemManager.getCollection(function():void
            {
               updateTreeLevel(function():void
               {
                  if(canUpdataTree())
                  {
                     tree.visible = false;
                     AnimateManager.playMcAnimate(treeMv,getTreeLevel() + 1,"mc" + (getTreeLevel() + 1),function():void
                     {
                        treeMv.gotoAndStop(treeMv.totalFrames);
                        tree.visible = true;
                        updateTree();
                     });
                  }
                  else
                  {
                     treeErnie();
                  }
               });
            });
         }
         else
         {
            playTreePre();
         }
      }
      
      private static function updateTree() : void
      {
         SocketConnection.addCmdListener(CommandID.SUPRISE_WARSHIP_UPDATE_TREE,function(param1:*):void
         {
            var b:ByteArray;
            var e:* = param1;
            SocketConnection.removeCmdListener(CommandID.SUPRISE_WARSHIP_UPDATE_TREE,arguments.callee);
            b = e.data as ByteArray;
            b.position = 0;
            if(0 != b.readUnsignedInt())
            {
               updateTreeLevel(function():void
               {
                  tree.gotoAndStop(getTreeLevel() + 1);
               });
            }
         });
         SocketConnection.send(CommandID.SUPRISE_WARSHIP_UPDATE_TREE);
      }
      
      private static function treeErnie() : void
      {
         SocketConnection.addCmdListener(CommandID.SUPRISE_WARSHIP_TREE_CAN_ERNIE,function(param1:*):void
         {
            var b:ByteArray;
            var dARR:Array = null;
            var e:* = param1;
            SocketConnection.removeCmdListener(CommandID.SUPRISE_WARSHIP_TREE_CAN_ERNIE,arguments.callee);
            b = e.data as ByteArray;
            if(1 == b.readUnsignedInt())
            {
               AnimateManager.playMcAnimate(mapMv,13,"mc13",function():void
               {
                  mapMv.gotoAndStop(mapMv.totalFrames);
                  SocketConnection.send(CommandID.SUPRISE_WARSHIP_TREE_ERNIE);
               });
            }
            else
            {
               dARR = [[NPC.XUELALA,["那边的铁皮机器人！不要再摇那棵笨树了，你今天都已经摇了0xff000030xFFFFFF次了。大笨树给你什么礼物了？快点拿过来给我看看，我拿堆堆礼盒跟你换！  "],["……不要！"]]];
               DialogUtil.playDilogs(dARR,null);
            }
         });
         SocketConnection.send(CommandID.SUPRISE_WARSHIP_TREE_CAN_ERNIE);
      }
      
      private static function canUpdataTree() : Boolean
      {
         var _loc1_:int = int(ItemManager.getNumByID(1200434));
         if(getTreeLevel() == 5)
         {
            return false;
         }
         if(_loc1_ >= TREE_RULE_ARR[getTreeLevel()])
         {
            return true;
         }
         return false;
      }
      
      private static function playtask1Pre() : void
      {
         weibinSpecial.visible = false;
         AnimateManager.playMcAnimate(mapMv,3,"mc3",function():void
         {
            var dArr:Array = [[NPC.WEIBIN_SPECIAL,["我们的舰队已经陆续登陆到各大星球，确保恶灵兽的摄灵法阵不会伤害到星球上的精灵。不过，贾斯汀站长也在担心一件事情。"],["什么事情？我能帮忙吗？"]],[NPC.WEIBIN_SPECIAL,["部分星球还是安全的，但如果恶灵兽发现这些球与赛尔号、与战神联盟有紧密联系，会不会刻意将魔爪伸向那里？这不是赛尔号愿意看到的。 "],["嗯，确实。我们注意隐藏自己的行踪就行了啊。"]],[NPC.WEIBIN_SPECIAL,["但是，因为这次是全体赛尔总动员，难免会忙中出错，将一些赛尔号才有的东西遗漏在星球上。所以，" + MainManager.actorInfo.formatNick + "0xFFFFFF，你的任务来了"],["嗯，不辱使命！"]]];
            DialogUtil.playDilogs(dArr,[function():void
            {
               TasksManager.accept(WUJIKEXUN_TASKID,function(param1:*):void
               {
                  weibinSpecial.visible = true;
                  mapMv.gotoAndStop(mapMv.totalFrames);
                  TasksManager.complete(WUJIKEXUN_TASKID,0);
               });
            }]);
         });
      }
      
      private static function playXuelalaPre() : void
      {
         var taskQuePro:TaskQuneProcessor = null;
         var d1:Array = [[NPC.SEER,["纳斯琪的爪牙？哼，这么嚣张，活该被我们抓住。嘿嘿，看你毛茸茸的挺可爱的嘛，就让我来教训教训你吧~  "],null]];
         var d2:Array = [[NPC.SEER,["嘻嘻，外面有个倒霉的大家伙撞在玻璃上了哎，好像还卡住了呢。喂，它在说什么？小坏蛋，你认识它吗？能听懂它在说什么吗？~  "],null]];
         var d3:Array = [[NPC.XUELALA,["喂我跟你又不是很熟，你走开点啊！别以为我被绑住了就不能揍你了！~  "],["你真的不认识它吗？它看起来好伤心啊。"]]];
         var d4:Array = [[NPC.SEER,["…………………你是让我去打开那个礼物盒吗？     ~  "],["（看在它这么辛苦的份上，那就打开礼物盒看一看吧。）"]]];
         taskQuePro = new TaskQuneProcessor();
         taskQuePro.addMapMv(mapMv,4,"mc4");
         taskQuePro.addDialog(d1);
         taskQuePro.addMapMv(mapMv,5,"mc5");
         taskQuePro.addDialog(d2);
         taskQuePro.addMapMv(mapMv,6,"mc6");
         taskQuePro.addDialog(d3);
         taskQuePro.addMapMv(mapMv,7,"mc7");
         taskQuePro.addDialog(d4);
         taskQuePro.procesEndFun = function():void
         {
            xuelala.visible = true;
            taskQuePro.destory();
            mapMv.gotoAndStop(mapMv.totalFrames);
            BufferRecordManager.setState(MainManager.actorInfo,488,true);
            xuelalaFather.visible = true;
            MainManager.selfVisible = true;
         };
         taskQuePro.start();
         xuelala.visible = false;
         MainManager.selfVisible = false;
      }
      
      private static function playTreePre() : void
      {
         var d1:Array;
         var d2:Array;
         var d3:Array;
         var taskQuePro:TaskQuneProcessor = null;
         tree.visible = false;
         d1 = [[NPC.SEER,["对啊~沃力昂那个坏蛋，又抢了铃儿的什么东西啊？~  "],null],[NPC.JIANGJIANG,["哦，是很奇怪的树枝。以后这种小问题，就不要专门叫住我了好不好？我很忙的，再见。~  "],["…为什么长得越小的精灵脾气越大…"]]];
         d2 = [[NPC.SEER,["好惊悚的插曲…那个，那个什么树枝，到底是什么啊？   "],null]];
         d3 = [[NPC.SUPERNONO_NEW,["主人主人，我们快去看看那是什么！~  "],null]];
         taskQuePro = new TaskQuneProcessor();
         taskQuePro.addMapMv(mapMv,10,"mc10");
         taskQuePro.addDialog(d1);
         taskQuePro.addMapMv(mapMv,11,"mc11");
         taskQuePro.addDialog(d2);
         taskQuePro.addMapMv(mapMv,12,"mc12");
         taskQuePro.addDialog(d3);
         taskQuePro.procesEndFun = function():void
         {
            tree.visible = true;
            mapMv.gotoAndStop(mapMv.totalFrames);
            taskQuePro.destory();
            TasksManager.accept(TREE_TASKID,function(param1:*):void
            {
               TasksManager.complete(TREE_TASKID,0);
            });
            jiangjiang.visible = true;
            MainManager.selfVisible = true;
         };
         taskQuePro.start();
         MainManager.selfVisible = false;
      }
      
      private static function get hasOwnTictet() : Boolean
      {
         return getTicketLevel() != -1;
      }
      
      private static function get hasFinishWujiPreTask() : Boolean
      {
         return TasksManager.getTaskStatus(WUJIKEXUN_TASKID) == TasksManager.COMPLETE;
      }
      
      private static function get hasFinisnXuelalaPre() : Boolean
      {
         return BufferRecordManager.getState(MainManager.actorInfo,488);
      }
      
      private static function get hasFinisnTreePre() : Boolean
      {
         return TasksManager.getTaskStatus(TREE_TASKID) == TasksManager.COMPLETE;
      }
      
      private static function get mapMv() : MovieClip
      {
         return MapManager.currentMap.controlLevel["suprise_warship"];
      }
      
      private static function get hasOpenBarricade() : Boolean
      {
         return BufferRecordManager.getState(MainManager.actorInfo,492);
      }
      
      public static function changeMapTypeMC() : void
      {
         var _loc1_:DisplayObject = MapManager.currentMap.typeLevel["door"];
         if(null != _loc1_)
         {
            DisplayUtil.removeForParent(_loc1_);
            MapManager.currentMap.makeMapArray();
         }
      }
      
      private static function get weiBin() : DisplayObject
      {
         return MapManager.currentMap.depthLevel["weibin"];
      }
      
      private static function get jiangjiang() : DisplayObject
      {
         return MapManager.currentMap.depthLevel["jiangjiang"];
      }
      
      private static function get weibinSpecial() : DisplayObject
      {
         return MapManager.currentMap.depthLevel["weibin_special"];
      }
      
      private static function get xuelala() : DisplayObject
      {
         return MapManager.currentMap.controlLevel["xuelala"];
      }
      
      private static function get tree() : MovieClip
      {
         return MapManager.currentMap.depthLevel["tree"];
      }
      
      private static function get door() : MovieClip
      {
         return MapManager.currentMap.depthLevel["door_a"];
      }
      
      private static function get xuelalaFather() : MovieClip
      {
         return MapManager.currentMap.controlLevel["xuelala_father"];
      }
      
      private static function get treeMv() : MovieClip
      {
         return MapManager.currentMap.depthLevel["treeMv"];
      }
      
      private static function get exchangeBtn() : DisplayObject
      {
         return MapManager.currentMap.depthLevel["exchangeBtn"];
      }
      
      private static function hasOwnTicketS(param1:Function) : void
      {
         var fun:Function = param1;
         if(_hasOwnS)
         {
            fun(true);
         }
         else
         {
            ItemManager.getCollection(function():void
            {
               _hasOwnS = getTicketLevel() == 4;
               fun(_hasOwnS);
            });
         }
      }
      
      public static function updateTreeLevel(param1:Function = null) : void
      {
         var fun:Function = param1;
         SocketConnection.addCmdListener(CommandID.SUPRISE_WARSHIP_TREE_LEVEL,function(param1:*):void
         {
            SocketConnection.removeCmdListener(CommandID.SUPRISE_WARSHIP_TREE_LEVEL,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            _treeLevel = _loc3_.readUnsignedInt();
            if(fun != null)
            {
               fun.call();
            }
         });
         SocketConnection.send(CommandID.SUPRISE_WARSHIP_TREE_LEVEL);
      }
      
      public static function getTreeLevel() : int
      {
         return _treeLevel;
      }
      
      public static function get wujuBtn() : DisplayObject
      {
         return MapManager.currentMap.controlLevel["wujiBtn"];
      }
      
      public static function getTicketLevel() : int
      {
         var _loc1_:int = 0;
         while(_loc1_ < 5)
         {
            if(ItemManager.containsAll(1200435 + _loc1_))
            {
               return _loc1_;
            }
            _loc1_++;
         }
         return -1;
      }
      
      public static function get giftBtn() : DisplayObject
      {
         return MapManager.currentMap.controlLevel["giftBtn"];
      }
   }
}
