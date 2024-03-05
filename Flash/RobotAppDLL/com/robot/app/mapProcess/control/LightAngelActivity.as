package com.robot.app.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class LightAngelActivity
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _taskState:uint;
      
      private static var _activityState:uint;
      
      private static var _taskMC:MovieClip;
      
      private static var _region:uint = 0;
      
      private static const ACTIVE_DAY:String = "1月29日-2月4日";
      
      public static var activeTime:String = "活动时间: " + ACTIVE_DAY + " 18:00-20:00";
      
      private static const AC:ActivityControl = new ActivityControl([new CronTimeVo("*","18-19","29-31","1","*","2016"),new CronTimeVo("*","18-19","1-4","2","*","2016")]);
       
      
      public function LightAngelActivity()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         _map = param1;
         _taskMC = _map.conLevel["taskmc"];
         _taskMC.buttonMode = true;
         _taskMC.addEventListener(MouseEvent.CLICK,onNpcClick);
         _taskState = TasksManager.getTaskStatus(1914);
         _activityState = TasksManager.getTaskStatus(1915);
         onGetTime();
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onGetTime);
      }
      
      private static function onPlayGame() : void
      {
         var frame:uint = 0;
         frame = uint(_taskMC.currentFrame);
         frame++;
         AnimateManager.playMcAnimate(_taskMC,frame,"mc",function():void
         {
            if(frame == 8)
            {
               NpcDialog.show(NPC.WEIBING_1,["我们快把它带回赛尔号吧。"],["嗯。"],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active20120716_5"),function():void
                  {
                     NpcDialog.show(NPC.SEER,["怎么会这样？尤尼卡，你对它做了什么？"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.YOUNIKA,["哈哈，想要带走球球，先解除来自恶魔星的封印吧。你们就跟这个“光明”的小家伙慢慢纠缠吧。"],null,null,false,function():void
                        {
                           AnimateManager.playMcAnimate(_taskMC,9,"mc",function():void
                           {
                              NpcDialog.show(NPC.WEIBING_1,["在捕捉球球之前，我们要把它身上的恶魔封印解除。"],["可恶，我们不会放弃它的！"],[function():void
                              {
                                 TasksManager.accept(1915,function():void
                                 {
                                    TasksManager.complete(1915,0,function():void
                                    {
                                       _activityState = 3;
                                       SocketConnection.send(1022,84807082);
                                    });
                                 });
                              }]);
                           });
                        });
                     });
                  });
               }]);
            }
         });
      }
      
      private static function onGetTime(param1:SocketEvent = null) : void
      {
         if(isInActive && _activityState == 3)
         {
            _taskMC.gotoAndStop(10);
         }
      }
      
      private static function get isInActive() : Boolean
      {
         return AC.isInActivityTime;
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         info = e.dataObj as FightOverInfo;
         if(_region == 1)
         {
            AnimateManager.playMcAnimate(_taskMC,10,"mc");
         }
         if(info.winnerID == MainManager.actorID)
         {
            SocketConnection.addCmdListener(CommandID.GET_REMOVE_SEAL_STATE,function(param1:SocketEvent):void
            {
               var data:ByteArray;
               var flg:uint;
               var e:SocketEvent = param1;
               SocketConnection.removeCmdListener(CommandID.GET_REMOVE_SEAL_STATE,arguments.callee);
               data = e.data as ByteArray;
               flg = data.readUnsignedInt();
               if(flg)
               {
                  AnimateManager.playMcAnimate(_taskMC,11,"mc");
                  if(FightDispatcher.hasEventListener(PetFightEvent.CATCH_SUCCESS))
                  {
                     return;
                  }
                  FightDispatcher.addEventListener(PetFightEvent.CATCH_SUCCESS,function(param1:DynamicEvent):void
                  {
                     FightDispatcher.removeEventListener(PetFightEvent.CATCH_SUCCESS,arguments.callee);
                     _region = 0;
                  });
                  _region = 1;
               }
               else
               {
                  _region = 0;
               }
            });
            SocketConnection.send(CommandID.GET_REMOVE_SEAL_STATE);
         }
         else
         {
            _region = 0;
         }
      }
      
      private static function onNpcClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(isInActive)
         {
            if(_activityState == 3)
            {
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
               FightManager.fightWithBoss("黑化的球球",_region);
               return;
            }
            if(_taskMC.currentFrame >= 3 && _taskMC.currentFrame < 8)
            {
               onPlayGame();
               return;
            }
            NpcDialog.show(NPC.WEIBING_1,["小赛尔你真准时，神秘力量现身了。"],["就是这团雾气吗？一靠近就让人觉得很快乐啊。"],[function():void
            {
               NpcDialog.show(NPC.WEIBING_1,["你也感觉到了？不过我们还是小心为好，或许这是个危险的陷阱。"],["嗯，那我们开始吧。","我先四处溜达溜达。"],[function():void
               {
                  AnimateManager.playMcAnimate(_taskMC,2,"mc",function():void
                  {
                     NpcDialog.show(NPC.WEIBING_1,["不要再轻举妄动了，我们还不知道它是正是邪，还是小心点比较好。"],["它看起来很友善啊，刚才真的是它攻击我们吗？"],[function():void
                     {
                        AnimateManager.playMcAnimate(_taskMC,3,"mc",function():void
                        {
                           NpcDialog.show(NPC.SEER,["不好，这个奇怪的东西逃跑了，趁它没跑远，我们快把它找出来！"],["（仔细搜寻它的影子）"]);
                        });
                     }]);
                  });
               }]);
            }]);
         }
         else if(_taskState == 3)
         {
            NpcDialog.show(NPC.WEIBING_1,["罗杰船长也觉得太奇怪了，所以派我们来调查一番。可是这股神秘力量只在" + ACTIVE_DAY + "才会出现。小赛尔，到时候一起帮忙调查吧。"],["恩，好的。到时我一定来。"]);
         }
         else
         {
            NpcDialog.show(NPC.WEIBING_1,["奇怪奇怪，真是太奇怪了……"],["怎么了？出了什么事儿？"],[function():void
            {
               NpcDialog.show(NPC.WEIBING_1,["我们竟然探测到恶魔星上有一股光明而温暖的力量，而且非常强大。"],["不会吧，这里可是恶魔星哎"],[function():void
               {
                  NpcDialog.show(NPC.WEIBING_1,["罗杰船长也觉得太奇怪了，所以派我们来调查一番。可是这股神秘力量只在" + activeTime + "才会出现。小赛尔，到时候一起帮忙调查吧。"],["恩，好的。到时我一定来。"],[function():void
                  {
                     TasksManager.accept(1914,function():void
                     {
                        TasksManager.complete(1914,0,function():void
                        {
                           SocketConnection.send(1022,84807073);
                        });
                     });
                  }]);
               }]);
            }]);
         }
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
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onGetTime);
         _map = null;
      }
   }
}
