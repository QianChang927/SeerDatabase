package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.fightLevel.FightPetBagController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.OgreXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.OgreModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class BraveChallengeController
   {
      
      private static var activeMc:MovieClip;
      
      private static var isStartGame:Boolean = false;
      
      private static var pre_stage:uint;
      
      private static var cur_stage:uint;
      
      private static var mon_num:uint;
      
      private static var chooseType:uint = 100;
      
      private static var bossfightIdForStudy:uint = 991;
      
      private static var bossfightIdForExp:uint = 965;
      
      private static var curPetList:Array;
      
      private static var _map:BaseMapProcess;
      
      private static var _model:Array;
      
      private static var _currentModel:OgreModel;
       
      
      public function BraveChallengeController()
      {
         super();
      }
      
      public static function taskStart() : void
      {
         if(BufferRecordManager.getMyState(1093))
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ADBraveChallengeMainPanel"));
         }
         else
         {
            NpcDialog.show(NPC.JUSTIN,["我知道你是最强大的战士，我们终于击败了索伦森，但新的敌人和挑战即将来临。"],["是！站长！一切听您吩咐！","这可不关我什么事……"],[function():void
            {
               getMc("braveChallengeMC",taskPre);
            }]);
         }
      }
      
      private static function taskPre() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 19
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function getMc(param1:String, param2:Function) : void
      {
         var mcName:String = param1;
         var func:Function = param2;
         LevelManager.closeMouseEvent();
         ResourceManager.getResource(ClientConfig.getMapAnimate(mcName),function(param1:MovieClip):void
         {
            activeMc = param1;
            MapManager.currentMap.topLevel.addChild(activeMc);
            func();
         },"ani",3,false);
      }
      
      public static function startGame(param1:uint) : void
      {
         chooseType = param1;
         if(chooseType == 0)
         {
            curPetList = [2211,2211,2211,2211,2211,2211];
         }
         else
         {
            curPetList = [2211,2211,2211,2211,2211,2211,2211];
         }
         MapManager.changeMap(986);
         SocketConnection.addCmdListener(CommandID.BRAVECHALLENGE_INFO,getInfo);
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         var onCallBack:Function;
         var fl:uint = 0;
         var m:BaseMapProcess = param1;
         _map = m;
         ToolBarController.panel.hide();
         LevelManager.iconLevel.visible = false;
         ToolBarController.showOrHideAllUser(false);
         _map.conLevel["Brand"].gotoAndStop(chooseType + 1);
         if(chooseType == 0)
         {
            MapObjectControl.addIgnore("studyMachine");
         }
         else
         {
            MapObjectControl.removeIgnore("studyMachine");
         }
         _map.conLevel["level_mc"].visible = false;
         MapListenerManager.add(_map.conLevel["leaveBtn"],onEndGame,"离开场景");
         MapListenerManager.add(_map.conLevel["bagBtn"],onOpenBag,"打开背包");
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onAlarmClickHandler);
         MapManager.addEventListener(MapEvent.MAP_MOUSE_DOWN,onMapDown);
         if(!isStartGame)
         {
            onCallBack = function(param1:SocketEvent):void
            {
               var _loc2_:ByteArray = param1.data as ByteArray;
               pre_stage = cur_stage;
               cur_stage = _loc2_.readUnsignedInt();
               mon_num = _loc2_.readUnsignedInt();
               if(pre_stage == 0)
               {
                  showLevel();
               }
               isStartGame = true;
            };
            if(chooseType == 0)
            {
               fl = 0;
            }
            else
            {
               fl = 1;
            }
            SocketConnection.sendWithCallback2(CommandID.BRAVECHALLENGE_MAIN,onCallBack,[0,fl]);
         }
      }
      
      private static function getInfo(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         pre_stage = cur_stage;
         cur_stage = _loc2_.readUnsignedInt();
         mon_num = _loc2_.readUnsignedInt();
         if(pre_stage == 0)
         {
            showLevel();
         }
      }
      
      private static function onAlarmClickHandler(param1:PetFightEvent) : void
      {
         if(cur_stage > curPetList.length)
         {
            endGame();
         }
         else if(pre_stage < cur_stage)
         {
            showLevel();
         }
         else
         {
            creatMonster();
         }
      }
      
      private static function onOpenBag(param1:MouseEvent = null) : void
      {
         FightPetBagController.show(true);
      }
      
      private static function onEndGame(param1:MouseEvent = null) : void
      {
         var ss:String = null;
         var e:MouseEvent = param1;
         if(chooseType == 0)
         {
            ss = "经验号";
         }
         else
         {
            ss = "学习力号";
         }
         if(SystemTimerManager.sysBJDate.day == 0 || SystemTimerManager.sysBJDate.day == 6)
         {
            Alert.show("真的要离开" + ss + "吗？周末每天有三次进入机会哦！",function():void
            {
               endGame();
            });
         }
         else
         {
            Alert.show("真的要离开" + ss + "吗？每天只有两次进入机会哦！",function():void
            {
               endGame();
            });
         }
      }
      
      public static function endGame() : void
      {
         var fl:uint = 0;
         var onCallBack:Function = null;
         onCallBack = function(param1:SocketEvent):void
         {
            chooseType = 100;
            curPetList = null;
            MapManager.changeMap(985);
            Alarm.show("训练结束了，你的精灵变强了!");
            isStartGame = false;
            pre_stage = 0;
            cur_stage = 0;
            mon_num = 0;
         };
         if(chooseType == 0)
         {
            fl = 0;
         }
         else
         {
            fl = 1;
         }
         SocketConnection.sendWithCallback2(CommandID.BRAVECHALLENGE_MAIN,onCallBack,[1,fl]);
         SocketConnection.removeCmdListener(CommandID.BRAVECHALLENGE_INFO,getInfo);
      }
      
      private static function showLevel() : void
      {
         var t:uint = 0;
         _map.conLevel["level_mc"].visible = true;
         _map.conLevel["level_mc"].gotoAndStop(cur_stage);
         t = setTimeout(function():void
         {
            clearTimeout(t);
            if(_map != null)
            {
               _map.conLevel["level_mc"].visible = false;
               creatMonster();
            }
         },2500);
      }
      
      private static function creatMonster() : void
      {
         var _loc2_:uint = 0;
         var _loc3_:Point = null;
         var _loc4_:OgreModel = null;
         var _loc1_:Array = OgreXMLInfo.getOgreList(986).concat();
         _model = [];
         var _loc5_:uint = 0;
         while(_loc5_ < mon_num)
         {
            _loc3_ = _loc1_[_loc5_];
            (_loc4_ = new OgreModel(_loc5_ + 10000)).name = PetXMLInfo.getName(curPetList[_loc5_]);
            _loc4_.show(curPetList[_loc5_],_loc3_);
            _loc4_.addEventListener(MouseEvent.CLICK,onOgreClick);
            _model.push(_loc4_);
            _loc5_++;
         }
      }
      
      private static function onOgreClick(param1:MouseEvent) : void
      {
         _currentModel = param1.currentTarget as OgreModel;
         MainManager.actorModel.walkAction(_currentModel.pos);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,onEnter);
      }
      
      private static function onEnter(param1:RobotEvent) : void
      {
         var _loc2_:uint = 0;
         if(_currentModel != null)
         {
            if(Point.distance(MainManager.actorModel.pos,_currentModel.pos) < 20)
            {
               if(chooseType == 0)
               {
                  _loc2_ = bossfightIdForExp + cur_stage;
               }
               else
               {
                  _loc2_ = bossfightIdForStudy + cur_stage + 7 * (chooseType - 1);
               }
               FightManager.fightNoMapBoss(PetXMLInfo.getName(_currentModel.id),_loc2_);
            }
         }
      }
      
      private static function onMapDown(param1:MapEvent) : void
      {
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onEnter);
      }
      
      public static function destroy() : void
      {
         var _loc1_:OgreModel = null;
         MapObjectControl.removeIgnore("studyMachine");
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onAlarmClickHandler);
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onEnter);
         MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,onMapDown);
         ToolBarController.panel.show();
         LevelManager.iconLevel.visible = true;
         ToolBarController.showOrHideAllUser(ToolBarController.panel.panelIsShow);
         if(_model != null)
         {
            for each(_loc1_ in _model)
            {
               _loc1_.removeEventListener(MouseEvent.CLICK,onOgreClick);
               _loc1_.destroy();
               _loc1_ = null;
            }
         }
         _model = null;
         _map = null;
      }
   }
}
