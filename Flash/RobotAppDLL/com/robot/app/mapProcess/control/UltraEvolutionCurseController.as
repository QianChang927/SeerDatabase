package com.robot.app.mapProcess.control
{
   import com.robot.app.control.NewSeerGuideController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class UltraEvolutionCurseController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _curDate:Date;
      
      private static var _curStep:int = -1;
      
      private static var _fightStatus:Array;
      
      private static var _icon:MovieClip;
      
      private static var daishuGiftTime:CronTimeVo = new CronTimeVo("*","13","9-22","5","*","2014");
      
      private static var vscount:int;
       
      
      public function UltraEvolutionCurseController()
      {
         super();
      }
      
      public static function addMsgAndIcon() : void
      {
      }
      
      private static function onGetMsgTime(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onGetMsgTime);
         if(NewSeerGuideController.isNewSeer)
         {
            return;
         }
         _icon = UIManager.getMovieClip("vs_icon");
         _icon.x = 581;
         _icon.y = 3;
         _icon.addEventListener(MouseEvent.CLICK,onClickIcon);
         LevelManager.toolsLevel.addChild(_icon);
         ToolTipManager.add(_icon,"超进化魔咒");
         if(InActiveTime)
         {
            _icon.visible = true;
         }
         else
         {
            _icon.visible = false;
         }
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onIconTimer);
         onIconTimer();
      }
      
      private static function onIconTimer(param1:SocketEvent = null) : void
      {
         var _loc2_:Date = SystemTimerManager.sysBJDate;
         if(InActiveTime)
         {
            _icon.visible = true;
            vscount = Math.floor(_loc2_.minutes / 5) + 1;
            KTool.showScore(_icon["num"],vscount);
         }
         else
         {
            _icon.visible = false;
         }
      }
      
      private static function onClickIcon(param1:MouseEvent) : void
      {
         var _loc2_:* = null;
         if(MapManager.currentMap.id != 771)
         {
            StatManager.sendStat2014("布鲁卡卡A类复用","点击活动icon前往活动场景",StatManager.RUN_ACT);
         }
         else
         {
            _loc2_ = "点击第" + vscount + "轮icon";
            StatManager.sendStat2014("布鲁卡卡A类复用",_loc2_,StatManager.RUN_ACT);
         }
         MapManager.changeMap(771);
      }
      
      public static function initForMap666(param1:BaseMapProcess) : void
      {
         _map = param1;
         if(Boolean(BufferRecordManager.getState(MainManager.actorInfo,1137)) && !BufferRecordManager.getState(MainManager.actorInfo,1138))
         {
            finishActivtyFor666();
         }
         else
         {
            destroy();
         }
      }
      
      public static function initForMap771(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.topLevel["countDown"].visible = false;
         _map.btnLevel["gelusiteBtn"].visible = false;
         _map.btnLevel["bulukakaBtn"].visible = false;
         _map.btnLevel["bulinkekeBtn"].visible = false;
         var _loc2_:Date = SystemTimerManager.sysBJDate;
         if(!InActiveTime)
         {
            if(!BufferRecordManager.getState(MainManager.actorInfo,1135))
            {
               hideNpcs();
               CommonUI.addYellowExcal(_map.topLevel,434,385);
               _map.conLevel["act"].addEventListener(MouseEvent.CLICK,actTask);
            }
            else if(_loc2_.time <= new Date(2014,4,9,13,0,0,0).time)
            {
               showNpcs(false);
            }
            else
            {
               showNpcs(true);
            }
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
         }
         else
         {
            startActivity();
         }
      }
      
      private static function actTask(param1:MouseEvent) : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 56
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
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
         _map.conLevel["act"].visible = false;
         _map.conLevel["act"].buttonMode = false;
         _map.depthLevel["bulukaka"].visible = true;
         _map.depthLevel["bulukaka"].buttonMode = true;
         if(!param1)
         {
            _map.depthLevel["bulukaka"].addEventListener(MouseEvent.CLICK,onBuLuKaKaClickBefore);
         }
         else
         {
            _map.depthLevel["bulukaka"].addEventListener(MouseEvent.CLICK,onBuLuKaKaClickAfter);
         }
         _map.depthLevel["gelusite"].visible = true;
         _map.depthLevel["gelusite"].buttonMode = true;
         if(!param1)
         {
            _map.depthLevel["gelusite"].addEventListener(MouseEvent.CLICK,onGeLuSiTeClickBefore);
         }
         else
         {
            _map.depthLevel["gelusite"].addEventListener(MouseEvent.CLICK,onGeLuSiTeClickAfter);
         }
         _map.depthLevel["bulinkeke"].visible = true;
         _map.depthLevel["bulinkeke"].buttonMode = true;
         if(!param1)
         {
            _map.depthLevel["bulinkeke"].addEventListener(MouseEvent.CLICK,onBuLinKeKeClickBefore);
         }
         else
         {
            _map.depthLevel["bulinkeke"].addEventListener(MouseEvent.CLICK,onBuLinKeKeClickAfter);
         }
      }
      
      private static function hideNpcs() : void
      {
         _map.conLevel["act"].visible = true;
         _map.conLevel["act"].buttonMode = true;
         _map.depthLevel["bulukaka"].visible = false;
         _map.depthLevel["bulukaka"].buttonMode = false;
         _map.depthLevel["bulukaka"].removeEventListener(MouseEvent.CLICK,onBuLuKaKaClickBefore);
         _map.depthLevel["bulukaka"].removeEventListener(MouseEvent.CLICK,onBuLuKaKaClickAfter);
         _map.depthLevel["gelusite"].visible = false;
         _map.depthLevel["gelusite"].buttonMode = false;
         _map.depthLevel["gelusite"].removeEventListener(MouseEvent.CLICK,onGeLuSiTeClickBefore);
         _map.depthLevel["gelusite"].removeEventListener(MouseEvent.CLICK,onGeLuSiTeClickAfter);
         _map.depthLevel["bulinkeke"].visible = false;
         _map.depthLevel["bulinkeke"].buttonMode = false;
         _map.depthLevel["bulinkeke"].removeEventListener(MouseEvent.CLICK,onBuLinKeKeClickBefore);
         _map.depthLevel["bulinkeke"].removeEventListener(MouseEvent.CLICK,onBuLinKeKeClickAfter);
      }
      
      private static function onBuLuKaKaClickBefore(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         SocketConnection.send(46133,1);
         NpcDialog.show(NPC.BULUKAKA,["赛尔，我不想失去格林！0xff00005月9日13:00-14:000xffffff，帮助我，一起唤回格林的理智！"],["嗯嗯，我一定会来的！"],[function():void
         {
         }]);
      }
      
      private static function onGeLuSiTeClickBefore(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         SocketConnection.send(46133,1);
         NpcDialog.show(NPC.GELUSITE,["哈哈！我觉得体内充满了能量！那个自称是我朋友的家伙到底是谁？它要挑战我？0xff00005月9日13:00-14:000xffffff，哈哈，我正好试试自己全新的能量！"],["格林，快醒过来吧！"],[function():void
         {
         }]);
      }
      
      private static function onBuLinKeKeClickBefore(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         SocketConnection.send(46133,1);
         NpcDialog.show(NPC.BULINKEKE,["有意思，有意思！什么友情？还不是不堪一击！赛尔，0xff00005月9日13:00-14:000xffffff，一场好朋友之间的厮杀即将上演，太期待了！"],["哼，你的阴谋不会得逞的！"],[function():void
         {
         }]);
      }
      
      private static function onBuLuKaKaClickAfter(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         SocketConnection.send(46133,1);
         NpcDialog.show(NPC.BULUKAKA,["我是不会放弃的！赛尔，0xff00005月9日—5月22日13:00-14:000xffffff，我会与格鲁斯特对战，你愿意继续帮我吗？"],["当然，我还会来帮助你的！"],[function():void
         {
         }]);
      }
      
      private static function onGeLuSiTeClickAfter(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         SocketConnection.send(46133,1);
         NpcDialog.show(NPC.GELUSITE,["那个自称是我朋友的家伙还要继续挑战我？0xff00005月9日—5月22日13:00-14:000xffffff，我奉陪到底！"],["格林，快醒过来吧！"],[function():void
         {
         }]);
      }
      
      private static function onBuLinKeKeClickAfter(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         SocketConnection.send(46133,1);
         NpcDialog.show(NPC.BULINKEKE,["有意思，有意思！什么友情？还不是不堪一击！赛尔，0xff00005月9日—5月22日13:00-14:000xffffff，它们还要继续厮杀，一起看好戏吧！"],["哼，你的阴谋不会得逞的！"],[function():void
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
         SocketConnection.addCmdListener(CommandID.ULTRAEVOLUTION_CHECK_BOSS,onCheckBoss);
         SocketConnection.send(CommandID.ULTRAEVOLUTION_CHECK_BOSS);
      }
      
      private static function onCheckBoss(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.ULTRAEVOLUTION_CHECK_BOSS,onCheckBoss);
         _curDate = SystemTimerManager.sysBJDate;
         data = e.data as ByteArray;
         _map.btnLevel["fightBtn"].visible = false;
         _map.conLevel["act"].visible = true;
         if(_curStep != Math.floor(_curDate.minutes / 5))
         {
            _curStep = Math.floor(_curDate.minutes / 5);
            _map.topLevel["countDown"].visible = false;
            _fightStatus = KTool.readDataByBits(data,32);
            if(_fightStatus[11] == 1)
            {
               finishActivtyFor771();
               return;
            }
            if(_fightStatus[_curStep] == 0)
            {
               _map.conLevel["act"].visible = true;
               if(_curStep % 2 == 0)
               {
                  if(_curStep == 0)
                  {
                     AnimateManager.playMcAnimate(_map.conLevel["act"],10,"mc",function():void
                     {
                        showNpcsDialog(0,true);
                        _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onClickBuLuKaKa);
                        _map.btnLevel["fightBtn"].addEventListener(MouseEvent.CLICK,onClickGeLuSiTe);
                     });
                  }
                  else
                  {
                     AnimateManager.playMcAnimate(_map.conLevel["act"],12,"mc",function():void
                     {
                        AnimateManager.playMcAnimate(_map.conLevel["act"],10,"mc",function():void
                        {
                           showNpcsDialog(0,true);
                           _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onClickBuLuKaKa);
                           _map.btnLevel["fightBtn"].addEventListener(MouseEvent.CLICK,onClickGeLuSiTe);
                        });
                     });
                  }
               }
               else
               {
                  AnimateManager.playMcAnimate(_map.conLevel["act"],9,"mc",function():void
                  {
                     AnimateManager.playMcAnimate(_map.conLevel["act"],13,"mc",function():void
                     {
                        showNpcsDialog(1,true);
                        CommonUI.removeYellowArrow(_map.topLevel);
                        _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onClickGeLuSiTe);
                        _map.btnLevel["fightBtn"].addEventListener(MouseEvent.CLICK,onClickBuLuKaKa);
                     });
                  });
               }
            }
            else
            {
               _map.conLevel["act"].visible = true;
               _map.topLevel["countDown"].visible = true;
               MapNamePanel.hide();
               _map.topLevel["countDown"]["timeText"].text = (5 - _curDate.minutes % 5).toString();
               if(_curStep % 2 == 0)
               {
                  showNpcsDialog(0,false);
                  _map.conLevel["act"].gotoAndStop(8);
               }
               else
               {
                  showNpcsDialog(1,false);
                  _map.conLevel["act"].gotoAndStop(11);
               }
            }
         }
         else
         {
            _curStep = Math.floor(_curDate.minutes / 5);
            _fightStatus = KTool.readDataByBits(data,32);
            if(_fightStatus[11] == 1)
            {
               finishActivtyFor771();
               return;
            }
            if(_fightStatus[_curStep] == 1)
            {
               _map.topLevel["countDown"].visible = true;
               MapNamePanel.hide();
               _map.topLevel["countDown"]["timeText"].text = (5 - _curDate.minutes % 5).toString();
               if(_curStep % 2 == 0)
               {
                  showNpcsDialog(0,false);
                  _map.conLevel["act"].gotoAndStop(8);
               }
               else
               {
                  showNpcsDialog(1,false);
                  _map.conLevel["act"].gotoAndStop(11);
               }
            }
            else if(_curStep % 2 == 0)
            {
               showNpcsDialog(0,true);
               _map.conLevel["act"].gotoAndStop(8);
               _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onClickBuLuKaKa);
               _map.btnLevel["fightBtn"].addEventListener(MouseEvent.CLICK,onClickGeLuSiTe);
            }
            else
            {
               showNpcsDialog(1,true);
               _map.conLevel["act"].gotoAndStop(11);
               _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onClickGeLuSiTe);
               _map.btnLevel["fightBtn"].addEventListener(MouseEvent.CLICK,onClickBuLuKaKa);
            }
         }
      }
      
      private static function onClickGeLuSiTe(param1:MouseEvent) : void
      {
         SocketConnection.send(46133,1);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFinishFight2);
         FightManager.fightWithBoss("格鲁斯特",_curStep);
      }
      
      private static function onClickBuLuKaKa(param1:MouseEvent) : void
      {
         SocketConnection.send(46133,1);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFinishFight1);
         FightManager.fightWithBoss("布鲁卡卡",_curStep);
      }
      
      private static function onFinishFight1(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFinishFight1);
         if(_curDate.minutes >= 55)
         {
            return;
         }
         _map.btnLevel["fightBtn"].visible = true;
         _map.btnLevel["fightBtn"].addEventListener(MouseEvent.CLICK,onBuLuKaKaDialog);
      }
      
      private static function onFinishFight2(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFinishFight2);
         _map.btnLevel["fightBtn"].visible = true;
         _map.btnLevel["fightBtn"].addEventListener(MouseEvent.CLICK,onGeLuSiTeDialog);
      }
      
      private static function onBuLuKaKaDialog(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.BULUKAKA,["0xff0000每五分钟0xffffff，就可以帮助我提升能力，或者帮助我打败格鲁斯特，唤回曾经的格林，赛尔，我需要你的帮助。"],["嗯，我们一起加油！"],[function():void
         {
         }]);
      }
      
      private static function onGeLuSiTeDialog(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.GELUSITE,["这个自称是我朋友的家伙到底是谁？如此不自量力，竟敢前来挑战！"],["格林，快醒过来吧！"],[function():void
         {
         }]);
      }
      
      private static function onBuLinKeKeDialog(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.BULINKEKE,["想要找回那个善良的格林？除非你们能打落它身上的0xff0000海蓝之心碎片0xffffff。看着这对挚友相互厮杀，真是太有趣了，哈哈！"],["我和布鲁不会让你的阴谋得逞的！"],[function():void
         {
         }]);
      }
      
      private static function showNpcsDialog(param1:uint = 0, param2:Boolean = false) : void
      {
         _map.btnLevel["bulinkekeBtn"].visible = true;
         _map.btnLevel["bulinkekeBtn"].addEventListener(MouseEvent.CLICK,onBuLinKeKeDialog);
         if(param1 == 0)
         {
            _map.btnLevel["bulukakaBtn"].visible = true;
            _map.btnLevel["bulukakaBtn"].addEventListener(MouseEvent.CLICK,onBuLuKaKaDialog);
            _map.btnLevel["gelusiteBtn"].visible = false;
            _map.btnLevel["gelusiteBtn"].removeEventListener(MouseEvent.CLICK,onGeLuSiTeDialog);
            if(param2)
            {
               _map.btnLevel["fightBtn"].visible = true;
               _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onGeLuSiTeDialog);
               _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onBuLuKaKaDialog);
            }
            else
            {
               _map.btnLevel["fightBtn"].visible = true;
               _map.btnLevel["fightBtn"].addEventListener(MouseEvent.CLICK,onGeLuSiTeDialog);
            }
         }
         else
         {
            _map.btnLevel["gelusiteBtn"].visible = true;
            _map.btnLevel["gelusiteBtn"].addEventListener(MouseEvent.CLICK,onGeLuSiTeDialog);
            _map.btnLevel["bulukakaBtn"].visible = false;
            _map.btnLevel["bulukakaBtn"].removeEventListener(MouseEvent.CLICK,onBuLuKaKaDialog);
            if(param2)
            {
               _map.btnLevel["fightBtn"].visible = true;
               _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onGeLuSiTeDialog);
               _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onBuLuKaKaDialog);
            }
            else
            {
               _map.btnLevel["fightBtn"].visible = true;
               _map.btnLevel["fightBtn"].addEventListener(MouseEvent.CLICK,onBuLuKaKaDialog);
            }
         }
      }
      
      private static function hideNpcsDialog() : void
      {
         _map.btnLevel["gelusiteBtn"].visible = false;
         _map.btnLevel["gelusiteBtn"].removeEventListener(MouseEvent.CLICK,onGeLuSiTeDialog);
         _map.btnLevel["bulukakaBtn"].visible = false;
         _map.btnLevel["bulukakaBtn"].removeEventListener(MouseEvent.CLICK,onBuLuKaKaDialog);
         _map.btnLevel["fightBtn"].visible = false;
         _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onGeLuSiTeDialog);
         _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onBuLuKaKaDialog);
      }
      
      private static function onCheckEndTime(param1:SocketEvent) : void
      {
         if(!InActiveTime)
         {
            finishActivtyFor771();
         }
      }
      
      private static function get InActiveTime() : Boolean
      {
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         return daishuGiftTime.isActive(_loc1_);
      }
      
      private static function finishActivtyFor666() : void
      {
         _map.conLevel["act"].visible = true;
         AnimateManager.playMcAnimate(_map.conLevel["act"],1,"mc",function():void
         {
            NpcDialog.show(NPC.BULU,["(*^__^*) 嘻嘻...没什么啦，只要你没事就好！太好了，我们可以继续我们的旅行了！"],["哇，你们俩又要开始旅行了吗？"],[function():void
            {
               NpcDialog.show(NPC.GELIN,["对啊对啊，下一站我们要去魔神星，赛尔，谢谢你这段时间的帮助，我们走啦！"],["好啊好啊，再见...我会想你们的。"],[function():void
               {
                  AnimateManager.playMcAnimate(_map.conLevel["act"],2,"mc",function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active20120914_2"),function():void
                     {
                        BufferRecordManager.setState(MainManager.actorInfo,1138,true);
                        destroy();
                     });
                  });
               }]);
            }]);
         });
      }
      
      private static function finishActivtyFor771() : void
      {
         var date:Date;
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckEndTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onRefreshTime);
         hideNpcs();
         _map.topLevel["countDown"].visible = false;
         _map.btnLevel["fightBtn"].visible = false;
         _map.btnLevel["gelusiteBtn"].visible = false;
         _map.btnLevel["bulukakaBtn"].visible = false;
         _map.btnLevel["bulinkekeBtn"].visible = false;
         date = SystemTimerManager.sysBJDate;
         if(date.date < 22)
         {
            if(!BufferRecordManager.getState(MainManager.actorInfo,1136))
            {
               AnimateManager.playMcAnimate(_map.conLevel["act"],14,"mc",function():void
               {
                  NpcDialog.show(NPC.BULINKEKE,["小家伙，你已经受伤了。还是放弃吧，就让你这个朋友，随我一起追随海妖大人吧！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.BULUKAKA,["我是不会放弃的！赛尔，0xff00005月9日—5月22日13:00-14:000xffffff，我会继续与格鲁斯特对战，你愿意继续帮我吗？"],["当然，我还会来帮助你的！"],[function():void
                     {
                        BufferRecordManager.setState(MainManager.actorInfo,1136,true);
                        showNpcs(true);
                     }]);
                  });
               });
            }
            else
            {
               showNpcs(true);
            }
         }
         else if(!BufferRecordManager.getState(MainManager.actorInfo,1137))
         {
            AnimateManager.playMcAnimate(_map.conLevel["act"],15,"mc",function():void
            {
               NpcDialog.show(NPC.BULINKEKE,["怎么可能？海妖赐予的超进化魔咒是无人能破的！就凭你们这两个小不点...怎么可能？"],["你永远不懂，友谊和爱的力量！"],[function():void
               {
                  NpcDialog.show(NPC.BULINKEKE,["幻境入口降临到裂空星系后，出现各种异常...即便如此，海妖大人是不会食言的，我还是会送你们安全离开这里。"],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(_map.conLevel["act"],16,"mc",function():void
                     {
                        BufferRecordManager.setState(MainManager.actorInfo,1137,true);
                        MapManager.changeMap(666);
                     });
                  });
               }]);
            });
         }
         else
         {
            destroy();
         }
      }
      
      public static function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckEndTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onRefreshTime);
         SocketConnection.removeCmdListener(CommandID.ULTRAEVOLUTION_CHECK_BOSS,onCheckBoss);
         if(_map)
         {
            if(MapManager.currentMap.id == 666)
            {
               DisplayUtil.removeForParent(_map.conLevel["act"]);
            }
            else if(MapManager.currentMap.id == 771)
            {
               _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onClickGeLuSiTe);
               _map.btnLevel["fightBtn"].removeEventListener(MouseEvent.CLICK,onClickBuLuKaKa);
               _map.btnLevel["gelusiteBtn"].removeEventListener(MouseEvent.CLICK,onGeLuSiTeDialog);
               _map.btnLevel["bulukakaBtn"].removeEventListener(MouseEvent.CLICK,onBuLuKaKaDialog);
               _map.btnLevel["bulinkekeBtn"].removeEventListener(MouseEvent.CLICK,onBuLinKeKeDialog);
               _map.depthLevel["bulukaka"].removeEventListener(MouseEvent.CLICK,onBuLuKaKaClickBefore);
               _map.depthLevel["bulukaka"].removeEventListener(MouseEvent.CLICK,onBuLuKaKaClickAfter);
               _map.depthLevel["gelusite"].removeEventListener(MouseEvent.CLICK,onGeLuSiTeClickBefore);
               _map.depthLevel["gelusite"].removeEventListener(MouseEvent.CLICK,onGeLuSiTeClickAfter);
               _map.depthLevel["bulinkeke"].removeEventListener(MouseEvent.CLICK,onBuLinKeKeClickBefore);
               _map.depthLevel["bulinkeke"].removeEventListener(MouseEvent.CLICK,onBuLinKeKeClickAfter);
               DisplayUtil.removeForParent(_map.conLevel["act"]);
               DisplayUtil.removeForParent(_map.btnLevel["fightBtn"]);
               DisplayUtil.removeForParent(_map.btnLevel["gelusiteBtn"]);
               DisplayUtil.removeForParent(_map.btnLevel["bulukakaBtn"]);
               DisplayUtil.removeForParent(_map.btnLevel["bulinkekeBtn"]);
               DisplayUtil.removeForParent(_map.depthLevel["bulukaka"]);
               DisplayUtil.removeForParent(_map.depthLevel["gelusite"]);
               DisplayUtil.removeForParent(_map.depthLevel["bulinkeke"]);
               DisplayUtil.removeForParent(_map.topLevel["countDown"]);
            }
            _map = null;
         }
      }
   }
}
