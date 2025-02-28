package com.robot.app.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class CourageTestActivity
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _taskState:Boolean;
      
      private static var _taskMC:MovieClip;
       
      
      public function CourageTestActivity()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         _map = param1;
         _taskMC = _map.conLevel["taskmc2"];
         _taskMC.buttonMode = true;
         CommonUI.addYellowExcal(param1.topLevel,202,135);
         _taskMC.addEventListener(MouseEvent.CLICK,onNpcClick);
         _taskMC["mc"].gotoAndStop(_taskMC["mc"].totalFrames - 1);
         _map.conLevel["stone"].buttonMode = true;
         _map.conLevel["stone"].addEventListener(MouseEvent.CLICK,onStoneClick);
         _taskState = BufferRecordManager.getState(MainManager.actorInfo,308);
      }
      
      private static function onNpcClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(isInActive)
         {
            NpcDialog.show(NPC.BAITE,["只有通过三个圣灵守护使者的考验才能获取见到迈尔斯的机会！我，拜特，主管第三重考验：“勇气”考验！"],["我要接受“勇气”考验","我先热个身，回头见！"],[function():void
            {
               NpcDialog.show(NPC.BAITE,["在19:00-20:00击败吉瓦或吉拉特野怪即可获得“勇气印记”，如果你能集齐15个“勇气印记”就可以挑战我一次！也可以用“勇气印记”兑换其他的奖励！"],["我要挑战你","我要兑换其他奖励","好的，我去去就来！"],[function():void
               {
                  SocketConnection.addCmdListener(CommandID.ITEM_LIST,function(param1:SocketEvent):void
                  {
                     var data:*;
                     var len:*;
                     var info:* = undefined;
                     var e:SocketEvent = param1;
                     SocketConnection.removeCmdListener(CommandID.ITEM_LIST,arguments.callee);
                     data = e.data as ByteArray;
                     data.position = 0;
                     len = data.readUnsignedInt();
                     if(len > 0)
                     {
                        info = new SingleItemInfo(data);
                        if(info.itemNum >= 15)
                        {
                           SocketConnection.addCmdListener(CommandID.EXCHANGE_FOR_FIGHT_BOSS,function(param1:SocketEvent):void
                           {
                              SocketConnection.removeCmdListener(CommandID.EXCHANGE_FOR_FIGHT_BOSS,arguments.callee);
                              var _loc3_:* = param1.data as ByteArray;
                              if(!_loc3_)
                              {
                                 FightManager.fightWithBoss("拜特");
                              }
                              else
                              {
                                 Alarm.show("你的“勇气印记”不足，快去挑战吉瓦或吉拉特野怪吧！");
                              }
                           });
                           SocketConnection.send(CommandID.EXCHANGE_FOR_FIGHT_BOSS);
                        }
                        else
                        {
                           Alarm.show("你的“勇气印记”不足，快去挑战吉瓦或吉拉特野怪吧！");
                        }
                     }
                     else
                     {
                        Alarm.show("你的“勇气印记”不足，快去挑战吉瓦或吉拉特野怪吧！");
                     }
                  });
                  SocketConnection.send(CommandID.ITEM_LIST,1200148,1200148,2);
               },function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("CourageBounusPanel"),"正在加载...");
               }]);
            }]);
         }
         else if(_taskState)
         {
            NpcDialog.show(NPC.BAITE,["好！我，拜特，主管“勇气”考验！7月6日-7月19日   19:00-20:00， 圣灵守护使者的第三重考验等待着你！"],["好的我知道了！"]);
         }
         else
         {
            CommonUI.removeYellowExcal(_map.topLevel);
            _taskMC["mc"].gotoAndStop(1);
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("courage_test_dialogue"),function():void
            {
               NpcDialog.show(NPC.MENGTA,["爸爸！你怎么不打倒那个家伙！"],["没那么简单！"],[function():void
               {
                  NpcDialog.show(NPC.MAIERSI,["不要小看它，我们如果交战，连你们都会牵连进去！赛尔，恶魔领域危险重重，你们一定要去吗？"],["是的！"],[function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["是啊，为了帮助尤米娜，搞清邪恶四灵的阴谋，就是刀山火海也要去闯一下！"],["好吧！那你们要多加小心！"],[function():void
                     {
                        AnimateManager.playMcAnimate(_taskMC,1,"mc",function():void
                        {
                           NpcDialog.show(NPC.BAITE,["你就是赛尔吧！我是幻影星圣灵守护使者拜特！"],["你好，拜特！"],[function():void
                           {
                              NpcDialog.show(NPC.BAITE,["不论是谁，想得到迈尔斯的信任，都要先通过三个圣灵守护使者的考验！据我所知，你们已经通过了爱心、正义考验！"],["是呀，我们已经是迈尔斯的朋友啦！"],[function():void
                              {
                                 NpcDialog.show(NPC.BAITE,["是的，但是，你们要进入恶魔领域，那里危险重重，只有爱心和正义感可不够！你必须有足够的勇气，才不会半途而废！"],["我一定不会半途而废！"],[function():void
                                 {
                                    NpcDialog.show(NPC.BAITE,["好！我，拜特，主管“勇气”考验！7月6日-7月19日   19:00-20:00， 圣灵守护使者的第三重考验等待着你！"],["好的我知道了！"],[function():void
                                    {
                                       BufferRecordManager.setState(MainManager.actorInfo,308,true,function():void
                                       {
                                          _taskState = true;
                                          CommonUI.addYellowExcal(_map.topLevel,202,135);
                                       });
                                    }]);
                                 }]);
                              }]);
                           }]);
                        });
                     }]);
                  }]);
               }]);
            },false);
         }
      }
      
      private static function onStoneClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("BaiTePanel"),"正在加载...");
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         _taskMC.removeEventListener(MouseEvent.CLICK,onNpcClick);
         DisplayUtil.removeForParent(_taskMC);
         _taskMC = null;
         _map.conLevel["stone"].removeEventListener(MouseEvent.CLICK,onStoneClick);
         _map = null;
      }
      
      private static function get isInActive() : Boolean
      {
         var _loc1_:Date = SystemTimerManager.sysDate;
         if(_loc1_.monthUTC == 6 && _loc1_.dateUTC >= 6 && _loc1_.dateUTC <= 19 && _loc1_.hoursUTC == 11)
         {
            return true;
         }
         return false;
      }
   }
}
