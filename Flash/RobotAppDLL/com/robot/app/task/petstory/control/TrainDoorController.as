package com.robot.app.task.petstory.control
{
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.fightLevel.FightPetBagController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.RobotModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.npc.NpcInfo;
   import com.robot.core.ui.alert.SimpleAlarm;
   import com.robot.core.ui.alert.TrainDoorAlert;
   import com.robot.core.utils.Direction;
   import com.robot.core.utils.UserState;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class TrainDoorController
   {
      
      private static var _instance:com.robot.app.task.petstory.control.TrainDoorController;
       
      
      public var _curtType:uint = 1;
      
      public var _enterID:uint = 1;
      
      private var _curtTaskIndex:uint = 0;
      
      private var _lastTimes:uint = 0;
      
      private var _lastCTimes:uint = 0;
      
      private var _taskIdList:Array;
      
      private var _curtUnTaskId:uint = 0;
      
      private var _curtAlrTaskId:uint = 0;
      
      private var _curtTaskId:uint = 0;
      
      private var _map:BaseMapProcess;
      
      public var _curtLayer:uint = 1;
      
      public var _curtGameTpye:uint = 0;
      
      private var _curtNPCIndex:uint;
      
      private var _mapIdList:Array;
      
      private var _eqList:Array;
      
      private var _nameList:Array;
      
      private var _speakList:Array;
      
      private var _comTaskList:Array;
      
      private var _mapEnterList:Array;
      
      private var _typeList:Array;
      
      public function TrainDoorController(param1:PrivateClass)
      {
         this._taskIdList = [null,[null,[781,1,2],[782,3,4],[783,5,6],[784,7,8]],[null,[791,11,12],[792,13,14],[793,15,16],[794,17,18]],[null,[805,21,22],[806,23,24],[807,25,26],[808,27,28]],[null,[826,31,32],[827,33,34],[828,35,36],[829,37,38]],[null,[838,41,42],[839,43,44],[840,45,46],[841,47,48]],[null,[881,51,52],[882,53,54],[883,55,56],[884,57,58]],[null,[892,61,62],[893,63,64],[894,65,66],[895,67,68]],[null,[905,71,72],[906,73,74],[907,75,76],[908,77,78]],[null,[916,81,82],[917,83,84],[918,85,86],[919,87,88]],[null,[938,91,92],[939,93,94],[940,95,96],[941,97,98]],[null,[957,101,102],[958,103,104],[959,105,106],[960,107,108]],[null,[979,111,112],[980,113,114],[981,115,116],[982,117,118]],[null,[1046,121,122],[1047,123,124],[1048,125,126],[1049,127,128]],[null,[1074,131,132],[1075,133,134],[1076,135,136],[1077,137,138]],[null,[1074,131,132],[1075,133,134],[1076,135,136],[1077,137,138]]];
         this._mapIdList = [null,[10058,10060],[10062,10064],[10066,10068],[10070,10072],[10074,10076],[10078,10080],[10082,10084],[10086,10088],[10090,10092],[10095,10097],[10099,10101],[10103,10105],[10107,10109],[10111,10113],[10389,10391],[10421,10423]];
         this._eqList = [null,[[100111,100112,100113],[100138,100139,100140,100141],[100722,100723,100724,100725],[100346,100347,100348,100349]],[[100016,100017,100018,100019],[100076,100077,100078,100079],[100117,100118,100119],[100391,100392,100393,100394]],[[100063,100064,100065,100066],[100096,100097,100098,100099],[100147,100148,100149,100150],[100206,100207,100208,100209]],[[100052,100053,100054],[100063,100064,100065,100066],[100233,100234,100235,100236],[100325,100326,100327,100328]],[[100048,100049,100050,100051],[100104,100105,100106,100107],[100108,100109,100110],[100229,100230,100231,100232]],[[100147,100148,100149,100150],[100198,100199,100200,100201],[100250,100251,100252,100253],[100776,100777,100778,100779]],[[100147,100148,100149,100150],[100215,100216,100217,100218],[100286,100287,100288,100289],[100759,100760,100761,100762]],[[100206,100207,100208,100209],[100229,100230,100231,100232],[100727,100728,100729,100730],[100233,100234,100235,100236]],[[100087,100088,100089,100090,100091],[100114,100115,100116],[100114,100115,100116],[100731,100732,100733,100734]],[[100202,100203,100204,100205],[100246,100247,100248,100249],[100768,100769,100770,100771],[100104,100105,100106,100107]],[[100198,100199,100200,100201],[100229,100230,100231,100232],[100286,100287,100288,100289],[100793,100794,100795,100796]],[[100036,100037,100038,100039],[100747,100748,100749,100750],[100286,100287,100288,100289],[100755,100756,100757,100758]],[[100092,100093,100094,100095],[100147,100148,100149,100150],[100206,100207,100208,100209],[100286,100287,100288,100289]],[[100036,100037,100038,100039],[100747,100748,100749,100750],[100286,100287,100288,100289],[100755,100756,100757,100758]],[[100092,100093,100094,100095],[100147,100148,100149,100150],[100206,100207,100208,100209],[100286,100287,100288,100289]],[[100092,100093,100094,100095],[100147,100148,100149,100150],[100206,100207,100208,100209],[100286,100287,100288,100289]]];
         this._nameList = [null,["绿光勇士","布布勇士","机甲斗士","刺蜂斗士"],["黑武士","红莲战士","烈焰勇士","火焰勇士"],["蓝骑士","闪光勇士","飞轮勇士","蜘蛛战士"],["水之战士","蓝骑士","蓝宝石勇士","裂震斗士"],["飞行勇士","狮子座勇士","加农列兵","小恶魔"],["飞轮勇士","红龙勇士","棱光斗士","熔火战士"],["飞轮勇士","骷髅勇士","利刃勇士","磁暴勇士"],["蜘蛛战士","小恶魔","暗金勇士","蓝宝石勇士"],["防寒勇士","海啸战士","蓝宝石勇士","冰掌勇士"],["罗马勇士","阳光战士","法澜勇士","狮子座勇士"],["红龙战士","小恶魔","利刃勇士","龙鳞战士"],["训练师","红宝石勇士","利刃勇士","小托尼"],["巨蟹座勇士","飞轮勇士","蜘蛛战士","利爪勇士"],["训练师","红宝石勇士","利刃勇士","小托尼"],["巨蟹座勇士","飞轮勇士","蜘蛛战士","利爪勇士"],["巨蟹座勇士","飞轮勇士","蜘蛛战士","利爪勇士"]];
         this._speakList = [null,["草系的力量是最强大的！","你还差的远呢！","想战胜我？没门！","我们来练练吧！"],["我将追寻我的道路！","红莲即将绽放！","燃烧吧！","哈哈，熊熊烈火！"],["这是一个梦幻的领域！","让能量绽放吧！","哼！你能躲开我的攻击吗？","哈哈！随我一战！"],["水流喷射吧！","我是水之勇士！","我会击败你！","颤抖吧！弱者！"],["我要飞得更高！","来承受我的怒火吧！","你能挡住我的攻击吗？","哼哼！我要留住你！"],["来吧，享受对战！","来承受我的怒火吧！","你能战胜我吗！","我是最强战士！"],["来吧，享受对战！","来承受我的怒火吧！","你能战胜我吗！","感受机械的魅力！"],["你不是我的对手！","嘿嘿，来陪我玩玩！","这是绝对的实力！","让我看看你的实力！"],["你怕冷吗？","海啸队是最强的！","来吧！尽情战斗吧！","暴风雪！上吧！"],["闪耀吧！胜利之光！","光啊！成为我的力量吧！","来吧！尽情战斗吧！","勇往直前！不要害怕！"],["来挑战我吧！","我是无所不能的！","斩开一切！来吧！","出现吧！龙族威严！"],["让我看看你有多强！","你无法战胜我！","斩开一切！来吧！","来陪我玩玩吧！"],["与我一战！","来吧，享受对战吧！","不要怀疑我的格斗技巧！","你，太弱了！"],["让我看看你有多强！","你无法战胜我！","斩开一切！来吧！","来陪我玩玩吧！"],["与我一战！","来吧，享受对战！","不要怀疑我的格斗技巧！","你，太弱了！"],["与我一战！","来吧，享受对战！","不要怀疑我的格斗技巧！","你，太弱了！"]];
         this._comTaskList = [null,[null,"完成任务:获得3场胜利","完成任务:获得10场胜利","完成任务:击败草系擂主","完成任务:击败草系擂主5次"],[null,"完成任务:获得3场胜利","完成任务:获得10场胜利","完成任务:击败火系擂主","完成任务:击败火系擂主5次"],[null,"完成任务:获得3场胜利","完成任务:获得10场胜利","完成任务:击败超能系擂主","完成任务:击败超能系擂主5次"],[null,"完成任务:获得3场胜利","完成任务:获得10场胜利","完成任务:击败水系擂主","完成任务:击败水系擂主5次"],[null,"完成任务:获得3场胜利","完成任务:获得10场胜利","完成任务:击败飞行系擂主","完成任务:击败飞行系擂主5次"],[null,"完成任务:获得3场胜利","完成任务:获得10场胜利","完成任务:击败地面系擂主","完成任务:击败地面系擂主5次"],[null,"完成任务:获得3场胜利","完成任务:获得10场胜利","完成任务:击败机械系擂主","完成任务:击败机械系擂主5次"],[null,"完成任务:获得3场胜利","完成任务:获得10场胜利","完成任务:击败暗影系擂主","完成任务:击败暗影系擂主5次"],[null,"完成任务:获得3场胜利","完成任务:获得10场胜利","完成任务:击败冰系擂主","完成任务:击败冰系擂主5次"],[null,"完成任务:获得3场胜利","完成任务:获得10场胜利","完成任务:击败光系擂主","完成任务:击败光系擂主5次"],[null,"完成任务:获得3场胜利","完成任务:获得10场胜利","完成任务:击败龙系擂主","完成任务:击败龙系擂主5次"],[null,"完成任务:获得3场胜利","完成任务:获得10场胜利","完成任务:击败普通系擂主","完成任务:击败普通系擂主5次"],[null,"完成任务:获得3场胜利","完成任务:获得10场胜利","完成任务:击败战斗系擂主","完成任务:击败战斗系擂主5次"],[null,"完成任务:获得3场胜利","完成任务:获得10场胜利","完成任务:击败电系擂主","完成任务:击败电系擂主5次"],[null,"完成任务:获得3场胜利","完成任务:获得10场胜利","完成任务:击败草超能系擂主","完成任务:击败草超能系擂主5次"],[null,"完成任务:获得3场胜利","完成任务:获得10场胜利","完成任务:击败草超能系擂主","完成任务:击败草超能系擂主5次"]];
         this._mapEnterList = [null,[10057,10059],[10061,10063],[10065,10067],[10069,10071],[10073,10075],[10077,10079],[10081,10083],[10085,10087],[10089,10091],[10094,10096],[10098,10100],[10102,10104],[10106,10108],[10110,10112],[10388,10390],[10420,10422]];
         this._typeList = [null,"草","火","超能","水","飞行","地面","机械","暗影","冰","光","龙","普通","战斗","电","草超能","暗影超能"];
         super();
      }
      
      public static function getInstance() : com.robot.app.task.petstory.control.TrainDoorController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.task.petstory.control.TrainDoorController(new PrivateClass());
         }
         return _instance;
      }
      
      public function init(param1:BaseMapProcess) : void
      {
         this._map = param1;
         (this._map.btnLevel["clickBtn"] as SimpleButton).visible = false;
         (this._map.conLevel["petMC"] as MovieClip).visible = false;
         ToolBarController.panel.hide();
         LevelManager.iconLevel.visible = false;
         MainManager.actorModel.hideNono();
         ToolTipManager.add(this._map.conLevel["bag_btn"],"精灵背包");
         this._map.conLevel["bag_btn"].addEventListener(MouseEvent.CLICK,this.onPetBagClick);
         (this._map.topLevel["titleMC"] as MovieClip).visible = false;
         if(MainManager.actorPrevState == UserState.FIGHT)
         {
            return;
         }
         this.checkLayer();
      }
      
      private function onPetBagClick(param1:MouseEvent) : void
      {
         FightPetBagController.show();
      }
      
      private function onComTaskMsg(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(this._comTaskList[this._curtType][_loc3_] != null)
         {
            SimpleAlarm.show(this._comTaskList[this._curtType][_loc3_]);
         }
      }
      
      private function checkLayer() : void
      {
         var mc:MovieClip = null;
         if(this._curtLayer == 10 && !TrainDoorMisController.isMis)
         {
            (this._map.conLevel["petMC"] as MovieClip).visible = true;
            mc = this._map.conLevel["petMC"] as MovieClip;
            AnimateManager.playMcAnimate(mc,1,"",function():void
            {
               mc.gotoAndStop(mc.totalFrames);
               mc.buttonMode = true;
               (_map.conLevel["petMC"] as MovieClip).addEventListener(MouseEvent.CLICK,onMouseRobot);
               playTitle();
            });
         }
         else if(this._curtLayer == 10 && TrainDoorMisController.isMis)
         {
            this._map.conLevel["petMC"].visible = true;
            this._map.conLevel["petMC"].buttonMode = true;
            this._map.conLevel["petMC"].addEventListener(MouseEvent.CLICK,this.onMouseRobot);
            this.playTitle();
         }
         else
         {
            this.playTitle();
            this.start();
         }
      }
      
      private function playTitle() : void
      {
         if(this._curtLayer == 10)
         {
            ResourceManager.getResource(ClientConfig.getActiveUrl("trainDoorTitle"),function(param1:DisplayObject):void
            {
               var mc2:MovieClip = null;
               var obj:DisplayObject = param1;
               mc2 = obj as MovieClip;
               _map.topLevel["titleMC"].visible = true;
               if(_map.topLevel["titleMC"]["numMC"])
               {
                  _map.topLevel["titleMC"]["numMC"].gotoAndStop(_curtLayer + 1);
               }
               AnimateManager.playMcAnimate(_map.topLevel["titleMC"],1,"",function():void
               {
                  _map.topLevel.removeChild(_map.topLevel["titleMC"]);
               });
               mc2.x = 471;
               mc2.y = 335;
               _map.topLevel.addChild(mc2);
               AnimateManager.playMcAnimate(mc2,_curtType,"mc" + _curtType,function():void
               {
                  _map.topLevel.removeChild(mc2);
               });
            },"ani");
         }
         else
         {
            ResourceManager.getResource(ClientConfig.getActiveUrl("trainDoorTitle"),function(param1:DisplayObject):void
            {
               var mc2:MovieClip = null;
               var obj:DisplayObject = param1;
               mc2 = obj as MovieClip;
               _map.topLevel["titleMC"].visible = true;
               _map.topLevel["titleMC"]["numMC"].gotoAndStop(_curtLayer + 1);
               AnimateManager.playMcAnimate(_map.topLevel["titleMC"],1,"",function():void
               {
                  _map.topLevel.removeChild(_map.topLevel["titleMC"]);
               });
               mc2.x = 471;
               mc2.y = 335;
               _map.topLevel.addChild(mc2);
               AnimateManager.playMcAnimate(mc2,_curtType,"mc" + _curtType,function():void
               {
                  _map.topLevel.removeChild(mc2);
               });
            },"ani");
         }
      }
      
      private function start() : void
      {
         this.createNPC();
      }
      
      private function createNPC(param1:int = -1) : void
      {
         var _loc2_:uint = 0;
         if(param1 == -1)
         {
            _loc2_ = uint(Math.random() * 4);
            this._curtNPCIndex = _loc2_;
         }
         else
         {
            _loc2_ = uint(param1);
         }
         var _loc3_:Array = [this._speakList[this._curtType][_loc2_]];
         var _loc4_:NpcInfo;
         (_loc4_ = new NpcInfo()).dir = Direction.DOWN;
         _loc4_.npcName = this._nameList[this._curtType][_loc2_];
         _loc4_.clothIds = this._eqList[this._curtType][_loc2_];
         _loc4_.point = new Point(480,314);
         var _loc5_:RobotModel;
         (_loc5_ = new RobotModel(_loc4_,_loc3_)).skeleton.getBodyMC().scaleX = _loc5_.skeleton.getBodyMC().scaleY = 1.2;
         DisplayUtil.stopAllMovieClip(_loc5_.skeleton.getBodyMC());
         _loc5_.showDialog(null);
         (this._map.btnLevel["clickBtn"] as SimpleButton).visible = true;
         ToolTipManager.add(this._map.btnLevel["clickBtn"] as SimpleButton,"点击挑战" + this._nameList[this._curtType][_loc2_]);
         (this._map.btnLevel["clickBtn"] as SimpleButton).addEventListener(MouseEvent.CLICK,this.onMouseRobot);
      }
      
      private function onMouseRobot(param1:MouseEvent) : void
      {
         SocketConnection.send(CommandID.TRAIN_DOOR_FIGHT);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onAlarmClickHandler);
         SocketConnection.addCmdListener(CommandID.TRAIN_DOOR_TASK_COMPLETE,this.onComTaskMsg);
      }
      
      private function onAlarmClickHandler(param1:PetFightEvent) : void
      {
         var event:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onAlarmClickHandler);
         SocketConnection.removeCmdListener(CommandID.TRAIN_DOOR_TASK_COMPLETE,this.onComTaskMsg);
         if((event.dataObj as FightOverInfo).winnerID == MainManager.actorID)
         {
            if(this._curtLayer == 10 && !TrainDoorMisController.isMis)
            {
               if(this._curtGameTpye == 0)
               {
                  TrainDoorAlert.show("恭喜您成功通关" + this._typeList[this._curtType] + "系训练师之门（普通），是否继续挑战勇者模式？",function():void
                  {
                     SocketConnection.addCmdListener(CommandID.TRAIN_DOOR_LEAVE,function():void
                     {
                        SocketConnection.removeCmdListener(CommandID.TRAIN_DOOR_LEAVE,arguments.callee);
                        _curtGameTpye = 1;
                        SocketConnection.addCmdListener(CommandID.TRAIN_DOOR_ENTER,onEnter);
                        SocketConnection.send(CommandID.TRAIN_DOOR_ENTER,_curtType,1);
                     });
                     SocketConnection.send(CommandID.TRAIN_DOOR_LEAVE);
                  },function():void
                  {
                     leaveGame();
                  });
               }
               else
               {
                  TrainDoorAlert.show("恭喜您成功通关" + this._typeList[this._curtType] + "系训练师之门（勇者），是否继续挑战其它训练师之门？",function():void
                  {
                     SocketConnection.addCmdListener(CommandID.TRAIN_DOOR_LEAVE,function():void
                     {
                        SocketConnection.removeCmdListener(CommandID.TRAIN_DOOR_LEAVE,arguments.callee);
                        ModuleManager.showModule(ClientConfig.getAppModule("TrainDoorEnterPanel"),"正在打开...");
                     });
                     SocketConnection.send(CommandID.TRAIN_DOOR_LEAVE);
                  },function():void
                  {
                     leaveGame();
                  });
               }
            }
            else if(this._curtLayer == 10 && TrainDoorMisController.isMis)
            {
               this.leaveGame();
            }
            else
            {
               KTool.getFrameMc(this._map.conLevel["doorMC"] as MovieClip,2,"",function(param1:DisplayObject):void
               {
                  var mc:MovieClip = null;
                  var o:DisplayObject = param1;
                  mc = o as MovieClip;
                  AnimateManager.playMcAnimate(mc,1,"",function():void
                  {
                     mc.gotoAndStop(mc.totalFrames);
                     (_map.conLevel["doorMC"] as MovieClip).buttonMode = true;
                     (_map.conLevel["doorMC"] as MovieClip).addEventListener(MouseEvent.CLICK,onDoor);
                     ToolTipManager.add(_map.conLevel["doorMC"] as MovieClip,"进入下一层");
                  });
               });
            }
         }
         else
         {
            this.createNPC(this._curtNPCIndex);
         }
      }
      
      private function onEnter(param1:Event) : void
      {
         SocketConnection.removeCmdListener(CommandID.TRAIN_DOOR_ENTER,this.onEnter);
         MapManager.changeLocalMap(this._mapEnterList[this._curtType][this._curtGameTpye]);
      }
      
      private function onDoor(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(479,244),function():void
         {
            ++_curtLayer;
            if(TrainDoorMisController.isMis)
            {
               TrainDoorMisController.checkRound();
            }
            else
            {
               MapManager.changeLocalMap(_mapIdList[_curtType][_curtGameTpye]);
            }
         });
      }
      
      public function initWaitRoom(param1:BaseMapProcess) : void
      {
         this._map = param1;
         ToolBarController.panel.hide();
         LevelManager.iconLevel.visible = false;
         MainManager.actorModel.hideNono();
         ToolTipManager.add(this._map.conLevel["bag_btn"],"精灵背包");
         this._map.conLevel["bag_btn"].addEventListener(MouseEvent.CLICK,this.onPetBagClick);
         (this._map.conLevel["guardMC"] as MovieClip).buttonMode = true;
         (this._map.conLevel["guardMC"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onGuard);
      }
      
      private function onGuard(param1:MouseEvent) : void
      {
         if(this._curtType >= 15)
         {
            return;
         }
         this.checkTask();
      }
      
      public function destroyWaitRoom() : void
      {
         ToolBarController.panel.show();
         LevelManager.iconLevel.visible = true;
         ToolTipManager.remove(this._map.conLevel["bag_btn"]);
         this._map.conLevel["bag_btn"].removeEventListener(MouseEvent.CLICK,this.onPetBagClick);
         (this._map.conLevel["guardMC"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onGuard);
      }
      
      public function checkTask() : void
      {
         SocketConnection.addCmdListener(CommandID.TRAIN_DOOR_CHECK,this.onCheck);
         SocketConnection.send(CommandID.TRAIN_DOOR_CHECK,this._curtType);
      }
      
      private function onCheck(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.TRAIN_DOOR_CHECK,this.onCheck);
         var _loc2_:ByteArray = param1.data as ByteArray;
         this._curtTaskIndex = _loc2_.readUnsignedInt();
         this._lastTimes = _loc2_.readUnsignedInt();
         this._lastCTimes = _loc2_.readUnsignedInt();
         if(this._curtTaskIndex == 0)
         {
            this.dialogSwitch(9);
            return;
         }
         if(this._lastTimes == 0 && this._lastCTimes == 0)
         {
            this.dialogSwitch(10);
            return;
         }
         this.checkTaskPro();
      }
      
      private function onCom(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.TRAIN_DOOR_COM,this.onCom);
      }
      
      private function checkTaskPro() : void
      {
         this._curtTaskId = this._taskIdList[this._curtType][this._curtTaskIndex][0];
         this._curtUnTaskId = this._taskIdList[this._curtType][this._curtTaskIndex][1];
         this._curtAlrTaskId = this._taskIdList[this._curtType][this._curtTaskIndex][2];
         if(TasksManager.getTaskStatus(this._curtTaskId) == TasksManager.UN_ACCEPT)
         {
            this.dialogSwitch(this._curtUnTaskId);
         }
         else if(TasksManager.getTaskStatus(this._curtTaskId) == TasksManager.ALR_ACCEPT)
         {
            this.dialogSwitch(this._curtAlrTaskId);
         }
      }
      
      public function addPetUpListener() : void
      {
         SocketConnection.addCmdListener(CommandID.TRAIN_DOOR_MSG,this.onMsg);
      }
      
      private function onMsg(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.TRAIN_DOOR_MSG,this.onMsg);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         LocalMsgController.addLocalMsg("TrainDoorLetterPanel",0,false,_loc3_);
      }
      
      public function leaveGame() : void
      {
         SocketConnection.addCmdListener(CommandID.TRAIN_DOOR_LEAVE,this.onLeave);
         SocketConnection.send(CommandID.TRAIN_DOOR_LEAVE);
      }
      
      private function onLeave(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.TRAIN_DOOR_LEAVE,this.onLeave);
         MapManager.changeMap(503);
      }
      
      public function destroy() : void
      {
         ToolBarController.panel.show();
         LevelManager.iconLevel.visible = true;
         ToolTipManager.remove(this._map.conLevel["bag_btn"]);
         this._map.conLevel["bag_btn"].removeEventListener(MouseEvent.CLICK,this.onPetBagClick);
      }
      
      private function dialogSwitch(param1:uint) : void
      {
         var id:uint = param1;
         switch(id)
         {
            case 1:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到草系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得3场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得3场胜利成功");
                     }
                  });
               }],true);
               break;
            case 2:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 3场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 3:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到草系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得10场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得10场胜利成功");
                     }
                  });
               }],true);
               break;
            case 4:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 10场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 5:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到草系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败草系擂主","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败草系擂主成功");
                     }
                  });
               }],true);
               break;
            case 6:
               NpcDialog.show(NPC.SOLIDMAN,["草系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
               break;
            case 7:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到草系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败草系擂主5次","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败草系擂主5次成功");
                     }
                  });
               }],true);
               break;
            case 8:
               NpcDialog.show(NPC.SOLIDMAN,["草系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
               break;
            case 9:
               NpcDialog.show(NPC.SOLIDMAN,["这里是训练师之门，你可以在这里尽情提升精灵等级！"],["我知道了！"],null,true);
               break;
            case 10:
               NpcDialog.show(NPC.SOLIDMAN,["勇士，你出色地证明了你的实力！这是给予你的奖励，希望你能再接再厉哦！"],["非常感谢！"],[function():void
               {
                  SocketConnection.addCmdListener(CommandID.TRAIN_DOOR_COM,onCom);
                  SocketConnection.send(CommandID.TRAIN_DOOR_COM,_curtType,_curtTaskIndex);
               }],true);
               break;
            case 11:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到火系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得3场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得3场胜利成功");
                     }
                  });
               }],true);
               break;
            case 12:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 3场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 13:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到火系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得10场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得10场胜利成功");
                     }
                  });
               }],true);
               break;
            case 14:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 10场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 15:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到火系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败火系擂主","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败火系擂主成功");
                     }
                  });
               }],true);
               break;
            case 16:
               NpcDialog.show(NPC.SOLIDMAN,["火系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
               break;
            case 17:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到火系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败火系擂主5次","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败火系擂主5次成功");
                     }
                  });
               }],true);
               break;
            case 18:
               NpcDialog.show(NPC.SOLIDMAN,["火系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
               break;
            case 21:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到超能系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得3场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得3场胜利成功");
                     }
                  });
               }],true);
               break;
            case 22:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 3场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 23:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到超能系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得10场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得10场胜利成功");
                     }
                  });
               }],true);
               break;
            case 24:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 10场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 25:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到超能系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败超能系擂主","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败超能系擂主成功");
                     }
                  });
               }],true);
               break;
            case 26:
               NpcDialog.show(NPC.SOLIDMAN,["超能系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
               break;
            case 27:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到超能系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败超能系擂主5次","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败超能系擂主5次成功");
                     }
                  });
               }],true);
               break;
            case 28:
               NpcDialog.show(NPC.SOLIDMAN,["超能系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
               break;
            case 31:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到水系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得3场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得3场胜利成功");
                     }
                  });
               }],true);
               break;
            case 32:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 3场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 33:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到水系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得10场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得10场胜利成功");
                     }
                  });
               }],true);
               break;
            case 34:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 10场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 35:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到水系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败水系擂主","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败水系擂主成功");
                     }
                  });
               }],true);
               break;
            case 36:
               NpcDialog.show(NPC.SOLIDMAN,["水系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
               break;
            case 37:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到水系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败水系擂主5次","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败水系擂主5次成功");
                     }
                  });
               }],true);
               break;
            case 38:
               NpcDialog.show(NPC.SOLIDMAN,["水系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
               break;
            case 41:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到飞行系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得3场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得3场胜利成功");
                     }
                  });
               }],true);
               break;
            case 42:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 3场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 43:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到飞行系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得10场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得10场胜利成功");
                     }
                  });
               }],true);
               break;
            case 44:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 10场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 45:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到飞行系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败飞行系擂主","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败飞行系擂主成功");
                     }
                  });
               }],true);
               break;
            case 46:
               NpcDialog.show(NPC.SOLIDMAN,["飞行系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
               break;
            case 47:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到飞行系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败飞行系擂主5次","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败飞行系擂主5次成功");
                     }
                  });
               }],true);
               break;
            case 48:
               NpcDialog.show(NPC.SOLIDMAN,["飞行系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
               break;
            case 51:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到地面系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得3场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得3场胜利成功");
                     }
                  });
               }],true);
               break;
            case 52:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 3场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 53:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到地面系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得10场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得10场胜利成功");
                     }
                  });
               }],true);
               break;
            case 54:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 10场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 55:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到地面系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败地面系擂主","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败地面系擂主成功");
                     }
                  });
               }],true);
               break;
            case 56:
               NpcDialog.show(NPC.SOLIDMAN,["地面系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
               break;
            case 57:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到地面系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败地面系擂主5次","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败地面系擂主5次成功");
                     }
                  });
               }],true);
               break;
            case 58:
               NpcDialog.show(NPC.SOLIDMAN,["地面系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
               break;
            case 61:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到机械系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得3场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得3场胜利成功");
                     }
                  });
               }],true);
               break;
            case 62:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 3场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 63:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到机械系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得10场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得10场胜利成功");
                     }
                  });
               }],true);
               break;
            case 64:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 10场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 65:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到机械系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败机械系擂主","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败机械系擂主成功");
                     }
                  });
               }],true);
               break;
            case 66:
               NpcDialog.show(NPC.SOLIDMAN,["机械系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
               break;
            case 67:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到机械系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败机械系擂主5次","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败机械系擂主5次成功");
                     }
                  });
               }],true);
               break;
            case 68:
               NpcDialog.show(NPC.SOLIDMAN,["机械系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
               break;
            case 71:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到暗影系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得3场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得3场胜利成功");
                     }
                  });
               }],true);
               break;
            case 72:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 3场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 73:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到暗影系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得10场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得10场胜利成功");
                     }
                  });
               }],true);
               break;
            case 74:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 10场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 75:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到暗影系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败暗影系擂主","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败暗影系擂主成功");
                     }
                  });
               }],true);
               break;
            case 76:
               NpcDialog.show(NPC.SOLIDMAN,["暗影系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
               break;
            case 77:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到暗影系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败暗影系擂主5次","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败暗影系擂主5次成功");
                     }
                  });
               }],true);
               break;
            case 78:
               NpcDialog.show(NPC.SOLIDMAN,["暗影系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
               break;
            case 81:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到冰系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得3场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得3场胜利成功");
                     }
                  });
               }],true);
               break;
            case 82:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 3场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 83:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到冰系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得10场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得10场胜利成功");
                     }
                  });
               }],true);
               break;
            case 84:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 10场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 85:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到冰系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败冰系擂主","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败冰系擂主成功");
                     }
                  });
               }],true);
               break;
            case 86:
               NpcDialog.show(NPC.SOLIDMAN,["冰系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
               break;
            case 87:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到冰系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败冰系擂主5次","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败冰系擂主5次成功");
                     }
                  });
               }],true);
               break;
            case 88:
               NpcDialog.show(NPC.SOLIDMAN,["冰系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
               break;
            case 91:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到光系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得3场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得3场胜利成功");
                     }
                  });
               }],true);
               break;
            case 92:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 3场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 93:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到光系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得10场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得10场胜利成功");
                     }
                  });
               }],true);
               break;
            case 94:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 10场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 95:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到光系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败光系擂主","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败光系擂主成功");
                     }
                  });
               }],true);
               break;
            case 96:
               NpcDialog.show(NPC.SOLIDMAN,["光系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
               break;
            case 97:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到光系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败光系擂主5次","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败光系擂主5次成功");
                     }
                  });
               }],true);
               break;
            case 98:
               NpcDialog.show(NPC.SOLIDMAN,["光系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
               break;
            case 101:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到龙系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得3场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得3场胜利成功");
                     }
                  });
               }],true);
               break;
            case 102:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 3场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 103:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到龙系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得10场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得10场胜利成功");
                     }
                  });
               }],true);
               break;
            case 104:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 10场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 105:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到龙系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败龙系擂主","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败龙系擂主成功");
                     }
                  });
               }],true);
               break;
            case 106:
               NpcDialog.show(NPC.SOLIDMAN,["龙系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
               break;
            case 107:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到龙系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败龙系擂主5次","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败龙系擂主5次成功");
                     }
                  });
               }],true);
               break;
            case 108:
               NpcDialog.show(NPC.SOLIDMAN,["龙系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
               break;
            case 111:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到普通系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得3场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得3场胜利成功");
                     }
                  });
               }],true);
               break;
            case 112:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 3场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 113:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到普通系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得10场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得10场胜利成功");
                     }
                  });
               }],true);
               break;
            case 114:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 10场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 115:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到普通系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败普通系擂主","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败普通系擂主成功");
                     }
                  });
               }],true);
               break;
            case 116:
               NpcDialog.show(NPC.SOLIDMAN,["普通系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
               break;
            case 117:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到普通系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败普通系擂主5次","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败普通系擂主5次成功");
                     }
                  });
               }],true);
               break;
            case 118:
               NpcDialog.show(NPC.SOLIDMAN,["普通系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
               break;
            case 121:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到战斗系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得3场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得3场胜利成功");
                     }
                  });
               }],true);
               break;
            case 122:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 3场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 123:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到战斗系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得10场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得10场胜利成功");
                     }
                  });
               }],true);
               break;
            case 124:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 10场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 125:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到战斗系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败战斗系擂主","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败战斗系擂主成功");
                     }
                  });
               }],true);
               break;
            case 126:
               NpcDialog.show(NPC.SOLIDMAN,["战斗系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
               break;
            case 127:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到战斗系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败战斗系擂主5次","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败战斗系擂主5次成功");
                     }
                  });
               }],true);
               break;
            case 128:
               NpcDialog.show(NPC.SOLIDMAN,["战斗系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
               break;
            case 131:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到电系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得3场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得3场胜利成功");
                     }
                  });
               }],true);
               break;
            case 132:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 3场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 133:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到电系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：获得10场胜利","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务获得10场胜利成功");
                     }
                  });
               }],true);
               break;
            case 134:
               NpcDialog.show(NPC.SOLIDMAN,["你还没有获得0xff0000 10场胜利 0xffffff吗？赶快去证明你的实力吧！"],["我这就去！"],null,true);
               break;
            case 135:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到电系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败电系擂主","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败电系擂主成功");
                     }
                  });
               }],true);
               break;
            case 136:
               NpcDialog.show(NPC.SOLIDMAN,["电系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
               break;
            case 137:
               NpcDialog.show(NPC.SOLIDMAN,["欢迎来到电系之门，我是这里的接待者，如果你能完成我给你的任务，我会给你相应的回报哦！"],["任务：击败电系擂主5次","我还是等会再来吧"],[function():void
               {
                  TasksManager.accept(_curtTaskId,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        SimpleAlarm.show("接受任务击败电系擂主5次成功");
                     }
                  });
               }],true);
               break;
            case 138:
               NpcDialog.show(NPC.SOLIDMAN,["电系擂主拥有着不俗的实力，如果你无法战胜他，那么尝试着提升精灵等级后再来挑战吧！"],["我这就去！"],null,true);
         }
      }
   }
}

class PrivateClass
{
    
   
   public function PrivateClass()
   {
      super();
   }
}
