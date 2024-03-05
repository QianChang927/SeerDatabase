package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.MapProcess_10299;
   import com.robot.app.panel.PetChoosePanel;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CronTimeVo;
   import com.robot.core.utils.TextFormatUtil;
   import flash.events.TimerEvent;
   import flash.net.SharedObject;
   import flash.utils.ByteArray;
   import flash.utils.Timer;
   import org.taomee.events.SocketEvent;
   
   public class SageluosiActivityController
   {
      
      private static const LOCAL_DATA_NAME:String = "SageluosiActivityControllerLocalData";
      
      private static const PROTOCOL_ID_ANSWER:uint = 41543;
      
      private static const DAILY_ID_CD_TIME:uint = 11552;
      
      private static var _time:uint;
      
      private static var _isWin:Boolean;
      
      private static var _isUpgraded:Boolean;
      
      private static var _activeTime1:CronTimeVo = new CronTimeVo("*","18-19","31","10","*");
      
      private static var _activeTime2:CronTimeVo = new CronTimeVo("*","18-19","1-2","11","*");
      
      public static var sageluosiMsg:String = "试炼的时间是0xff000010月2日全天0xffffff，我会在这里等待着你的到来！";
      
      private static var _timerCd:Timer;
      
      private static var _wrongTime:int;
      
      private static var _map:BaseMapProcess;
       
      
      public function SageluosiActivityController()
      {
         super();
      }
      
      public static function DoSwitchMap() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function():void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
         });
         MapManager.changeMap(10299);
      }
      
      public static function OpenPanel(param1:String) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule(param1));
      }
      
      public static function GetLocalData() : int
      {
         var _loc1_:SharedObject = SharedObject.getLocal(LOCAL_DATA_NAME);
         if(null == _loc1_)
         {
            return 0;
         }
         return _loc1_.data[MainManager.actorID];
      }
      
      public static function WriteLocalData(param1:int) : void
      {
         var _loc2_:SharedObject = SharedObject.getLocal(LOCAL_DATA_NAME);
         if(null == _loc2_)
         {
            _loc2_ = new SharedObject();
         }
         _loc2_.data[MainManager.actorID] = param1;
         _loc2_.flush();
      }
      
      public static function DoFirstLevel() : void
      {
         var _loc1_:MapProcess_10299 = _map as MapProcess_10299;
         if(null == _loc1_)
         {
            return;
         }
         _loc1_.startFirst();
      }
      
      public static function DoFight(param1:int) : void
      {
         var npcId:int = 0;
         var lv:int = param1;
         _time = lv;
         var bossId:int = 0;
         npcId = 0;
         var bossName:String = "";
         if(3 == _time)
         {
            bossId = 2651;
            npcId = 2261;
            bossName = "萨格罗斯";
         }
         else if(4 == _time)
         {
            bossId = 2652;
            npcId = 2235;
            bossName = "影战·萨格罗斯";
         }
         else if(5 == _time)
         {
            bossId = 2653;
            npcId = 2256;
            bossName = "幻天·萨格罗斯";
         }
         else if(8 == _time)
         {
            bossId = 2654;
            npcId = 2261;
            npcId = 2235;
            bossName = "萨格罗斯";
         }
         else if(9 == _time)
         {
            bossId = 2655;
            npcId = 2235;
            bossName = "影战·萨格罗斯";
         }
         else if(10 == _time)
         {
            bossId = 2656;
            npcId = 2256;
            bossName = "幻天·萨格罗斯";
         }
         if(bossId > 0)
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
            {
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
               var _loc3_:FightOverInfo = param1.dataObj as FightOverInfo;
               _isWin = _loc3_.winnerID == MainManager.actorID;
               if(10 == _time)
               {
                  NpcDialog.show(npcId,[(_isWin ? "太棒了，" : "") + MainManager.actorInfo.formatNick + (_isWin ? "，你已经通过了我所有的考验！" + "作为奖励，我将给你一次大量提升学习力的机会" : "，你的表现已经非常让我惊讶。为了帮助你更好的成长，我将给你一次提升精灵学习力的机会。")],["哇！太好了！"],[openStudyPanel]);
               }
               else
               {
                  NpcDialog.show(npcId,[MainManager.actorInfo.formatNick + (_isWin ? "，你的战斗力还算不错。这30点学习力作为我对你这次表现的奖励！不过不要骄傲哦，" + "用更好的表现来面对我下一次的考验吧！" : "，你的精灵水平还有待提高啊。不过不要气馁，送你20点学习力，付出辛苦总会有收获的！")],["谢谢！我一定会加油的！"],[openStudyPanel]);
               }
            });
            FightManager.fightNoMapBoss(bossName,bossId);
         }
      }
      
      public static function RequireQuestion(param1:int, param2:int, param3:int) : void
      {
         var time:int = param1;
         var question:int = param2;
         var ans:int = param3;
         _time = time;
         SocketConnection.sendWithCallback2(PROTOCOL_ID_ANSWER,function(param1:SocketEvent):void
         {
            var e:SocketEvent = param1;
            var by:ByteArray = e.data as ByteArray;
            _isWin = by.readInt() > 0;
            if(_isWin)
            {
               NpcDialog.show(2255,["哈哈哈！" + MainManager.actorInfo.formatNick + "果然见识不凡！这30点学习力作为我对你这次表现的奖励！" + "不过不要骄傲哦，用更好的表现来面对我下一次的考验吧！"],["谢谢！我一定会加油的！"],[openStudyPanel]);
            }
            else
            {
               ++_wrongTime;
               Alarm.show("回答错误啦！下次再仔细想想哦！",function():void
               {
                  if(_wrongTime == 2)
                  {
                     NpcDialog.show(2255,[MainManager.actorInfo.formatNick + "，汝之表现让我甚为失望。送你20点学习力，再好好学习学习，提升知识水平吧！"],["谢谢！我一定会加油的！"],[openStudyPanel]);
                  }
                  else if(_wrongTime == 1)
                  {
                     _timerCd = new Timer(1000);
                     _timerCd.addEventListener(TimerEvent.TIMER,onTimerCd);
                     _timerCd.start();
                  }
               });
            }
         },[_time,question,ans]);
      }
      
      private static function onTimerCd(param1:TimerEvent) : void
      {
         if(_timerCd.currentCount >= 60)
         {
            _timerCd.removeEventListener(TimerEvent.TIMER,onTimerCd);
            _timerCd.stop();
         }
      }
      
      public static function GetCdTime() : int
      {
         if(null == _timerCd)
         {
            return 0;
         }
         return 60 - _timerCd.currentCount;
      }
      
      public static function OpenFinalStudy() : void
      {
         var func:Function = null;
         func = function():void
         {
            MapManager.changeMap(102);
         };
         PetChoosePanel.show(function(param1:PetInfo):void
         {
            var info:PetInfo = param1;
            var obj:Object = {
               "titletype":1,
               "name":PetXMLInfo.getName(info.id),
               "fun":function(param1:int, param2:String):void
               {
                  var id:int = param1;
                  var abilityName:String = param2;
                  SocketConnection.addCmdListener(CommandID.NEW_LEARNING_ABILITY,function():void
                  {
                     SocketConnection.removeCmdListener(CommandID.NEW_LEARNING_ABILITY,arguments.callee);
                     PetManager.upDateBagPetInfo(info.catchTime,function(param1:PetInfo):void
                     {
                        Alarm.show("恭喜你，" + TextFormatUtil.getRedTxt(PetXMLInfo.getName(info.id)) + "的" + abilityName + "由" + TextFormatUtil.getRedTxt(info.evArray[getEvArrayId(id)].toString()) + "提高至了" + TextFormatUtil.getRedTxt(param1.evArray[getEvArrayId(id)].toString()) + "！",func);
                     });
                  });
                  SocketConnection.send(CommandID.NEW_LEARNING_ABILITY,info.catchTime,id,11);
               },
               "petInfo":info,
               "time":11,
               "isWin":true,
               "closeFunc":OpenFinalStudy
            };
            ModuleManager.showModule(ClientConfig.getAppModule("LearningabilityInjectPanel"),"正在加载....",obj);
         },func,null,7);
      }
      
      private static function openStudyPanel() : void
      {
         var func:Function = null;
         func = function():void
         {
            _wrongTime = 0;
            var _loc1_:MapProcess_10299 = _map as MapProcess_10299;
            _loc1_.updateStage();
         };
         PetChoosePanel.show(function(param1:PetInfo):void
         {
            var info:PetInfo = param1;
            var obj:Object = {
               "titletype":1,
               "name":PetXMLInfo.getName(info.id),
               "fun":function(param1:int, param2:String):void
               {
                  var id:int = param1;
                  var abilityName:String = param2;
                  SocketConnection.addCmdListener(CommandID.NEW_LEARNING_ABILITY,function():void
                  {
                     SocketConnection.removeCmdListener(CommandID.NEW_LEARNING_ABILITY,arguments.callee);
                     PetManager.upDateBagPetInfo(info.catchTime,function(param1:PetInfo):void
                     {
                        if(MainManager.actorInfo.superNono)
                        {
                           Alarm.show("恭喜你，你因为VIP的尊贵身份" + TextFormatUtil.getRedTxt("额外获得了" + (10 == _time ? "20" : "10") + "学习力") + "，" + TextFormatUtil.getRedTxt(PetXMLInfo.getName(info.id)) + "的" + abilityName + "学习力由" + TextFormatUtil.getRedTxt(info.evArray[getEvArrayId(id)].toString()) + "提高至了" + TextFormatUtil.getRedTxt(param1.evArray[getEvArrayId(id)].toString()) + "！",func);
                        }
                        else
                        {
                           Alarm.show("恭喜你，" + TextFormatUtil.getRedTxt(PetXMLInfo.getName(info.id)) + "的" + abilityName + "由" + TextFormatUtil.getRedTxt(info.evArray[getEvArrayId(id)].toString()) + "提高至了" + TextFormatUtil.getRedTxt(param1.evArray[getEvArrayId(id)].toString()) + "！",func);
                        }
                     });
                  });
                  SocketConnection.send(CommandID.NEW_LEARNING_ABILITY,info.catchTime,id,_time);
               },
               "petInfo":info,
               "time":_time,
               "isWin":_isWin,
               "closeFunc":openStudyPanel
            };
            ModuleManager.showModule(ClientConfig.getAppModule("LearningabilityInjectPanel"),"正在加载....",obj);
         },func,null,7);
      }
      
      private static function getEvArrayId(param1:int) : int
      {
         var _loc2_:int = 0;
         if(param1 == 0)
         {
            return 5;
         }
         return param1 - 1;
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         _map = param1;
      }
      
      public static function destroy() : void
      {
      }
   }
}
