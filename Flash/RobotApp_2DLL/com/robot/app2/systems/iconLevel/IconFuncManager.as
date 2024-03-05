package com.robot.app2.systems.iconLevel
{
   import com.robot.app.control.NewSeerGuideController;
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.tasksRecord.TasksRecordConfig;
   import com.robot.app2.component.TimeComponent;
   import com.robot.app2.control.BraveChallengeController;
   import com.robot.app2.control.KaxiusiEvoController2;
   import com.robot.app2.control.MonthVipController;
   import com.robot.app2.control.NewAndReturnIconController;
   import com.robot.app2.control.SeerReturnNewController;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.WeeklyTasksController;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.TaskEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.geom.Point;
   import flash.net.SharedObject;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import flash.utils.setInterval;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class IconFuncManager
   {
      
      public static const SUMMER_GIFT_JAGU_SEER:int = 1;
      
      public static const SUMMER_GIFT_JAGU_BEST:int = 2;
      
      private static var so:SharedObject;
      
      public static var leftTimeCompont:TimeComponent;
      
      public static var leftTime:int;
      
      private static var timecompont:TimeComponent;
      
      private static var left:int;
      
      private static var ac:ActivityControl;
      
      private static var cron:Array = [new CronTimeVo("*","12-17","30","4","*","*"),new CronTimeVo("*","12-17","1","5","*","*")];
       
      
      public function IconFuncManager()
      {
         super();
      }
      
      public static function openCaodan1Panel(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("WantedTaskPanel"));
      }
      
      public static function openEvolutionElvesPanel(param1:MovieClip) : void
      {
         StatManager.sendStat2014("向龙族宣战","点击icon",StatManager.RUN_ACT);
         ModuleManager.showModule(ClientConfig.getAppModule("EvolutionElvesPanel"));
      }
      
      public static function openCaodan2Panel(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ExchangeDiamondGetPetPanel"));
      }
      
      public static function initQuickStart(param1:MovieClip) : void
      {
         var onNotice:Function = null;
         var icon:MovieClip = param1;
         onNotice = function(param1:SocketEvent):void
         {
            if(icon)
            {
               icon["light"].gotoAndPlay(1);
            }
         };
         SocketConnection.addCmdListener(CommandID.QUICKSTART_COMPLETE_NOTICE,onNotice);
         icon["light"].gotoAndStop(1);
      }
      
      public static function clickDiamondIcon(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ExchangeDiamondGetXteamPet"));
      }
      
      public static function clickQuickStart(param1:MovieClip) : void
      {
         SocketConnection.send(1020,12);
         SocketConnection.send(1020,153);
         StatManager.sendTodayRegStat(86064449);
         StatManager.sendPetStat(86064462);
         param1["light"].gotoAndStop(1);
         ModuleManager.showModule(ClientConfig.getAppModule("QuickStartPanel"),"正在打开星际之旅....");
      }
      
      public static function clickFee(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("FeeAdPanel_20150227"),"正在加载...");
      }
      
      public static function clickSignInAwardIcon(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SignInSummaryPanel"),"正在加载...");
      }
      
      public static function openADLoginEvolutionMainPanel(param1:MovieClip) : void
      {
         SocketConnection.send(1022,86054080);
         var _loc2_:int = 1171;
         if(!BufferRecordManager.getMyState(_loc2_))
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ADLoginEvolutionGeduoPanel"),"正在加载...");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ADLoginEvolutionMainPanel"),"正在加载...");
         }
      }
      
      public static function onWhiteTigerClick(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("TigerEvoLetterPanel"),"正在加载...");
      }
      
      public static function onZhaoYunClick(param1:MovieClip) : void
      {
         WeeklyTasksController.go(12);
      }
      
      public static function initWeekIcon(param1:MovieClip) : void
      {
      }
      
      public static function clickWeekIcon(param1:MovieClip) : void
      {
         StatManager.sendNormalStat(84806768);
         StatManager.sendTodayRegStat(86064444);
         StatManager.sendPetStat(86064457);
         StatManager.sendStat2014("精彩活动","点击icon",StatManager.RUN_ACT);
         if(BitBuffSetClass.getState(22524) == 0)
         {
            BitBuffSetClass.setState(22524,1);
            if(param1["flag"])
            {
               param1["flag"].visible = false;
            }
         }
         ModuleManager.showModule(ClientConfig.getAppModule("NewYearPetFestivalPanel"),"正在加载....");
      }
      
      public static function initWinterHoliday2017MonthCard(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         KTool.getBitSet([431,1000337],function(param1:Array):void
         {
            if(param1[0] == 1 && param1[1] == 0)
            {
               icon.gotoAndStop(1);
            }
            else
            {
               icon.gotoAndStop(2);
            }
         });
      }
      
      public static function FridayNiuDan(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         KTool.getBitSet([2000023],function(param1:Array):void
         {
            var arr:Array = param1;
            if(arr[0] == 1)
            {
               IconController.hideIcon("FridayNiuDanIcon");
            }
            else
            {
               KTool.getBitSet([2000024],function(param1:Array):void
               {
                  if(param1[0] == 1)
                  {
                     IconController.hideIcon("FridayNiuDanIcon");
                  }
                  else
                  {
                     IconController.showIcon("FridayNiuDanIcon");
                  }
               });
            }
         });
      }
      
      public static function FirstVIP(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         var date:Date = SystemTimerManager.sysBJDate;
         var bitId:int = 304;
         KTool.getBitSet([bitId,303],function(param1:Array):void
         {
            if(param1[1] == 1)
            {
               IconController.hideIcon("first_vip_icon");
               return;
            }
            if(param1[0] == 1)
            {
               IconController.showIcon("first_vip_icon");
            }
            else
            {
               IconController.hideIcon("first_vip_icon");
            }
         });
      }
      
      public static function initTask(param1:MovieClip) : void
      {
         if(param1["effect"])
         {
            param1["effect"].mouseChildren = false;
            param1["effect"].mouseEnabled = false;
         }
      }
      
      public static function initVip(param1:MovieClip) : void
      {
         if(param1["effect"])
         {
            param1["effect"].mouseChildren = false;
            param1["effect"].mouseEnabled = false;
         }
      }
      
      public static function clickTask(param1:MovieClip = null) : void
      {
         StatManager.sendNormalStat(86052128);
         StatManager.sendTodayRegStat(86064446);
         StatManager.sendPetStat(86064459);
         if(Boolean(param1) && Boolean(param1["light"]))
         {
            param1["light"].visible = false;
            param1["light"].stop();
         }
         if(Boolean(param1) && Boolean(param1["effect"]))
         {
            param1["effect"].visible = false;
         }
         StatManager.sendStat2014("新版主线统计相关","点击主线ICON","2018新版主线统计");
         ModuleManager.showAppModule("MainLineTask_3342");
      }
      
      public static function openBinbinMain(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("BinbinSuperEvolutionMainPanel"),"正在打开....");
      }
      
      public static function nationalDayDraw(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("NationalDayDrawPanel"),"正在打开....");
      }
      
      public static function initTrainingLog(param1:MovieClip) : void
      {
         var onLight:Function = null;
         var onAward:Function = null;
         var onFinishTask:Function = null;
         var icon:MovieClip = param1;
         onLight = function(param1:SocketEvent):void
         {
            icon["light"].visible = true;
            icon["light"].play();
            SocketConnection.send(CommandID.XIAO_AI_BO_ADD_MEDAL,2);
         };
         var addTaskEvent:Function = function():void
         {
            var storys:XML = null;
            var taskId:int = 0;
            var story:XML = null;
            var storyIds:Array = new Array();
            var chapters:XML = TasksRecordConfig.getJuQingXML();
            for each(storys in chapters.children())
            {
               for each(story in storys.children())
               {
                  if(story.hasOwnProperty("@id"))
                  {
                     storyIds.push(int(story.@id));
                  }
               }
            }
            for each(taskId in storyIds)
            {
               TasksManager.addListener(TaskEvent.ACCEPT,taskId,0,function(param1:* = null):void
               {
                  SocketConnection.send(CommandID.CHANGE_DAILY_LIMIT,12049);
               });
            }
         };
         onAward = function(param1:SocketEvent):void
         {
            if(icon)
            {
               (icon["txtInfo"] as MovieClip).gotoAndStop(2);
            }
         };
         onFinishTask = function(param1:SocketEvent):void
         {
            var e:SocketEvent = param1;
            ResourceManager.getResource(ClientConfig.getAppRes("daily_task_tip"),function(param1:DisplayObject):void
            {
               var tip:DisplayObject = param1;
               if(LevelManager.appLevel)
               {
                  LevelManager.appLevel.addChild(tip);
                  CommonUI.centerAlign(tip,tip.parent as Sprite,new Point(960 / 2,560 / 2));
                  setTimeout(function():void
                  {
                     DisplayUtil.removeForParent(tip);
                  },1500);
               }
            });
         };
         SocketConnection.addCmdListener(CommandID.DAILY_TASK_LIGHT,onLight);
         addTaskEvent();
         SocketConnection.addCmdListener(CommandID.DAILY_TASK_FINISH_TASK,onFinishTask);
         SocketConnection.addCmdListener(CommandID.DAILY_TASK_TASK_AWARD,onAward);
         icon["light"].visible = false;
         icon["light"].stop();
      }
      
      public static function initNewseer2020icon(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         KTool.getMultiValue([120204,120205],function(param1:Array):void
         {
            if(!NewSeerTaskController.isNewSeer && param1[0] >= 127 && (param1[1] & 7) == 7 && (param1[1] >> 10 & 3) == 3)
            {
               IconController.hideIcon("newSeer2020_icon");
            }
         });
      }
      
      public static function newseer2020iconClick(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         KTool.getMultiValue([120204,120205],function(param1:Array):void
         {
            if(!NewSeerTaskController.isNewSeer && param1[0] >= 127 && (param1[1] & 7) == 7 && (param1[1] >> 10 & 3) == 3)
            {
               return;
            }
            if(param1[0] < 127)
            {
               ModuleManager.showAppModule("NewSeerSignGift2020MainPanel");
            }
            else
            {
               ModuleManager.showAppModule("NewSeerFirstcharge2020MainPanel");
            }
         });
      }
      
      public static function initNewSeerFirstcharge2020icon(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         KTool.getMultiValue([120205],function(param1:Array):void
         {
            if(!NewSeerTaskController.isNewSeer && (param1[0] & 7) == 7 && (param1[0] >> 10 & 3) == 3)
            {
               IconController.hideIcon("newSeerFc2020_icon");
            }
         });
      }
      
      public static function clickTrainingLog(param1:MovieClip) : void
      {
         SocketConnection.send(1022,86051744 + uint(MainManager.actorInfo.petMaxLev / 10));
         StatManager.sendTodayRegStat(86064445);
         StatManager.sendPetStat(86064458);
         param1["light"].visible = false;
         SocketConnection.send(1020,151);
         ModuleManager.showModule(ClientConfig.getAppModule("SeerTrainingPanel"),"正在载入...");
         SocketConnection.send(1022,86063266);
         (param1["txtInfo"] as MovieClip).gotoAndStop(1);
      }
      
      public static function clickSPTIcon(param1:MovieClip) : void
      {
         StatManager.sendTodayRegStat(86064447);
         StatManager.sendPetStat(86064460);
         SocketConnection.send(1020,150);
         SocketConnection.send(1022,86060200);
         ModuleManager.showModule(ClientConfig.getAppModule("SptChallengeChoicePanel"),"正在打开赛尔先锋队任务....");
      }
      
      public static function initPetBookIcon(param1:MovieClip) : void
      {
         so = SOManager.getUserSO("petbook_tip" + ClientConfig.newsVersion);
         if(so && so.data && Boolean(so.data["btn_new_tip"]))
         {
            param1["newTip"].visible = false;
         }
      }
      
      public static function clickPetBookIcon(param1:MovieClip) : void
      {
         param1["newTip"].visible = false;
         so.data["btn_new_tip"] = true;
         SOManager.flush(so);
         ModuleManager.showModule(ClientConfig.getAppModule("PetBook2014"),"正在打开","本周精灵");
         SocketConnection.send(1022,86054176);
         SocketConnection.send(1022,86065168);
      }
      
      public static function clickPetIcon(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("LoginGetPetPanel"));
      }
      
      public static function clickActivityIcon(param1:MovieClip) : void
      {
         StatManager.sendStat2014("主题活动620","点击主界面中主题活动icon",StatManager.RUN_ACT);
         ModuleManager.showModule(ClientConfig.getAppModule("OpenSchoolAdPanel"));
      }
      
      public static function clickChildrenActivitiesCenter(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ChildrenActivitiesCenterPanel"));
      }
      
      public static function clickLordWarIcon(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("LordOfWarMainPanel"));
      }
      
      public static function clickVIPPrivilege(param1:MovieClip) : void
      {
         StatManager.sendStat2014("vip特权汇总0425","点击节日特权ICON的",StatManager.RUN_ACT);
         ModuleManager.showModule(ClientConfig.getAppModule("VIPHuiKuiPanel"),"正在加载....");
      }
      
      public static function clickGiftGaya(param1:MovieClip) : void
      {
         StatManager.sendStat2014("神宠天天送","点击ICON的",StatManager.RUN_ACT);
         ModuleManager.showModule(ClientConfig.getAppModule("GayaGiftPanel"),"正在加载....");
      }
      
      public static function clickBraveIcon(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ADBraveChallengeMainPanel"),"正在加载....");
      }
      
      public static function callEvilBtnHandler(param1:MovieClip) : void
      {
         if(BufferRecordManager.getMyState(1115) == true)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("EvilWakeUpMaikelangqiluoPanel"));
         }
         else
         {
            MapManager.changeMap(977);
         }
      }
      
      public static function clickKaxiusiEvoAd(param1:MovieClip) : void
      {
         SocketConnection.send(1022,86071305);
         if(BufferRecordManager.getMyState(1117))
         {
            ModuleManager.showModule(ClientConfig.getAppModule("KaxiusiEvoAdMainPanel"));
         }
         else if(MapManager.currentMap.id != 98)
         {
            MapManager.changeMap(98);
         }
         else
         {
            KaxiusiEvoController2.onClick();
         }
      }
      
      public static function clickNewTitleIcon(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("NewTitleSignPanel"));
      }
      
      public static function callMajin(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ADGetMajinPanel"));
      }
      
      public static function initNewseerSign(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         if(NewSeerTaskController.isNewVersionSeer2016)
         {
            IconController.hideIcon("newseer_sign");
         }
         else if(NewSeerTaskController.isNewVersionSeer2015)
         {
            KTool.getBitSet([12928],function(param1:Array):void
            {
               if(param1[0] > 0)
               {
                  IconController.hideIcon("newseer_sign");
               }
            });
         }
         else if(NewSeerTaskController.isNewVersionSeer)
         {
            KTool.getBitSet([12822],function(param1:Array):void
            {
               if(param1[0] > 0)
               {
                  IconController.hideIcon("newseer_sign");
               }
            });
         }
         else
         {
            IconController.hideIcon("newseer_sign");
         }
      }
      
      public static function clickNewseerSign(param1:MovieClip) : void
      {
         StatManager.sendStat2014("5月全新新手任务","点击7日好礼Icon",StatManager.USER_CHARACTER);
         if(NewSeerTaskController.isNewVersionSeer2015)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("NewSeerSign2015Panel"));
         }
         else if(NewSeerTaskController.isNewVersionSeer)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("NewSeerSignPanel"));
         }
      }
      
      public static function initNewSeerFiveDay(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         if(NewSeerTaskController.isNewVersionSeer2016)
         {
            icon["eff"].mouseChildren = icon["eff"].mouseEnabled = false;
            icon["eff"].play();
            KTool.getMultiValue([8535,15860],function(param1:Array):void
            {
               if(param1[0] >= 5 || KTool.getBit(param1[1],1) < 1)
               {
                  IconController.hideIcon("newseerfiveDay");
               }
            });
         }
         else
         {
            IconController.hideIcon("newseerfiveDay");
         }
      }
      
      public static function initnewseerGetELFKing(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         if(Boolean(NewSeerTaskController.isNewSeerTaskADone2016) && Boolean(NewSeerTaskController.isNewVersionSeer20170414))
         {
            KTool.getMultiValue([6869],function(param1:Array):void
            {
               var arr:Array = param1;
               KTool.getBitSet([1000326],function(param1:Array):void
               {
                  if(!(arr[0] >= 1 && arr[0] < 15 && param1[0] == 0 || arr[0] == 1))
                  {
                     IconController.hideIcon("newseerGetELFKing_icon");
                  }
               });
            });
         }
         else
         {
            IconController.hideIcon("newseerGetELFKing_icon");
         }
      }
      
      public static function initNewSeer2016Icon(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         if(NewSeerTaskController.isNewVersionSeer2016)
         {
            KTool.getBitSet([17776],function(param1:Array):void
            {
               var arr1:Array = param1;
               KTool.getMultiValue([8535,2894,8546],function(param1:Array):void
               {
                  if(Boolean(NewSeerTaskController.isNewSeerTaskADone2016) && arr1[0] == 0)
                  {
                     if(param1[0] >= 5 && param1[1] >= 7 && KTool.getBit(param1[2],1) > 0 && KTool.getBit(param1[2],2) > 0 && KTool.getBit(param1[2],3) > 0 && KTool.getBit(param1[2],4) > 0 && KTool.getBit(param1[2],5) > 0)
                     {
                        IconController.hideIcon("newseerfiveDay_tmp");
                     }
                  }
                  else if(param1[0] >= 5 && param1[1] >= 7)
                  {
                     IconController.hideIcon("newseerfiveDay_tmp");
                  }
               });
            });
         }
         else
         {
            IconController.hideIcon("newseerfiveDay_tmp");
         }
      }
      
      public static function ClickNewSeerFiveDay(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SendSpiritePanel"));
      }
      
      public static function initNewSeerGroupicon(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         KTool.getMultiValue([8535,2894,15860,8537,8536,6907],function(param1:Array):void
         {
            var _loc2_:Boolean = false;
            var _loc3_:int = 0;
            if(param1[3] >= 14 || Boolean(NewSeerTaskController.isNewVersionSeer20170627))
            {
               _loc2_ = false;
               _loc3_ = SystemTimerManager.time - param1[5];
               if(param1[5] != 0 && _loc3_ < 14 * 3600 * 24)
               {
                  _loc2_ = true;
               }
               if((param1[1] >= 7 || KTool.getBit(param1[2],2) < 1) && !_loc2_)
               {
                  IconController.hideIcon("newseergroup_icon");
               }
            }
            else
            {
               IconController.hideIcon("newseergroup_icon");
            }
         });
      }
      
      public static function initNewSeerSevenDay(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         KTool.getMultiValue([8535,2894,15860,8537,8536],function(param1:Array):void
         {
            if(param1[3] >= 14)
            {
               icon["eff"].mouseChildren = icon["eff"].mouseEnabled = false;
               icon["eff"].play();
               if(param1[1] >= 7 || KTool.getBit(param1[2],2) < 1)
               {
                  IconController.hideIcon("newserSevenDay");
               }
            }
            else
            {
               IconController.hideIcon("newserSevenDay");
            }
         });
      }
      
      public static function initNewSeerpets(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         if(NewSeerTaskController.isNewVersionSeer20170627)
         {
            KTool.getMultiValue([6907],function(param1:Array):void
            {
               var _loc4_:int = 0;
               var _loc2_:Boolean = false;
               var _loc3_:int = SystemTimerManager.time - param1[0];
               if((_loc4_ = Math.ceil((14 * 3600 * 24 - _loc3_) / (3600 * 24))) > 14)
               {
                  _loc4_ = 14;
               }
               if(param1[0] != 0 && _loc3_ < 14 * 3600 * 24)
               {
                  if(icon["txt"])
                  {
                     icon["txt"].text = "仅剩" + _loc4_ + "天";
                  }
                  _loc2_ = true;
               }
               if(!_loc2_)
               {
                  IconController.hideIcon("newseer_fuli_icon");
               }
            });
         }
         else
         {
            IconController.hideIcon("newseer_fuli_icon");
         }
      }
      
      public static function initGodAlliace(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         if(NewSeerTaskController.isNewSeer)
         {
            KTool.getMultiValue([6906],function(param1:Array):void
            {
               if(param1[0] < 8)
               {
                  IconController.hideIcon("godofwaralliance");
               }
            });
         }
         else
         {
            IconController.hideIcon("godofwaralliance");
         }
      }
      
      public static function initNewsptFun(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         if(NewSeerTaskController.isNewSeer)
         {
            KTool.getMultiValue([6906],function(param1:Array):void
            {
               if(param1[0] < 12)
               {
                  IconController.hideIcon("newSpt");
               }
            });
         }
      }
      
      public static function ClickNewSeerSevenDay(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("GetNewseerGiftPanel"));
      }
      
      public static function initNewseerthreepets(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         if(NewSeerTaskController.isNewVersionSeer2016)
         {
            KTool.getBitSet([17776],function(param1:Array):void
            {
               var arr1:Array = param1;
               KTool.getMultiValue([8535,2894,8546],function(param1:Array):void
               {
                  if(Boolean(NewSeerTaskController.isNewSeerTaskADone2016) && arr1[0] == 0)
                  {
                     if(param1[0] >= 5 && param1[1] >= 7 && KTool.getBit(param1[2],1) > 0 && KTool.getBit(param1[2],2) > 0 && KTool.getBit(param1[2],3) > 0 && KTool.getBit(param1[2],4) > 0 && KTool.getBit(param1[2],5) > 0)
                     {
                        IconController.hideIcon("threepets");
                     }
                  }
                  else if(param1[0] >= 5 && param1[1] >= 7)
                  {
                     IconController.hideIcon("threepets");
                  }
               });
            });
         }
         else
         {
            IconController.hideIcon("threepets");
         }
      }
      
      public static function ClickNewSeerthreepets(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ThreePetsPanel"));
      }
      
      public static function initNewSeerFirstVip(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         KTool.getBitSet([17776],function(param1:Array):void
         {
            var arr1:Array = param1;
            if(Boolean(NewSeerTaskController.isNewVersionSeer2016) && Boolean(NewSeerTaskController.isNewSeerTaskADone2016) && arr1[0] == 0)
            {
               KTool.getMultiValue([8546],function(param1:Array):void
               {
                  if(KTool.getBit(param1[0],1) > 0 && KTool.getBit(param1[0],2) > 0)
                  {
                     IconController.hideIcon("firstVip");
                  }
               });
            }
            else
            {
               IconController.hideIcon("firstVip");
            }
         });
      }
      
      public static function ClickNewSeerFitstVip(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         KTool.getMultiValue([8546],function(param1:Array):void
         {
            if(KTool.getBit(param1[0],1) < 1)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("NoviceGaiaVip1Panel"));
            }
            else
            {
               ModuleManager.showModule(ClientConfig.getAppModule("NoviceGaiaVip2Panel"));
            }
         });
      }
      
      public static function initNewseerFirstChange(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         KTool.getBitSet([17776],function(param1:Array):void
         {
            var arr1:Array = param1;
            if(Boolean(NewSeerTaskController.isNewVersionSeer2016) && Boolean(NewSeerTaskController.isNewSeerTaskADone2016) && arr1[0] == 0)
            {
               KTool.getMultiValue([8546],function(param1:Array):void
               {
                  if(KTool.getBit(param1[0],3) > 0 && KTool.getBit(param1[0],4) > 0 && KTool.getBit(param1[0],5) > 0)
                  {
                     IconController.hideIcon("firstChange");
                  }
               });
            }
            else
            {
               IconController.hideIcon("firstChange");
            }
         });
      }
      
      public static function ClickNewSeerFirstChange(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("NewSeerSongMiuSiPanel"));
      }
      
      public static function initSevenAnnClosure(param1:MovieClip) : void
      {
         var _loc2_:Date = new Date(2016,6 - 1,24);
         addLeftTimeTxt(_loc2_,param1);
      }
      
      public static function addLeftTimeTxt(param1:Date, param2:MovieClip) : void
      {
         var checkTime:Function = null;
         var objDate:Date = param1;
         var icon:MovieClip = param2;
         checkTime = function(param1:int = 0):void
         {
            --leftTime;
            if(leftTime <= 0)
            {
               timecompont.destroy();
               timecompont = null;
            }
            var _loc2_:int = leftTime / (3600 * 24);
            var _loc3_:int = leftTime / 3600;
            var _loc4_:int = leftTime % 3600 / 60;
            var _loc5_:int = leftTime % 60;
            var _loc6_:* = "";
            if(_loc2_ > 0)
            {
               if(_loc3_ != 0 || _loc4_ != 0 || _loc5_ != 0)
               {
                  _loc2_ += 1;
               }
               _loc6_ = "剩余" + _loc2_ + "天";
            }
            else
            {
               _loc6_ = "剩余" + _loc3_ + "小时";
            }
            icon.leftTimeTxt.text = _loc6_;
         };
         var sysDate:Date = SystemTimerManager.sysDate;
         if(sysDate < objDate)
         {
            leftTime = (objDate.time - sysDate.time) / 1000;
            leftTimeCompont = new TimeComponent(icon,checkTime,1000);
         }
      }
      
      public static function initVIP7thAnniversaryBtn(param1:MovieClip) : void
      {
         var _loc2_:Date = new Date(2016,10 - 1,21);
         var _loc3_:int = Math.floor((_loc2_.time - SystemTimerManager.sysBJDate.time) / (1000 * 60 * 60 * 24)) + 1;
         if(_loc2_.time - SystemTimerManager.sysBJDate.time <= 0)
         {
            _loc3_ = 0;
         }
         param1["txt"].text = "还有" + _loc3_ + "天";
      }
      
      public static function initStlIcon(param1:MovieClip) : void
      {
         var sysdate:Date;
         var timeVos:Array;
         var timeControl:ActivityControl = null;
         var timeoutKey:int = 0;
         var checkFun:Function = null;
         var con:MovieClip = param1;
         if(NewSeerGuideController.isNewSeer == true)
         {
            IconController.hideIcon("stl_icon");
            return;
         }
         sysdate = SystemTimerManager.sysBJDate;
         timeVos = [new CronTimeVo("*","12-18","5","10","*","2016"),new CronTimeVo("*","12-20","6","10","*","2016")];
         timeControl = new ActivityControl(timeVos);
         timeoutKey = 0;
         checkFun = function():void
         {
            if(timeControl.isInActivityTime)
            {
               IconController.showIcon("stl_icon");
               if(timeoutKey == 0)
               {
                  timeoutKey = setTimeout(function():void
                  {
                     ModuleManager.showAppModule("StlLive2Panel");
                  },15000);
               }
            }
            else
            {
               IconController.hideIcon("stl_icon");
               if(timeControl.isPast)
               {
                  SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,checkFun);
               }
            }
         };
         if(sysdate.date == 5 || sysdate.date == 6)
         {
            checkFun();
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,checkFun);
         }
         else
         {
            IconController.hideIcon("stl_icon");
         }
      }
      
      public static function initNewseerGodSpirite(param1:MovieClip) : void
      {
         var checkTime:Function = null;
         var icon:MovieClip = param1;
         checkTime = function(param1:int = 0):void
         {
            --left;
            if(left <= 0)
            {
               timecompont.destroy();
               timecompont = null;
               IconController.hideIcon("newSeerGodSpirite");
            }
            var _loc2_:int = left / (3600 * 24);
            var _loc3_:int = left / 3600;
            var _loc4_:int = left % 3600 / 60;
            var _loc5_:int = left % 60;
            var _loc6_:* = "";
            if(_loc2_ > 0)
            {
               _loc6_ = "剩余" + _loc2_ + "天";
            }
            else
            {
               _loc6_ = "剩余" + _loc3_ + "小时";
            }
            icon.time.text = _loc6_;
         };
         KTool.getBitSet([17776],function(param1:Array):void
         {
            var arr1:Array = param1;
            if(Boolean(NewSeerTaskController.isNewVersionSeer2016) && Boolean(NewSeerTaskController.isNewSeerTaskADone2016) && arr1[0] == 0)
            {
               KTool.getMultiValue([8544],function(param1:Array):void
               {
                  var _loc2_:Date = SystemTimerManager.sysBJDate;
                  if(_loc2_.time / 1000 - param1[0] > 7 * 24 * 3600)
                  {
                     IconController.hideIcon("newSeerGodSpirite");
                  }
                  else
                  {
                     left = 7 * 24 * 3600 - (_loc2_.time / 1000 - param1[0]);
                     timecompont = new TimeComponent(icon,checkTime,1000);
                     checkTime();
                  }
               });
            }
            else
            {
               IconController.hideIcon("newSeerGodSpirite");
            }
         });
      }
      
      public static function clickNewseerGodSpirite(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("TimedSeckillForNewPlayerPanel"));
      }
      
      public static function initSuperGod(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,function(param1:*):void
         {
            var _loc2_:Date = SystemTimerManager.sysBJDate;
            if(_loc2_.hours == 13 || _loc2_.hours == 14 || _loc2_.hours == 19)
            {
               icon.visible = false;
            }
            else
            {
               icon.visible = true;
            }
         });
      }
      
      public static function clickSuperGod(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SuperGodFightMsgPanel"));
      }
      
      public static function clickSbreakthrouhBtn(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SBreakthroughMainPanel"));
      }
      
      public static function clickGiftStar(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("GiftLuckyStarPanel1"));
      }
      
      public static function clickBigFilm(param1:DisplayObject) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("FilmMsg"));
      }
      
      public static function clickSendGodEveryDayIcon(param1:DisplayObject) : void
      {
         StatManager.sendStat2014("神宠天天送","点击ICON的",StatManager.RUN_ACT);
         ModuleManager.showModule(ClientConfig.getAppModule("SendGodPetEveryDayPanel"));
      }
      
      public static function clcikNewSpt(param1:DisplayObject) : void
      {
         StatManager.sendStat2014("勇者历险","点击主UI新ICON",StatManager.RUN_ACT);
         ModuleManager.showModule(ClientConfig.getAppModule("SptGuidPanel"));
      }
      
      public static function clickELing(param1:DisplayObject) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("elingshou/ELingShouRegressionPanel"));
      }
      
      public static function clickPeakLeague(param1:DisplayObject) : void
      {
         StatManager.sendStat2014("巅峰之战－全国联赛","点击主uiicon",StatManager.RUN_ACT);
         MapManager.changeMap(1011);
      }
      
      public static function clcikAlliance(param1:DisplayObject) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("AllianceMainPanel"));
      }
      
      public static function clickDiamondGiftIcon(param1:MovieClip) : void
      {
         BitBuffSetClass.setState(23095,1);
         DisplayUtil.removeForParent(param1["anim"]);
         ModuleManager.showModule(ClientConfig.getAppModule("DiamondExchangeNewPanel"));
      }
      
      public static function initDiamondGiftIcon(param1:MovieClip) : void
      {
         if(BitBuffSetClass.getState(23095))
         {
            DisplayUtil.removeForParent(param1["anim"]);
         }
      }
      
      public static function onTreasureHunt(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("TreasureHuntPanel"));
      }
      
      public static function clickSGZSYRIcon(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         if(!BitBuffSetClass.getState(22489))
         {
            BitBuffSetClass.setState(22489,1,function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("shangguzhanshenquanping"),function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("ShangGuZhanShenYuReNewPanel"));
               });
            });
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ShangGuZhanShenYuReNewPanel"));
         }
      }
      
      public static function onClickGoldMarkSale(param1:MovieClip) : void
      {
         MapManager.changeMap(1024);
      }
      
      public static function onClickAncientAres(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("AncientAresMainPanel"));
      }
      
      public static function onDragonBirthClick(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("DragonBirthPanel"));
      }
      
      public static function onYanmo(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SuperFishDragonKingMainPanel"));
      }
      
      public static function clickYulong(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("FishDragonKingPanel"));
      }
      
      public static function onClickBaoYueIcon(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SepMainPanel"));
      }
      
      public static function onLueBuSuperEvo(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("luebu/LueBuSuperEvolution"));
      }
      
      public static function onPandora(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("PandoraMainPanel"));
      }
      
      public static function onPandoraBox(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("PandoraBoxSummaryPanel"));
      }
      
      public static function onCallUpRoyalWarrior(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ADBraveChallengeCallPanel"));
      }
      
      public static function clickSaierdou(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SaierdouNationalDayPanel"));
      }
      
      public static function clcikAllPeopleAchievement(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("AllPeopleAchievementPanel"));
      }
      
      public static function clcikOnQingLongChild(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("QingLongChildPanel"));
      }
      
      public static function onClickBraveBtn(param1:MovieClip) : void
      {
         BraveChallengeController.taskStart();
      }
      
      public static function onPetFriend(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("PetFriendMainPanel"));
      }
      
      public static function onEvoConjecture(param1:* = null) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("DragonEvoIntroPanel"));
      }
      
      public static function onEvoKunLun(param1:* = null) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("KunLunSuperEvolvePanel"));
      }
      
      public static function onTigerKing(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("TigerKingSuperEvolveMainPanel"));
      }
      
      public static function onColorTigerKing(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ColorfulTigerSignSentMainPanel"));
      }
      
      public static function onMS(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("MoShenKidsPanel"));
      }
      
      public static function onNovEvo(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("NovemberEvoPanel"));
      }
      
      public static function onZhaoYunCaoEvo(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ZhaoYunCaoEvoMainPanel"));
      }
      
      public static function onCelebrationClick(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("AnniversaryCelebrationPanel"));
      }
      
      public static function onGameFestivalShop(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("GameFestivalShopPanel"));
      }
      
      public static function onSaredPetGuess(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SacredPetGuessPanel"));
      }
      
      public static function initThirdFriend(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         KTool.getLimitNum(15579,function(param1:uint):void
         {
            if(param1 == 0)
            {
               icon.gotoAndStop(2);
            }
            else
            {
               icon.gotoAndStop(1);
            }
         });
      }
      
      public static function onThirdFriend(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         ModuleManager.showModule(ClientConfig.getAppModule("BlueGreenNewFriendAdPanel"));
         if(icon.currentFrame == 2)
         {
            SocketConnection.sendWithCallback2(CommandID.BLUE_GREEN_NEW_FRIEND_GAME,function(param1:SocketEvent):void
            {
               icon.gotoAndStop(1);
            },[3,0]);
         }
      }
      
      public static function onIceShadow(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("LieYanHaoEvolvePanel"));
      }
      
      public static function onChristmasGift(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ChristmasActivitiesAdPanel"));
      }
      
      public static function onNewYearBenefits(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("NewYearBenefitsSumaryPanel"));
      }
      
      public static function onClickZhakesi(param1:MovieClip) : void
      {
         ModuleManager.showAppModule("ZhakesiSecondComingMsgPanel");
      }
      
      public static function onClickSurvey(param1:MovieClip) : void
      {
         ModuleManager.showAppModule("QuestionnairePanel");
      }
      
      public static function initNewSeer(param1:MovieClip) : void
      {
         if(!NewSeerTaskController.isNewVersionSeer || Boolean(NewSeerTaskController.isNewSeerTaskDone))
         {
            IconController.hideIcon("new_seer_task_icon");
         }
      }
      
      public static function onNewSeer(param1:MovieClip) : void
      {
         StatManager.sendStat2014("5月全新新手任务  ","点击试炼之路icon的",StatManager.USER_CHARACTER);
         ModuleManager.showModule(ClientConfig.getAppModule("NewSeerTaskPanel_2014"));
      }
      
      public static function initReturnIcon(param1:MovieClip) : void
      {
         NewAndReturnIconController.initIcon(param1);
      }
      
      public static function clickReturnIcon(param1:MovieClip) : void
      {
         NewAndReturnIconController.onClickIcon(param1);
      }
      
      public static function clickLanternIcon(param1:MovieClip) : void
      {
         var onSwitchMap:Function = null;
         var icon:MovieClip = param1;
         onSwitchMap = function(param1:MapEvent):void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap);
            ModuleManager.showModule(ClientConfig.getAppModule("LanternFestivelMainPanel"));
         };
         StatManager.sendStat2014("元宵主题活动","点击icon的","2015运营活动");
         if(MapManager.currentMap.id == 1064)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("LanternFestivelMainPanel"));
         }
         else
         {
            MapManager.changeMap(1064);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap);
         }
      }
      
      public static function clickMonth(param1:MovieClip) : void
      {
         MonthVipController.showMainPanel(param1);
      }
      
      public static function clickCallNew(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         KTool.getBitSet([121],function(param1:Array):void
         {
            if(param1[0])
            {
               ModuleManager.showAppModule("OldCallNewNewGetDiamondPanel");
            }
            else
            {
               ModuleManager.showAppModule("OldCallNewOldGetDiamondPanel");
            }
         });
      }
      
      public static function initSignUpMqdk(param1:MovieClip) : void
      {
         if(param1["effect"])
         {
            param1["effect"].mouseEnabled = false;
         }
         var _loc2_:Date = new Date(2015,4,1);
         var _loc3_:Date = SystemTimerManager.sysBJDate;
         if(_loc3_.time < _loc2_.time)
         {
            param1.gotoAndStop(1);
         }
         else
         {
            param1.gotoAndStop(2);
         }
      }
      
      public static function initVip2016(param1:MovieClip) : void
      {
         if(param1["effect"])
         {
            param1["effect"].mouseEnabled = false;
         }
      }
      
      public static function clickSignUpMqdk(param1:MovieClip) : void
      {
         if(param1.currentFrame == 1)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("SignUpGetMengQiDuoKePanel"));
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("SignUpGetFeiErPengGePanel"));
         }
      }
      
      public static function initSignUpNeZha(param1:MovieClip) : void
      {
         if(param1["effect"])
         {
            param1["effect"].mouseEnabled = false;
         }
      }
      
      public static function clickSignUpNeZha(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SignGetJingJingBaiMainPanel"));
      }
      
      public static function onPetCulture(param1:MovieClip) : void
      {
         if(NewSeerTaskController.isNewSeer)
         {
            ModuleManager.showAppModule("NewSeerPetCulturePanel");
         }
         else
         {
            ModuleManager.showAppModule("PetCulturePanel");
         }
      }
      
      public static function initNoviceSummer(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         KTool.getBitSet([169],function(param1:Array):void
         {
            var bva:Array = param1;
            KTool.getMultiValue([6400],function(param1:Array):void
            {
               var _loc2_:Boolean = Boolean(bva[0]) && param1[0] <= 3;
               if(!_loc2_)
               {
                  IconController.hideIcon("novice_summer_icon");
               }
            });
         });
      }
      
      public static function clickThunderGodTrainingIcon(param1:MovieClip) : void
      {
         var onSwitchMap:Function = null;
         var icon:MovieClip = param1;
         onSwitchMap = function(param1:MapEvent):void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap);
            ModuleManager.showModule(ClientConfig.getAppModule("ThunderGodTrainningMainPanel"));
         };
         if(MapManager.currentMap.id == 10947)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ThunderGodTrainningMainPanel"));
         }
         else
         {
            MapManager.changeMap(10947);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap);
         }
      }
      
      public static function titanMissionShow(param1:MovieClip) : void
      {
         var _loc2_:Array = [1273,1274,1275];
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_.length)
         {
            if(!BufferRecordManager.getMyState(_loc2_[_loc3_]))
            {
               return;
            }
            _loc3_++;
         }
         IconController.hideIcon("TitanMissionIcon");
      }
      
      public static function clickStarGate(param1:MovieClip) : void
      {
         navigateToURL(new URLRequest("http://seer.61.com/gameevent/stargate2/?tad=innermedia.seer.free.icon"));
      }
      
      public static function clickPeakJihad(param1:MovieClip) : void
      {
         Alarm.show("由于网络原因导致直播质量较低，暂时关闭，请留意之后的录播回放！");
      }
      
      public static function onPeakJihadLive2017IconInit(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         if(isInAcTime())
         {
            icon["mc"].visible = true;
         }
         else
         {
            icon["mc"].visible = false;
         }
         setTimeout(function():void
         {
            onPeakJihadLive2017IconInit(icon);
         },30000);
      }
      
      public static function isInAcTime() : Boolean
      {
         if(ac == null)
         {
            ac = new ActivityControl(cron);
         }
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         if(ac.isInActivityTime)
         {
            return true;
         }
         return false;
      }
      
      public static function onPeakJihadLive2017IconClick(param1:MovieClip) : void
      {
         navigateToURL(new URLRequest("http://seer.61.com/events/yure/"));
      }
      
      public static function initSubTask(param1:MovieClip) : void
      {
         if(BufferRecordManager.getMyState(1298))
         {
            IconController.hideIcon("TheCallStoneforTitan");
         }
      }
      
      public static function initSixRealmsLegend(param1:MovieClip) : void
      {
         if(BitBuffSetClass.getState(22996))
         {
            param1["movie"].stop;
            param1["movie"].visible = false;
         }
      }
      
      public static function initWeiWeigift(param1:MovieClip) : void
      {
         var tmpicon:MovieClip = null;
         var icon:MovieClip = param1;
         tmpicon = icon;
         SystemTimerManager.addTickFun(function():void
         {
            var _loc1_:Date = SystemTimerManager.sysBJDate;
            if(_loc1_.minutes < 5)
            {
               tmpicon["txt"].text = "";
            }
            else
            {
               tmpicon["txt"].text = SystemTimerManager.getTimeClockString(3600 - _loc1_.minutes * 60 - _loc1_.seconds,false);
            }
         });
      }
      
      public static function clickSixRealmsLegend(param1:MovieClip) : void
      {
         param1["movie"].stop;
         param1["movie"].visible = false;
         BitBuffSetClass.setState(22996,1);
         ModuleManager.showAppModule("SixRealmsLegendMainPanel");
      }
      
      public static function initWinterHolidayPriv(param1:MovieClip) : void
      {
         if(BitBuffSetClass.getState(23071))
         {
            DisplayUtil.removeForParent(param1["anim"]);
         }
      }
      
      public static function clickWinterHolidayPriv(param1:MovieClip) : void
      {
         BitBuffSetClass.setState(23071,1);
         DisplayUtil.removeForParent(param1["anim"]);
         ModuleManager.showAppModule("MonthlyCardPrivilegePanel");
      }
      
      public static function clickDianfengPVP(param1:MovieClip) : void
      {
         navigateToURL(new URLRequest("http://seer.61.com/gameevent/2015djls/"));
      }
      
      public static function clickMillionGift(param1:MovieClip) : void
      {
         navigateToURL(new URLRequest("http://seer.61.com/events/7events/reward/index.html"));
      }
      
      public static function clickQingming(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         MapManager.changeMapWithCallback(1178,function():void
         {
            ModuleManager.showAppModule("QingmingCollectionPanel");
         });
      }
      
      public static function clickOldSeerReturnItemBuyBtn(param1:MovieClip) : void
      {
         ModuleManager.showAppModule("OldSeerReturnPetPanel",{"isBuyPet":false});
      }
      
      public static function clickLianYouBtn(param1:MovieClip) : void
      {
         ModuleManager.showAppModule(BitBuffSetClass.getState(23257) <= 0 ? "FeiliangHistoryMainPanel" : "FeiLianSecretPowerPanel");
      }
      
      public static function clickExchangeDiamondIcon(param1:MovieClip = null) : void
      {
         var icon:MovieClip = param1;
         KTool.getMultiValue([100697],function(param1:Array):void
         {
            var _loc2_:uint = 0;
            var _loc3_:int = 0;
            while(_loc3_ < 4)
            {
               _loc2_ += BitUtils.getBit(param1[0],_loc3_);
               _loc3_++;
            }
            if(_loc2_ == 4)
            {
               ModuleManager.showAppModule("ExchangeDiamondPowerUpPanel");
            }
            else
            {
               ModuleManager.showAppModule("ExchangeDiamondForPetPanel2");
            }
         });
      }
      
      public static function PlanningChallengeInit(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         if(icon["tip"])
         {
            icon["tip"].visible = false;
            icon["tip"].gotoAndStop(1);
         }
         setInterval(function():void
         {
            var _loc1_:Date = null;
            if(icon["tip"])
            {
               _loc1_ = SystemTimerManager.sysBJDate;
               if(_loc1_.fullYear == 2016 && _loc1_.month == 11 && _loc1_.date == 24 && _loc1_.hours >= 14 && _loc1_.hours < 18)
               {
                  icon["tip"].visible = true;
                  icon["tip"].gotoAndPlay(1);
                  icon["tip"].mouseChildren = icon["tip"].mouseEnabled = false;
               }
               else
               {
                  icon["tip"].visible = false;
                  icon["tip"].gotoAndStop(1);
               }
            }
         },30000);
      }
      
      public static function mapiconinit(param1:MovieClip = null) : void
      {
      }
      
      public static function mapiconClick(param1:MovieClip = null) : void
      {
         if(BitBuffSetClass.getState(23431) == 0)
         {
            playmovie();
            BitBuffSetClass.setState(23431,1);
            return;
         }
         playover();
      }
      
      private static function playmovie() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("worldMapsubfull"),playover);
      }
      
      private static function playover() : void
      {
         ModuleManager.showModule(ClientConfig.getMapModule("WorldMapPanel"),"正在载入...",{
            "idx":1,
            "sidx":3
         });
      }
      
      public static function onH5Click(param1:MovieClip = null) : void
      {
         var icon:MovieClip = param1;
         Alert.show("勇者征程需登录《赛尔号巅峰之战》（与赛尔号数据互通）体验，是否现在前往？",function():void
         {
            LinkToUrlManager.openWeUrl("http://seerh5.61.com/home/");
         });
      }
      
      public static function seer13thGiftIconInit(param1:MovieClip = null) : void
      {
         var icon:MovieClip = param1;
         KTool.getMultiValue([120204,120205],function(param1:Array):void
         {
            var _loc2_:Date = SystemTimerManager.get0DateByStr("20210326");
            if(MainManager.actorInfo.regTime * 1000 >= _loc2_.time)
            {
               if(param1[0] < 127)
               {
                  IconController.hideIcon("seer13thGift_Icon");
               }
               else
               {
                  IconController.showIcon("seer13thGift_Icon");
               }
            }
            else
            {
               IconController.showIcon("seer13thGift_Icon");
            }
         });
      }
      
      public static function seer2023retrun(param1:MovieClip = null) : void
      {
         var icon:MovieClip = param1;
         if(!SeerReturnNewController.IsReturn)
         {
            if(!NewSeerTaskController.isNewSeer)
            {
               SeerReturnNewController.update().then(function(param1:Boolean):void
               {
                  if(param1)
                  {
                     IconController.showIcon("ReturnLogin_Icon");
                  }
                  else
                  {
                     IconController.hideIcon("ReturnLogin_Icon");
                  }
               });
            }
            else
            {
               IconController.hideIcon("ReturnLogin_Icon");
            }
         }
         else
         {
            IconController.showIcon("ReturnLogin_Icon");
         }
      }
   }
}
