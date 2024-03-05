package com.robot.app.mapProcess
{
   import com.robot.app.ac.PetFightTest;
   import com.robot.app.panel.FightMatchingPanel;
   import com.robot.app.sceneInteraction.ArenaController;
   import com.robot.app.sys.SysSOManager;
   import com.robot.app.task.control.TaskController_131;
   import com.robot.app.task.taskscollection.Task1312;
   import com.robot.app.task.taskscollection.Task1320;
   import com.robot.app.task.taskscollection.Task1330;
   import com.robot.app.task.taskscollection.Task1343;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.PetKingPrizeInfo;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.PetInBagAlert;
   import com.robot.core.ui.alert.PetInStorageAlert;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.text.TextField;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import org.taomee.effect.ColorFilter;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_102 extends BaseMapProcess
   {
      
      private static var _kingType:uint;
       
      
      private var justin:MovieClip;
      
      private var confirm:SimpleButton;
      
      private var justinTxt:TextField;
      
      private var closeBt:SimpleButton;
      
      private var waitPanel:MovieClip;
      
      private var closeButton:SimpleButton;
      
      private var grassMC:SimpleButton;
      
      private var fireMC:SimpleButton;
      
      private var waterMC:SimpleButton;
      
      private var cTime:CronTimeVo;
      
      private var sageluosiTime1:CronTimeVo;
      
      private var sageluosiTime2:CronTimeVo;
      
      private var doubleTime1:CronTimeVo;
      
      private var _switch:Boolean = false;
      
      public function MapProcess_102()
      {
         this.cTime = new CronTimeVo("*","12-15","14","6","*","2014");
         this.sageluosiTime1 = new CronTimeVo("*","18","31","10","*","2014");
         this.sageluosiTime2 = new CronTimeVo("*","18","1-2","11","*","2014");
         this.doubleTime1 = new CronTimeVo("*","*","3-4","7","*","2015");
         super();
      }
      
      public static function showKingwarFightScore() : void
      {
         var index:uint = 0;
         var isUpdate:uint = 0;
         SocketConnection.addCmdListener(CommandID.KINGWAR_SHOWFIGHTSCORE,function(param1:SocketEvent):void
         {
            var e:SocketEvent = param1;
            var by:ByteArray = e.data as ByteArray;
            index = by.readUnsignedInt();
            isUpdate = by.readUnsignedInt();
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
            {
               var e:PetFightEvent = param1;
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
               Alarm.show("祝贺你得到" + index.toString() + "点战绩值",function():void
               {
                  if(isUpdate)
                  {
                     ResourceManager.getResource(ClientConfig.getActiveUrl("King_War_Mv"),function(param1:DisplayObject):void
                     {
                        var mv:MovieClip = null;
                        var obj:DisplayObject = param1;
                        mv = obj as MovieClip;
                        LevelManager.topLevel.addChild(mv);
                        mv.x = 103;
                        mv.y = 0;
                        AnimateManager.playMcAnimate(mv,1,"mc",function():void
                        {
                           DisplayUtil.removeForParent(mv);
                        });
                     },"KingWarMv");
                  }
               });
            });
         });
      }
      
      public static function kingFightEnter(param1:uint = 0) : void
      {
         SocketConnection.addCmdListener(CommandID.PET_KING_JOIN,onKingFightJoin);
         SocketConnection.addCmdListener(CommandID.INVITE_FIGHT_CANCEL,onCancelKingFight);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         if(param1)
         {
            SocketConnection.send(CommandID.PET_KING_JOIN,param1,0);
         }
         else
         {
            SocketConnection.send(CommandID.PET_KING_JOIN,_kingType,0);
         }
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         PetFightModel.mode = PetFightModel.MULTI_MODE;
         detroyKingFightListener();
      }
      
      private static function onKingFightJoin(param1:SocketEvent) : void
      {
         PetFightModel.type = PetFightModel.GOBLINKING_BATTLE;
         PetFightModel.status = PetFightModel.FIGHT_WITH_PLAYER;
         FightMatchingPanel.show(closeKingFight);
      }
      
      private static function closeKingFight() : void
      {
         SocketConnection.send(CommandID.INVITE_FIGHT_CANCEL);
      }
      
      private static function onCancelKingFight(param1:SocketEvent) : void
      {
         PetFightModel.mode = PetFightModel.MULTI_MODE;
         detroyKingFightListener();
      }
      
      public static function set kingType(param1:uint) : void
      {
         _kingType = param1;
         if(param1 == 5)
         {
            PetFightModel.mode = PetFightModel.SINGLE_MODE;
         }
         else if(param1 == 6)
         {
            PetFightModel.mode = PetFightModel.MULTI_MODE;
         }
      }
      
      private static function detroyKingFightListener() : void
      {
         SocketConnection.removeCmdListener(CommandID.PET_KING_JOIN,onKingFightJoin);
         SocketConnection.removeCmdListener(CommandID.INVITE_FIGHT_CANCEL,onCancelKingFight);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
      }
      
      private function initTask131() : void
      {
         if(TasksManager.getTaskStatus(TaskController_131.TASK_ID) == TasksManager.UN_ACCEPT)
         {
            EventManager.addEventListener(RobotEvent.TASK_EVENT,this.onTaskEventHandler);
         }
      }
      
      private function onTaskEventHandler(param1:RobotEvent) : void
      {
         var t:uint = 0;
         var e:RobotEvent = param1;
         if(!this._switch)
         {
            this._switch = true;
            TweenLite.to(topLevel["image_mc"],0.5,{"alpha":1});
         }
         else
         {
            this._switch = false;
            TweenLite.to(topLevel["image_mc"],0.5,{"alpha":0});
         }
         t = setTimeout(function():void
         {
            clearTimeout(t);
            EventManager.dispatchEvent(new RobotEvent(RobotEvent.TASK_EVENTFINISH));
         },600);
      }
      
      override protected function init() : void
      {
         topLevel.mouseEnabled = false;
         topLevel.mouseChildren = false;
         this.initTask131();
         if(this.cTime.checkTimeHit(SystemTimerManager.sysDate) != CronTimeVo.PAST)
         {
            MapListenerManager.add(depthLevel["yingkaluosi"],this.onYingkaluosi,"英卡洛斯的试炼");
         }
         else
         {
            DisplayUtil.removeForParent(depthLevel["yingkaluosi"]);
         }
         MapListenerManager.add(depthLevel["equipment"],function(param1:MouseEvent):void
         {
            var e:MouseEvent = param1;
            MapManager.changeMapWithCallback(1147,function():void
            {
               ModuleManager.showAppModule("PetEffectStrengthenPanel2015");
            });
         },"梦幻空间入口");
         MapListenerManager.add(conLevel["arenaReward"],function(param1:MouseEvent):void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("fightArena/FightArenaRewardPanel"));
         },"擂台奖励");
         MapListenerManager.add(conLevel["door_2"],function(param1:Event):void
         {
            var e:Event = param1;
            MainManager.actorModel.moveAndAction(new Point(conLevel["comp_2"].x,conLevel["comp_2"].y),function():void
            {
               onEnterHandler();
            });
         },"暗黑武斗场");
         if(this.doubleTime1.checkTimeHit(SystemTimerManager.sysDate) != CronTimeVo.HIT)
         {
            DisplayUtil.removeForParent(depthLevel["yingkaluosi2"]);
            DisplayUtil.removeForParent(depthLevel["tanglang2"]);
         }
         else
         {
            MapListenerManager.add(depthLevel["yingkaluosi2"],this.onDoubleTryFightHandler,"英卡洛斯的试炼");
            MapListenerManager.add(depthLevel["tanglang2"],this.onDoubleTryFightHandler,"萨格罗斯的试炼");
         }
         this.afterPlayGo();
         Alarm.show("精灵太空站已消失在时空中，请前往全新的贾斯汀太空站！",function():void
         {
            MapManager.changeMap(1147);
         });
      }
      
      private function afterPlayGo() : void
      {
         Task1312.initForMap102(this);
         Task1320.initForMap102(this);
         Task1330.initForMap102(this);
         Task1343.initForMap102(this);
      }
      
      private function onDoubleTryFightHandler(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("DoubleTryFightWithGiftPanel"),"正在打开");
      }
      
      private function onYingkaluosi(param1:MouseEvent) : void
      {
         if(this.cTime.checkTimeHit(SystemTimerManager.sysDate) == CronTimeVo.INCOMING)
         {
            NpcDialog.show(NPC.YINGKALUOSI,["试炼的时间是0xff00006月14日12:00-16:000xffffff，我会在这里等待着你的到来！"]);
         }
         else if(this.cTime.checkTimeHit(SystemTimerManager.sysDate) == CronTimeVo.PAST)
         {
            depthLevel["yingkaluosi"].mouseEnabled = false;
            depthLevel["yingkaluosi"].mouseChildren = false;
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("YingkaluosiTestPanel"),"正在加载面板....");
         }
      }
      
      override public function destroy() : void
      {
         ArenaController.getInstance().figth();
         ArenaController.getInstance().destroy();
         if(this.closeBt)
         {
            this.closeBt.removeEventListener(MouseEvent.CLICK,this.closeMC);
            this.closeBt = null;
         }
         if(this.confirm)
         {
            this.confirm.removeEventListener(MouseEvent.CLICK,this.closeMC);
            this.confirm.removeEventListener(MouseEvent.CLICK,this.givePetScr);
            this.confirm = null;
         }
         this.justin = null;
         this.justinTxt = null;
         this._switch = false;
         EventManager.removeEventListener(RobotEvent.TASK_EVENT,this.onTaskEventHandler);
         ModuleManager.destroy(ClientConfig.getAppModule("YingkaluosiTestPanel"));
         Task1312.destroy();
         Task1320.destroy();
         Task1330.destroy();
         Task1343.destroy();
      }
      
      private function onPetList(param1:PetEvent) : void
      {
         var i:int;
         var e:PetEvent = param1;
         var cheak:Function = function(param1:int):void
         {
            if(param1 == 1 || param1 == 2 || param1 == 3)
            {
               grassMC.filters = [ColorFilter.setGrayscale()];
               grassMC.mouseEnabled = false;
            }
            else if(param1 == 7 || param1 == 8 || param1 == 9)
            {
               fireMC.filters = [ColorFilter.setGrayscale()];
               fireMC.mouseEnabled = false;
            }
            else if(param1 == 4 || param1 == 5 || param1 == 6)
            {
               waterMC.filters = [ColorFilter.setGrayscale()];
               waterMC.mouseEnabled = false;
            }
         };
         PetManager.removeEventListener(PetEvent.STORAGE_LIST,this.onPetList);
         this.waitPanel = MapManager.currentMap.libManager.getMovieClip("GetPet");
         LevelManager.appLevel.addChild(this.waitPanel);
         DisplayUtil.align(this.waitPanel,null,AlignType.MIDDLE_CENTER);
         this.closeButton = this.waitPanel["closeBtn"];
         this.closeButton.addEventListener(MouseEvent.CLICK,this.closeMC);
         this.grassMC = this.waitPanel["grassMC"];
         this.waterMC = this.waitPanel["waterMC"];
         this.fireMC = this.waitPanel["fireMC"];
         this.grassMC.addEventListener(MouseEvent.CLICK,this.onGivePet);
         this.waterMC.addEventListener(MouseEvent.CLICK,this.onGivePet);
         this.fireMC.addEventListener(MouseEvent.CLICK,this.onGivePet);
         i = 1;
         while(i <= 9)
         {
            if(PetManager.containsBagForID(i))
            {
               cheak(i);
            }
            else if(PetManager.containsStorageForID(i))
            {
               cheak(i);
            }
            i++;
         }
      }
      
      public function HitJustin() : void
      {
         this.justin = MapManager.currentMap.libManager.getMovieClip("JustinGivePet3");
         DisplayUtil.align(this.justin,null,AlignType.MIDDLE_CENTER);
         LevelManager.closeMouseEvent();
         this.confirm = this.justin["ConfirmBtn"];
         this.closeBt = this.justin["closeBtn"];
         this.justinTxt = this.justin["TxtTip"];
         this.closeBt.addEventListener(MouseEvent.CLICK,this.closeMC);
         if(MainManager.actorInfo.monKingWin >= 10)
         {
            SocketConnection.addCmdListener(CommandID.IS_COLLECT,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(CommandID.IS_COLLECT,arguments.callee);
               var _loc3_:ByteArray = param1.data as ByteArray;
               var _loc4_:uint = _loc3_.readUnsignedInt();
               var _loc5_:Boolean = Boolean(_loc3_.readUnsignedInt());
               LevelManager.topLevel.addChild(justin);
               if(_loc5_)
               {
                  justinTxt.text = "   精灵王之战考验的是你的战斗技巧，通过自己不懈的努力成为真正的精灵王吧。";
                  confirm.addEventListener(MouseEvent.CLICK,closeMC);
               }
               else
               {
                  justinTxt.htmlText = "    你在精灵王之战中的表现非常出色，请接收我的礼物！";
                  confirm.addEventListener(MouseEvent.CLICK,givePetScr);
               }
            });
            SocketConnection.send(CommandID.IS_COLLECT,301);
         }
         else
         {
            LevelManager.topLevel.addChild(this.justin);
            this.justinTxt.text = "贾斯汀站长让我准备了一份礼物哦！在精灵王之战获得10场胜利后，我就可以送你一只初始精灵哦！";
            this.confirm.addEventListener(MouseEvent.CLICK,this.closeMC);
         }
      }
      
      private function givePetScr(param1:MouseEvent) : void
      {
         DisplayUtil.removeForParent(this.justin,false);
         LevelManager.openMouseEvent();
         PetManager.addEventListener(PetEvent.STORAGE_LIST,this.onPetList);
         PetManager.getStorageList();
      }
      
      private function closeMC(param1:MouseEvent) : void
      {
         DisplayUtil.removeForParent(this.waitPanel,false);
         DisplayUtil.removeForParent(this.justin,false);
         LevelManager.openMouseEvent();
      }
      
      private function onGivePet(param1:MouseEvent) : void
      {
         var _loc2_:uint = 0;
         if(param1.currentTarget == this.grassMC)
         {
            _loc2_ = 1;
         }
         else if(param1.currentTarget == this.fireMC)
         {
            _loc2_ = 7;
         }
         else if(param1.currentTarget == this.waterMC)
         {
            _loc2_ = 4;
         }
         SocketConnection.addCmdListener(CommandID.PRIZE_OF_PETKING,this.onPrize);
         SocketConnection.send(CommandID.PRIZE_OF_PETKING,301,_loc2_);
         var _loc3_:SimpleButton = param1.target as SimpleButton;
         DisplayUtil.removeForParent(this.waitPanel,false);
      }
      
      private function onPrize(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.PRIZE_OF_PETKING,this.onPrize);
         var _loc2_:PetKingPrizeInfo = param1.data as PetKingPrizeInfo;
         var _loc3_:String = String(PetXMLInfo.getName(_loc2_.petID));
         if(PetManager.length < 6)
         {
            SocketConnection.send(CommandID.PET_RELEASE,_loc2_.catchTime,1);
            SocketConnection.send(CommandID.GET_PET_INFO,_loc2_.catchTime);
            PetInBagAlert.show(_loc2_.petID,_loc3_ + "已经放入了你的精灵背包！");
         }
         else
         {
            PetManager.addStorage(_loc2_.petID,_loc2_.catchTime);
            PetInStorageAlert.show(_loc2_.petID,_loc3_ + "已经放入了你的精灵仓库！");
         }
      }
      
      public function buyHandler() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("DrugBuyPanel"),"正在加载...");
      }
      
      public function onArenaHit() : void
      {
         MapManager.changeMap(1147);
      }
      
      public function onEnterHandler() : void
      {
         MapManager.changeMap(110);
      }
      
      public function enterFight() : void
      {
         MapManager.removeAppArrow();
         this.showKingSelectPanel();
         SysSOManager.freshLastSys(12002);
      }
      
      public function onPetWarHandler() : void
      {
         SocketConnection.send(1022,86053866);
         SocketConnection.send(1022,86055974);
         ModuleManager.showModule(ClientConfig.getAppModule("PetWarMainPanel"));
         SysSOManager.freshLastSys(12001);
      }
      
      public function onFightTestHit() : void
      {
         PetFightTest.getDate();
      }
      
      private function showKingSelectPanel() : void
      {
         MapManager.changeMapWithCallback(1155,function():void
         {
            ModuleManager.showAppModule("GoblinKingBattleRedoPanel");
         });
      }
   }
}
