package com.robot.app2.mapProcess.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class RescueFireLandController
   {
      
      private static var _map:BaseMapProcess;
      
      public static const POWER_COMPLETE:String = "power_complete";
      
      private static var _fightCount:uint;
      
      private static const AC:ActivityControl = new ActivityControl([new CronTimeVo("*","*","21-27","8","*","2015")]);
       
      
      public function RescueFireLandController()
      {
         super();
      }
      
      private static function get isActive() : Boolean
      {
         return AC.isInActivityTime;
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         SocketConnection.send(1022,86063216);
         _map = map;
         if(!isActive)
         {
            DisplayUtil.removeForParent(taskMc);
            return;
         }
         CommonUI.addYellowArrow(_map.topLevel,298,172,30);
         EventManager.addEventListener(RescueFireLandController.POWER_COMPLETE,onComplete);
         if(taskDone)
         {
            taskMc.gotoAndStop(3);
         }
         else
         {
            taskMc.stop();
         }
         MapListenerManager.add(taskMc,function(param1:MouseEvent):void
         {
            var e:MouseEvent = param1;
            if(taskMc.currentFrame == 1)
            {
               SocketConnection.send(1022,86063217);
               NpcDialog.show(NPC.SIKE,["救救我！救救我！"],["啊？这不是谜域之门的斯科瑞吗？"],[function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["发生了什么事？你为什么看起来如此虚弱的样子？这里发生了什么！ "],["是海盗！"],[function():void
                  {
                     NpcDialog.show(NPC.SIKE,["海盗依靠着人多势众，疯狂的掠夺这里的火焰元素！我受朋友的委托来保护这里的火焰元素，可是……"],["可恶！"],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMc,2,"mc",function():void
                        {
                           NpcDialog.show(NPC.SIKE,["不要见面就打架！会给小朋友留下不好的印象的！"],["哼！ 谁让你们做坏事！"],[function():void
                           {
                              NpcDialog.show(NPC.SIKE,["求求你们！快帮我夺回火焰元素！火焰皇地需要元素的能量维持！"],["慢着！"],[function():void
                              {
                                 NpcDialog.show(NPC.ZOG,["我告诉你们，我们不是每个海盗身上都有火焰元素！你看清楚，不要打错人！"],["哎呀妈呀！快跑啊！"],[function():void
                                 {
                                    taskDone = true;
                                    FightManager.fightWithBoss("塔奇拉顿");
                                 }]);
                              }]);
                           }]);
                        });
                     }]);
                  }]);
               }]);
            }
            else if(taskMc.currentFrame == 3 && e.target.name == "sikerui")
            {
               ModuleManager.showModule(ClientConfig.getAppModule("RescueFireLandPanel"));
            }
            else if(taskMc.currentFrame == 3 && e.target.name.split("_")[0] == "haidao")
            {
               SocketConnection.send(1022,86063218);
               FightManager.fightWithBoss("塔奇拉顿");
            }
         });
         taskMc.mouseChildren = true;
         SocketConnection.sendWithCallback(CommandID.LOGIN_CHECK_GET_STATUS,function(param1:SocketEvent):void
         {
            _fightCount = (param1.data as ByteArray).readUnsignedInt();
         },3010);
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var e:PetFightEvent = param1;
         MainManager.isFighting = false;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         info = e.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            BonusController.showDelayBonus(22);
            if(_fightCount == 1)
            {
               NpcDialog.show(NPC.SIKE,["看来你的实力还是不错的！你就做我的主人吧！"],["呦呵，太棒啦！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMc,5,"mc",function():void
                  {
                     NpcDialog.show(NPC.SHENGYIZHILING,["进入第六星系，需要寻找到5位至纯至真的精灵相伴！你愿意与我们一同前往吗？"],["第六星系？一同前往！"],[function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["我愿意我愿意！虽然我不是精灵，但是我也是至纯至真的！我可以我可以的！"],["可是我都不知道自己有没有这个实力！"],[function():void
                        {
                           NpcDialog.show(NPC.SHENGYIZHILING,["我们再来看看你的实力！时空漩涡！"],["这是……"],[function():void
                           {
                              NpcDialog.show(NPC.SHENGYIZHILING,["你是否愿意同我们一起回到过去？我会送你丰厚的奖励以及卡维斯的专属刻印！"],["我愿意，会有丰厚奖励的！","我不愿意，我不在乎！"],[function():void
                              {
                                 AnimateManager.playMcAnimate(taskMc,6,"mc",function():void
                                 {
                                    taskMc.gotoAndStop(3);
                                 });
                              },function():void
                              {
                                 taskMc.gotoAndStop(3);
                                 ModuleManager.showModule(ClientConfig.getAppModule("NewYearPetFestivalPanel"));
                              }]);
                           }]);
                        }]);
                     }]);
                  });
               }]);
            }
            else
            {
               NpcDialog.show(NPC.SIKE,["看来你的实力还是不错的！你就做我的主人吧！"],["呦呵，太棒啦！"],[function():void
               {
                  NpcDialog.show(NPC.SHENGYIZHILING,["你是否愿意同我们一起回到过去？我会送你丰厚的奖励的！"],["我愿意，会有丰厚奖励的！","我不愿意，我不在乎！"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMc,6,"mc",function():void
                     {
                        taskMc.gotoAndStop(3);
                     });
                  },function():void
                  {
                     taskMc.gotoAndStop(3);
                     ModuleManager.showModule(ClientConfig.getAppModule("NewYearPetFestivalPanel"));
                  }]);
               }]);
            }
         }
         else
         {
            NpcDialog.show(NPC.SIKE,["就这点实力，凭什么想要做我的主人！我不喜欢说大话的主人！"],["这是意外！"],[function():void
            {
               taskMc.gotoAndStop(3);
            }]);
         }
      }
      
      private static function onComplete(param1:Event) : void
      {
         var e:Event = param1;
         AnimateManager.playMcAnimate(taskMc,4,"mc",function():void
         {
            NpcDialog.show(NPC.SIKE,["谢谢你们！我现在感觉全身又恢复了能量！你们真是勇敢的赛尔啊！"],["客气啦！"],[function():void
            {
               NpcDialog.show(NPC.KALULU,["你好可爱啊！跟我们一起维护宇宙和平吧！"],["想成为我的主人？"],[function():void
               {
                  NpcDialog.show(NPC.SIKE,["我可不会随便就认主人！我的主人必须有强大的实力！让我看看你有没有实力成为我的主人！"],["尽管来吧！"],[function():void
                  {
                     FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
                     MainManager.isFighting = true;
                     BonusController.addDelay(22);
                     FightManager.fightWithBoss("斯科瑞",1);
                  }]);
               }]);
            }]);
         });
      }
      
      public static function get taskDone() : Boolean
      {
         return BufferRecordManager.getMyState(1039);
      }
      
      public static function get taskMc() : MovieClip
      {
         return _map.conLevel["taskMc"];
      }
      
      public static function set taskDone(param1:Boolean) : void
      {
         return BufferRecordManager.setMyState(1039,param1);
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            CommonUI.removeYellowArrow(_map.topLevel);
            DisplayUtil.removeForParent(taskMc);
            _map = null;
         }
         EventManager.removeEventListener(RescueFireLandController.POWER_COMPLETE,onComplete);
      }
   }
}
