package com.robot.app2.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.SoundManager;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.OgreXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.mode.OgreModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.Timer;
   import flash.utils.setTimeout;
   import org.taomee.component.tips.ToolTip;
   import org.taomee.events.SocketEvent;
   
   public class TrackRareSpiritsController
   {
      
      private static var _map:MapModel;
      
      private static var _taskMc:MovieClip;
      
      private static const BUFFERID:uint = 1393;
      
      private static var _itemNum:int;
      
      private static var ac1:ActivityControl;
      
      private static var cron1:Array = [new CronTimeVo("*","18-19","*","*","*","*")];
      
      private static var _isDoneFight:Boolean;
      
      private static var _isFighting:Boolean;
      
      protected static var _petIdArr:Array = [1148,1170,620,230,476,833];
      
      private static var _randomPetIndexArr:Array;
      
      private static var _timeArr:Array = [[21,22,23],[6,7,8],[9,10,11],[12,13,14],[15,16,17],[18,19,20]];
      
      private static var _curCatchPetIndex:int;
      
      private static var _isEnterKongjian:Boolean = false;
      
      private static var _curMapIndex:int;
      
      private static var _mapArr:Array = [1303,1304];
      
      private static var _mapNameArr:Array = ["黑白森林","暗黑灯海"];
      
      private static var _randomIndex:int = -1;
      
      private static var _fishNum:int;
      
      private static var _isFishing:Boolean = false;
      
      private static var _timer:Timer;
      
      private static var _fishPetIndex:int;
      
      private static var _ogre0:OgreModel;
      
      private static var _ogre0Arr:Array = [136,360,376,456,203,812];
      
      private static var _ogre0Id:int;
      
      private static var _ogre1:OgreModel;
      
      private static var _ogre1Arr:Array = [[673,675,722,736,744],[461,915],[966,1404],[205,610,734,1103]];
      
      private static var _ogre12Arr:Array = [673,675,722,736,744,461,915,966,1404,205,610,734,1103];
      
      private static var _ogre1Id:int;
      
      private static var _ogre2:OgreModel;
      
      private static var _ogre2Arr:Array = [161,158];
      
      private static var _ogre2Id:int;
      
      private static var _ogreposArray:Array = [new Point(1085,390),new Point(1180,840),new Point(1560,730),new Point(385,880),new Point(910,890)];
      
      private static var _travelNpcShowTime:Array = [12,13,17,18];
      
      private static var _showpetPlayCdIndexarr:Array = [14,17,19,20];
      
      private static var _issnow:Boolean = false;
       
      
      public function TrackRareSpiritsController()
      {
         super();
      }
      
      public static function initToMap() : void
      {
         _map = MapManager.currentMap;
         initView();
         _map.controlLevel.addEventListener(MouseEvent.CLICK,onMainClick);
      }
      
      private static function initView() : void
      {
         var _pos:Array;
         var hour:int;
         var index:int;
         var i:int;
         var j:int;
         var k:int;
         var arr:Array = null;
         ToolTip.add(_map.controlLevel["guideBtn"],"捕捉指南");
         ToolTip.add(_map.controlLevel["capsuleNpcBtn"],"胶囊商人");
         ToolTip.add(_map.controlLevel["travelNpcBtn"],"旅行商人");
         ToolTip.add(_map.controlLevel["fishMc"]["fishingBtn"],"垂钓区");
         ToolTip.add(_map.controlLevel["enterBtn"],"空间裂隙");
         _map.controlLevel["playMc"].visible = false;
         CommonUI.setEnabled(_map.topLevel["mc"],false,false);
         SystemTimerManager.addTickFun(updateView);
         if(ac1 == null)
         {
            ac1 = new ActivityControl(cron1);
         }
         _pos = OgreXMLInfo.getOgreList(1301).concat();
         if(ac1.isInActivityTime)
         {
            _map.controlLevel["trialCaveMc"].gotoAndStop(2);
         }
         else
         {
            _map.controlLevel["trialCaveMc"].gotoAndStop(1);
         }
         hour = int(SystemTimerManager.sysBJDate.hours);
         index = -1;
         i = 0;
         while(i < _timeArr.length)
         {
            arr = _timeArr[i];
            if(arr.indexOf(hour) >= 0)
            {
               index = i;
            }
            i++;
         }
         if(index >= 0)
         {
            _ogre0Id = _ogre0Arr[index];
            OgreModel.isShow = true;
            _ogre0 = new OgreModel(100001);
            _ogre0.show(_ogre0Id,_pos[int(Math.random() * 8)]);
            _ogre0.addEventListener(MouseEvent.CLICK,click0Handle);
         }
         KTool.getMultiValue([16817],function(param1:Array):void
         {
            var va:Array = param1;
            _curMapIndex = va[0];
            if(va[0] == 0)
            {
               KTool.socketSendCallBack(43297,function(param1:SocketEvent):void
               {
                  update();
               },[7,4]);
            }
         });
         j = 0;
         while(j < 6)
         {
            _map.controlLevel["suipianMc_" + j].visible = false;
            _map.controlLevel["suipianMc_" + j].buttonMode = true;
            _map.controlLevel["suipianMc_" + j].addEventListener(MouseEvent.CLICK,suipianclickHandle);
            j++;
         }
         _map.controlLevel["fishMc"]["mc"].visible = false;
         _map.root["bg2_mc"].mouseEnabled = false;
         _map.root["bg2_mc"].mouseChildren = false;
         k = 0;
         while(k < 6)
         {
            _map.controlLevel["tree_" + k].visible = true;
            _map.controlLevel["tree_" + k].buttonMode = true;
            _map.controlLevel["tree_" + k].addEventListener(MouseEvent.CLICK,treeclickHandle);
            k++;
         }
         KTool.getMultiValue([104396,16830,104400],function(param1:Array):void
         {
            var time:int = 0;
            var va:Array = param1;
            if(BitUtils.getBit(va[0],9) > 0)
            {
               time = SystemTimerManager.time - va[2];
               if(time >= 24 * 60 * 60)
               {
                  if(time >= 24 * 60 * 60 * 4)
                  {
                     KTool.socketSendCallBack(43297,function(param1:SocketEvent):void
                     {
                        update();
                     },[30,9]);
                  }
                  else if(BitUtils.getBit(va[0],8) <= 0)
                  {
                     if(BitUtils.getBit(va[1],5) <= 0)
                     {
                        KTool.socketSendCallBack(43297,function(param1:SocketEvent):void
                        {
                           update();
                        },[30,8]);
                     }
                  }
               }
            }
         });
         updateView();
         update();
      }
      
      private static function suipianclickHandle(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         ItemManager.updateItems([1400547],function():void
         {
            var num:Array = new Array();
            num[0] = ItemManager.getNumByID(1400547);
            _itemNum = num[0];
            if(_itemNum >= 0)
            {
               KTool.socketSendCallBack(43297,function(param1:SocketEvent):void
               {
                  _randomIndex = -1;
                  _map.controlLevel["suipianMc_" + _randomIndex].visible = false;
               },[10,1]);
            }
            else
            {
               NpcDialog.show(NPC.SEER,["咦？这枚碎片我能看到，却摸不到它，似乎它跟我不在同一个位面里。听说有一种神奇的东西叫“0xff0000位面隔离手套0xffffff”，恐怕我得戴着这种手套才能捡起它了。"],["晚些再来捡吧。"],[function():void
               {
               }],false,null,false);
            }
         });
      }
      
      private static function treeclickHandle(param1:MouseEvent) : void
      {
         var index:int = 0;
         var e:MouseEvent = param1;
         index = int(e.currentTarget.name.split("_")[1]);
         ItemManager.updateItems([1400548],function():void
         {
            var num:Array = new Array();
            num[0] = ItemManager.getNumByID(1400548);
            if(num[0] > 0)
            {
               KTool.getMultiValue([16830],function(param1:Array):void
               {
                  var va:Array = param1;
                  if(BitUtils.getBit(va[0],8 + index) > 0)
                  {
                     NpcDialog.show(NPC.SEER,["树上已经没有什么可以采摘的果子了，还是给它一些成长空间吧！不过听说这种树长得很快，明天应该又能结出新的果实了！"],["明天再来看看。"],[function():void
                     {
                     }],false,null,false);
                  }
                  else
                  {
                     KTool.socketSendCallBack(43297,function(param1:SocketEvent):void
                     {
                        update();
                     },[30,index + 1]);
                  }
               });
            }
            else
            {
               NpcDialog.show(NPC.SEER,["哎呀！这些果子被茂密的树枝挡住了，如果我有一把0xff0000园艺大师剪刀0xffffff，一定能轻松地摘到这些果子！"],["等有剪刀了再来采果子！"],[function():void
               {
               }],false,null,false);
            }
         });
      }
      
      private static function updateView() : void
      {
         var _loc1_:int = 0;
         if(_travelNpcShowTime.indexOf(SystemTimerManager.sysBJDate.hours) != -1)
         {
            _map.controlLevel["travelNpcBtn"].visible = true;
            _map.controlLevel["leleNpcBtn"].visible = false;
         }
         else
         {
            _map.controlLevel["travelNpcBtn"].visible = false;
            _map.controlLevel["leleNpcBtn"].visible = true;
         }
         if(SystemTimerManager.sysBJDate.hours >= 6 && SystemTimerManager.sysBJDate.hours <= 17)
         {
            _map.topLevel["mc"].visible = false;
         }
         else
         {
            _map.topLevel["mc"].visible = true;
         }
         if(SystemTimerManager.sysBJDate.minutes % 5 == 0)
         {
            if(_randomIndex >= 0)
            {
               _randomIndex = int(Math.random() * 6);
               _loc1_ = 0;
               while(_loc1_ < 6)
               {
                  _map.controlLevel["suipianMc_" + _loc1_].visible = false;
                  _loc1_++;
               }
               _map.controlLevel["suipianMc_" + _randomIndex].visible = true;
            }
         }
      }
      
      private static function onMainClick(param1:MouseEvent) : void
      {
         var index1:int = 0;
         var hours:int = 0;
         var time:String = null;
         var arr:Array = null;
         var event:MouseEvent = param1;
         var index:int = int(event.target.name.split("_")[1]);
         index1 = int(event.target.parent.name.split("_")[1]);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,onEnter0);
         switch(event.target.name)
         {
            case "guideBtn":
               ModuleManager.showModule(ClientConfig.getAppModule("TrackRareSpiritsCaptureclockPanel"),"正在打开....");
               break;
            case "capsuleNpcBtn":
               ModuleManager.showModule(ClientConfig.getAppModule("TrackRareSpiritsCapsuleShopPanel"),"正在打开....");
               break;
            case "travelNpcBtn":
               StatManager.sendStat2014("旅行商人","点击乐琪","精灵捕猎场");
               ModuleManager.showModule(ClientConfig.getAppModule("TrackRareSpiritsTravelShopPanel"),"正在打开....");
               break;
            case "leleNpcBtn":
               StatManager.sendStat2014("旅行商人","点击乐乐","精灵捕猎场");
               hours = int(SystemTimerManager.sysBJDate.hours);
               if(hours >= 19 || hours < 12)
               {
                  time = "12:00~14:00";
               }
               else
               {
                  time = "17:00~19:00";
               }
               NpcDialog.show(1574,["你是来找我哥哥的吗？他到星际港进货去了，估计会在0xff0000" + time + "0xffffff回来。他每次都会带来不一样的货物哦，可能会对你有所帮助！"],["好的，我晚些再来。"],[function():void
               {
               }],false,null,true);
               break;
            case "trialCaveBtn":
               if(ac1.isInActivityTime)
               {
                  if(_isDoneFight)
                  {
                     NpcDialog.show(1148,["你已经完成过今天的试炼了，明天再来挑战自我吧！"],["明天再见！"],[function():void
                     {
                     }],false,null,true);
                  }
                  else if(_isFighting)
                  {
                     NpcDialog.show(1148,["我的朋友，你的试炼还在进行，是否继续刚才的挑战？"],["让我们开始吧！","我需要再准备一下。"],[function():void
                     {
                        playMc();
                     }],false,null,true);
                  }
                  else
                  {
                     NpcDialog.show(1148,["试炼已经开启，我们期待你的挑战！每次完成试炼，你都可以从我们之中任选一只进行捕捉哦！"],["让我们开始吧！","我需要再准备一下。"],[function():void
                     {
                        KTool.socketSendCallBack(43297,function(param1:SocketEvent):void
                        {
                           playMc();
                        },[7,1]);
                     }],false,null,true);
                  }
               }
               else
               {
                  StatManager.sendStat2014("强者试炼","非试炼时间点击强者试炼","精灵捕猎场");
                  NpcDialog.show(1148,["每天的18:00—20:00间，我们将在这里等待你的挑战！每次完成考验，你都可以从我们之中任选一只捕捉哦！"],["我会来的！"],[function():void
                  {
                  }],false,null,true);
               }
               break;
            case "petBtn":
               arr = ["瓦卡","林诺","沙鲁","硬甲蟹","库德","斯奥",""];
               NpcDialog.show(_petIdArr[index1],["我是否有幸，能陪你继续你的宇宙冒险呢？"],["成为我的伙伴吧！","我还要再考虑一下。"],[function():void
               {
                  StatManager.sendStat2014("强者试炼","选择捕捉" + arr[index1],"精灵捕猎场");
                  _curCatchPetIndex = index1;
                  KTool.socketSendCallBack(43297,function(param1:SocketEvent):void
                  {
                     FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
                  },[13,_randomPetIndexArr.indexOf(index1 + 1) + 1]);
               }],false,null,true);
               break;
            case "enterBtn":
            case "xiuNpcBtn":
               StatManager.sendStat2014("空间裂缝","点击流浪者修","精灵捕猎场");
               if(_isEnterKongjian)
               {
                  NpcDialog.show(NPC.HUGH,["空间裂缝消失了……明天再来看看吧！"],["..."],[function():void
                  {
                  }],false,null,false);
               }
               else
               {
                  NpcDialog.show(NPC.HUGH,["这处空间十分不稳定，四处散逸的空间能量快把我的身体撕裂了。你还是赶快离……等下，那是什么？ "],["..."],[function():void
                  {
                     NpcDialog.show(NPC.HUGH,["快看！从这里可以看到裂缝里面。那里好像是……！ "],["..."],[function():void
                     {
                        NpcDialog.show(NPC.HUGH,["这真是一个千载难逢的好机会，听说在那里可以捕捉到消失已久的精灵！我应该可以稳定这个裂隙，不过你必须帮我找来0xff00005枚散落的空间碎片0xffffff！ "],["给你碎片。","我该如何获得这些碎片？","我这就去收集碎片！"],[function():void
                        {
                           if(_itemNum >= 5)
                           {
                              NpcDialog.show(NPC.HUGH,["很好，借助这些碎片的力量，你就可以进入空间裂缝了。我先稳固一下这里的空间……好了，快进去吧！对了，你0xff0000今天只有这一次机会0xffffff！"],["我已经准备好进去了！","我还要再准备一下。"],[function():void
                              {
                                 KTool.socketSendCallBack(43297,function(param1:SocketEvent):void
                                 {
                                    MapManager.changeMap(_mapArr[_curMapIndex - 1]);
                                 },[7,2]);
                              }],false,null,false);
                           }
                           else
                           {
                              NpcDialog.show(NPC.HUGH,["你这里只有" + _itemNum + "枚碎片，我需要5枚碎片才能稳定住这片空间里裂隙！想要获得精灵的话，就再帮我找找吧！"],["我这就去收集碎片！"],[function():void
                              {
                              }],false,null,false);
                           }
                        },function():void
                        {
                           NpcDialog.show(NPC.HUGH,["每过15分钟，就会有一些空间碎片从裂缝里散逸出来，掉在捕猎场的角落里。你需要用0xff0000位面隔离手套0xffffff把它们捡起来！"],["还有别的办法吗？"],[function():void
                           {
                              NpcDialog.show(NPC.HUGH,["击败捕猎场里0xff0000四处走动的野怪0xffffff，也有可能获得它们捡到的空间碎片。不过这种几率很低，全看你的运气啦！"],["我明白了！"],[function():void
                              {
                              }],false,null,false);
                           }],false,null,false);
                        },function():void
                        {
                        }],false,null,false);
                     }],false,null,false);
                  }],false,null,false);
               }
               break;
            case "fishingBtn":
               StatManager.sendStat2014("垂钓区","点击遮阳伞","精灵捕猎场");
               if(_fishPetIndex > 0)
               {
                  Alarm2.show("你当前有可捕捉的稀有精灵哦！先把它捉住再来钓鱼吧！");
                  return;
               }
               if(SystemTimerManager.sysBJDate.hours >= 6 && SystemTimerManager.sysBJDate.hours <= 17)
               {
                  ItemManager.updateItems([1717072],function():void
                  {
                     var num:Array = new Array();
                     num[0] = ItemManager.getNumByID(1717072);
                     if(num[0] > 0)
                     {
                        NpcDialog.show(NPC.SEER,["午餐准备好了，可以开始钓鱼了！今天的目标是：下20次杆，或者钓到一条大鱼！唔……好像我已经下了" + _fishNum + "次杆了！"],["开始钓鱼。","等等再来。"],[function():void
                        {
                           isCanFishing();
                        }],false,null,false);
                     }
                     else
                     {
                        NpcDialog.show(NPC.SEER,["钓鱼是一件又费耐心又费肚子的事情。我得先给自己准备一份0xff0000精致垂钓午餐0xffffff，再来钓鱼。听说乐琪那里有卖的，可能场景里的野怪身上也会有！"],["拿到吃的再来钓鱼！"],[function():void
                        {
                        }],false,null,false);
                     }
                  });
               }
               else
               {
                  NpcDialog.show(NPC.SEER,["大晚上的，我看不到鱼，鱼也看不到饵啊！"],["还是白天再来吧。"],[function():void
                  {
                  }],false,null,false);
               }
               break;
            case "PreBtn":
               ModuleManager.showModule(ClientConfig.getAppModule("TrackRareSpiritsluojiBBPanel"),"正在打开....");
               break;
            case "dianchangjiBtn":
               ModuleManager.showModule(ClientConfig.getAppModule("TrackRareSpiritsPlayPanel"),"正在打开....");
               break;
            case "xueqiujiBtn":
               StatManager.sendStat2014("捕猎陷阱","点击雪球制造机","精灵捕猎场");
               if(_issnow)
               {
                  NpcDialog.show(NPC.SEER,["看起来制造机已经起效果了！这场雪至少持续一整天！"],["..."],[function():void
                  {
                  }],false,null,false);
                  return;
               }
               NpcDialog.show(NPC.SEER,["听说雪球制造机可以让这里一下子变成冬天，并且可以持续一整天的时间！好想试试看！"],["使用20000赛尔豆启动！","下次再来试试。"],[function():void
               {
                  Alert.show("需要消耗20000赛尔豆，确定要继续吗？",function():void
                  {
                     if(MainManager.actorInfo.coins < 20000)
                     {
                        Alarm2.show("赛尔豆不足！");
                        return;
                     }
                     StatManager.sendStat2014("捕猎陷阱","启动雪球制造机","精灵捕猎场");
                     KTool.socketSendCallBack(43297,function(param1:SocketEvent):void
                     {
                        var e:SocketEvent = param1;
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_TrackRareSpirits"),function():void
                        {
                        });
                        setTimeout(function():void
                        {
                           update();
                        },500);
                     },[32,0]);
                  });
               }],false,null,false);
               break;
            case "catchBtn":
               FightManager.fightNoMapBoss("",13243 + _fishPetIndex - 1,false,true,function():void
               {
               });
               break;
            case "trapBtn_" + index:
               if(index == 0)
               {
                  ItemManager.updateItems([1717205],function():void
                  {
                     var num:Array = new Array();
                     num[0] = ItemManager.getNumByID(1717205);
                     if(num[0] >= 5)
                     {
                        KTool.socketSendCallBack(43297,function(param1:SocketEvent):void
                        {
                           var e:SocketEvent = param1;
                           NpcDialog.show(NPC.SEER,["搞定！这么多诱人的果子，一定很快就会有精灵上钩了！"],["明天再来看看。"],[function():void
                           {
                              update();
                           }],false,null,false);
                        },[30,7]);
                     }
                     else
                     {
                        NpcDialog.show(NPC.SEER,["这里草叶松软，非常适合制作陷阱。去弄5枚诱人的树果放在上面，一定可以抓到贪吃的精灵！我数数……现在我有" + num[0] + "枚！"],["找树果去咯！"],[function():void
                        {
                        }],false,null,false);
                     }
                  });
               }
               else if(index == 1)
               {
                  NpcDialog.show(NPC.SEER,["陷阱还没有什么反应，还是明天再来看看吧！"],["..."],[function():void
                  {
                     update();
                  }],false,null,false);
               }
               else if(index == 2)
               {
                  NpcDialog.show(NPC.SEER,["果子都烂掉了，还没精灵上钩，这些稀有精灵无愧稀有之名！"],["再试一次吧。"],[function():void
                  {
                     KTool.socketSendCallBack(43297,function(param1:SocketEvent):void
                     {
                        update();
                     },[30,10]);
                  }],false,null,false);
               }
               else if(index == 3)
               {
                  NpcDialog.show(NPC.SEER,["可算是让我抓到你了！"],["开始捕捉！","等会再来。"],[function():void
                  {
                     FightManager.fightNoMapBoss("",13245,false,true,function():void
                     {
                     });
                  }],false,null,false);
               }
         }
      }
      
      private static function isCanFishing() : void
      {
         if(_fishNum >= 20)
         {
            NpcDialog.show(NPC.SEER,["今天下满20杆的目标已经达成，依然没什么收获，还是明天再来钓鱼吧！"],["拿到吃的再来钓鱼！"],[function():void
            {
            }],false,null,false);
         }
         else
         {
            KTool.getMultiValue([16830],function(param1:Array):void
            {
               var point:Point = null;
               var va:Array = param1;
               var index:int = int(va[0]);
               var num:uint = uint(KTool.subByte(va[0],0,4));
               if(num == 2)
               {
                  NpcDialog.show(NPC.SEER,["今天捉到了一只小精灵，已经收获满满了，还是明天再来吧！"],["明天再来吧！"],[function():void
                  {
                  }],false,null,false);
               }
               else
               {
                  point = new Point(_map.controlLevel["fishMc"].x + 180,_map.controlLevel["fishMc"].y + 180);
                  MainManager.actorModel.walkAction(point);
                  MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,onEnterToFishing);
               }
            });
         }
      }
      
      private static function onEnterToFishing(param1:RobotEvent) : void
      {
         var point:Point;
         var e:RobotEvent = param1;
         StatManager.sendStat2014("垂钓区","进入钓鱼状态","精灵捕猎场");
         point = new Point(_map.controlLevel["fishMc"].x + 180,_map.controlLevel["fishMc"].y + 180);
         if(Point.distance(MainManager.actorModel.pos,point) < 20)
         {
            MainManager.actorModel.stop();
            KTool.socketSendCallBack(43297,function(param1:SocketEvent):void
            {
               _isFishing = true;
               MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onEnterToFishing);
               MainManager.actorModel.removeEvent();
               MapManager.addEventListener(MapEvent.MAP_MOUSE_DOWN,onMapDown);
               fishing();
            },[10,2]);
         }
      }
      
      private static function fishing() : void
      {
         StatManager.sendStat2014("垂钓区","开始倒计时","精灵捕猎场");
         _map.controlLevel["fishMc"]["mc"].visible = true;
         AnimateManager.playMcAnimate(_map.controlLevel["fishMc"],1,"mc",function():void
         {
            _map.controlLevel["fishMc"]["mc"].visible = false;
            BonusController.addDelay(3013);
            KTool.socketSendCallBack(43297,function(param1:SocketEvent):void
            {
               fishgingEvent();
            },[10,3]);
         },false,true);
      }
      
      private static function endfishing(param1:Function = null) : void
      {
         var fun:Function = param1;
         LevelManager.mapLevel.mouseEnabled = true;
         LevelManager.mapLevel.mouseChildren = true;
         if(_isFishing)
         {
            KTool.socketSendCallBack(43297,function(param1:SocketEvent):void
            {
               _isFishing = false;
               MainManager.actorModel.addEvent();
               if(fun != null)
               {
                  fun();
               }
            },[10,4]);
         }
      }
      
      private static function onMapDown(param1:MapEvent) : void
      {
         var e:MapEvent = param1;
         if(_isFishing)
         {
            Alert.show("你正在钓鱼，要提前中止吗？",function():void
            {
               endfishing(function():void
               {
                  MainManager.actorModel.walkAction(new Point(_map.controlLevel["fishMc"].x + 180,_map.controlLevel["fishMc"].y + 200));
               });
            });
         }
      }
      
      private static function fishgingEvent() : void
      {
         LevelManager.mapLevel.mouseEnabled = false;
         LevelManager.mapLevel.mouseChildren = false;
         KTool.getMultiValue([16830,16829],function(param1:Array):void
         {
            var va:Array = param1;
            var index:int = int(va[0]);
            var num:uint = uint(KTool.subByte(va[0],0,4));
            if(num == 1)
            {
               NpcDialog.show(NPC.SEER,["好像没有鱼儿上钩呢。没事，这才是第" + va[1] + "杆！"],["继续钓鱼","收杆休息了！"],[function():void
               {
                  fishing();
               },function():void
               {
                  endfishing(null);
               }],false,null,false);
            }
            else if(num == 3)
            {
               NpcDialog.show(NPC.SEER,["咦？这是个什么东西？"],["收起来看看","收杆休息了！"],[function():void
               {
                  BonusController.showDelayBonus(3013);
                  fishing();
               },function():void
               {
                  endfishing(null);
               }],false,null,false);
            }
            else if(num == 2)
            {
               KTool.getMultiValue([104387],function(param1:Array):void
               {
                  var va:Array = param1;
                  _fishPetIndex = KTool.subByte(va[0],4,4);
                  NpcDialog.show(NPC.SEER,["好像有什么东西上钩了！"],["拉起钓竿","收杆休息了！"],[function():void
                  {
                     _map.controlLevel["fishMc"].addEventListener(Event.ENTER_FRAME,onFrameEnterFrame);
                     _map.controlLevel["fishMc"].gotoAndPlay(2);
                  },function():void
                  {
                     _map.controlLevel["fishMc"].addEventListener(Event.ENTER_FRAME,onFrameEnterFrame);
                     _map.controlLevel["fishMc"].gotoAndPlay(2);
                  }],false,null,false);
               });
            }
         });
      }
      
      private static function onFrameEnterFrame(param1:Event) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         if(_map.controlLevel["fishMc"].currentFrame >= 47)
         {
            if(_map.controlLevel["fishMc"]["petMc"] != null)
            {
               _map.controlLevel["fishMc"]["petMc"].gotoAndStop(_fishPetIndex);
            }
         }
         if(_map.controlLevel["fishMc"].currentFrame == _map.controlLevel["fishMc"].totalFrames)
         {
            _map.controlLevel["fishMc"].gotoAndStop(84);
            _map.controlLevel["fishMc"].removeEventListener(Event.ENTER_FRAME,onFrameEnterFrame);
         }
      }
      
      private static function playMc() : void
      {
         var i:int;
         _map.controlLevel["playMc"].visible = true;
         i = 0;
         while(i < 6)
         {
            _map.controlLevel["trialBossMc_" + i].visible = false;
            i++;
         }
         AnimateManager.playMcAnimate(_map.controlLevel["playMc"],1,"mc",function():void
         {
            MapManager.changeMap(11668);
         },false,true);
      }
      
      private static function onFightOver(param1:*) : void
      {
         var e:* = param1;
         KTool.getMultiValue([16818],function(param1:Array):void
         {
            var va:Array = param1;
            var isCatch:Boolean = false;
            var i:int = 0;
            while(i < 3)
            {
               if(BitUtils.getBit(va[1],i) > 0)
               {
                  isCatch = true;
               }
               i++;
            }
            if(!isCatch)
            {
               NpcDialog.show(_petIdArr[_curCatchPetIndex],["在战斗中使用精灵胶囊，就能捕捉到我了哦！"],["明白了！"],[function():void
               {
               }],false,null,true);
            }
         });
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
      }
      
      private static function update() : void
      {
         ItemManager.updateItems([1717068],function():void
         {
            var _loc1_:Array = new Array();
            _loc1_[0] = ItemManager.getNumByID(1717068);
            _itemNum = _loc1_[0];
         });
         KTool.getMultiValue([16814,16818,16815,104388,16817,16829,104387,16830,104387],function(param1:Array):void
         {
            var num:int;
            var isCatch:Boolean;
            var i2:int;
            var num1:uint;
            var idnex:uint = 0;
            var i9:int = 0;
            var j:int = 0;
            var i1:int = 0;
            var index:int = 0;
            var arr1:Array = null;
            var va:Array = param1;
            _randomPetIndexArr = new Array();
            var i:int = 0;
            while(i < 3)
            {
               idnex = uint(KTool.subByte(va[0],i * 4,4));
               _randomPetIndexArr.push(idnex);
               i++;
            }
            _isFighting = va[0] > 0 ? true : false;
            num = int(KTool.subByte(va[0],12,4));
            _isDoneFight = num >= 3 ? true : false;
            if(_isFighting)
            {
               i9 = 0;
               while(i9 < 6)
               {
                  if(_randomPetIndexArr.indexOf(i9 + 1) >= 0)
                  {
                     _map.controlLevel["trialBossMc_" + i9].visible = true;
                     _map.controlLevel["trialBossMc_" + i9].gotoAndStop(_isDoneFight ? 2 : 1);
                  }
                  else
                  {
                     _map.controlLevel["trialBossMc_" + i9].visible = false;
                  }
                  i9++;
               }
            }
            else
            {
               j = 0;
               while(j < 6)
               {
                  _map.controlLevel["trialBossMc_" + j].gotoAndStop(1);
                  j++;
               }
            }
            isCatch = false;
            i2 = 0;
            while(i2 < 3)
            {
               if(BitUtils.getBit(va[1],i2) > 0)
               {
                  isCatch = true;
               }
               i2++;
            }
            if(isCatch)
            {
               i1 = 0;
               while(i1 < 6)
               {
                  _map.controlLevel["trialBossMc_" + i1].visible = false;
                  i1++;
               }
            }
            num1 = uint(KTool.subByte(va[2],0,4));
            if(num1 > 0)
            {
               _isEnterKongjian = true;
               _map.controlLevel["enterBtn"].visible = false;
            }
            if(va[3] > 0)
            {
               SoundManager.playGameSound("trackRareSpirits_" + (va[3] - 1));
               if(_showpetPlayCdIndexarr.indexOf(va[3]) >= 0)
               {
                  index = _showpetPlayCdIndexarr.indexOf(va[3]);
                  arr1 = _ogre1Arr[index];
                  _ogre1Id = arr1[int(Math.random() * arr1.length)];
                  OgreModel.isShow = true;
                  _ogre1 = new OgreModel(100001);
                  _ogre1.show(_ogre1Id,_ogreposArray[int(Math.random() * 5)]);
                  _ogre1.addEventListener(MouseEvent.CLICK,click1Handle);
               }
            }
            if(va[4] > 0)
            {
               _curMapIndex = va[4];
            }
            _fishNum = va[5];
            _fishPetIndex = KTool.subByte(va[8],4,4);
            if(_fishPetIndex > 0)
            {
               _map.controlLevel["fishMc"].gotoAndStop(_fishPetIndex > 0 ? 84 : 1);
               setTimeout(function():void
               {
                  if(_map.controlLevel["fishMc"]["petMc"] != null)
                  {
                     _map.controlLevel["fishMc"]["petMc"].gotoAndStop(_fishPetIndex);
                  }
               },30);
            }
            if(BitUtils.getBit(va[7],6) > 0)
            {
               _issnow = true;
               _map.root.setChildIndex(_map.root["bg2_mc"],1);
               _map.animatorLevel.visible = true;
               _map.root["bg2_mc"].visible = true;
               _ogre2Id = _ogre2Arr[int(Math.random() * _ogre2Arr.length)];
               OgreModel.isShow = true;
               _ogre2 = new OgreModel(100001);
               _ogre2.show(_ogre2Id,_ogreposArray[int(Math.random() * 5)]);
               _ogre2.addEventListener(MouseEvent.CLICK,click2Handle);
            }
            else
            {
               _issnow = false;
               _map.animatorLevel.visible = false;
               _map.root["bg2_mc"].visible = false;
               _map.root.setChildIndex(_map.root["bg2_mc"],0);
            }
         });
         KTool.getMultiValue([104396,104400],function(param1:Array):void
         {
            if(BitUtils.getBit(param1[0],9) > 0)
            {
               if(BitUtils.getBit(param1[0],8) > 0)
               {
                  _map.controlLevel["trapMc"].gotoAndStop(4);
               }
               else if(SystemTimerManager.time - param1[1] >= 24 * 60 * 60 * 4)
               {
                  _map.controlLevel["trapMc"].gotoAndStop(3);
               }
               else
               {
                  _map.controlLevel["trapMc"].gotoAndStop(2);
               }
            }
            else
            {
               _map.controlLevel["trapMc"].gotoAndStop(1);
            }
         });
      }
      
      private static function click0Handle(param1:MouseEvent) : void
      {
         _ogre0Id = _ogre0.id;
         MainManager.actorModel.walkAction(_ogre0.pos);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,onEnter0);
      }
      
      private static function onEnter0(param1:RobotEvent) : void
      {
         if(_ogre0 != null)
         {
            if(Point.distance(MainManager.actorModel.pos,_ogre0.pos) < 20)
            {
               PetFightModel.defaultNpcID = _ogre0Id;
               FightManager.fightWithBoss(PetXMLInfo.getName(_ogre0Id),_ogre0Arr.indexOf(_ogre0Id));
            }
         }
      }
      
      private static function click1Handle(param1:MouseEvent) : void
      {
         _ogre1Id = _ogre1.id;
         MainManager.actorModel.walkAction(_ogre1.pos);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,onEnter1);
      }
      
      private static function onEnter1(param1:RobotEvent) : void
      {
         if(_ogre1 != null)
         {
            if(Point.distance(MainManager.actorModel.pos,_ogre1.pos) < 20)
            {
               PetFightModel.defaultNpcID = _ogre1Id;
               FightManager.fightWithBoss(PetXMLInfo.getName(_ogre1Id),_ogre12Arr.indexOf(_ogre1Id) + 6);
            }
         }
      }
      
      private static function click2Handle(param1:MouseEvent) : void
      {
         _ogre2Id = _ogre2.id;
         MainManager.actorModel.walkAction(_ogre2.pos);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,onEnter2);
      }
      
      private static function onEnter2(param1:RobotEvent) : void
      {
         if(_ogre2 != null)
         {
            if(Point.distance(MainManager.actorModel.pos,_ogre2.pos) < 20)
            {
               PetFightModel.defaultNpcID = _ogre2Id;
               FightManager.fightWithBoss(PetXMLInfo.getName(_ogre2Id),_ogre2Arr.indexOf(_ogre2Id) + 19);
            }
         }
      }
      
      public static function destory() : void
      {
         SoundManager.playSound();
         MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,onMapDown);
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onEnter0);
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onEnter1);
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onEnter2);
         if(_ogre0)
         {
            _ogre0.removeEventListener(MouseEvent.CLICK,click0Handle);
            _ogre0.destroy();
            _ogre0 = null;
         }
         if(_ogre1)
         {
            _ogre1.removeEventListener(MouseEvent.CLICK,click1Handle);
            _ogre1.destroy();
            _ogre1 = null;
         }
         if(_ogre2)
         {
            _ogre2.removeEventListener(MouseEvent.CLICK,click2Handle);
            _ogre2.destroy();
            _ogre2 = null;
         }
         SystemTimerManager.removeTickFun(updateView);
         _map.controlLevel["fishMc"].removeEventListener(Event.ENTER_FRAME,onFrameEnterFrame);
      }
   }
}
