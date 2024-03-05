package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.MouseController;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.media.Sound;
   import flash.media.SoundChannel;
   import flash.utils.Timer;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.manager.EventManager;
   
   public class Task531
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _time:uint;
      
      private static var _date:Date;
      
      private static var _isActiveTime:Boolean;
      
      private static var _intervalTimer:Timer;
      
      private static const _intervalTm:uint = 10 * 60 * 1000;
      
      public static const ACTIVE_HOUR:uint = 100;
      
      private static var _petMc:MovieClip;
      
      private static var _mBtnsMc:MovieClip;
      
      private static var mAniMc:MovieClip;
      
      private static var mBtnMc:MovieClip;
      
      private static var rndNum:uint = 0;
      
      private static var chooseNum:uint = 0;
      
      private static var ansCount:uint = 0;
      
      private static var isFight:Boolean = false;
      
      private static var endFight:Boolean = false;
      
      private static var unGroundChannel:SoundChannel;
      
      private static var unGroundSound:Sound;
      
      private static var _arrowmc:MovieClip;
      
      private static var _timeOut:uint;
      
      private static var rndArr:Array;
      
      private static var chooseArr:Array;
       
      
      public function Task531()
      {
         super();
      }
      
      public static function initTaskForMap327(param1:BaseMapProcess) : void
      {
         _map = param1;
         _petMc = _map.conLevel["petMc"];
         _mBtnsMc = _map.conLevel["mBtnsMc"];
         _arrowmc = _map.conLevel["arrowmc"];
         _arrowmc.visible = false;
         (_petMc["pet0"] as MovieClip).visible = false;
         (_petMc["pet1"] as MovieClip).visible = false;
         (_petMc["pet2"] as MovieClip).visible = false;
         (_petMc["pet3"] as MovieClip).visible = false;
         (_petMc["pet00"] as MovieClip).visible = false;
         (_petMc["pet01"] as MovieClip).visible = false;
         (_petMc["pet02"] as MovieClip).visible = false;
         (_petMc["pet03"] as MovieClip).visible = false;
         _mBtnsMc.visible = false;
         var _loc2_:int = 0;
         while(_loc2_ < 6)
         {
            mAniMc = _map.conLevel["mAni" + _loc2_] as MovieClip;
            mAniMc.visible = false;
            mBtnMc = _mBtnsMc["mbtn" + _loc2_] as MovieClip;
            mBtnMc.buttonMode = true;
            _loc2_++;
         }
         _time = MainManager.actorInfo.sysTime;
         _date = new Date();
         _date.setTime(_time * 1000);
         var _loc3_:uint = _date.dateUTC;
         switch(_loc3_)
         {
            case 12:
            case 13:
            case 14:
               var _loc4_:uint;
               if((_loc4_ = _date.getUTCHours() + 8) == Task531.ACTIVE_HOUR)
               {
                  _isActiveTime = true;
               }
               else
               {
                  _isActiveTime = false;
               }
               if(_intervalTimer == null)
               {
                  _intervalTimer = new Timer(_intervalTm);
                  _intervalTimer.addEventListener(TimerEvent.TIMER,onShowInterval);
                  _intervalTimer.start();
               }
               initMapHandler();
               return;
            default:
               return;
         }
      }
      
      private static function onShowInterval(param1:TimerEvent) : void
      {
         var evt:TimerEvent = param1;
         SystemTimerManager.getSysTime(function(param1:uint):void
         {
            _date.setTime(param1 * 1000);
            var _loc2_:uint = _date.getUTCHours() + 8;
            if(_loc2_ == Task531.ACTIVE_HOUR)
            {
               _isActiveTime = true;
            }
            else
            {
               _isActiveTime = false;
            }
            initMapHandler();
         });
      }
      
      private static function initMapHandler() : void
      {
         var status:uint = 0;
         if(_isActiveTime)
         {
            status = uint(TasksManager.getTaskStatus(531));
            if(status == TasksManager.UN_ACCEPT)
            {
               TasksManager.accept(531,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     startPro0();
                  }
               });
            }
            else if(status != TasksManager.COMPLETE)
            {
               if(status == TasksManager.ALR_ACCEPT)
               {
                  ToolBarController.showOrHideAllUser(false);
                  OgreController.isShow = false;
                  TasksManager.getProStatusList(531,function(param1:Array):void
                  {
                     if(!param1[0])
                     {
                        startPro0();
                     }
                     else if(Boolean(param1[0]) && !param1[1])
                     {
                        startPro1();
                     }
                     else if(Boolean(param1[1]) && !param1[2])
                     {
                        startPro2();
                     }
                     else if(Boolean(param1[2]) && !param1[3])
                     {
                        startPro3();
                     }
                     else if(Boolean(param1[3]) && !param1[4])
                     {
                        startPro4();
                     }
                     else if(Boolean(param1[4]) && !param1[5])
                     {
                        startPro5();
                     }
                     else if(Boolean(param1[5]) && !param1[6])
                     {
                        startPro6();
                     }
                  });
               }
            }
         }
      }
      
      private static function startPro0() : void
      {
         ToolBarController.showOrHideAllUser(false);
         OgreController.isShow = false;
         (_petMc["pet0"] as MovieClip).visible = true;
         MouseController.removeMouseEvent();
         AnimateManager.playMcAnimate(_petMc["pet0"],0,"",function():void
         {
            MouseController.addMouseEvent();
            (_petMc["pet0"] as MovieClip).visible = false;
            (_petMc["pet00"] as MovieClip).visible = true;
            (_petMc["pet00"] as MovieClip).buttonMode = true;
            (_petMc["pet00"] as MovieClip).addEventListener(MouseEvent.CLICK,onClickHandler0);
         });
      }
      
      private static function onClickHandler0(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         (_petMc["pet00"] as MovieClip).removeEventListener(MouseEvent.CLICK,onClickHandler0);
         NpcDialog.show(NPC.BALUOKA,["是谁?竟然打断了我的演奏，真讨厌！"],["对不起，我想说你的音乐真的很棒，我可喜欢了"],[function():void
         {
            NpcDialog.show(NPC.BALUOKA,["是嘛？看来你是我的粉丝嘛！不过我还是要考考你，看你能不能找到正确的音乐元素喽。"],["好啊，我已经迫不及待了"],[function():void
            {
               initGameOne();
            }]);
         }]);
      }
      
      private static function initGameOne() : void
      {
         unGroundSound = MapManager.currentMap.libManager.getSound("UnGroundguitar");
         unGroundChannel = unGroundSound.play(0,int.MAX_VALUE);
         var _loc1_:int = 0;
         while(_loc1_ < 6)
         {
            mAniMc = _map.conLevel["mAni" + _loc1_] as MovieClip;
            mAniMc.visible = false;
            mBtnMc = _mBtnsMc["mbtn" + _loc1_] as MovieClip;
            mBtnMc.buttonMode = true;
            mBtnMc.mouseChildren = false;
            _loc1_++;
         }
         _mBtnsMc.visible = true;
         ansCount = 0;
         randomGame();
      }
      
      private static function randomGame() : void
      {
         var _i:int = 0;
         while(_i < 6)
         {
            mAniMc = _map.conLevel["mAni" + _i] as MovieClip;
            mAniMc.visible = false;
            _i++;
         }
         rndNum = int(Math.random() * 6);
         mAniMc = _map.conLevel["mAni" + rndNum] as MovieClip;
         mAniMc.visible = true;
         AnimateManager.playMcAnimate(mAniMc,2,"ani",function():void
         {
            _mBtnsMc.addEventListener(MouseEvent.CLICK,onClickBtnMc);
            _timeOut = setTimeout(function():void
            {
               _mBtnsMc["mbtn" + rndNum].gotoAndPlay(3);
               clearTimeout(_timeOut);
            },5000);
         });
      }
      
      private static function onClickBtnMc(param1:MouseEvent) : void
      {
         _mBtnsMc.removeEventListener(MouseEvent.CLICK,onClickBtnMc);
         (param1.target as MovieClip).addEventListener(Event.ENTER_FRAME,onEnterFrame);
         (param1.target as MovieClip).gotoAndStop(2);
      }
      
      private static function onEnterFrame(param1:Event) : void
      {
         var e:Event = param1;
         var _mc:MovieClip = e.currentTarget as MovieClip;
         if(_mc.currentFrame != 2)
         {
            return;
         }
         (e.target as MovieClip).removeEventListener(Event.ENTER_FRAME,onEnterFrame);
         AnimateManager.playMcAnimate(e.target as MovieClip,2,"ani",function():void
         {
            var str:String = String(e.target.name);
            chooseNum = uint(str.substr(4,1));
            if(chooseNum == rndNum)
            {
               clearTimeout(_timeOut);
               AnimateManager.playMcAnimate(mAniMc,1,"ani",function():void
               {
                  ++ansCount;
                  if(ansCount == 3)
                  {
                     _mBtnsMc.visible = false;
                     unGroundChannel.stop();
                     unGroundChannel = null;
                     TasksManager.getProStatusList(531,function(param1:Array):void
                     {
                        var arr:Array = param1;
                        if(!arr[0])
                        {
                           NpcDialog.show(NPC.BALUOKA,["不错嘛，看来你在音乐这方面还是很有天赋的，好好努力吧！"],["哇，好厉害，我终于学会了，好棒哦！"],[function():void
                           {
                              TasksManager.complete(531,0,function(param1:Boolean):void
                              {
                                 if(param1)
                                 {
                                    startPro1();
                                 }
                              });
                           }]);
                        }
                        else if(Boolean(arr[0]) && !arr[1])
                        {
                           NpcDialog.show(NPC.PAGENINI,["太棒了，你是我看过演奏贝司中最好的，继续加油哦！"],["真的吗？我太荣幸了，嘿嘿！"],[function():void
                           {
                              TasksManager.complete(531,1,function(param1:Boolean):void
                              {
                                 if(param1)
                                 {
                                    startPro2();
                                 }
                              });
                           }]);
                        }
                     });
                  }
                  else
                  {
                     randomGame();
                  }
               });
            }
            else
            {
               _mBtnsMc.addEventListener(MouseEvent.CLICK,onClickBtnMc);
            }
         });
      }
      
      private static function startPro1() : void
      {
         (_petMc["pet00"] as MovieClip).visible = true;
         (_petMc["pet1"] as MovieClip).visible = true;
         MouseController.removeMouseEvent();
         AnimateManager.playMcAnimate(_petMc["pet1"],0,"",function():void
         {
            MouseController.addMouseEvent();
            (_petMc["pet1"] as MovieClip).visible = false;
            (_petMc["pet01"] as MovieClip).visible = true;
            (_petMc["pet01"] as MovieClip).buttonMode = true;
            NpcDialog.show(NPC.PAGENINI,["哼，难道你忘了还有我吗？我的贝司才是最美妙的音乐！"],["咦？帕格尼尼你怎么来啦？"],[function():void
            {
               NpcDialog.show(NPC.PAGENINI,["那当然，音乐盛会怎么能少了我这个音乐天才呢？小赛尔你还是学我的吧！我的音乐才是最好的"],["好啊！我先试试吧！"],[function():void
               {
                  initGameTwo();
               }]);
            }]);
         });
      }
      
      private static function initGameTwo() : void
      {
         unGroundSound = MapManager.currentMap.libManager.getSound("UnGroundBass");
         unGroundChannel = unGroundSound.play(0,int.MAX_VALUE);
         var _loc1_:int = 0;
         while(_loc1_ < 6)
         {
            mAniMc = _map.conLevel["mAni" + _loc1_] as MovieClip;
            mAniMc.visible = false;
            mBtnMc = _mBtnsMc["mbtn" + _loc1_] as MovieClip;
            mBtnMc.buttonMode = true;
            mBtnMc.mouseChildren = false;
            _loc1_++;
         }
         _mBtnsMc.visible = true;
         ansCount = 0;
         randomGame();
      }
      
      private static function startPro2() : void
      {
         (_petMc["pet00"] as MovieClip).visible = true;
         (_petMc["pet01"] as MovieClip).visible = true;
         (_petMc["pet2"] as MovieClip).visible = true;
         MouseController.removeMouseEvent();
         AnimateManager.playMcAnimate(_petMc["pet2"],0,"",function():void
         {
            MouseController.addMouseEvent();
            (_petMc["pet2"] as MovieClip).visible = false;
            (_petMc["pet02"] as MovieClip).visible = true;
            NpcDialog.show(NPC.YIYASI,["咦？你们都到啦，好久不见哦，你们想我吗？"],["哇塞，摇滚三人组全都到齐了，它们难道想……."],[function():void
            {
               NpcDialog.show(NPC.PAGENINI,["你终于来了，我们都能很久了，还和巴洛卡研究音乐呢？"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.BALUOKA,["是啊，你怎么才来，我都等的有点着急了！我们摇滚三人组又再次团聚了。"],["哼哼哼……..（一个陌生的声音）"],[function():void
                  {
                     TasksManager.complete(531,2,function(param1:Boolean):void
                     {
                        if(param1)
                        {
                           startPro3();
                        }
                     });
                  }]);
               });
            }]);
         });
      }
      
      private static function startPro3() : void
      {
         (_petMc["pet00"] as MovieClip).visible = true;
         (_petMc["pet01"] as MovieClip).visible = true;
         (_petMc["pet02"] as MovieClip).visible = true;
         (_petMc["pet3"] as MovieClip).visible = true;
         MouseController.removeMouseEvent();
         AnimateManager.playMcAnimate(_petMc["pet3"],0,"",function():void
         {
            MouseController.addMouseEvent();
            (_petMc["pet3"] as MovieClip).visible = false;
            (_petMc["pet03"] as MovieClip).visible = true;
            NpcDialog.show(NPC.YIYASI,["哇，好棒的歌声，我从来没有听过如此动听的声音，你能加入我们吗？"],["是啊，你如果能加入它们的话，不就变成摇滚四人组了吗？"],[function():void
            {
               NpcDialog.show(NPC.YIYASI,["等等，摇滚三人组，摇滚四人组，这样我们的又多了一重音乐元素了，赶紧加入我们吧！"],["竟然让我看到这样的场面，太激动了！"],[function():void
               {
                  NpcDialog.show(NPC.WUSUODA,["要我加入你们？哼哼，哪有这么简单，你们的音乐能与我的歌声溶为一体吗？"],["没关系，我们可以尝试先合作一下，你看怎么样？"],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["是啊？先合作一下嘛，看看你们的默契如何，相信一定会很精彩的！"],["继续"],[function():void
                     {
                        TasksManager.complete(531,3,function(param1:Boolean):void
                        {
                           if(param1)
                           {
                              startPro4();
                           }
                        });
                     }]);
                  }]);
               }]);
            }]);
         });
      }
      
      private static function startPro4() : void
      {
         (_petMc["pet00"] as MovieClip).visible = true;
         (_petMc["pet01"] as MovieClip).visible = true;
         (_petMc["pet02"] as MovieClip).visible = true;
         (_petMc["pet03"] as MovieClip).visible = true;
         unGroundSound = MapManager.currentMap.libManager.getSound("UnGroundAll");
         unGroundChannel = unGroundSound.play(0,int.MAX_VALUE);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_531_1"),function():void
         {
            unGroundChannel.stop();
            unGroundChannel = null;
            NpcDialog.show(NPC.SEER,["太精彩了，你们第一次合作就能演奏出这样的音乐，称你们为摇滚四人组太适合不过了！"],["对了，乌索达我能成为你的好朋友吗？"],[function():void
            {
               NpcDialog.show(NPC.WUSUODA,["可以啊，不过我也要试试你对音乐有多了解，如果你能通过这次的考验，那我就答应你！怎么样，你敢接受考验吗？"],["当然愿意，我相信一定可以通过的！"],[function():void
               {
                  initGameThree();
               }]);
            }]);
         });
      }
      
      private static function initGameThree() : void
      {
         var _ii:int;
         var _inum:int;
         var _i:int;
         if(unGroundChannel)
         {
            unGroundChannel.stop();
            unGroundChannel = null;
         }
         unGroundSound = MapManager.currentMap.libManager.getSound("UnGroundAll");
         unGroundChannel = unGroundSound.play(0,int.MAX_VALUE);
         _ii = 0;
         while(_ii < 6)
         {
            mAniMc = _map.conLevel["mAni" + _ii] as MovieClip;
            mAniMc.visible = false;
            _ii++;
         }
         rndArr = new Array();
         chooseArr = new Array();
         chooseArr[0] = false;
         rndArr = RandomArray(6);
         _inum = 0;
         while(_inum < 4)
         {
            chooseArr[_inum] = false;
            mAniMc = _map.conLevel["mAni" + rndArr[_inum]] as MovieClip;
            mAniMc.gotoAndStop(1);
            mAniMc.visible = true;
            _inum++;
         }
         _i = 0;
         while(_i < 6)
         {
            mBtnMc = _mBtnsMc["mbtn" + _i] as MovieClip;
            mBtnMc.buttonMode = true;
            mBtnMc.mouseChildren = false;
            _i++;
         }
         _mBtnsMc.visible = true;
         mAniMc = _map.conLevel["mAni" + rndArr[0]] as MovieClip;
         AnimateManager.playMcAnimate(mAniMc,2,"ani",function():void
         {
            mAniMc = _map.conLevel["mAni" + rndArr[1]] as MovieClip;
            AnimateManager.playMcAnimate(mAniMc,2,"ani",function():void
            {
               mAniMc = _map.conLevel["mAni" + rndArr[2]] as MovieClip;
               AnimateManager.playMcAnimate(mAniMc,2,"ani",function():void
               {
                  mAniMc = _map.conLevel["mAni" + rndArr[3]] as MovieClip;
                  AnimateManager.playMcAnimate(mAniMc,2,"ani",function():void
                  {
                     _mBtnsMc.addEventListener(MouseEvent.CLICK,onClickBtnMc2);
                  });
               });
            });
         });
      }
      
      private static function onClickBtnMc2(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         _mBtnsMc.removeEventListener(MouseEvent.CLICK,onClickBtnMc);
         AnimateManager.playMcAnimate(e.target as MovieClip,2,"ani",function():void
         {
            var str:String = String(e.target.name);
            chooseNum = uint(str.substr(4,1));
            var _iCount:int = 0;
            var _i:int = 0;
            while(_i < 4)
            {
               if(chooseNum == rndArr[_i])
               {
                  _iCount++;
                  chooseArr[_i] = true;
                  mAniMc = _map.conLevel["mAni" + chooseNum] as MovieClip;
                  AnimateManager.playMcAnimate(mAniMc,1,"ani",function():void
                  {
                     var _b:Boolean = false;
                     mAniMc.visible = false;
                     for each(_b in chooseArr)
                     {
                        if(!_b)
                        {
                           return;
                        }
                     }
                     unGroundChannel.stop();
                     unGroundChannel = null;
                     _mBtnsMc.visible = false;
                     TasksManager.complete(531,4,function(param1:Boolean):void
                     {
                        if(param1)
                        {
                           startPro5();
                        }
                     });
                  });
               }
               _i++;
            }
            if(_iCount == 0)
            {
               initGameThree();
               return;
            }
         });
      }
      
      private static function RandomArray(param1:int) : Array
      {
         var _loc4_:int = 0;
         var _loc5_:int = 0;
         var _loc2_:Array = new Array();
         var _loc3_:int = 0;
         _loc3_ = 0;
         while(_loc3_ < param1)
         {
            _loc2_.push(_loc3_);
            _loc3_++;
         }
         _loc3_ = 0;
         while(_loc3_ < param1)
         {
            _loc4_ = Math.random() * param1;
            _loc5_ = int(_loc2_[_loc3_]);
            _loc2_[_loc3_] = _loc2_[_loc4_];
            _loc2_[_loc4_] = _loc5_;
            _loc3_++;
         }
         _loc2_[4] = null;
         _loc2_[5] = null;
         return _loc2_;
      }
      
      private static function startPro5() : void
      {
         _arrowmc.visible = true;
         (_petMc["pet00"] as MovieClip).visible = true;
         (_petMc["pet01"] as MovieClip).visible = true;
         (_petMc["pet02"] as MovieClip).visible = true;
         (_petMc["pet03"] as MovieClip).visible = true;
         if(endFight)
         {
            return;
         }
         if(isFight)
         {
            isFight = false;
            (_petMc["pet03"] as MovieClip).buttonMode = true;
            (_petMc["pet03"] as MovieClip).addEventListener(MouseEvent.CLICK,onClickFightHandler);
         }
         else
         {
            NpcDialog.show(NPC.WUSUODA,["嗯？不错，算你通过这次考验了，但是不要太高兴了，如果你能战胜我的话我一定会跟你走的，我说到做到哦。"],["没问题，不过你可别在赖皮了哦！"],[function():void
            {
               (_petMc["pet03"] as MovieClip).buttonMode = true;
               (_petMc["pet03"] as MovieClip).addEventListener(MouseEvent.CLICK,onClickFightHandler);
            }]);
         }
      }
      
      private static function onClickFightHandler(param1:MouseEvent) : void
      {
         isFight = true;
         EventManager.addEventListener(RobotEvent.NO_PET_CAN_FIGHT,onFightError);
         FightDispatcher.addEventListener(PetFightEvent.CATCH_PET,onCatchHandler);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onAlarmClick);
         FightManager.fightWithBoss("乌索达",1);
      }
      
      private static function onCatchHandler(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         endFight = true;
         _arrowmc.visible = false;
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onFightError);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onAlarmClick);
         FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,onCatchHandler);
         (_petMc["pet03"] as MovieClip).removeEventListener(MouseEvent.CLICK,onClickFightHandler);
         TasksManager.complete(531,5,function(param1:Boolean):void
         {
            if(param1)
            {
               startPro6();
            }
         });
      }
      
      private static function onFightError(param1:RobotEvent) : void
      {
         isFight = false;
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onFightError);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onAlarmClick);
         FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,onCatchHandler);
         (_petMc["pet03"] as MovieClip).buttonMode = true;
         (_petMc["pet03"] as MovieClip).addEventListener(MouseEvent.CLICK,onClickFightHandler);
      }
      
      private static function onAlarmClick(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onFightError);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onAlarmClick);
         FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,onCatchHandler);
         if((e.dataObj as FightOverInfo).winnerID != MainManager.actorID)
         {
            NpcDialog.show(NPC.WUSUODA,["怎么样!我的实力可不容小视，你还是再想想如何击败我吧！"],["好，我一定会战胜你的。"],[function():void
            {
               (_petMc["pet03"] as MovieClip).buttonMode = true;
               (_petMc["pet03"] as MovieClip).addEventListener(MouseEvent.CLICK,onClickFightHandler);
            }]);
         }
         else
         {
            NpcDialog.show(NPC.WUSUODA,["哎呀！你居然有这么强的实力，但是我不会轻易服输的，除非你能...."],["什么？看来只有用胶囊制服它了"],[function():void
            {
               (_petMc["pet03"] as MovieClip).buttonMode = true;
               (_petMc["pet03"] as MovieClip).addEventListener(MouseEvent.CLICK,onClickFightHandler);
            }]);
         }
      }
      
      private static function startPro6() : void
      {
         NpcDialog.show(NPC.WUSUODA,["哎….我还是输给你了，那好吧，我愿意成为你的朋友，我更愿意加入摇滚三人组，今后就让我们摇滚四人组的音乐响彻这个宇宙吧！"],["好耶！"],[function():void
         {
            (_petMc["pet0"] as MovieClip).visible = false;
            (_petMc["pet1"] as MovieClip).visible = false;
            (_petMc["pet2"] as MovieClip).visible = false;
            (_petMc["pet3"] as MovieClip).visible = false;
            (_petMc["pet00"] as MovieClip).visible = false;
            (_petMc["pet01"] as MovieClip).visible = false;
            (_petMc["pet02"] as MovieClip).visible = false;
            (_petMc["pet03"] as MovieClip).visible = false;
            TasksManager.complete(531,6);
         }]);
      }
      
      public static function destory() : void
      {
         var _loc1_:int = 0;
         var _loc2_:MovieClip = null;
         if(MapManager.currentMap.id == 327)
         {
            _mBtnsMc.removeEventListener(MouseEvent.CLICK,onClickBtnMc);
            if(_petMc["pet03"])
            {
               (_petMc["pet03"] as MovieClip).removeEventListener(MouseEvent.CLICK,onClickFightHandler);
            }
            EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onFightError);
            if(!isFight)
            {
               FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,onCatchHandler);
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onAlarmClick);
            }
            _loc1_ = 0;
            while(_loc1_ < 6)
            {
               mBtnMc = _mBtnsMc["mbtn" + _loc1_] as MovieClip;
               mBtnMc.removeEventListener(Event.ENTER_FRAME,onEnterFrame);
               _loc2_ = _petMc["pet01"] as MovieClip;
               if(_loc2_)
               {
                  _loc2_.removeEventListener(MouseEvent.CLICK,onClickHandler0);
               }
               _loc1_++;
            }
            if(unGroundChannel)
            {
               unGroundChannel.stop();
               unGroundChannel = null;
            }
            clearTimeout(_timeOut);
         }
         if(_intervalTimer)
         {
            _intervalTimer.stop();
            _intervalTimer = null;
         }
         ToolBarController.showOrHideAllUser(true);
         OgreController.isShow = true;
      }
   }
}
