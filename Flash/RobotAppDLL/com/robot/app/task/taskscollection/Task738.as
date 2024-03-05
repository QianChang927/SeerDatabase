package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.group.manager.GroupFightInviteManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.PetInStorageAlert;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import flash.utils.Timer;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task738
   {
      
      private static const TASK_ID:uint = 1230;
      
      private static var _map:BaseMapProcess;
      
      private static var _taskState:uint;
      
      private static var _isFight1:Boolean;
      
      private static var _diamondList:Array = [false,false,false,false,false];
      
      private static var _positionList:Array = [new Point(700,300),new Point(250,300),new Point(300,375),new Point(500,475),new Point(725,425),new Point(475,225),new Point(475,225)];
      
      private static var _bossName:Array = ["哈莫雷特","查奥德","德普","奈落","米奈","乌普","萨拉","布克","塔西亚","塔克林"];
      
      private static var _fightRegion:uint;
      
      private static var _timer:Timer;
      
      private static var _isBuying:Boolean;
       
      
      public function Task738()
      {
         super();
      }
      
      private static function onTimer(param1:Event) : void
      {
         var _loc2_:MovieClip = _map.conLevel["countDown"];
         _loc2_.gotoAndStop(_loc2_.currentFrame - 1);
         if(_loc2_.currentFrame == 1)
         {
            _loc2_.visible = false;
            _map.conLevel["task738_4"].visible = true;
            _timer.stop();
         }
      }
      
      public static function initTaskFor338(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.conLevel["task738_1"].visible = false;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         switch(_taskState)
         {
            case TasksManager.UN_ACCEPT:
               TasksManager.accept(TASK_ID,startTask);
               break;
            case TasksManager.ALR_ACCEPT:
               TasksManager.getProStatusList(TASK_ID,checkStepFor353);
               break;
            case TasksManager.COMPLETE:
               _map.conLevel["task738_1"].visible = false;
               _map.conLevel["hamo"].visible = false;
         }
      }
      
      public static function initTaskFor674(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.conLevel["task738_4"].visible = false;
         _map.conLevel["diamond0"].visible = false;
         _map.conLevel["diamond1"].visible = false;
         _map.conLevel["diamond2"].visible = false;
         _map.conLevel["diamond3"].visible = false;
         _map.conLevel["diamond4"].visible = false;
         _map.conLevel["countDown"].visible = false;
         _map.conLevel["blood"].visible = false;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         switch(_taskState)
         {
            case TasksManager.UN_ACCEPT:
               break;
            case TasksManager.ALR_ACCEPT:
               TasksManager.getProStatusList(TASK_ID,checkStepFor674);
               break;
            case TasksManager.COMPLETE:
               taskComplete();
         }
      }
      
      private static function checkStepFor353(param1:Array) : void
      {
         if(!param1[0])
         {
            startTask();
         }
         else if(Boolean(param1[0]) && !param1[1])
         {
            startStep0();
         }
         else if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
         {
         }
      }
      
      private static function checkStepFor674(param1:Array) : void
      {
         if(!param1[0])
         {
            notOpen();
         }
         else if(Boolean(param1[0]) && !param1[1])
         {
            notOpen();
         }
         else if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
         {
            startStep1();
         }
      }
      
      private static function notOpen() : void
      {
         _map.conLevel["diamond0"].visible = false;
         _map.conLevel["diamond1"].visible = false;
         _map.conLevel["diamond2"].visible = false;
         _map.conLevel["diamond3"].visible = false;
         _map.conLevel["diamond4"].visible = false;
         _map.conLevel["eye0"].visible = false;
         _map.conLevel["eye1"].visible = false;
         _map.conLevel["eye2"].visible = false;
         _map.conLevel["eye3"].visible = false;
         _map.conLevel["eye4"].visible = false;
         _map.conLevel["blood"].visible = false;
         _map.depthLevel["hamo"].visible = false;
         _map.depthLevel["saiweier"].visible = false;
         _map.depthLevel["taxiya"].visible = false;
         _map.depthLevel["takelin"].visible = false;
         _map.conLevel["task738_1"].visible = false;
         _map.conLevel["task738_3"].visible = false;
         _map.conLevel["task738_4"].visible = false;
         _map.depthLevel["light0"].visible = false;
         _map.depthLevel["light1"].visible = false;
         _map.depthLevel["light2"].visible = false;
         _map.depthLevel["light3"].visible = false;
         _map.depthLevel["littleDragon"].visible = false;
         _map.conLevel["countDown"].visible = false;
      }
      
      private static function startTask(param1:Boolean = true) : void
      {
         var bool:Boolean = param1;
         if(!bool)
         {
            return;
         }
         OgreController.isShow = false;
         ToolBarController.showOrHideAllUser(false);
         _map.conLevel["task738_1"].visible = true;
         AnimateManager.playMcAnimate(_map.conLevel["task738_1"],2,"mc2",function():void
         {
            NpcDialog.show(NPC.HAMO,["好奇怪，很久没有这种感觉了！有一种故乡的温暖，好温馨啊！据说龙族秘境会在每年开启一次，也是我们龙族大团聚的时刻！"],["这一刻让我期待太久了！"],[function():void
            {
               NpcDialog.show(NPC.SEER,["咦！这些龙族精灵怎么会相聚在这里呢？我猜一定会有大事发生！嘿嘿！让我也来凑凑热闹吧！"],["看看会发生什么！"],[function():void
               {
                  NpcDialog.show(NPC.TAXIYA,["是啊！好还念以前龙族鼎盛的时代，那时多美好啊！"],null,null,false,function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_738_1"),function():void
                     {
                        TasksManager.complete(TASK_ID,0,startStep0);
                     },false);
                  });
               }]);
            }]);
         });
      }
      
      private static function startStep0(param1:Boolean = true) : void
      {
         var bool:Boolean = param1;
         OgreController.isShow = false;
         ToolBarController.showOrHideAllUser(false);
         _map.conLevel["task738_1"].visible = true;
         NpcDialog.show(NPC.SAIWEIER,["时隔这么久，也不知道龙族秘境何时出现！也有可能只是一个传说而已！永远不会出现！"],["不会的！"],[function():void
         {
            AnimateManager.playMcAnimate(_map.conLevel["task738_1"],1,"mc1",function():void
            {
               NpcDialog.show(NPC.SEER,["哇！神秘的龙族秘境！看来有的好玩啦！先去和龙王子报个名再说！这样的机会可不多啊！"],["哈莫，哈莫！"],[function():void
               {
                  NpcDialog.show(NPC.HAMO,["嗯？那不是小赛尔嘛！你怎么有空来哈莫星看我啊！"],["嘿嘿！正好经过这里，所以来看看你们咯！"],[function():void
                  {
                     NpcDialog.show(NPC.HAMO,["这么好？一定另有目的吧！我看你在附近观察我们好久了哦！你就老实说吧！"],["哎呀！还是瞒不过龙王子啊！哈哈哈哈!"],[function():void
                     {
                        AnimateManager.playMcAnimate(_map.conLevel["task738_1"],3,"mc3",function():void
                        {
                           NpcDialog.show(NPC.SEER,["其实我刚刚听到你们在说龙族秘境，能带我去吗？那里一定很好玩吧！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.HAMO,["这个么….好吧！就让我们带你去见识一下龙族领域！不过据说龙族秘境出现的时间很短暂哦！你可要好好把握哦！"],["恩恩，我一定会珍惜这次机会的！"],[function():void
                              {
                                 onClickHaMoLeiTe();
                              }]);
                           });
                        });
                     }]);
                  }]);
               }]);
            });
         }]);
      }
      
      private static function onClickHaMoLeiTe() : void
      {
         NpcDialog.show(NPC.HAMO,["龙族秘境已经开启，" + MainManager.actorInfo.formatNick + "你记得多来哈莫星看看哦！我们等你！"],["恩，我已经迫不及待了！"],[function():void
         {
            MainManager.actorModel.visible = false;
            AnimateManager.playMcAnimate(_map.conLevel["task738_1"],4,"mc4",function():void
            {
               MainManager.actorModel.visible = true;
               TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
               {
                  if(!param1)
                  {
                     return;
                  }
                  MapManager.changeMap(674);
               });
            });
         }]);
      }
      
      private static function startStep1() : void
      {
         _map.conLevel["task738_3"].visible = false;
         _map.conLevel["task738_4"].visible = false;
         _map.conLevel["blood"].visible = false;
         _map.depthLevel["littleDragon"].visible = false;
         _map.conLevel["eye0"].visible = false;
         _map.conLevel["eye1"].visible = false;
         _map.conLevel["eye2"].visible = false;
         _map.conLevel["eye3"].visible = false;
         _map.conLevel["eye4"].visible = false;
         NpcDialog.show(NPC.HAMO,[MainManager.actorInfo.formatNick + "，欢迎来到龙族秘境，这里曾经就是我们龙族战士生活的地方，怎么样，很不错吧！"],["我想了解上古龙族！"],[function():void
         {
            NpcDialog.show(NPC.HAMO,["上古龙族是龙族中最为珍贵的成员之一，当然在数量上也是十分稀有的，不过上古龙族很喜欢温暖，相信下午14:00点是它出现的最佳时机！"],["真的吗？那我就在这里等它！"],[function():void
            {
               TasksManager.complete(TASK_ID,2,taskComplete);
               ModuleManager.showModule(ClientConfig.getTaskModule("DragonWorldCall"),"正在打开面板",1);
            }]);
         }]);
      }
      
      private static function taskComplete(param1:Boolean = true) : void
      {
         if(!param1)
         {
            return;
         }
         _timer = new Timer(1000);
         _timer.addEventListener(TimerEvent.TIMER,onTimer);
         _map.conLevel["countDown"].visible = false;
         _map.conLevel["task738_3"].visible = false;
         _map.conLevel["diamond0"].visible = false;
         _map.conLevel["diamond1"].visible = false;
         _map.conLevel["diamond2"].visible = false;
         _map.conLevel["diamond3"].visible = false;
         _map.conLevel["diamond4"].visible = false;
         _map.depthLevel["littleDragon"].visible = false;
         _map.conLevel["blood"].visible = false;
         _map.depthLevel["hamo"].buttonMode = true;
         _map.depthLevel["hamo"].addEventListener(MouseEvent.CLICK,onClickHamo);
         _map.depthLevel["saiweier"].buttonMode = true;
         _map.depthLevel["saiweier"].addEventListener(MouseEvent.CLICK,onClickSaiweier);
         _map.depthLevel["taxiya"].buttonMode = true;
         _map.depthLevel["taxiya"].addEventListener(MouseEvent.CLICK,onClickTaxiya);
         _map.depthLevel["takelin"].buttonMode = true;
         _map.depthLevel["takelin"].addEventListener(MouseEvent.CLICK,onClickTakelin);
         _map.conLevel["task738_4"].visible = true;
         _map.conLevel["task738_4"].buttonMode = true;
         _map.conLevel["task738_4"].addEventListener(MouseEvent.CLICK,onClickMine);
         _map.conLevel["buyBtn"].buttonMode = true;
         _map.conLevel["buyBtn"].addEventListener(MouseEvent.CLICK,onClickCenter);
         _map.conLevel["eye0"].visible = false;
         _map.conLevel["eye1"].visible = false;
         _map.conLevel["eye2"].visible = false;
         _map.conLevel["eye3"].visible = false;
         _map.conLevel["eye4"].visible = false;
         getTime();
         checkBall();
      }
      
      private static function getTime() : void
      {
         SocketConnection.addCmdListener(CommandID.GET_TIME,onGetTime);
         SocketConnection.send(CommandID.GET_TIME);
      }
      
      private static function onGetTime(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.GET_TIME,onGetTime);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ > 0)
         {
            _map.conLevel["task738_4"].visible = false;
            _map.conLevel["countDown"].visible = true;
            _map.conLevel["countDown"].gotoAndStop(_loc3_);
            _timer.start();
         }
         else if(_loc3_ == 0)
         {
            _map.conLevel["task738_4"].visible = true;
            _map.conLevel["task738_4"].gotoAndStop(1);
         }
      }
      
      private static function onClickCenter(param1:Event) : void
      {
         ModuleManager.showModule(ClientConfig.getTaskModule("BuyMidAutumn"),"正在打开面板....",1);
      }
      
      private static function onClickMine(param1:Event) : void
      {
         _map.conLevel["blood"].visible = true;
         AnimateManager.playMcAnimate(_map.conLevel["blood"],1,"mc1",getDiamond);
      }
      
      private static function onClickSaiweier(param1:Event) : void
      {
         _isFight1 = true;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onCompleteSaiWeier);
         GroupFightInviteManager.fightWithBoss("塞维尔",0);
      }
      
      private static function onCompleteSaiWeier(param1:PetFightEvent) : void
      {
         _isFight1 = false;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onCompleteSaiWeier);
      }
      
      private static function onClickTaxiya(param1:Event) : void
      {
         fightWithBoss(8);
      }
      
      private static function onClickTakelin(param1:Event) : void
      {
         fightWithBoss(9);
      }
      
      private static function onClickHamo(param1:Event) : void
      {
         var event:Event = param1;
         _map.depthLevel["hamo"].buttonMode = false;
         _map.depthLevel["hamo"].removeEventListener(MouseEvent.CLICK,onClickHamo);
         NpcDialog.show(NPC.HAMO,[MainManager.actorInfo.formatNick + ",欢迎来到龙族秘境，这里曾经就是我们龙族战士出生的地方，怎么样，很不错吧！"],["怎么召唤龙族精灵！","我想挑战你！"],[function():void
         {
            NpcDialog.show(NPC.HAMO,["想必你一定发现了龙族秘境周围寻在一些奇异的龙头阵吧！不过只有找到龙族宝石才能启动它哦！而龙族宝石就藏在龙之秘境的铁金石中，快去附近找找吧！"],["铁金石？？我这就去找！（注意附近的石块）"],[function():void
            {
               _map.depthLevel["hamo"].buttonMode = true;
               _map.depthLevel["hamo"].addEventListener(MouseEvent.CLICK,onClickHamo);
            }]);
         },function():void
         {
            fightWithBoss(0);
         }]);
      }
      
      private static function fightWithBoss(param1:uint) : void
      {
         _isFight1 = true;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onCompleteFight);
         FightManager.fightWithBoss(_bossName[param1],param1);
      }
      
      private static function onCompleteFight(param1:Event) : void
      {
         _isFight1 = false;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onCompleteFight);
      }
      
      private static function getDiamond() : void
      {
         _map.conLevel["blood"].visible = false;
         SocketConnection.addCmdListener(CommandID.GET_DRAGON_DIAMOND,onGetDiamond);
         SocketConnection.send(CommandID.GET_DRAGON_DIAMOND);
      }
      
      private static function onGetDiamond(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.GET_DRAGON_DIAMOND,onGetDiamond);
         _map.conLevel["task738_4"].visible = false;
         _map.conLevel["countDown"].visible = true;
         _map.conLevel["countDown"].gotoAndStop(15);
         _timer.start();
         checkDiamond();
      }
      
      private static function checkDiamond() : void
      {
         SocketConnection.addCmdListener(CommandID.ITEM_LIST,onItemCountHandler);
         SocketConnection.send(CommandID.ITEM_LIST,400866,400870,2);
      }
      
      private static function onItemCountHandler(param1:SocketEvent) : void
      {
         var _loc5_:uint = 0;
         var _loc6_:SingleItemInfo = null;
         SocketConnection.removeCmdListener(CommandID.ITEM_LIST,onItemCountHandler);
         var _loc2_:int = 0;
         var _loc3_:ByteArray = param1.data as ByteArray;
         var _loc4_:uint = _loc3_.readUnsignedInt();
         _loc5_ = 0;
         while(_loc5_ < 5)
         {
            showOrHideDragon(_loc5_,false);
            _loc5_++;
         }
         _loc5_ = 0;
         while(_loc5_ < _loc4_)
         {
            if((_loc6_ = new SingleItemInfo(_loc3_)).itemID == 400866 && _loc6_.itemNum != 0)
            {
               showOrHideDragon(0,true);
               _loc2_++;
            }
            else if(_loc6_.itemID == 400867 && _loc6_.itemNum != 0)
            {
               showOrHideDragon(1,true);
               _loc2_++;
            }
            else if(_loc6_.itemID == 400868 && _loc6_.itemNum != 0)
            {
               showOrHideDragon(2,true);
               _loc2_++;
            }
            else if(_loc6_.itemID == 400869 && _loc6_.itemNum != 0)
            {
               showOrHideDragon(3,true);
               _loc2_++;
            }
            else if(_loc6_.itemID == 400870 && _loc6_.itemNum != 0)
            {
               showOrHideDragon(4,true);
               _loc2_++;
            }
            if(_loc2_ == 5)
            {
               callLittleGragon();
            }
            _loc5_++;
         }
      }
      
      private static function refreshDiamond() : void
      {
         SocketConnection.addCmdListener(CommandID.ITEM_LIST,onRefreshDiamond);
         SocketConnection.send(CommandID.ITEM_LIST,400866,400870,2);
      }
      
      private static function onRefreshDiamond(param1:SocketEvent) : void
      {
         var _loc5_:SingleItemInfo = null;
         SocketConnection.removeCmdListener(CommandID.ITEM_LIST,onRefreshDiamond);
         var _loc2_:int = 0;
         var _loc3_:ByteArray = param1.data as ByteArray;
         var _loc4_:uint = _loc3_.readUnsignedInt();
         _loc2_ = 0;
         while(_loc2_ < 5)
         {
            showOrHideDragon(_loc2_,false);
            _loc2_++;
         }
         _loc2_ = 0;
         while(_loc2_ < _loc4_)
         {
            if((_loc5_ = new SingleItemInfo(_loc3_)).itemID == 400866 && _loc5_.itemNum != 0)
            {
               showOrHideDragon(0,true);
            }
            else if(_loc5_.itemID == 400867 && _loc5_.itemNum != 0)
            {
               showOrHideDragon(1,true);
            }
            else if(_loc5_.itemID == 400868 && _loc5_.itemNum != 0)
            {
               showOrHideDragon(2,true);
            }
            else if(_loc5_.itemID == 400869 && _loc5_.itemNum != 0)
            {
               showOrHideDragon(3,true);
            }
            else if(_loc5_.itemID == 400870 && _loc5_.itemNum != 0)
            {
               showOrHideDragon(4,true);
            }
            _loc2_++;
         }
      }
      
      private static function showOrHideDragon(param1:int, param2:Boolean) : void
      {
         if(!param2)
         {
            _map.conLevel["diamond" + param1].visible = false;
            _map.conLevel["eye" + param1].visible = false;
            _map.conLevel["dragon" + param1].visible = true;
         }
         else
         {
            _map.conLevel["dragon" + param1].visible = false;
            _map.conLevel["diamond" + param1].visible = true;
            _map.conLevel["eye" + param1].visible = true;
            _map.conLevel["eye" + param1].gotoAndStop(2);
         }
      }
      
      private static function callLittleGragon() : void
      {
         SocketConnection.addCmdListener(CommandID.CALL_SMALL_DRAGON,onCallSmallDragon);
         SocketConnection.send(CommandID.CALL_SMALL_DRAGON);
      }
      
      private static function onCallSmallDragon(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var type:uint = 0;
         var event:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.CALL_SMALL_DRAGON,onCallSmallDragon);
         data = event.data as ByteArray;
         type = data.readUnsignedInt();
         if(type >= 1 && type <= _positionList.length)
         {
            _map.conLevel["task738_3"].x = _positionList[type - 1].x;
            _map.conLevel["task738_3"].y = _positionList[type - 1].y;
            _map.conLevel["task738_3"].visible = true;
            AnimateManager.playMcAnimate(_map.conLevel["task738_1"],1,"mc1",function():void
            {
               DisplayUtil.removeForParent(_map.conLevel["task738_1"]);
               AnimateManager.playMcAnimate(_map.conLevel["task738_3"],76,"",function():void
               {
                  DisplayUtil.removeForParent(_map.conLevel["task738_3"]);
                  _map.depthLevel["littleDragon"].x = _positionList[type - 1].x;
                  _map.depthLevel["littleDragon"].y = _positionList[type - 1].y;
                  _map.depthLevel["littleDragon"].visible = true;
                  _map.depthLevel["littleDragon"].gotoAndStop(type);
                  _fightRegion = type;
                  _map.depthLevel["littleDragon"].buttonMode = true;
                  _map.depthLevel["littleDragon"].addEventListener(MouseEvent.CLICK,onClickLittleDragon);
                  refreshDiamond();
               });
            });
         }
         else if(type == 0)
         {
            AnimateManager.playMcAnimate(_map.conLevel["task738_1"],1,"mc1",function():void
            {
               Alarm.show("很遗憾，龙头阵启动失败，再次尝试收集龙族宝石还是有机会召唤出龙族精灵哦！");
               refreshDiamond();
            });
         }
      }
      
      private static function onClickLittleDragon(param1:Event) : void
      {
         _map.depthLevel["littleDragon"].buttonMode = false;
         _map.depthLevel["littleDragon"].removeEventListener(MouseEvent.CLICK,onClickLittleDragon);
         fightWithLittleDragon(_fightRegion);
      }
      
      private static function fightWithLittleDragon(param1:uint) : void
      {
         FightManager.fightWithBoss(_bossName[param1],param1);
      }
      
      public static function onCallBigDragon(param1:uint, param2:uint) : void
      {
         var petID:uint = param1;
         var catchTime:uint = param2;
         _map.conLevel["task738_2"].visible = true;
         AnimateManager.playMcAnimate(_map.conLevel["task738_2"],2,"mc2",function():void
         {
            _map.conLevel["task738_3"].visible = true;
            _map.conLevel["task738_3"].x = 475;
            _map.conLevel["task738_3"].y = 315;
            AnimateManager.playMcAnimate(_map.conLevel["task738_3"],76,"",function():void
            {
               _map.conLevel["task738_2"].gotoAndStop(1);
               _map.conLevel["task738_3"].gotoAndStop(1);
               _map.conLevel["task738_3"].visible = false;
               PetManager.addStorage(petID,catchTime);
               PetInStorageAlert.show(petID,PetXMLInfo.getName(petID) + "已经放入了你的精灵仓库！");
               var _loc1_:int = 0;
               while(_loc1_ < 5)
               {
                  _map.conLevel["ball" + _loc1_].visible = false;
                  _loc1_++;
               }
               _isBuying = false;
            });
         });
      }
      
      private static function checkBall() : void
      {
         ItemManager.updateItems([400871],function():void
         {
            var _loc1_:SingleItemInfo = ItemManager.getCollectionInfo(400871);
            if(_loc1_ == null)
            {
               Task738.showBall(0);
            }
            else
            {
               Task738.showBall(_loc1_.itemNum);
            }
         });
      }
      
      public static function showBall(param1:int) : void
      {
         var _loc2_:int = 0;
         if(param1 > 5)
         {
            param1 = 5;
         }
         _loc2_ = 0;
         while(_loc2_ < 5)
         {
            _map.conLevel["ball" + _loc2_].visible = false;
            _loc2_++;
         }
         _loc2_ = 0;
         while(_loc2_ < param1)
         {
            _map.conLevel["ball" + _loc2_].visible = true;
            _loc2_++;
         }
         checkDiamond();
      }
      
      public static function destroy() : void
      {
         _isBuying = false;
         OgreController.isShow = true;
         MainManager.actorModel.visible = true;
         SocketConnection.removeCmdListener(CommandID.GET_DRAGON_DIAMOND,onGetDiamond);
         SocketConnection.removeCmdListener(CommandID.ITEM_LIST,onItemCountHandler);
         SocketConnection.removeCmdListener(CommandID.CALL_SMALL_DRAGON,onCallSmallDragon);
         if(Boolean(_map) && Boolean(_map.conLevel["buyBtn"]))
         {
            _map.conLevel["buyBtn"].removeEventListener(MouseEvent.CLICK,onClickCenter);
         }
         if(_timer)
         {
            _timer.removeEventListener(TimerEvent.TIMER,onTimer);
         }
         if(Boolean(_map) && Boolean(_map.depthLevel["hamo"]))
         {
            _map.depthLevel["hamo"].removeEventListener(MouseEvent.CLICK,onClickHamo);
         }
         if(Boolean(_map) && Boolean(_map.conLevel["task738_4"]))
         {
            _map.conLevel["task738_4"].removeEventListener(MouseEvent.CLICK,onClickMine);
         }
         if(!_isFight1)
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onCompleteFight);
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onCompleteSaiWeier);
         }
         if(!isFight1)
         {
            _map = null;
         }
      }
      
      public static function get isBuying() : Boolean
      {
         return _isBuying;
      }
      
      public static function set isBuying(param1:Boolean) : void
      {
         _isBuying = param1;
      }
      
      public static function get isFight1() : Boolean
      {
         return _isFight1;
      }
   }
}
