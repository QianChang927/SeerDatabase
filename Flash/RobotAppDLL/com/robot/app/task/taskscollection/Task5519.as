package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task5519
   {
      
      public static const TASK_ID:uint = 5519;
      
      private static var _map:BaseMapProcess;
      
      private static var _clickNpc:MovieClip;
      
      private static const _regionNikesi:uint = 3;
      
      private static const _regionXipusi:uint = 2;
      
      private static const _regionStory:uint = 4;
      
      private static var _taskStatus:uint = 1;
      
      private static const AC:ActivityControl = new ActivityControl([new CronTimeVo("*","*","7-17","3","*","2016")]);
       
      
      public function Task5519()
      {
         super();
      }
      
      public static function initForTaskMap95(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.conLevel["task5519MC"].visible = isActive;
         if(!isActive)
         {
            return;
         }
         if(!BufferRecordManager.getMyState(1307))
         {
            KTool.hideMapAllPlayerAndMonster();
            _clickNpc = taskMC["mc1"]["xipule_npc"] as MovieClip;
            _clickNpc.buttonMode = true;
            _clickNpc.addEventListener(MouseEvent.CLICK,initPreTask);
         }
         else if(_taskStatus == 1)
         {
            initStep1();
         }
      }
      
      public static function get isActive() : Boolean
      {
         return AC.isInActivityTime;
      }
      
      private static function initPreTask(param1:MouseEvent) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var evt:MouseEvent = param1;
         SocketConnection.send(1022,86060180);
         _clickNpc.removeEventListener(MouseEvent.CLICK,initPreTask);
         story = [[TaskStoryPlayer.DIALOG,[NPC.SEER,["你怎么样？这里发生了什么？"],null]],[TaskStoryPlayer.DIALOG,[NPC.XIPULE,["我是天蛇星灵宫守卫希普勒，刚才一群海盗集团来我天蛇星掠夺资源。轮番交战即将耗尽我的能量……"],null]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["又是可恶的海盗，总是喜欢趁火打劫！ 那现在我该怎么帮你啊？"],null]],[TaskStoryPlayer.DIALOG,[NPC.XIPULE,["从海盗集团的手里夺回属于天蛇星的天蛇能量珠，帮我恢复能量。我定要誓死保卫天蛇星！"],["我这就去找海盗集团！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMC,2,"mc2"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            taskMC["mc2"]["seer_mc"].visible = false;
            KTool.showMapAllPlayerAndMonster();
            MapListenerManager.add(taskMC["mc2"]["xipule_npc"],function():void
            {
               FightManager.fightWithBoss("尼斯克",_regionNikesi);
            });
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
            {
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
               BufferRecordManager.setMyState(1307,true);
               initStep1();
            });
            FightManager.fightWithBoss("尼斯克",_regionNikesi);
            SocketConnection.send(1022,86060181);
         };
         storyPlayer.start();
      }
      
      private static function initStep1() : void
      {
         KTool.showMapAllPlayerAndMonster();
         taskMC.addEventListener(Event.FRAME_CONSTRUCTED,function():void
         {
            if(taskMC.currentFrame == 3)
            {
               taskMC.removeEventListener(Event.FRAME_CONSTRUCTED,arguments.callee);
               taskMC["mc3"]["seer_mc"].visible = false;
               MapListenerManager.add(taskMC["mc3"]["nisike_pet"],function():void
               {
                  FightManager.fightWithBoss("尼斯克",_regionNikesi);
               });
               MapListenerManager.add(taskMC["mc3"]["haiDao_2"],function():void
               {
                  FightManager.fightWithBoss("尼斯克",_regionNikesi);
               });
               MapListenerManager.add(taskMC["mc3"]["haiDao_1"],function():void
               {
                  FightManager.fightWithBoss("尼斯克",_regionNikesi);
               });
               MapListenerManager.add(taskMC["mc3"]["xipule_npc"],function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("TianSheXingActivityPanel"));
               });
            }
         });
         taskMC.gotoAndStop(3);
      }
      
      public static function initStep2() : void
      {
         var story2:Array;
         var storyPlayer2:TaskStoryPlayer = null;
         _taskStatus = 0;
         KTool.hideMapAllPlayerAndMonster();
         story2 = [[TaskStoryPlayer.DIALOG,[NPC.XIPULE,["谢谢你，勇敢的赛尔！我感觉全身充满了能量。可恶的海盗，我要把能量珠全部夺回来！"],null]],[TaskStoryPlayer.DIALOG,[NPC.ZOG,[" 不好！快撤！可恶的赛尔总是坏我好事！"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMC,4,"mc4"]]];
         storyPlayer2 = new TaskStoryPlayer();
         storyPlayer2.addStory(story2);
         storyPlayer2.storyEndCallback = function():void
         {
            storyPlayer2.destory();
            storyFightBegin();
         };
         storyPlayer2.start();
      }
      
      private static function storyFightBegin() : void
      {
         firstStoryFightOver();
         FightManager.fightWithBoss("希普勒",_regionStory);
      }
      
      private static function firstStoryFightOver() : void
      {
         taskMC["mc4"]["seer_mc"].visible = false;
         KTool.showMapAllPlayerAndMonster();
         MapListenerManager.add(taskMC["mc4"]["xipule_npc"],function():void
         {
            FightManager.fightWithBoss("希普勒",_regionStory);
         });
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
         {
            var e:PetFightEvent = param1;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            KTool.getFrameMc(taskMC,4,"mc4",function(param1:MovieClip):void
            {
               var story3:Array;
               var storyPlayer3:TaskStoryPlayer = null;
               var mc4:MovieClip = param1;
               mc4.gotoAndStop(mc4.totalFrames);
               story3 = [[TaskStoryPlayer.DIALOG,[NPC.AIXINGE,["天蛇星真是一个好地方啊！ 让我不禁想拥有它！"],["你说什么？"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["你到底是谁？希普勒为什么会突然攻击我？"],["还没有结束呢！"]]]];
               storyPlayer3 = new TaskStoryPlayer();
               storyPlayer3.addStory(story3);
               storyPlayer3.storyEndCallback = function():void
               {
                  storyPlayer3.destory();
                  secondStoryFightOver();
                  FightManager.fightWithBoss("希普勒",_regionXipusi);
                  MapListenerManager.add(taskMC["mc4"]["xipule_npc"],function():void
                  {
                     FightManager.fightWithBoss("希普勒",_regionXipusi);
                  });
               };
               storyPlayer3.start();
            });
         });
      }
      
      private static function secondStoryFightOver() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
         {
            var info:FightOverInfo;
            var e:PetFightEvent = param1;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            info = e.dataObj as FightOverInfo;
            if(info.winnerID == MainManager.actorID)
            {
               SocketConnection.send(1022,86060184);
               if(BufferRecordManager.getMyState(1307) == false)
               {
                  KTool.hideMapAllPlayerAndMonster();
                  BufferRecordManager.setMyState(1307,true);
                  AnimateManager.playMcAnimate(taskMC,5,"mc5",function():void
                  {
                     NpcDialog.show(NPC.AIXINGE,["天蛇星盟主？哈哈哈！今天的战斗就到这里了。记住，这才刚刚开始！ "],["可恶！"],[function():void
                     {
                        SocketConnection.sendWithCallback(CommandID.TIANSHEXING_XIPULE,function(param1:SocketEvent):void
                        {
                           DebugTrace.show((param1.data as ByteArray).length);
                           afterCompleteTask();
                        });
                     }]);
                  });
               }
               else
               {
                  SocketConnection.sendWithCallback(CommandID.TIANSHEXING_XIPULE,function(param1:SocketEvent):void
                  {
                     var _loc2_:ByteArray = param1.data as ByteArray;
                     _loc2_.position = 0;
                     var _loc3_:int = int(_loc2_.readUnsignedInt());
                     if(0 == _loc3_)
                     {
                        Alert.show("明明胜利了，后台却返回 0 ，代表没得到精元！！！！！！！！");
                     }
                     afterCompleteTask();
                  });
               }
            }
            else
            {
               KTool.getFrameMc(taskMC,4,"mc4",function(param1:MovieClip):void
               {
                  var mc4:MovieClip = param1;
                  mc4.gotoAndStop(mc4.totalFrames);
                  NpcDialog.show(NPC.AIXINGE,["哈哈哈。我喜欢这样的争斗！天蛇星！迟早是我的！ "],["你不要太嚣张！"],[function():void
                  {
                     KTool.showMapAllPlayerAndMonster();
                     taskMC["mc4"]["seer_mc"].visible = false;
                     MapListenerManager.add(taskMC["mc4"]["xipule_npc"],function():void
                     {
                        FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
                        {
                           var e:PetFightEvent = param1;
                           FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                           SocketConnection.sendWithCallback(CommandID.TIANSHEXING_XIPULE,function(param1:SocketEvent):void
                           {
                              if(0 != (param1.data as ByteArray).readUnsignedInt())
                              {
                                 afterCompleteTask();
                                 SocketConnection.send(1022,86060184);
                              }
                           });
                        });
                        FightManager.fightWithBoss("希普勒",_regionXipusi);
                     });
                  }]);
               });
            }
         });
      }
      
      private static function afterCompleteTask() : void
      {
         _taskStatus = 1;
         initStep1();
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 95 && Boolean(_map.conLevel["task5519MC"]))
         {
            return _map.conLevel["task5519MC"];
         }
         return null;
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         KTool.showMapAllPlayerAndMonster();
         if(taskMC)
         {
            taskMC.removeEventListener(MouseEvent.CLICK,initStep1);
            DisplayUtil.removeForParent(taskMC);
         }
         _map = null;
      }
   }
}
