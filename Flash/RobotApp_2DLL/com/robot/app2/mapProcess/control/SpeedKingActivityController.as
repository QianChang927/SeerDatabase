package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.petstory.util.EventListenerManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.OgreModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class SpeedKingActivityController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMc:MovieClip;
      
      protected static var _eventListenerManager:EventListenerManager;
      
      private static var currOgreId:int = 0;
      
      private static var shilaimuShowTime:CronTimeVo = new CronTimeVo("*","13-14","*","*","*","2014");
      
      private static var mcAipuoou:MovieClip;
      
      private static var kingState:Array = [0,0,0,0];
      
      private static var bosses:Array = [];
       
      
      public function SpeedKingActivityController()
      {
         super();
      }
      
      public static function gotoEternalTree(param1:* = null) : void
      {
         StatManager.sendStat2014("永恒之王，唤醒攻击之王","点击装置",StatManager.RUN_ACT);
         if(BitBuffSetClass.getState(22422))
         {
            if(MapManager.currentMap.id != 983 || !BitBuffSetClass.getState(22424))
            {
               MapManager.changeMap(983);
            }
            else
            {
               showPanel();
            }
         }
         else
         {
            MapManager.changeMap(969);
         }
      }
      
      public static function initMap983(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.conLevel["mcSilaimu"].visible = false;
         if(!_eventListenerManager)
         {
            _eventListenerManager = new EventListenerManager();
         }
         if(!BitBuffSetClass.getState(22424))
         {
            playStory();
         }
         else
         {
            showSilaimuNpc();
            addBoss();
         }
         OgreController.isShow = false;
         SocketConnection.addCmdListener(CommandID.FIGHT_NPC_MONSTER,onStartFightWithOgre);
         SocketConnection.addCmdListener(CommandID.MAP_OGRE_LIST,onOgreList);
      }
      
      private static function onOgreList(param1:SocketEvent) : void
      {
         if(shilaimuShowTime.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
         {
            OgreController.isShow = true;
         }
         else
         {
            OgreController.isShow = false;
         }
      }
      
      private static function showSilaimuNpc() : void
      {
         var i:int;
         getKingState();
         _map.conLevel["mcSilaimu"].visible = true;
         MovieClip(_map.conLevel["mcSilaimu"]).buttonMode = true;
         CommonUI.addYellowExcal(_map.conLevel,_map.conLevel["mcSilaimu"].x - 10,_map.conLevel["mcSilaimu"].y);
         _eventListenerManager.addEventListener(_map.conLevel["mcSilaimu_2"],MouseEvent.CLICK,onSilaimuDialog);
         MovieClip(_map.conLevel["mcSilaimu_2"]).buttonMode = true;
         i = 0;
         while(i < 4)
         {
            MovieClip(_map.conLevel["mc_" + i]).buttonMode = true;
            _eventListenerManager.addEventListener(_map.conLevel["mc_" + i],MouseEvent.CLICK,onKingDialog);
            i++;
         }
         SocketConnection.sendWithCallback(CommandID.COMMAND_46075,function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:int = _loc2_.readByte();
            if(_loc3_ == 1)
            {
               MovieClip(_map.conLevel["mcSilaimu"]).gotoAndStop(2);
               _eventListenerManager.addEventListener(_map.conLevel["mcSilaimu"],MouseEvent.CLICK,onShilaimuKingDialog);
            }
            else
            {
               MovieClip(_map.conLevel["mcSilaimu"]).gotoAndStop(1);
               _eventListenerManager.addEventListener(_map.conLevel["mcSilaimu"],MouseEvent.CLICK,onSilaimuDialog);
            }
         },12808);
      }
      
      private static function onShilaimuKingDialog(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.SHILAIMU_KING,["我一定要想办法拿回永恒石碎片！"],["我支持你！"],[function():void
         {
            showPanel();
         }]);
      }
      
      private static function onSilaimuDialog(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.SHILAIMU,["0xff0000" + MainManager.actorInfo.nick + "0xffffff我们一定要抓紧时间，否则那个可怕的怪物真的来捣乱，那就麻烦了！"],["恩，我们这就去唤醒永恒之王！"],[function():void
         {
            showPanel();
         }]);
      }
      
      private static function onKingDialog(param1:MouseEvent) : void
      {
         var i:int = 0;
         var e:MouseEvent = param1;
         var index:int = int(String(e.currentTarget.name).split("_")[1]);
         var names:Array = ["速度之王","体力之王","防御之王","攻击之王"];
         var npcs:Array = [2124,2127,2128,2129];
         if(allKingActivity())
         {
            NpcDialog.show(npcs[index],["快去复活国王吧！"],["我这就去"],[function():void
            {
               showPanel();
            }]);
            return;
         }
         if(index < 4 && kingState[index] == 1)
         {
            i = 0;
            while(i < 4)
            {
               if(i != index)
               {
                  if(kingState[i] == 0)
                  {
                     NpcDialog.show(npcs[index],["0xff0000" + MainManager.actorInfo.nick + "0xffffff我们时间不多了，快去复活" + names[i] + "！"],["嗯，我们这就去唤醒" + names[i] + "！"],[function():void
                     {
                        showPanel();
                     }]);
                     return;
                  }
               }
               i++;
            }
         }
         NpcDialog.show(NPC.SHILAIMU,["0xff0000" + MainManager.actorInfo.nick + "0xffffff我们一定要抓紧时间，否则那个可怕的怪物真的来捣乱，那就麻烦了！"],["恩，我们这就去唤醒永恒之王！"],[function():void
         {
            showPanel();
         }]);
      }
      
      private static function allKingActivity() : Boolean
      {
         var _loc1_:int = 0;
         while(_loc1_ < kingState.length)
         {
            if(kingState[_loc1_] == 0)
            {
               return false;
            }
            _loc1_++;
         }
         return true;
      }
      
      private static function onStartFightWithOgre(param1:*) : void
      {
         currOgreId = PetFightModel.defaultNpcID;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverHandler);
      }
      
      private static function onFightOverHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOverHandler);
         randomFight();
      }
      
      private static function randomFight() : void
      {
         var random:Number = NaN;
         if(currOgreId != 0 && currOgreId != 2239)
         {
            currOgreId = 0;
            random = Math.random();
            if(random < 0.1)
            {
               getMc(function(param1:MovieClip):void
               {
                  var mc:MovieClip = param1;
                  _map.btnLevel.addChild(mc);
                  KTool.hideMapAllPlayerAndMonster();
                  AnimateManager.playMcAnimate(mc,6,"mc6",function():void
                  {
                     NpcDialog.show(NPC.SEER,["又是你，别以为你可以在这里误作非为，让你尝尝我的实力！"],["挑战时空扰乱者！","我先准备一下！"],[function():void
                     {
                        DisplayUtil.removeForParent(mc);
                        FightManager.fightWithBoss("时空扰乱者",2);
                        KTool.showMapAllPlayerAndMonster();
                     },function():void
                     {
                        DisplayUtil.removeForParent(mc);
                        CommonUI.addYellowArrow(_map.topLevel,433,115);
                        ResourceManager.getResource(ClientConfig.getAppRes("aipuouspeedking"),function(param1:MovieClip):void
                        {
                           mcAipuoou = param1;
                           _map.btnLevel.addChild(param1);
                           _eventListenerManager.addEventListener(param1,MouseEvent.CLICK,onClickMcHandler);
                        });
                        KTool.showMapAllPlayerAndMonster();
                     }]);
                  });
               });
            }
         }
      }
      
      private static function onClickMcHandler(param1:MouseEvent) : void
      {
         DisplayUtil.removeForParent(mcAipuoou);
         CommonUI.removeYellowArrow(_map.topLevel);
         mcAipuoou = null;
         SocketConnection.addCmdListener(CommandID.CHALLENGE_BOSS,onFightWithAipuou);
         FightManager.fightWithBoss("艾普欧",2);
      }
      
      private static function playStory() : void
      {
         getMc(function(param1:MovieClip):void
         {
            taskMC = param1;
            _map.btnLevel.addChild(taskMC);
            KTool.hideMapAllPlayerAndMonster();
            _map.depthLevel.visible = false;
            playPreStory();
         });
      }
      
      private static function playPreStory() : void
      {
         SocketConnection.send(1022,86071104);
         SocketConnection.send(1022,86071479);
         TaskDiaLogManager.single.playStory(prevStroy,function():void
         {
            SocketConnection.send(1022,86071105);
            SocketConnection.send(1022,86071480);
            _map.depthLevel.visible = true;
            KTool.showMapAllPlayerAndMonster();
            BitBuffSetClass.setState(22424,1);
            DisplayUtil.removeForParent(taskMC);
            showSilaimuNpc();
            addBoss();
         });
      }
      
      private static function get prevStroy() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:int = 0;
         var _loc3_:String = "cartoon/speedking";
         var _loc4_:String = "20140319_55";
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 1,"mc1"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["终于进来了，这里就是国王说的永恒之树地下领域，那颗闪闪发光的石头难道就是永恒石？"],["是的，我的伙伴，那就是我们守护的永恒石！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 2,"mc2"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHILAIMU,["0xff0000" + MainManager.actorInfo.nick + "0xffffff国王需要寻找的永恒之王就在你的面前，但是不知为何他们似乎都失去了能量，仿佛一直想沉睡下去？"],["这里肯定发生了什么！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["史莱姆你在回想下，当时发生了什么事情，时间紧迫，我们不能再耽误了？"],["我记得当时创世六神兵…"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.CARTOON,0,null,null,[_loc3_]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["原来是这样，如果我没有猜错， 那些沉睡的永恒之王一定将自己的能量也注入到了永恒石中！"],["那我们赶快行动吧！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 3,"mc3"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHILAIMU,["你不能拿走永恒石，这可是永恒星唯一的能源，没了他整个永恒星都会枯竭消失的！"],["谁都不能带走永恒石！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 4,"mc4"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["什么…创世六神兵居然还活着，石像还会攻击，这怎么可能！"],["看来想要得到永恒石，并不容易啊！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIPUOU,["哼…在我眼里这些家伙不值一提！永恒石我要定了，小家伙们，我还会回来的！"],["你们等着恐惧再度降临吧！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 5,"mc5"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHILAIMU,["一定要想办法，否则永恒石随时都有被夺走的危险！0xff0000" + MainManager.actorInfo.nick + "0xffffff我们得想办法唤醒这些永恒之王才行！"],["恩恩，那我们立刻开始吧！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,[_loc4_,true]));
         return _loc1_;
      }
      
      private static function addEvent() : void
      {
      }
      
      private static function showPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("IvokeEternalKingMainPanel"),"正在努力打开面板...");
      }
      
      private static function addBoss() : void
      {
         var _loc4_:OgreModel = null;
         var _loc1_:Array = [38,39,1209,1210];
         var _loc2_:Array = [new Point(500,350),new Point(540,450),new Point(423,450),new Point(250,480)];
         var _loc3_:int = 0;
         while(_loc3_ < 4)
         {
            (_loc4_ = new OgreModel(_loc3_)).addEventListener(RobotEvent.OGRE_CLICK,onClickHandler);
            _loc4_.show(_loc1_[_loc3_],_loc2_[_loc3_]);
            bosses.push(_loc4_);
            _loc3_++;
         }
      }
      
      private static function setBossVisible(param1:Boolean) : void
      {
         var _loc3_:OgreModel = null;
         var _loc2_:int = 0;
         while(_loc2_ < bosses.length)
         {
            _loc3_ = bosses[_loc2_];
            _loc3_.visible = param1;
            _loc2_++;
         }
      }
      
      protected static function onClickHandler(param1:RobotEvent) : void
      {
         var _loc2_:OgreModel = param1.currentTarget as OgreModel;
         currOgreId = _loc2_.id;
         if(_loc2_.id == 1157)
         {
            SocketConnection.addCmdListener(CommandID.CHALLENGE_BOSS,onFightWithSmallBoss);
            FightManager.fightWithBoss("小尾蝶",0);
         }
         else if(_loc2_.id == 1158)
         {
            SocketConnection.addCmdListener(CommandID.CHALLENGE_BOSS,onFightWithSmallBoss);
            FightManager.fightWithBoss("彩翼蝶",1);
         }
         else if(_loc2_.id == 2239)
         {
            currOgreId = 2239;
            SocketConnection.addCmdListener(CommandID.CHALLENGE_BOSS,onFightWithAipuou);
            FightManager.fightWithBoss("艾普欧",2);
         }
         else if(_loc2_.id == 16)
         {
            SocketConnection.addCmdListener(CommandID.CHALLENGE_BOSS,onFightWithSmallBoss);
            FightManager.fightWithBoss("仙人球",3);
         }
         else if(_loc2_.id == 17)
         {
            SocketConnection.addCmdListener(CommandID.CHALLENGE_BOSS,onFightWithSmallBoss);
            FightManager.fightWithBoss("仙人掌",4);
         }
         else if(_loc2_.id == 1210)
         {
            SocketConnection.addCmdListener(CommandID.CHALLENGE_BOSS,onFightWithSmallBoss);
            FightManager.fightWithBoss("道格",6);
         }
         else if(_loc2_.id == 1209)
         {
            SocketConnection.addCmdListener(CommandID.CHALLENGE_BOSS,onFightWithSmallBoss);
            FightManager.fightWithBoss("道尔",5);
         }
         else if(_loc2_.id == 38)
         {
            SocketConnection.addCmdListener(CommandID.CHALLENGE_BOSS,onFightWithSmallBoss);
            FightManager.fightWithBoss("火炎贝",7);
         }
         else if(_loc2_.id == 39)
         {
            SocketConnection.addCmdListener(CommandID.CHALLENGE_BOSS,onFightWithSmallBoss);
            FightManager.fightWithBoss("贝拉米",8);
         }
      }
      
      private static function onFightWithSmallBoss(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.CHALLENGE_BOSS,onFightWithSmallBoss);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverHandler);
      }
      
      private static function onFightWithAipuou(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.CHALLENGE_BOSS,onFightWithAipuou);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onAipuouFightOverHandler);
      }
      
      private static function onAipuouFightOverHandler(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onAipuouFightOverHandler);
         getMc(function(param1:MovieClip):void
         {
            var info:FightOverInfo;
            var mc:MovieClip = param1;
            _map.btnLevel.addChild(taskMC);
            info = e.dataObj as FightOverInfo;
            if(info.winnerID == MainManager.actorID)
            {
               NpcDialog.show(NPC.AIPUOU,["小子…你居然敢破坏我的计划，我一定会记住你的！"],["我一定会回来报仇的！"],[function():void
               {
                  _map.btnLevel.addChild(taskMC);
                  KTool.hideMapAllPlayerAndMonster();
                  AnimateManager.playMcAnimate(_taskMc,7,"mc7",function():void
                  {
                     DisplayUtil.removeForParent(taskMC);
                     KTool.showMapAllPlayerAndMonster();
                  });
               }]);
            }
            else
            {
               NpcDialog.show(NPC.AIPUOU,["哼哼…你真是太弱了，就凭你这样也想守护永恒石！"],["下次你就没这么走运了！"],[function():void
               {
                  _map.btnLevel.addChild(taskMC);
                  KTool.hideMapAllPlayerAndMonster();
                  AnimateManager.playMcAnimate(_taskMc,8,"mc8",function():void
                  {
                     KTool.showMapAllPlayerAndMonster();
                     DisplayUtil.removeForParent(taskMC);
                     NpcDialog.show(NPC.AIPUOU,["我太低估这家伙的实力了，如果再有机会遇到，一定要想办法击败它才行！"],["加油吧！赛尔！"],[function():void
                     {
                     }]);
                  });
               }]);
            }
         });
      }
      
      private static function getMc(param1:Function) : void
      {
         var fun:Function = param1;
         if(taskMC)
         {
            fun(taskMC);
         }
         else
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_983_0"),function(param1:MovieClip):void
            {
               taskMC = param1;
               fun(taskMC);
            });
         }
      }
      
      private static function playAllCompeteAnim() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_983_1"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            setBossVisible(false);
            mc.gotoAndPlay(1);
            KTool.hideMapAllPlayerAndMonster();
            LevelManager.closeMouseEvent();
            _map.btnLevel.addChild(mc);
            setMapKingVisible(false);
            AnimateManager.playMcAnimate(mc,1,"mc",function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("2014041109"),function():void
               {
                  AnimateManager.playMcAnimate(mc,2,"mc",function():void
                  {
                     NpcDialog.show(NPC.SEER,["魔灵王也想抢永恒之石的能量，幸好永恒之王们都苏醒了！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.SUDUSHILAIMU,["我们必须尽快复活史莱姆国王，但是我们的能量用尽了，必须休息。"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.SEER,["没事，我看那坏蛋短时间内也不会回来了！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.SUDUSHILAIMU,["是的，我们休息好了之后就可以复活国王了。"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.SEER,["我会等你们的！"],["好的"],[function():void
                                 {
                                    setBossVisible(true);
                                    DisplayUtil.removeForParent(mc);
                                    LevelManager.openMouseEvent();
                                    KTool.showMapAllPlayerAndMonster();
                                    OgreController.isShow = false;
                                    setMapKingVisible(true);
                                 }]);
                              });
                           });
                        });
                     });
                  });
               });
            });
         });
      }
      
      public static function playIvokeAnim(param1:int) : void
      {
         var index:int = param1;
         var allActivity:Boolean = true;
         var i:int = 0;
         while(i < kingState.length)
         {
            if(kingState[i] == 0 && i != index)
            {
               allActivity = false;
               break;
            }
            i++;
         }
         if(allActivity)
         {
            playAllCompeteAnim();
            return;
         }
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_983_king_" + index),function(param1:MovieClip):void
         {
            var onFrameHandler:Function = null;
            var mc:MovieClip = param1;
            onFrameHandler = function():void
            {
               setBossVisible(true);
               DisplayUtil.removeForParent(mc);
               LevelManager.openMouseEvent();
               KTool.showMapAllPlayerAndMonster();
               OgreController.isShow = false;
               setMapKingVisible(true);
               mc.stop();
               mc.addFrameScript(mc.totalFrames - 1,null);
               if(index == 0)
               {
                  showIvokeSpeedKingDialog();
               }
               else if(index == 1)
               {
                  showIvokePhysicalKingDialog();
               }
               else if(index == 2)
               {
                  showIvokeDefenseKingDialog();
               }
               else if(index == 3)
               {
                  showIvokeAttackKingDialog();
               }
               getKingState();
            };
            var i:int = 0;
            while(i < 4)
            {
               if(mc["mc_" + i])
               {
                  MovieClip(mc["mc_" + i]).gotoAndStop(kingState[i] + 1);
               }
               i++;
            }
            setBossVisible(false);
            mc.gotoAndPlay(1);
            KTool.hideMapAllPlayerAndMonster();
            mc.addFrameScript(mc.totalFrames - 1,onFrameHandler);
            LevelManager.closeMouseEvent();
            _map.btnLevel.addChild(mc);
            setMapKingVisible(false);
         });
      }
      
      private static function showIvokeAttackKingDialog() : void
      {
         NpcDialog.show(NPC.SHILAIMU,["哇，攻击之王被唤醒了！好耶！好耶！"],["哇，我真的把攻击之王唤醒了！"],[function():void
         {
            NpcDialog.show(NPC.GONGJISHILAIMU,["你们都没事吧？"],["没事没事……"],[function():void
            {
               NpcDialog.show(NPC.SHILAIMU,["有坏人想偷走永恒之石的能量！永恒之王你要阻止他们！"],["史莱姆国王也需要复活！"],[function():void
               {
                  NpcDialog.show(NPC.GONGJISHILAIMU,["我会阻止他们的，也会复活国王的！但是我的力量不足，需要你们唤醒其他的永恒之王来帮忙！"],["好的，我这就去唤醒其他永恒之王！"],[function():void
                  {
                     showPanel();
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function showIvokeSpeedKingDialog() : void
      {
         NpcDialog.show(NPC.SHILAIMU,["哇，速度之王被唤醒了！好耶！好耶！"],["哇，我真的把速度之王唤醒了！"],[function():void
         {
            NpcDialog.show(NPC.SUDUSHILAIMU,["你们都没事吧？"],["没事没事……"],[function():void
            {
               NpcDialog.show(NPC.SHILAIMU,["有坏人想偷走永恒之石的能量！永恒之王你要阻止他们！"],["史莱姆国王也需要复活！"],[function():void
               {
                  NpcDialog.show(NPC.SUDUSHILAIMU,["我会阻止他们的，也会复活国王的！但是我的力量不足，需要你们唤醒其他的永恒之王来帮忙！"],["好的，我这就去唤醒其他永恒之王！"],[function():void
                  {
                     showPanel();
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function showIvokePhysicalKingDialog() : void
      {
         NpcDialog.show(NPC.SHILAIMU,["哇，体力之王被唤醒了！好耶！好耶！"],["哇，我真的把体力之王唤醒了！"],[function():void
         {
            NpcDialog.show(NPC.TILISHILAIMU,["你们都没事吧？"],["没事没事……"],[function():void
            {
               NpcDialog.show(NPC.SHILAIMU,["有坏人想偷走永恒之石的能量！永恒之王你要阻止他们！"],["史莱姆国王也需要复活！"],[function():void
               {
                  NpcDialog.show(NPC.TILISHILAIMU,["我会阻止他们的，也会复活国王的！但是我的力量不足，需要你们唤醒其他的永恒之王来帮忙！"],["好的，我这就去唤醒其他永恒之王！"],[function():void
                  {
                     showPanel();
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function showIvokeDefenseKingDialog() : void
      {
         NpcDialog.show(NPC.SHILAIMU,["哇，防御之王被唤醒了！好耶！好耶！"],["哇，我真的把防御之王唤醒了！"],[function():void
         {
            NpcDialog.show(NPC.FANGYUSHILAIMU,["你们都没事吧？"],["没事没事……"],[function():void
            {
               NpcDialog.show(NPC.SHILAIMU,["有坏人想偷走永恒之石的能量！永恒之王你要阻止他们！"],["史莱姆国王也需要复活！"],[function():void
               {
                  NpcDialog.show(NPC.FANGYUSHILAIMU,["我会阻止他们的，也会复活国王的！但是我的力量不足，需要你们唤醒其他的永恒之王来帮忙！"],["好的，我这就去唤醒其他永恒之王！"],[function():void
                  {
                     showPanel();
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function setMapKingVisible(param1:Boolean) : void
      {
         var _loc2_:int = 0;
         while(_loc2_ < 4)
         {
            MovieClip(_map.conLevel["mc_" + _loc2_]).visible = param1;
            _loc2_++;
         }
      }
      
      public static function getKingState() : void
      {
         SocketConnection.sendWithCallback(CommandID.BATCH_GET_BITSET,function(param1:SocketEvent):void
         {
            var _loc6_:int = 0;
            var _loc7_:int = 0;
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:uint = _loc2_.readUnsignedInt();
            var _loc4_:int = 0;
            while(_loc4_ < 4)
            {
               _loc6_ = int(_loc2_.readUnsignedByte());
               kingState[_loc4_] = _loc6_;
               MovieClip(_map.conLevel["mc_" + _loc4_]).gotoAndStop(_loc6_ + 1);
               _loc4_++;
            }
            var _loc5_:int;
            if((_loc5_ = _loc2_.readByte()) == 1)
            {
               _loc7_ = 0;
               while(_loc7_ < 4)
               {
                  MovieClip(_map.conLevel["mc_" + _loc7_]).gotoAndStop(1);
                  _loc7_++;
               }
            }
            setMapKingVisible(true);
         },5,12803,12805,9640,9641,12808);
      }
      
      private static function set taskMC(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMC() : MovieClip
      {
         return _taskMc;
      }
      
      public static function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.MAP_OGRE_LIST,onOgreList);
         SocketConnection.removeCmdListener(CommandID.FIGHT_NPC_MONSTER,onStartFightWithOgre);
         _map = null;
         OgreController.isShow = true;
         _eventListenerManager.clear();
         _eventListenerManager = null;
      }
   }
}
