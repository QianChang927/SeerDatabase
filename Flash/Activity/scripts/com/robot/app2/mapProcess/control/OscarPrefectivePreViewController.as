package com.robot.app2.mapProcess.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.PlayTask;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.net.URLLoader;
   import flash.net.URLRequest;
   import mx.utils.StringUtil;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class OscarPrefectivePreViewController
   {
      
      public static const INCOMING:String = "INCOMING";
      
      public static const PAST:String = "PAST";
      
      public static const ACTIVE:String = "ACTIVE";
      
      public static const DORMANT:String = "DORMANT";
      
      private static var _map:BaseMapProcess;
      
      public static const TARGET_MAP:uint = 10953;
      
      private static const BUFFER_ID:uint = 22890;
      
      private static const BONUS_ID:uint = 1503;
      
      private static const RoundProArr:Array = [16530,16531];
      
      private static const FightOverTimePro:int = 16540;
      
      private static const RoundTotalNum:int = 12;
      
      private static var BossArray:Array = [5262,5263];
      
      private static var BossNameArr:Array = ["迈尔斯完全体","奥斯卡"];
      
      private static var BossNameOnMap:Array = ["oscar","mayrs"];
      
      private static var _mapAnimate:String = "map_741_1";
      
      private static var _beginDate:Date = new Date(2015,10,4,12);
      
      private static var _endDate:Date = new Date(2015,10,8,19);
      
      private static var activeTimes:Array = [12,13,17,18];
      
      private static const _mainPanel:String = "OscarPrefectivePreViewMainPanel";
      
      private static const _letterPanel:String = "OscarPrefectiveLetter";
      
      private static const _storyTable:String = "xml/twelveRoundConfig.xml";
      
      private static var _taskMc:MovieClip;
      
      private static var _storyLoader:URLLoader;
      
      private static var _storyConfigXML:XML;
      
      private static var _round:int = 1;
      
      private static var _playTask:PlayTask;
      
      private static var _widget:MovieClip;
       
      
      public function OscarPrefectivePreViewController()
      {
         super();
      }
      
      public static function get activeStatus() : String
      {
         if(curDateG.time < startDateG.time)
         {
            return INCOMING;
         }
         if(curDateG.time > finishDateG.time)
         {
            return PAST;
         }
         if(activeTimes.indexOf(curDateG.hours) >= 0)
         {
            return ACTIVE;
         }
         return DORMANT;
      }
      
      public static function onDialog(param1:MouseEvent) : void
      {
         var name:String = null;
         var e:MouseEvent = param1;
         name = String(e.target.name);
         switch(activeStatus)
         {
            case INCOMING:
               doIncoming(name);
               break;
            case ACTIVE:
               if(roundG < RoundTotalNum)
               {
                  if(!BitBuffSetClass.getState(BUFFER_ID))
                  {
                     playStory(1,function():void
                     {
                        doActive(name);
                        BitBuffSetClass.setState(BUFFER_ID,1);
                     });
                  }
                  if(BitBuffSetClass.getState(BUFFER_ID))
                  {
                     doActive(name);
                  }
                  break;
               }
            case DORMANT:
            case PAST:
               doDormant(name);
         }
         updateRound();
      }
      
      public static function doIncoming(param1:String) : void
      {
         var name:String = param1;
         if(!BitBuffSetClass.getState(BUFFER_ID))
         {
            playStory(1,function():void
            {
               BitBuffSetClass.setState(BUFFER_ID,1);
            });
         }
         else
         {
            switch(name)
            {
               case BossNameOnMap[1]:
                  playStory(3);
                  break;
               case BossNameOnMap[0]:
                  playStory(2);
            }
         }
      }
      
      public static function doActive(param1:String) : void
      {
         var name:String = param1;
         KTool.getMultiValue([FightOverTimePro],function(param1:Number):void
         {
            var curTime:Number = NaN;
            var curRound:int = 0;
            var lastTime:Number = param1;
            curTime = Number(SystemTimerManager.time);
            curRound = roundG;
            if(curTime - lastTime >= 300)
            {
               if(curRound % 2 == 0)
               {
                  playStory(4,function():void
                  {
                     FightManager.fightNoMapBoss(BossNameArr[0],BossArray[0],false,true,function():void
                     {
                        playStory(5,function():void
                        {
                           BonusController.showDelayBonus(BONUS_ID);
                        });
                     });
                  },function():void
                  {
                  });
               }
               if(curRound % 2 == 1)
               {
                  playStory(6,function():void
                  {
                     FightManager.fightNoMapBoss(BossNameArr[1],BossArray[1],false,true,function():void
                     {
                        if(curRound >= 11)
                        {
                           if(curTime > lastRoundTimeG)
                           {
                              playStory(11,function():void
                              {
                                 BonusController.showDelayBonus(BONUS_ID);
                              });
                           }
                           if(curTime < lastRoundTimeG)
                           {
                              playStory(10,function():void
                              {
                                 BonusController.showDelayBonus(BONUS_ID);
                              });
                           }
                        }
                        if(curRound < 11)
                        {
                           playStory(5,function():void
                           {
                              BonusController.showDelayBonus(BONUS_ID);
                           });
                        }
                     });
                  },function():void
                  {
                  });
               }
            }
            if(curTime - lastTime < 300)
            {
               switch(name)
               {
                  case BossNameOnMap[1]:
                     playStory(8);
                     break;
                  case BossNameOnMap[0]:
                     playStory(9);
               }
            }
         });
      }
      
      public static function doDormant(param1:String) : void
      {
         switch(param1)
         {
            case BossNameOnMap[0]:
               playStory(2);
               break;
            case BossNameOnMap[1]:
               playStory(3);
         }
      }
      
      public static function init() : void
      {
         _storyLoader = new URLLoader();
         _storyLoader.addEventListener(Event.COMPLETE,loadStoryConfigXML);
         _storyLoader.load(new URLRequest(ClientConfig.getResPath(_storyTable)));
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         BonusController.addDelay(BONUS_ID);
         ResourceManager.getResource(ClientConfig.getMapAnimate(_mapAnimate),function(param1:MovieClip):void
         {
            taskMc = param1;
            taskMc.gotoAndStop(taskMc.totalFrames);
            _map.btnLevel.addChild(taskMc);
            addEvents();
         },"movie");
         addYellowExtral();
         updateRound();
      }
      
      public static function destory() : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         if(_map != null)
         {
            removeEvents();
            DisplayUtil.removeForParent(taskMc);
            _map = null;
            _taskMc = null;
         }
      }
      
      protected static function loadStoryConfigXML(param1:Event) : void
      {
         _storyConfigXML = new XML(param1.target.data);
         _storyLoader.removeEventListener(Event.COMPLETE,loadStoryConfigXML);
      }
      
      protected static function onFightOver(param1:PetFightEvent) : void
      {
      }
      
      public static function playStory(param1:int, param2:Function = null, param3:Function = null) : void
      {
         var story:Array = null;
         var i:int = param1;
         var cb:Function = param2;
         var cb1:Function = param3;
         if(_playTask == null)
         {
            _playTask = new PlayTask();
         }
         hideLevel();
         _playTask.addStory(story);
         if(cb1 == null)
         {
            story = getStory(i);
            _playTask.addStory(story);
            _playTask.playStory(function():void
            {
               reverseLevel();
               if(cb != null)
               {
                  cb();
               }
            });
         }
         if(cb1 != null)
         {
            story = getStory(i,[function():void
            {
               reverseLevel();
               if(cb != null)
               {
                  cb();
               }
            },function():void
            {
               reverseLevel();
               cb1();
            }]);
            _playTask.addStory(story);
            _playTask.playStory();
         }
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         if(MapManager.currentMap.id == TARGET_MAP)
         {
            _map = param1;
            init();
         }
      }
      
      private static function addEvents() : void
      {
         taskMc.buttonMode = true;
         taskMc.addEventListener(MouseEvent.CLICK,onDialog);
      }
      
      private static function removeEvents() : void
      {
         if(taskMc)
         {
            taskMc.removeEventListener(MouseEvent.CLICK,onDialog);
         }
      }
      
      public static function getStory(param1:int, param2:Array = null) : Array
      {
         var curStoryXML:XML = null;
         var curTaskModXMLList:XMLList = null;
         var storyArray:Array = null;
         var npcId:int = 0;
         var dialogContent:String = null;
         var answer:String = null;
         var answer1:String = null;
         var i:int = 0;
         var taskMod:TaskMod = null;
         var curTaskMod:XML = null;
         var type:int = 0;
         var frame:int = 0;
         var mcName:String = null;
         var answerArr:Array = null;
         var storyId:int = param1;
         var fun:Array = param2;
         curStoryXML = new XML(_storyConfigXML.story.(@id == storyId));
         curTaskModXMLList = new XMLList(curStoryXML.elements("taskmod"));
         storyArray = new Array();
         if(curStoryXML == null)
         {
            return storyArray;
         }
         i = 0;
         while(i < curTaskModXMLList.length())
         {
            type = int(curTaskModXMLList[i].@type);
            switch(type)
            {
               case TaskDiaLogManager.DIALOG:
                  npcId = Number(curTaskModXMLList[i].@npcid);
                  dialogContent = curTaskModXMLList[i].@dialog;
                  answer = curTaskModXMLList[i].@answer;
                  dialogContent = dialogContent == null ? "" : dialogContent;
                  dialogContent = dialogContent.replace("$nick$",nickG).replace("$轮数$",roundG).replace("$下一轮数$",nextRoundG);
                  taskMod = new TaskMod(type,npcId,[dialogContent],answer == null || answer.length <= 0 ? null : [answer]);
                  break;
               case TaskDiaLogManager.MAP_MOVIE:
                  frame = Number(curTaskModXMLList[i].@frame);
                  mcName = curTaskModXMLList[i].@mcname;
                  mcName = mcName == null ? "" : mcName;
                  taskMod = new TaskMod(type,0,null,null,[taskMc,frame,mcName]);
                  break;
               case TaskDiaLogManager.FUL_MOVIE:
                  break;
               case TaskDiaLogManager.DLG_MOVIE:
                  break;
               case TaskDiaLogManager.MULTI_ANSWER_DIALOG:
                  npcId = Number(curTaskModXMLList[i].@npcid);
                  dialogContent = curTaskModXMLList[i].@dialog;
                  answer = curTaskModXMLList[i].@answer;
                  answer1 = curTaskModXMLList[i].@answer1;
                  dialogContent = dialogContent == null ? "" : dialogContent;
                  dialogContent = dialogContent.replace("$nick$",nickG).replace("$轮数$",roundG).replace("$下一轮数$",nextRoundG);
                  answer = answer == null ? "" : answer;
                  answerArr = new Array();
                  answer = String(StringUtil.trim(answer));
                  if(answer.length > 0)
                  {
                     answerArr.push(answer);
                  }
                  if(answer1 != null && answer1.length > 0)
                  {
                     answerArr.push(answer1);
                  }
                  taskMod = new TaskMod(type,npcId,[dialogContent],answerArr,null,fun);
                  break;
            }
            storyArray.push(taskMod);
            i++;
         }
         return storyArray;
      }
      
      public static function hideLevel() : void
      {
         removeYellowExtral();
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         LevelManager.iconLevel.visible = false;
      }
      
      public static function reverseLevel() : void
      {
         addYellowExtral();
         taskMc.gotoAndStop(taskMc.totalFrames);
         LevelManager.iconLevel.visible = true;
         _map.depthLevel.visible = true;
         KTool.showMapAllPlayerAndMonster();
      }
      
      public static function updateRound() : void
      {
         if(activeTimes.indexOf(curDateG.hours) < activeTimes.length / 2)
         {
            KTool.getMultiValue([RoundProArr[0]],function(param1:Array):void
            {
               _round = param1[0];
            });
         }
         if(activeTimes.indexOf(curDateG.hours) >= activeTimes.length / 2)
         {
            KTool.getMultiValue([RoundProArr[1]],function(param1:Array):void
            {
               _round = param1[0];
            });
         }
      }
      
      public static function addYellowExtral() : void
      {
         CommonUI.addYellowExcal(_map.topLevel,211.95,158);
         CommonUI.addYellowExcal(_map.topLevel,587,267);
         _map.topLevel.visible = true;
      }
      
      public static function removeYellowExtral() : void
      {
         CommonUI.removeYellowExcal(_map.topLevel);
         CommonUI.removeYellowExcal(_map.topLevel);
      }
      
      public static function get curDateG() : Date
      {
         var _loc1_:Number = Number(SystemTimerManager.sysBJDate.time);
         return new Date(_loc1_);
      }
      
      public static function get startDateG() : Date
      {
         return new Date(_beginDate.fullYear,_beginDate.month - 1,_beginDate.date,_beginDate.hours,0,0,0);
      }
      
      public static function get finishDateG() : Date
      {
         return new Date(_endDate.fullYear,_endDate.month - 1,_endDate.date,_endDate.hours);
      }
      
      public static function get lastRoundTimeG() : Number
      {
         var _loc1_:Date = new Date(_endDate.fullYear,_endDate.month - 1,_endDate.date,activeTimes[activeTimes.length / 2]);
         return _loc1_.time / 1000;
      }
      
      public static function get nickG() : String
      {
         return MainManager.actorInfo.formatNick;
      }
      
      public static function get nextRoundG() : int
      {
         return _round + 1;
      }
      
      public static function get roundG() : int
      {
         return _round;
      }
      
      public static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      public static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      public static function addMsgAndIcon() : void
      {
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onGetMsgTime);
      }
      
      public static function onGetMsgTime(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onGetMsgTime);
         if(activeStatus != PAST)
         {
            LocalMsgController.addLocalMsg(_letterPanel,0,false,null,null,1);
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onIconTimer);
            onIconTimer();
         }
      }
      
      public static function onIconTimer(param1:SocketEvent = null) : void
      {
         if(activeStatus == ACTIVE)
         {
            if(Boolean(_widget) && Boolean(DisplayUtil.hasParent(_widget)))
            {
               updateWidget();
            }
            else
            {
               loadWidget();
            }
         }
         else
         {
            destroyWidget();
         }
      }
      
      private static function loadWidget() : void
      {
         ResourceManager.getResource(ClientConfig.getAppRes("TwelveRoundsCountDownPanel"),function(param1:MovieClip):void
         {
            _widget = param1;
            DisplayUtil.align(_widget,null,AlignType.TOP_CENTER);
            _widget.y -= 3;
            _widget.buttonMode = true;
            _widget.mouseChildren = false;
            _widget.addEventListener(MouseEvent.CLICK,onGo);
            LevelManager.iconLevel.addChild(_widget);
            _widget.visible = true;
            updateWidget();
            MapNamePanel.hide();
         },"TwelveRoundsCountDownPanel_UI");
      }
      
      private static function updateWidget() : void
      {
         if(roundG > RoundTotalNum)
         {
            MapNamePanel.show();
            destroyWidget();
            return;
         }
         MapNamePanel.hide();
      }
      
      private static function destroyWidget() : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onIconTimer);
         if(Boolean(_widget) && Boolean(DisplayUtil.hasParent(_widget)))
         {
            _widget.removeEventListener(MouseEvent.CLICK,onGo);
            MapNamePanel.show();
            DisplayUtil.removeForParent(_widget);
            _widget = null;
         }
      }
      
      protected static function onGo(param1:MouseEvent) : void
      {
         if(MapManager.currentMap.id == TARGET_MAP)
         {
            return;
         }
         if(TARGET_MAP < 10000)
         {
            MapManager.changeMap(TARGET_MAP);
         }
         if(TARGET_MAP >= 10000)
         {
            MapManager.changeLocalMap(TARGET_MAP);
         }
      }
   }
}
