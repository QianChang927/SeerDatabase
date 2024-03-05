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
   
   public class DragonSecretHistoryDragonSuitSignSentNo1Controller
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const NODE_1_BUFFER_ID:uint = 1188;
      
      public static const NODE_2_BUFFER_ID:uint = 1189;
      
      public static const REWARD_BUFFER_ID:uint = 1198;
      
      private static var _bossName:Array = [{
         "name":"哈莫雷特的梦魇",
         "id":2493
      }];
      
      private static var _map:MapModel;
      
      private static var _willVisible:Boolean = true;
      
      private static var _fun:Function;
      
      private static var _taskMc:MovieClip;
       
      
      public function DragonSecretHistoryDragonSuitSignSentNo1Controller()
      {
         super();
      }
      
      public static function initForMap() : void
      {
         if(MapManager.currentMap.id != 10623)
         {
            MapManager.changeMap(10623);
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
            taskMc.gotoAndStop(1);
            taskMc.mc1.seer.visible = false;
            addEvents();
            CommonUI.addYellowArrow(MapManager.currentMap.controlLevel,400,80,30);
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
            case "btn1":
               if(!isNode1TaskDone)
               {
                  startPreTask1();
               }
               else if(!isNode2TaskDone)
               {
                  chooseDialog1();
               }
               else
               {
                  chooseDialog2();
               }
               break;
            case "btn2":
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
         CommonUI.removeYellowArrow(MapManager.currentMap.controlLevel);
         taskMc.mc1.seer.visible = true;
         story = [[TaskStoryPlayer.DIALOG,[NPC.HAMO_LEITE,["可怕的梦魇！陌生人，请原谅我的失礼，我实在是……"],["到底发生了什么？"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["是什么样可怕的梦魇？"],["龙族的鲜血沾满了圣物，太可怕了！那群怪物！他们要灭绝龙族！"]]],[TaskStoryPlayer.DIALOG,[NPC.HAMO_LEITE,["我梦到！圣物丢失！龙族灭绝！天啊！！快救救我！"],["怎么才能救你？"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BufferRecordManager.setMyState(NODE_1_BUFFER_ID,true,function():void
            {
               KTool.showMapPlayerAndMonster();
               taskMc.mc1.seer.visible = false;
               CommonUI.addYellowArrow(MapManager.currentMap.controlLevel,400,80,30);
               chooseDialog1();
            });
            _isTaskPlaying = false;
         };
         storyPlayer.start();
      }
      
      private static function chooseDialog1() : void
      {
         NpcDialog.show(NPC.HAMO_LEITE,["快击败我可怕的梦魇！不要留情！"],["好！","稍等一下，我再四处看看。"],[function():void
         {
            KTool.getMultiValue([2295],function(param1:Array):void
            {
               if(param1[0] < 1)
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
            taskMc.gotoAndStop(1);
            taskMc.mc1.seer.visible = false;
            addEvents();
            if(FightManager.isWin)
            {
               startPreTask2();
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
         taskMc.mc1.seer.visible = true;
         CommonUI.removeYellowArrow(MapManager.currentMap.controlLevel);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["别担心龙王子！你知道是谁偷走了逆龙之鳞吗？"],["啊！一定是那些黑影！快！立刻前往天龙殿！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BufferRecordManager.setMyState(NODE_2_BUFFER_ID,true,function():void
            {
               KTool.showMapPlayerAndMonster();
               taskMc.mc1.seer.visible = false;
               CommonUI.addYellowArrow(MapManager.currentMap.controlLevel,400,80,30);
               chooseDialog2();
            });
            _isTaskPlaying = false;
         };
         storyPlayer.start();
      }
      
      private static function chooseDialog2() : void
      {
         NpcDialog.show(NPC.HAMO_LEITE,["那种可怕的梦魇又来了，让我一个人战胜他！我是龙族的王子！"],["我现在就去！","别怕，我在这陪你会。"],[function():void
         {
            openPanel();
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
