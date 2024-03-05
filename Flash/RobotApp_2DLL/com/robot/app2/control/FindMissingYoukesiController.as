package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class FindMissingYoukesiController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _nisikeRegion:uint = 6;
      
      private static var _youkesiRegion:uint = 1;
      
      private static var _youkesiRegionReward:uint = 2;
      
      private static var _dayNumInMap87:uint = 0;
      
      private static const DAY_NUM_MAP87_ID:uint = 665;
      
      private static var fistFightWithYoukesi80Bool:Boolean;
       
      
      public function FindMissingYoukesiController()
      {
         super();
      }
      
      public static function initTaskForMap87(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         SocketConnection.sendWithCallback(CommandID.FUCK_SHINEHOO_TIMES,function(param1:SocketEvent):void
         {
            KTool.showMapAllPlayerAndMonster();
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            if(_loc3_ == 0 || _loc3_ == 1)
            {
               _dayNumInMap87 = 1;
            }
            else
            {
               _dayNumInMap87 = _loc3_;
            }
            if(_dayNumInMap87 > 3)
            {
               _dayNumInMap87 = 3;
            }
            map87TaskMc.addEventListener(MouseEvent.CLICK,onClickMap87TaskMcHandler);
            if(BufferRecordManager.getMyState(751))
            {
               DisplayUtil.removeForParent(map87TaskMc);
            }
            else if(!BufferRecordManager.getMyState(750))
            {
               map87TaskMc.gotoAndStop(1);
            }
            else
            {
               map87TaskMc.gotoAndStop(4);
               KTool.showMapAllPlayerAndMonster();
            }
         },DAY_NUM_MAP87_ID);
      }
      
      public static function initTaskForMap88(param1:BaseMapProcess) : void
      {
         _map = param1;
         map88TaskMc.addEventListener(MouseEvent.CLICK,onClickMap88TaskMcHandler);
         if(!BufferRecordManager.getMyState(751))
         {
            DisplayUtil.removeForParent(map88TaskMc);
         }
         else if(BufferRecordManager.getMyState(752))
         {
            KTool.hideMapAllPlayerAndMonster();
            map88TaskMc.gotoAndStop(1);
         }
         else
         {
            map88TaskMc.gotoAndStop(3);
         }
      }
      
      private static function onFightYoukesi80LevelOver(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightYoukesi80LevelOver);
         SocketConnection.mainSocket.removeErrorListener(20174,removeErrorHandler);
         info = e.dataObj as FightOverInfo;
         if(info.reason == 0 && info.winnerID == MainManager.actorID)
         {
            fistFightWithYoukesi80Bool = true;
         }
         else
         {
            fistFightWithYoukesi80Bool = false;
         }
         AnimateManager.playMcAnimate(map88TaskMc,4,"mc4",function():void
         {
            NpcDialog.show(NPC.SEER,["哇！你们兄弟打跑了艾辛格啊！尤克斯，你还是挺不错的嘛！不如加入我们赛尔号啊！"],["谁稀罕什么赛尔号！"],[function():void
            {
               NpcDialog.show(NPC.SEER,["你……你竟然！太过分了！我要消消你自大的气焰！"],["那就来吧！"],[function():void
               {
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightYoukesi80LevelGetReward);
                  FightManager.fightWithBoss("尤克斯",_youkesiRegionReward);
               }]);
            }]);
         });
      }
      
      private static function onClickMap88TaskMcHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         switch(evt.target.name)
         {
            case "mc_1_kabeiji":
               NpcDialog.show(NPC.KABEIJI,["艾辛格！你的阴谋已经被识破了！我要击败你！投降吧！"],["就凭你？"],[function():void
               {
                  NpcDialog.show(NPC.KABEIJI,["哈哈哈！别不自量力了！尤克斯，证明你实力的时刻到了！"],["你！"],[function():void
                  {
                     NpcDialog.show(NPC.KABEIJI,["还要我提醒吗？逆界之门里可有你最亲近的人！"],["好！别说了！"],[function():void
                     {
                        AnimateManager.playMcAnimate(map88TaskMc,2,"mc2",function():void
                        {
                           BufferRecordManager.setMyState(752,true);
                           KTool.showMapAllPlayerAndMonster();
                           map88TaskMc.gotoAndStop(3);
                        });
                     }]);
                  }]);
               }]);
               break;
            case "mc_3_youkesi":
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightYoukesi80LevelOver);
               SocketConnection.mainSocket.addErrorListener(20174,removeErrorHandler);
               FightManager.fightWithBoss("尤克斯",_youkesiRegion);
         }
      }
      
      private static function removeErrorHandler(param1:*) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightYoukesi80LevelOver);
         SocketConnection.mainSocket.removeErrorListener(20174,removeErrorHandler);
      }
      
      private static function onFightYoukesi80LevelGetReward(param1:PetFightEvent) : void
      {
         var info:FightOverInfo = null;
         var e:PetFightEvent = param1;
         info = e.dataObj as FightOverInfo;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightYoukesi80LevelGetReward);
         NpcDialog.show(NPC.UKESI,["看来你们赛尔先锋队果然实力不俗啊！ 多谢你救了我弟弟！感激不尽！可是，埃利翁出现了！"],["不要怕！有我们赛尔保护你们！"],[function():void
         {
            SocketConnection.sendWithCallback(9595,function(param1:SocketEvent):void
            {
               var evt2:SocketEvent = param1;
               if(info.reason == 0)
               {
                  if(info.winnerID == MainManager.actorID && fistFightWithYoukesi80Bool)
                  {
                     ItemInBagAlert.show(1,"1000" + TextFormatUtil.getRedTxt("赛尔豆") + "已经放入了您的储存箱！",function():void
                     {
                     });
                  }
                  else if(fistFightWithYoukesi80Bool)
                  {
                     ItemInBagAlert.show(1,"500" + TextFormatUtil.getRedTxt("赛尔豆") + "已经放入了您的储存箱！",function():void
                     {
                     });
                  }
               }
               MapManager.changeMap(936);
            });
         }]);
      }
      
      private static function onClickMap87TaskMcHandler(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "mc_1_kabeiji":
               beginPreTask();
               break;
            case "mc_4_kabeiji":
               ModuleManager.showModule(ClientConfig.getAppModule("FindMissingYoukesiExchangePanel"),"正在打开");
               break;
            case "mc_4_nisike_1":
               SocketConnection.send(1022,86060800);
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightNisike60LevelOver);
               FightManager.fightWithBoss("尼斯克",_nisikeRegion);
         }
      }
      
      public static function winHandler() : void
      {
         switch(_dayNumInMap87)
         {
            case 0:
            case 1:
               NpcDialog.show(NPC.KABEIJI,["感谢你的帮忙，我感觉体内的暗黑能量释放了很多！你先去恢复精灵的体力吧！明天再继续帮我消去暗黑能量！拜托啦！ "],["你一定要早点复原！"],[function():void
               {
                  SocketConnection.sendWithCallback(9594,function(param1:SocketEvent):void
                  {
                     var evt2:SocketEvent = param1;
                     ItemInBagAlert.show(1,"1000" + TextFormatUtil.getRedTxt("赛尔豆") + "已经放入了您的储存箱！",function():void
                     {
                     });
                     Alarm.show("记得明天再来帮卡贝基消除暗黑能量！");
                  });
               }]);
               break;
            case 2:
               NpcDialog.show(NPC.KABEIJI,["感谢你的帮忙，我感觉体内的暗黑能量已经释放了很多！你先去恢复精灵的体力吧！明天最后一天，一切都会真相大白！ "],["你一定要早点复原！"],[function():void
               {
                  SocketConnection.sendWithCallback(9594,function(param1:SocketEvent):void
                  {
                     var evt2:SocketEvent = param1;
                     ItemInBagAlert.show(1,"1000" + TextFormatUtil.getRedTxt("赛尔豆") + "已经放入了您的储存箱！",function():void
                     {
                     });
                     Alarm.show("记得明天再来帮卡贝基消除暗黑能量！");
                  });
               }]);
               break;
            case 3:
               NpcDialog.show(NPC.KABEIJI,["感谢你的帮忙，我感觉体内的暗黑能量已经全部释放啦！我们快去上古广场，一切都会真相大白！  "],["嗯！看艾辛格还有什么花样！"],[function():void
               {
                  BufferRecordManager.setMyState(751,true);
                  SocketConnection.sendWithCallback(9594,function(param1:SocketEvent):void
                  {
                     var evt2:SocketEvent = param1;
                     ItemInBagAlert.show(1,"1000" + TextFormatUtil.getRedTxt("赛尔豆") + "已经放入了您的储存箱！",function():void
                     {
                        MapManager.changeMap(88);
                     });
                  });
               }]);
         }
      }
      
      private static function handlerA(param1:int) : void
      {
         var reasion:int = param1;
         SocketConnection.sendWithCallback(9594,function(param1:SocketEvent):void
         {
            var evt2:SocketEvent = param1;
            if(reasion == 0)
            {
               ItemInBagAlert.show(1,"500" + TextFormatUtil.getRedTxt("赛尔豆") + "已经放入了您的储存箱！",function():void
               {
                  MapManager.changeMap(88);
               });
            }
            else
            {
               MapManager.changeMap(88);
            }
         });
      }
      
      public static function failedHandler(param1:int, param2:int) : void
      {
         var num:int = param1;
         var reasion:int = param2;
         if(_dayNumInMap87 >= 3 && num >= 10)
         {
            NpcDialog.show(NPC.KABEIJI,["感谢你的帮忙，我感觉体内的暗黑能量已经全部释放啦！我们快去上古广场，一切都会真相大白！  "],["嗯！看艾辛格还有什么花样！"],[function():void
            {
               BufferRecordManager.setMyState(751,true);
               handlerA(reasion);
            }]);
         }
         else
         {
            NpcDialog.show(NPC.KABEIJI,[MainManager.actorInfo.nick + "我感觉体内的暗黑能量在源源不断的扩大！快去获得苍穹光魄，稀释我体内的暗黑能量！拜托啦！ "],["我这就去！"],[function():void
            {
               SocketConnection.sendWithCallback(9594,function(param1:SocketEvent):void
               {
                  var evt2:SocketEvent = param1;
                  if(reasion == 0)
                  {
                     ItemInBagAlert.show(1,"500" + TextFormatUtil.getRedTxt("赛尔豆") + "已经放入了您的储存箱！",function():void
                     {
                     });
                  }
               });
            }]);
         }
      }
      
      private static function beginPreTask() : void
      {
         SocketConnection.send(1022,86060799);
         KTool.hideMapAllPlayerAndMonster();
         SocketConnection.send(1022,86056817);
         NpcDialog.show(NPC.KABEIJI,["艾利逊，快说！为什么我体内的暗黑能量在聚集放大！光魄结晶为什么失效了？"],["是……是艾辛格吩咐的！"],[function():void
         {
            NpcDialog.show(NPC.ALLISON,["我什么都不知道，我们就是比特大人派来……派来旅游的！你……你去问艾辛格吧。一切都是他设计的圈套！"],["现在告诉你们也没关系！"],[function():void
            {
               AnimateManager.playMcAnimate(map87TaskMc,2,"mc2",function():void
               {
                  NpcDialog.show(NPC.KABEIJI,["哥哥，你为什么要陷害我！艾辛格是坏人啊！"],["我不想解释那么多！"],[function():void
                  {
                     NpcDialog.show(NPC.UKESI,[MainManager.actorInfo.nick + "，勇敢的赛尔，希望你能够帮助卡贝基！连续挑战他三天，就能够不断消耗他体内的暗黑能量。最终完全释放出暗黑能量！"],["哥哥！"],[function():void
                     {
                        NpcDialog.show(NPC.UKESI,["记住，海盗身上的苍穹光魄能够稀释卡贝基体内的暗黑能量！三日之后来上古广场！一切都会明白！ "],["什么？尤克斯竟然？"],[function():void
                        {
                           NpcDialog.show(NPC.ALLISON,["什么苍穹光魄啊，我身上没有苍穹光魄！你这个叛徒，我一定不会放过你！"],["那就来吧！"],[function():void
                           {
                              AnimateManager.playMcAnimate(map87TaskMc,3,"mc3",function():void
                              {
                                 FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightNisike60LevelOver);
                                 FightManager.fightWithBoss("尼斯克",_nisikeRegion);
                              });
                           }]);
                        }]);
                     }]);
                  }]);
               });
            }]);
         }]);
      }
      
      private static function onFightNisike60LevelOver(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightNisike60LevelOver);
         BufferRecordManager.setMyState(750,true);
         KTool.showMapAllPlayerAndMonster();
         map87TaskMc.gotoAndStop(4);
      }
      
      private static function get map87TaskMc() : MovieClip
      {
         return _map.conLevel["map87TaskMc"];
      }
      
      private static function get map88TaskMc() : MovieClip
      {
         return _map.conLevel["map88TaskMc"];
      }
      
      public static function destroy() : void
      {
         if(MapManager.currentMap.id == 87)
         {
            map87TaskMc.removeEventListener(MouseEvent.CLICK,onClickMap87TaskMcHandler);
         }
         if(MapManager.currentMap.id == 88)
         {
            map88TaskMc.removeEventListener(MouseEvent.CLICK,onClickMap88TaskMcHandler);
         }
         _map = null;
      }
   }
}
