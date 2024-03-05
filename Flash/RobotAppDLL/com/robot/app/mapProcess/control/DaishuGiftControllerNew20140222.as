package com.robot.app.mapProcess.control
{
   import com.robot.app.control.BroadcastController;
   import com.robot.app.ogre.OgreController;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.BroadcastInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
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
   import flash.utils.getDefinitionByName;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class DaishuGiftControllerNew20140222
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _date:Date;
      
      private static var _timer:Timer;
      
      private static var _hasGet:uint;
      
      public static var giftStatus:Array = [0,0,0,0,0,0,0];
      
      public static var _curStep:int;
      
      public static var panelInfo:Array;
      
      public static var _focusGift:uint;
      
      private static var giftInfo:BroadcastInfo;
      
      private static var daishuGiftTime1:CronTimeVo = new CronTimeVo("*","13","14","6","*","2014");
       
      
      public function DaishuGiftControllerNew20140222()
      {
         super();
      }
      
      private static function addMsg() : void
      {
         giftInfo = new BroadcastInfo();
         giftInfo.isLocal = true;
         giftInfo.map = 10;
         giftInfo.txt = "派拉比送大礼领奖时间到啦，快去克洛斯星看看吧";
      }
      
      public static function setup() : void
      {
         addMsg();
         SystemTimerManager.addTickFun(giftBroadcast);
      }
      
      private static function giftBroadcast() : void
      {
         var _loc1_:Date = SystemTimerManager.sysDate;
         if(daishuGiftTime1.isActive(SystemTimerManager.sysBJDate))
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
         if(daishuGiftTime1.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.PAST)
         {
            SystemTimerManager.removeTickFun(giftBroadcast);
         }
      }
      
      private static function hideOthers() : void
      {
         if(daishuGiftTime1.isActive(SystemTimerManager.sysDate))
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
      
      public static function initFor10(param1:BaseMapProcess) : void
      {
         var _loc2_:int = 0;
         _map = param1;
         if(daishuGiftTime1.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.INCOMING)
         {
            _map.conLevel["storyMC"].visible = true;
            _map.conLevel["storyMC"].buttonMode = true;
            if(BitBuffSetClass.getState(22411))
            {
               _map.conLevel["storyMC"].gotoAndStop(8);
               _map.conLevel["storyMC"].addEventListener(MouseEvent.CLICK,onClickJiang1);
            }
            onClickJiang1();
            _map.conLevel["boxes"].visible = false;
            _map.conLevel["machine"].visible = false;
            _map.conLevel["countDown"].visible = false;
         }
         else if(daishuGiftTime1.isActive(SystemTimerManager.sysBJDate))
         {
            PetWalkController.hideWalkPet();
            OgreController.isShow = false;
            if(!BitBuffSetClass.getState(22412))
            {
               _map.conLevel["storyMC"].visible = true;
               _map.conLevel["storyMC"].buttonMode = true;
               _map.conLevel["storyMC"].gotoAndStop(8);
               _map.conLevel["storyMC"].addEventListener(MouseEvent.CLICK,onClickJiang1);
               _map.conLevel["boxes"].visible = false;
               _map.conLevel["machine"].visible = false;
               _map.conLevel["countDown"].visible = false;
            }
            else
            {
               SocketConnection.send(1022,86067877);
               _map.conLevel["storyMC"].visible = true;
               _map.conLevel["storyMC"].buttonMode = true;
               _map.conLevel["storyMC"].gotoAndStop(7);
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
         else if(daishuGiftTime1.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.PAST)
         {
            DisplayUtil.removeForParent(_map.conLevel["machine"]);
            DisplayUtil.removeForParent(_map.conLevel["storyMC"]);
            DisplayUtil.removeForParent(_map.conLevel["boxes"]);
            DisplayUtil.removeForParent(_map.conLevel["countDown"]);
         }
      }
      
      private static function timeIn() : void
      {
         OgreController.isShow = false;
         _map.conLevel["machine"].visible = false;
         _map.conLevel["storyMC"].removeEventListener(MouseEvent.CLICK,onClickJiang1);
         getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(false);
         AnimateManager.playMcAnimate(_map.conLevel["storyMC"],4,"mc4",function():void
         {
            NpcDialog.show(NPC.PAILABI,["让大家久等了，这次米宝可是送来了不少好东西，都是钻石礼物，据说高达320钻石哦！"],["太好了，谢谢米宝！"],[function():void
            {
               NpcDialog.show(NPC.MIBAO,["大家太客气了，米宝也很高兴见到大家，这些礼物都是我精心挑选的，希望能够帮助到大家！"],["恩，这些礼物我们很喜欢！"],[function():void
               {
                  AnimateManager.playMcAnimate(_map.conLevel["storyMC"],5,"mc5",function():void
                  {
                     NpcDialog.show(NPC.PAILABI,["别急别急，我这就发放礼物哦！不过每次打开一个礼物盒后，需要 0xff0000等待5分钟0xffffff 的时间，才能再次打开下一个，你们能等吗？"],["可以的，我们会一直等的！"],[function():void
                     {
                        NpcDialog.show(NPC.PAILABI,["很好，先给你们看看里面的礼物是什么吧！别眨眼哦！"],["哇…快看看是什么！"],[function():void
                        {
                           AnimateManager.playMcAnimate(_map.conLevel["storyMC"],6,"mc6",function():void
                           {
                              NpcDialog.show(NPC.PAILABI,["现在开始每过0xff00005分钟0xffffff就可以任意挑选一个礼盒打开，坚持到 0xff000014:00，100%0xffffff可以获得0xff0000派拉比的精元0xffffff和0xff0000通用刻印激活水晶0xffffff哦！"],["哈哈，太好了！"],[function():void
                              {
                                 var _loc1_:* = undefined;
                                 getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(true);
                                 _map.conLevel["storyMC"].gotoAndStop(7);
                                 SocketConnection.send(1022,86067876);
                                 BitBuffSetClass.setState(22412,1);
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
                        }]);
                     }]);
                  });
               }]);
            }]);
         });
      }
      
      private static function onCheckGift(param1:SocketEvent) : void
      {
         var _loc4_:int = 0;
         var _loc5_:Date = null;
         var _loc6_:Date = null;
         var _loc7_:Date = null;
         SocketConnection.removeCmdListener(CommandID.MUMU_GIFT_CHECK,onCheckGift);
         _date = SystemTimerManager.sysBJDate;
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_hasGet == 1 && _loc3_ == 0)
         {
            _map.conLevel["storyMC"].gotoAndStop(9);
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
         _curStep = Math.floor(_date.minutes / 5);
         if(_date.minutes < 30)
         {
            _curStep = Math.floor(_date.minutes / 5);
         }
         else
         {
            _curStep = 6;
         }
         if(_hasGet == 1)
         {
            _loc6_ = SystemTimerManager.sysDate;
            _loc5_ = new Date(2014,_loc6_.month,_loc6_.date,13,(_curStep + 1) * 5,0,0);
            if(_curStep == 6)
            {
               _loc5_ = new Date(2014,_loc6_.month,_loc6_.date,14,0,0,0);
            }
            else
            {
               _loc5_ = new Date(2014,_loc6_.month,_loc6_.date,13,(_curStep + 1) * 5,0,0);
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
            if(_curStep == 6)
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
         EventManager.dispatchEvent(new Event("daishuGift_setState"));
      }
      
      private static function onFreshTime() : void
      {
         if(_map == null)
         {
            return;
         }
         _date = SystemTimerManager.sysBJDate;
         _map.conLevel["machine"].visible = true;
         if(_date.date == 31)
         {
            if(daishuGiftTime1.checkTimeHit(_date) == CronTimeVo.PAST)
            {
               SystemTimerManager.removeTickFun(onFreshTime);
               activityOver();
               return;
            }
         }
         if(_date.date == 1)
         {
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
         var _loc2_:Date = SystemTimerManager.sysDate;
         if(_curStep == 6)
         {
            _loc1_ = new Date(2014,_loc2_.month,_loc2_.date,14,0,0,0);
         }
         else
         {
            _loc1_ = new Date(2014,_loc2_.month,_loc2_.date,13,(_curStep + 1) * 5,0,0);
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
         NpcDialog.show(NPC.PAILABI,["现在开始每过0xff00005分钟0xffffff就可以任意挑选一个礼盒打开，坚持到 0xff000014:00，100%0xffffff可以获得0xff0000派拉比的精元0xffffff和0xff0000通用刻印激活水晶0xffffff哦！"],["哈哈，太好了！"],[]);
      }
      
      private static function onClickJiang2(param1:Event) : void
      {
         var e:Event = param1;
         NpcDialog.show(NPC.PAINUO,["为了庆祝赛尔号5周年，0xff0000派拉比将会在6月14日下午13:00—14:00准时派发礼物，每5分钟领取一次0xffffff，千万别错过哦！"],["放心吧！我一定将这些礼物全部拿走！"],[function():void
         {
            if(daishuGiftTime1.isActive(SystemTimerManager.sysBJDate))
            {
               _map.conLevel["storyMC"].removeEventListener(MouseEvent.CLICK,onClickJiang2);
               timeIn();
            }
         }]);
      }
      
      private static function onClickJiang1(param1:Event = null) : void
      {
         var mc:MovieClip = null;
         var e:Event = param1;
         hideOthers();
         _date = SystemTimerManager.sysBJDate;
         if(daishuGiftTime1.isActive(_date))
         {
            timeIn();
         }
         else
         {
            SocketConnection.send(1022,86067874);
            if(BitBuffSetClass.getState(22411))
            {
               NpcDialog.show(NPC.PAINUO,[MainManager.actorInfo.formatNick + ",为了庆祝赛尔号5周年庆典，" + "派拉比将会在6月14日下午13:00—14:00准时派发价值320钻石的礼物，每5分钟领取一次0xffffff，你也别错过哦！"],["放心吧！我一定将这些礼物全部拿走！"],[]);
            }
            else
            {
               MainManager.selfVisible = false;
               PetWalkController.hideWalkPet();
               mc = _map.conLevel["storyMC"];
               getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(false);
               AnimateManager.playMcAnimate(mc,1,"mc1",function():void
               {
                  NpcDialog.show(NPC.PAILABI,["亲爱的" + MainManager.actorInfo.formatNick + "我终于回来了，好久不见，你们想我了吗！"],["想！当然想了！"],[function():void
                  {
                     NpcDialog.show(NPC.PAINUO,["派拉比，听说最近赛尔号正在举办5周年庆典，我们也很去看看，那里一定会有很多礼物等待着我们的……"],["哈哈，没想到你们的消息还真灵通。"],[function():void
                     {
                        NpcDialog.show(NPC.PAILABI,["不过你们可别忘记，想要获得这些礼物，你们一定要付出代价的哦！我们绝不能不劳而获！"],["当然啦！我们已经准备好了！"],[function():void
                        {
                           NpcDialog.show(NPC.PAINUO,["我们一定会为了成为不断提升自己的实力，总有一天会成为这个世界的骄傲！维护宇宙和平的！"],["呵呵，真有志气！"],[function():void
                           {
                              NpcDialog.show(NPC.PAILABI,["既然这样，相信赛尔号5周年派对，飞船上一定是人山人海，我替你们去看看吧！相信一定会有很多收获的！"],["太好了！都有什么好东西？"],[function():void
                              {
                                 AnimateManager.playMcAnimate(mc,2,"mc2",function():void
                                 {
                                    NpcDialog.show(NPC.PAILABI,[MainManager.actorInfo.formatNick + "，你来的正好，替我照顾这些小家伙，我要去飞船上为这些小伙伴们赢得点礼物，去去就来，可以吗？"],["没问题，我很乐意！"],[function():void
                                    {
                                       NpcDialog.show(NPC.PAILABI,["我很快就会回来，0xff0000 6月14日下午13:00—14:00 0xffffff，我一定会回来派发礼物，千万别错过哦！"],["那你快去…我们在这里等你！"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(mc,3,"mc3",function():void
                                          {
                                             NpcDialog.show(NPC.SEER,["0xff0000 6月14日，下午13:00—14:00 0xffffff，就在克洛斯星，派拉比会免费发放价值高达320钻石的大礼哦！不要忘记了哦！"],["所有小赛尔你们记得来哦！"],[function():void
                                             {
                                                getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(true);
                                                SocketConnection.send(1022,86067875);
                                                BitBuffSetClass.setState(22411,1);
                                                MainManager.selfVisible = true;
                                                _map.conLevel["storyMC"].gotoAndStop(7);
                                                _map.conLevel["storyMC"].removeEventListener(MouseEvent.CLICK,onClickJiang1);
                                                _map.conLevel["storyMC"].addEventListener(MouseEvent.CLICK,onClickJiang2);
                                             }]);
                                          });
                                       }]);
                                    }]);
                                 });
                              }]);
                           }]);
                        }]);
                     }]);
                  }]);
               });
            }
         }
      }
      
      private static function onClickBox(param1:Event) : void
      {
         ModuleManager.showModule(ClientConfig.getFestivalModule("DaishuGiftPanel20140510"));
      }
      
      public static function onClickBoxInPanel(param1:uint) : void
      {
         _focusGift = param1;
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
      
      public static function getGift() : void
      {
         SocketConnection.addCmdListener(CommandID.MUMU_GET_GIFT,onGetGift);
         SocketConnection.send(CommandID.MUMU_GET_GIFT,_focusGift + 1);
      }
      
      private static function onGetGift(param1:SocketEvent) : void
      {
         var e:SocketEvent = param1;
         _map.conLevel["boxes"].mouseEnabled = false;
         _map.conLevel["boxes"].mouseChildren = false;
         giftStatus[_focusGift] = 2;
         _hasGet = 1;
         if(_map.conLevel["machine"].currentFrame != _map.conLevel["machine"].totalFrames - 1)
         {
            _map.conLevel["machine"].nextFrame();
         }
         AnimateManager.playMcAnimate(_map.conLevel["boxes"]["box" + _focusGift],_curStep + 2,"mc",function():void
         {
            _map.conLevel["boxes"]["box" + _focusGift].gotoAndStop(8);
            _map.conLevel["boxes"].mouseEnabled = true;
            _map.conLevel["boxes"].mouseChildren = true;
            _map.conLevel["storyMC"].gotoAndStop(7);
            if(giftStatus.indexOf(0) == -1)
            {
               EventManager.dispatchEvent(new Event("daishuGift_setState"));
               DisplayUtil.removeForParent(_map.conLevel["boxes"]);
               NpcDialog.show(NPC.KEERSI,[MainManager.actorInfo.formatNick + "很高兴能和你成为朋友，下次有缘再见了。还有很多其他小赛尔找我要礼物呢！"],["恩恩，多谢你的礼物！"],[function():void
               {
                  NpcDialog.show(NPC.KEERSI,["不客气，还有很多其他的精彩内容，记得去看哦！"],["嗯，我一定会的！"],[function():void
                  {
                     AnimateManager.playMcAnimate(_map.conLevel["storyMC"],8,"mc8",function():void
                     {
                        activityOver();
                     });
                  }]);
               }]);
            }
            else
            {
               NpcDialog.show(NPC.KEERSI,["哇，你真是太幸运了，相信这些礼物对你一定很有帮助，继续加油哦！"],["恩恩，认识你真是幸运了！"],[]);
               SocketConnection.addCmdListener(CommandID.MUMU_GIFT_CHECK,onCheckGift);
               SocketConnection.send(CommandID.MUMU_GIFT_CHECK);
            }
         });
      }
      
      private static function hasGetGift1() : void
      {
         NpcDialog.show(NPC.KEERSI,["现在开始每过0xff00005分钟0xffffff就可以任意挑选一个礼盒打开，坚持到最后百分百可以获得大礼哦！小赛尔，你可要坚持到最后啊！"],["哈哈！我一定不会错过的！"],[]);
      }
      
      private static function hasGetGift2() : void
      {
         NpcDialog.show(NPC.KEERSI,["别灰心哦！坚持下去，必定可以获得最后的大奖，好的永远在最后嘛！嘻嘻！"],["哇！是真的吗？那我可要期待一下了！"],[]);
      }
      
      private static function activityOver() : void
      {
         AnimateManager.playMcAnimate(_map.conLevel["machine"],8,"mc8",function():void
         {
            SocketConnection.send(1022,86067885);
            DisplayUtil.removeForParent(_map.conLevel["machine"]);
            DisplayUtil.removeForParent(_map.conLevel["storyMC"]);
            DisplayUtil.removeForParent(_map.conLevel["countDown"]);
            SystemTimerManager.removeTickFun(onFreshTime);
            SystemTimerManager.removeTickFun(onCountDown);
            hideOthers();
         });
      }
      
      public static function destroy() : void
      {
         SystemTimerManager.removeTickFun(onFreshTime);
         SystemTimerManager.removeTickFun(onCountDown);
         OgreController.isShow = true;
         hideOthers();
         _map.conLevel["storyMC"].removeEventListener(MouseEvent.CLICK,onClickJiang2);
         _map = null;
      }
   }
}
