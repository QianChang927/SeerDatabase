package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class WhiteKingVSShandowWingController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMc:MovieClip;
      
      private static var _fightTimes:uint;
      
      private static var _isCdTime:Boolean;
      
      private static var left_time:int;
      
      private static const CDTime:uint = 300;
      
      public static const TARGET_MAP:uint = 1103;
      
      private static const beginDate:Date = new Date(2015,7,7);
      
      private static const endDate:Date = new Date(2015,7,13);
      
      private static const activeTimes:Array = [[12,13],[19,20]];
      
      public static const INCOMING:String = "INCOMING";
      
      public static const PAST:String = "PAST";
      
      public static const ACTIVE:String = "ACTIVE";
      
      public static const DORMANT:String = "DORMANT";
      
      public static const ERROTIME:String = "ERROTIME";
      
      private static var _widget:MovieClip;
       
      
      public function WhiteKingVSShandowWingController()
      {
         super();
      }
      
      public static function addMsgAndIcon() : void
      {
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onGetMsgTime);
      }
      
      private static function onGetMsgTime(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onGetMsgTime);
         if(activeStatus != ERROTIME || activeStatus != PAST)
         {
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onIconTimer);
            onIconTimer();
         }
      }
      
      private static function onIconTimer(param1:SocketEvent = null) : void
      {
         switch(activeStatus)
         {
            case PAST:
               destroyWidget();
               break;
            case ACTIVE:
               if(Boolean(_widget) && Boolean(DisplayUtil.hasParent(_widget)))
               {
                  updateWidget();
               }
               else
               {
                  loadWidget();
               }
               break;
            default:
               if(canBroadcast)
               {
                  if(Boolean(_widget) && Boolean(DisplayUtil.hasParent(_widget)))
                  {
                     updateWidget();
                  }
                  else
                  {
                     loadWidget();
                  }
                  return;
               }
               if(Boolean(_widget) && Boolean(DisplayUtil.hasParent(_widget)))
               {
                  destroyWidget();
               }
               break;
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
      
      private static function onGo(param1:MouseEvent) : void
      {
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            MapManager.changeMap(TARGET_MAP);
         }
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            return;
         }
         if(activeStatus == ERROTIME)
         {
            return;
         }
         _map = map;
         ResourceManager.getResource(ClientConfig.getMapAnimate("WhiteKingVSShandowWing_mapAnimate"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.conLevel.addChild(taskMc);
            addEvents();
            checkActivity();
         });
      }
      
      private static function addEvents() : void
      {
         taskMc.addEventListener(MouseEvent.CLICK,onDialog);
      }
      
      private static function removeEvents() : void
      {
         taskMc.removeEventListener(MouseEvent.CLICK,onDialog);
      }
      
      private static function onDialog(param1:MouseEvent) : void
      {
         var _loc3_:uint = 0;
         var _loc4_:String = null;
         var _loc2_:String = param1.target.name as String;
         if(_loc2_ == "bossBtn_0" || _loc2_ == "bossBtn_1")
         {
            if(activeStatus == ACTIVE)
            {
               _loc3_ = uint(_loc2_.split("_")[1]);
               if(_fightTimes % 2 == _loc3_)
               {
                  startFight(_loc3_);
               }
            }
            else
            {
               switch(activeStatus)
               {
                  case INCOMING:
                     _loc4_ = "12:00-14:00";
                     break;
                  case DORMANT:
                     _loc4_ = "19:00-21:00";
                     break;
                  case PAST:
                     _loc4_ = "明天12:00-14:00";
               }
               if(_loc2_ == "bossBtn_0")
               {
                  NpcDialog.show(NPC.HASINA,["我以清风白帝之名，坚守此关！无论谁胆敢反抗威斯克大人，我会用狂风将其埋葬！"],[_loc4_ + "我将让你们感受到五帝的强大！"]);
               }
               else
               {
                  NpcDialog.show(NPC.BAOFENGNV_SUPER,["自古以来邪不胜正，我会拼尽全力捍卫X战队的荣耀！昊希娜，接受暴风的制裁吧！"],[_loc4_ + "我一定会让昊希娜明白我才是暴风的主宰！"]);
               }
            }
         }
      }
      
      private static function checkActivity() : void
      {
         switch(activeStatus)
         {
            case ACTIVE:
               startActivity();
               break;
            case PAST:
               finishAcitivty();
               break;
            default:
               waitActivity();
         }
      }
      
      private static function waitActivity() : void
      {
         stopAtChildFrame(1,1);
      }
      
      private static function startActivity() : void
      {
         onRefreshData();
      }
      
      private static function finishAcitivty() : void
      {
         stopAtChildFrame(1,1);
      }
      
      private static function stopAtChildFrame(param1:uint, param2:uint = 0) : void
      {
         var frameIndex:uint = param1;
         var subFrameIndex:uint = param2;
         KTool.getFrameMc(taskMc,frameIndex,"mc",function(param1:MovieClip):void
         {
            if(subFrameIndex != 0)
            {
               param1.gotoAndStop(subFrameIndex);
            }
            else
            {
               param1.gotoAndStop(param1.totalFrames);
            }
         });
      }
      
      private static function addYellowArrow(param1:int) : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         if(param1 % 2 == 0)
         {
            CommonUI.addYellowArrow(_map.topLevel,174,211,0);
         }
         else
         {
            CommonUI.addYellowArrow(_map.topLevel,683,186,0);
         }
      }
      
      public static function onRefreshData() : void
      {
         KTool.getMultiValue([15755,15756,5880],function(param1:Array):void
         {
            var left:uint;
            var index:uint = 0;
            var frame:uint = 0;
            var val:Array = param1;
            var isAm:Boolean = activeTimes[0].indexOf(SystemTimerManager.sysBJDate.hours) > -1;
            _fightTimes = isAm ? uint(val[0]) : uint(val[1]);
            SystemTimerManager.removeTickFun(onCountDown);
            if(_fightTimes >= 24)
            {
               index = 3;
               if(isLastDay)
               {
                  index = 4;
               }
               playAnmiate(index,function():void
               {
                  stopAtChildFrame(1,1);
                  DisplayUtil.removeForParent(taskMc);
               });
               return;
            }
            left = SystemTimerManager.time - val[2] > 0 ? uint(SystemTimerManager.time - val[2]) : 0;
            if(left < CDTime)
            {
               stopAtChildFrame(1,1);
               left_time = CDTime - left;
               SystemTimerManager.addTickFun(onCountDown);
            }
            else
            {
               left_time = 0;
               frame = _fightTimes % 2 + 1;
               playAnmiate(frame,function():void
               {
                  stopAtChildFrame(1,1);
                  addYellowArrow(_fightTimes);
               });
            }
         });
      }
      
      private static function onCountDown() : void
      {
         if(left_time > 0)
         {
            --left_time;
         }
         else
         {
            onRefreshData();
            SystemTimerManager.removeTickFun(onCountDown);
         }
      }
      
      public static function startFight(param1:uint) : void
      {
         if(_fightTimes >= 24)
         {
            Alarm2.show("你本次的挑战次数已经用完了！");
            return;
         }
         if(left_time > 0)
         {
            Alarm2.show("请等冷却时间结束再进行挑战！");
            return;
         }
         FightManager.fightNoMapBoss("",4525 + param1);
      }
      
      private static function playAnmiate(param1:uint, param2:Function = null) : void
      {
         var frame:uint = param1;
         var fun:Function = param2;
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         LevelManager.iconLevel.visible = false;
         AnimateManager.playMcAnimate(taskMc,frame,"mc",function():void
         {
            KTool.showMapAllPlayerAndMonster();
            _map.depthLevel.visible = true;
            LevelManager.iconLevel.visible = true;
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      private static function get canBroadcast() : Boolean
      {
         var _loc1_:Number = Number(SystemTimerManager.sysBJDate.time);
         var _loc2_:Date = new Date(_loc1_);
         if(_loc2_.date < beginDate.date && _loc2_.date > endDate.date)
         {
            return false;
         }
         if((_loc2_.hours + 1 == activeTimes[0][0] || _loc2_.hours + 1 == activeTimes[1][0]) && SystemTimerManager.sysBJDate.minutes > 49)
         {
            return true;
         }
         return false;
      }
      
      public static function get haveCloth() : Boolean
      {
         return KTool.getIsClothSuit(341);
      }
      
      public static function get activeStatus() : String
      {
         var _loc1_:Date = new Date(beginDate.fullYear,beginDate.month,beginDate.date,activeTimes[0][0]);
         var _loc2_:Date = new Date(endDate.fullYear,endDate.month,endDate.date,activeTimes[activeTimes.length - 1][1]);
         var _loc3_:Number = Number(SystemTimerManager.sysBJDate.time);
         var _loc4_:Date;
         if((_loc4_ = new Date(_loc3_)).date < _loc1_.date || _loc4_.date > _loc2_.date)
         {
            return ERROTIME;
         }
         if(_loc4_.hours < activeTimes[0][0])
         {
            return INCOMING;
         }
         if(_loc4_.hours > activeTimes[0][1] && _loc4_.hours < activeTimes[1][0])
         {
            return DORMANT;
         }
         if(_loc4_.hours > activeTimes[1][1])
         {
            return PAST;
         }
         return ACTIVE;
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      private static function get isLastDay() : Boolean
      {
         var _loc1_:CronTimeVo = new CronTimeVo("*","*",endDate.date.toString(),(endDate.month + 1).toString(),"*",endDate.fullYear.toString());
         if(_loc1_.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.INCOMING)
         {
            return false;
         }
         return true;
      }
      
      public static function destroy() : void
      {
         SystemTimerManager.removeTickFun(onCountDown);
         if(_map)
         {
            removeEvents();
            DisplayUtil.removeForParent(taskMc);
            CommonUI.removeYellowExcal(_map.topLevel);
            _map = null;
            _taskMc = null;
         }
      }
   }
}
