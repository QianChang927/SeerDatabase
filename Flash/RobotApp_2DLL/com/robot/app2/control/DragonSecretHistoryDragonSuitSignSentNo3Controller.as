package com.robot.app2.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class DragonSecretHistoryDragonSuitSignSentNo3Controller
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const NODE_1_BUFFER_ID:uint = 1192;
      
      public static const NODE_2_BUFFER_ID:uint = 1193;
      
      public static const NODE_3_BUFFER_ID:uint = 1194;
      
      public static const REWARD_BUFFER_ID:uint = 1200;
      
      private static var _map:MapModel;
      
      private static var _willVisible:Boolean = true;
      
      private static var _fun:Function;
      
      private static var _taskMc:MovieClip;
       
      
      public function DragonSecretHistoryDragonSuitSignSentNo3Controller()
      {
         super();
      }
      
      public static function initForMap() : void
      {
         if(MapManager.currentMap.id != 10625)
         {
            MapManager.changeMap(10625);
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
            var _loc2_:int = 0;
            var _loc3_:int = 0;
            var _loc4_:int = 0;
            var _loc5_:int = 0;
            taskMc = param1;
            _map.controlLevel.addChild(taskMc);
            taskMc.gotoAndStop(3);
            taskMc.mc3.seer.visible = false;
            addEvents();
            CommonUI.addYellowArrow(MapManager.currentMap.controlLevel,410,165,30);
            if(!isNode1TaskDone)
            {
               _loc2_ = 0;
               while(_loc2_ < 4)
               {
                  taskMc["snakeEyes_" + _loc2_].visible = false;
                  _loc2_++;
               }
            }
            else
            {
               _loc3_ = 0;
               while(_loc3_ < 4)
               {
                  taskMc["snakeEyes_" + _loc3_].visible = true;
                  _loc3_++;
               }
               if(!isNode2TaskDone)
               {
                  _loc4_ = 0;
                  while(_loc4_ < 4)
                  {
                     taskMc["snakeEyes_" + _loc4_].gotoAndStop(1);
                     _loc4_++;
                  }
               }
               else
               {
                  _loc5_ = 0;
                  while(_loc5_ < 4)
                  {
                     taskMc["snakeEyes_" + _loc5_].gotoAndStop(2);
                     _loc5_++;
                  }
               }
            }
         });
      }
      
      private static function addEvents() : void
      {
         taskMc.buttonMode = true;
         taskMc.addEventListener(MouseEvent.CLICK,onDialog);
         var _loc1_:int = 0;
         while(_loc1_ < 4)
         {
            taskMc["snakeEyes_" + _loc1_].addEventListener(MouseEvent.CLICK,onSnakeEyes);
            taskMc["snakeEyes_" + _loc1_].buttonMode = true;
            _loc1_++;
         }
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
            case "btn3":
               if(!isNode1TaskDone)
               {
                  startPreTask1();
               }
               else if(!isNode2TaskDone)
               {
                  Alarm.show("机关就在蛇的眼睛上哦！");
               }
               else if(!isNode3TaskDone)
               {
                  startPreTask2();
               }
               else
               {
                  chooseDialog2();
               }
         }
      }
      
      private static function onSnakeEyes(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:String = String(e.currentTarget.name.split("_")[1]);
         if(taskMc["snakeEyes_" + index].currentFrame != 2)
         {
            taskMc["snakeEyes_" + index].gotoAndStop(2);
         }
         if(isAllClick())
         {
            BufferRecordManager.setMyState(NODE_2_BUFFER_ID,true,function():void
            {
               startPreTask2();
            });
         }
      }
      
      private static function isAllClick() : Boolean
      {
         var _loc1_:int = 0;
         while(_loc1_ < 4)
         {
            if(taskMc["snakeEyes_" + _loc1_].currentFrame != 2)
            {
               return false;
            }
            _loc1_++;
         }
         return true;
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
         taskMc.mc3.seer.visible = true;
         CommonUI.removeYellowArrow(MapManager.currentMap.controlLevel);
         story = [[TaskStoryPlayer.DIALOG,[NPC.CHITONGMIUSI,["你是来帮助我揭开谜团的吗？"],["我……"]]],[TaskStoryPlayer.DIALOG,[NPC.CHITONGMIUSI,["恐怕你无法相信，我现在，已经成为了唯一拥有天蛇之血的精灵了。"],["其他的….."]]],[TaskStoryPlayer.DIALOG,[NPC.CHITONGMIUSI,["我的两个哥哥，都不见了，只剩下我一个了。但天蛇星有一个秘密，这个秘密，请你帮我解开。"],["其他的….."]]],[TaskStoryPlayer.DIALOG,[NPC.CHITONGMIUSI,["传说，天蛇之泪就藏在两双神秘的眼睛里！我想通过这个传说找到天蛇之泪，看到一些事情….."],["我现在尝试一下！"]]]];
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
               taskMc.mc3.seer.visible = false;
               CommonUI.addYellowArrow(MapManager.currentMap.controlLevel,410,165,30);
               var _loc1_:int = 0;
               while(_loc1_ < 4)
               {
                  taskMc["snakeEyes_" + _loc1_].visible = true;
                  _loc1_++;
               }
            });
            _isTaskPlaying = false;
         };
         storyPlayer.start();
      }
      
      private static function startPreTask2() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         _isTaskPlaying = true;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         taskMc.mc3.seer.visible = true;
         CommonUI.removeYellowArrow(MapManager.currentMap.controlLevel);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            taskMc.mc3.seer.visible = false;
            taskMc.mc3.gotoAndStop(1);
            startPreTask3();
            _isTaskPlaying = false;
         };
         storyPlayer.start();
      }
      
      private static function startPreTask3() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         _isTaskPlaying = true;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         taskMc.mc3.seer.visible = true;
         CommonUI.removeYellowArrow(MapManager.currentMap.controlLevel);
         story = [[TaskStoryPlayer.DIALOG,[NPC.SEER,["这….这…..怎么回事？"],["太可怕了！"]]],[TaskStoryPlayer.DIALOG,[NPC.CHITONGMIUSI,["我似乎看到了…..不可能是他！"],["天龙殿马上会有人来保护你！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["不要担心！"],["不，你告诉青龙，我要去找他！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BufferRecordManager.setMyState(NODE_3_BUFFER_ID,true,function():void
            {
               KTool.showMapPlayerAndMonster();
               taskMc.mc3.seer.visible = false;
               CommonUI.addYellowArrow(MapManager.currentMap.controlLevel,410,165,30);
               chooseDialog2();
            });
            _isTaskPlaying = false;
         };
         storyPlayer.start();
      }
      
      private static function chooseDialog2() : void
      {
         NpcDialog.show(NPC.CHITONGMIUSI,["我决心和龙族一起面对这次浩劫！"],["我现在就去！","别急，我再转转。"],[function():void
         {
            KTool.getMultiValue([2295],function(param1:Array):void
            {
               var va:Array = param1;
               if(va[0] < 3)
               {
                  BonusController.addDelay(854);
                  SocketConnection.addCmdListener(47191,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(47191,arguments.callee);
                     openPanel();
                  });
                  SocketConnection.send(47191);
               }
               else
               {
                  openPanel();
               }
            });
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
      
      private static function get isNode3TaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(NODE_3_BUFFER_ID);
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
