package com.robot.app2.systems.mapObject
{
   import com.robot.app.control.TVNoticeController;
   import com.robot.app.mapProcess.MapProcess_1144;
   import com.robot.app.npc.taskPanel.NpcTaskPanel;
   import com.robot.app.sptStar.LeiyiTrainController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app.task.taskUtils.taskDialog.TaskQuneProcessor;
   import com.robot.app.tasksRecord.TasksRecordConfig;
   import com.robot.app2.control.BraveChallengeController;
   import com.robot.app2.control.FightInYaoShiMountainController;
   import com.robot.app2.control.FlameGameController;
   import com.robot.app2.control.KaxiusiApotheosizeMysteryControl;
   import com.robot.app2.control.LordOfWarController;
   import com.robot.app2.control.MengNiuGameController;
   import com.robot.app2.control.SorensenAttackDarkApostleNorthrendControll;
   import com.robot.app2.control.SuperNoNoAugPartyController;
   import com.robot.app2.control.ThreeMainPetsSuperEvoController;
   import com.robot.app2.control.WeisikeTongjiController;
   import com.robot.app2.control.XiyeController;
   import com.robot.app2.control.game.GameBokaTe;
   import com.robot.app2.mapProcess.control.TigerFightController;
   import com.robot.app2.mapProcess.control.activityControl.BaiJingJingActiveController;
   import com.robot.app2.mapProcess.control.activityControl.LongZunController;
   import com.robot.app2.mapProcess.control.activityControl.WindBattleController;
   import com.robot.app2.systems.iconLevel.IconFuncManager;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.SceneActivityGuideController;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.TaskEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.INpcModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.npc.NpcDialogNew_1;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.loading.Loading;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.net.SharedObject;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import flash.utils.ByteArray;
   import flash.utils.getDefinitionByName;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class MapObjectProcessFuns
   {
       
      
      public function MapObjectProcessFuns()
      {
         super();
      }
      
      public static function mikaClick() : void
      {
         Alarm.show("mika mika");
      }
      
      public static function onFeiLianPlanClick() : void
      {
         if(BitBuffSetClass.getState(23564) == 0)
         {
            MapManager.changeMapWithCallback(1275,function():void
            {
               ModuleManager.showAppModule("FeilianSecretPlanMainPanel");
            });
         }
         else
         {
            MapManager.changeMapWithCallback(1275,function():void
            {
               ModuleManager.showAppModule("FeilianSecretPlanSubPanel");
            });
         }
      }
      
      public static function onCheckAuth(param1:Function) : void
      {
         var callback:Function = param1;
         SocketConnection.sendWithCallback(41080,function(param1:SocketEvent):void
         {
            var by:ByteArray = null;
            var state:uint = 0;
            var e:SocketEvent = param1;
            by = e.data as ByteArray;
            state = by.readUnsignedInt();
            if(state != 1)
            {
               SocketConnection.sendWithCallback(41080,function(param1:SocketEvent):void
               {
                  by = param1.data as ByteArray;
                  var _loc2_:uint = by.readUnsignedInt();
                  if(!(_loc2_ > 0 && state == 3))
                  {
                     callback.call(null,true);
                  }
               },1016);
            }
         },1015);
      }
      
      public static function onTV() : void
      {
         TVNoticeController.showCurrentPanel();
      }
      
      public static function weeklyVsEquip1() : void
      {
         getDefinitionByName("com.robot.app2.mapProcess.control.WeeklyVSController").initEquip();
      }
      
      public static function buxiaokefunc() : void
      {
         Alarm.show("暂未开放");
      }
      
      public static function activityEnd() : void
      {
         Alarm.show("活动已结束");
      }
      
      public static function weeklyVsNpc1() : void
      {
         getDefinitionByName("com.robot.app2.mapProcess.control.WeeklyVSController").initNPC();
      }
      
      public static function weeklyVsEquip2() : void
      {
         getDefinitionByName("com.robot.app2.mapProcess.control.WeeklyVSController2").initEquip();
      }
      
      public static function weeklyVsNpc2() : void
      {
         getDefinitionByName("com.robot.app2.mapProcess.control.WeeklyVSController2").initNPC();
      }
      
      public static function weeklyVsEquip3() : void
      {
         getDefinitionByName("com.robot.app2.mapProcess.control.WeeklyVSController3").initEquip();
      }
      
      public static function weeklyVsNpc3() : void
      {
         getDefinitionByName("com.robot.app2.mapProcess.control.WeeklyVSController3").initNPC();
      }
      
      public static function weeklyVsEquip4() : void
      {
         getDefinitionByName("com.robot.app2.mapProcess.control.WeeklyVSController4").initEquip();
      }
      
      public static function weeklyVsEquip5() : void
      {
         getDefinitionByName("com.robot.app2.mapProcess.control.WeeklyVSController5").initEquip();
      }
      
      public static function weeklyVsNpc5() : void
      {
         getDefinitionByName("com.robot.app2.mapProcess.control.WeeklyVSController5").initNPC();
      }
      
      public static function threePetRedoBtn() : void
      {
         Alarm.show("请前往《赛尔号经典版》获得三主宠的超进化形态吧！",function():void
         {
            var _loc1_:String = "http://seerh5.61.com/";
            navigateToURL(new URLRequest(_loc1_),"_blank");
         });
      }
      
      public static function onSageluosiFight() : void
      {
         var _loc1_:int = 0;
         var _loc2_:String = null;
         if((getDefinitionByName("com.robot.app2.mapProcess.control.SageluosiActivityController").activeTime as CronTimeVo).isTimeActive(SystemTimerManager.sysDate))
         {
            ModuleManager.showModule(ClientConfig.getAppModule("SageluosiActivityPanel"));
         }
         else
         {
            _loc1_ = int(NPC.SAGELUOSI);
            _loc2_ = String(getDefinitionByName("com.robot.app2.mapProcess.control.SageluosiActivityController").sageluosiMsg);
            NpcDialog.show(_loc1_,[_loc2_]);
         }
      }
      
      public static function onSuperNoAugClick() : void
      {
         if(SuperNoNoAugPartyController.isWaitingWished == true)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("WishWating0815Panel"),"正在打开");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("WishParty0815Panel"),"正在打开");
         }
      }
      
      public static function onNiuniuClick() : void
      {
         MengNiuGameController.setup();
      }
      
      public static function onXinjideClick() : void
      {
         if(TasksManager.getTaskStatus(1755) == TasksManager.COMPLETE || MapManager.currentMap.id != 91)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("XinjideAgainPanel"));
         }
         else
         {
            getDefinitionByName("com.robot.app2.task.control.TaskController_1755").initTask1755();
         }
      }
      
      public static function aotuosiBtnHandler() : void
      {
         var _loc1_:SharedObject = null;
         SocketConnection.send(1022,86063546);
         if(MapManager.currentMap.id == 954)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("AotuosiPanel"),"正在打开...",true);
         }
         else
         {
            _loc1_ = SOManager.getUserSO(SOManager.SHAKER_FULL_SCREEN);
            if(_loc1_.data["isPlay_aotuosiAni"] == undefined)
            {
               MapManager.changeMap(954);
            }
            else
            {
               ModuleManager.showModule(ClientConfig.getAppModule("AotuosiPanel"),"正在打开...",false);
            }
         }
      }
      
      public static function boersiBtnHandler() : void
      {
         var _loc1_:SharedObject = null;
         SocketConnection.send(1022,86063723);
         if(MapManager.currentMap.id == 954)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("BoersiPanel"),"正在打开...",true);
         }
         else
         {
            _loc1_ = SOManager.getUserSO(SOManager.SHAKER_FULL_SCREEN);
            if(_loc1_.data["isPlay_boersiAni"] == undefined)
            {
               MapManager.changeMap(954);
            }
            else
            {
               ModuleManager.showModule(ClientConfig.getAppModule("BoersiPanel"),"正在打开...",false);
            }
         }
      }
      
      public static function aimisiBtnHandler() : void
      {
         var _loc1_:SharedObject = null;
         if(MapManager.currentMap.id == 954)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("AimisiMainPanel"),"正在打开...",true);
         }
         else
         {
            _loc1_ = SOManager.getUserSO(SOManager.SHAKER_FULL_SCREEN);
            if(_loc1_.data["isPlay_AimisiAni"] == undefined)
            {
               MapManager.changeMap(954);
            }
            else
            {
               ModuleManager.showModule(ClientConfig.getAppModule("AimisiMainPanel"),"正在打开...",false);
            }
         }
      }
      
      public static function unionFight() : void
      {
         if(MapManager.currentMap.id == 949)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("UnionFightMainPanel"));
         }
         else
         {
            MapManager.changeMap(949);
         }
      }
      
      public static function holypetsKongfusi() : void
      {
         var buffer:int = 0;
         if(MapManager.currentMap.id == 355)
         {
            buffer = 928;
            if(!BufferRecordManager.getMyState(buffer))
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active_20131206_5"),function():void
               {
                  BufferRecordManager.setMyState(buffer,true);
                  ModuleManager.showModule(ClientConfig.getAppModule("HolyPetsCombatMainPanel"));
               });
            }
            else
            {
               ModuleManager.showModule(ClientConfig.getAppModule("HolyPetsCombatMainPanel"));
            }
         }
         else
         {
            MapManager.changeMap(355);
         }
      }
      
      public static function ridePetGuide() : void
      {
         if(!BufferRecordManager.getMyState(936))
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active_20131213_8"),function():void
            {
               SocketConnection.send(1022,86065528);
               BufferRecordManager.setMyState(936,true);
               ModuleManager.showModule(ClientConfig.getAppModule("RidePet2GuidePanel"));
            });
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("RidePet2GuidePanel"));
         }
      }
      
      public static function onHolyNiumowang() : void
      {
         if(!BufferRecordManager.getMyState(1168))
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active_20140718_3"),function():void
            {
               SocketConnection.send(1022,86065528);
               BufferRecordManager.setMyState(1168,true);
               ModuleManager.showModule(ClientConfig.getAppModule("TotemWorshipPanel"));
            });
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TotemWorshipPanel"));
         }
      }
      
      public static function xueqiu() : void
      {
         if(MapManager.currentMap.id == 963)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("FiveColorSnowBallDyePanel"));
         }
         else
         {
            NpcDialog.show(NPC.XIAOXUEQIU,["你已经捕捉到足够的小雪球了吗？"],["够了，我要回去给小雪球变色！","我再多抓几只"],[function():void
            {
               MapManager.changeMap(963);
            }]);
         }
      }
      
      public static function onFlameGame() : void
      {
         CommonUI.removeYellowArrow(MapManager.currentMap.depthLevel);
         FlameGameController.openGame();
      }
      
      public static function checkNationalChildrenSecurity(param1:Function) : void
      {
         var _loc2_:int = 1874;
         if(TasksManager.getTaskStatus(_loc2_) == TasksManager.UN_ACCEPT || TasksManager.getTaskStatus(_loc2_) == TasksManager.ALR_ACCEPT)
         {
            param1(true);
            TasksManager.addListener(TaskEvent.COMPLETE,_loc2_,1,onCompleteNationalChildrenSecurity);
         }
         else
         {
            param1(false);
         }
      }
      
      private static function onCompleteNationalChildrenSecurity(param1:TaskEvent) : void
      {
         TasksManager.removeListener(TaskEvent.COMPLETE,1874,1,onCompleteNationalChildrenSecurity);
         var _loc2_:MapObject = MapObjectControl.getMapObjetByName("nationalChildrenSecurityProtectBtn");
         if(_loc2_)
         {
            _loc2_.remove();
         }
      }
      
      public static function onShipJournal() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("TimeNews"),"正在打开航行日志...",{"version":399});
      }
      
      public static function onWeibinNorthrendClick() : void
      {
         if(!SorensenAttackDarkApostleNorthrendControll.hasFinishPreTask)
         {
            NpcDialog.show(NPC.WEIBING_1,["赛尔号的行进方向好像出现了许多不明物品，0xff0000" + MainManager.actorInfo.nick + "0xffffff，赶紧去船长室看看吧！"],["好的，我现在就去！"],[function():void
            {
               SorensenAttackDarkApostleNorthrendControll.playPreTask();
            }]);
         }
         else
         {
            NpcDialog.show(NPC.WEIBING_1,["暗夜使徒诺森德每天晚上19:00都会开始制造自己的复制品来袭击赛尔号，我们一定要阻止他！"],["现在就去！","先准备下再说！"],[function():void
            {
               MapManager.changeMap(819);
            }]);
         }
      }
      
      public static function longzunHandler() : void
      {
         if(!BufferRecordManager.getMyState(1030))
         {
            if(MapManager.currentMap.id != 970)
            {
               MapManager.changeMap(970);
            }
            else
            {
               LongZunController.clickBtnHandler();
            }
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("LongZunAddPanel"),"正在打开面板……");
         }
      }
      
      public static function onLuckCardClick() : void
      {
         if(BitBuffSetClass.getState(22429))
         {
            ModuleManager.showModule(ClientConfig.getAppModule("LuckyCard"));
         }
         else
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active_20140221_7"),function():void
            {
               BitBuffSetClass.setState(22429,1);
               ModuleManager.showModule(ClientConfig.getAppModule("LuckyCard"));
            });
         }
      }
      
      public static function suyaleisiHandler() : void
      {
         SocketConnection.send(1022,86069712);
         if(Boolean(BufferRecordManager.getMyState(1071)) || MapManager.currentMap.id == 10457)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("SuyaleisiMainPanel"));
         }
         else
         {
            MapManager.changeLocalMap(10457);
         }
      }
      
      public static function yougesarongHandler() : void
      {
         if(Boolean(BufferRecordManager.getMyState(1066)) || MapManager.currentMap.id == 10452)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("YougesarongMainPanel"));
         }
         else
         {
            MapManager.changeLocalMap(10452);
         }
      }
      
      public static function onClickBokate() : void
      {
         if(GameBokaTe.hasFinishPreTask())
         {
            if(MapManager.currentMap.id != 10467)
            {
               MapManager.changeLocalMap(10467);
            }
         }
         else
         {
            GameBokaTe.playPreTask();
         }
      }
      
      public static function onClickBrave() : void
      {
         BraveChallengeController.taskStart();
      }
      
      public static function onLordOfWarClick() : void
      {
         if(LordOfWarController.hasFinshPreTask())
         {
            ModuleManager.showModule(ClientConfig.getAppModule("LordOfWarMainPanel"));
         }
         else
         {
            LordOfWarController.playPreTask();
         }
      }
      
      public static function onKaxiusiEvoAdClick() : void
      {
         SocketConnection.send(1022,86070009);
         ModuleManager.showModule(ClientConfig.getAppModule("KaxiusiEvoAdMainPanel"));
      }
      
      public static function onWeskerEqClick() : void
      {
         if(MapManager.currentMap.id == 1113)
         {
            KTool.getMultiValue([2464],function(param1:Array):void
            {
               if(param1[0] >= 3)
               {
                  ModuleManager.showAppModule("WeskerSupEvoFinalPanel");
               }
               else
               {
                  ModuleManager.showAppModule("WeskerSupEvoMainPanel");
               }
            });
         }
         else
         {
            MapManager.changeMap(1113);
         }
      }
      
      public static function xieHuaYiZuBtnHandler() : void
      {
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUWEIYAOHU,["为了得到更强大的力量，我贸然的选择了天魔组织，很遗憾我的决定是错误的，我一定会带领自己的伙伴脱离这个组织！"],["什么！连你也加入了天魔组织的行列？"]);
         NpcDialog.show(NPC.CAOXINGLING,["我就是廉贞封印的守护精灵草星灵！星灵王就在眼前，最终能否掌控神秘力量就要看你的了！"],["恩恩！我做得到！"],[function():void
         {
            NpcDialog.show(NPC.JUWEIYAOHU,["非常抱歉，我的伙伴！我会将功补过，邪化一族都是我一手造成的，他们本不该存在，请相信我一定会拯救他们的！  "],["放心吧！我这就来帮助你们！","让我先准备一下！"],[function():void
            {
               MapManager.changeMap(978);
            }]);
         }]);
      }
      
      public static function onShuxingdashouji() : void
      {
         NpcDialog.show(NPC.XIYEJUN,[MainManager.actorInfo.nick + ",你来得正好！宇宙中真是奇妙，那么多精灵！你快去帮我捕捉几只！先抽取任务哦！"],["好的！没问题！","西野君是大坏蛋！不帮忙！"],[function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("CaoxiPetPanel"));
         }]);
      }
      
      public static function onXiyeMiyu() : void
      {
         XiyeController.playRiddles();
      }
      
      public static function onXiye() : void
      {
         if(MapManager.currentMap.id != 991)
         {
            MapManager.changeMap(991);
         }
         else if(!XiyeController.hasFinishPreTask())
         {
            XiyeController.playPreTask();
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TheMysteriousXiyejunPanel"));
         }
      }
      
      public static function onBoxClick() : void
      {
         StatManager.sendStat2014("卡修斯封神庆典第二弹","点击各场景中卡修斯球的",StatManager.RUN_ACT);
         KTool.getMultiValue([16074],function(param1:Array):void
         {
            var arr:Array = param1;
            if(arr[0] < 50)
            {
               SocketConnection.sendWithCallback(CommandID.COMMAND_4548,function(param1:SocketEvent):void
               {
                  var _loc2_:int = int((param1.data as ByteArray).readUnsignedInt());
                  ModuleManager.showModule(ClientConfig.getAppModule("NewyearDailyRewardPanel"),"正在打开",_loc2_);
               },384,0);
            }
         });
      }
      
      public static function onThreeMainPetsEvo() : void
      {
         if(ThreeMainPetsSuperEvoController.isTaskFinish)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ThreeMainPetsSuperEvoPanel"));
         }
         else
         {
            ThreeMainPetsSuperEvoController.playMovie();
         }
      }
      
      public static function mysteriousCry() : void
      {
         if(MapManager.currentMap.id == 991)
         {
            NpcDialog.show(NPC.KALULU,["听罗杰船长说，0xffff00浅滩海岛0xffffff晚上总是有神秘的哭声传出，到底是谁在哭呢？  "],["咦？我们快去看看吧！","关我什么事！"],[function():void
            {
               MapManager.changeMap(29);
            }]);
         }
      }
      
      public static function onLieyanhaoClick() : void
      {
         SocketConnection.send(1022,86070009);
         if(BufferRecordManager.getMyState(1076))
         {
            ModuleManager.showModule(ClientConfig.getAppModule("LieyanhaoMainPanel"));
         }
         else
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active_20140307_6"),function():void
            {
               SocketConnection.send(1022,86070010);
               BufferRecordManager.setMyState(1076,true);
               ModuleManager.showModule(ClientConfig.getAppModule("LieyanhaoMainPanel"));
            });
         }
      }
      
      public static function aprilActiveBtnHandler() : void
      {
         KTool.getMultiValue([2125,2127],function(param1:Array):void
         {
            var _loc2_:int = int(param1[0]);
            var _loc3_:Number = Number(param1[1]);
            var _loc4_:ByteArray;
            (_loc4_ = new ByteArray()).writeUnsignedInt(_loc3_);
            _loc4_.position = 0;
            var _loc5_:Array = KTool.readDataByBits(_loc4_,32);
            var _loc6_:Boolean = Boolean(_loc5_[0]);
            var _loc7_:Boolean = Boolean(_loc5_[1]);
            if(_loc2_ == 2)
            {
               if(!_loc7_)
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("MayMainPanel"));
               }
               else
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("MayMainPanel"));
               }
            }
            else if(_loc2_ == 1)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("MayMainPanel"));
            }
         });
      }
      
      public static function onTigerStatue() : void
      {
         StatManager.sendStat2014("虎王争霸光影之战","点击传送舱场景中白虎雕像的",StatManager.RUN_ACT);
         TigerFightController.checkBattle(function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TigerFightBattleAdPanel"));
         });
      }
      
      public static function onTigerTrain() : void
      {
         TigerFightController.checkBattle(function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TigerFightBattleTrainPanel"));
         });
      }
      
      public static function onTigerPk() : void
      {
         StatManager.sendStat2014("虎王争霸-光影决战","点传送舱装置进入决战之谷场景【前】",StatManager.RUN_ACT);
         if(MapManager.currentMap.id != 994)
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               var e:MapEvent = param1;
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               TigerFightController.checkBattle(function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("TigerFightFinalPanel"));
               });
            });
            MapManager.changeMap(994);
         }
         else
         {
            TigerFightController.checkFinal(function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("TigerFightFinalPanel"));
            });
         }
      }
      
      public static function onAoluonaerClick0() : void
      {
         NpcDialog.show(NPC.AOLUONAER,[MainManager.actorInfo.formatNick + "，你敢来到妖石山挑战魔灵王！我要与你决战，让你有去无回！"],["向邪恶势力开战！","你认错人了！"],[function():void
         {
            MapManager.changeMap(990);
         }]);
      }
      
      public static function onAoluonaerClick1() : void
      {
         if(BufferRecordManager.getMyState(1143))
         {
            FightInYaoShiMountainController.onClick();
         }
         else
         {
            FightInYaoShiMountainController.preTask();
         }
      }
      
      public static function lightSoldier() : void
      {
         if(BufferRecordManager.getMyState(839) == false)
         {
            BufferRecordManager.setMyState(839,true);
            SocketConnection.send(1022,86062937);
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active_20130927_4"),function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("LightSoldierMainPanel"));
            });
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("LightSoldierMainPanel"));
         }
      }
      
      public static function onClickMiusiVSKenata() : void
      {
         if(MapManager.currentMap.id == 993)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("SnakeTearPanel1"));
         }
         else
         {
            MapManager.changeMap(993);
         }
      }
      
      public static function onCardPetFunc() : void
      {
         StatManager.sendStat2014("卡牌大师魔力大转盘","点击装置",StatManager.RUN_ACT);
         if(BufferRecordManager.getMyState(1146))
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ADCardPetPanel"));
         }
         else
         {
            StatManager.sendStat2014("卡牌大师魔力大转盘","播放前置动画",StatManager.RUN_ACT);
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active201405220369"),function():void
            {
               BufferRecordManager.setMyState(1146,true);
               ModuleManager.showModule(ClientConfig.getAppModule("ADCardPetPanel"));
            });
         }
      }
      
      public static function onOpenSchool() : void
      {
         if(MapManager.currentMap.id == 77)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("NewYearPetFestivalPanel"));
         }
         else
         {
            Alert.show("是否前往六一庆典？",function():void
            {
               MapManager.changeMap(77);
            });
         }
      }
      
      public static function anzhilingClick() : void
      {
         if(BufferRecordManager.getMyState(1152))
         {
            ModuleManager.showModule(ClientConfig.getAppModule("AnzhilingFightPanel"));
         }
         else
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active201405220369"),function():void
            {
               BufferRecordManager.setMyState(1152,true);
               ModuleManager.showModule(ClientConfig.getAppModule("AnzhilingFightPanel"));
            });
         }
      }
      
      public static function onSabostClick() : void
      {
         StatManager.sendStat2014("圣化英普瑞斯","装置点击",StatManager.USER_CHARACTER);
         if(!BitBuffSetClass.getState(22476))
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active_20140711_3"),function():void
            {
               StatManager.sendStat2014("圣化英普瑞斯","完成前置任务",StatManager.USER_CHARACTER);
               BitBuffSetClass.setState(22476,1);
               ModuleManager.showModule(ClientConfig.getAppModule("HolyImperiusPanel"));
            });
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("HolyImperiusPanel"));
         }
      }
      
      public static function onStomGirlClick() : void
      {
         var mapId:int = 0;
         var mcloader:MCLoader = null;
         StatManager.sendStat2014("圣化托鲁克  ","装置点击",StatManager.USER_CHARACTER);
         mapId = int(MapManager.currentMap.id);
         if(!BufferRecordManager.getMyState(1159))
         {
            BufferRecordManager.setMyState(1159,true);
            mcloader = new MCLoader(ClientConfig.getMapAnimate("stormGril"),null,Loading.TITLE_AND_PERCENT,"加载..");
            mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
            {
               var mapMv:MovieClip = null;
               var taskQuePro:TaskQuneProcessor = null;
               var e:* = param1;
               mapMv = mcloader.loader.content["mv"];
               taskQuePro = new TaskQuneProcessor();
               taskQuePro.addChangeMap(10537,function():void
               {
                  MapManager.currentMap.controlLevel.visible = false;
                  MapManager.currentMap.topLevel.addChild(mapMv);
                  KTool.hideMapAllPlayerAndMonster();
               });
               taskQuePro.addMapMv(mapMv,1,"mv",function():void
               {
                  MapManager.currentMap.controlLevel.visible = true;
                  mapMv.parent.removeChild(mapMv);
               });
               taskQuePro.addChangeMap(736,function():void
               {
                  MapManager.currentMap.controlLevel.addChild(mapMv);
                  KTool.hideMapAllPlayerAndMonster();
               });
               taskQuePro.addMapMv(mapMv,2,"mv");
               taskQuePro.addFullMv(ClientConfig.getFullMovie("active_20140620_7"));
               taskQuePro.start();
               taskQuePro.procesEndFun = function():void
               {
                  StatManager.sendStat2014("圣化托鲁克  ","完成前置任务",StatManager.USER_CHARACTER);
                  DisplayUtil.removeAllChild(mapMv);
                  DisplayUtil.removeForParent(mapMv);
                  taskQuePro.destory();
                  MapManager.changeMap(mapId);
               };
            });
            mcloader.doLoad();
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("StormGirlMainPanel"));
         }
      }
      
      public static function selenaClick() : void
      {
         if(BufferRecordManager.getMyState(1158))
         {
            ModuleManager.showModule(ClientConfig.getAppModule("SelenaGetPanel"));
         }
         else
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active_20140613_4"),function():void
            {
               BufferRecordManager.setMyState(1158,true);
               ModuleManager.showModule(ClientConfig.getAppModule("SelenaGetPanel"));
            });
         }
      }
      
      public static function onMoGeSiClick() : void
      {
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "，我们现在要潜入魔界内部！这次行动异常危险！你一定要保证自身安全！万事小心！"],["我知道了！（完成7月4日—7月25日主线还可以获得成就哦！）","让我先准备一下！"],[function():void
         {
            gotoNpcTask(3021);
         }]);
      }
      
      public static function onBuLaiKeChaoJinHuaClick() : void
      {
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "，妖王摩哥斯进攻庞贝古城，竟然激发了萨瑞卡的圣能量！他接下来还想干什么？快去和先锋队一起，去看看发生了什么事！"],["我立刻就去！（完成主线剧情，奖励翻倍任你选！）","让我先准备一下！"],[function():void
         {
            gotoNpcTask(3013);
         }]);
      }
      
      private static function gotoNpcTask(param1:int) : void
      {
         var clss:* = undefined;
         var focusTask:int = param1;
         MapManager.changeMap(4);
         clss = getDefinitionByName("com.robot.app.npc.taskPanel.NpcTaskPanel");
         clss.setFocusTask(focusTask);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:*):void
         {
            var _loc3_:INpcModel = null;
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            if(MapManager.currentMap.id == 4)
            {
               _loc3_ = NpcController.getNpc(NPC.SHIPER) as INpcModel;
               clss.show(_loc3_.tasks,_loc3_.npcInfo);
            }
         });
      }
      
      public static function onTaximu() : void
      {
         var lastaMapId:int = 0;
         var mcloader:MCLoader = null;
         StatManager.sendStat2014("深渊魔窟第一弹","点击装置",StatManager.USER_CHARACTER);
         if(!BufferRecordManager.getMyState(1165))
         {
            BufferRecordManager.setMyState(1165,true);
            lastaMapId = int(MapManager.currentMap.id);
            mcloader = new MCLoader(ClientConfig.getMapAnimate("taximu"),null,Loading.TITLE_AND_PERCENT,"加载..");
            mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
            {
               var d1:Array;
               var mapMv:MovieClip = null;
               var taskQuePro:TaskQuneProcessor = null;
               var e:* = param1;
               mapMv = mcloader.loader.content["mv"];
               mapMv.parent.removeChild(mapMv);
               d1 = [[NPC.KALULU,["哇，是迪恩，好久不见"],["是什么样的任务？"]],[NPC.DIEN,["你们应该都听说过魔界之门吧？"],["嗯，魔界四尊就是从那里出来的"]],[NPC.DIEN,["其实我离开的那段时间一直都在魔界中，并且发现了许多秘密。"],["什么秘密？"]],[NPC.SHIPER,["魔界是魔神们的老巢，万年来，无数死去的精灵在这里凝聚了极大的怨气，而魔神们吸收这些怨气！不仅可以治疗伤势！也会变得更加强大！"],["什么！"]],[NPC.SHIPER,["所以你们的任务就是要捣毁整个魔界之门。这里有一张魔界的地图。"],["好的！"]]];
               taskQuePro = new TaskQuneProcessor();
               taskQuePro.addChangeMap(10548,function():void
               {
                  MapManager.currentMap.topLevel.addChild(mapMv);
               });
               taskQuePro.addMapMv(mapMv,1,"mv");
               taskQuePro.addMapMv(mapMv,2,"mv");
               taskQuePro.addDialog(d1);
               taskQuePro.addMapMv(mapMv,3,"mv");
               taskQuePro.addMapMv(mapMv,4,"mv");
               taskQuePro.procesEndFun = function():void
               {
                  StatManager.sendStat2014("深渊魔窟第一弹","完成前置任务",StatManager.USER_CHARACTER);
                  taskQuePro.destory();
                  KTool.changeMapWithCallBack(lastaMapId,function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("ShenyuanmojieMainPanel"));
                  });
               };
               taskQuePro.start();
            });
            mcloader.doLoad();
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ShenyuanmojieMainPanel"));
         }
      }
      
      public static function onMainLineTask() : void
      {
         NpcDialog.show(NPC.SHIPER,[TasksRecordConfig.getNewMainLineZhuangzhiStartDes()],TasksRecordConfig.getNewMainLineZhuangzhiEndDes().split("|"),[function():void
         {
            SocketConnection.send(1022,86053057);
            MapManager.changeMap(4);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:*):void
            {
               var _loc4_:* = undefined;
               var _loc5_:* = undefined;
               var _loc3_:* = TasksRecordConfig.getNewMainLineTaskId();
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               NpcTaskPanel.setFocusTask(_loc3_);
               if(MapManager.currentMap.id == 4)
               {
                  _loc4_ = getDefinitionByName("com.robot.app.npc.taskPanel.NpcTaskPanel");
                  _loc5_ = NpcController.getNpc(NPC.SHIPER) as INpcModel;
                  _loc4_.show(_loc5_.tasks,_loc5_.npcInfo);
               }
            });
         }]);
      }
      
      public static function onR4() : void
      {
         LeiyiTrainController.showTrainPanel();
      }
      
      public static function onNull() : void
      {
      }
      
      public static function onMoshen() : void
      {
         var buffer:int = 0;
         buffer = 1175;
         if(MapManager.currentMap.id == 1010)
         {
            if(!BufferRecordManager.getMyState(buffer))
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active_20140801_3"),function():void
               {
                  BufferRecordManager.setMyState(buffer,true);
                  ModuleManager.showModule(ClientConfig.getAppModule("HelloLordTrainPanel"));
               });
            }
            else
            {
               ModuleManager.showModule(ClientConfig.getAppModule("HelloLordTrainPanel"));
            }
         }
         else
         {
            KTool.changeMapWithCallBack(1010,function():void
            {
               onMoshen();
            });
         }
      }
      
      public static function onSummerGift() : void
      {
         if(MapManager.currentMap.id == 960)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("SummerGiftGamePanel"),"正在打开...",{
               "grpId":IconFuncManager.SUMMER_GIFT_JAGU_SEER,
               "gameId":4
            });
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("SummerGiftJagu"),"",IconFuncManager.SUMMER_GIFT_JAGU_SEER);
         }
      }
      
      public static function onSumGiftBest() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SummerGiftJagu"),"",[IconFuncManager.SUMMER_GIFT_JAGU_BEST,4]);
      }
      
      public static function onGF() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("GfPanel"));
      }
      
      public static function openBuLuGelinHandler() : void
      {
         var md12345:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task_20131227_1",true]);
         if(BufferRecordManager.getMyState(1179) == false)
         {
            TaskDiaLogManager.single.playStory([md12345],function():void
            {
               BufferRecordManager.setMyState(1179,true);
               ModuleManager.showModule(ClientConfig.getAppModule("GeLinBuLuComingPanel"));
            });
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("GeLinBuLuComingPanel"));
         }
      }
      
      public static function onAneisi() : void
      {
         if(BitBuffSetClass.getState(22506))
         {
            ModuleManager.showModule(ClientConfig.getAppModule("AneisiFightPanel"));
         }
         else
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("aneisi_Mv"),function():void
            {
               BitBuffSetClass.setState(22506,1);
               ModuleManager.showModule(ClientConfig.getAppModule("AneisiFightPanel"));
            });
         }
      }
      
      public static function christmasTreeNoclick() : void
      {
      }
      
      public static function onWindBattle() : void
      {
         WindBattleController.onEquip();
      }
      
      public static function getBaijingjing() : void
      {
         BaiJingJingActiveController.taskHandler();
      }
      
      public static function onQibing() : void
      {
         BaiJingJingActiveController.onEquip();
      }
      
      public static function onTaiBaiXing() : void
      {
         BaiJingJingActiveController.onTaiBaiNpc();
      }
      
      public static function onSaintBabe() : void
      {
         BaiJingJingActiveController.onBabeNpc();
      }
      
      public static function onClickKaxiusi() : void
      {
         if(MapManager.currentMap.id != 978)
         {
            MapManager.changeMap(978);
            return;
         }
         if(!KaxiusiApotheosizeMysteryControl.hasFinishPreTask())
         {
            KaxiusiApotheosizeMysteryControl.playPreTask();
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("KaxiusiApotheosizeMysteryPanel"));
         }
      }
      
      public static function onTXLWClick() : void
      {
         KTool.changeMapWithCallBack(1061,function():void
         {
            var _loc1_:Array = [2015,2,20,23,59,59];
            var _loc2_:uint = uint(SystemTimerManager.getTimeByDate(_loc1_[0],_loc1_[1],_loc1_[2],_loc1_[3],_loc1_[4],_loc1_[5]));
            var _loc3_:uint = uint(SystemTimerManager.time);
            if(_loc3_ >= _loc2_)
            {
               ModuleManager.showAppModule("TianXieLongWangPanel");
            }
            else
            {
               ModuleManager.showAppModule("HeiTianZhongJiDuiJueMainPanel");
            }
         });
      }
      
      public static function onSYTLClick() : void
      {
         KTool.changeMapWithCallBack(1053,function():void
         {
            ModuleManager.showAppModule("ShengYaoTianLongMainPanel");
         });
      }
      
      public static function onFireKing() : void
      {
         NpcDialog.show(NPC.FIRE_MONSTER_KING,["嘿！亲爱的" + MainManager.actorInfo.formatNick + "！我是首只火系精灵王艾恩斯！五月一日将会开启盛大的全民狂欢庆典！届时我就会正式出现！记得一点要来哦！"],["我一定来！（有奖励哦！每天都可以点击领取）"],[function():void
         {
            KTool.getBitSet([1000046],function(param1:Array):void
            {
               var va:Array = param1;
               if(va[0] == 0)
               {
                  SocketConnection.sendWithCallback(4548,function():void
                  {
                     ModuleManager.showAppModule("Activite201551Panel");
                  },1176,1);
               }
               else
               {
                  ModuleManager.showAppModule("Activite201551Panel");
               }
            });
         }]);
      }
      
      public static function onOscarPreViewClick() : void
      {
         if(MapManager.currentMap.id == 1)
         {
            ModuleManager.showAppModule("OscarPrefectivePreViewSubPanel");
         }
         if(MapManager.currentMap.id == 10953)
         {
            ModuleManager.showAppModule("OscarPrefectivePreViewMainPanel");
         }
      }
      
      public static function onVipSixAnniversaryMainPanelClick() : void
      {
         StatManager.sendStat2014("1030VIP6周年庆，全民狂欢迎盛典","点击装置的",StatManager.RUN_ACT_2015);
         ModuleManager.showAppModule("CheerForVipSixAnniversaryMainPanel_1030");
      }
      
      public static function onLightKingLeavingPanelClick() : void
      {
         if(MapManager.currentMap.id != 1144)
         {
            MapManager.changeMapWithCallback(1144,function():void
            {
               if(BitBuffSetClass.getState(23009) == 0)
               {
                  MapProcess_1144.COME_FROM_PANEL = true;
               }
               else
               {
                  ModuleManager.showAppModule("LightKingLeavingPanel");
               }
            });
         }
      }
      
      public static function onWishOnChristmasToGetGiftClick() : void
      {
         if(MapManager.currentMap.id != 1152)
         {
            MapManager.changeMapWithCallback(1152,function():void
            {
               showWishOnChristmasToGetGift();
            });
         }
         else
         {
            showWishOnChristmasToGetGift();
         }
      }
      
      private static function showWishOnChristmasToGetGift() : void
      {
         KTool.getMultiValue([12385],function(param1:Array):void
         {
            if(param1[0] > 0 && param1[0] < 5)
            {
               ModuleManager.showAppModule("WishOnChristmasToGetGiftStep1Panel");
            }
            else
            {
               ModuleManager.showAppModule("WishOnChristmasToGetGiftPanel");
            }
         });
      }
      
      public static function onStartLivenEvo() : void
      {
         var openPanel:Function = null;
         openPanel = function():void
         {
            KTool.getMultiValue([9407,9408],function(param1:Array):void
            {
               if(param1[0] >= 100 && param1[1] >= 100)
               {
                  ModuleManager.showAppModule("LivenEvoFightPanel");
               }
               else
               {
                  ModuleManager.showAppModule("LivenEvoMainPanel");
               }
            });
         };
         if(Boolean(MapManager.currentMap) && MapManager.currentMap.id == 1181)
         {
            openPanel();
         }
         else
         {
            MapManager.changeMapWithCallback(1181,openPanel);
         }
      }
      
      public static function onBabutianlongVideoClick() : void
      {
         StatManager.sendStat2014("0513八部天龙视频","打开八部外部天龙视频","2016运营活动");
         KTool.playVideoFromThirdParty("http://yuntv.letv.com/bcloud.swf?uu=94aec87868&vu=e2218df52d&auto_play=1&gpcflag=1");
      }
      
      public static function onLansiluoteVideoClick() : void
      {
         KTool.playVideoFromThirdParty("http://yuntv.letv.com/bcloud.swf?uu=94aec87868&vu=995ab1dfab&auto_play=1&gpcflag=1");
      }
      
      public static function onTiansheTaizuVideoClick() : void
      {
         KTool.playVideoFromThirdParty("http://yuntv.letv.com/bcloud.swf?uu=94aec87868&vu=988439dda3&auto_play=1&gpcflag=1");
      }
      
      public static function onZhaKesiVideoClick() : void
      {
         KTool.playVideoFromThirdParty("http://yuntv.letv.com/bcloud.swf?uu=94aec87868&vu=9eab02f853&auto_play=1&gpcflag=1");
      }
      
      public static function OnlineToGetWinsPostiga() : void
      {
         NpcDialogNew_1.show(2615,["亲爱的朋友，能帮你些什么呢？"],["我想去领取精灵！","嗯……暂时想离开这里！"],[function():void
         {
            ModuleManager.showAppModule("OnlineToGetWinsPostigaMainPanel");
         },function():void
         {
            MapManager.changeMapWithCallback(1,function():void
            {
               ModuleManager.showAppModule("SignUpToGetPetSkinPanel");
            });
         }]);
      }
      
      public static function goto1192() : void
      {
         NpcDialogNew_1.show(NPC.LEYI_KING,["你能来到这里，说明你获得了古王们的恩许。现在，说出你的愿望吧！"],["我想前去王之圣殿！","我想继续留在这里！"],[function():void
         {
            MapManager.changeMap(1192);
         }]);
      }
      
      public static function clickWeisikeTongjiMapObject() : void
      {
         WeisikeTongjiController.getState(function(param1:int):void
         {
            if(KTool.getBit(param1,7) == 0)
            {
               ModuleManager.showAppModule("WeisikeTongjiPanel",false);
            }
            else
            {
               ModuleManager.showAppModule("WeisikeYURePanel");
            }
         });
      }
      
      public static function onxiemingshouhuangVideoClick() : void
      {
         KTool.playVideoFromThirdParty("http://yuntv.letv.com/bcloud.swf?uu=94aec87868&vu=0c1d734487&auto_play=1&gpcflag=1&lang=zh_CN");
      }
      
      public static function onVipCrazySendEq() : void
      {
         ModuleManager.showAppModule("VipCrazySendMainPanel");
      }
      
      public static function onlookingforSorensenSeriesActivitiesExit() : void
      {
         Alert.show("你确定要离开当前任务场景吗？",function():void
         {
            MapManager.changeMapWithCallback(1,function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("LookingforSorensenSeriesActivitiesMainPanel"),"正在打开....");
            });
         });
      }
      
      public static function showsceneGuide() : void
      {
         ModuleManager.hideAllModule();
         SceneActivityGuideController.getinstance().showmask(1);
      }
   }
}
