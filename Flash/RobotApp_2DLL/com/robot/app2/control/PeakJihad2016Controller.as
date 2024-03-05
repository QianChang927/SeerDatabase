package com.robot.app2.control
{
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PeakJihadLevelRulesXMLInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.CronTimeVo;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class PeakJihad2016Controller
   {
      
      public static var curMonthStarLvId:int = 0;
      
      public static var curMonthStreakWinningId:int = 0;
      
      public static var curMonthMaxPointsId:int = 0;
      
      public static var curJJMonthStarLvId:int = 0;
      
      public static var curJJMonthStreakWinningId:int = 0;
      
      public static var curJJMonthMaxPointsId:int = 0;
      
      private static var ac1:ActivityControl;
      
      private static var _openTime:String = "11:00-15:00、18:00-22:00";
      
      private static var cron1:Array = [new CronTimeVo("*","11-14","*","*","*","*"),new CronTimeVo("*","18-21","*","*","*","*")];
      
      private static var acTest:ActivityControl;
      
      private static var _openTimeTest:String = "15:00-18:00";
      
      private static var cronTest:Array = [new CronTimeVo("*","15-17","*","*","*","*")];
      
      public static var curQishu:int;
      
      private static var _map:BaseMapProcess;
      
      private static var initValueArr:Array = [[0,0,0,0,0,0],[104146,104166,104186,104206,104226,101574],[101860,101880,101900,101920,101940,101960],[120800,120820,120840,120860,120880,120900],[123200,123220,123240,123260,123280,123300]];
      
      private static var index:int;
      
      public static const MONEYID:int = 1717451;
      
      public static const MONEYID2:int = 1717452;
      
      public static var settlementTime:Number;
      
      public static var banPetId:int;
      
      public static var banPetId2:int;
      
      public static var banPetId3:int;
      
      public static var _startTime:int;
      
      private static var appNameArr:Array = ["PeakJihad2023MainPanel","PeakJihadBanPickListPanel","PeakJihadBanPickVoteListPanel","PeakJihadRulesSummaryIntroduction2016RevisionPanel","","","PeakJihadRewardChange2016RevisionPanel","PeakJihadBanPetShowPanel",""];
      
      private static var isSendVote:Boolean = false;
       
      
      public function PeakJihad2016Controller()
      {
         super();
      }
      
      public static function setup(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(PeakJihadLevelRulesXMLInfo.configXml == null)
         {
            PeakJihadLevelRulesXMLInfo.setup();
         }
         SocketConnection.addCmdListener(45138,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(45138,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            _loc3_.position = 0;
            var _loc4_:int = int(_loc3_.readUnsignedInt());
            curQishu = _loc4_;
            index = int(_loc4_ / 20);
            curMonthStarLvId = initValueArr[index][0] + _loc4_ % 20;
            curMonthStreakWinningId = initValueArr[index][1] + _loc4_ % 20;
            curMonthMaxPointsId = initValueArr[index][2] + _loc4_ % 20;
            curJJMonthStarLvId = initValueArr[index][3] + _loc4_ % 20;
            curJJMonthStreakWinningId = initValueArr[index][4] + _loc4_ % 20;
            curJJMonthMaxPointsId = initValueArr[index][5] + _loc4_ % 20;
            PeakJihadController.initData();
            getStartTime();
         });
         SocketConnection.send(45138,0);
         _map.conLevel.addEventListener(MouseEvent.CLICK,onClick);
         SocketConnection.addCmdListener(42376,function(param1:SocketEvent):void
         {
            var b:ByteArray;
            var time:int;
            var e:SocketEvent = param1;
            SocketConnection.removeCmdListener(42376,arguments.callee);
            b = e.data as ByteArray;
            b.position = 0;
            time = int(b.readUnsignedInt());
            settlementTime = SystemTimerManager.get0DateByStr(String(time)).time / 1000;
            SocketConnection.addCmdListener(45804,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(45804,arguments.callee);
               var _loc3_:ByteArray = param1.data as ByteArray;
               _loc3_.position = 0;
               banPetId = _loc3_.readUnsignedInt();
               banPetId2 = _loc3_.readUnsignedInt();
               banPetId3 = _loc3_.readUnsignedInt();
            });
            SocketConnection.send(45804);
         });
         SocketConnection.send(42376,3,0);
         openMsg();
      }
      
      private static function openMsg() : void
      {
         if(ActivityTimeControl.getIsinTime(295))
         {
            if(!BufferRecordManager.getMyState(1526))
            {
               BufferRecordManager.setMyState(1526,true,function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("PeakJihadRewardWeekPanel"),"正在打开....");
               });
            }
         }
      }
      
      private static function getStartTime() : void
      {
         SocketConnection.sendWithCallback(45138,function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _startTime = _loc2_.readUnsignedInt();
            var _loc3_:int = getNumWeeKly();
            var _loc4_:int = 0;
         },2);
      }
      
      public static function getcurMonthStarLvId(param1:Function) : void
      {
         var fun:Function = param1;
         SocketConnection.addCmdListener(45138,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(45138,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            _loc3_.position = 0;
            var _loc4_:int = int(_loc3_.readUnsignedInt());
            curQishu = _loc4_;
            index = int(_loc4_ / 20);
            curMonthStarLvId = initValueArr[0] + _loc4_ - index;
            curMonthStreakWinningId = initValueArr[1] + _loc4_ - index;
            curMonthMaxPointsId = initValueArr[2] + _loc4_ - index;
            curJJMonthStarLvId = initValueArr[3] + _loc4_ - index;
            curJJMonthStreakWinningId = initValueArr[4] + _loc4_ - index;
            curJJMonthMaxPointsId = initValueArr[5] + _loc4_ - index;
            if(null != fun)
            {
               fun();
            }
         });
         SocketConnection.send(45138,0);
      }
      
      protected static function onClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var event:MouseEvent = param1;
         index = int(event.target.name.split("_")[1]);
         switch(event.target.name)
         {
            case "gotoBtn_" + index:
               getIsTimeOutNum(function():void
               {
                  if(index == 0)
                  {
                     ModuleManager.showAppModule(appNameArr[index]);
                  }
               });
         }
      }
      
      public static function destroy() : void
      {
      }
      
      public static function onLeiNuoClick() : void
      {
         NpcDialog.show(NPC.LEINUO_GENERAL,["巅峰圣战—超级英雄杯盛大开启！"],["我想了新天梯规则。","我想了解月度联赛战规则。","祝福属性及主场精灵有什么用？","再见！"],[function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("PeakJihadRulesSummaryIntroduction2016RevisionPanel"),"正在打开....");
         },function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("PeakJihadMonthlyPresentationLeague2016RevisionPanel"),"正在打开....");
         },function():void
         {
            NpcDialog.show(NPC.LEINUO_GENERAL,["祝福属性和主场精灵每天都会更换，祝福属性能使某系技能的威力额外提升；而主场精灵在巅峰圣战中出战时的HP会额外提升！"],["我明白了"]);
         },function():void
         {
         }],false);
      }
      
      public static function onHughClick() : void
      {
         NpcDialog.show(NPC.HUGH,["巅峰圣战—超级英雄杯盛大开启！我每天都会发布任务及更新排行榜！记得每天来找我领取奖励哦！"],["我要领取每日任务。","我要查看排行榜。","再见！"],[function():void
         {
            StatManager.sendStat2014("巅峰圣战超级英雄杯0710","打开每日任务UI",StatManager.RUN_ACT_2015);
            ModuleManager.showModule(ClientConfig.getAppModule("PeakJihadDailyTasks2016RevisionPanel"),"正在打开....");
         },function():void
         {
            StatManager.sendStat2014("巅峰圣战超级英雄杯0710","打开排行榜UI",StatManager.RUN_ACT_2015);
            ModuleManager.showModule(ClientConfig.getAppModule("PeakJihadLadderRankings2016RevisionPanel"),"正在打开....");
         },function():void
         {
         }],false);
      }
      
      public static function onLongClick() : void
      {
         NpcDialog.show(NPC.TWOBLONG,["巅峰圣战—超级英雄杯盛大开启，你可以在我这里兑换强大的奖品！"],["我要兑换奖励。","我要进行刻印合成。","再见！"],[function():void
         {
            StatManager.sendStat2014("巅峰圣战超级英雄杯0710","打开奖励兑换UI",StatManager.RUN_ACT_2015);
            ModuleManager.showModule(ClientConfig.getAppModule("PeakJihadRewardChange2016RevisionPanel"),"正在打开....");
         },function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("CountermarkSythesizePanel"),"正在打开....");
         },function():void
         {
         },function():void
         {
         }],false);
      }
      
      public static function onNedClick() : void
      {
         NpcDialog.show(5000,["巅峰圣战任务现已全面改版，更简单的任务、更丰厚的奖励！"],["查看每日任务","查看每周任务","再见！"],[function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("PeakJihadDailyTasks2016RevisionPanel"),"正在打开....");
         },function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("PeakJihadWeeklyTasks2017RevisionPanel"),"正在打开....");
         },function():void
         {
         }],false,null,true);
      }
      
      public static function on3v3Click() : void
      {
         getIsTimeOutNum(function():void
         {
            initScore(function():void
            {
               ModuleManager.hideAllModule();
               ModuleManager.showModule(ClientConfig.getAppModule("PeakJihad3v3Entrance2016RevisionPanel"),"正在打开....");
            });
         });
      }
      
      public static function on6v6Click() : void
      {
         getIsTimeOutNum(function():void
         {
            if(isInAcTime())
            {
               initScore(function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("PeakJihadSelectTheModePanel"),"正在打开....");
               });
            }
         });
      }
      
      public static function onRewardExchangeClick() : void
      {
         getIsTimeOutNum(function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("PeakJihadRewardChange2016RevisionPanel"),"正在打开....");
         });
      }
      
      public static function isInAcTime(param1:Boolean = true) : Boolean
      {
         if(MainManager.serverID == 2501)
         {
            if(acTest == null)
            {
               acTest = new ActivityControl(cronTest);
            }
            if(acTest.isInActivityTime)
            {
               return true;
            }
            if(param1)
            {
               Alarm2.show("6v6巅峰战的开放时间" + _openTimeTest + ",请稍后再来。");
            }
            return false;
         }
         if(ac1 == null)
         {
            ac1 = new ActivityControl(cron1);
         }
         var _loc2_:Date = SystemTimerManager.sysBJDate;
         if(ac1.isInActivityTime)
         {
            return true;
         }
         if(param1)
         {
            Alarm2.show("6v6巅峰战的开放时间" + _openTime + ",请稍后再来。");
         }
         return false;
      }
      
      public static function initScore(param1:Function) : void
      {
         var fun:Function = param1;
         KTool.getBitSet([12933],function(param1:Array):void
         {
            var va:Array = param1;
            if(va[0] > 0)
            {
               if(fun != null)
               {
                  fun();
               }
            }
            else
            {
               SocketConnection.addCmdListener(4548,function(param1:SocketEvent):void
               {
                  SocketConnection.removeCmdListener(4548,arguments.callee);
                  if(fun != null)
                  {
                     fun();
                  }
               });
               SocketConnection.send(4548,1273,1);
            }
         });
      }
      
      public static function getIsTimeOutNum(param1:Function = null) : void
      {
         var fun:Function = param1;
         ;
         KTool.getMultiValue([15445,6912],function(param1:Array):void
         {
            var _loc2_:Date = null;
            var _loc3_:* = null;
            if(param1[0] >= 5)
            {
               Alarm2.show("由于系统检测到你今天在巅峰圣战中出现了多次异常情况，4天内（含当天）你被禁止参加巅峰圣战！");
            }
            else if(SystemTimerManager.time - param1[1] < 4 * 24 * 60 * 60)
            {
               _loc2_ = new Date(param1[1] * 1000);
               _loc3_ = _loc2_.fullYear + "年" + String(_loc2_.month + 1) + "月" + _loc2_.date + "日";
               Alarm2.show("由于系统检测到你" + _loc3_ + "在巅峰圣战中出现了多次异常情况，4天内（含当天）你被禁止参加巅峰圣战！");
            }
            else if(fun != null)
            {
               fun();
            }
         });
      }
      
      public static function setTimeOutAlarm(param1:Function = null) : void
      {
         var fun:Function = param1;
         ;
         KTool.getMultiValue([15445],function(param1:Array):void
         {
            if(param1[0] >= 3 && param1[0] <= 4)
            {
               if(fun != null)
               {
                  fun(false);
               }
               Alarm2.show("你今天在巅峰圣战中出现了多次异常情况，请不要使用第三方程序进行游戏！若系统再次检测到此类行为，你将被禁止参加巅峰圣战！");
            }
            else if(param1[0] >= 5)
            {
               if(fun != null)
               {
                  fun(true);
               }
               Alarm2.show("由于系统检测到你今天在巅峰圣战中出现了多次异常情况，4天内（含当天）你被禁止参加巅峰圣战！");
            }
            else if(fun != null)
            {
               fun(false);
            }
         });
      }
      
      public static function getNumWeeKly() : int
      {
         var _loc1_:Date = SystemTimerManager.get0DateByStr(String(_startTime));
         var _loc2_:int = SystemTimerManager.time - int(_loc1_.time / 1000);
         var _loc3_:int = int(_loc2_ / (3600 * 24));
         return int(_loc3_ / 7) > 4 ? 4 : int(_loc3_ / 7);
      }
      
      public static function setVerification(param1:Function = null) : void
      {
         var fun:Function = param1;
         KTool.getMultiValue([18696,18698],function(param1:Array):void
         {
            var _loc2_:int = 0;
            if(SystemTimerManager.time <= param1[1])
            {
               _loc2_ = 2;
            }
            else if(param1[0] > 0)
            {
               _loc2_ = 1;
            }
            if(fun != null)
            {
               fun(_loc2_);
            }
         });
      }
      
      public static function vote(param1:int, param2:Function = null, param3:Function = null) : void
      {
         var petId:int = param1;
         var apply:Function = param2;
         var reject:Function = param3;
         KTool.getMultiValue([20261],function(param1:Array):void
         {
            var _curPeakTime:int = 0;
            var va:Array = param1;
            _curPeakTime = int(va[0]);
            Alert.show("每人只有一次投票机会，确定投票？",function():void
            {
               if(_curPeakTime < 3)
               {
                  Alarm2.show("至少完成3局竞技模式对战，才能参与本周的投票哦。");
                  return;
               }
               if(!isSendVote)
               {
                  isSendVote = true;
                  SocketConnection.sendByQueue(42376,[1,petId],function(param1:*):void
                  {
                     isSendVote = false;
                     if(apply != null)
                     {
                        apply();
                     }
                  },function(param1:*):void
                  {
                     isSendVote = false;
                     if(reject != null)
                     {
                        reject();
                     }
                  });
               }
            });
         });
      }
      
      public static function checkCanVote() : Boolean
      {
         return ActivityTimeControl.getIsinTime(95);
      }
   }
}
