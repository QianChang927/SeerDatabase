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
   
   public class DragonSecretHistoryDragonSuitSignSentNo2Controller
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const NODE_1_BUFFER_ID:uint = 1190;
      
      public static const NODE_2_BUFFER_ID:uint = 1191;
      
      public static const REWARD_BUFFER_ID:uint = 1199;
      
      private static var _bossName:Array = [{
         "name":"泰古拉",
         "id":2494
      }];
      
      private static var _map:MapModel;
      
      private static var _willVisible:Boolean = true;
      
      private static var _fun:Function;
      
      private static var _taskMc:MovieClip;
       
      
      public function DragonSecretHistoryDragonSuitSignSentNo2Controller()
      {
         super();
      }
      
      public static function initForMap() : void
      {
         if(MapManager.currentMap.id != 10624)
         {
            MapManager.changeMap(10624);
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
            taskMc.gotoAndStop(2);
            taskMc.mc2.seer.visible = false;
            addEvents();
            CommonUI.addYellowArrow(MapManager.currentMap.controlLevel,400,160,30);
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
         var e:MouseEvent = param1;
         var name:String = e.target.name as String;
         switch(name)
         {
            case "btn2":
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
                  KTool.getMultiValue([2295],function(param1:Array):void
                  {
                     if(param1[0] < 2)
                     {
                        chooseDialog1();
                     }
                     else
                     {
                        chooseDialog2();
                     }
                  });
               }
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
         taskMc.mc2.seer.visible = true;
         CommonUI.removeYellowArrow(MapManager.currentMap.controlLevel);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]]];
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
               taskMc.mc2.seer.visible = false;
               CommonUI.addYellowArrow(MapManager.currentMap.controlLevel,400,160,30);
               chooseDialog1();
            });
            _isTaskPlaying = false;
         };
         storyPlayer.start();
      }
      
      private static function chooseDialog1() : void
      {
         NpcDialog.show(NPC.BA_BU_TIAN_LONG,["但我想看看你的本领，看你是否有足够的能力帮助我们找到圣物的线索。"],["来吧。","我做下准备！"],[function():void
         {
            KTool.getMultiValue([2295],function(param1:Array):void
            {
               if(param1[0] < 2)
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
            taskMc.gotoAndStop(2);
            taskMc.mc2.seer.visible = false;
            addEvents();
            CommonUI.addYellowArrow(MapManager.currentMap.controlLevel,400,80,30);
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
         taskMc.mc2.seer.visible = true;
         CommonUI.removeYellowArrow(MapManager.currentMap.controlLevel);
         story = [[TaskStoryPlayer.DIALOG,[NPC.BA_BU_TIAN_LONG,["很好，很好。龙族的圣物便是这逆龙之鳞！但逆龙之鳞必须要天蛇之血，圣剑之光才可以把它的能力激发到极致！"],["这么说，他们还回去寻找那两样物品？"]]]];
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
               taskMc.mc2.seer.visible = false;
               CommonUI.addYellowArrow(MapManager.currentMap.controlLevel,400,80,30);
               chooseDialog2();
            });
            _isTaskPlaying = false;
         };
         storyPlayer.start();
      }
      
      private static function chooseDialog2() : void
      {
         NpcDialog.show(NPC.BA_BU_TIAN_LONG,["我必须去保护缪斯……一定不能让他有任何的闪失！但我现在还有一些事情要做，你能先帮我去趟天蛇禁地吗？"],["当然可以！","稍等一下！"],[function():void
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
