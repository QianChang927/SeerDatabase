package com.robot.app2.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class DragonSecretHistoryDragonSuitSignSentNo4Controller
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const NODE_1_BUFFER_ID:uint = 1195;
      
      public static const NODE_2_BUFFER_ID:uint = 1196;
      
      public static const REWARD_BUFFER_ID:uint = 1201;
      
      private static var _bossName:Array = [{
         "name":"小豆龙",
         "id":2496
      }];
      
      private static var _map:MapModel;
      
      private static var _willVisible:Boolean = true;
      
      private static var _isPassByPaySeerDou:Boolean = false;
      
      private static var _fun:Function;
      
      private static var _taskMc:MovieClip;
       
      
      public function DragonSecretHistoryDragonSuitSignSentNo4Controller()
      {
         super();
      }
      
      public static function initForMap() : void
      {
         if(MapManager.currentMap.id != 10626)
         {
            MapManager.changeMap(10626);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               startPlay();
            });
         }
         else
         {
            startPlay();
         }
      }
      
      public static function startPlay(param1:Function = null) : void
      {
         var fun:Function = param1;
         _fun = fun;
         _map = MapManager.currentMap;
         _map.topLevel.mouseEnabled = false;
         _map.topLevel.mouseChildren = false;
         ResourceManager.getResource(ClientConfig.getMapAnimate("dragonSecretHistoryDragonSuitSignSent"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.controlLevel.addChild(taskMc);
            taskMc.gotoAndStop(4);
            addEvents();
            CommonUI.addYellowArrow(MapManager.currentMap.controlLevel,630,209,30);
            if(isNode1TaskDone)
            {
               taskMc.mc4.gotoAndStop(368);
               CommonUI.removeYellowArrow(MapManager.currentMap.controlLevel);
               CommonUI.addYellowArrow(MapManager.currentMap.controlLevel,440,260,30);
            }
            taskMc.mc4.seer.visible = false;
         });
      }
      
      private static function addEvents() : void
      {
         taskMc.buttonMode = true;
         taskMc.addEventListener(MouseEvent.CLICK,onDialog);
      }
      
      private static function removeEvents() : void
      {
         taskMc.removeEventListener(MouseEvent.CLICK,onDialog);
      }
      
      private static function onDialog(param1:MouseEvent) : void
      {
         var _loc2_:String = param1.target.name as String;
         switch(_loc2_)
         {
            case "btn4_0":
               if(!isNode1TaskDone)
               {
                  startPreTask1();
               }
               break;
            case "btn4_1":
               chooseDialog1();
         }
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      private static function startPreTask1() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         _isTaskPlaying = true;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         taskMc.mc4.seer.visible = true;
         CommonUI.removeYellowArrow(MapManager.currentMap.controlLevel);
         story = [[TaskStoryPlayer.DIALOG,[NPC.QINGLONG,["想必，缪斯已经看到了那个影子。"],["是的，她非常的害怕。"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["她说她一定要告诉你，她会陪着龙族面对这次浩劫！"],["天龙殿的龙神一定会好好保护她！"]]],[TaskStoryPlayer.DIALOG,[NPC.QINGLONG,["那些龙神，都是我原来的部下，对我忠心耿耿！这次圣物丢失，我不怪他们，因为他们面对的，是一个神秘的组织！这个神秘的组织！目标只有一个！推翻神界！"],["据说差点那个代号“命”的修罗……"]]],[TaskStoryPlayer.DIALOG,[NPC.QINGLONG,["没错，他就是那个组织的一员，潘多拉也是。这个组织存在的时间，和神界存在的时间一样漫长。缪斯看到的那个黑影，也是组织里的精灵。他们都有各自的任务。"],["那这次新秩序……"]]],[TaskStoryPlayer.DIALOG,[NPC.QINGLONG,["很无奈，只能延后了。"],["青龙！原来你在这里！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BufferRecordManager.setMyState(NODE_1_BUFFER_ID,true,function():void
            {
               CommonUI.addYellowArrow(MapManager.currentMap.controlLevel,440,260,30);
               KTool.showMapPlayerAndMonster();
               taskMc.mc4.seer.visible = false;
               chooseDialog1();
            });
            _isTaskPlaying = false;
         };
         storyPlayer.start();
      }
      
      private static function chooseDialog1() : void
      {
         NpcDialog.show(NPC.DRAGON_JAGU,["想让我走恐怕不太容易！哼哼！"],["给点钱意思下。","你怎么这么麻烦！我要生气了！","不管了，我先撤了。"],[function():void
         {
            chooseDialog2();
         },function():void
         {
            KTool.getMultiValue([2295],function(param1:Array):void
            {
               if(param1[0] < 4)
               {
                  BonusController.addDelay(854);
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
                  FightManager.fightNoMapBoss(_bossName[0].name,_bossName[0].id);
               }
               else
               {
                  startPreTask2();
               }
            });
         }]);
      }
      
      private static function chooseDialog2() : void
      {
         BonusController.addDelay(854);
         NpcDialog.show(NPC.SEER,["给多少钱呢？"],["1000赛尔豆","10000赛尔豆","100000赛尔豆"],[function():void
         {
            KTool.doExchange(3795,function():void
            {
               KTool.getMultiValue([2295],function(param1:Array):void
               {
                  if(param1[0] == 4)
                  {
                     startPreTask2();
                  }
                  else
                  {
                     chooseDialog3();
                  }
               });
            });
         },function():void
         {
            KTool.doExchange(3796,function():void
            {
               KTool.getMultiValue([2295],function(param1:Array):void
               {
                  if(param1[0] == 4)
                  {
                     startPreTask2();
                  }
                  else
                  {
                     chooseDialog3();
                  }
               });
            });
         },function():void
         {
            KTool.doExchange(3797,function():void
            {
               KTool.getMultiValue([2295],function(param1:Array):void
               {
                  if(param1[0] == 4)
                  {
                     startPreTask2();
                  }
                  else
                  {
                     chooseDialog3();
                  }
               });
            });
         }]);
      }
      
      private static function fightOverHandler(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         _map = MapManager.currentMap;
         _map.topLevel.mouseEnabled = false;
         _map.topLevel.mouseChildren = false;
         ResourceManager.getResource(ClientConfig.getMapAnimate("dragonSecretHistoryDragonSuitSignSent"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.controlLevel.addChild(taskMc);
            taskMc.gotoAndStop(5);
            addEvents();
            CommonUI.addYellowArrow(MapManager.currentMap.controlLevel,440,286,30);
            if(FightManager.isWin)
            {
               startPreTask2();
            }
            else
            {
               chooseDialog1();
            }
         });
      }
      
      private static function startPreTask2() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         _isTaskPlaying = true;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         taskMc.gotoAndStop(5);
         taskMc.mc5.seer.visible = true;
         CommonUI.removeYellowArrow(MapManager.currentMap.controlLevel);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]],[TaskStoryPlayer.DIALOG,[NPC.QINGLONG,["我忠心的部下和伟大的族人，必然可以战胜一切邪恶！请相信我们！"],["恩！一定可以！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            DisplayUtil.removeForParent(taskMc);
            BufferRecordManager.setMyState(NODE_2_BUFFER_ID,true,function():void
            {
               KTool.showMapPlayerAndMonster();
               taskMc.mc5.seer.visible = false;
               openPanel();
            });
            _isTaskPlaying = false;
         };
         storyPlayer.start();
      }
      
      private static function chooseDialog3() : void
      {
         NpcDialog.show(NPC.DRAGON_JAGU,["就这点钱？！我再给你一次机会！"],["好….好吧…","不陪你玩了！"],[function():void
         {
            chooseDialog2();
         }]);
      }
      
      private static function get isNode1TaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(NODE_1_BUFFER_ID);
      }
      
      private static function get isNode2TaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(NODE_2_BUFFER_ID);
      }
      
      private static function get isRewardDone() : Boolean
      {
         return BufferRecordManager.getMyState(REWARD_BUFFER_ID);
      }
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("DragonSecretHistoryDragonSuitSignSentPanel"),"正在打开....",callBlackFun);
      }
      
      private static function callBlackFun() : void
      {
         if(!isRewardDone)
         {
            BufferRecordManager.setMyState(REWARD_BUFFER_ID,true,function():void
            {
               BonusController.showDelayBonus(854);
            });
         }
      }
      
      public static function destroy() : void
      {
         removeEvents();
         DisplayUtil.removeForParent(taskMc);
         _taskMc = null;
         _map = null;
      }
   }
}
