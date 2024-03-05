package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.utils.Timer;
   import flash.utils.clearInterval;
   import flash.utils.setInterval;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class GaiaMachineController
   {
      
      public static var crtPage:int = 0;
      
      private static var _map:BaseMapProcess;
      
      private static var _medalStates:Array = [];
      
      private static var countInterval:int;
      
      private static var intervals:Array = [0,0,0,0,0,0];
      
      private static const NEED_SECONDS:Array = [180,300,600,1200,1800,3600];
      
      private static var crtBossLv:int = 1;
      
      private static var core:int;
      
      private static var piece:int;
      
      private static var model:int;
      
      private static var energy:int;
      
      private static var score:int;
      
      private static var _timer:Timer;
      
      private static var _exploitPorBar:MovieClip;
       
      
      public function GaiaMachineController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var mins:Array;
         var i:int;
         var npc:MovieClip = null;
         var map:BaseMapProcess = param1;
         _map = map;
         if(BitBuffSetClass.getState(22473) == 0)
         {
            BitBuffSetClass.setState(22473,1);
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active_20140704_2"));
         }
         _map.topLevel.addEventListener(MouseEvent.CLICK,onClicked);
         KTool.getBitSet([19256,19257,19258,19259],function(param1:Array):void
         {
            _medalStates = param1;
            if(crtPage == 0)
            {
               if(_medalStates[0])
               {
                  crtPage = 2;
               }
               else
               {
                  crtPage = 1;
               }
               showCrtPage();
            }
            ToolBarController.panel.hide();
         });
         DisplayUtil.stopAllMovieClip(_map.topLevel["page1"]);
         DisplayUtil.stopAllMovieClip(_map.topLevel["page2"]);
         DisplayUtil.stopAllMovieClip(_map.topLevel["page3"]);
         _map.topLevel["page1"].visible = false;
         _map.topLevel["page2"].visible = false;
         _map.topLevel["page3"].visible = false;
         showCrtPage();
         _map.topLevel["tipsMC"].visible = false;
         _map.topLevel["tipsMC"].stop();
         mins = [3,5,10,20,30];
         i = 0;
         while(i < 5)
         {
            npc = _map.topLevel["page2"]["npc_" + i];
            ToolTipManager.add(npc,"该机器人每" + mins[i] + "分钟生产1点核心能量");
            i++;
         }
      }
      
      private static function showCrtPage() : void
      {
         clearInterval(countInterval);
         var _loc1_:int = 0;
         while(_loc1_ < intervals.length)
         {
            clearInterval(intervals[_loc1_]);
            _loc1_++;
         }
         if(crtPage == 1)
         {
            showPage1();
         }
         else if(crtPage == 2)
         {
            showPage2();
         }
         else if(crtPage == 3)
         {
            showPage3();
         }
         updateItems();
      }
      
      private static function showPage1() : void
      {
         _map.topLevel["page1"].visible = true;
         _map.topLevel["page1"]["machine"].play();
         if(MainManager.actorInfo.isVip)
         {
            _map.topLevel["page1"]["getModelMC"].gotoAndStop(1);
            KTool.getMultiValue([12147],function(param1:Array):void
            {
               if(param1[0])
               {
                  CommonUI.setEnabled(_map.topLevel["page1"]["getModelMC"],false);
               }
            });
         }
         else
         {
            _map.topLevel["page1"]["getModelMC"].gotoAndStop(2);
         }
         KTool.getForeverNum(2201,function(param1:int):void
         {
            var passedTime:int = 0;
            var needTime:int = 0;
            var num:int = param1;
            passedTime = SystemTimerManager.time - num;
            if(MainManager.actorInfo.isVip)
            {
               needTime = 30 * 60;
            }
            else
            {
               needTime = 60 * 60;
            }
            if(num == 0)
            {
               _map.topLevel["page1"]["makeCoreMC"].gotoAndStop(1);
               _map.topLevel["page1"]["mc"]["leftCDTxt"].text = "";
               _map.topLevel["page1"]["mc"]["bar"].stop();
               _map.topLevel["page1"]["mc"]["bar"].visible = false;
               _map.topLevel["page1"]["mc"].visible = false;
            }
            else if(passedTime >= needTime)
            {
               _map.topLevel["page1"]["makeCoreMC"].gotoAndStop(2);
               _map.topLevel["page1"]["mc"]["leftCDTxt"].text = "";
               _map.topLevel["page1"]["mc"]["bar"].gotoAndStop(100);
               _map.topLevel["page1"]["mc"]["bar"].visible = true;
               _map.topLevel["page1"]["mc"].visible = false;
            }
            else
            {
               _map.topLevel["page1"]["makeCoreMC"].gotoAndStop(3);
               _map.topLevel["page1"]["mc"]["leftCDTxt"].text = "";
               _map.topLevel["page1"]["mc"]["bar"].gotoAndStop(1);
               _map.topLevel["page1"]["mc"]["bar"].visible = true;
               _map.topLevel["page1"]["mc"].visible = true;
               countInterval = setInterval(function():void
               {
                  var _loc2_:* = undefined;
                  var _loc1_:* = needTime - passedTime;
                  ++passedTime;
                  if(_loc1_ == 0)
                  {
                     showCrtPage();
                  }
                  else
                  {
                     _map.topLevel["page1"]["mc"]["leftCDTxt"].text = SystemTimerManager.getTimeClockString(_loc1_,false);
                     _loc2_ = int(100 * passedTime / needTime);
                     _map.topLevel["page1"]["mc"]["bar"].gotoAndStop(_loc2_);
                  }
               },1000);
            }
         });
      }
      
      private static function showPage2() : void
      {
         _map.topLevel["page2"].visible = true;
         if(MainManager.actorInfo.isVip)
         {
            _map.topLevel["page2"]["getMC"].gotoAndStop(1);
            KTool.getMultiValue([12148],function(param1:Array):void
            {
               if(param1[0])
               {
                  CommonUI.setEnabled(_map.topLevel["page2"]["getMC"],false);
               }
            });
         }
         else
         {
            _map.topLevel["page2"]["getMC"].gotoAndStop(2);
         }
         KTool.getMultiValue([2203,2204,2205,2206,2207,2202],function(param1:Array):void
         {
            var _loc3_:MovieClip = null;
            var _loc4_:MovieClip = null;
            var _loc5_:MovieClip = null;
            var _loc6_:MovieClip = null;
            var _loc2_:int = 0;
            while(_loc2_ < 6)
            {
               _loc3_ = _map.topLevel["page2"]["guide_mc_" + _loc2_];
               _loc4_ = _map.topLevel["page2"]["workingMC_" + _loc2_];
               _loc5_ = _map.topLevel["page2"]["npc_" + _loc2_];
               _loc6_ = _map.topLevel["page2"]["finishMC_" + _loc2_];
               checkState(_loc2_,param1[_loc2_],_loc3_,_loc4_,_loc5_,_loc6_);
               _loc2_++;
            }
         });
      }
      
      private static function checkState(param1:int, param2:int, param3:MovieClip, param4:MovieClip, param5:MovieClip, param6:MovieClip) : void
      {
         var passedTime:int = 0;
         var needTime:int = 0;
         var index:int = param1;
         var num:int = param2;
         var guide:MovieClip = param3;
         var work:MovieClip = param4;
         var npc:MovieClip = param5;
         var finish:MovieClip = param6;
         passedTime = SystemTimerManager.time - num;
         needTime = int(NEED_SECONDS[index]);
         if(guide)
         {
            guide.play();
         }
         npc.play();
         npc.mouseChildren = false;
         npc.buttonMode = true;
         if(num == 0)
         {
            if(guide)
            {
               guide.visible = true;
            }
            work.visible = false;
            npc.mouseEnabled = true;
            finish.visible = false;
         }
         else if(passedTime >= needTime)
         {
            if(guide)
            {
               guide.visible = true;
            }
            work.visible = false;
            npc.mouseEnabled = true;
            finish.visible = true;
         }
         else
         {
            if(guide)
            {
               guide.visible = false;
            }
            work.visible = true;
            npc.mouseEnabled = false;
            finish.visible = false;
            intervals[index] = setInterval(function():void
            {
               var _loc1_:* = needTime - passedTime;
               ++passedTime;
               if(_loc1_ == 0)
               {
                  clearInterval(intervals[index]);
                  if(guide)
                  {
                     guide.visible = true;
                  }
                  work.visible = false;
                  npc.mouseEnabled = true;
                  finish.visible = true;
               }
               else
               {
                  work["countTxt"].text = SystemTimerManager.getTimeClockString(_loc1_,false);
               }
            },1000);
         }
      }
      
      private static function showPage3() : void
      {
         var i:int;
         var mc:MovieClip = null;
         _map.topLevel["page3"].visible = true;
         _map.topLevel["page3"]["chooseMC"].visible = false;
         if(MainManager.actorInfo.isVip)
         {
            _map.topLevel["page3"]["getMC"].gotoAndStop(1);
            KTool.getMultiValue([12149],function(param1:Array):void
            {
               if(param1[0])
               {
                  CommonUI.setEnabled(_map.topLevel["page3"]["getMC"],false);
               }
            });
         }
         else
         {
            _map.topLevel["page3"]["getMC"].gotoAndStop(2);
         }
         i = 0;
         while(i < 4)
         {
            mc = _map.topLevel["page3"]["chooseMC"]["item_" + i];
            mc.mouseChildren = false;
            mc.buttonMode = true;
            i++;
         }
      }
      
      private static function updateItems() : void
      {
         ItemManager.updateItems([1701401,1701402,1701403,1701404,1701439],function():void
         {
            core = ItemManager.getNumByID(1701401);
            piece = ItemManager.getNumByID(1701402);
            model = ItemManager.getNumByID(1701403);
            energy = ItemManager.getNumByID(1701404);
            score = ItemManager.getNumByID(1701439);
            _map.topLevel["page1"]["coreNumTxt"].text = core.toString();
            _map.topLevel["page1"]["pieceNumTxt"].text = piece.toString();
            _map.topLevel["page1"]["modelNumTxt"].text = model.toString();
            _map.topLevel["page2"]["energyTxt"].text = energy.toString() + "/200";
            _map.topLevel["page2"]["bar"].gotoAndStop(int(energy / 2));
            _map.topLevel["page3"]["energyTxt"].text = energy.toString();
            _map.topLevel["page3"]["bar"].gotoAndStop(int(score));
            _map.topLevel["page3"]["scoreStateTxt"].text = score.toString() + "/100";
         });
      }
      
      private static function onClicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var npcClick:Function = function(param1:int):void
         {
            var index:int = param1;
            var mc:MovieClip = _map.topLevel["page2"]["finishMC_" + index];
            if(index == 5)
            {
               exploitNow();
            }
            else if(mc.visible)
            {
               SocketConnection.sendWithCallback(CommandID.GAIAMACHINE_CMD_3,function():void
               {
                  showCrtPage();
               },index + 1,2);
            }
            else
            {
               SocketConnection.sendWithCallback(CommandID.GAIAMACHINE_CMD_3,function():void
               {
                  showCrtPage();
               },index + 1,1);
            }
         };
         switch(e.target)
         {
            case _map.topLevel["petBag"]:
               PetBagControllerNew.showByBuffer();
               break;
            case _map.topLevel["exp"]:
               ModuleManager.showModule(ClientConfig.getAppModule("ExshiwExpPanel"));
               break;
            case _map.topLevel["cure"]:
               PetManager.cureAll();
               break;
            case _map.topLevel["ruleBtn"]:
               _map.topLevel["tipsMC"].visible = true;
               _map.topLevel["tipsMC"].gotoAndStop(crtPage);
               break;
            case _map.topLevel["tipsMC"]["backBtn"]:
               _map.topLevel["tipsMC"].visible = false;
               break;
            case _map.topLevel["getBtn"]:
               KTool.getBitSet([19256,19257,19258,19259],function(param1:Array):void
               {
                  var a:Array = param1;
                  _medalStates = a;
                  if(crtPage == 1)
                  {
                     if(_medalStates[0])
                     {
                        Alarm.show("你已经拥有组装奖章！");
                     }
                     else if(model < 5)
                     {
                        Alarm.show("需要5个机器人模型才可兑换,你的机器人模型数量不够！");
                     }
                     else
                     {
                        doExchange(2849);
                     }
                  }
                  else if(crtPage == 2)
                  {
                     if(_medalStates[1])
                     {
                        Alarm.show("你已经拥有充能奖章！");
                     }
                     else if(energy < 200)
                     {
                        Alarm.show("你的核心能量不够！");
                     }
                     else
                     {
                        SocketConnection.sendWithCallback(48034,function():void
                        {
                           showCrtPage();
                        });
                     }
                  }
                  else if(crtPage == 3)
                  {
                     if(_medalStates[2])
                     {
                        Alarm.show("你已经拥有操控奖章！");
                     }
                     else if(score < 100)
                     {
                        Alarm.show("你的技巧积分不够！");
                     }
                     else
                     {
                        doExchange(2857);
                     }
                  }
               });
               break;
            case _map.topLevel["buyBtn"]:
               KTool.getBitSet([19256,19257,19258,19259],function(param1:Array):void
               {
                  _medalStates = param1;
                  if(crtPage == 1)
                  {
                     if(_medalStates[0])
                     {
                        Alarm.show("你已经拥有组装奖章！");
                     }
                     else
                     {
                        buyItem(240710,2850);
                     }
                  }
                  else if(crtPage == 2)
                  {
                     if(_medalStates[1])
                     {
                        Alarm.show("你已经拥有充能奖章！");
                     }
                     else
                     {
                        buyItem(240711,2853);
                     }
                  }
                  else if(crtPage == 3)
                  {
                     if(_medalStates[2])
                     {
                        Alarm.show("你已经拥有操控奖章！");
                     }
                     else
                     {
                        buyItem(240714,2858);
                     }
                  }
               });
               break;
            case _map.topLevel["exitBtn"]:
               MapManager.changeMap(1007);
               break;
            case _map.topLevel["page1"]["makeModelBtn"]:
               if(core < 1)
               {
                  Alarm.show("你的机械核心数量不够！需要1个机械核心和5个机械碎片！");
               }
               else if(piece < 5)
               {
                  Alarm.show("你的机械碎片数量不够！需要1个机械核心和5个机械碎片！");
               }
               else
               {
                  doExchange(2848);
               }
               break;
            case _map.topLevel["page1"]["buyModelBtn"]:
               buyItem(240708,2847);
               break;
            case _map.topLevel["page1"]["getModelMC"]["btn"]:
               if(_map.topLevel["page1"]["getModelMC"].currentFrame == 1)
               {
                  doExchange(2846);
               }
               else if(_map.topLevel["page1"]["getModelMC"].currentFrame == 2)
               {
                  LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
               }
               break;
            case _map.topLevel["page1"]["makeCoreMC"]["btn"]:
               if(_map.topLevel["page1"]["makeCoreMC"].currentFrame == 1)
               {
                  SocketConnection.sendWithCallback(CommandID.GAIAMACHINE_CMD_1,function():void
                  {
                     showCrtPage();
                  },1);
               }
               else if(_map.topLevel["page1"]["makeCoreMC"].currentFrame == 2)
               {
                  SocketConnection.sendWithCallback(CommandID.GAIAMACHINE_CMD_1,function():void
                  {
                     showCrtPage();
                  },2);
               }
               else if(_map.topLevel["page1"]["makeCoreMC"].currentFrame == 3)
               {
                  buyItem(240709,2851);
               }
               break;
            case _map.topLevel["page1"]["gaia"]:
               NpcDialog.show(NPC.GAIYA_MECHA,["要想通过机甲组装测试，请快去组合5个机器人模型!只有通过我认可的人才能正式驾驭我！  "],["我现在就去！。。。"]);
               break;
            case _map.topLevel["page2"]["gaia"]:
               NpcDialog.show(NPC.GAIYA_MECHA,["快去收集组足够的核心能量吧，只要你有恒心，就能通过我的机甲充能测试！只有通过我的认可才能真正驾驭我！ "],["我现在就去！。。。"]);
               break;
            case _map.topLevel["page2"]["getMC"]["btn"]:
               if(_map.topLevel["page2"]["getMC"].currentFrame == 1)
               {
                  doExchange(2855);
               }
               else if(_map.topLevel["page2"]["getMC"].currentFrame == 2)
               {
                  LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
               }
               break;
            case _map.topLevel["page2"]["buyEnergyBtn"]:
               buyItem(240712,2854);
               break;
            case _map.topLevel["page2"]["npc_0"]:
               npcClick(0);
               break;
            case _map.topLevel["page2"]["npc_1"]:
               npcClick(1);
               break;
            case _map.topLevel["page2"]["npc_2"]:
               npcClick(2);
               break;
            case _map.topLevel["page2"]["npc_3"]:
               npcClick(3);
               break;
            case _map.topLevel["page2"]["npc_4"]:
               npcClick(4);
               break;
            case _map.topLevel["page2"]["npc_5"]:
               npcClick(5);
               break;
            case _map.topLevel["page3"]["getMC"]["btn"]:
               if(_map.topLevel["page3"]["getMC"].currentFrame == 1)
               {
                  doExchange(2856);
               }
               else if(_map.topLevel["page3"]["getMC"].currentFrame == 2)
               {
                  LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
               }
               break;
            case _map.topLevel["page3"]["gaia"]:
               NpcDialog.show(NPC.GAIYA_MECHA,["想通过机甲操作测试，请使用核心能量驾驶我，和对面的对手进行对战练习！选择越高级的模式消耗的能量越多，但是得到的积分越高！ "],["我现在就去！。。。"]);
               break;
            case _map.topLevel["page3"]["captain"]:
               NpcDialog.show(NPC.SHIPER,["就让我的专属精灵陪你们训练吧！请一定要努力哦！ "],["我会尽快拿到奖章的！"]);
               break;
            case _map.topLevel["page3"]["boss"]:
               NpcDialog.show(NPC.LUODISIKE,["现在你的战斗模式是：" + crtBossLv + "级需要消耗" + int(50 * crtBossLv) + "点核心能量，是否进入挑战？ "],["来吧，我准备好了。 ","再等等，我准备一下。"],[function():void
               {
                  if(energy < int(50 * crtBossLv))
                  {
                     Alarm.show("你的核心能量不够！");
                  }
                  else
                  {
                     FightManager.fightNoMapBoss("罗迪斯克",1714 + crtBossLv);
                     if(crtBossLv == 1)
                     {
                        StatManager.sendStat2014("盖亚机甲","选择1级能量对战并且进入战斗的",StatManager.RUN_ACT);
                     }
                     else if(crtBossLv == 2)
                     {
                        StatManager.sendStat2014("盖亚机甲","选择2级能量对战并且进入战斗的",StatManager.RUN_ACT);
                     }
                     else if(crtBossLv == 3)
                     {
                        StatManager.sendStat2014("盖亚机甲","选择3级能量对战并且进入战斗的",StatManager.RUN_ACT);
                     }
                     else if(crtBossLv == 4)
                     {
                        StatManager.sendStat2014("盖亚机甲","选择4级能量对战并且进入战斗的",StatManager.RUN_ACT);
                     }
                  }
               }]);
               break;
            case _map.topLevel["page3"]["chooseBtn"]:
               _map.topLevel["page3"]["chooseMC"].visible = true;
               break;
            case _map.topLevel["page3"]["chooseMC"]["item_0"]:
               crtBossLv = 1;
               _map.topLevel["page3"]["crtLv"].text = "1";
               _map.topLevel["page3"]["chooseMC"].visible = false;
               break;
            case _map.topLevel["page3"]["chooseMC"]["item_1"]:
               crtBossLv = 2;
               _map.topLevel["page3"]["crtLv"].text = "2";
               _map.topLevel["page3"]["chooseMC"].visible = false;
               break;
            case _map.topLevel["page3"]["chooseMC"]["item_2"]:
               crtBossLv = 3;
               _map.topLevel["page3"]["crtLv"].text = "3";
               _map.topLevel["page3"]["chooseMC"].visible = false;
               break;
            case _map.topLevel["page3"]["chooseMC"]["item_3"]:
               crtBossLv = 4;
               _map.topLevel["page3"]["crtLv"].text = "4";
               _map.topLevel["page3"]["chooseMC"].visible = false;
               break;
            case _map.topLevel["page3"]["buyScoreBtn"]:
               buyItem(240713,2859);
         }
      }
      
      private static function buyItem(param1:int, param2:int) : void
      {
         var itemID:int = param1;
         var exchangeID:int = param2;
         KTool.buyProductByCallback(itemID,1,function():void
         {
            KTool.doExchange(exchangeID,function():void
            {
               showCrtPage();
            });
         });
      }
      
      private static function doExchange(param1:int) : void
      {
         var id:int = param1;
         KTool.doExchange(id,function():void
         {
            showCrtPage();
         });
      }
      
      public static function destroy() : void
      {
         var _loc2_:MovieClip = null;
         var _loc1_:int = 0;
         while(_loc1_ < 5)
         {
            _loc2_ = _map.topLevel["page2"]["npc_" + _loc1_];
            ToolTipManager.remove(_loc2_);
            _loc1_++;
         }
         clearInterval(countInterval);
         _loc1_ = 0;
         while(_loc1_ < intervals.length)
         {
            clearInterval(intervals[_loc1_]);
            _loc1_++;
         }
         _map.topLevel.removeEventListener(MouseEvent.CLICK,onClicked);
         _map = null;
         if(_timer)
         {
            _timer.removeEventListener(TimerEvent.TIMER,onTimer);
            _timer.removeEventListener(TimerEvent.TIMER_COMPLETE,onTimeOver);
            _timer.stop();
         }
      }
      
      private static function exploitNow() : void
      {
         if(_timer)
         {
            return;
         }
         MainManager.actorModel.moveAndAction(new Point(755,305),function():void
         {
            addProBar();
            _timer.addEventListener(TimerEvent.TIMER,onTimer);
            _timer.addEventListener(TimerEvent.TIMER_COMPLETE,onTimeOver);
            _timer.start();
         });
         _timer = new Timer(1000,10);
      }
      
      private static function addProBar() : void
      {
         _exploitPorBar = UIManager.getMovieClip("ExploitPorBarMC");
         _exploitPorBar.y = -80;
         _exploitPorBar.gotoAndStop(1);
         MainManager.actorModel.addChild(_exploitPorBar);
      }
      
      private static function onTimer(param1:TimerEvent) : void
      {
         _exploitPorBar.gotoAndStop(param1.target.currentCount * 5);
      }
      
      private static function onTimeOver(param1:TimerEvent) : void
      {
         var evt:TimerEvent = param1;
         _timer.removeEventListener(TimerEvent.TIMER,onTimer);
         _timer.removeEventListener(TimerEvent.TIMER_COMPLETE,onTimeOver);
         _timer.stop();
         _timer = null;
         DisplayUtil.removeForParent(_exploitPorBar);
         SocketConnection.sendWithCallback(CommandID.GAIAMACHINE_CMD_2,function():void
         {
            showCrtPage();
         });
      }
   }
}
