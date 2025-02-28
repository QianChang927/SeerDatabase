package com.robot.app.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   
   public class TaskVSBandL
   {
      
      private static var ACTIVITY_TIME_START:uint;
      
      private static var ACTIVITY_TIME_END:uint;
      
      public static var _map:BaseMapProcess;
      
      private static var _mcForMap754:MovieClip;
      
      private static var _activeBoss:MovieClip;
      
      private static var _remainText:MovieClip;
      
      private static var _crtState:int;
      
      private static var _canFight:Boolean;
      
      private static var crtAciveMC:MovieClip;
      
      private static var _leftMin:int;
      
      private static var _jvchisha:MovieClip;
      
      private static var _jvguguai:MovieClip;
      
      private static var _binsaike:MovieClip;
      
      private static var _leinaerduo:MovieClip;
      
      private static var _canPlay:Boolean;
      
      private static var _play:Boolean;
       
      
      public function TaskVSBandL()
      {
         super();
      }
      
      public static function initForMap754(param1:BaseMapProcess) : void
      {
         var _loc2_:Date = SystemTimerManager.sysDate;
         if(_loc2_.date <= 8)
         {
            ACTIVITY_TIME_START = SystemTimerManager.getTimeByDate(2012,9,8,13,0);
            ACTIVITY_TIME_END = SystemTimerManager.getTimeByDate(2012,9,8,14,0);
         }
         else if(_loc2_.date >= 9)
         {
            ACTIVITY_TIME_START = SystemTimerManager.getTimeByDate(2012,9,9,13,0);
            ACTIVITY_TIME_END = SystemTimerManager.getTimeByDate(2012,9,9,14,0);
         }
         _map = param1;
         _mcForMap754 = _map.conLevel["activity"];
         _activeBoss = _map.conLevel["fightBoss"];
         _remainText = _map.conLevel["info"];
         _mcForMap754.visible = false;
         _activeBoss.visible = false;
         _remainText.visible = false;
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,checkCurrentState);
         _crtState = -1;
         checkCurrentState(null);
         _jvchisha = _map.conLevel["jvchisha"];
         _jvguguai = _map.conLevel["jvguguai"];
         _leinaerduo = _map.conLevel["leinaerduo"];
         _binsaike = _map.conLevel["binsaike"];
         _jvchisha.buttonMode = true;
         _jvguguai.buttonMode = true;
         _leinaerduo.buttonMode = true;
         _binsaike.buttonMode = true;
         MapListenerManager.add(_jvchisha,onJvchishaClick);
         MapListenerManager.add(_jvguguai,onJvguguaiClick);
         MapListenerManager.add(_leinaerduo,onLeinaerduoClick);
         MapListenerManager.add(_binsaike,onBinsaikeClick);
      }
      
      private static function onJvchishaClick(param1:MouseEvent) : void
      {
         var _loc2_:Date = SystemTimerManager.sysDate;
         var _loc3_:uint = uint(SystemTimerManager.getTimeByDate(2012,9,8,14,0));
         if(_loc2_.time / 1000 >= ACTIVITY_TIME_START && _loc2_.time / 1000 <= ACTIVITY_TIME_END)
         {
            NpcDialog.show(NPC.JVCHISHA,["巨蘑怪这个多管闲事的家伙，总是嚷着要打醒我，不让我堕落。它才是没有领悟到黑石之力的神奇之处。"],["巨齿鲨，黑石之力不是这样利用的。"]);
         }
         else if(_loc2_.time / 1000 >= _loc3_)
         {
            NpcDialog.show(NPC.JVCHISHA,["魔的力量才是最强大的！哼，如果不是刚刚经历圣战，耗费我太多体力，这样的低等精灵，早就被我秒杀了。"],["别看不起人，我们一定会打败你的。"]);
         }
         else
         {
            NpcDialog.show(NPC.JVCHISHA,["哈哈，能与恶魔领域的领主一起并肩作战，太好了！只有魔之力，才能称霸宇宙。"],["巨齿鲨，我一定会帮助你控制黑石之力的能量的。"]);
         }
      }
      
      private static function onJvguguaiClick(param1:MouseEvent) : void
      {
         var _loc2_:Date = SystemTimerManager.sysDate;
         var _loc3_:uint = uint(SystemTimerManager.getTimeByDate(2012,9,8,14,0));
         if(_loc2_.time / 1000 >= ACTIVITY_TIME_START && _loc2_.time / 1000 <= ACTIVITY_TIME_END)
         {
            NpcDialog.show(NPC.JUMOGUAI,["每五分钟，就可以帮助我提升能力，或者帮助我打醒巨齿鲨，赛尔，我需要你的帮助。"],["嗯，我们一起加油！"]);
         }
         else if(_loc2_.time / 1000 >= _loc3_)
         {
            NpcDialog.show(NPC.JUMOGUAI,["赛尔，9月9日13:00-14:00，记得再过来，一定要让雷纳尔多和巨齿鲨心服口服，依靠邪魔歪道，终究不是明智之举。"],["嗯嗯，我明天一定还来。"]);
         }
         else
         {
            NpcDialog.show(NPC.JUMOGUAI,["巨齿鲨还是无法控制体内的黑石之力，赛尔，9月8日13:00-14:00，帮助我把这家伙打醒。"],["嗯，我一定会来的。"]);
         }
      }
      
      private static function onLeinaerduoClick(param1:MouseEvent) : void
      {
         var _loc2_:Date = SystemTimerManager.sysDate;
         var _loc3_:uint = uint(SystemTimerManager.getTimeByDate(2012,9,8,14,0));
         if(_loc2_.time / 1000 >= ACTIVITY_TIME_START && _loc2_.time / 1000 <= ACTIVITY_TIME_END)
         {
            NpcDialog.show(NPC.LEINAERDUO,["哈哈，想让我改邪归正？我誓死效忠尤尼卡大人。我倒要看看你能坚持多久。"],["雷纳尔多，尤尼卡已经战败了，觉悟吧。"]);
         }
         else if(_loc2_.time / 1000 >= _loc3_)
         {
            NpcDialog.show(NPC.LEINAERDUO,["魔的力量才是最强大的！哼，如果不是刚刚经历圣战，耗费我太多体力，这样的低等精灵，早就被我秒杀了。"],["别看不起人，我们一定会打败你的。"]);
         }
         else
         {
            NpcDialog.show(NPC.LEINAERDUO,["9月8日13:00-14:00，我就在这里陪你们玩玩儿，哈哈，以卵击石的可怜家伙。"],["不要得意，我们会战胜你的！"]);
         }
      }
      
      private static function onBinsaikeClick(param1:MouseEvent) : void
      {
         var _loc2_:Date = SystemTimerManager.sysDate;
         var _loc3_:uint = uint(SystemTimerManager.getTimeByDate(2012,9,8,14,0));
         if(_loc2_.time / 1000 >= ACTIVITY_TIME_START && _loc2_.time / 1000 <= ACTIVITY_TIME_END)
         {
            NpcDialog.show(NPC.BINSAIKE,["每五分钟，就可以帮助我提升能力，或者跟我一起教训那个家伙。我要用它的方式让它心服口服，努力让它改邪归正。"],["嗯，我们一起加油！"]);
         }
         else if(_loc2_.time / 1000 >= _loc3_)
         {
            NpcDialog.show(NPC.BINSAIKE,["赛尔，9月9日13:00-14:00，记得再过来，一定要让雷纳尔多和巨齿鲨心服口服，依靠邪魔歪道，终究不是明智之举。"],["嗯嗯，我明天一定还来。"]);
         }
         else
         {
            NpcDialog.show(NPC.BINSAIKE,["赛尔，形势已经失控了。9月8日13:00-14:00，记得来地下废墟场，这里需要你的帮助。"],["嗯，到时我一定来！"]);
         }
      }
      
      private static function checkCurrentState(param1:SocketEvent) : void
      {
         var t:uint = 0;
         var state:int = 0;
         var e:SocketEvent = param1;
         if(isActiveTime)
         {
            _activeBoss.visible = true;
            _activeBoss.buttonMode = true;
            _mcForMap754.visible = true;
            t = setTimeout(function():void
            {
               clearTimeout(t);
               MapNamePanel.hide();
            },500);
            state = activeState;
            _remainText["timeText"].text = _leftMin;
            if(state != _crtState)
            {
               _crtState = state;
               checkCrtBoss();
            }
         }
         else
         {
            _mcForMap754.visible = false;
            _remainText.visible = false;
            outofActivityTime();
         }
      }
      
      private static function checkCrtBoss() : void
      {
         SocketConnection.addCmdListener(CommandID.LEINADUO_CHECK_BOSS,setBossState);
         SocketConnection.send(CommandID.LEINADUO_CHECK_BOSS);
      }
      
      private static function setBossState(param1:SocketEvent) : void
      {
         var arr:Array;
         var date:Date = null;
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.LEINADUO_CHECK_BOSS,setBossState);
         arr = KTool.readDataByBits(e.data as ByteArray,16);
         if(_crtState % 4 == 0)
         {
            _jvchisha.visible = false;
            _jvguguai.visible = true;
            _leinaerduo.visible = true;
            _binsaike.visible = true;
         }
         if(_crtState % 4 == 1)
         {
            _jvchisha.visible = true;
            _jvguguai.visible = false;
            _leinaerduo.visible = true;
            _binsaike.visible = true;
         }
         if(_crtState % 4 == 2)
         {
            _jvchisha.visible = true;
            _jvguguai.visible = true;
            _leinaerduo.visible = false;
            _binsaike.visible = true;
         }
         if(_crtState % 4 == 3)
         {
            _jvchisha.visible = true;
            _jvguguai.visible = true;
            _leinaerduo.visible = false;
            _binsaike.visible = true;
         }
         if(!arr[_crtState])
         {
            _mcForMap754.gotoAndStop(_crtState + 5);
            _activeBoss.buttonMode = true;
            _canFight = true;
            _canPlay = false;
            _activeBoss.removeEventListener(MouseEvent.CLICK,onFightWithBoss);
            canFightPlayAnimation();
         }
         else
         {
            _canFight = false;
            if(_crtState == 11)
            {
               date = SystemTimerManager.sysDate;
               if(date.date == 8)
               {
                  _mcForMap754.gotoAndStop(17);
                  if(!BufferRecordManager.getState(MainManager.actorInfo,394))
                  {
                     BufferRecordManager.setState(MainManager.actorInfo,394,true);
                     AnimateManager.playMcAnimate(_mcForMap754,17,"mc17",function():void
                     {
                        NpcDialog.show(NPC.BINSAIKE,["打架这种事情真是有辱斯文，瞧把我弄得灰头土脸的……雷纳尔多，你服气了没？虽然我也没战胜你，但我们总算不相伯仲吧。"],["宾塞克原来你很厉害呢。"],[function():void
                        {
                           NpcDialog.show(NPC.LEINAERDUO,["哼，要不是圣战一役，我元气大伤，你这种手无缚鸡之力的家伙怎么可能坚持到现在。等我休息够了，我们再打！"],["还要打？ "],[function():void
                           {
                              NpcDialog.show(NPC.JVCHISHA,["当然还要继续。巨蘑怪，你现在知道，真正的黑石之力到底拥有多大的威力了吧。你拥有它，简直就是浪费。"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.JUMOGUAI,["你现在并不清醒，我会让你明白，什么才是真正的黑石之力。宾塞克，我决定明天继续和巨齿鲨较量一番。你愿意留下来帮助我吗？"],null,null,false,function():void
                                 {
                                    NpcDialog.show(NPC.BINSAIKE,["既然如此，雷纳尔多，明天我再与你切磋。到时候，如果我打败你了，你就没什么话好说了吧。"],null,null,false,function():void
                                    {
                                       NpcDialog.show(NPC.BINSAIKE,["赛尔，9月9日13:00-14:00，记得再过来，一定要让雷纳尔多和巨齿鲨心服口服，依靠邪魔歪道，终究不是明智之举。"],["嗯嗯，我明天一定还来。"],[function():void
                                       {
                                          NpcDialog.show(NPC.LEINAERDUO,["魔的力量才是最强大的！哼，如果不是刚刚经历圣战，耗费我太多体力，这样的低等精灵，早就被我秒杀了。"],["别看不起人，我们一定会打败你的。"],[function():void
                                          {
                                             _activeBoss.visible = false;
                                             _remainText.visible = false;
                                          }]);
                                       }]);
                                    });
                                 });
                              });
                           }]);
                        }]);
                     });
                  }
                  else
                  {
                     _mcForMap754.visible = false;
                     _activeBoss.visible = false;
                     _remainText.visible = false;
                  }
               }
               else
               {
                  _mcForMap754.gotoAndStop(18);
                  if(!BufferRecordManager.getState(MainManager.actorInfo,395))
                  {
                     BufferRecordManager.setState(MainManager.actorInfo,395,true);
                     MainManager.selfVisible = false;
                     AnimateManager.playMcAnimate(_mcForMap754,18,"mc18",function():void
                     {
                        MainManager.selfVisible = true;
                        NpcDialog.show(NPC.JUMOGUAI,["赛尔，宾塞克，这里就交给你们了，我要看紧巨齿鲨，千万不能让它伤害到别人。"],["嗯，巨蘑怪你自己也要当心。"],[function():void
                        {
                           AnimateManager.playMcAnimate(_mcForMap754,19,"mc19",function():void
                           {
                              NpcDialog.show(NPC.LEINAERDUO,["原来它也是个没用的家伙……你们两个，到这里来跟我谈什么改邪归正，不觉得太可笑了吗？"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.LEINAERDUO,["哈哈，正邪又有什么分别？只有最强的战斗力，才是称霸宇宙的终极武器！"],null,null,false,function():void
                                 {
                                    NpcDialog.show(NPC.BINSAIKE,["可能暂时我无法改变你的想法，但总有一天，你会明白，真正能掌控这个世界的，只有正义的力量。"],null,null,false,function():void
                                    {
                                       AnimateManager.playMcAnimate(_mcForMap754,20,"mc20",function():void
                                       {
                                          NpcDialog.show(NPC.BINSAIKE,["哎…不知道巨蘑怪需不需要我们的帮助，我们还是追上去看看吧。"],null,null,false,function():void
                                          {
                                             NpcDialog.show(NPC.SEER,["嗯，看来巨齿鲨这次的魔化比上次严重多了。我回赛尔号问问博士有没有解决的办法。"],null,null,false,function():void
                                             {
                                                NpcDialog.show(NPC.BINSAIKE,["好，那我先去助巨蘑怪一臂之力。赛尔，这次感谢你的帮助，再见。"],["嗯，智多星再见。"],[function():void
                                                {
                                                   AnimateManager.playMcAnimate(_mcForMap754,21,"mc21",function():void
                                                   {
                                                      _mcForMap754.visible = false;
                                                      _activeBoss.visible = false;
                                                      _remainText.visible = false;
                                                   });
                                                }]);
                                             });
                                          });
                                       });
                                    });
                                 });
                              });
                           });
                        }]);
                     });
                  }
                  else
                  {
                     _mcForMap754.visible = false;
                     _activeBoss.visible = false;
                     _remainText.visible = false;
                  }
               }
            }
            else
            {
               _remainText.visible = true;
               _mcForMap754.gotoAndStop(_crtState + 6);
               _activeBoss.removeEventListener(MouseEvent.CLICK,onFightWithBoss);
               _activeBoss.addEventListener(MouseEvent.CLICK,onFightWithBoss);
            }
         }
      }
      
      private static function canFightPlayAnimation() : void
      {
         if(!_canPlay)
         {
            CommonUI.removeYellowArrow(_activeBoss);
            _remainText.visible = false;
            _canPlay = true;
            AnimateManager.playMcAnimate(_mcForMap754,_crtState + 5,"mc",function():void
            {
               addEvent();
               if(_crtState == 11)
               {
                  _remainText.visible = false;
               }
            });
         }
      }
      
      private static function addEvent() : void
      {
         _activeBoss.buttonMode = true;
         CommonUI.removeYellowArrow(_activeBoss);
         CommonUI.addYellowArrow(_activeBoss,0,30,300);
         _activeBoss.removeEventListener(MouseEvent.CLICK,onFightWithBoss);
         _activeBoss.addEventListener(MouseEvent.CLICK,onFightWithBoss);
      }
      
      private static function onFightWithBoss(param1:MouseEvent) : void
      {
         var _loc2_:Array = ["巨齿鲨","巨蘑怪","雷纳尔多","巨蘑怪"];
         if(_canFight)
         {
            CommonUI.removeYellowArrow(_activeBoss);
            FightManager.fightWithBoss(_loc2_[_crtState % 4],_crtState);
         }
         else
         {
            if(_crtState % 4 == 0)
            {
               NpcDialog.show(NPC.JVCHISHA,["巨蘑怪这个多管闲事的家伙，总是嚷着要打醒我，不让我堕落。它才是没有领悟到黑石之力的神奇之处。"],["巨齿鲨，黑石之力不是这样利用的。"]);
            }
            if(_crtState % 4 == 1)
            {
               NpcDialog.show(NPC.JUMOGUAI,["每五分钟，就可以帮助我提升能力，或者帮助我打醒巨齿鲨，赛尔，我需要你的帮助。"],["嗯，我们一起加油！"]);
            }
            if(_crtState % 4 == 2)
            {
               NpcDialog.show(NPC.LEINAERDUO,["哈哈，想让我改邪归正？我誓死效忠尤尼卡大人。我倒要看看你能坚持多久。"],["雷纳尔多，尤尼卡已经战败了，觉悟吧。"]);
            }
            if(_crtState % 4 == 3)
            {
               NpcDialog.show(NPC.BINSAIKE,["每五分钟，就可以帮助我提升能力，或者跟我一起教训那个家伙。我要用它的方式让它心服口服，努力让它改邪归正。"],["嗯，我们一起加油！"]);
            }
         }
      }
      
      private static function outofActivityTime() : void
      {
         /*
          * Decompilation error
          * Timeout (1 minute) was reached
          * Instruction count: 115
          */
         throw new flash.errors.IllegalOperationError("Not decompiled due to timeout");
      }
      
      private static function onActivityTime() : void
      {
      }
      
      public static function get isActiveTime() : Boolean
      {
         var _loc1_:Date = SystemTimerManager.sysDate;
         if(_loc1_.time / 1000 >= ACTIVITY_TIME_START && _loc1_.time / 1000 <= ACTIVITY_TIME_END)
         {
            return true;
         }
         return false;
      }
      
      private static function get TaskMC() : MovieClip
      {
         return MapManager.currentMap.controlLevel["moonLightMC"];
      }
      
      private static function get activeState() : int
      {
         var _loc1_:Date = SystemTimerManager.sysDate;
         var _loc2_:int = _loc1_.minutesUTC;
         var _loc3_:int = _loc2_ / 5;
         _leftMin = 5 - _loc2_ % 5;
         if(_leftMin == 0)
         {
            _canPlay = false;
            _activeBoss.removeEventListener(MouseEvent.CLICK,onFightWithBoss);
         }
         return _loc3_;
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,checkCurrentState);
         SocketConnection.removeCmdListener(CommandID.LEINADUO_CHECK_BOSS,setBossState);
         _jvchisha = null;
         _jvguguai = null;
         _leinaerduo = null;
         _binsaike = null;
         if(_activeBoss)
         {
            _activeBoss.removeEventListener(MouseEvent.CLICK,onFightWithBoss);
         }
         _play = false;
         _map = null;
      }
   }
}
