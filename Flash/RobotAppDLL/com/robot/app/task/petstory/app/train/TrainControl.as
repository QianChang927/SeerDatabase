package com.robot.app.task.petstory.app.train
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.fightLevel.FightPetBagController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetBookXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.Direction;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import gs.TweenLite;
   import org.taomee.debug.DebugTrace;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class TrainControl
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _monIndex:uint;
      
      private static var _monId:uint;
      
      private static var _pet:MovieClip;
       
      
      public function TrainControl()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         _map = param1;
         ToolBarController.panel.hide();
         LevelManager.iconLevel.visible = false;
         ToolBarController.showOrHideAllUser(false);
         _map.topLevel["level_con"]["level_mc"].visible = false;
         ToolTipManager.add(_map.conLevel["btn_1"],"精灵背包");
         ToolTipManager.add(_map.conLevel["btn_2"],"精灵仓库");
         ToolTipManager.add(_map.conLevel["leaveBtn"],"离开场景");
         _map.conLevel["btn_1"].addEventListener(MouseEvent.CLICK,onMonsterHandler);
         _map.conLevel["btn_2"].addEventListener(MouseEvent.CLICK,onPetStorage);
         _map.conLevel["leaveBtn"].addEventListener(MouseEvent.CLICK,onLeaveHandler);
         if(TrainData.times == 0)
         {
            startGame();
         }
         (_map.conLevel["adMC"] as MovieClip).gotoAndStop(TrainData.ADMCFrame);
      }
      
      private static function onMonsterHandler(param1:MouseEvent) : void
      {
         FightPetBagController.show();
      }
      
      private static function onPetStorage(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("PetStorage"),"正在打开精灵仓库....");
      }
      
      private static function onLeaveHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         Alert.show("确定要离开训练室吗？",function():void
         {
            MapManager.changeMap(485);
         });
      }
      
      private static function startGame() : void
      {
         selectRoomMon();
         ++TrainData.times;
         showLevel(TrainData.times);
      }
      
      private static function showLevel(param1:uint) : void
      {
         var pram:uint = param1;
         _map.topLevel["level_con"]["level_mc"].visible = true;
         _map.topLevel["level_con"]["level_mc"].gotoAndStop(pram);
         AnimateManager.playMcAnimate(_map.topLevel["level_con"]["level_effect"],0,"",function():void
         {
            _map.topLevel["level_con"]["level_mc"].visible = false;
            createMon();
         });
      }
      
      private static function createMon() : void
      {
         var loc_1:Array = null;
         loc_1 = TrainData.monList;
         _monIndex = uint(Math.random() * loc_1.length);
         _monId = loc_1[_monIndex];
         ResourceManager.getResource(ClientConfig.getPetSwfPath(loc_1[_monIndex]),function(param1:DisplayObject):void
         {
            _pet = param1 as MovieClip;
            ToolTipManager.add(_pet,PetBookXMLInfo.getName(loc_1[_monIndex]));
            if(_map)
            {
               _map.depthLevel.addChild(_pet);
               _pet.x = 480;
               _pet.y = 40;
               _pet.scaleX = _pet.scaleY = 1.5;
               petWalkToPoint(new Point(480,170));
            }
         },"pet");
      }
      
      private static function petWalkToPoint(param1:Point) : void
      {
         var dir:String;
         var p:Point = param1;
         AnimateManager.playMcAnimate(_map.conLevel["petDoor"],1,"",function():void
         {
            DisplayUtil.stopAllMovieClip(_map.conLevel["petDoor"]);
         });
         dir = String(Direction.getStr(new Point(_pet.x,_pet.y),p));
         _pet.gotoAndStop(dir);
         TweenLite.to(_pet,2,{
            "x":p.x,
            "y":p.y,
            "onComplete":onWalkCmp
         });
      }
      
      private static function onWalkCmp() : void
      {
         DisplayUtil.stopAllMovieClip(_pet);
         _pet.buttonMode = true;
         _pet.addEventListener(MouseEvent.CLICK,onClickFight);
      }
      
      private static function onClickFight(param1:MouseEvent) : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onAlarmClickHandler);
         FightManager.fightWithBoss(PetBookXMLInfo.getName(_monId),_monIndex);
      }
      
      private static function onAlarmClickHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onAlarmClickHandler);
         GoOnGame();
      }
      
      private static function selectRoomMon() : void
      {
         switch(TrainData.roomId)
         {
            case 488:
               TrainData.monList = [10,53,523,33,133];
               TrainData.ADMCFrame = 1;
               break;
            case 489:
               TrainData.monList = [30,373,669,228,273];
               TrainData.ADMCFrame = 2;
               break;
            case 490:
               TrainData.monList = [83,198,249,362,77];
               TrainData.ADMCFrame = 3;
               break;
            case 491:
               TrainData.monList = [38,232,381,211,89];
               TrainData.ADMCFrame = 4;
               break;
            case 492:
               TrainData.monList = [35,22,43,275,25];
               TrainData.ADMCFrame = 5;
               break;
            case 493:
               TrainData.monList = [291,95,235,86,56];
               TrainData.ADMCFrame = 6;
               break;
            case 470:
               TrainData.monList = [11,14,34,127,149];
               TrainData.ADMCFrame = 7;
               break;
            case 471:
               TrainData.monList = [229,331,229,331,229];
               TrainData.ADMCFrame = 8;
               break;
            case 472:
               TrainData.monList = [20,63,109,159,185];
               TrainData.ADMCFrame = 9;
               break;
            case 473:
               TrainData.monList = [233,329,233,329,233];
               TrainData.ADMCFrame = 10;
               break;
            case 474:
               TrainData.monList = [23,26,44,154,320];
               TrainData.ADMCFrame = 11;
               break;
            case 475:
               TrainData.monList = [57,106,457,483,112];
               TrainData.ADMCFrame = 12;
               break;
            default:
               TrainData.monList = [10,53,523,33,133];
               TrainData.ADMCFrame = 1;
         }
      }
      
      private static function GoOnGame() : void
      {
         if(TrainData.totalTimes == TrainData.times)
         {
            DebugTrace.show("over");
            Alarm.show("训练结束了,你的精灵变强了哦！",function():void
            {
               MapManager.changeMap(485);
            });
         }
         else
         {
            ++TrainData.times;
            showLevel(TrainData.times);
         }
      }
      
      public static function destory() : void
      {
         ToolBarController.panel.show();
         LevelManager.iconLevel.visible = true;
         ToolBarController.showOrHideAllUser(ToolBarController.panel.panelIsShow);
         ToolTipManager.remove(_map.conLevel["btn_1"]);
         ToolTipManager.remove(_map.conLevel["btn_2"]);
         ToolTipManager.remove(_map.conLevel["leaveBtn"]);
         _map.conLevel["btn_1"].removeEventListener(MouseEvent.CLICK,onMonsterHandler);
         _map.conLevel["btn_2"].removeEventListener(MouseEvent.CLICK,onMonsterHandler);
         _map.conLevel["leaveBtn"].removeEventListener(MouseEvent.CLICK,onLeaveHandler);
         if(_pet)
         {
            ToolTipManager.remove(_pet);
            _pet.removeEventListener(MouseEvent.CLICK,onClickFight);
            _pet = null;
         }
         _map = null;
      }
   }
}
