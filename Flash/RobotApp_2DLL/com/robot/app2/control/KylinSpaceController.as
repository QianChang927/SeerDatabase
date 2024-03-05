package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class KylinSpaceController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var qilinItem:Array = [1200609,1200728,1200841,1200936,1700008,1700136];
      
      private static var qilinStr:Array = ["炽天之轮","日月之轮","天地之轮","麟火之轮","幻化之轮","重生之轮"];
      
      private static var allFightFlag:int = 0;
      
      private static const ENDBOSSTASKID:uint = 1785;
      
      private static var timeCo:CronTimeVo = new CronTimeVo("","","4","10","","2013");
       
      
      public function KylinSpaceController()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         _map = param1;
         allFightFlag = 0;
         if(isFinishTask)
         {
            afterTask();
         }
         else
         {
            isVisibleAns(false);
            startTask();
         }
         var _loc2_:int = 0;
         while(_loc2_ < 6)
         {
            ToolTipManager.add(_map.btnLevel["btn" + _loc2_],qilinStr[_loc2_]);
            _loc2_++;
         }
         setAns();
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(ENDBOSSTASKID);
      }
      
      private static function onFightFinish(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
         info = e.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            if(taskState == TasksManager.COMPLETE)
            {
               if(!BufferRecordManager.getMyState(843))
               {
                  _map.topLevel.visible = false;
                  _map.conLevel["seccessMc"].visible = true;
                  AnimateManager.playMcAnimate(_map.conLevel["seccessMc"],2,"mc2",function():void
                  {
                     _map.conLevel["seccessMc"].visible = false;
                     _map.topLevel.visible = true;
                  });
                  BufferRecordManager.setMyState(843,true);
               }
            }
            else if(!BufferRecordManager.getMyState(844))
            {
               if(allFightFlag >= 6)
               {
                  _map.topLevel.visible = false;
                  _map.conLevel["seccessMc"].visible = true;
                  AnimateManager.playMcAnimate(_map.conLevel["seccessMc"],1,"mc1",function():void
                  {
                     BufferRecordManager.setMyState(844,true);
                     _map.conLevel["seccessMc"].visible = false;
                     _map.topLevel.visible = true;
                     NpcDialog.show(NPC.QILIN,["能够通过六道轮回的锤炼证明了你的实力。现在，准备接受我神兽麒麟的最终试炼吧！10月4日，我会在这里等待着你的到来！"],["我一定会击败你的！麒麟！"]);
                  });
               }
            }
         }
      }
      
      private static function isVisibleAns(param1:Boolean) : void
      {
         var _loc2_:int = 0;
         while(_loc2_ < 6)
         {
            (_map.conLevel["ans" + _loc2_] as MovieClip).visible = param1;
            ToolTipManager.add(_map.btnLevel["btn" + _loc2_],qilinStr[_loc2_]);
            _loc2_++;
         }
      }
      
      private static function setAns() : void
      {
         var itemId:uint = 0;
         ItemManager.getCollection(function():void
         {
            var _loc1_:uint = 0;
            var _loc2_:int = 0;
            while(_loc2_ < 6)
            {
               itemId = qilinItem[_loc2_];
               _loc1_ = uint(ItemManager.getNumByID(itemId));
               if(_loc1_ == 0)
               {
                  DisplayUtil.stopAllMovieClip(_map.conLevel["ans" + _loc2_]);
               }
               else
               {
                  ++allFightFlag;
               }
               _loc2_++;
            }
         });
      }
      
      private static function startTask() : void
      {
         _map.topLevel["ani1"].visible = true;
         AnimateManager.playMcAnimate(_map.topLevel["ani1"],1,"mc1",function():void
         {
            NpcDialog.show(NPC.SEER,["哇…这就是传说中众神至尊麒麟的专属空间吗？简直太雄伟了！！"],["真想立刻目睹一下麒麟的风采！"],[function():void
            {
               AnimateManager.playMcAnimate(_map.topLevel["ani1"],2,"mc2",function():void
               {
                  NpcDialog.show(NPC.SEER,["在你面前的可是星际守护兽之首的0xff0000麒麟0xffffff，难道你不畏惧我吗？你知道擅自闯入麒麟空间的后果吗？"],["我…我是伸张正义的赛尔，我不畏惧！！"],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["果然没看错，" + MainManager.actorInfo.formatNick + "我们的缘分由此开始，你愿意接受我麒麟的锤炼吗？这可是一场漫长的路途啊！"],["什么锤炼我都不怕，我会奋勇向前的！！"],[function():void
                     {
                        NpcDialog.show(NPC.SEER,["呵呵，果然是英雄豪杰，在这里你将接受六道轮回的考验，只有真正的英雄才能经历这般历程！"],["放心吧！我一定会成功的！"],[function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active20130301_4"),function():void
                           {
                              NpcDialog.show(NPC.QILIN,["这就是我麒麟的终极奥义，现在就接受第一重锤炼，挑战六道轮回第一重炽天之轮的考验吧！击败我可以获得炽天之印！"],["恩恩，我已经准备好了！"],[function():void
                              {
                                 _map.topLevel["ani1"].gotoAndStop(3);
                                 NpcDialog.show(NPC.SEER,["展现我实力的时候终于到了，六道轮回我一定会坚持到底的！麒麟，你就看着吧！"],["锤炼正式开始！"],[function():void
                                 {
                                    isFinishTask = true;
                                    SocketConnection.send(1022,86055774);
                                    isVisibleAns(true);
                                    afterTask();
                                 }]);
                              }]);
                           });
                        }]);
                     }]);
                  }]);
               });
            }]);
         });
      }
      
      private static function afterTask() : void
      {
         _map.topLevel["ani1"].visible = true;
         _map.topLevel["ani1"].gotoAndStop(3);
         var _loc1_:int = 0;
         while(_loc1_ < 6)
         {
            _map.btnLevel["btn" + _loc1_].visible = true;
            _map.btnLevel["btn" + _loc1_].addEventListener(MouseEvent.CLICK,onClickFightBtn);
            _loc1_++;
         }
         _map.btnLevel["boss"].visible = true;
         _map.btnLevel["boss"].buttonMode = true;
         _map.btnLevel["boss"].addEventListener(MouseEvent.CLICK,onClickBoss);
      }
      
      private static function onClickFightBtn(param1:MouseEvent) : void
      {
         var fun1:Function = null;
         var fun2:Function = null;
         var fun3:Function = null;
         var fun4:Function = null;
         var fun5:Function = null;
         var e:MouseEvent = param1;
         var index:uint = uint((e.currentTarget as SimpleButton).name.slice(-1));
         switch(index)
         {
            case 0:
               SocketConnection.send(1022,86055776);
               ModuleManager.showModule(ClientConfig.getAppModule("KylinPanel/KylinFightPanel"));
               break;
            case 1:
               SocketConnection.send(1022,86057382);
               fun1 = function():void
               {
                  Alarm.show("你还没有通过炽天之轮的考验，先去通过炽天之轮的考验后再来找我吧！");
               };
               isSceessPreFight(0,fun1,"KylinPanel/KylinFightPanel1");
               break;
            case 2:
               SocketConnection.send(1022,86058585);
               fun2 = function():void
               {
                  Alarm.show("你还没有通过日月之轮的考验，先去通过日月之轮的考验后再来找我吧！");
               };
               isSceessPreFight(1,fun2,"KylinPanel/KylinFightPanel2");
               break;
            case 3:
               SocketConnection.send(1022,86059979);
               fun3 = function():void
               {
                  Alarm.show("你还没有通过天地之轮的考验，先去通过天地之轮的考验后再来找我吧！");
               };
               isSceessPreFight(2,fun3,"KylinPanel/KylinFightPanel3");
               break;
            case 4:
               fun4 = function():void
               {
                  Alarm.show("你还没有通过麟火之轮的考验，先去通过麟火之轮的考验后再来找我吧！");
               };
               isSceessPreFight(3,fun4,"KylinPanel/KylinFightPanel4");
               break;
            case 5:
               fun5 = function():void
               {
                  Alarm.show("你还没有通过幻化之轮的考验，先去通过幻化之轮的考验后再来找我吧！");
               };
               isSceessPreFight(4,fun5,"KylinPanel/KylinFightPanel5");
         }
      }
      
      private static function isSceessPreFight(param1:uint, param2:Function = null, param3:String = null) : void
      {
         var flag:uint = param1;
         var func:Function = param2;
         var str:String = param3;
         ItemManager.upDateCollection(qilinItem[flag],function():void
         {
            var _loc1_:uint = uint(ItemManager.getNumByID(qilinItem[flag]));
            if(_loc1_)
            {
               ModuleManager.showModule(ClientConfig.getAppModule(str));
            }
            else if(func != null)
            {
               func();
            }
         });
      }
      
      private static function onClickBoss(param1:Event) : void
      {
         var e:Event = param1;
         SocketConnection.send(1022,86061603);
         if(allFightFlag == 6)
         {
            if(timeCo.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.INCOMING)
            {
               NpcDialog.show(NPC.QILIN,["能够通过六道轮回的锤炼证明了你的实力。现在，准备接受我神兽麒麟的最终试炼吧！10月4日，我会在这里等待着你的到来！"],["我一定会击败你的！麒麟！"]);
            }
            else
            {
               NpcDialog.show(NPC.QILIN,[MainManager.actorInfo.formatNick + ",你终于来了，你愿意接受我最终的试炼吗！"],["我一定回来挑战你的","让我再准备一下！"],[function():void
               {
                  SocketConnection.send(CommandID.ACTIVEACHIEVE,21);
                  FightManager.fightWithBoss("麒麟",6);
               },function():void
               {
               }]);
            }
         }
         else
         {
            NpcDialog.show(NPC.QILIN,["想要挑战我？呵呵，现在还太早了点，先去接受六道轮回的考验吧，等你搜集到所有的六道封印后再来找我吧。"],["我一定回来挑战你的","离开麒麟空间！"],[function():void
            {
            },function():void
            {
               MapManager.changeMap(1);
            }]);
         }
      }
      
      public static function get isFinishTask() : Boolean
      {
         return BufferRecordManager.getState(MainManager.actorInfo,577);
      }
      
      public static function set isFinishTask(param1:Boolean) : void
      {
         BufferRecordManager.setState(MainManager.actorInfo,577,true);
      }
      
      public static function destroy() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < 5)
         {
            ToolTipManager.remove(_map.btnLevel["btn" + _loc1_]);
            _map.btnLevel["btn" + _loc1_].removeEventListener(MouseEvent.CLICK,onClickFightBtn);
            _loc1_++;
         }
         _map.btnLevel["boss"].removeEventListener(MouseEvent.CLICK,onClickBoss);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
      }
   }
}
