package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.utils.BitUtil;
   import org.taomee.utils.DisplayUtil;
   
   public class MoonValleyController
   {
      
      private static const PRE_TASK_BUFF:int = 1041;
      
      private static const FOREVER_NUM:int = 3001;
      
      private static var _map:BaseMapProcess;
      
      private static var _fightBolini:Boolean;
      
      private static var _foreverNum:int;
      
      private static var activeTime:CronTimeVo = new CronTimeVo("*","*","4-10","12","*","2015");
       
      
      public function MoonValleyController()
      {
         super();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         if(activeTime.isActive(SystemTimerManager.sysBJDate))
         {
            SocketConnection.send(1022,86062374);
            _map = param1;
            taskMc.buttonMode = true;
            taskMc.addEventListener(MouseEvent.CLICK,onTask);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
            checkPreTask();
         }
         else
         {
            DisplayUtil.removeForParent(param1.conLevel["moonValleyMc"]);
         }
      }
      
      private static function checkPreTask() : void
      {
         if(isTaskDone)
         {
            showBoss();
         }
         else
         {
            CommonUI.addYellowExcal(_map.topLevel,255,146,0);
            taskMc.gotoAndStop(1);
         }
      }
      
      private static function onTask(param1:MouseEvent) : void
      {
         if(!isTaskDone)
         {
            startPreTask();
            return;
         }
         var _loc2_:String = String(param1.target.name.split("_")[0]);
         var _loc3_:int = int(param1.target.name.split("_")[1]);
         switch(_loc2_)
         {
            case "haidao":
               SocketConnection.send(1022,86062376);
               _fightBolini = false;
               FightManager.fightWithBoss("海盗",12);
               break;
            case "bolini":
               _fightBolini = true;
               if(isAllActivated)
               {
                  FightManager.fightWithBoss("博里尼",13);
               }
               else
               {
                  Alarm.show("你还没有启动5个大地之鼎！");
               }
               break;
            case "ding":
               ModuleManager.showModule(ClientConfig.getAppModule("LostEarthNucleusPanel"),"正在努力打开面板...",_loc3_);
         }
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         if(!_fightBolini)
         {
            return;
         }
         _fightBolini = false;
         if((param1.dataObj as FightOverInfo).winnerID == MainManager.actorID)
         {
            doWin();
         }
         else
         {
            doFail();
         }
      }
      
      private static function doWin() : void
      {
         NpcDialog.show(NPC.BOLINI,["果然有点实力！你们真的不是来抢大地之核的？那刚才的晃动是怎么回事？ "],["你真的误会啦！"],[function():void
         {
            NpcDialog.show(NPC.KALULU,["我们是守卫宇宙和平的赛尔先锋队！收到了这里的求救信号才赶过来的！刚才的晃动……"],["卡璐璐不要卖关子啦！"],[function():void
            {
               NpcDialog.show(NPC.KALULU,["我想应该是雷伊和盖亚大战前释放的能量，我们快去找他们，看这场王者对决的盛况！"],["我和你们一起去！"],[function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["嗯！好的！等等……是火焰皇地传来的求救信号！赛尔先锋队，我们火速赶往火焰皇地！"],["加油吧！勇敢的赛尔！"],[function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("NewYearPetFestivalPanel"));
                     SocketConnection.send(CommandID.LOST_NUCLEUS_GET_BONUS);
                     Alarm.show("2500个<font color=\'#FF0000\'>赛尔豆</font>已经放入你的储存箱。");
                     SocketConnection.send(1022,86062380);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function doFail() : void
      {
         NpcDialog.show(NPC.BOLINI,["哼！原来你们就是来抢大地之核的！你们和海盗是一伙的！我是不会允许你们带走这里一点能源的！"],["你误会了！你误会了！"]);
      }
      
      private static function showBoss() : void
      {
         updateForever(function():void
         {
            if(isAllActivated)
            {
               stopAtLastFrame(5);
               CommonUI.addYellowArrow(_map.topLevel,255,146,0);
               return;
            }
            taskMc.addEventListener(Event.FRAME_CONSTRUCTED,function(param1:Event):void
            {
               if(taskMc.currentFrame != 4)
               {
                  return;
               }
               taskMc.removeEventListener(Event.FRAME_CONSTRUCTED,arguments.callee);
               var _loc3_:int = 0;
               while(_loc3_ < 5)
               {
                  if(isActivated(_loc3_))
                  {
                     taskMc["ding_" + _loc3_]["arrow"].visible = false;
                  }
                  else
                  {
                     taskMc["ding_" + _loc3_]["arrow"].visible = true;
                  }
                  _loc3_++;
               }
            });
            taskMc.gotoAndStop(4);
         });
      }
      
      public static function updateForever(param1:Function = null) : void
      {
         var cb:Function = param1;
         KTool.getForeverNum(FOREVER_NUM,function(param1:int):void
         {
            _foreverNum = param1;
            if(null != cb)
            {
               cb();
            }
         });
      }
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         SocketConnection.send(1022,86062375);
         CommonUI.removeYellowExcal(_map.topLevel);
         KTool.hideMapAllPlayerAndMonster();
         story = [[TaskStoryPlayer.DIALOG,[NPC.BOLINI,["你们快点把大地之核还回来，没有大地之核的能量，月牙河谷就要崩塌，这里的精灵都将灭亡！"],["哟哟哟！"]]],[TaskStoryPlayer.DIALOG,[NPC.ALLISON,["我就喜欢看陌生的精灵紧张的样子，我就不还，我就不还，你来打我啊！你来打我啊！ "],["欺人太甚！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["发生了什么事情？怎么又是你们这群坏蛋！！！ "],["看我的！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.KALULU,["到底发生了什么事情？这只精灵为什么看上去那么虚弱的样子！"],["他们！是他们！"]]],[TaskStoryPlayer.DIALOG,[NPC.BOLINI,["他们抢走了大地之鼎内的大地之核！没有大地之核，月牙河谷将会崩塌！到时候只会生灵涂炭！ "],["可恶的海盗！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["维护正义的赛尔先锋队！让我们夺回大地之核。记住不属于自己的东西，不能拿！ "],["多管闲事的赛尔！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            BitBuffSetClass.setState(22433,1);
            KTool.showMapAllPlayerAndMonster();
            showBoss();
         };
         storyPlayer.start();
      }
      
      public static function activateOne(param1:int) : void
      {
         taskMc["ding_" + param1]["arrow"].visible = false;
         NpcDialog.show(NPC.BOLINI,["加油啊！月牙河谷的安宁就靠你们啦！勇敢的赛尔，你们太强大啦！"],["客气啦！哈哈！"]);
      }
      
      public static function activateAll() : void
      {
         var i:int = 0;
         while(i < 5)
         {
            taskMc["ding_" + i]["arrow"].visible = false;
            i++;
         }
         NpcDialog.show(NPC.BOLINI,["太棒啦！大地之核归位，月牙河谷恢复啦！太感谢你们啦！"],["客气啦！哈哈！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMc,5,"mc5",function():void
            {
               NpcDialog.show(NPC.BOLINI,["你们也是来掠夺大地之核的能量？可恶的铁皮人！吃我一锤！"],["你误会啦！"],[function():void
               {
                  CommonUI.addYellowArrow(_map.topLevel,255,146,0);
               }]);
            });
         }]);
      }
      
      private static function stopAtLastFrame(param1:int) : void
      {
         var frameIndex:int = param1;
         KTool.getFrameMc(taskMc,frameIndex,"mc" + frameIndex,function(param1:MovieClip):void
         {
            param1.gotoAndStop(param1.totalFrames);
         });
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            CommonUI.removeYellowExcal(_map.topLevel);
            taskMc.removeEventListener(MouseEvent.CLICK,onTask);
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
            DisplayUtil.removeForParent(taskMc);
            _map = null;
         }
      }
      
      private static function get taskMc() : MovieClip
      {
         return _map.conLevel["moonValleyMc"];
      }
      
      private static function get isTaskDone() : Boolean
      {
         return BitBuffSetClass.getState(22433);
      }
      
      public static function get isAllActivated() : Boolean
      {
         var _loc1_:int = 0;
         while(_loc1_ < 5)
         {
            if(!isActivated(_loc1_))
            {
               return false;
            }
            _loc1_++;
         }
         return true;
      }
      
      public static function isActivated(param1:int) : Boolean
      {
         return BitUtil.getBit(_foreverNum,param1) == 1;
      }
   }
}
