package com.robot.app.mapProcess.control
{
   import com.robot.app.control.BroadcastController;
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.BroadcastInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class FireStatueAwakeController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _curDate:Date;
      
      private static var _curStep:int = -1;
      
      private static var _fightStatus:Array;
      
      private static var _icon:MovieClip;
      
      public static var _addArrow:Boolean = false;
       
      
      public function FireStatueAwakeController()
      {
         super();
      }
      
      public static function addMsgAndIcon() : void
      {
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onGetMsgTime);
      }
      
      private static function onGetMsgTime(param1:SocketEvent) : void
      {
         var date:Date;
         var date1:Date;
         var t:uint = 0;
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onGetMsgTime);
         date = SystemTimerManager.sysDate;
         date1 = new Date(2012,9,14,14,0,0,0);
         if(date.time < date1.time)
         {
            LocalMsgController.addLocalMsg("FireStatueAwakeEnvelopPanel");
         }
         _icon = UIManager.getMovieClip("vs_icon");
         _icon.x = 565;
         _icon.y = 14;
         _icon.addEventListener(MouseEvent.CLICK,onClickIcon);
         LevelManager.toolsLevel.addChild(_icon);
         ToolTipManager.add(_icon,"火系圣像觉醒");
         if(InActiveTime)
         {
            _icon.visible = true;
         }
         else
         {
            _icon.visible = false;
         }
         if(InActiveTime)
         {
            if(MapManager.currentMap)
            {
               if(date.minutes % 5 == 0)
               {
                  t = setTimeout(function():void
                  {
                     var _loc1_:* = undefined;
                     clearTimeout(t);
                     if(MapManager.currentMap.id != 785)
                     {
                        _loc1_ = new BroadcastInfo();
                        _loc1_.isLocal = true;
                        _loc1_.map = 785;
                        _loc1_.txt = "在激活精灵圣坛的火系圣像之前，魔焰猩猩必须打败前来阻挠的里奥杰斯！";
                        BroadcastController.addBroadcast(_loc1_);
                     }
                  },3000);
               }
            }
         }
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onIconTimer);
         onIconTimer();
      }
      
      private static function onIconTimer(param1:SocketEvent = null) : void
      {
         var _loc2_:Date = SystemTimerManager.sysDate;
         if(InActiveTime)
         {
            _icon.visible = true;
            if(_loc2_.minutes >= 55)
            {
               _icon["info"]["text"].text = "第" + (Math.floor(_loc2_.minutes / 5) + 1) + "轮对战开始，可收集火系预言碎片！";
            }
            else
            {
               _icon["info"]["text"].text = "第" + (Math.floor(_loc2_.minutes / 5) + 1) + "轮对战开始，可收集火系预言碎片！";
            }
         }
         else
         {
            _icon.visible = false;
         }
      }
      
      private static function onClickIcon(param1:MouseEvent) : void
      {
         var _loc2_:Date = SystemTimerManager.sysDate;
         var _loc3_:uint = Math.floor(_loc2_.minutes / 5);
         SocketConnection.send(1022,86050984 + _loc3_);
         MapManager.changeMap(785);
      }
      
      public static function initForMap785(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.topLevel["countDown"].visible = false;
         _map.btnLevel["fightBtn"].visible = false;
         _map.btnLevel["moYanXingXingBtn"].visible = false;
         _map.btnLevel["liAoJieSiBtn"].visible = false;
         _map.btnLevel["doctorBtn"].visible = false;
         _map.depthLevel["allStones"].visible = false;
         var _loc2_:Date = SystemTimerManager.sysDate;
         if(!InActiveTime)
         {
            if(!BufferRecordManager.getState(MainManager.actorInfo,426))
            {
               _map.depthLevel["stone"].visible = false;
               hideNpcs();
               CommonUI.addYellowExcal(_map.topLevel,229,288);
               _map.conLevel["act"].buttonMode = true;
               _map.conLevel["act"].addEventListener(MouseEvent.CLICK,actTask);
            }
            else
            {
               _map.conLevel["act"].visible = false;
               if(_loc2_.time <= new Date(2012,9,12,19,0,0,0).time)
               {
                  showNpcs(false);
               }
               else if(_loc2_.time >= new Date(2012,9,14,14,0,0,0).time)
               {
                  _map.depthLevel["allStones"].visible = true;
                  _map.depthLevel["stone"].visible = false;
                  destroy();
               }
               else
               {
                  showNpcs(true);
               }
            }
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
         }
         else
         {
            _map.depthLevel["stone"].visible = true;
            startActivity();
         }
      }
      
      private static function actTask(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         _map.conLevel["act"].removeEventListener(MouseEvent.CLICK,actTask);
         _map.conLevel["act"].buttonMode = false;
         CommonUI.removeYellowExcal(_map.topLevel);
         KTool.hideMapAllPlayerAndMonster();
         NpcDialog.show(NPC.DOCTOR,["这几天，有关末日的流言沸沸扬扬，精灵们惶惶不可终日。作为赛尔机器人，肩负着保护精灵的重担！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.DOCTOR,["是时候开启尘封已久的精灵圣坛，用火、水、草三大系的精灵力量，激活有关救世主的预言，以应对0xff000011月2日0xffffff，恶灵兽带来的噩梦！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SEER,["这就是精灵圣坛啊！恶灵兽的复苏，真的有那么可怕吗？那，那我可以帮什么忙呢？"],null,null,false,function():void
               {
                  CartoonManager.play(ClientConfig.getFullMovie("cartoon/FireStatueAwakeCartoon_1"),function():void
                  {
                     NpcDialog.show(NPC.SEER,["博士，那，我们该如何让这些圣像都苏醒过来呢？"],null,null,false,function():void
                     {
                        AnimateManager.playMcAnimate(_map.conLevel["act"],1,"mc",function():void
                        {
                           NpcDialog.show(NPC.DOCTOR,["这就是激活圣像的秘密。只要将火系精灵的能量聚集起来，就能激活火系圣像。让我们赶紧开始激活仪式吧！"],null,null,false,function():void
                           {
                              AnimateManager.playMcAnimate(_map.conLevel["act"],2,"mc",function():void
                              {
                                 NpcDialog.show(NPC.SEER,["博士！它们...它们去哪里了？怎么不见了？！！！"],null,null,false,function():void
                                 {
                                    NpcDialog.show(NPC.DOCTOR,["不用紧张，火系精灵是不会被火焰伤害的。它们进入圣坛为三座圣像积蓄能量，等到圣坛被激活，它们就会回到我们身边了！"],["呼，原来如此！"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(_map.conLevel["act"],3,"mc",function():void
                                       {
                                          NpcDialog.show(NPC.LIAOJIESI,["谁也不能阻止恶灵兽的复苏！想要激活火系圣像？哈哈，先过我这一关！"],null,null,false,function():void
                                          {
                                             NpcDialog.show(NPC.SEER,["博士，怎么办？火鹿王里奥杰斯太厉害了，我们几个...博士！你快带着精灵去搬救兵吧，这里我来顶着！"],null,null,false,function():void
                                             {
                                                NpcDialog.show(NPC.DOCTOR,["嗯...魔焰猩猩，该是你登场的时候了！"],["魔焰猩猩？在哪里？博士你糊涂了吧。"],[function():void
                                                {
                                                   AnimateManager.playMcAnimate(_map.conLevel["act"],4,"mc",function():void
                                                   {
                                                      AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active20121012_1"),function():void
                                                      {
                                                         _map.conLevel["act"].gotoAndStop(5);
                                                         NpcDialog.show(NPC.LIAOJIESI,["哈哈，有点意思。你是准备挑战我吗？"],null,null,false,function():void
                                                         {
                                                            NpcDialog.show(NPC.MOYANXINGXING,["赛尔，0xff000010月12日 19:00-20:000xffffff，帮助我一起战胜里奥杰斯。我们必须激活精灵圣坛，找到末日救世主！"],["嗯，我一定会来的！"],[function():void
                                                            {
                                                               _map.conLevel["act"].visible = false;
                                                               _map.conLevel["act"].buttonMode = false;
                                                               _map.depthLevel["stone"].visible = true;
                                                               KTool.showMapAllPlayerAndMonster();
                                                               var _loc1_:* = SystemTimerManager.sysDate;
                                                               if(_loc1_.time <= new Date(2012,9,12,19,0,0,0).time)
                                                               {
                                                                  showNpcs(false);
                                                               }
                                                               else
                                                               {
                                                                  showNpcs(true);
                                                               }
                                                               SocketConnection.send(1022,86050976);
                                                               BufferRecordManager.setState(MainManager.actorInfo,426,true);
                                                               SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
                                                               onCheckStartTime();
                                                            }]);
                                                         });
                                                      });
                                                   });
                                                }]);
                                             });
                                          });
                                       });
                                    }]);
                                 });
                              });
                           });
                        });
                     });
                  });
               });
            });
         });
      }
      
      private static function onCheckStartTime(param1:SocketEvent = null) : void
      {
         if(InActiveTime)
         {
            SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
            CommonUI.removeYellowExcal(_map.topLevel);
            startActivity();
         }
      }
      
      private static function showNpcs(param1:Boolean = false) : void
      {
         _map.depthLevel["doctor"].visible = true;
         _map.depthLevel["doctor"].buttonMode = true;
         if(!param1)
         {
            _map.depthLevel["doctor"].addEventListener(MouseEvent.CLICK,onDoctorClickBefore);
         }
         else
         {
            _map.depthLevel["doctor"].addEventListener(MouseEvent.CLICK,onDoctorClickAfter);
         }
         _map.depthLevel["liaojiesi"].visible = true;
         _map.depthLevel["liaojiesi"].buttonMode = true;
         if(!param1)
         {
            _map.depthLevel["liaojiesi"].addEventListener(MouseEvent.CLICK,onLiAoJieSiClickBefore);
         }
         else
         {
            _map.depthLevel["liaojiesi"].addEventListener(MouseEvent.CLICK,onLiAoJieSiClickAfter);
         }
         _map.depthLevel["moyanxingxing"].visible = true;
         _map.depthLevel["moyanxingxing"].buttonMode = true;
         if(!param1)
         {
            _map.depthLevel["moyanxingxing"].addEventListener(MouseEvent.CLICK,onMoYanXingXingClickBefore);
         }
         else
         {
            _map.depthLevel["moyanxingxing"].addEventListener(MouseEvent.CLICK,onMoYanXingXingClickAfter);
         }
      }
      
      private static function hideNpcs() : void
      {
         _map.depthLevel["liaojiesi"].visible = false;
         _map.depthLevel["liaojiesi"].buttonMode = false;
         _map.depthLevel["liaojiesi"].removeEventListener(MouseEvent.CLICK,onLiAoJieSiClickBefore);
         _map.depthLevel["liaojiesi"].removeEventListener(MouseEvent.CLICK,onLiAoJieSiClickAfter);
         _map.depthLevel["moyanxingxing"].visible = false;
         _map.depthLevel["moyanxingxing"].buttonMode = false;
         _map.depthLevel["moyanxingxing"].removeEventListener(MouseEvent.CLICK,onMoYanXingXingClickBefore);
         _map.depthLevel["moyanxingxing"].removeEventListener(MouseEvent.CLICK,onMoYanXingXingClickAfter);
         _map.depthLevel["doctor"].visible = false;
         _map.depthLevel["doctor"].buttonMode = false;
         _map.depthLevel["doctor"].removeEventListener(MouseEvent.CLICK,onDoctorClickBefore);
         _map.depthLevel["doctor"].removeEventListener(MouseEvent.CLICK,onDoctorClickAfter);
      }
      
      private static function onLiAoJieSiClickBefore(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.LIAOJIESI,["谁也不能阻止恶灵兽的重新崛起！你们是不可能成功激活火系圣像的。"],["哼，我们一定会打败你的！"],[function():void
         {
         }]);
      }
      
      private static function onMoYanXingXingClickBefore(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.MOYANXINGXING,["赛尔，0xff000010月12日 19:00-20:000xffffff，帮助我一起战胜里奥杰斯。我们必须激活精灵圣坛，找到末日救世主。"],["嗯，我一定会来的！"],[function():void
         {
         }]);
      }
      
      private static function onDoctorClickBefore(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.DOCTOR,["0xff000010月12日19:00-20:00, 13日—14日13:00-14:000xffffff，让我们齐心协力激活火系圣像。0xff000011月3日0xffffff，0xff0000预言石碎片0xffffff合成的0xff0000预言石0xffffff将发挥巨大的作用，一定要用心保管哦！"],["嗯，博士，我不会让你失望的！"],[function():void
         {
         }]);
      }
      
      private static function onLiAoJieSiClickAfter(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.LIAOJIESI,["谁也不能阻止恶灵兽的重新崛起！你们是不可能成功激活火系圣像的。"],["哼，我们一定会打败你的！"],[function():void
         {
         }]);
      }
      
      private static function onMoYanXingXingClickAfter(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.MOYANXINGXING,["虽然我暂时无法战胜里奥杰斯，但我不会放弃的。赛尔，明天0xff000013:00-14:000xffffff，我还会继续挑战里奥杰斯！"],["我一定会继续和你并肩作战的！"],[function():void
         {
         }]);
      }
      
      private static function onDoctorClickAfter(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.DOCTOR,["0xff000010月12日19:00-20:00, 13日—14日13:00-14:000xffffff，让我们齐心协力激活火系圣像。0xff000011月3日0xffffff，0xff0000预言石碎片0xffffff合成的0xff0000预言石0xffffff将发挥巨大的作用，一定要用心保管哦！"],["嗯，博士，我不会让你失望的！"],[function():void
         {
         }]);
      }
      
      private static function startActivity() : void
      {
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onCheckEndTime);
         hideNpcs();
         afterStory();
      }
      
      private static function afterStory() : void
      {
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onRefreshTime);
         onRefreshTime();
      }
      
      private static function onRefreshTime(param1:SocketEvent = null) : void
      {
         SocketConnection.addCmdListener(CommandID.FIRESTATUEAWAKE_CHECK_BOSS,onCheckBoss);
         SocketConnection.send(CommandID.FIRESTATUEAWAKE_CHECK_BOSS);
      }
      
      private static function onCheckBoss(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.FIRESTATUEAWAKE_CHECK_BOSS,onCheckBoss);
         _curDate = SystemTimerManager.sysDate;
         data = e.data as ByteArray;
         _map.depthLevel["stone"].visible = false;
         _map.btnLevel["fightBtn"].visible = false;
         _map.btnLevel["moYanXingXingBtn"].visible = false;
         _map.btnLevel["liAoJieSiBtn"].visible = false;
         _map.btnLevel["doctorBtn"].visible = true;
         _map.btnLevel["doctorBtn"].addEventListener(MouseEvent.CLICK,onDoctorDialog);
         _map.conLevel["act"].visible = true;
         CommonUI.removeYellowArrow(_map.topLevel);
         if(_curStep != Math.floor(_curDate.minutes / 5))
         {
            _curStep = Math.floor(_curDate.minutes / 5);
            _map.topLevel["countDown"].visible = false;
            _fightStatus = KTool.readDataByBits(data,16);
            if(_fightStatus[11] == 1)
            {
               finishAcitivty();
               return;
            }
            if(_fightStatus[_curStep] == 0)
            {
               _map.conLevel["act"].visible = true;
               MapNamePanel.show();
               if(_curStep % 2 == 0)
               {
                  _map.btnLevel["liAoJieSiBtn"].visible = false;
                  _map.btnLevel["moYanXingXingBtn"].visible = false;
                  if(_curStep != 0)
                  {
                     CommonUI.removeYellowArrow(_map.topLevel);
                     AnimateManager.playMcAnimate(_map.conLevel["act"],11,"mc",function():void
                     {
                        AnimateManager.playMcAnimate(_map.conLevel["act"],6,"mc",function():void
                        {
                           _map.btnLevel["moYanXingXingBtn"].visible = false;
                           _map.btnLevel["moYanXingXingBtn"].removeEventListener(MouseEvent.CLICK,onMoYanXingXingDialog);
                           _map.btnLevel["liAoJieSiBtn"].visible = true;
                           _map.btnLevel["liAoJieSiBtn"].addEventListener(MouseEvent.CLICK,onLiAoJieSiDialog);
                           _map.btnLevel["fightBtn"].visible = true;
                           _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onMoYanXingXingDialog);
                           _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onLiAoJieSiDialog);
                           _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onClickLiAoJieSi);
                           _map.btnLevel["fightBtn"].addEventListener(MouseEvent.CLICK,onClickMoYanXingXing);
                           CommonUI.removeYellowArrow(_map.topLevel);
                           CommonUI.addYellowArrow(_map.topLevel,408,371,315);
                        });
                     });
                  }
                  else
                  {
                     CommonUI.removeYellowArrow(_map.topLevel);
                     AnimateManager.playMcAnimate(_map.conLevel["act"],6,"mc",function():void
                     {
                        _map.btnLevel["moYanXingXingBtn"].visible = false;
                        _map.btnLevel["moYanXingXingBtn"].removeEventListener(MouseEvent.CLICK,onMoYanXingXingDialog);
                        _map.btnLevel["liAoJieSiBtn"].visible = true;
                        _map.btnLevel["liAoJieSiBtn"].addEventListener(MouseEvent.CLICK,onLiAoJieSiDialog);
                        _map.btnLevel["fightBtn"].visible = true;
                        _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onMoYanXingXingDialog);
                        _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onLiAoJieSiDialog);
                        _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onClickLiAoJieSi);
                        _map.btnLevel["fightBtn"].addEventListener(MouseEvent.CLICK,onClickMoYanXingXing);
                        CommonUI.removeYellowArrow(_map.topLevel);
                        CommonUI.addYellowArrow(_map.topLevel,408,371,315);
                     });
                  }
               }
               else
               {
                  _map.btnLevel["liAoJieSiBtn"].visible = false;
                  _map.btnLevel["moYanXingXingBtn"].visible = false;
                  CommonUI.removeYellowArrow(_map.topLevel);
                  AnimateManager.playMcAnimate(_map.conLevel["act"],8,"mc",function():void
                  {
                     AnimateManager.playMcAnimate(_map.conLevel["act"],9,"mc",function():void
                     {
                        _map.btnLevel["moYanXingXingBtn"].visible = true;
                        _map.btnLevel["moYanXingXingBtn"].addEventListener(MouseEvent.CLICK,onMoYanXingXingDialog);
                        _map.btnLevel["liAoJieSiBtn"].visible = false;
                        _map.btnLevel["liAoJieSiBtn"].removeEventListener(MouseEvent.CLICK,onLiAoJieSiDialog);
                        _map.btnLevel["fightBtn"].visible = true;
                        _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onMoYanXingXingDialog);
                        _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onLiAoJieSiDialog);
                        _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onClickMoYanXingXing);
                        _map.btnLevel["fightBtn"].addEventListener(MouseEvent.CLICK,onClickLiAoJieSi);
                        CommonUI.removeYellowArrow(_map.topLevel);
                        CommonUI.addYellowArrow(_map.topLevel,469,346,315);
                     });
                  });
               }
            }
            else
            {
               _map.conLevel["act"].visible = true;
               _map.topLevel["countDown"].visible = true;
               MapNamePanel.hide();
               _map.topLevel["countDown"]["timeText"].text = (5 - Math.floor(_curDate.minutes % 5)).toString();
               CommonUI.removeYellowArrow(_map.topLevel);
               if(_curStep % 2 == 0)
               {
                  _map.conLevel["act"].gotoAndStop(7);
                  _map.btnLevel["moYanXingXingBtn"].visible = false;
                  _map.btnLevel["moYanXingXingBtn"].removeEventListener(MouseEvent.CLICK,onMoYanXingXingDialog);
                  _map.btnLevel["liAoJieSiBtn"].visible = true;
                  _map.btnLevel["liAoJieSiBtn"].addEventListener(MouseEvent.CLICK,onLiAoJieSiDialog);
                  _map.btnLevel["fightBtn"].visible = true;
                  _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onClickMoYanXingXing);
                  _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onClickLiAoJieSi);
                  _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onLiAoJieSiDialog);
                  _map.btnLevel["fightBtn"].addEventListener(MouseEvent.CLICK,onMoYanXingXingDialog);
               }
               else
               {
                  _map.conLevel["act"].gotoAndStop(10);
                  _map.btnLevel["moYanXingXingBtn"].visible = true;
                  _map.btnLevel["moYanXingXingBtn"].addEventListener(MouseEvent.CLICK,onMoYanXingXingDialog);
                  _map.btnLevel["liAoJieSiBtn"].visible = false;
                  _map.btnLevel["liAoJieSiBtn"].removeEventListener(MouseEvent.CLICK,onLiAoJieSiDialog);
                  _map.btnLevel["fightBtn"].visible = true;
                  _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onClickMoYanXingXing);
                  _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onClickLiAoJieSi);
                  _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onMoYanXingXingDialog);
                  _map.btnLevel["fightBtn"].addEventListener(MouseEvent.CLICK,onLiAoJieSiDialog);
               }
            }
         }
         else
         {
            _curStep = Math.floor(_curDate.minutes / 5);
            _fightStatus = KTool.readDataByBits(data,16);
            if(_fightStatus[11] == 1)
            {
               finishAcitivty();
               return;
            }
            if(_fightStatus[_curStep] == 1)
            {
               _map.topLevel["countDown"].visible = true;
               MapNamePanel.hide();
               _map.topLevel["countDown"]["timeText"].text = (5 - Math.floor(_curDate.minutes % 5)).toString();
               CommonUI.removeYellowArrow(_map.topLevel);
               if(_curStep % 2 == 0)
               {
                  _map.conLevel["act"].gotoAndStop(7);
                  _map.btnLevel["moYanXingXingBtn"].visible = false;
                  _map.btnLevel["moYanXingXingBtn"].removeEventListener(MouseEvent.CLICK,onMoYanXingXingDialog);
                  _map.btnLevel["liAoJieSiBtn"].visible = true;
                  _map.btnLevel["liAoJieSiBtn"].addEventListener(MouseEvent.CLICK,onLiAoJieSiDialog);
                  _map.btnLevel["fightBtn"].visible = true;
                  _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onClickMoYanXingXing);
                  _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onClickLiAoJieSi);
                  _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onLiAoJieSiDialog);
                  _map.btnLevel["fightBtn"].addEventListener(MouseEvent.CLICK,onMoYanXingXingDialog);
               }
               else
               {
                  _map.conLevel["act"].gotoAndStop(10);
                  _map.btnLevel["moYanXingXingBtn"].visible = true;
                  _map.btnLevel["moYanXingXingBtn"].addEventListener(MouseEvent.CLICK,onMoYanXingXingDialog);
                  _map.btnLevel["liAoJieSiBtn"].visible = false;
                  _map.btnLevel["liAoJieSiBtn"].removeEventListener(MouseEvent.CLICK,onLiAoJieSiDialog);
                  _map.btnLevel["fightBtn"].visible = true;
                  _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onClickMoYanXingXing);
                  _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onClickLiAoJieSi);
                  _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onMoYanXingXingDialog);
                  _map.btnLevel["fightBtn"].addEventListener(MouseEvent.CLICK,onLiAoJieSiDialog);
               }
            }
            else if(_curStep % 2 == 0)
            {
               _map.conLevel["act"].gotoAndStop(7);
               _map.btnLevel["moYanXingXingBtn"].visible = false;
               _map.btnLevel["moYanXingXingBtn"].removeEventListener(MouseEvent.CLICK,onMoYanXingXingDialog);
               _map.btnLevel["liAoJieSiBtn"].visible = true;
               _map.btnLevel["liAoJieSiBtn"].addEventListener(MouseEvent.CLICK,onLiAoJieSiDialog);
               _map.btnLevel["fightBtn"].visible = true;
               _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onMoYanXingXingDialog);
               _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onLiAoJieSiDialog);
               _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onClickLiAoJieSi);
               _map.btnLevel["fightBtn"].addEventListener(MouseEvent.CLICK,onClickMoYanXingXing);
               CommonUI.removeYellowArrow(_map.topLevel);
               CommonUI.addYellowArrow(_map.topLevel,408,371,315);
            }
            else
            {
               _map.conLevel["act"].gotoAndStop(10);
               _map.btnLevel["moYanXingXingBtn"].visible = true;
               _map.btnLevel["moYanXingXingBtn"].addEventListener(MouseEvent.CLICK,onMoYanXingXingDialog);
               _map.btnLevel["liAoJieSiBtn"].visible = false;
               _map.btnLevel["liAoJieSiBtn"].removeEventListener(MouseEvent.CLICK,onLiAoJieSiDialog);
               _map.btnLevel["fightBtn"].visible = true;
               _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onMoYanXingXingDialog);
               _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onLiAoJieSiDialog);
               _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onClickMoYanXingXing);
               _map.btnLevel["fightBtn"].addEventListener(MouseEvent.CLICK,onClickLiAoJieSi);
               CommonUI.removeYellowArrow(_map.topLevel);
               CommonUI.addYellowArrow(_map.topLevel,469,346,315);
            }
         }
      }
      
      private static function onClickMoYanXingXing(param1:Event) : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         FightManager.fightWithBoss("魔焰猩猩",_curStep);
      }
      
      private static function onClickLiAoJieSi(param1:Event) : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         FightManager.fightWithBoss("里奥杰斯",_curStep);
      }
      
      private static function onMoYanXingXingDialog(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.MOYANXINGXING,["0xff0000每五分钟0xffffff，我都需要你帮我提升能力，或者帮我抵御里奥杰斯的攻击。"],["嗯，魔焰猩猩加油！"],[function():void
         {
         }]);
      }
      
      private static function onLiAoJieSiDialog(param1:MouseEvent) : void
      {
         NpcDialog.show(NPC.LIAOJIESI,["谁也不能阻止恶灵兽的重新崛起！你们是不可能成功激活火系圣像的！"],["哼，我们一定会打败你的！"],[]);
      }
      
      private static function onDoctorDialog(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.DOCTOR,["0xff000010月12日19:00-20:00, 13日—14日13:00-14:000xffffff，让我们齐心协力激活火系圣像。0xff000011月3日0xffffff，0xff0000预言石碎片0xffffff合成的0xff0000预言石0xffffff将发挥巨大的作用，一定要用心保管哦！"],["嗯，博士，我不会让你失望的！"],[function():void
         {
         }]);
      }
      
      private static function onCheckEndTime(param1:SocketEvent) : void
      {
         if(!InActiveTime)
         {
            finishAcitivty();
         }
      }
      
      private static function get InActiveTime() : Boolean
      {
         var _loc1_:Date = SystemTimerManager.sysDate;
         var _loc2_:Date = new Date(2012,9,12,19,0,0,0);
         var _loc3_:Date = new Date(2012,9,12,20,0,0,0);
         var _loc4_:Date = new Date(2012,9,13,13,0,0,0);
         var _loc5_:Date = new Date(2012,9,13,14,0,0,0);
         var _loc6_:Date = new Date(2012,9,14,13,0,0,0);
         var _loc7_:Date = new Date(2012,9,14,14,0,0,0);
         if(_loc1_.time >= _loc2_.time && _loc1_.time <= _loc3_.time)
         {
            return true;
         }
         if(_loc1_.time >= _loc4_.time && _loc1_.time <= _loc5_.time)
         {
            return true;
         }
         if(_loc1_.time >= _loc6_.time && _loc1_.time <= _loc7_.time)
         {
            return true;
         }
         return false;
      }
      
      private static function finishAcitivty() : void
      {
         var date:Date = null;
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckEndTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onRefreshTime);
         hideNpcs();
         _map.topLevel["countDown"].visible = false;
         _map.btnLevel["fightBtn"].visible = false;
         _map.btnLevel["moYanXingXingBtn"].visible = false;
         _map.btnLevel["liAoJieSiBtn"].visible = false;
         _map.btnLevel["doctorBtn"].visible = false;
         if(TasksManager.getTaskStatus(472) != TasksManager.COMPLETE)
         {
            date = SystemTimerManager.sysDate;
            if(date.date < 14)
            {
               AnimateManager.playMcAnimate(_map.conLevel["act"],12,"mc",function():void
               {
                  NpcDialog.show(NPC.MOYANXINGXING,["虽然我暂时无法战胜里奥杰斯，但我不会放弃的。赛尔，0xff0000明天13:00-14:000xffffff，我还会继续挑战里奥杰斯！"],["我一定会继续和你并肩作战的！"],[function():void
                  {
                     _map.conLevel["act"].visible = false;
                     _map.depthLevel["stone"].visible = true;
                     showNpcs(true);
                     TasksManager.complete(472,0);
                     TasksManager.taskList[472] = true;
                  }]);
               });
            }
            else
            {
               AnimateManager.playMcAnimate(_map.conLevel["act"],13,"mc",function():void
               {
                  NpcDialog.show(NPC.LIAOJIESI,["小子，虽然你我立场不同，但我欣赏你。万圣将军已经现身，我也没空与你再多做纠缠。改日再战！"],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(_map.conLevel["act"],14,"mc",function():void
                     {
                        NpcDialog.show(NPC.SEER,["里奥杰斯就这么走了？博士，那我们快点完成激活仪式吧！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.DOCTOR,["嗯，魔焰猩猩，接下来就看你的了！"],null,null,false,function():void
                           {
                              AnimateManager.playMcAnimate(_map.conLevel["act"],15,"mc",function():void
                              {
                                 NpcDialog.show(NPC.DOCTOR,["呼——火系圣像终于成功被激活了。赛尔，接下来，我们要找准时机，陆续激活水系和草系圣像。我先回赛尔号研究资料去了。谢谢你的帮助！"],["嘻嘻，这是我应该做的！"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(_map.conLevel["act"],16,"mc",function():void
                                    {
                                       NpcDialog.show(NPC.SEER,["哎呀差点忘了！博士，你还没告诉我融合精灵的奥秘呢？我该去哪里去融合出0xff0000魔焰猩猩0xffffff啊？"],["（前往实验室，找到融合转生仓）","我先准备准备。"],[function():void
                                       {
                                          _map.depthLevel["stone"].visible = false;
                                          _map.depthLevel["allStones"].visible = true;
                                          TasksManager.complete(472,0);
                                          TasksManager.taskList[472] = true;
                                          destroy();
                                          _addArrow = true;
                                          MapManager.changeMap(5);
                                       },function():void
                                       {
                                          _map.depthLevel["stone"].visible = false;
                                          _map.depthLevel["allStones"].visible = true;
                                          TasksManager.complete(472,0);
                                          TasksManager.taskList[472] = true;
                                          destroy();
                                       }]);
                                    });
                                 }]);
                              });
                           });
                        });
                     });
                  });
               });
            }
         }
      }
      
      public static function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckEndTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onRefreshTime);
         SocketConnection.removeCmdListener(CommandID.FIRESTATUEAWAKE_CHECK_BOSS,onCheckBoss);
         if(_map)
         {
            _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onClickMoYanXingXing);
            _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onClickLiAoJieSi);
            _map.btnLevel["moYanXingXingBtn"].removeEventListener(MouseEvent.CLICK,onMoYanXingXingDialog);
            _map.btnLevel["liAoJieSiBtn"].removeEventListener(MouseEvent.CLICK,onLiAoJieSiDialog);
            _map.btnLevel["doctorBtn"].removeEventListener(MouseEvent.CLICK,onDoctorDialog);
            _map.depthLevel["liaojiesi"].removeEventListener(MouseEvent.CLICK,onLiAoJieSiClickBefore);
            _map.depthLevel["liaojiesi"].removeEventListener(MouseEvent.CLICK,onLiAoJieSiClickAfter);
            _map.depthLevel["moyanxingxing"].removeEventListener(MouseEvent.CLICK,onMoYanXingXingClickBefore);
            _map.depthLevel["moyanxingxing"].removeEventListener(MouseEvent.CLICK,onMoYanXingXingClickAfter);
            _map.depthLevel["doctor"].removeEventListener(MouseEvent.CLICK,onDoctorClickBefore);
            _map.depthLevel["doctor"].removeEventListener(MouseEvent.CLICK,onDoctorClickAfter);
            DisplayUtil.removeForParent(_map.conLevel["act"]);
            DisplayUtil.removeForParent(_map.btnLevel["fightBtn"]);
            DisplayUtil.removeForParent(_map.btnLevel["moYanXingXingBtn"]);
            DisplayUtil.removeForParent(_map.btnLevel["liAoJieSiBtn"]);
            DisplayUtil.removeForParent(_map.btnLevel["doctorBtn"]);
            DisplayUtil.removeForParent(_map.depthLevel["liaojiesi"]);
            DisplayUtil.removeForParent(_map.depthLevel["moyanxingxing"]);
            DisplayUtil.removeForParent(_map.depthLevel["stone"]);
            DisplayUtil.removeForParent(_map.depthLevel["doctor"]);
            DisplayUtil.removeForParent(_map.topLevel["countDown"]);
            _map.typeLevel["blockArea"].visible = false;
            MapManager.currentMap.makeMapArray();
         }
         _map = null;
      }
   }
}
