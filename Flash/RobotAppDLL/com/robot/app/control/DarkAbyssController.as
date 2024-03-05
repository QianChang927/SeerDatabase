package com.robot.app.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class DarkAbyssController
   {
      
      public static const TASK_ID:uint = 1886;
      
      private static var _map:BaseMapProcess;
      
      private static var _clickNpc:MovieClip;
      
      private static const _regionKabji0:uint = 0;
      
      private static const _regionKabji3:uint = 3;
      
      private static const _regionNisike:uint = 2;
       
      
      public function DarkAbyssController()
      {
         super();
      }
      
      public static function setup(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            KTool.hideMapAllPlayerAndMonster();
            _clickNpc = taskMC["mc1"]["ukesi_npc"] as MovieClip;
            _clickNpc.buttonMode = true;
            _clickNpc.addEventListener(MouseEvent.CLICK,initPreTask);
         }
         else if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  _clickNpc = taskMC["mc1"]["ukesi_npc"] as MovieClip;
                  _clickNpc.buttonMode = true;
                  _clickNpc.addEventListener(MouseEvent.CLICK,initPreTask);
               }
               else if(Boolean(param1[0]) && !param1[1])
               {
                  initStep1();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  unlockStep();
               }
            });
         }
         else if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.COMPLETE)
         {
            initStep1();
         }
         SocketConnection.send(1022,86060413);
      }
      
      private static function initPreTask(param1:MouseEvent) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var evt:MouseEvent = param1;
         _clickNpc.removeEventListener(MouseEvent.CLICK,initPreTask);
         story = [[TaskStoryPlayer.DIALOG,[NPC.SEER,["你为什么哭的那么伤心，发生什么事情了？"],null]],[TaskStoryPlayer.DIALOG,[NPC.UKESI,["我的弟弟卡贝基被艾辛格用暗黑之力封印在这里，可是我却没办法救出他！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["艾辛格？又是他！他到底有什么阴谋？ "],null]],[TaskStoryPlayer.DIALOG,[NPC.UKESI,["求求你，能不能帮帮我，把我弟弟救出来！"],["我该怎么做？"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMC,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.UKESI,["艾辛格将光魄结晶放在海盗身上，找到光魄结晶就能驱散我弟弟身上的暗黑能量！"],["就这么简单？"]]],[TaskStoryPlayer.DIALOG,[NPC.ZOG,["简单？太过分了。居然小看我们！我要给你点颜色看看！"],["那就来吧！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            MapListenerManager.add(taskMC["mc2"]["ukesi_npc2"],function():void
            {
               FightManager.fightWithBoss("尼斯克",_regionNisike);
            });
            KTool.showMapAllPlayerAndMonster();
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
            {
               var e:PetFightEvent = param1;
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
               TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
               {
                  initStep1();
               });
            });
            FightManager.fightWithBoss("尼斯克",_regionNisike);
            SocketConnection.send(1022,86060415);
         };
         TasksManager.accept(TASK_ID,function():void
         {
            storyPlayer.start();
         });
      }
      
      private static function initStep1() : void
      {
         KTool.showMapAllPlayerAndMonster();
         taskMC.addEventListener(Event.FRAME_CONSTRUCTED,function():void
         {
            var i:int = 0;
            if(taskMC.currentFrame == 3)
            {
               taskMC.removeEventListener(Event.FRAME_CONSTRUCTED,arguments.callee);
               i = 1;
               while(i < 5)
               {
                  MapListenerManager.add(taskMC["mc3"]["haiDao_" + i],function():void
                  {
                     SocketConnection.send(1022,86060415);
                     FightManager.fightWithBoss("尼斯克",_regionNisike);
                  });
                  i++;
               }
               MapListenerManager.add(taskMC["mc3"]["kabji_npc"],function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("DarkAbyssPanel"));
               });
            }
         });
         taskMC.gotoAndStop(3);
      }
      
      public static function initStep2() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         if(taskMC.currentFrame == 4)
         {
            if(taskMC["mc4"])
            {
               MovieClip(taskMC["mc4"]).gotoAndStop(1);
            }
         }
         AnimateManager.playMcAnimate(taskMC,4,"mc4",function():void
         {
            storyFightBegin();
            if(taskMC["mc4"]["guide_mc"])
            {
               taskMC["mc4"]["guide_mc"].visible = false;
            }
         });
      }
      
      private static function unlockStep() : void
      {
         if(taskMC.currentFrame != 7)
         {
            taskMC.addEventListener(Event.FRAME_CONSTRUCTED,function():void
            {
               if(taskMC.currentFrame == 7)
               {
                  taskMC.removeEventListener(Event.FRAME_CONSTRUCTED,arguments.callee);
                  MapListenerManager.add(taskMC["mc7"]["kabji_npc"],function():void
                  {
                     MapListenerManager.remove(taskMC["mc7"]["kabji_npc"],true);
                     secondStoryFightOver();
                     FightManager.fightWithBoss("卡贝基",_regionKabji0);
                  });
               }
            });
            taskMC.gotoAndStop(7);
         }
      }
      
      private static function storyFightBegin() : void
      {
         firstStoryFightOver();
         MapListenerManager.add(taskMC["mc4"]["kabji_npc"],function():void
         {
            FightManager.fightWithBoss("卡贝基",_regionKabji3);
         });
         FightManager.fightWithBoss("卡贝基",_regionKabji3);
      }
      
      private static function firstStoryFightOver() : void
      {
         KTool.showMapAllPlayerAndMonster();
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
               story3 = [[TaskStoryPlayer.DIALOG,[NPC.UKESI,["哈哈！果然是赛尔中的精英啊！那就让我亲爱的弟弟陪你玩一玩吧！"],["你说什么？"]]],[TaskStoryPlayer.DIALOG,[NPC.UKESI,["艾辛格大人果然没有说错，打抱不平的赛尔一定会进入圈套的。充满暗黑能量的卡贝基一定会把你留在这里的！"],["这居然……你一直在骗我！！"]]]];
               storyPlayer3 = new TaskStoryPlayer();
               storyPlayer3.addStory(story3);
               storyPlayer3.storyEndCallback = function():void
               {
                  storyPlayer3.destory();
                  secondStoryFightOver();
                  FightManager.fightWithBoss("卡贝基",_regionKabji0);
                  MapListenerManager.add(taskMC["mc4"]["kabji_npc"],function():void
                  {
                     FightManager.fightWithBoss("卡贝基",_regionKabji0);
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
               completeTask();
            }
            else
            {
               unlockStep();
               NpcDialog.show(NPC.KABEIJI,["你快走！刚才的光魄结晶不是消去暗黑能量，而是让我体内的暗黑能量聚集放大！我要被暗黑能量控制了！"],["我一定要帮助你！"],[function():void
               {
                  KTool.showMapAllPlayerAndMonster();
               }]);
            }
         });
      }
      
      private static function completeTask() : void
      {
         TasksManager.complete(TASK_ID,2,function(param1:Boolean):void
         {
            var b:Boolean = param1;
            KTool.hideMapAllPlayerAndMonster();
            AnimateManager.playMcAnimate(taskMC,5,"mc5",function():void
            {
               NpcDialog.show(NPC.HAKESASI,[MainManager.actorInfo.nick + "你们没事吧！这一切都是艾辛格设下的圈套。他可真是卑鄙啊！ "],["艾辛格太可恶了！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,6,"mc6",function():void
                  {
                     NpcDialog.show(NPC.KABEIJI,[MainManager.actorInfo.nick + "你们一定要帮我找回哥哥！他一定有苦衷才会为艾辛格做事的！  "],["哼！尤克斯也很可恶！"],[function():void
                     {
                        NpcDialog.show(NPC.HAKESASI,["放心，尤克斯不会有事！我想这里面一定有不可告人的秘密，我们还是先回去找大家一同商量对策吧！  "],["好吧！一切听龙王子的！"],[function():void
                        {
                           SocketConnection.sendWithCallback(46001,function(param1:SocketEvent):void
                           {
                              initStep1();
                           });
                        }]);
                     }]);
                  });
               }]);
            });
         });
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 85 && Boolean(_map.conLevel["taskMC"]))
         {
            return _map.conLevel["taskMC"];
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
