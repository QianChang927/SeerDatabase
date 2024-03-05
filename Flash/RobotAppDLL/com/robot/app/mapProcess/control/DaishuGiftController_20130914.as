package com.robot.app.mapProcess.control
{
   import com.robot.app.control.BroadcastController;
   import com.robot.app.ogre.OgreController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.info.BroadcastInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.pet.PetWalkController;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.Timer;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class DaishuGiftController_20130914
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _date:Date;
      
      private static var _date1:Date;
      
      private static var _date2:Date;
      
      private static var _timer:Timer;
      
      private static var _hasGet:uint;
      
      public static var giftStatus:Array = [0,0,0,0,0,0];
      
      private static var _curStep:int;
      
      public static var panelInfo:Array;
      
      private static var _focusGift:uint;
      
      private static var giftInfo:BroadcastInfo;
      
      private static var daishuGiftTime:CronTimeVo;
       
      
      public function DaishuGiftController_20130914()
      {
         super();
      }
      
      private static function addMsg() : void
      {
         giftInfo = new BroadcastInfo();
         giftInfo.isLocal = true;
         giftInfo.map = 739;
         giftInfo.txt = "凯米拉送大礼领奖时间到啦，快去幻海遗城看看吧";
      }
      
      public static function setup() : void
      {
         daishuGiftTime = new CronTimeVo("*","14","14","9","*","*");
         addMsg();
         SystemTimerManager.addTickFun(giftBroadcast);
      }
      
      private static function giftBroadcast() : void
      {
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         var _loc2_:Date = new Date(2013,8,14,14,0,0,0);
         var _loc3_:Date = new Date(2013,8,14,15,0,0,0);
         if(_loc1_.time >= _loc2_.time && _loc1_.time < _loc3_.time)
         {
            if(_loc1_.minutes % 5 == 0)
            {
               if(_loc1_.seconds == 0)
               {
                  if(giftInfo != null)
                  {
                     BroadcastController.addBroadcast(giftInfo);
                  }
               }
            }
         }
         if(_loc1_.time > _loc3_.time)
         {
            SystemTimerManager.removeTickFun(giftBroadcast);
         }
      }
      
      private static function hideOthers() : void
      {
         if(daishuGiftTime.isActive(SystemTimerManager.sysBJDate))
         {
            if(_map.conLevel["board"])
            {
               _map.conLevel["board"].visible = false;
            }
         }
         else if(_map.conLevel["board"])
         {
            _map.conLevel["board"].visible = true;
         }
      }
      
      public static function initFor739(param1:BaseMapProcess) : void
      {
         var _loc2_:int = 0;
         _map = param1;
         _date = SystemTimerManager.sysBJDate;
         _date1 = new Date(2013,8,14,14,0,0,0);
         _date2 = new Date(2013,8,14,15,0,0,0);
         if(_date.time < _date1.time)
         {
            _map.conLevel["storyMC"].visible = true;
            _map.conLevel["storyMC"].buttonMode = true;
            if(BufferRecordManager.getState(MainManager.actorInfo,818))
            {
               _map.conLevel["storyMC"].gotoAndStop(1);
            }
            _map.conLevel["storyMC"].addEventListener(MouseEvent.CLICK,onClickJiang1);
            _map.conLevel["boxes"].visible = false;
            _map.conLevel["machine"].visible = false;
            _map.conLevel["countDown"].visible = false;
         }
         else if(_date.time >= _date1.time && _date.time < _date2.time)
         {
            PetWalkController.hideWalkPet();
            OgreController.isShow = false;
            if(!BufferRecordManager.getState(MainManager.actorInfo,819))
            {
               _map.conLevel["storyMC"].visible = true;
               _map.conLevel["storyMC"].buttonMode = true;
               _map.conLevel["storyMC"].gotoAndStop(6);
               _map.conLevel["storyMC"].addEventListener(MouseEvent.CLICK,onClickJiang1);
               _map.conLevel["boxes"].visible = false;
               _map.conLevel["machine"].visible = false;
               _map.conLevel["countDown"].visible = false;
            }
            else
            {
               SocketConnection.send(1022,86059934);
               _map.conLevel["storyMC"].visible = true;
               _map.conLevel["storyMC"].buttonMode = true;
               _map.conLevel["storyMC"].gotoAndStop(6);
               _map.conLevel["storyMC"].addEventListener(MouseEvent.CLICK,onClickAct1);
               _map.conLevel["boxes"].visible = true;
               _map.conLevel["machine"].visible = true;
               _map.conLevel["countDown"].visible = true;
               SystemTimerManager.addTickFun(onFreshTime);
               _loc2_ = 0;
               while(_loc2_ < 6)
               {
                  _map.conLevel["boxes"]["box" + _loc2_].addEventListener(MouseEvent.CLICK,onClickBox);
                  _map.conLevel["boxes"]["box" + _loc2_].buttonMode = true;
                  _loc2_++;
               }
               SocketConnection.addCmdListener(CommandID.MUMU_GIFT_CHECK,onCheckGift);
               SocketConnection.send(CommandID.MUMU_GIFT_CHECK);
            }
         }
         else if(_date.time >= _date2.time)
         {
            DisplayUtil.removeForParent(_map.conLevel["machine"]);
            DisplayUtil.removeForParent(_map.conLevel["storyMC"]);
            DisplayUtil.removeForParent(_map.conLevel["boxes"]);
            DisplayUtil.removeForParent(_map.conLevel["countDown"]);
         }
         SystemTimerManager.addTickFun(hidekaimila);
      }
      
      private static function hidekaimila() : void
      {
         if(daishuGiftTime.checkTimeHit(SystemTimerManager.sysBJDate) != CronTimeVo.PAST)
         {
            (_map.conLevel["kaimila"] as MovieClip).visible = false;
         }
      }
      
      private static function timeIn() : void
      {
         OgreController.isShow = false;
         _map.conLevel["machine"].visible = false;
         _map.conLevel["storyMC"].removeEventListener(MouseEvent.CLICK,onClickJiang1);
         NpcDialog.show(NPC.SEER,["凯米拉，你不是说9月14日本周六 14:00-15:00有大礼送的吗？我来啦！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.KAIMILA,["哈，赛尔，你真守信用！既然你来了，我是不会让你空手而归的！看我施法！"],null,null,false,function():void
            {
               AnimateManager.playMcAnimate(_map.conLevel["storyMC"],6,"mc6",function():void
               {
                  NpcDialog.show(NPC.KAIMILA,["现在开始每过5分钟就可以任意挑选一个礼盒打开，坚持到15:00百分百可以获得我的精元和通用刻印激活水晶哦！"],["哈哈"],[function():void
                  {
                     var _loc1_:* = undefined;
                     _map.conLevel["storyMC"].gotoAndStop(7);
                     SocketConnection.send(1022,86059933);
                     BufferRecordManager.setState(MainManager.actorInfo,819,true);
                     _loc1_ = 0;
                     while(_loc1_ < 6)
                     {
                        _map.conLevel["boxes"]["box" + _loc1_].addEventListener(MouseEvent.CLICK,onClickBox);
                        _map.conLevel["boxes"]["box" + _loc1_].buttonMode = true;
                        _loc1_++;
                     }
                     _map.conLevel["boxes"].visible = true;
                     SystemTimerManager.addTickFun(onFreshTime);
                     SocketConnection.addCmdListener(CommandID.MUMU_GIFT_CHECK,onCheckGift);
                     SocketConnection.send(CommandID.MUMU_GIFT_CHECK);
                  }]);
               });
            });
         });
      }
      
      private static function onCheckGift(param1:SocketEvent) : void
      {
         var _loc4_:int = 0;
         var _loc5_:Date = null;
         var _loc6_:Date = null;
         var _loc7_:Date = null;
         SocketConnection.removeCmdListener(CommandID.MUMU_GIFT_CHECK,onCheckGift);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_hasGet == 1 && _loc3_ == 0)
         {
            _map.conLevel["storyMC"].gotoAndStop(7);
         }
         _hasGet = _loc3_;
         giftStatus = [0,0,0,0,0,0];
         _loc4_ = 0;
         while(_loc4_ < 6)
         {
            giftStatus[_loc4_] = _loc2_.readUnsignedInt();
            if(giftStatus[_loc4_] != 0)
            {
               _map.conLevel["boxes"]["box" + _loc4_].gotoAndStop(8);
            }
            else
            {
               _map.conLevel["boxes"]["box" + _loc4_].gotoAndStop(1);
            }
            _loc4_++;
         }
         if(_date.minutes < 25)
         {
            _curStep = Math.floor(_date.minutes / 5);
         }
         else
         {
            _curStep = 5;
         }
         if(_hasGet == 1)
         {
            _loc6_ = SystemTimerManager.sysBJDate;
            if(_curStep == 5)
            {
               _loc5_ = new Date(2013,8,14,15,0,0,0);
            }
            else
            {
               _loc5_ = new Date(2013,8,14,14,(_curStep + 1) * 5,0,0);
            }
            _loc7_ = new Date(_loc5_.time - _loc6_.time);
            _map.conLevel["countDown"].visible = true;
            _map.conLevel["countDown"]["txt"].text = (_loc7_.minutes < 10 ? "0" + _loc7_.minutes.toString() : _loc7_.minutes.toString()) + ":" + (_loc7_.seconds < 10 ? "0" + _loc7_.seconds.toString() : _loc7_.seconds.toString());
            SystemTimerManager.addTickFun(onCountDown);
         }
         else
         {
            _map.conLevel["countDown"].visible = false;
         }
         if(_hasGet)
         {
            if(_curStep == 5)
            {
               DisplayUtil.removeForParent(_map.conLevel["machine"]);
               DisplayUtil.removeForParent(_map.conLevel["storyMC"]);
               DisplayUtil.removeForParent(_map.conLevel["boxes"]);
               DisplayUtil.removeForParent(_map.conLevel["countDown"]);
               SystemTimerManager.removeTickFun(onFreshTime);
               SystemTimerManager.removeTickFun(onCountDown);
            }
            else
            {
               _map.conLevel["machine"].gotoAndStop(_curStep + 2);
            }
         }
         else
         {
            _map.conLevel["machine"].gotoAndStop(_curStep + 1);
         }
      }
      
      private static function onFreshTime() : void
      {
         if(_map == null)
         {
            return;
         }
         _date = SystemTimerManager.sysBJDate;
         _map.conLevel["machine"].visible = true;
         if(_date.time >= _date2.time)
         {
            SystemTimerManager.removeTickFun(onFreshTime);
            activityOver();
            return;
         }
         if(_date.seconds == 0)
         {
            SocketConnection.addCmdListener(CommandID.MUMU_GIFT_CHECK,onCheckGift);
            SocketConnection.send(CommandID.MUMU_GIFT_CHECK);
         }
      }
      
      private static function onCountDown() : void
      {
         var _loc1_:Date = null;
         var _loc3_:Date = null;
         var _loc2_:Date = SystemTimerManager.sysBJDate;
         if(_curStep == 5)
         {
            _loc1_ = new Date(2013,8,14,15,0,0,0);
         }
         else
         {
            _loc1_ = new Date(2013,8,14,14,(_curStep + 1) * 5,0,0);
         }
         _loc3_ = new Date(_loc1_.time - _loc2_.time);
         if(_map == null)
         {
            return;
         }
         _map.conLevel["countDown"].visible = true;
         _map.conLevel["countDown"]["txt"].text = (_loc3_.minutes < 10 ? "0" + _loc3_.minutes.toString() : _loc3_.minutes.toString()) + ":" + (_loc3_.seconds < 10 ? "0" + _loc3_.seconds.toString() : _loc3_.seconds.toString());
         panelInfo = [_loc3_.minutes,_loc3_.seconds];
         if(_loc3_.minutes == 0 && _loc3_.seconds == 0)
         {
            SystemTimerManager.removeTickFun(onCountDown);
            _map.conLevel["countDown"].visible = false;
            _map.conLevel["storyMC"].gotoAndStop(7);
            panelInfo = null;
         }
      }
      
      private static function onClickAct1(param1:Event) : void
      {
         NpcDialog.show(NPC.KAIMILA,["现在开始每过5分钟就可以任意挑选一个礼盒打开，坚持到0xff000015:000xffffff百分百可以获得我的精元和通用刻印激活水晶哦！"],["哈哈！"],[]);
      }
      
      private static function onClickJiang2(param1:Event) : void
      {
         var e:Event = param1;
         _date = SystemTimerManager.sysBJDate;
         NpcDialog.show(NPC.KAIMILA,[MainManager.actorInfo.nick + ",凯米拉将会在0xff00009月14日14:00 0xffffff准时派发礼物，每5分钟领取一次，你也别错过哦！"],["放心吧！我一定将这些礼物全部拿走！"],[function():void
         {
            if(_date.time >= _date1.time)
            {
               _map.conLevel["storyMC"].removeEventListener(MouseEvent.CLICK,onClickJiang2);
               timeIn();
            }
         }]);
      }
      
      private static function onClickJiang1(param1:Event) : void
      {
         var mc:MovieClip = null;
         var e:Event = param1;
         hideOthers();
         _date = SystemTimerManager.sysBJDate;
         if(_date.time >= _date1.time)
         {
            timeIn();
         }
         else if(BufferRecordManager.getState(MainManager.actorInfo,818))
         {
            NpcDialog.show(NPC.KAIMILA,[MainManager.actorInfo.nick + "为了庆祝起航1500天的到来，凯米拉将会在0xff00009月14日14:00 0xffffff准时派发礼物，每5分钟领取一次，你也别错过哦！"],["放心吧！我一定将这些礼物全部拿走！"],[]);
         }
         else
         {
            SocketConnection.send(1022,86059931);
            MainManager.selfVisible = false;
            PetWalkController.hideWalkPet();
            mc = _map.conLevel["storyMC"];
            AnimateManager.playMcAnimate(mc,2,"mc2",function():void
            {
               NpcDialog.show(NPC.MUMU,["嘻嘻，小赛尔，你又来幻海遗城看我的老朋友啊！"],["凯米拉是你的朋友？"],[function():void
               {
                  NpcDialog.show(NPC.MUMU,["那当然了！你不会连这个都不知道吧？我们可有1000年的交情了呢！"],["哇！这么久！"],[function():void
                  {
                     NpcDialog.show(NPC.MUMU,["凯米拉为粽之一族守护上古封印，长年沉睡，只有当封印受到威胁的时候才会苏醒！"],["这样啊！好可惜，我很想认识它一下啊！"],[function():void
                     {
                        NpcDialog.show(NPC.MUMU,["我也很想和它叙叙旧，呵呵，不要灰心！等到9月14日，咱俩的梦想就可以实现啦！"],["咦，9月14日？"],[function():void
                        {
                           AnimateManager.playMcAnimate(mc,3,"mc3",function():void
                           {
                              NpcDialog.show(NPC.ZOG,["俗话说的好，明枪易躲暗箭难防，凯米拉总是在睡觉，就不信偷袭永远不能成功！"],["就是！"],[function():void
                              {
                                 NpcDialog.show(NPC.ALLISON,["俗话还说的好，双拳难敌四手，俗话还说，趁他病要他命……"],["你到底是想表达什么啊？"],[function():void
                                 {
                                    NpcDialog.show(NPC.ALLISON,["反正，勿以恶小而不为！这是我们海盗的原则！"],null,null,false,function():void
                                    {
                                       NpcDialog.show(NPC.ZOG,["不错，雷伊盖亚打不过，难道还打不过一个睡觉的家伙！佐格，我们上！"],null,null,false,function():void
                                       {
                                          AnimateManager.playMcAnimate(mc,4,"mc4",function():void
                                          {
                                             NpcDialog.show(NPC.ZOG,["⊙﹏⊙b这么强？哼，别得意，要不是我今天早上忘了给关节上油……"],["你就别找借口了！"],[function():void
                                             {
                                                NpcDialog.show(NPC.ALLISON,["他们联手好厉害，不能力敌，只可智取！我突然想到一个计策！"],["什么计策？！"],[function():void
                                                {
                                                   AnimateManager.playMcAnimate(mc,5,"mc5",function():void
                                                   {
                                                      NpcDialog.show(NPC.KAIMILA,["哈哈！木木，这位小朋友很勇敢啊！我很喜欢！这样吧！ 0xff00009月14日，下午14:00—15:00 0xffffff，我会准备一些礼物送给你，算是对你嘉奖！"],["好呀好呀，我一定来！"],[function():void
                                                      {
                                                         SocketConnection.send(1022,86059932);
                                                         BufferRecordManager.setState(MainManager.actorInfo,818,true);
                                                         MainManager.selfVisible = true;
                                                         _map.conLevel["storyMC"].gotoAndStop(1);
                                                         _map.conLevel["storyMC"].removeEventListener(MouseEvent.CLICK,onClickJiang1);
                                                         _map.conLevel["storyMC"].addEventListener(MouseEvent.CLICK,onClickJiang2);
                                                      }]);
                                                   });
                                                }]);
                                             }]);
                                          });
                                       });
                                    });
                                 }]);
                              }]);
                           });
                        }]);
                     }]);
                  }]);
               }]);
            });
         }
      }
      
      private static function onClickBox(param1:Event) : void
      {
         DebugTrace.show(param1.currentTarget.name.slice(3));
         _focusGift = uint(param1.currentTarget.name.slice(3));
         if(_map.conLevel["boxes"]["box" + _focusGift].currentFrame == 1 && giftStatus[_focusGift] == 0 && !_hasGet)
         {
            getGift();
         }
         else if(_map.conLevel["boxes"]["box" + _focusGift].currentFrame == 1 && giftStatus[_focusGift] == 0 && Boolean(_hasGet))
         {
            hasGetGift1();
         }
         else if(_map.conLevel["boxes"]["box" + _focusGift].currentFrame > 1)
         {
            hasGetGift2();
         }
      }
      
      private static function getGift() : void
      {
         DebugTrace.show("成功领取礼盒！");
         SocketConnection.addCmdListener(CommandID.MUMU_GET_GIFT,onGetGift);
         SocketConnection.send(CommandID.MUMU_GET_GIFT,_focusGift + 1);
      }
      
      private static function onGetGift(param1:Event) : void
      {
         var e:Event = param1;
         _map.conLevel["boxes"].mouseEnabled = false;
         _map.conLevel["boxes"].mouseChildren = false;
         giftStatus[_focusGift] = 2;
         _hasGet = 1;
         if(_map.conLevel["machine"].currentFrame != _map.conLevel["machine"].totalFrames - 1)
         {
            _map.conLevel["machine"].nextFrame();
         }
         NpcDialog.show(NPC.KAIMILA,["哇，你真是太幸运了，相信这些礼物对你一定很有帮助，继续加油哦！"],["恩恩，认识你真是幸运了！"],[]);
         AnimateManager.playMcAnimate(_map.conLevel["boxes"]["box" + _focusGift],_curStep + 2,"mc",function():void
         {
            _map.conLevel["boxes"]["box" + _focusGift].gotoAndStop(8);
            _map.conLevel["boxes"].mouseEnabled = true;
            _map.conLevel["boxes"].mouseChildren = true;
            _map.conLevel["storyMC"].gotoAndStop(7);
            if(giftStatus.indexOf(0) == -1)
            {
               DisplayUtil.removeForParent(_map.conLevel["boxes"]);
               AnimateManager.playMcAnimate(_map.conLevel["storyMC"],8,"mc8",function():void
               {
                  activityOver();
               });
            }
            else
            {
               SocketConnection.addCmdListener(CommandID.MUMU_GIFT_CHECK,onCheckGift);
               SocketConnection.send(CommandID.MUMU_GIFT_CHECK);
            }
         });
      }
      
      private static function hasGetGift1() : void
      {
         NpcDialog.show(NPC.KAIMILA,["现在开始每过5分钟就可以任意挑选一个礼盒打开，坚持到0xff000015:000xffffff百分百可以获得大礼哦！小赛尔，你可要坚持到最后啊！"],["哈哈！我一定不会错过的！"],[]);
      }
      
      private static function hasGetGift2() : void
      {
         NpcDialog.show(NPC.KAIMILA,["别灰心哦！坚持到15:00，必定可以获得最后的大奖，好的永远在最后嘛！嘻嘻！"],["哇！是真的吗？那我可要期待一下了！"],[]);
      }
      
      private static function activityOver() : void
      {
         AnimateManager.playMcAnimate(_map.conLevel["machine"],7,"mc7",function():void
         {
            SocketConnection.send(1022,86059942);
            DisplayUtil.removeForParent(_map.conLevel["machine"]);
            DisplayUtil.removeForParent(_map.conLevel["storyMC"]);
            DisplayUtil.removeForParent(_map.conLevel["countDown"]);
            SystemTimerManager.removeTickFun(onFreshTime);
            SystemTimerManager.removeTickFun(onCountDown);
            SystemTimerManager.removeTickFun(hidekaimila);
            (_map.conLevel["kaimila"] as MovieClip).visible = true;
            hideOthers();
         });
      }
      
      public static function destroy() : void
      {
         SystemTimerManager.removeTickFun(hidekaimila);
         SystemTimerManager.removeTickFun(onFreshTime);
         SystemTimerManager.removeTickFun(onCountDown);
         OgreController.isShow = true;
         hideOthers();
         _map.conLevel["storyMC"].removeEventListener(MouseEvent.CLICK,onClickJiang2);
         _map = null;
      }
   }
}
