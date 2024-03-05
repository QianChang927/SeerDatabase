package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   
   public class WitherController
   {
      
      private static var activeMap:BaseMapProcess;
      
      private static var activeMc:MovieClip;
      
      private static var panelBtn:SimpleButton;
      
      private static var bosslBtn:SimpleButton;
      
      public static var isFightBoss:Boolean;
       
      
      public function WitherController()
      {
         super();
      }
      
      public static function initMap78(param1:BaseMapProcess) : void
      {
         activeMap = param1;
         activeMc = activeMap.conLevel["acMc"];
         panelBtn = activeMap.conLevel["panelBtn"];
         bosslBtn = activeMap.conLevel["bosslBtn"];
         if(BufferRecordManager.getMyState(798))
         {
            activeMc.gotoAndStop(4);
            bosslBtn.addEventListener(MouseEvent.CLICK,onFight);
            panelBtn.addEventListener(MouseEvent.CLICK,onPanel);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
            SocketConnection.addCmdListener(CommandID.WITHER_GETGIFT,onGetGift);
         }
         else
         {
            activeMc.gotoAndStop(1);
            activeMc.addEventListener(MouseEvent.CLICK,onBefore);
         }
      }
      
      private static function onGetGift(param1:SocketEvent) : void
      {
         Alarm.show("2000赛尔豆已经放入你的背包");
         MainManager.actorInfo.coins += 2000;
         activeMc.gotoAndStop(4);
         ModuleManager.showModule(ClientConfig.getAppModule("NewYearPetFestivalPanel"));
      }
      
      private static function onFightFinish(param1:PetFightEvent) : void
      {
         var info:FightOverInfo = null;
         var e:PetFightEvent = param1;
         if(isFightBoss)
         {
            isFightBoss = false;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
            info = e.dataObj as FightOverInfo;
            if(info.winnerID != MainManager.actorID)
            {
               NpcDialog.show(NPC.LUOTISI,["哼！原来你们就是来抢能源的！你们和海盗是一伙的！我是不会允许你们带走这里一点能源的！"],["你误会了！你误会了！"]);
            }
            else
            {
               AnimateManager.playMcAnimate(activeMc,5,"mc5",function():void
               {
                  NpcDialog.show(NPC.LUOTISI,["谢谢你们帮我打走海盗！你们赛尔先锋队真是有勇有谋啊！"],["过奖啦过奖啦！"],[function():void
                  {
                     NpcDialog.show(NPC.ATIEDA,["我们赛尔永远都是路见不平拔刀相助的！以后有什么困难尽管说！"],["嗯。谢谢你们！"],[function():void
                     {
                        NpcDialog.show(NPC.LUOTISI,["我答应过你们会送给你们能源，这是水之精华。希望能够帮助到你们！"],["真是太好啦！"],[function():void
                        {
                           SocketConnection.send(CommandID.WITHER_GETGIFT);
                        }]);
                     }]);
                  }]);
               });
            }
         }
      }
      
      private static function onPanel(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("adown/WitherPanel"));
      }
      
      private static function onBefore(param1:MouseEvent) : void
      {
         taskBefore();
      }
      
      private static function onFight(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86062105);
         FightManager.fightWithBoss("奇拉顿",1);
      }
      
      private static function taskBefore() : void
      {
         SocketConnection.send(1022,86062104);
         MainManager.selfVisible = false;
         ToolBarController.showOrHideAllUser(false);
         NpcDialog.show(NPC.LUOTISI,["我是这里的能源守护者洛提斯，你们是谁？是不是也来抢我们这里的能源？"],null,null,false,function():void
         {
            NpcDialog.show(NPC.KALULU,["我们是赛尔先锋队的队员。我们的能源探测器探测到这里有能源储存，特地过来开采！ "],["那还是抢！"],[function():void
            {
               NpcDialog.show(NPC.LUOTISI,["你们这些铁皮全部都那么坏！我不会放过你们的！"],["小心！"],[function():void
               {
                  AnimateManager.playMcAnimate(activeMc,2,"mc2",function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["又是可恶的海盗！我不允许你们随便抢夺这里的能源！"],["哼哼！"],[function():void
                     {
                        NpcDialog.show(NPC.ZOG,["你们不也是来抢能源的！凭什么你们能抢，我们不能！"],["我们不是抢！"],[function():void
                        {
                           NpcDialog.show(NPC.ATIEDA,["我们会征得这里能源守护者的同意！我们跟你们不一样！"],["你们真的不是抢吗？"],[function():void
                           {
                              NpcDialog.show(NPC.LUOTISI,["你们帮我夺回来我们守护者的水泽碎块，合成水泽晶石。我就允许你开采这里的能源！"],["太棒啦！"],[function():void
                              {
                                 AnimateManager.playMcAnimate(activeMc,3,"mc3",function():void
                                 {
                                    MainManager.selfVisible = true;
                                    ToolBarController.showOrHideAllUser(true);
                                    FightManager.fightWithBoss("奇拉顿",1);
                                    BufferRecordManager.setMyState(798,true);
                                    SocketConnection.send(1022,86062108);
                                 });
                              }]);
                           }]);
                        }]);
                     }]);
                  });
               }]);
            }]);
         });
      }
      
      public static function destroy() : void
      {
         bosslBtn.removeEventListener(MouseEvent.CLICK,onFight);
         activeMc.removeEventListener(MouseEvent.CLICK,onBefore);
         panelBtn.removeEventListener(MouseEvent.CLICK,onPanel);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
         SocketConnection.removeCmdListener(CommandID.WITHER_GETGIFT,onGetGift);
         activeMap = null;
         activeMc = null;
         panelBtn = null;
         bosslBtn = null;
      }
   }
}
